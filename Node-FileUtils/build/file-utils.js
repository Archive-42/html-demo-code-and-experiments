"use strict";
var FS = require("fs"),
    PATH = require("path"),
    UTIL = require("util"),
    CRYPTO = require("crypto"),
    SLASH = PATH.normalize("/"),
    NULL_PATH_ERROR = new Error("Null path."),
    SECURITY_READ_ERROR = new Error("Security error, cannot read."),
    SECURITY_WRITE_ERROR = new Error("Security error, cannot write."),
    SECURITY_READ_WRITE_ERROR = new Error("Security error, cannot read nor write."),
    SM = null,
    updateFileProperties = function(a, b) {
        a._path = null, a._usablePath = null, a._isAbsolute = !1;
        if (b === undefined || b === null) return;
        b = PATH.normalize(b);
        var c = b.indexOf(":") + 1,
            d = b.substring(0, c);
        b = b.substring(c), b[0] === "/" && b[1] === "/" && (b = b.replace(/[\/]/g, "\\"), b = b.substring(0, b.length - 1)), a._isAbsolute = b[0] === SLASH, a._path = d + b, a._usablePath = a._isAbsolute ? a._path : d + PATH.join(a._relative, b)
    },
    File = function(a) {
        var b = process.mainModule.filename,
            c = b.substring(0, b.lastIndexOf(SLASH)),
            d = PATH.relative(process.cwd(), c),
            e = this;
        this._relative = d, this._removeOnExit = !1, this._removeOnExitCallback = function(a) {
            if (!e._removeOnExit) return;
            try {
                var b = removeSynchronous(e);
                b instanceof Error ? a && a(b, !1) : a && a(null, b)
            } catch (c) {
                a && a(c)
            }
        }, this._removeOnExitCallback.first = !0, updateFileProperties(this, a)
    },
    checkPermission = function(a, b, c, d) {
        FS.stat(a, function(a, d) {
            a ? c(a, !1) : c(null, !!(b & parseInt((d.mode & parseInt("777", 8)).toString(8)[0])))
        })
    },
    setPermission = function(a, b, c, d) {
        FS.stat(a, function(e, f) {
            if (e) d && d(e, !1);
            else {
                var g = (f.mode & parseInt("777", 8)).toString(8),
                    h = parseInt(g[0]),
                    i = !!(h & b);
                if (i && !c || !i && c) {
                    var j = c ? b : -b;
                    FS.chmod(a, j + h + g.substring(1), function(a) {
                        d && d(a, !a)
                    })
                } else d && d(null, !1)
            }
        })
    };
File.prototype.canExecute = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, !1);
    checkPermission(this._usablePath, 1, a, this)
}, File.prototype.canRead = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, !1);
    checkPermission(this._usablePath, 4, a)
}, File.prototype.canWrite = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, !1);
    checkPermission(this._usablePath, 2, a)
}, File.prototype.checksum = function(a, b, c) {
    arguments.length === 2 && typeof b == "function" && (c = b, b = "hex");
    if (!c) return;
    c = c.bind(this);
    if (!this._path) return c(NULL_PATH_ERROR, null);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return c(SECURITY_READ_ERROR, null);
    var d = this;
    FS.stat(this._usablePath, function(e, f) {
        if (e) c(e, null);
        else if (f.isDirectory()) c("The abstract path is a directory.", null);
        else if (f.isFile()) {
            a = CRYPTO.createHash(a);
            var g = FS.ReadStream(d._usablePath);
            g.on("error", function(a) {
                c(a, null)
            }), g.on("data", function(b) {
                a.update(b)
            }), g.on("end", function() {
                c(null, a.digest(b))
            })
        }
    })
}, File.prototype.contains = function(a, b) {
    this.search(a, function(a, c) {
        a ? b(a, !1) : b(null, c.length !== 0)
    })
}, File.prototype.copy = function(a, b, c) {
    var d = arguments.length;
    d === 1 ? b = !1 : d === 2 && typeof b == "function" && (c = b, b = !1), c && (c = c.bind(this));
    if (!this._path) {
        c && c(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ_WRITE.id)) {
        c && c(SECURITY_READ_WRITE_ERROR, !1);
        return
    }
    a instanceof File || (a = new File(a));
    var e = a._path;
    a = a._usablePath;
    var f = this,
        g = function() {
            var b = FS.createWriteStream(a);
            b.on("error", function(a) {
                c && c(a, !1)
            }), b.once("open", function(a) {
                UTIL.pump(FS.createReadStream(f._usablePath), b, function(a) {
                    a = a === undefined ? null : a, c && c(a, !a)
                })
            })
        },
        h = function() {
            FS.mkdir(a, function(a) {
                a ? c && c(a, !1) : FS.readdir(f._usablePath, function(a, b) {
                    if (a) c && c(a, !1);
                    else {
                        var d = b.length,
                            g = 0;
                        b.forEach(function(a) {
                            (new File(PATH.join(f._path, a))).copy(PATH.join(e, a), function(a, b) {
                                a ? c && c(a, !1) : (g++, g === d && c && c(null, !0))
                            })
                        })
                    }
                })
            })
        };
    FS.stat(this._usablePath, function(d, f) {
        d ? c && c(d, !1) : PATH.exists(a, function(a) {
            a && !b ? c && c(null, !1) : f.isFile() ? g() : f.isDirectory() && (a && b ? (new File(e)).remove(function(a, b) {
                a ? c && c(a, !1) : h()
            }) : h())
        })
    })
}, File.prototype.createDirectory = function(a) {
    a && (a = a.bind(this));
    if (!this._path) {
        a && a(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        a && a(SECURITY_WRITE_ERROR, !1);
        return
    }
    var b = function(a, c) {
        a.exists(function(d) {
            if (d) return c(null, !1);
            FS.mkdir(a.getPath(), function(d) {
                if (!d) return c(null, !0);
                var e = a.getParentFile();
                if (e === null) return c(null, !1);
                b(e, function(b, d) {
                    d ? FS.mkdir(a.getPath(), function(a) {
                        c(a, !a)
                    }) : e.exists(function(b) {
                        if (!b) return c(null, !1);
                        FS.mkdir(a.getPath(), function(a) {
                            c(a, !a)
                        })
                    })
                })
            })
        })
    };
    b(this.getAbsoluteFile(), function(b, c) {
        a && a(b, c)
    })
}, File.prototype.createNewFile = function(a) {
    a && (a = a.bind(this));
    if (!this._path) {
        a && a(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        a && a(SECURITY_WRITE_ERROR, !1);
        return
    }
    var b = this._usablePath;
    PATH.exists(b, function(c) {
        if (c) a && a(null, !1);
        else {
            var d = FS.createWriteStream(b);
            d.on("error", function(b) {
                a && a(b, !1)
            }), d.on("close", function() {
                a && a(null, !0)
            }), d.end()
        }
    })
}, File.createTempFile = function(a, b) {
    arguments.length === 1 && typeof a == "function" && (b = a, a = null);
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        b && b(SECURITY_WRITE_ERROR, !1);
        return
    }
    var c = "",
        d = "",
        e = ".";
    a && (c = a.prefix ? a.prefix : c, d = a.suffix ? a.suffix : d, e = a.directory ? a.directory.toString() : e);
    var f = Math.floor(Math.random() * 1e12),
        g = new File(PATH.join(e, c + f + d));
    PATH.exists(g._usablePath, function(c) {
        if (c) File.createTempFile(a, b);
        else {
            g.removeOnExit();
            var d = FS.createWriteStream(g._usablePath);
            d.on("error", function(a) {
                b && b(a, null)
            }), d.on("close", function() {
                b && b(null, g)
            }), d.end()
        }
    })
}, File.prototype.equals = function(a) {
    var b = a instanceof File ? a.getAbsolutePath() : (new File(a)).getAbsolutePath();
    return b === this.getAbsolutePath()
}, File.prototype.exists = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, !1);
    PATH.exists(this._usablePath, function(b) {
        a(b)
    })
}, File.prototype.getAbsoluteFile = function() {
    return new File(this.getAbsolutePath())
}, File.prototype.getAbsolutePath = function() {
    return this._path ? this._isAbsolute ? this._path : PATH.join(PATH.dirname(process.mainModule.filename), this._path) : null
}, File.prototype.getName = function() {
    return this._path ? PATH.basename(this._path) : null
}, File.prototype.getOriginalPath = function() {
    return this._path
}, File.prototype.getParent = function() {
    if (!this._path) return null;
    var a = this._path.lastIndexOf(SLASH);
    return a === -1 ? null : a === 0 ? this._path === SLASH ? null : "/" : this._path.substring(0, a)
}, File.prototype.getParentFile = function() {
    var a = this.getParent();
    return a === null ? null : new File(a)
}, File.prototype.getPath = function() {
    return this._usablePath
}, File.prototype.getPermissions = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, null);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, null);
    FS.stat(this._usablePath, function(b, c) {
        b ? a(b, null) : a(null, (c.mode & parseInt("777", 8)).toString(8))
    })
}, File.prototype.isAbsolute = function() {
    return this._isAbsolute
}, File.prototype.isDirectory = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, !1);
    FS.stat(this._usablePath, function(b, c) {
        b ? a(b, !1) : a(null, c.isDirectory())
    })
}, File.prototype.isFile = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, !1);
    FS.stat(this._usablePath, function(b, c) {
        b ? a(b, !1) : a(null, c.isFile())
    })
}, File.prototype.isHidden = function() {
    return this.getName()[0] === "."
}, File.prototype.lastModified = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, null);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, null);
    FS.stat(this._usablePath, function(b, c) {
        b ? a(b, null) : a(null, c.mtime)
    })
}, File.prototype.list = function(a, b) {
    var c = arguments.length;
    if (c === 0) return;
    c === 1 && typeof a == "function" && (b = a, a = null);
    if (!b) return;
    b = b.bind(this);
    if (!this._path) return NULL_PATH_ERROR, null;
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return b(SECURITY_READ_ERROR, null);
    var d = this;
    FS.stat(this._usablePath, function(c, e) {
        if (c) b(c, null);
        else if (e.isFile()) b("The path is not a directory.", null);
        else if (e.isDirectory()) {
            var f = function(a, b, c, d, e) {
                var g = function(a) {
                    var c = [],
                        e;
                    return a.forEach(function(a) {
                        d(a, PATH.join(b, a)) && c.push(a)
                    }), c
                };
                FS.readdir(a, function(h, i) {
                    if (h) return e(h, null);
                    d && (i = g(i));
                    var j = i.length,
                        k = 0,
                        l = function() {
                            return k === j ? (e(null, c), !0) : !1
                        };
                    if (l()) return;
                    i.forEach(function(g) {
                        var h = PATH.join(b, g);
                        FS.stat(PATH.join(a, g), function(b, i) {
                            if (b) return e(b, null);
                            i.isFile() ? (c[g] = h, k++, l()) : i.isDirectory() && (c[g] = {}, f(PATH.join(a, g), h, c[g], d, function(a, b) {
                                if (a) return e(a, null);
                                k++, l()
                            }))
                        })
                    })
                })
            };
            f(d._usablePath, d._path, {}, a, function(a, c) {
                b(a, c)
            })
        }
    })
}, File.prototype.listFiles = function(a, b) {
    var c = arguments.length;
    if (c === 0) return;
    c === 1 && typeof a == "function" && (b = a, a = null);
    if (!b) return;
    b = b.bind(this);
    var d = function(a) {
        for (var b in a) {
            var c = a[b];
            typeof c == "string" ? a[b] = new File(c) : d(c)
        }
    };
    this.list(a, function(a, c) {
        a ? b(a, null) : (d(c), b(null, c))
    })
}, File.protect = function(a) {
    SM = a
}, File.prototype.remove = function(a) {
    a && (a = a.bind(this));
    if (!this._path) {
        a && a(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        a && a(SECURITY_WRITE_ERROR, !1);
        return
    }
    var b = this;
    FS.stat(this._usablePath, function(c, d) {
        if (c) {
            a && a(c, !1);
            return
        }
        d.isFile() ? FS.unlink(b._usablePath, function(b) {
            a && (b ? a(b, !1) : a(null, !0))
        }) : d.isDirectory() && FS.readdir(b._usablePath, function(c, d) {
            if (c) {
                a && a(c, !1);
                return
            }
            var e = d.length,
                f = 0,
                g = function() {
                    return e === f ? (FS.rmdir(b._usablePath, function(b) {
                        a && (b ? a(b, !1) : a(null, !0))
                    }), !0) : !1
                };
            if (g()) return;
            for (var h in d)(new File(PATH.join(b._path, d[h]))).remove(function(b, c) {
                b ? a && a(b, !1) : (f++, g())
            })
        })
    })
};
var removeSynchronous = function(a) {
    if (!a._path) return !1;
    if (!(checkSecurity(a._usablePath) & SecurityManager.WRITE.id)) return SECURITY_WRITE_ERROR;
    if (!PATH.existsSync(a._usablePath)) return !1;
    var b = FS.statSync(a._usablePath);
    if (b.isFile()) FS.unlinkSync(a._usablePath);
    else if (b.isDirectory()) {
        var c = FS.readdirSync(a._usablePath);
        for (var d in c) removeSynchronous(new File(PATH.join(a._path, c[d])));
        FS.rmdirSync(a._usablePath)
    }
    return !0
};
File.prototype.removeOnExit = function(a, b) {
    var c = arguments.length;
    c === 0 ? a = !0 : c === 1 && typeof a == "function" && (b = a, a = !0), b && (b = b.bind(this)), this._removeOnExit = a;
    if (a && this._removeOnExitCallback.first) {
        this._removeOnExitCallback.first = !1;
        var d = this;
        process.on("exit", function() {
            d._removeOnExitCallback(b)
        })
    }
}, File.prototype.rename = function(a, b, c) {
    var d = arguments.length;
    d === 1 ? b = !1 : d === 2 && typeof b == "function" && (c = b, b = !1), c && (c = c.bind(this));
    if (!this._path) {
        c && c(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        c && c(SECURITY_WRITE_ERROR, !1);
        return
    }
    a instanceof File || (a = new File(a));
    var e = a._path;
    a = a._usablePath;
    var f = this,
        g = function() {
            FS.rename(f._usablePath, a, function(a) {
                a ? c && c(a, !1) : (updateFileProperties(f, e), c && c(null, !0))
            })
        };
    if (b) g();
    else {
        var f = this;
        PATH.exists(a, function(a) {
            a ? c && c(null, !1) : g()
        })
    }
}, File.prototype.search = function(a, b) {
    if (!b) return;
    b = b.bind(this);
    if (!this._path) return b(NULL_PATH_ERROR, !1);
    a = a instanceof File ? a.getName() : a;
    var c = [];
    this.list(function(b, d) {
        return b === a && c.push(d), !0
    }, function(a) {
        a ? b(a, null) : b(null, c)
    })
}, File.prototype.searchFiles = function(a, b) {
    if (!b) return;
    b = b.bind(this);
    if (!this._path) return b(NULL_PATH_ERROR, !1);
    this.search(a, function(a, c) {
        if (a) b(a, null);
        else {
            for (var d in c) c[d] = new File(c[d]);
            b(null, c)
        }
    })
}, File.prototype.setExecutable = function(a, b) {
    var c = arguments.length;
    c === 0 ? a = !0 : c === 1 && typeof a == "function" && (b = a, a = !0), b && (b = b.bind(this));
    if (!this._path) {
        b && b(NULL_PATH_ERROR, !1);
        return
    }
    process.platform === "win32" && b && b(null, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        b && b(SECURITY_WRITE_ERROR, !1);
        return
    }
    setPermission(this._usablePath, 1, a, b)
}, File.prototype.setPermissions = function(a, b) {
    b && (b = b.bind(this));
    if (!this._path) {
        b && b(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        b && b(SECURITY_WRITE_ERROR, !1);
        return
    }
    FS.chmod(this._usablePath, a, function(a) {
        b && b(a, !a)
    })
}, File.prototype.setReadable = function(a, b) {
    var c = arguments.length;
    c === 0 ? a = !0 : c === 1 && typeof a == "function" && (b = a, a = !0), b && (b = b.bind(this));
    if (!this._path) {
        b && b(NULL_PATH_ERROR, !1);
        return
    }
    process.platform === "win32" && b && b(null, !1);
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        b && b(SECURITY_WRITE_ERROR, !1);
        return
    }
    setPermission(this._usablePath, 4, a, b)
}, File.prototype.setReadOnly = function(a) {
    a && (a = a.bind(this));
    if (!this._path) {
        a && a(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        a && a(SECURITY_WRITE_ERROR, !1);
        return
    }
    FS.chmod(this._usablePath, "444", function(b) {
        a(b, !b)
    })
}, File.prototype.setWritable = function(a, b) {
    var c = arguments.length;
    c === 0 ? a = !0 : c === 1 && typeof a == "function" && (b = a, a = !0), b && (b = b.bind(this));
    if (!this._path) {
        b && b(NULL_PATH_ERROR, !1);
        return
    }
    if (!(checkSecurity(this._usablePath) & SecurityManager.WRITE.id)) {
        b && b(SECURITY_WRITE_ERROR, !1);
        return
    }
    setPermission(this._usablePath, 2, a, b)
}, File.prototype.size = function(a) {
    if (!a) return;
    a = a.bind(this);
    if (!this._path) return a(NULL_PATH_ERROR, 0);
    if (!(checkSecurity(this._usablePath) & SecurityManager.READ.id)) return a(SECURITY_READ_ERROR, 0);
    var b = 0,
        c = this,
        d = function(a) {
            FS.stat(c._usablePath, function(d, e) {
                d ? a(d, null) : e.isFile() ? a(null, e.size) : e.isDirectory() && FS.readdir(c._usablePath, function(d, e) {
                    var f = e.length,
                        g = 0,
                        h = function() {
                            return g === f ? (a(null, b), !0) : !1
                        };
                    if (h()) return;
                    e.forEach(function(d) {
                        (new File(PATH.join(c._path, d))).size(function(c, d) {
                            c ? a(c, 0) : (b += d, g++, h())
                        })
                    })
                })
            })
        };
    d(a)
}, File.prototype.toString = function() {
    return this._path
};
var SecurityManager = function() {
    this._allow = [{
        directory: (new File(".")).getAbsolutePath(),
        permissions: SecurityManager.READ_WRITE
    }], this._deny = []
};
SecurityManager.NONE = Object.freeze({
    id: 0
}), SecurityManager.READ = Object.freeze({
    id: 1
}), SecurityManager.WRITE = Object.freeze({
    id: 2
}), SecurityManager.READ_WRITE = Object.freeze({
    id: 3
});
var checkSecurity = function(a) {
        if (!SM) return SecurityManager.READ_WRITE.id;
        a = getAbsolutePath(a).replace(/\\/g, "/");
        var b = function(a) {
                var b = a ^ SecurityManager.READ_WRITE.id;
                for (var c in SecurityManager) {
                    c = SecurityManager[c];
                    if (c.id === b) return c.id
                }
            },
            c = function(c, d) {
                var e = {
                    dir: null,
                    perm: null
                };
                for (var f in c) {
                    var g = c[f],
                        h = g.directory.replace(/\\/g, "/"),
                        i = new RegExp("^" + h);
                    a.match(i) && (!e.dir || !e.dir.match(i)) && (e.dir = h, e.perm = d ? b(g.permissions.id) : g.permissions.id)
                }
                return e.perm
            },
            d = c(SM._deny, !0);
        return d !== null ? d : (d = c(SM._allow, !1), d !== null ? d : SecurityManager.READ.id)
    },
    getAbsolutePath = function(a) {
        return a instanceof File ? a.getAbsolutePath() : (new File(a)).getAbsolutePath()
    };
SecurityManager.prototype.allow = function(a, b) {
    this._allow.push({
        directory: getAbsolutePath(a),
        permissions: b ? b : SecurityManager.READ_WRITE
    })
}, SecurityManager.prototype.deny = function(a, b) {
    this._deny.push({
        directory: getAbsolutePath(a),
        permissions: b ? b : SecurityManager.READ_WRITE
    })
}, module.exports = {
    File: File,
    SecurityManager: SecurityManager
};