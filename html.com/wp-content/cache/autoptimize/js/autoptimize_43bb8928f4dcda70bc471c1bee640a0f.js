try {
  /*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
  "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    (function (a, b, c) {
      function d(c) {
        var d = b.console;
        f[c] ||
          ((f[c] = !0),
          a.migrateWarnings.push(c),
          d &&
            d.warn &&
            !a.migrateMute &&
            (d.warn("JQMIGRATE: " + c),
            a.migrateTrace && d.trace && d.trace()));
      }
      function e(b, c, e, f) {
        if (Object.defineProperty)
          try {
            return void Object.defineProperty(b, c, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return d(f), e;
              },
              set: function (a) {
                d(f), (e = a);
              },
            });
          } catch (g) {}
        (a._definePropertyBroken = !0), (b[c] = e);
      }
      a.migrateVersion = "1.4.1";
      var f = {};
      (a.migrateWarnings = []),
        b.console &&
          b.console.log &&
          b.console.log(
            "JQMIGRATE: Migrate is installed" +
              (a.migrateMute ? "" : " with logging active") +
              ", version " +
              a.migrateVersion
          ),
        a.migrateTrace === c && (a.migrateTrace = !0),
        (a.migrateReset = function () {
          (f = {}), (a.migrateWarnings.length = 0);
        }),
        "BackCompat" === document.compatMode &&
          d("jQuery is not compatible with Quirks Mode");
      var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn,
        h = a.attr,
        i =
          (a.attrHooks.value && a.attrHooks.value.get) ||
          function () {
            return null;
          },
        j =
          (a.attrHooks.value && a.attrHooks.value.set) ||
          function () {
            return c;
          },
        k = /^(?:input|button)$/i,
        l = /^[238]$/,
        m =
          /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        n = /^(?:checked|selected)$/i;
      e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"),
        (a.attr = function (b, e, f, i) {
          var j = e.toLowerCase(),
            o = b && b.nodeType;
          return i &&
            (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"),
            b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e])))
            ? a(b)[e](f)
            : ("type" === e &&
                f !== c &&
                k.test(b.nodeName) &&
                b.parentNode &&
                d("Can't change the 'type' of an input or button in IE 6/7/8"),
              !a.attrHooks[j] &&
                m.test(j) &&
                ((a.attrHooks[j] = {
                  get: function (b, d) {
                    var e,
                      f = a.prop(b, d);
                    return f === !0 ||
                      ("boolean" != typeof f &&
                        (e = b.getAttributeNode(d)) &&
                        e.nodeValue !== !1)
                      ? d.toLowerCase()
                      : c;
                  },
                  set: function (b, c, d) {
                    var e;
                    return (
                      c === !1
                        ? a.removeAttr(b, d)
                        : ((e = a.propFix[d] || d),
                          e in b && (b[e] = !0),
                          b.setAttribute(d, d.toLowerCase())),
                      d
                    );
                  },
                }),
                n.test(j) &&
                  d(
                    "jQuery.fn.attr('" +
                      j +
                      "') might use property instead of attribute"
                  )),
              h.call(a, b, e, f));
        }),
        (a.attrHooks.value = {
          get: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c
              ? i.apply(this, arguments)
              : ("input" !== c &&
                  "option" !== c &&
                  d("jQuery.fn.attr('value') no longer gets properties"),
                b in a ? a.value : null);
          },
          set: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c
              ? j.apply(this, arguments)
              : ("input" !== c &&
                  "option" !== c &&
                  d("jQuery.fn.attr('value', val) no longer sets properties"),
                void (a.value = b));
          },
        });
      var o,
        p,
        q = a.fn.init,
        r = a.find,
        s = a.parseJSON,
        t = /^\s*</,
        u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
        w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
      (a.fn.init = function (b, e, f) {
        var g, h;
        return b &&
          "string" == typeof b &&
          !a.isPlainObject(e) &&
          (g = w.exec(a.trim(b))) &&
          g[0] &&
          (t.test(b) || d("$(html) HTML strings must start with '<' character"),
          g[3] && d("$(html) HTML text after last tag is ignored"),
          "#" === g[0].charAt(0) &&
            (d("HTML string cannot start with a '#' character"),
            a.error("JQMIGRATE: Invalid selector string (XSS)")),
          e && e.context && e.context.nodeType && (e = e.context),
          a.parseHTML)
          ? q.call(
              this,
              a.parseHTML(g[2], (e && e.ownerDocument) || e || document, !0),
              e,
              f
            )
          : ((h = q.apply(this, arguments)),
            b && b.selector !== c
              ? ((h.selector = b.selector), (h.context = b.context))
              : ((h.selector = "string" == typeof b ? b : ""),
                b && (h.context = b.nodeType ? b : e || document)),
            h);
      }),
        (a.fn.init.prototype = a.fn),
        (a.find = function (a) {
          var b = Array.prototype.slice.call(arguments);
          if ("string" == typeof a && u.test(a))
            try {
              document.querySelector(a);
            } catch (c) {
              a = a.replace(v, function (a, b, c, d) {
                return "[" + b + c + '"' + d + '"]';
              });
              try {
                document.querySelector(a),
                  d("Attribute selector with '#' must be quoted: " + b[0]),
                  (b[0] = a);
              } catch (e) {
                d("Attribute selector with '#' was not fixed: " + b[0]);
              }
            }
          return r.apply(this, b);
        });
      var x;
      for (x in r)
        Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
      (a.parseJSON = function (a) {
        return a
          ? s.apply(this, arguments)
          : (d("jQuery.parseJSON requires a valid JSON string"), null);
      }),
        (a.uaMatch = function (a) {
          a = a.toLowerCase();
          var b =
            /(chrome)[ \/]([\w.]+)/.exec(a) ||
            /(webkit)[ \/]([\w.]+)/.exec(a) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
            /(msie) ([\w.]+)/.exec(a) ||
            (a.indexOf("compatible") < 0 &&
              /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
            [];
          return { browser: b[1] || "", version: b[2] || "0" };
        }),
        a.browser ||
          ((o = a.uaMatch(navigator.userAgent)),
          (p = {}),
          o.browser && ((p[o.browser] = !0), (p.version = o.version)),
          p.chrome ? (p.webkit = !0) : p.webkit && (p.safari = !0),
          (a.browser = p)),
        e(a, "browser", a.browser, "jQuery.browser is deprecated"),
        (a.boxModel = a.support.boxModel =
          "CSS1Compat" === document.compatMode),
        e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"),
        e(
          a.support,
          "boxModel",
          a.support.boxModel,
          "jQuery.support.boxModel is deprecated"
        ),
        (a.sub = function () {
          function b(a, c) {
            return new b.fn.init(a, c);
          }
          a.extend(!0, b, this),
            (b.superclass = this),
            (b.fn = b.prototype = this()),
            (b.fn.constructor = b),
            (b.sub = this.sub),
            (b.fn.init = function (d, e) {
              var f = a.fn.init.call(this, d, e, c);
              return f instanceof b ? f : b(f);
            }),
            (b.fn.init.prototype = b.fn);
          var c = b(document);
          return d("jQuery.sub() is deprecated"), b;
        }),
        (a.fn.size = function () {
          return (
            d("jQuery.fn.size() is deprecated; use the .length property"),
            this.length
          );
        });
      var y = !1;
      a.swap &&
        a.each(["height", "width", "reliableMarginRight"], function (b, c) {
          var d = a.cssHooks[c] && a.cssHooks[c].get;
          d &&
            (a.cssHooks[c].get = function () {
              var a;
              return (y = !0), (a = d.apply(this, arguments)), (y = !1), a;
            });
        }),
        (a.swap = function (a, b, c, e) {
          var f,
            g,
            h = {};
          y || d("jQuery.swap() is undocumented and deprecated");
          for (g in b) (h[g] = a.style[g]), (a.style[g] = b[g]);
          f = c.apply(a, e || []);
          for (g in b) a.style[g] = h[g];
          return f;
        }),
        a.ajaxSetup({ converters: { "text json": a.parseJSON } });
      var z = a.fn.data;
      a.fn.data = function (b) {
        var e,
          f,
          g = this[0];
        return !g ||
          "events" !== b ||
          1 !== arguments.length ||
          ((e = a.data(g, b)),
          (f = a._data(g, b)),
          (e !== c && e !== f) || f === c)
          ? z.apply(this, arguments)
          : (d("Use of jQuery.fn.data('events') is deprecated"), f);
      };
      var A = /\/(java|ecma)script/i;
      a.clean ||
        (a.clean = function (b, c, e, f) {
          (c = c || document),
            (c = (!c.nodeType && c[0]) || c),
            (c = c.ownerDocument || c),
            d("jQuery.clean() is deprecated");
          var g,
            h,
            i,
            j,
            k = [];
          if ((a.merge(k, a.buildFragment(b, c).childNodes), e))
            for (
              i = function (a) {
                return !a.type || A.test(a.type)
                  ? f
                    ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                    : e.appendChild(a)
                  : void 0;
              },
                g = 0;
              null != (h = k[g]);
              g++
            )
              (a.nodeName(h, "script") && i(h)) ||
                (e.appendChild(h),
                "undefined" != typeof h.getElementsByTagName &&
                  ((j = a.grep(
                    a.merge([], h.getElementsByTagName("script")),
                    i
                  )),
                  k.splice.apply(k, [g + 1, 0].concat(j)),
                  (g += j.length)));
          return k;
        });
      var B = a.event.add,
        C = a.event.remove,
        D = a.event.trigger,
        E = a.fn.toggle,
        F = a.fn.live,
        G = a.fn.die,
        H = a.fn.load,
        I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        J = new RegExp("\\b(?:" + I + ")\\b"),
        K = /(?:^|\s)hover(\.\S+|)\b/,
        L = function (b) {
          return "string" != typeof b || a.event.special.hover
            ? b
            : (K.test(b) &&
                d(
                  "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
                ),
              b && b.replace(K, "mouseenter$1 mouseleave$1"));
        };
      a.event.props &&
        "attrChange" !== a.event.props[0] &&
        a.event.props.unshift(
          "attrChange",
          "attrName",
          "relatedNode",
          "srcElement"
        ),
        a.event.dispatch &&
          e(
            a.event,
            "handle",
            a.event.dispatch,
            "jQuery.event.handle is undocumented and deprecated"
          ),
        (a.event.add = function (a, b, c, e, f) {
          a !== document &&
            J.test(b) &&
            d("AJAX events should be attached to document: " + b),
            B.call(this, a, L(b || ""), c, e, f);
        }),
        (a.event.remove = function (a, b, c, d, e) {
          C.call(this, a, L(b) || "", c, d, e);
        }),
        a.each(["load", "unload", "error"], function (b, c) {
          a.fn[c] = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0]
              ? H.apply(this, a)
              : (d("jQuery.fn." + c + "() is deprecated"),
                a.splice(0, 0, c),
                arguments.length
                  ? this.bind.apply(this, a)
                  : (this.triggerHandler.apply(this, a), this));
          };
        }),
        (a.fn.toggle = function (b, c) {
          if (!a.isFunction(b) || !a.isFunction(c))
            return E.apply(this, arguments);
          d("jQuery.fn.toggle(handler, handler...) is deprecated");
          var e = arguments,
            f = b.guid || a.guid++,
            g = 0,
            h = function (c) {
              var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
              return (
                a._data(this, "lastToggle" + b.guid, d + 1),
                c.preventDefault(),
                e[d].apply(this, arguments) || !1
              );
            };
          for (h.guid = f; g < e.length; ) e[g++].guid = f;
          return this.click(h);
        }),
        (a.fn.live = function (b, c, e) {
          return (
            d("jQuery.fn.live() is deprecated"),
            F
              ? F.apply(this, arguments)
              : (a(this.context).on(b, this.selector, c, e), this)
          );
        }),
        (a.fn.die = function (b, c) {
          return (
            d("jQuery.fn.die() is deprecated"),
            G
              ? G.apply(this, arguments)
              : (a(this.context).off(b, this.selector || "**", c), this)
          );
        }),
        (a.event.trigger = function (a, b, c, e) {
          return (
            c ||
              J.test(a) ||
              d("Global events are undocumented and deprecated"),
            D.call(this, a, b, c || document, e)
          );
        }),
        a.each(I.split("|"), function (b, c) {
          a.event.special[c] = {
            setup: function () {
              var b = this;
              return (
                b !== document &&
                  (a.event.add(document, c + "." + a.guid, function () {
                    a.event.trigger(
                      c,
                      Array.prototype.slice.call(arguments, 1),
                      b,
                      !0
                    );
                  }),
                  a._data(this, c, a.guid++)),
                !1
              );
            },
            teardown: function () {
              return (
                this !== document &&
                  a.event.remove(document, c + "." + a._data(this, c)),
                !1
              );
            },
          };
        }),
        (a.event.special.ready = {
          setup: function () {
            this === document && d("'ready' event is deprecated");
          },
        });
      var M = a.fn.andSelf || a.fn.addBack,
        N = a.fn.find;
      if (
        ((a.fn.andSelf = function () {
          return (
            d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
            M.apply(this, arguments)
          );
        }),
        (a.fn.find = function (a) {
          var b = N.apply(this, arguments);
          return (
            (b.context = this.context),
            (b.selector = this.selector ? this.selector + " " + a : a),
            b
          );
        }),
        a.Callbacks)
      ) {
        var O = a.Deferred,
          P = [
            [
              "resolve",
              "done",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              "resolved",
            ],
            [
              "reject",
              "fail",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              "rejected",
            ],
            [
              "notify",
              "progress",
              a.Callbacks("memory"),
              a.Callbacks("memory"),
            ],
          ];
        a.Deferred = function (b) {
          var c = O(),
            e = c.promise();
          return (
            (c.pipe = e.pipe =
              function () {
                var b = arguments;
                return (
                  d("deferred.pipe() is deprecated"),
                  a
                    .Deferred(function (d) {
                      a.each(P, function (f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function () {
                          var b = h && h.apply(this, arguments);
                          b && a.isFunction(b.promise)
                            ? b
                                .promise()
                                .done(d.resolve)
                                .fail(d.reject)
                                .progress(d.notify)
                            : d[g[0] + "With"](
                                this === e ? d.promise() : this,
                                h ? [b] : arguments
                              );
                        });
                      }),
                        (b = null);
                    })
                    .promise()
                );
              }),
            (c.isResolved = function () {
              return (
                d("deferred.isResolved is deprecated"), "resolved" === c.state()
              );
            }),
            (c.isRejected = function () {
              return (
                d("deferred.isRejected is deprecated"), "rejected" === c.state()
              );
            }),
            b && b.call(c, c),
            c
          );
        };
      }
    })(jQuery, window);
} catch (e) {}
try {
  !(function () {
    function e(e, t) {
      t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
    }
    "function" != typeof window.CustomEvent &&
      ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
  })(),
    (function () {
      function t(e) {
        return new RegExp("(^| )" + e + "( |$)");
      }
      function e(e, t, n) {
        for (var i = 0; i < e.length; i++) t.call(n, e[i]);
      }
      function n(e) {
        this.element = e;
      }
      (n.prototype = {
        add: function () {
          e(
            arguments,
            function (e) {
              this.contains(e) ||
                (this.element.className +=
                  0 < this.element.className.length ? " " + e : e);
            },
            this
          );
        },
        remove: function () {
          e(
            arguments,
            function (e) {
              this.element.className = this.element.className.replace(t(e), "");
            },
            this
          );
        },
        toggle: function (e) {
          return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0);
        },
        contains: function (e) {
          return t(e).test(this.element.className);
        },
        replace: function (e, t) {
          this.remove(e), this.add(t);
        },
      }),
        "classList" in Element.prototype ||
          Object.defineProperty(Element.prototype, "classList", {
            get: function () {
              return new n(this);
            },
          }),
        window.DOMTokenList &&
          null == DOMTokenList.prototype.replace &&
          (DOMTokenList.prototype.replace = n.prototype.replace);
    })(),
    (function (a, r) {
      var e = new (function () {
        (this.cookiesAccepted = null),
          (this.noticeContainer = null),
          (this.setStatus = function (e) {
            var t = this;
            "1" === cnArgs.onScroll &&
              a.removeEventListener("scroll", this.handleScroll);
            var n = new Date(),
              i = new Date();
            "accept" === e
              ? ((e = "true"),
                i.setTime(
                  parseInt(n.getTime()) + 1e3 * parseInt(cnArgs.cookieTime)
                ))
              : ((e = "false"),
                i.setTime(
                  parseInt(n.getTime()) +
                    1e3 * parseInt(cnArgs.cookieTimeRejected)
                )),
              (r.cookie =
                cnArgs.cookieName +
                "=" +
                e +
                ";expires=" +
                i.toUTCString() +
                ";" +
                (cnArgs.cookieDomain
                  ? "domain=" + cnArgs.cookieDomain + ";"
                  : "") +
                (cnArgs.cookiePath ? "path=" + cnArgs.cookiePath + ";" : "") +
                ("1" === cnArgs.secure ? "secure;" : "")),
              (this.cookiesAccepted = "true" === e);
            var o = new CustomEvent("setCookieNotice", {
              detail: { value: e, time: n, expires: i, data: cnArgs },
            });
            if (
              (r.dispatchEvent(o),
              this.setBodyClass([
                "cookies-set",
                "true" === e ? "cookies-accepted" : "cookies-refused",
              ]),
              this.hideCookieNotice(),
              "automatic" === cnArgs.revokeCookiesOpt &&
                (this.noticeContainer.addEventListener(
                  "animationend",
                  function e() {
                    t.noticeContainer.removeEventListener("animationend", e),
                      t.showRevokeNotice();
                  }
                ),
                this.noticeContainer.addEventListener(
                  "webkitAnimationEnd",
                  function e() {
                    t.noticeContainer.removeEventListener(
                      "webkitAnimationEnd",
                      e
                    ),
                      t.showRevokeNotice();
                  }
                )),
              "1" === cnArgs.redirection &&
                (("true" === e && null === this.cookiesAccepted) ||
                  (e !== this.cookiesAccepted &&
                    null !== this.cookiesAccepted)))
            ) {
              var s = a.location.protocol + "//",
                c = a.location.host + "/" + a.location.pathname;
              "1" === cnArgs.cache
                ? ((s =
                    s +
                    c.replace("//", "/") +
                    ("" === a.location.search ? "?" : a.location.search + "&") +
                    "cn-reloaded=1" +
                    a.location.hash),
                  (a.location.href = s))
                : ((s =
                    s +
                    c.replace("//", "/") +
                    a.location.search +
                    a.location.hash),
                  a.location.reload(!0));
            } else;
          }),
          (this.getStatus = function (e) {
            var t = ("; " + r.cookie).split("; cookie_notice_accepted=");
            if (2 !== t.length) return null;
            var n = t.pop().split(";").shift();
            return e ? "true" === n : n;
          }),
          (this.showCookieNotice = function () {
            var t = this,
              e = new CustomEvent("showCookieNotice", {
                detail: { data: cnArgs },
              });
            r.dispatchEvent(e),
              this.noticeContainer.classList.remove("cookie-notice-hidden"),
              this.noticeContainer.classList.add("cn-animated"),
              this.noticeContainer.classList.add("cookie-notice-visible"),
              this.noticeContainer.addEventListener(
                "animationend",
                function e() {
                  t.noticeContainer.removeEventListener("animationend", e),
                    t.noticeContainer.classList.remove("cn-animated");
                }
              ),
              this.noticeContainer.addEventListener(
                "webkitAnimationEnd",
                function e() {
                  t.noticeContainer.removeEventListener(
                    "webkitAnimationEnd",
                    e
                  ),
                    t.noticeContainer.classList.remove("cn-animated");
                }
              );
          }),
          (this.hideCookieNotice = function () {
            var t = this,
              e = new CustomEvent("hideCookieNotice", {
                detail: { data: cnArgs },
              });
            r.dispatchEvent(e),
              this.noticeContainer.classList.add("cn-animated"),
              this.noticeContainer.classList.remove("cookie-notice-visible"),
              this.noticeContainer.addEventListener(
                "animationend",
                function e() {
                  t.noticeContainer.removeEventListener("animationend", e),
                    t.noticeContainer.classList.remove("cn-animated"),
                    t.noticeContainer.classList.add("cookie-notice-hidden");
                }
              ),
              this.noticeContainer.addEventListener(
                "webkitAnimationEnd",
                function e() {
                  t.noticeContainer.removeEventListener(
                    "webkitAnimationEnd",
                    e
                  ),
                    t.noticeContainer.classList.remove("cn-animated"),
                    t.noticeContainer.classList.add("cookie-notice-hidden");
                }
              );
          }),
          (this.showRevokeNotice = function () {
            var t = this,
              e = new CustomEvent("showRevokeNotice", {
                detail: { data: cnArgs },
              });
            r.dispatchEvent(e),
              this.noticeContainer.classList.remove("cookie-revoke-hidden"),
              this.noticeContainer.classList.add("cn-animated"),
              this.noticeContainer.classList.add("cookie-revoke-visible"),
              this.noticeContainer.addEventListener(
                "animationend",
                function e() {
                  t.noticeContainer.removeEventListener("animationend", e),
                    t.noticeContainer.classList.remove("cn-animated");
                }
              ),
              this.noticeContainer.addEventListener(
                "webkitAnimationEnd",
                function e() {
                  t.noticeContainer.removeEventListener(
                    "webkitAnimationEnd",
                    e
                  ),
                    t.noticeContainer.classList.remove("cn-animated");
                }
              );
          }),
          (this.hideRevokeNotice = function () {
            var t = this,
              e = new CustomEvent("hideRevokeNotice", {
                detail: { data: cnArgs },
              });
            r.dispatchEvent(e),
              this.noticeContainer.classList.add("cn-animated"),
              this.noticeContainer.classList.remove("cookie-revoke-visible"),
              this.noticeContainer.addEventListener(
                "animationend",
                function e() {
                  t.noticeContainer.removeEventListener("animationend", e),
                    t.noticeContainer.classList.remove("cn-animated"),
                    t.noticeContainer.classList.add("cookie-revoke-hidden");
                }
              ),
              this.noticeContainer.addEventListener(
                "webkitAnimationEnd",
                function e() {
                  t.noticeContainer.removeEventListener(
                    "webkitAnimationEnd",
                    e
                  ),
                    t.noticeContainer.classList.remove("cn-animated"),
                    t.noticeContainer.classList.add("cookie-revoke-hidden");
                }
              );
          }),
          (this.setBodyClass = function (e) {
            r.body.classList.remove("cookies-revoke"),
              r.body.classList.remove("cookies-accepted"),
              r.body.classList.remove("cookies-refused"),
              r.body.classList.remove("cookies-set"),
              r.body.classList.remove("cookies-not-set");
            for (var t = 0; t < e.length; t++) r.body.classList.add(e[t]);
          }),
          (this.handleScroll = function () {
            (a.pageYOffset ||
              (r.documentElement || r.body.parentNode || r.body).scrollTop) >
              parseInt(cnArgs.onScrollOffset) && this.setStatus("accept");
          }),
          (this.adjustOffset = function () {
            var e = r.getElementById("coronabar"),
              t = r.getElementById("wpadminbar"),
              n = 0,
              i = 0;
            "top" === cnArgs.position &&
              null !== t &&
              ((i = t.offsetHeight),
              (this.noticeContainer.style.top = i + "px")),
              null !== e &&
                ((n = e.offsetHeight - 1),
                "top" === cnArgs.position
                  ? ((e.style.top = i + "px"),
                    (this.noticeContainer.style.top = n + i + "px"))
                  : (this.noticeContainer.style.bottom = n + "px"));
          }),
          (this.getClosest = function (e, t) {
            for (
              Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (e) {
                  for (
                    var t = (
                        this.document || this.ownerDocument
                      ).querySelectorAll(e),
                      n = t.length;
                    0 <= --n && t.item(n) !== this;

                  );
                  return -1 < n;
                });
              e && e !== r;
              e = e.parentNode
            )
              if (e.matches(t)) return e;
            return null;
          }),
          (this.init = function () {
            var t = this;
            (this.cookiesAccepted = this.getStatus(!0)),
              (this.noticeContainer = r.getElementById("cookie-notice"));
            var e = r.getElementsByClassName("cn-set-cookie"),
              n = r.getElementsByClassName("cn-revoke-cookie"),
              i = r.getElementById("cn-close-notice");
            this.noticeContainer.classList.add(
              "cn-effect-" + cnArgs.hideEffect
            ),
              t.adjustOffset(),
              a.addEventListener("resize", function (e) {
                t.adjustOffset();
              }),
              "1" === cnArgs.coronabarActive &&
                (r.addEventListener("display.coronabar", function (e) {
                  t.adjustOffset();
                }),
                r.addEventListener("hide.coronabar", function (e) {
                  t.adjustOffset();
                }),
                r.addEventListener("saveData.coronabar", function (e) {
                  var t = e.detail;
                  if (null !== t) {
                    var n = new XMLHttpRequest();
                    n.open("POST", cnArgs.ajaxUrl, !0),
                      n.setRequestHeader(
                        "Content-Type",
                        "application/x-www-form-urlencoded;"
                      ),
                      (n.onload = function () {
                        200 <= this.status && this.status;
                      }),
                      (n.onerror = function () {}),
                      n.send(
                        "action=cn_save_cases&nonce=" +
                          cnArgs.nonce +
                          "&data=" +
                          JSON.stringify(t)
                      );
                  }
                })),
              null === this.cookiesAccepted
                ? ("1" === cnArgs.onScroll &&
                    a.addEventListener("scroll", function (e) {
                      t.handleScroll();
                    }),
                  "1" === cnArgs.onClick &&
                    a.addEventListener(
                      "click",
                      function (e) {
                        null === t.getClosest(e.target, "#cookie-notice") &&
                          t.setStatus("accept");
                      },
                      !0
                    ),
                  this.setBodyClass(["cookies-not-set"]),
                  this.showCookieNotice())
                : (this.setBodyClass([
                    "cookies-set",
                    !0 === this.cookiesAccepted
                      ? "cookies-accepted"
                      : "cookies-refused",
                  ]),
                  "1" === cnArgs.revokeCookies &&
                    "automatic" === cnArgs.revokeCookiesOpt &&
                    this.showRevokeNotice());
            for (var o = 0; o < e.length; o++)
              e[o].addEventListener("click", function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  t.setStatus(this.dataset.cookieSet);
              });
            "null" !== i &&
              i.addEventListener("click", function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  t.setStatus(this.dataset.cookieSet);
              });
            for (o = 0; o < n.length; o++)
              n[o].addEventListener("click", function (e) {
                e.preventDefault(),
                  t.noticeContainer.classList.contains("cookie-revoke-visible")
                    ? (t.hideRevokeNotice(),
                      t.noticeContainer.addEventListener(
                        "animationend",
                        function e() {
                          t.noticeContainer.removeEventListener(
                            "animationend",
                            e
                          ),
                            t.showCookieNotice();
                        }
                      ),
                      t.noticeContainer.addEventListener(
                        "webkitAnimationEnd",
                        function e() {
                          t.noticeContainer.removeEventListener(
                            "webkitAnimationEnd",
                            e
                          ),
                            t.showCookieNotice();
                        }
                      ))
                    : t.noticeContainer.classList.contains(
                        "cookie-notice-hidden"
                      ) &&
                      t.noticeContainer.classList.contains(
                        "cookie-revoke-hidden"
                      ) &&
                      t.showCookieNotice();
              });
          });
      })();
      a.addEventListener(
        "load",
        function () {
          e.init();
        },
        !1
      );
    })(window, document);
} catch (e) {}
try {
  jQuery(document).ready(function (a) {
    jQuery(document.links)
      .filter(function () {
        return this.hostname != window.location.hostname;
      })
      .not(".render a")
      .attr("target", "_blank");
  });
} catch (e) {}
try {
  /*! Thrive Headline Optimizer - 2020-11-25
   * http://www.thrivethemes.com/
   * Copyright (c) 2020 Thrive Themes */
  function tho_change_titles() {
    var a = document.getElementsByTagName(THO_Head.element_tag);
    for (var b in a) {
      var c = 0,
        d = 0,
        e = a[b];
      if (
        "object" == typeof e &&
        (void 0 === e.className ||
          -1 === e.className.indexOf("tho_title_changed"))
      ) {
        for (var f in e.attributes) {
          var g = e.attributes[f].name;
          void 0 !== g &&
            (0 === g.indexOf("tho-post-")
              ? (c = g.replace("tho-post-", ""))
              : 0 === g.indexOf("tho-test-") &&
                (d = g.replace("tho-test-", "")));
        }
        c &&
          d &&
          void 0 !== THO_Variations[c] &&
          (e.setAttribute("data-post-id", c),
          e.setAttribute("data-test-id", d),
          tho_output_title(
            e,
            c,
            THO_Variations[c].variations,
            THO_Variations[c].winners
          ));
      }
    }
    void 0 !== THO_Titles[THO_Head.post_id] && tho_brute_search_replace();
  }
  function tho_brute_search_replace() {
    var a,
      b =
        THO_Variations[THO_Head.post_id].variations[
          THO_Titles[THO_Head.post_id]
        ],
      c = document.querySelectorAll(
        THO_Head.woo_tag +
          ', [class*="crumb"], [id*="crumb"], [class="woocommerce-message"], [class="product-name"]'
      );
    for (var d in THO_Variations[THO_Head.post_id].variations) {
      a = THO_Variations[THO_Head.post_id].variations[d];
      break;
    }
    if (void 0 !== a)
      for (d in c) {
        var e = c[d];
        "object" != typeof e ||
          (void 0 !== e.className &&
            -1 !== e.className.indexOf("tho_title_changed")) ||
          ((e.innerHTML = e.innerHTML.replace(a, b)),
          (e.className += " tho_title_changed"));
      }
  }
  function tho_get_title_variation(a, b, c) {
    var d = tho_random_key(b),
      e = tho_get_cookie("tho_post_cookie_" + a, !0);
    if (
      ("" === THO_Titles && (THO_Titles = {}),
      e.test_id && void 0 !== c[e.test_id])
    )
      return c[e.test_id];
    if (void 0 !== THO_Titles[a]) {
      if (((d = THO_Titles[a]), void 0 !== b[d])) return b[d];
      d = tho_random_key(b);
    }
    return (
      (THO_Titles[a] = d),
      tho_set_cookie("tho_post_titles", THO_Titles, !0),
      b[d]
    );
  }
  function tho_output_title(a, b, c, d) {
    var e = tho_get_title_variation(b, c, d);
    "" != e && ((a.className += "tho_title_changed"), (a.innerHTML = e));
  }
  function tho_random_key(a) {
    var b = Object.keys(a);
    return b[parseInt(b.length * Math.random())];
  }
  function tho_get_cookie(a, b) {
    for (
      var c = a + "=", d = document.cookie.split(";"), e = "", f = 0;
      f < d.length;
      f++
    ) {
      for (var g = d[f]; " " == g.charAt(0); ) g = g.substring(1);
      if (0 == g.indexOf(c)) {
        (e = g.substring(c.length, g.length)),
          b && (e = JSON.parse(decodeURIComponent(e)));
        break;
      }
    }
    return e;
  }
  function tho_set_cookie(a, b, c) {
    var d,
      e = new Date();
    e.setTime(e.getTime() + 314496e5),
      (d = "; expires=" + e.toGMTString()),
      c && (b = JSON.stringify(b)),
      (document.cookie = a + "=" + b + d + "; path=/");
  }
  var THO_Titles = tho_get_cookie("tho_post_titles", !0),
    THO_Head = THO_Head || {},
    THO_Variations = THO_Head.variations || {};
  window.tho_title_interval = setInterval(tho_change_titles, 10);
} catch (e) {}
try {
  /*!
   * SlickNav Responsive Mobile Menu v1.0.10
   * (c) 2016 Josh Cope
   * licensed under MIT
   */
  !(function (e, t, n) {
    function a(t, n) {
      (this.element = t),
        (this.settings = e.extend({}, i, n)),
        this.settings.duplicate ||
          n.hasOwnProperty("removeIds") ||
          (this.settings.removeIds = !1),
        (this._defaults = i),
        (this._name = s),
        this.init();
    }
    var i = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        appendTo: "",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        removeIds: !0,
        removeClasses: !1,
        removeStyles: !1,
        brand: "",
        animations: "jquery",
        init: function () {},
        beforeOpen: function () {},
        beforeClose: function () {},
        afterOpen: function () {},
        afterClose: function () {},
      },
      s = "slicknav",
      o = "slicknav",
      l = {
        DOWN: 40,
        ENTER: 13,
        ESCAPE: 27,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      };
    (a.prototype.init = function () {
      var n,
        a,
        i = this,
        s = e(this.element),
        r = this.settings;
      if (
        (r.duplicate ? (i.mobileNav = s.clone()) : (i.mobileNav = s),
        r.removeIds &&
          (i.mobileNav.removeAttr("id"),
          i.mobileNav.find("*").each(function (t, n) {
            e(n).removeAttr("id");
          })),
        r.removeClasses &&
          (i.mobileNav.removeAttr("class"),
          i.mobileNav.find("*").each(function (t, n) {
            e(n).removeAttr("class");
          })),
        r.removeStyles &&
          (i.mobileNav.removeAttr("style"),
          i.mobileNav.find("*").each(function (t, n) {
            e(n).removeAttr("style");
          })),
        (n = o + "_icon"),
        "" === r.label && (n += " " + o + "_no-text"),
        "a" == r.parentTag && (r.parentTag = 'a href="#"'),
        i.mobileNav.attr("class", o + "_nav"),
        (a = e('<div class="' + o + '_menu"></div>')),
        "" !== r.brand)
      ) {
        var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
        e(a).append(c);
      }
      (i.btn = e(
        [
          "<" +
            r.parentTag +
            ' aria-haspopup="true" role="button" tabindex="0" class="' +
            o +
            "_btn " +
            o +
            '_collapsed">',
          '<span class="' + o + '_menutxt">' + r.label + "</span>",
          '<span class="' + n + '">',
          '<span class="' + o + '_icon-bar"></span>',
          '<span class="' + o + '_icon-bar"></span>',
          '<span class="' + o + '_icon-bar"></span>',
          "</span>",
          "</" + r.parentTag + ">",
        ].join("")
      )),
        e(a).append(i.btn),
        "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a),
        a.append(i.mobileNav);
      var p = i.mobileNav.find("li");
      e(p).each(function () {
        var t = e(this),
          n = {};
        if (
          ((n.children = t.children("ul").attr("role", "menu")),
          t.data("menu", n),
          n.children.length > 0)
        ) {
          var a = t.contents(),
            s = !1,
            l = [];
          e(a).each(function () {
            return e(this).is("ul")
              ? !1
              : (l.push(this), void (e(this).is("a") && (s = !0)));
          });
          var c = e(
            "<" +
              r.parentTag +
              ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
              o +
              '_item"/>'
          );
          if (r.allowParentLinks && !r.nestedParentLinks && s)
            e(l)
              .wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>')
              .parent();
          else {
            var p = e(l).wrapAll(c).parent();
            p.addClass(o + "_row");
          }
          r.showChildren
            ? t.addClass(o + "_open")
            : t.addClass(o + "_collapsed"),
            t.addClass(o + "_parent");
          var d = e(
            '<span class="' +
              o +
              '_arrow">' +
              (r.showChildren ? r.openedSymbol : r.closedSymbol) +
              "</span>"
          );
          r.allowParentLinks &&
            !r.nestedParentLinks &&
            s &&
            (d = d.wrap(c).parent()),
            e(l).last().after(d);
        } else 0 === t.children().length && t.addClass(o + "_txtnode");
        t
          .children("a")
          .attr("role", "menuitem")
          .click(function (t) {
            r.closeOnClick &&
              !e(t.target)
                .parent()
                .closest("li")
                .hasClass(o + "_parent") &&
              e(i.btn).click();
          }),
          r.closeOnClick &&
            r.allowParentLinks &&
            (t
              .children("a")
              .children("a")
              .click(function (t) {
                e(i.btn).click();
              }),
            t
              .find("." + o + "_parent-link a:not(." + o + "_item)")
              .click(function (t) {
                e(i.btn).click();
              }));
      }),
        e(p).each(function () {
          var t = e(this).data("menu");
          r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
        }),
        i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
        i.mobileNav.attr("role", "menu"),
        e(t).mousedown(function () {
          i._outlines(!1);
        }),
        e(t).keyup(function () {
          i._outlines(!0);
        }),
        e(i.btn).click(function (e) {
          e.preventDefault(), i._menuToggle();
        }),
        i.mobileNav.on("click", "." + o + "_item", function (t) {
          t.preventDefault(), i._itemClick(e(this));
        }),
        e(i.btn).keydown(function (t) {
          var n = t || event;
          switch (n.keyCode) {
            case l.ENTER:
            case l.SPACE:
            case l.DOWN:
              t.preventDefault(),
                (n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open")) ||
                  i._menuToggle(),
                e(i.btn).next().find('[role="menuitem"]').first().focus();
          }
        }),
        i.mobileNav.on("keydown", "." + o + "_item", function (t) {
          var n = t || event;
          switch (n.keyCode) {
            case l.ENTER:
              t.preventDefault(), i._itemClick(e(t.target));
              break;
            case l.RIGHT:
              t.preventDefault(),
                e(t.target)
                  .parent()
                  .hasClass(o + "_collapsed") && i._itemClick(e(t.target)),
                e(t.target).next().find('[role="menuitem"]').first().focus();
          }
        }),
        i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
          var n = t || event;
          switch (n.keyCode) {
            case l.DOWN:
              t.preventDefault();
              var a = e(t.target)
                  .parent()
                  .parent()
                  .children()
                  .children('[role="menuitem"]:visible'),
                s = a.index(t.target),
                r = s + 1;
              a.length <= r && (r = 0);
              var c = a.eq(r);
              c.focus();
              break;
            case l.UP:
              t.preventDefault();
              var a = e(t.target)
                  .parent()
                  .parent()
                  .children()
                  .children('[role="menuitem"]:visible'),
                s = a.index(t.target),
                c = a.eq(s - 1);
              c.focus();
              break;
            case l.LEFT:
              if (
                (t.preventDefault(),
                e(t.target)
                  .parent()
                  .parent()
                  .parent()
                  .hasClass(o + "_open"))
              ) {
                var p = e(t.target).parent().parent().prev();
                p.focus(), i._itemClick(p);
              } else
                e(t.target)
                  .parent()
                  .parent()
                  .hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
              break;
            case l.ESCAPE:
              t.preventDefault(), i._menuToggle(), e(i.btn).focus();
          }
        }),
        r.allowParentLinks &&
          r.nestedParentLinks &&
          e("." + o + "_item a").click(function (e) {
            e.stopImmediatePropagation();
          });
    }),
      (a.prototype._menuToggle = function (e) {
        var t = this,
          n = t.btn,
          a = t.mobileNav;
        n.hasClass(o + "_collapsed")
          ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open"))
          : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")),
          n.addClass(o + "_animating"),
          t._visibilityToggle(a, n.parent(), !0, n);
      }),
      (a.prototype._itemClick = function (e) {
        var t = this,
          n = t.settings,
          a = e.data("menu");
        a ||
          ((a = {}),
          (a.arrow = e.children("." + o + "_arrow")),
          (a.ul = e.next("ul")),
          (a.parent = e.parent()),
          a.parent.hasClass(o + "_parent-link") &&
            ((a.parent = e.parent().parent()), (a.ul = e.parent().next("ul"))),
          e.data("menu", a)),
          a.parent.hasClass(o + "_collapsed")
            ? (a.arrow.html(n.openedSymbol),
              a.parent.removeClass(o + "_collapsed"),
              a.parent.addClass(o + "_open"),
              a.parent.addClass(o + "_animating"),
              t._visibilityToggle(a.ul, a.parent, !0, e))
            : (a.arrow.html(n.closedSymbol),
              a.parent.addClass(o + "_collapsed"),
              a.parent.removeClass(o + "_open"),
              a.parent.addClass(o + "_animating"),
              t._visibilityToggle(a.ul, a.parent, !0, e));
      }),
      (a.prototype._visibilityToggle = function (t, n, a, i, s) {
        function l(t, n) {
          e(t).removeClass(o + "_animating"),
            e(n).removeClass(o + "_animating"),
            s || p.afterOpen(t);
        }
        function r(n, a) {
          t.attr("aria-hidden", "true"),
            d.attr("tabindex", "-1"),
            c._setVisAttr(t, !0),
            t.hide(),
            e(n).removeClass(o + "_animating"),
            e(a).removeClass(o + "_animating"),
            s ? "init" == n && p.init() : p.afterClose(n);
        }
        var c = this,
          p = c.settings,
          d = c._getActionItems(t),
          u = 0;
        a && (u = p.duration),
          t.hasClass(o + "_hidden")
            ? (t.removeClass(o + "_hidden"),
              s || p.beforeOpen(i),
              "jquery" === p.animations
                ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
                    l(i, n);
                  })
                : "velocity" === p.animations &&
                  t.velocity("finish").velocity("slideDown", {
                    duration: u,
                    easing: p.easingOpen,
                    complete: function () {
                      l(i, n);
                    },
                  }),
              t.attr("aria-hidden", "false"),
              d.attr("tabindex", "0"),
              c._setVisAttr(t, !1))
            : (t.addClass(o + "_hidden"),
              s || p.beforeClose(i),
              "jquery" === p.animations
                ? t
                    .stop(!0, !0)
                    .slideUp(u, this.settings.easingClose, function () {
                      r(i, n);
                    })
                : "velocity" === p.animations &&
                  t.velocity("finish").velocity("slideUp", {
                    duration: u,
                    easing: p.easingClose,
                    complete: function () {
                      r(i, n);
                    },
                  }));
      }),
      (a.prototype._setVisAttr = function (t, n) {
        var a = this,
          i = t
            .children("li")
            .children("ul")
            .not("." + o + "_hidden");
        n
          ? i.each(function () {
              var t = e(this);
              t.attr("aria-hidden", "true");
              var i = a._getActionItems(t);
              i.attr("tabindex", "-1"), a._setVisAttr(t, n);
            })
          : i.each(function () {
              var t = e(this);
              t.attr("aria-hidden", "false");
              var i = a._getActionItems(t);
              i.attr("tabindex", "0"), a._setVisAttr(t, n);
            });
      }),
      (a.prototype._getActionItems = function (e) {
        var t = e.data("menu");
        if (!t) {
          t = {};
          var n = e.children("li"),
            a = n.find("a");
          (t.links = a.add(n.find("." + o + "_item"))), e.data("menu", t);
        }
        return t.links;
      }),
      (a.prototype._outlines = function (t) {
        t
          ? e("." + o + "_item, ." + o + "_btn").css("outline", "")
          : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
      }),
      (a.prototype.toggle = function () {
        var e = this;
        e._menuToggle();
      }),
      (a.prototype.open = function () {
        var e = this;
        e.btn.hasClass(o + "_collapsed") && e._menuToggle();
      }),
      (a.prototype.close = function () {
        var e = this;
        e.btn.hasClass(o + "_open") && e._menuToggle();
      }),
      (e.fn[s] = function (t) {
        var n = arguments;
        if (void 0 === t || "object" == typeof t)
          return this.each(function () {
            e.data(this, "plugin_" + s) ||
              e.data(this, "plugin_" + s, new a(this, t));
          });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
          var i;
          return (
            this.each(function () {
              var o = e.data(this, "plugin_" + s);
              o instanceof a &&
                "function" == typeof o[t] &&
                (i = o[t].apply(o, Array.prototype.slice.call(n, 1)));
            }),
            void 0 !== i ? i : this
          );
        }
      });
  })(jQuery, document, window);
} catch (e) {}
try {
  /*
   * jQuery Superfish Menu Plugin - v1.7.9
   * Copyright (c) 2016 Joel Birch
   *
   * Dual licensed under the MIT and GPL licenses:
   *	http://www.opensource.org/licenses/mit-license.php
   *	http://www.gnu.org/licenses/gpl.html
   */
  !(function (a, b) {
    "use strict";
    var c = (function () {
      var c = {
          bcClass: "sf-breadcrumb",
          menuClass: "sf-js-enabled",
          anchorClass: "sf-with-ul",
          menuArrowClass: "sf-arrows",
        },
        d = (function () {
          var b = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(
            navigator.userAgent
          );
          return b && a("html").css("cursor", "pointer").on("click", a.noop), b;
        })(),
        e = (function () {
          var a = document.documentElement.style;
          return (
            "behavior" in a &&
            "fill" in a &&
            /iemobile/i.test(navigator.userAgent)
          );
        })(),
        f = (function () {
          return !!b.PointerEvent;
        })(),
        g = function (a, b, d) {
          var e,
            f = c.menuClass;
          b.cssArrows && (f += " " + c.menuArrowClass),
            (e = d ? "addClass" : "removeClass"),
            a[e](f);
        },
        h = function (b, d) {
          return b
            .find("li." + d.pathClass)
            .slice(0, d.pathLevels)
            .addClass(d.hoverClass + " " + c.bcClass)
            .filter(function () {
              return a(this).children(d.popUpSelector).hide().show().length;
            })
            .removeClass(d.pathClass);
        },
        i = function (a, b) {
          var d = b ? "addClass" : "removeClass";
          a.children("a")[d](c.anchorClass);
        },
        j = function (a) {
          var b = a.css("ms-touch-action"),
            c = a.css("touch-action");
          (c = c || b),
            (c = "pan-y" === c ? "auto" : "pan-y"),
            a.css({ "ms-touch-action": c, "touch-action": c });
        },
        k = function (a) {
          return a.closest("." + c.menuClass);
        },
        l = function (a) {
          return k(a).data("sfOptions");
        },
        m = function () {
          var b = a(this),
            c = l(b);
          clearTimeout(c.sfTimer),
            b.siblings().superfish("hide").end().superfish("show");
        },
        n = function (b) {
          (b.retainPath = a.inArray(this[0], b.$path) > -1),
            this.superfish("hide"),
            this.parents("." + b.hoverClass).length ||
              (b.onIdle.call(k(this)), b.$path.length && a.proxy(m, b.$path)());
        },
        o = function () {
          var b = a(this),
            c = l(b);
          d
            ? a.proxy(n, b, c)()
            : (clearTimeout(c.sfTimer),
              (c.sfTimer = setTimeout(a.proxy(n, b, c), c.delay)));
        },
        p = function (b) {
          var c = a(this),
            d = l(c),
            e = c.siblings(b.data.popUpSelector);
          return d.onHandleTouch.call(e) === !1
            ? this
            : void (
                e.length > 0 &&
                e.is(":hidden") &&
                (c.one("click.superfish", !1),
                "MSPointerDown" === b.type || "pointerdown" === b.type
                  ? c.trigger("focus")
                  : a.proxy(m, c.parent("li"))())
              );
        },
        q = function (b, c) {
          var g = "li:has(" + c.popUpSelector + ")";
          a.fn.hoverIntent && !c.disableHI
            ? b.hoverIntent(m, o, g)
            : b
                .on("mouseenter.superfish", g, m)
                .on("mouseleave.superfish", g, o);
          var h = "MSPointerDown.superfish";
          f && (h = "pointerdown.superfish"),
            d || (h += " touchend.superfish"),
            e && (h += " mousedown.superfish"),
            b
              .on("focusin.superfish", "li", m)
              .on("focusout.superfish", "li", o)
              .on(h, "a", c, p);
        };
      return {
        hide: function (b) {
          if (this.length) {
            var c = this,
              d = l(c);
            if (!d) return this;
            var e = d.retainPath === !0 ? d.$path : "",
              f = c
                .find("li." + d.hoverClass)
                .add(this)
                .not(e)
                .removeClass(d.hoverClass)
                .children(d.popUpSelector),
              g = d.speedOut;
            if (
              (b && (f.show(), (g = 0)),
              (d.retainPath = !1),
              d.onBeforeHide.call(f) === !1)
            )
              return this;
            f.stop(!0, !0).animate(d.animationOut, g, function () {
              var b = a(this);
              d.onHide.call(b);
            });
          }
          return this;
        },
        show: function () {
          var a = l(this);
          if (!a) return this;
          var b = this.addClass(a.hoverClass),
            c = b.children(a.popUpSelector);
          return a.onBeforeShow.call(c) === !1
            ? this
            : (c.stop(!0, !0).animate(a.animation, a.speed, function () {
                a.onShow.call(c);
              }),
              this);
        },
        destroy: function () {
          return this.each(function () {
            var b,
              d = a(this),
              e = d.data("sfOptions");
            return e
              ? ((b = d.find(e.popUpSelector).parent("li")),
                clearTimeout(e.sfTimer),
                g(d, e),
                i(b),
                j(d),
                d.off(".superfish").off(".hoverIntent"),
                b.children(e.popUpSelector).attr("style", function (a, b) {
                  return b.replace(/display[^;]+;?/g, "");
                }),
                e.$path
                  .removeClass(e.hoverClass + " " + c.bcClass)
                  .addClass(e.pathClass),
                d.find("." + e.hoverClass).removeClass(e.hoverClass),
                e.onDestroy.call(d),
                void d.removeData("sfOptions"))
              : !1;
          });
        },
        init: function (b) {
          return this.each(function () {
            var d = a(this);
            if (d.data("sfOptions")) return !1;
            var e = a.extend({}, a.fn.superfish.defaults, b),
              f = d.find(e.popUpSelector).parent("li");
            (e.$path = h(d, e)),
              d.data("sfOptions", e),
              g(d, e, !0),
              i(f, !0),
              j(d),
              q(d, e),
              f.not("." + c.bcClass).superfish("hide", !0),
              e.onInit.call(this);
          });
        },
      };
    })();
    (a.fn.superfish = function (b, d) {
      return c[b]
        ? c[b].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof b && b
        ? a.error("Method " + b + " does not exist on jQuery.fn.superfish")
        : c.init.apply(this, arguments);
    }),
      (a.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: { opacity: "show" },
        animationOut: { opacity: "hide" },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: a.noop,
        onBeforeShow: a.noop,
        onShow: a.noop,
        onBeforeHide: a.noop,
        onHide: a.noop,
        onIdle: a.noop,
        onDestroy: a.noop,
        onHandleTouch: a.noop,
      });
  })(jQuery, window);
} catch (e) {}
try {
  var Tynt = Tynt || [];
  Tynt.push("byfmT-VLWr5RHyrkHcnlKl");
  (function () {
    var h,
      s = document.createElement("script");
    s.src =
      (window.location.protocol === "https:" ? "https" : "http") +
      "://cdn.tynt.com/ti.js";
    h = document.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
  })();
} catch (e) {}
try {
  !(function (e, n, t) {
    "use strict";
    var o =
        "https://fonts.googleapis.com/css?family=Lato:300,400,400i,700i,900,900i|Merriweather:400,400i,700,700i&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese",
      r = "__3perf_googleFonts_4dd0e";
    function c(e) {
      (n.head || n.body).appendChild(e);
    }
    function a() {
      var e = n.createElement("link");
      (e.href = o), (e.rel = "stylesheet"), c(e);
    }
    function f(e) {
      if (!n.getElementById(r)) {
        var t = n.createElement("style");
        (t.id = r), c(t);
      }
      n.getElementById(r).innerHTML = e;
    }
    e.FontFace && e.FontFace.prototype.hasOwnProperty("display")
      ? (t[r] && f(t[r]),
        fetch(o)
          .then(function (e) {
            return e.text();
          })
          .then(function (e) {
            return e.replace(/@font-face {/g, "@font-face{font-display:swap;");
          })
          .then(function (e) {
            return (t[r] = e);
          })
          .then(f)
          .catch(a))
      : a();
  })(window, document, localStorage);
} catch (e) {}
try {
  (function () {
    var bsa_optimize = document.createElement("script");
    bsa_optimize.type = "text/javascript";
    bsa_optimize.async = true;
    bsa_optimize.src =
      "https://cdn-s2s.buysellads.net/pub/html.js?" +
      (new Date() - (new Date() % 600000));
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(bsa_optimize);
  })();
} catch (e) {}
try {
  function external_links_in_new_windows_loop() {
    if (!document.links) {
      document.links = document.getElementsByTagName("a");
    }
    var change_link = false;
    var force = "";
    var ignore = "";
    for (var t = 0; t < document.links.length; t++) {
      var all_links = document.links[t];
      change_link = false;
      if (document.links[t].hasAttribute("onClick") == false) {
        if (
          all_links.href.search(/^http/) != -1 &&
          all_links.href.search("html.com") == -1 &&
          all_links.href.search(/^#/) == -1
        ) {
          change_link = true;
        }
        if (force != "" && all_links.href.search(force) != -1) {
          change_link = true;
        }
        if (ignore != "" && all_links.href.search(ignore) != -1) {
          change_link = false;
        }
        if (change_link == true) {
          document.links[t].setAttribute(
            "onClick",
            "javascript:window.open('" + all_links.href + "'); return false;"
          );
          document.links[t].removeAttribute("target");
        }
      }
    }
  }
  function external_links_in_new_windows_load(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
      window.onload = func;
    } else {
      window.onload = function () {
        oldonload();
        func();
      };
    }
  }
  external_links_in_new_windows_load(external_links_in_new_windows_loop);
} catch (e) {}
try {
  var spPicTest = document.createElement("picture");
  if (!window.HTMLPictureElement && document.addEventListener) {
    window.addEventListener("DOMContentLoaded", function () {
      var scriptTag = document.createElement("script");
      scriptTag.src =
        "https://html.com/wp-content/plugins/shortpixel-image-optimiser/class/Controller/res/js/picturefill.min.js";
      document.body.appendChild(scriptTag);
    });
  }
} catch (e) {}
try {
  (function () {
    var bsa = document.createElement("script");
    bsa.type = "text/javascript";
    bsa.async = true;
    bsa.src = "//s3.buysellads.com/ac/bsa.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(bsa);
  })();
} catch (e) {}
try {
  /*! content-views 08-2020 */
  /*!
   * Bootstrap v3.4.1 (http://getbootstrap.com)
   * Copyright 2011-2019 Twitter, Inc.
   * Licensed under the MIT license
   */
  if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
  +(function (a) {
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
    +(function (a) {
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.carousel"),
            f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
            g = "string" == typeof b ? b : f.cvslide;
          e || d.data("bs.carousel", (e = new c(this, f))),
            "number" == typeof b
              ? e.to(b)
              : g
              ? e[g]()
              : f.interval && e.pause().cycle();
        });
      }
      var c = function (b, c) {
        (this.$element = a(b)),
          (this.$indicators = this.$element.find(".pt-cv-carousel-indicators")),
          (this.options = c),
          (this.paused = null),
          (this.sliding = null),
          (this.interval = null),
          (this.$active = null),
          (this.$items = null),
          this.options.keyboard &&
            this.$element.on(
              "keydown.bs.carousel",
              a.proxy(this.keydown, this)
            ),
          "hover" == this.options.pause &&
            !("ontouchstart" in document.documentElement) &&
            this.$element
              .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
              .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
      };
      (c.VERSION = "3.4.1"),
        (c.TRANSITION_DURATION = 600),
        (c.DEFAULTS = {
          interval: 5e3,
          pause: "hover",
          wrap: !0,
          keyboard: !0,
        }),
        (c.prototype.keydown = function (a) {
          if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
              case 37:
                this.prev();
                break;
              case 39:
                this.next();
                break;
              default:
                return;
            }
            a.preventDefault();
          }
        }),
        (c.prototype.cycle = function (b) {
          return (
            b || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval &&
              !this.paused &&
              (this.interval = setInterval(
                a.proxy(this.next, this),
                this.options.interval
              )),
            this
          );
        }),
        (c.prototype.getItemIndex = function (a) {
          return (
            (this.$items = a.parent().children(".item")),
            this.$items.index(a || this.$active)
          );
        }),
        (c.prototype.getItemForDirection = function (a, b) {
          var c = this.getItemIndex(b),
            d =
              ("prev" == a && 0 === c) ||
              ("next" == a && c == this.$items.length - 1);
          if (d && !this.options.wrap) return b;
          var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
          return this.$items.eq(f);
        }),
        (c.prototype.to = function (a) {
          var b = this,
            c = this.getItemIndex(
              (this.$active = this.$element.find(".item.active"))
            );
          return a > this.$items.length - 1 || 0 > a
            ? void 0
            : this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
        }),
        (c.prototype.pause = function (b) {
          return (
            b || (this.paused = !0),
            this.$element.find(".next, .prev").length &&
              a.support.transition &&
              (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
            (this.interval = clearInterval(this.interval)),
            this
          );
        }),
        (c.prototype.next = function () {
          return this.sliding ? void 0 : this.slide("next");
        }),
        (c.prototype.prev = function () {
          return this.sliding ? void 0 : this.slide("prev");
        }),
        (c.prototype.slide = function (b, d) {
          var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
          if (f.hasClass("active")) return (this.sliding = !1);
          var j = f[0],
            k = a.Event("slide.bs.carousel", {
              relatedTarget: j,
              direction: h,
            });
          if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
            if (
              ((this.sliding = !0), g && this.pause(), this.$indicators.length)
            ) {
              this.$indicators.find(".active").removeClass("active");
              var l = a(this.$indicators.children()[this.getItemIndex(f)]);
              l && l.addClass("active");
            }
            var m = a.Event("slid.bs.carousel", {
              relatedTarget: j,
              direction: h,
            });
            return (
              a.support.transition && this.$element.hasClass("pt-cv-slide")
                ? (f.addClass(b),
                  "object" == typeof f && f.length && f[0].offsetWidth,
                  e.addClass(h),
                  f.addClass(h),
                  e
                    .one("bsTransitionEnd", function () {
                      f.removeClass([b, h].join(" ")).addClass("active"),
                        e.removeClass(["active", h].join(" ")),
                        (i.sliding = !1),
                        setTimeout(function () {
                          i.$element.trigger(m);
                        }, 0);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION))
                : (e.removeClass("active"),
                  f.addClass("active"),
                  (this.sliding = !1),
                  this.$element.trigger(m)),
              g && this.cycle(),
              this
            );
          }
        });
      var d = a.fn.carousel;
      d || ((a.fn.carousel = b), (a.fn.carousel.Constructor = c)),
        (a.fn.cvcarousel = b),
        (a.fn.cvcarousel.Constructor = c);
      var e = function (c) {
        var d = a(this),
          e = d.attr("href");
        e && (e = e.replace(/.*(?=#[^\s]+$)/, ""));
        var f = d.attr("data-target") || e,
          g = a(document).find(f);
        if (g.hasClass("pt-cv-carousel")) {
          var h = a.extend({}, g.data(), d.data()),
            i = d.attr("data-cvslide-to");
          i && (h.interval = !1),
            b.call(g, h),
            i && g.data("bs.carousel").to(i),
            c.preventDefault();
        }
      };
      a(document).ready(function () {
        a(".pt-cv-wrapper")
          .on("click.bs.carousel.data-api", "[data-cvslide]", e)
          .on("click.bs.carousel.data-api", "[data-cvslide-to]", e);
      }),
        a(window).on("load", function () {
          a('[data-ride="cvcarousel"]', ".pt-cv-wrapper").each(function () {
            var c = a(this);
            b.call(c, c.data());
          });
        });
    })(jQuery),
    +(function (a) {
      function b(b) {
        var c,
          d =
            b.attr("data-target") ||
            ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
        return a(document).find(d);
      }
      function c(b) {
        return this.each(function () {
          var c = a(this),
            e = c.data("bs.collapse"),
            f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
          !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", (e = new d(this, f))),
            "string" == typeof b && e[b]();
        });
      }
      var d = function (b, c) {
        (this.$element = a(b)),
          (this.options = a.extend({}, d.DEFAULTS, c)),
          (this.$trigger = a(
            '[data-toggle="cvcollapse"][href="#' +
              b.id +
              '"],[data-toggle="cvcollapse"][data-target="#' +
              b.id +
              '"]'
          )),
          (this.transitioning = null),
          this.options.parent
            ? (this.$parent = this.getParent())
            : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
          this.options.toggle && this.toggle();
      };
      (d.VERSION = "3.4.1"),
        (d.TRANSITION_DURATION = 350),
        (d.DEFAULTS = { toggle: !0 }),
        (d.prototype.dimension = function () {
          var a = this.$element.hasClass("width");
          return a ? "width" : "height";
        }),
        (d.prototype.show = function () {
          if (!this.transitioning && !this.$element.hasClass("in")) {
            var b,
              e =
                this.$parent &&
                this.$parent.children(".panel").children(".in, .collapsing");
            if (
              !(
                e &&
                e.length &&
                ((b = e.data("bs.collapse")), b && b.transitioning)
              )
            ) {
              var f = a.Event("show.bs.collapse");
              if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
                !window.cv_collapse_ignore_others &&
                  e &&
                  e.length &&
                  (c.call(e, "hide"), b || e.data("bs.collapse", null));
                var g = this.dimension();
                this.$element
                  .removeClass("collapse")
                  .addClass("collapsing")
                  [g](0)
                  .attr("aria-expanded", !0),
                  this.$trigger
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                  (this.transitioning = 1);
                var h = function () {
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse in")
                    [g](""),
                    (this.transitioning = 0),
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!a.support.transition) return h.call(this);
                var i = a.camelCase(["scroll", g].join("-"));
                this.$element
                  .one("bsTransitionEnd", a.proxy(h, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
                  [g](this.$element[0][i]);
              }
            }
          }
        }),
        (d.prototype.hide = function () {
          if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
              var c = this.dimension();
              this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element
                  .addClass("collapsing")
                  .removeClass("collapse in")
                  .attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                (this.transitioning = 1);
              var e = function () {
                (this.transitioning = 0),
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse")
                    .trigger("hidden.bs.collapse");
              };
              return a.support.transition
                ? void this.$element[c](0)
                    .one("bsTransitionEnd", a.proxy(e, this))
                    .emulateTransitionEnd(d.TRANSITION_DURATION)
                : e.call(this);
            }
          }
        }),
        (d.prototype.toggle = function () {
          this[this.$element.hasClass("in") ? "hide" : "show"]();
        }),
        (d.prototype.getParent = function () {
          return a(document)
            .find(this.options.parent)
            .find(
              '[data-toggle="cvcollapse"][data-parent="' +
                this.options.parent +
                '"]'
            )
            .each(
              a.proxy(function (c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e);
              }, this)
            )
            .end();
        }),
        (d.prototype.addAriaAndCollapsedClass = function (a, b) {
          var c = a.hasClass("in");
          a.attr("aria-expanded", c),
            b.toggleClass("collapsed", !c).attr("aria-expanded", c);
        });
      var e = a.fn.collapse;
      e || ((a.fn.collapse = c), (a.fn.collapse.Constructor = d)),
        (a.fn.cvcollapse = c),
        (a.fn.cvcollapse.Constructor = d),
        a(document).ready(function () {
          a(".pt-cv-wrapper").on(
            "click.bs.collapse.data-api",
            '[data-toggle="cvcollapse"]',
            function (d) {
              var e = a(this);
              e.attr("data-target") || d.preventDefault();
              var f = b(e),
                g = f.data("bs.collapse"),
                h = g ? "toggle" : e.data();
              c.call(f, h);
            }
          );
        });
    })(jQuery),
    +(function (a) {
      function b(b) {
        var c = b.attr("data-target");
        c ||
          ((c = b.attr("href")),
          (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
        var d = "#" !== c ? a(document).find(c) : null;
        return d && d.length ? d : b.parent();
      }
      function c(c) {
        (c && 3 === c.which) ||
          (a(e).remove(),
          a(f).each(function () {
            var d = a(this),
              e = b(d),
              f = { relatedTarget: this };
            e.hasClass("open") &&
              ((c &&
                "click" == c.type &&
                /input|textarea/i.test(c.target.tagName) &&
                a.contains(e[0], c.target)) ||
                (e.trigger((c = a.Event("hide.bs.dropdown", f))),
                c.isDefaultPrevented() ||
                  (d.attr("aria-expanded", "false"),
                  e
                    .removeClass("open")
                    .trigger(a.Event("hidden.bs.dropdown", f)))));
          }));
      }
      function d(b) {
        return this.each(function () {
          var c = a(this),
            d = c.data("bs.dropdown");
          d || c.data("bs.dropdown", (d = new g(this))),
            "string" == typeof b && d[b].call(c);
        });
      }
      var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
          a(b).on("click.bs.dropdown", this.toggle);
        };
      (g.VERSION = "3.4.1"),
        (g.prototype.toggle = function (d) {
          var e = a(this);
          if (!e.is(".disabled, :disabled")) {
            var f = b(e),
              g = f.hasClass("open");
            if ((c(), !g)) {
              "ontouchstart" in document.documentElement &&
                !f.closest(".navbar-nav").length &&
                a(document.createElement("div"))
                  .addClass("dropdown-backdrop")
                  .insertAfter(a(this))
                  .on("click", c);
              var h = { relatedTarget: this };
              if (
                (f.trigger((d = a.Event("show.bs.dropdown", h))),
                d.isDefaultPrevented())
              )
                return;
              e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
            }
            return !1;
          }
        }),
        (g.prototype.keydown = function (c) {
          if (
            /(38|40|27|32)/.test(c.which) &&
            !/input|textarea/i.test(c.target.tagName)
          ) {
            var d = a(this);
            if (
              (c.preventDefault(),
              c.stopPropagation(),
              !d.is(".disabled, :disabled"))
            ) {
              var e = b(d),
                g = e.hasClass("open");
              if ((!g && 27 != c.which) || (g && 27 == c.which))
                return (
                  27 == c.which && e.find(f).trigger("focus"),
                  d.trigger("click")
                );
              var h = " li:not(.disabled):visible a",
                i = e.find(".dropdown-menu" + h);
              if (i.length) {
                var j = i.index(c.target);
                38 == c.which && j > 0 && j--,
                  40 == c.which && j < i.length - 1 && j++,
                  ~j || (j = 0),
                  i.eq(j).trigger("focus");
              }
            }
          }
        });
      var h = a.fn.dropdown;
      h || ((a.fn.dropdown = d), (a.fn.dropdown.Constructor = g)),
        a(document).ready(function () {
          a(".pt-cv-wrapper")
            .on("click.bs.dropdown.data-api", c)
            .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
              a.stopPropagation();
            })
            .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
            .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
            .on(
              "keydown.bs.dropdown.data-api",
              ".dropdown-menu",
              g.prototype.keydown
            );
        });
    })(jQuery),
    +(function (a) {
      function b(b) {
        return this.each(function () {
          var d = a(this),
            e = d.data("bs.tab");
          e || d.data("bs.tab", (e = new c(this))),
            "string" == typeof b && e[b]();
        });
      }
      var c = function (b) {
        this.element = a(b);
      };
      (c.VERSION = "3.4.1"),
        (c.TRANSITION_DURATION = 150),
        (c.prototype.show = function () {
          var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
          if (
            (d ||
              ((d = b.attr("href")),
              (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
            !b.parent("li").hasClass("active"))
          ) {
            var e = c.find(".active:last a"),
              f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
              g = a.Event("show.bs.tab", { relatedTarget: e[0] });
            if (
              (e.trigger(f),
              b.trigger(g),
              !g.isDefaultPrevented() && !f.isDefaultPrevented())
            ) {
              var h = a(document).find(d);
              this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function () {
                  e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                    b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                });
            }
          }
        }),
        (c.prototype.activate = function (b, d, e) {
          function f() {
            g
              .removeClass("active")
              .find("> .dropdown-menu > .active")
              .removeClass("active")
              .end()
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !1),
              b
                .addClass("active")
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
              h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
              b.parent(".dropdown-menu").length &&
                b
                  .closest("li.dropdown")
                  .addClass("active")
                  .end()
                  .find('[data-toggle="tab"]')
                  .attr("aria-expanded", !0),
              e && e();
          }
          var g = d.find("> .active"),
            h =
              e &&
              a.support.transition &&
              ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
          g.length && h
            ? g
                .one("bsTransitionEnd", f)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : f(),
            g.removeClass("in");
        });
      var d = a.fn.tab;
      d || ((a.fn.tab = b), (a.fn.tab.Constructor = c));
      var e = function (c) {
        c.preventDefault(), b.call(a(this), "show");
      };
      a(document).ready(function () {
        a(".pt-cv-wrapper")
          .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
          .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
      });
    })(jQuery),
    /*!
     * Bootstrap paginator v0.5
     * Copyright 2013 Yun Lai <lyonlai1984@gmail.com>
     * Licensed http://www.apache.org/licenses/LICENSE-2.0
     */
    (function (a) {
      var b = function (a, b) {
          this.init(a, b);
        },
        c = null;
      (b.prototype = {
        init: function (b, c) {
          this.$element = a(b);
          {
            var d =
              c && c.bootstrapMajorVersion
                ? c.bootstrapMajorVersion
                : a.fn.bootstrapPaginator.defaults.bootstrapMajorVersion;
            this.$element.attr("id");
          }
          if (2 === d && !this.$element.is("div"))
            throw "in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option";
          if (d > 2 && !this.$element.is("ul"))
            throw "in Bootstrap version 3 the pagination root item must be an ul element.";
          (this.currentPage = 1),
            (this.lastPage = 1),
            this.setOptions(c),
            (this.initialized = !0);
        },
        setOptions: function (b) {
          (this.options = a.extend(
            {},
            this.options || a.fn.bootstrapPaginator.defaults,
            b
          )),
            (this.totalPages = parseInt(this.options.totalPages, 10)),
            (this.numberOfPages = parseInt(this.options.numberOfPages, 10)),
            b &&
              "undefined" != typeof b.currentPage &&
              this.setCurrentPage(b.currentPage),
            this.listen(),
            this.render(),
            this.initialized ||
              this.lastPage === this.currentPage ||
              this.$element.trigger("page-changed", [
                this.lastPage,
                this.currentPage,
              ]);
        },
        listen: function () {
          this.$element.off("page-clicked"),
            this.$element.off("page-changed"),
            "function" == typeof this.options.onPageClicked &&
              this.$element.bind("page-clicked", this.options.onPageClicked),
            "function" == typeof this.options.onPageChanged &&
              this.$element.on("page-changed", this.options.onPageChanged),
            this.$element.bind("page-clicked", this.onPageClicked);
        },
        destroy: function () {
          this.$element.off("page-clicked"),
            this.$element.off("page-changed"),
            this.$element.removeData("bootstrapPaginator"),
            this.$element.empty();
        },
        show: function (a) {
          this.setCurrentPage(a),
            this.render(),
            this.lastPage !== this.currentPage &&
              this.$element.trigger("page-changed", [
                this.lastPage,
                this.currentPage,
              ]);
        },
        showNext: function () {
          var a = this.getPages();
          a.next && this.show(a.next);
        },
        showPrevious: function () {
          var a = this.getPages();
          a.prev && this.show(a.prev);
        },
        showFirst: function () {
          var a = this.getPages();
          a.first && this.show(a.first);
        },
        showLast: function () {
          var a = this.getPages();
          a.last && this.show(a.last);
        },
        onPageItemClicked: function (a) {
          var b = a.data.type,
            c = a.data.page;
          this.$element.trigger("page-clicked", [a, b, c]);
        },
        onPageClicked: function (b, c, d, e) {
          var f = a(b.currentTarget);
          switch (d) {
            case "first":
              f.bootstrapPaginator("showFirst");
              break;
            case "prev":
              f.bootstrapPaginator("showPrevious");
              break;
            case "next":
              f.bootstrapPaginator("showNext");
              break;
            case "last":
              f.bootstrapPaginator("showLast");
              break;
            case "page":
              f.bootstrapPaginator("show", e);
          }
        },
        render: function () {
          var b = this.getValueFromOption(
              this.options.containerClass,
              this.$element
            ),
            c = this.options.size || "normal",
            d = this.options.alignment || "left",
            e = this.getPages(),
            f =
              2 === this.options.bootstrapMajorVersion
                ? a("<ul></ul>")
                : this.$element,
            g =
              2 === this.options.bootstrapMajorVersion
                ? this.getValueFromOption(this.options.listContainerClass, f)
                : null,
            h = null,
            i = null,
            j = null,
            k = null,
            l = null,
            m = 0;
          switch (c.toLowerCase()) {
            case "large":
            case "small":
            case "mini":
              this.$element.addClass(
                a.fn.bootstrapPaginator.sizeArray[
                  this.options.bootstrapMajorVersion
                ][c.toLowerCase()]
              );
          }
          if (2 === this.options.bootstrapMajorVersion)
            switch (d.toLowerCase()) {
              case "center":
                this.$element.addClass("pagination-centered");
                break;
              case "right":
                this.$element.addClass("pagination-right");
            }
          for (
            this.$element.addClass(b),
              this.$element.empty(),
              2 === this.options.bootstrapMajorVersion &&
                (this.$element.append(f), f.addClass(g)),
              this.pageRef = [],
              e.first &&
                ((h = this.buildPageItem("first", e.first)), h && f.append(h)),
              e.prev &&
                ((i = this.buildPageItem("prev", e.prev)), i && f.append(i)),
              m = 0;
            m < e.length;
            m += 1
          )
            (l = this.buildPageItem("page", e[m])), l && f.append(l);
          e.next &&
            ((j = this.buildPageItem("next", e.next)), j && f.append(j)),
            e.last &&
              ((k = this.buildPageItem("last", e.last)), k && f.append(k));
        },
        buildPageItem: function (b, c) {
          var d = a("<li></li>"),
            e = a("<a></a>"),
            f = "",
            g = "",
            h = this.options.itemContainerClass(b, c, this.currentPage),
            i = this.getValueFromOption(
              this.options.itemContentClass,
              b,
              c,
              this.currentPage
            ),
            j = null;
          switch (b) {
            case "first":
              if (
                !this.getValueFromOption(
                  this.options.shouldShowPage,
                  b,
                  c,
                  this.currentPage
                )
              )
                return;
              (f = this.options.itemTexts(b, c, this.currentPage)),
                (g = this.options.tooltipTitles(b, c, this.currentPage));
              break;
            case "last":
              if (
                !this.getValueFromOption(
                  this.options.shouldShowPage,
                  b,
                  c,
                  this.currentPage
                )
              )
                return;
              (f = this.options.itemTexts(b, c, this.currentPage)),
                (g = this.options.tooltipTitles(b, c, this.currentPage));
              break;
            case "prev":
              if (
                !this.getValueFromOption(
                  this.options.shouldShowPage,
                  b,
                  c,
                  this.currentPage
                )
              )
                return;
              (f = this.options.itemTexts(b, c, this.currentPage)),
                (g = this.options.tooltipTitles(b, c, this.currentPage));
              break;
            case "next":
              if (
                !this.getValueFromOption(
                  this.options.shouldShowPage,
                  b,
                  c,
                  this.currentPage
                )
              )
                return;
              (f = this.options.itemTexts(b, c, this.currentPage)),
                (g = this.options.tooltipTitles(b, c, this.currentPage));
              break;
            case "page":
              if (
                !this.getValueFromOption(
                  this.options.shouldShowPage,
                  b,
                  c,
                  this.currentPage
                )
              )
                return;
              (f = this.options.itemTexts(b, c, this.currentPage)),
                (g = this.options.tooltipTitles(b, c, this.currentPage));
          }
          return (
            d.addClass(h).append(e),
            e
              .addClass(i)
              .html(f)
              .on(
                "click",
                null,
                { type: b, page: c },
                a.proxy(this.onPageItemClicked, this)
              ),
            this.options.pageUrl &&
              e.attr(
                "href",
                this.getValueFromOption(
                  this.options.pageUrl,
                  b,
                  c,
                  this.currentPage
                )
              ),
            this.options.useBootstrapTooltip
              ? ((j = a.extend({}, this.options.bootstrapTooltipOptions, {
                  title: g,
                })),
                e.tooltip(j))
              : e.attr("title", g),
            d
          );
        },
        setCurrentPage: function (a) {
          (a > this.totalPages || 1 > a) && (a = this.totalPages),
            (this.lastPage = this.currentPage),
            (this.currentPage = parseInt(a, 10));
        },
        getPages: function () {
          var a = this.totalPages,
            b = this.currentPage - parseInt(this.numberOfPages / 2),
            b = b + this.numberOfPages > a ? a - this.numberOfPages + 1 : b,
            c = [],
            d = 0,
            e = 0;
          for (
            b = 1 > b ? 1 : b, d = b, e = 0;
            e < this.numberOfPages && a >= d;
            d += 1, e += 1
          )
            c.push(d);
          return (
            (c.first = 1),
            (c.prev = this.currentPage > 1 ? this.currentPage - 1 : 1),
            (c.next = this.currentPage < a ? this.currentPage + 1 : a),
            (c.last = a),
            (c.current = this.currentPage),
            (c.total = a),
            (c.numberOfPages = this.options.numberOfPages),
            c
          );
        },
        getValueFromOption: function (a) {
          var b = null,
            c = Array.prototype.slice.call(arguments, 1);
          return (b = "function" == typeof a ? a.apply(this, c) : a);
        },
      }),
        (c = a.fn.bootstrapPaginator),
        (a.fn.bootstrapPaginator = function (c) {
          var d = arguments,
            e = null;
          return (
            a(this).each(function (f, g) {
              var h = a(g),
                i = h.data("bootstrapPaginator"),
                j = "object" != typeof c ? null : c;
              if (!i)
                return (
                  (i = new b(this, j)),
                  (h = a(i.$element)),
                  void h.data("bootstrapPaginator", i)
                );
              if ("string" == typeof c) {
                if (!i[c]) throw "Method " + c + " does not exist";
                e = i[c].apply(i, Array.prototype.slice.call(d, 1));
              } else e = i.setOptions(c);
            }),
            e
          );
        }),
        (a.fn.bootstrapPaginator.sizeArray = {
          2: {
            large: "pagination-large",
            small: "pagination-small",
            mini: "pagination-mini",
          },
          3: { large: "pagination-lg", small: "pagination-sm", mini: "" },
        }),
        (a.fn.bootstrapPaginator.defaults = {
          containerClass: "",
          size: "normal",
          alignment: "left",
          bootstrapMajorVersion: 2,
          listContainerClass: "",
          itemContainerClass: function (a, b, c) {
            return b === c ? "active" : "";
          },
          itemContentClass: function () {
            return "";
          },
          currentPage: 1,
          numberOfPages: 5,
          totalPages: 1,
          pageUrl: function () {
            return null;
          },
          onPageClicked: null,
          onPageChanged: null,
          useBootstrapTooltip: !1,
          shouldShowPage: function (a, b, c) {
            var d = !0;
            switch (a) {
              case "first":
                d = 1 !== c;
                break;
              case "prev":
                d = 1 !== c;
                break;
              case "next":
                d = c !== this.totalPages;
                break;
              case "last":
                d = c !== this.totalPages;
                break;
              case "page":
                d = !0;
            }
            return d;
          },
          itemTexts: function (a, b) {
            switch (a) {
              case "first":
                return PT_CV_PAGINATION.first;
              case "prev":
                return PT_CV_PAGINATION.prev;
              case "next":
                return PT_CV_PAGINATION.next;
              case "last":
                return PT_CV_PAGINATION.last;
              case "page":
                return b;
            }
          },
          tooltipTitles: function (a, b, c) {
            switch (a) {
              case "first":
                return PT_CV_PAGINATION.goto_first;
              case "prev":
                return PT_CV_PAGINATION.goto_prev;
              case "next":
                return PT_CV_PAGINATION.goto_next;
              case "last":
                return PT_CV_PAGINATION.goto_last;
              case "page":
                return b === c
                  ? PT_CV_PAGINATION.current_page + " " + b
                  : PT_CV_PAGINATION.goto_page + " " + b;
            }
          },
          bootstrapTooltipOptions: {
            animation: !0,
            html: !0,
            placement: "top",
            selector: !1,
            title: "",
            container: !1,
          },
        }),
        (a.fn.bootstrapPaginator.Constructor = b);
    })(window.jQuery),
    (function (a) {
      "use strict";
      (a.PT_CV_Public = a.PT_CV_Public || {}),
        (PT_CV_PUBLIC = PT_CV_PUBLIC || {});
      var b = PT_CV_PUBLIC._prefix;
      (a.PT_CV_Public = function (b) {
        (this.options = a.extend({}, b)),
          "undefined" == typeof this.options.skip && this.pagination();
      }),
        (a.PT_CV_Public.prototype = {
          pagination: function () {
            var c = this;
            a("." + b + "pagination." + b + "ajax").each(function () {
              var b = a(this),
                d = a(this).attr("data-totalpages"),
                e = a(this).attr("data-currentpage");
              a(this).bootstrapPaginator({
                bootstrapMajorVersion: 3,
                currentPage: e ? parseInt(e) : 1,
                totalPages: d ? parseInt(d) : 1,
                numberOfPages: PT_CV_PUBLIC.page_to_show,
                shouldShowPage: function (a) {
                  if (!(d && 10 > d)) return !0;
                  switch (a) {
                    case "first":
                    case "last":
                      return !1;
                    default:
                      return !0;
                  }
                },
                itemContainerClass: function (a, b, c) {
                  var d = "cv-pageitem-" + ("page" === a ? "number" : a);
                  return d + " " + (b === c ? "active" : "");
                },
                onPageClicked: function (a, d, e, f) {
                  c._setup_pagination(b, f, function () {
                    PT_CV_PUBLIC.paging = 0;
                  });
                },
              });
            });
          },
          _setup_pagination: function (a, c, d) {
            var e = this;
            if (
              ((PT_CV_PUBLIC.paging = PT_CV_PUBLIC.paging || 0),
              !PT_CV_PUBLIC.paging && !a.data("disabled"))
            ) {
              PT_CV_PUBLIC.paging = 1;
              var f = a.next("." + b + "spinner"),
                g = a;
              a.parent("." + b + "pagination-wrapper").length &&
                (g = a.parent("." + b + "pagination-wrapper"));
              var h = g.closest("." + b + "wrapper").children("." + b + "view");
              if (
                (h.hasClass(b + "timeline") &&
                  (h = h.children(".tl-items").first()),
                g.find("." + b + "more").length > 0)
              ) {
                var i = h.children("." + b + "page").first();
                i.length > 0 && (h = i);
              }
              e._get_page(a, c, f, h, d);
            }
          },
          _get_page: function (c, d, e, f, g) {
            var h = this;
            d = parseInt(d);
            var i = h._active_page(d, f, g);
            if (i)
              return (
                g && "function" == typeof g && g(),
                void a("body").trigger(b + "pagination-finished-simple")
              );
            a("body").trigger(b + "before-pagination");
            var j = {
              action: "pagination_request",
              sid: c.attr("data-sid"),
              unid: c.attr("data-unid"),
              page: d,
              lang: PT_CV_PUBLIC.lang,
              ajax_nonce: PT_CV_PUBLIC._nonce,
              custom_data: window.cvdata,
            };
            a.ajax({
              type: "POST",
              url: PT_CV_PUBLIC.ajaxurl,
              data: j,
              beforeSend: function () {
                e.addClass("active");
              },
            }).done(function (c) {
              e.removeClass("active"),
                c.indexOf(b + "no-post") < 0 && f.append(c),
                h._active_page(d, f, g),
                g && "function" == typeof g && g(),
                a("body").trigger(b + "pagination-finished", [f, a(c)]);
            });
          },
          _active_page: function (c, d) {
            var e = !1,
              f = '[data-id="' + b + "page-" + c + '"]';
            return (
              d.children(f).length &&
                ((e = !0),
                d.children().hide(),
                d.children(f).show(),
                this._update_url(c),
                window.cvp_pagination_no_scroll ||
                  a("html, body").animate(
                    { scrollTop: d.children(f).offset().top - 160 },
                    1e3
                  )),
              e
            );
          },
          _get_paginated_url: function (a) {
            return (
              PT_CV_PAGINATION.links &&
              PT_CV_PAGINATION.links.page_n &&
              PT_CV_PAGINATION.links.page_n.replace("_CVNUMBER_", parseInt(a))
            );
          },
          _update_url: function (a) {
            var b = this;
            if (!PT_CV_PUBLIC.is_admin && !window.cv_pagination_no_update_url) {
              var c = !1;
              (c =
                a > 1
                  ? b._get_paginated_url(a)
                  : PT_CV_PAGINATION.links && PT_CV_PAGINATION.links.page_1),
                c && history.replaceState(null, null, encodeURI(c));
            }
          },
        }),
        a(function () {
          new a.PT_CV_Public();
        });
    })(jQuery);
} catch (e) {}
try {
  var iworks_position = {
    post_type: ["post", "page"],
    position: "top",
    position_placement: "0",
    style: "solid",
    height: "5",
    color1: "#f20",
    color1_opacity: "100",
    color2: "#d93",
    color2_opacity: "100",
    background: "#ddd",
    background_opacity: "5",
    radius: "0",
  };
} catch (e) {}
try {
  /*! Reading Position Indicator - v1.0.3
   * https://wordpress.org/plugins/reading-position-indicator/
   * Copyright (c) 2019; * Licensed GPLv2+ */
  "undefined" != typeof jQuery &&
    jQuery(document).ready(function (a) {
      var b = "";
      "undefined" != typeof iworks_position &&
        ("gradient" == iworks_position.style
          ? (b = "multiple")
          : "transparent" == iworks_position.style && (b = "single"),
        "" != b && (b += " "),
        (b += iworks_position.style),
        (b += " "),
        (b += " position-" + iworks_position.position)),
        a("body").append(
          '<progress value="0" id="reading-position-indicator" class="' +
            b +
            '"><div class="progress-container"><span class="progress-bar"></span></div></progress>'
        );
      var c = function () {
          var b = a(".reading-position-indicator-end");
          return b.length
            ? parseInt(b.offset().top) - (3 * a(window).height()) / 4
            : a(document).height() - a(window).height();
        },
        d = function () {
          return a(window).scrollTop();
        };
      if (
        (a(window)
          .on("load", function () {
            e.attr({ value: d() });
          })
          .on("resize", function () {
            e.attr({ max: c(), value: d() });
          }),
        "max" in document.createElement("progress"))
      ) {
        var e = a("#reading-position-indicator");
        e.attr({ max: c() }),
          a(document).on("scroll", function () {
            e.attr({ value: d() });
          });
      } else {
        var e = a(".progress-bar"),
          f = c(),
          g = function () {
            e.attr({ value: d() });
          };
        a(document).on("scroll", g),
          a(window)
            .on("resize", function () {
              f = c();
            })
            .on("load", g);
      }
    });
} catch (e) {}
try {
  var tocplus = {
    visibility_show: "show",
    visibility_hide: "hide",
    width: "Auto",
  };
} catch (e) {}
try {
  !(function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(
          "object" == typeof module && module.exports
            ? require("jquery")
            : jQuery
        );
  })(function (t) {
    function e(t) {
      return t.replace(/(:|\.|\/)/g, "\\$1");
    }
    var o = "1.6.0",
      i = {},
      l = {
        exclude: [],
        excludeWithin: [],
        offset: 0,
        direction: "top",
        delegateSelector: null,
        scrollElement: null,
        scrollTarget: null,
        beforeScroll: function () {},
        afterScroll: function () {},
        easing: "swing",
        speed: 400,
        autoCoefficient: 2,
        preventDefault: !0,
      },
      s = function (e) {
        var o = [],
          i = !1,
          l = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
        return (
          this.each(function () {
            var e = t(this);
            return this !== document && this !== window
              ? !document.scrollingElement ||
                (this !== document.documentElement && this !== document.body)
                ? void (e[l]() > 0
                    ? o.push(this)
                    : (e[l](1), (i = e[l]() > 0), i && o.push(this), e[l](0)))
                : (o.push(document.scrollingElement), !1)
              : void 0;
          }),
          o.length ||
            this.each(function () {
              "BODY" === this.nodeName && (o = [this]);
            }),
          "first" === e.el && o.length > 1 && (o = [o[0]]),
          o
        );
      };
    t.fn.extend({
      scrollable: function (t) {
        var e = s.call(this, { dir: t });
        return this.pushStack(e);
      },
      firstScrollable: function (t) {
        var e = s.call(this, { el: "first", dir: t });
        return this.pushStack(e);
      },
      smoothScroll: function (o, i) {
        if (((o = o || {}), "options" === o))
          return i
            ? this.each(function () {
                var e = t(this),
                  o = t.extend(e.data("ssOpts") || {}, i);
                t(this).data("ssOpts", o);
              })
            : this.first().data("ssOpts");
        var l = t.extend({}, t.fn.smoothScroll.defaults, o),
          s = function (o) {
            var i = this,
              s = t(this),
              n = t.extend({}, l, s.data("ssOpts") || {}),
              c = l.exclude,
              a = n.excludeWithin,
              r = 0,
              h = 0,
              u = !0,
              d = {},
              p = t.smoothScroll.filterPath(location.pathname),
              f = t.smoothScroll.filterPath(i.pathname),
              m = location.hostname === i.hostname || !i.hostname,
              g = n.scrollTarget || f === p,
              v = e(i.hash);
            if (n.scrollTarget || (m && g && v)) {
              for (; u && r < c.length; ) s.is(e(c[r++])) && (u = !1);
              for (; u && h < a.length; ) s.closest(a[h++]).length && (u = !1);
            } else u = !1;
            u &&
              (n.preventDefault && o.preventDefault(),
              t.extend(d, n, { scrollTarget: n.scrollTarget || v, link: i }),
              t.smoothScroll(d));
          };
        return (
          null !== o.delegateSelector
            ? this.undelegate(
                o.delegateSelector,
                "click.smoothscroll"
              ).delegate(o.delegateSelector, "click.smoothscroll", s)
            : this.unbind("click.smoothscroll").bind("click.smoothscroll", s),
          this
        );
      },
    }),
      (t.smoothScroll = function (e, o) {
        if ("options" === e && "object" == typeof o) return t.extend(i, o);
        var l,
          s,
          n,
          c,
          a,
          r = 0,
          h = "offset",
          u = "scrollTop",
          d = {},
          p = {};
        "number" == typeof e
          ? ((l = t.extend({ link: null }, t.fn.smoothScroll.defaults, i)),
            (n = e))
          : ((l = t.extend(
              { link: null },
              t.fn.smoothScroll.defaults,
              e || {},
              i
            )),
            l.scrollElement &&
              ((h = "position"),
              "static" === l.scrollElement.css("position") &&
                l.scrollElement.css("position", "relative"))),
          (u = "left" === l.direction ? "scrollLeft" : u),
          l.scrollElement
            ? ((s = l.scrollElement),
              /^(?:HTML|BODY)$/.test(s[0].nodeName) || (r = s[u]()))
            : (s = t("html, body").firstScrollable(l.direction)),
          l.beforeScroll.call(s, l),
          (n =
            "number" == typeof e
              ? e
              : o ||
                (t(l.scrollTarget)[h]() &&
                  t(l.scrollTarget)[h]()[l.direction]) ||
                0),
          (d[u] = n + r + l.offset),
          (c = l.speed),
          "auto" === c &&
            ((a = Math.abs(d[u] - s[u]())), (c = a / l.autoCoefficient)),
          (p = {
            duration: c,
            easing: l.easing,
            complete: function () {
              l.afterScroll.call(l.link, l);
            },
          }),
          l.step && (p.step = l.step),
          s.length ? s.stop().animate(d, p) : l.afterScroll.call(l.link, l);
      }),
      (t.smoothScroll.version = o),
      (t.smoothScroll.filterPath = function (t) {
        return (
          (t = t || ""),
          t
            .replace(/^\//, "")
            .replace(/(?:index|default).[a-zA-Z]{3,4}$/, "")
            .replace(/\/$/, "")
        );
      }),
      (t.fn.smoothScroll.defaults = l);
  }),
    (jQuery.cookie = function (t, e, o) {
      if (arguments.length > 1 && "[object Object]" !== String(e)) {
        if (
          ((o = jQuery.extend({}, o)),
          (null === e || void 0 === e) && (o.expires = -1),
          "number" == typeof o.expires)
        ) {
          var i = o.expires,
            l = (o.expires = new Date());
          l.setDate(l.getDate() + i);
        }
        return (
          (e = String(e)),
          (document.cookie = [
            encodeURIComponent(t),
            "=",
            o.raw ? e : encodeURIComponent(e),
            o.expires ? "; expires=" + o.expires.toUTCString() : "",
            o.path ? "; path=" + o.path : "",
            o.domain ? "; domain=" + o.domain : "",
            o.secure ? "; secure" : "",
          ].join(""))
        );
      }
      o = e || {};
      var s,
        n = o.raw
          ? function (t) {
              return t;
            }
          : decodeURIComponent;
      return (s = new RegExp(
        "(?:^|; )" + encodeURIComponent(t) + "=([^;]*)"
      ).exec(document.cookie))
        ? n(s[1])
        : null;
    }),
    jQuery(document).ready(function (t) {
      if ("undefined" != typeof tocplus) {
        if (
          ((t.fn.shrinkTOCWidth = function () {
            t(this).css({ width: "auto", display: "table" }),
              /MSIE 7\./.test(navigator.userAgent) && t(this).css("width", "");
          }),
          1 == tocplus.smooth_scroll)
        ) {
          var e = (hostname = pathname = qs = hash = null);
          t("body a").click(function () {
            if (
              ((hostname = t(this).prop("hostname")),
              (pathname = t(this).prop("pathname")),
              (qs = t(this).prop("search")),
              (hash = t(this).prop("hash")),
              pathname.length > 0 &&
                "/" != pathname.charAt(0) &&
                (pathname = "/" + pathname),
              window.location.hostname == hostname &&
                window.location.pathname == pathname &&
                window.location.search == qs &&
                "" !== hash)
            ) {
              var o = hash.replace(
                /([ !"$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,
                "\\$1"
              );
              t(o).length > 0
                ? (e = hash)
                : ((anchor = hash),
                  (anchor = anchor.replace("#", "")),
                  (e = 'a[name="' + anchor + '"]'),
                  0 == t(e).length && (e = "")),
                (offset =
                  "undefined" != typeof tocplus.smooth_scroll_offset
                    ? -1 * tocplus.smooth_scroll_offset
                    : t("#wpadminbar").length > 0 &&
                      t("#wpadminbar").is(":visible")
                    ? -30
                    : 0),
                e && t.smoothScroll({ scrollTarget: e, offset: offset });
            }
          });
        }
        if ("undefined" != typeof tocplus.visibility_show) {
          var o =
            "undefined" != typeof tocplus.visibility_hide_by_default ? !0 : !1;
          if (t.cookie)
            var i = t.cookie("tocplus_hidetoc")
              ? tocplus.visibility_show
              : tocplus.visibility_hide;
          else var i = tocplus.visibility_hide;
          o &&
            (i =
              i == tocplus.visibility_hide
                ? tocplus.visibility_show
                : tocplus.visibility_hide),
            t("#toc_container p.toc_title").append(
              ' <span class="toc_toggle">[<a href="#">' + i + "</a>]</span>"
            ),
            i == tocplus.visibility_show &&
              (t("ul.toc_list").hide(),
              t("#toc_container").addClass("contracted").shrinkTOCWidth()),
            t("span.toc_toggle a").click(function (e) {
              switch ((e.preventDefault(), t(this).html())) {
                case t("<div/>").html(tocplus.visibility_hide).text():
                  t(this).html(tocplus.visibility_show),
                    t.cookie &&
                      (o
                        ? t.cookie("tocplus_hidetoc", null, { path: "/" })
                        : t.cookie("tocplus_hidetoc", "1", {
                            expires: 30,
                            path: "/",
                          })),
                    t("ul.toc_list").hide("fast"),
                    t("#toc_container").addClass("contracted").shrinkTOCWidth();
                  break;
                case t("<div/>").html(tocplus.visibility_show).text():
                default:
                  t(this).html(tocplus.visibility_hide),
                    t.cookie &&
                      (o
                        ? t.cookie("tocplus_hidetoc", "1", {
                            expires: 30,
                            path: "/",
                          })
                        : t.cookie("tocplus_hidetoc", null, { path: "/" })),
                    t("#toc_container")
                      .css("width", tocplus.width)
                      .removeClass("contracted"),
                    t("ul.toc_list").show("fast");
              }
            });
        }
      }
    });
} catch (e) {}
try {
  /*! Thrive Headline Optimizer - 2020-11-25
   * http://www.thrivethemes.com/
   * Copyright (c) 2020 Thrive Themes */
  var THO_Front = THO_Front || {},
    ThriveGlobal = ThriveGlobal || { $j: jQuery.noConflict() };
  window.clearInterval(window.tho_title_interval),
    tho_change_titles(),
    ThriveGlobal.$j(function () {
      ThriveGlobal.$j(THO_Front).on("tho_log_event", function (a, b) {
        if (
          ((b.variation = THO_Titles[b.post_id]),
          void 0 !== THO_Titles[b.post_id])
        ) {
          (b.referrer = document.referrer),
            (b.is_single = THO_Front.data.is_single);
          THO_Front.check_user_cookie(b) &&
            (THO_Front.update_cookie(b),
            ThriveGlobal.$j.ajax({
              url: THO_Front.data.log_url,
              data: b,
              type: "post",
            }));
        }
      }),
        "undefiend" != typeof THO_Front.data &&
          THO_Front.data.log_engagements.length > 0 &&
          THO_Front.full_fast_log(THO_Front.data.log_engagements),
        ThriveGlobal.$j.each(THO_Front.data.active_triggers, function (a, b) {
          THO_Front[a](b);
        }),
        ThriveGlobal.$j(document.body).on(
          "updated_checkout",
          tho_change_titles
        ),
        ThriveGlobal.$j(document.body).on(
          "wc_fragments_refreshed",
          tho_change_titles
        ),
        ThriveGlobal.$j(document.body).on(
          "wc_fragments_loaded",
          tho_change_titles
        ),
        ThriveGlobal.$j(document.body).on("added_to_cart", tho_change_titles);
    }),
    (THO_Front.full_fast_log = function (a) {
      var b = {
          post_id: THO_Front.data.post_id,
          test_id: THO_Front.data.test_id,
          referrer: document.referrer,
          is_single: THO_Front.data.is_single,
          variation: THO_Titles[THO_Front.data.post_id],
        },
        c = [];
      for (var d in a)
        (b.log_type =
          a[d] == THO_Front.data.const._e_click
            ? THO_Front.data.const._engagement
            : THO_Front.data.const._impression),
          (b.eng_type = a[d]),
          THO_Front.check_user_cookie(b) && c.push(a[d]);
      c.length > 0 &&
        ((b.eng_type = c),
        THO_Front.update_cookie(b),
        ThriveGlobal.$j.ajax({
          url: THO_Front.data.log_url,
          data: b,
          type: "post",
        }));
    }),
    (THO_Front.click_through = function (a) {}),
    (THO_Front.viewport = function (a) {
      var b = ThriveGlobal.$j(window),
        c = function (a) {
          if (
            a.offset().top + 80 < b.height() + b.scrollTop() &&
            a.offset().top + a.outerHeight() > b.scrollTop() + 80
          ) {
            if (
              (a.addClass("tho-viewport-triggered"),
              (d.post_id = a.attr("data-post-id")),
              (d.test_id = a.attr("data-test-id")),
              void 0 === a.attr("click"))
            )
              return;
            d.post_id != THO_Front.data.post_id &&
              ThriveGlobal.$j(THO_Front).trigger("tho_log_event", d);
          }
        },
        d = {
          eng_type: THO_Front.data.const._e_click,
          log_type: THO_Front.data.const._impression,
        };
      ThriveGlobal.$j(document).ready(function () {
        var d = ThriveGlobal.$j(a + ", ." + a);
        d.length &&
          (b.scroll(function () {
            d.each(function () {
              var a = ThriveGlobal.$j(this);
              a.hasClass("tho-viewport-triggered") || c(a);
            });
          }),
          d.each(function () {
            c(ThriveGlobal.$j(this));
          }));
      });
    }),
    (THO_Front.time_on_content_signal = function (a) {
      var b = 1e3 * parseInt(a),
        c = !1,
        d = {
          eng_type: THO_Front.data.const._e_time,
          post_id: THO_Front.data.post_id,
          test_id: THO_Front.data.test_id,
          log_type: THO_Front.data.const._engagement,
        };
      setTimeout(function () {
        c || (ThriveGlobal.$j(THO_Front).trigger("tho_log_event", d), (c = !0));
      }, b);
    }),
    (THO_Front.scrolling_signal = function (a) {
      var b = parseInt(a) / 100,
        c = ThriveGlobal.$j(window),
        d = {
          post_id: THO_Front.data.post_id,
          test_id: THO_Front.data.test_id,
          eng_type: THO_Front.data.const._e_scroll,
        };
      ThriveGlobal.$j(function () {
        var a = !1,
          e = ThriveGlobal.$j("#" + THO_Front.data.end_of_content_id),
          f = function () {
            if (!a) {
              var f = ThriveGlobal.$j("body").height() - c.height();
              e.length && (f = e.offset().top - c.height()),
                (c.scrollTop() / f >= b || f < 0) &&
                  ((d.eng_type = THO_Front.data.const._e_scroll),
                  (d.log_type = THO_Front.data.const._engagement),
                  ThriveGlobal.$j(THO_Front).trigger("tho_log_event", d),
                  (a = !0));
            }
          };
        c.scroll(f), f();
      });
    }),
    (THO_Front.update_cookie = function (a) {
      var b,
        c,
        d = "tho_post_cookie_" + a.post_id,
        e = tho_get_cookie(d, !0);
      if (
        ("" == e &&
          (e = {
            no_click:
              THO_Front.data.is_single.length &&
              a.post_id == THO_Front.data.post_id
                ? 1
                : 0,
            impressions: [],
            engagements: [],
          }),
        a.eng_type instanceof Array)
      )
        for (var f in a.eng_type)
          (c =
            a.eng_type[f] == THO_Front.data.const._e_click
              ? "engagements"
              : "impressions"),
            e[c].push(a.eng_type[f]);
      else
        (c =
          a.log_type == THO_Front.data.const._engagement
            ? "engagements"
            : "impressions"),
          e[c].push(a.eng_type);
      (b = {
        post_id: a.post_id,
        test_id: a.test_id,
        no_click: e.no_click,
        impressions: e.impressions,
        engagements: e.engagements,
      }),
        tho_set_cookie(d, b, !0);
    }),
    (THO_Front.check_user_cookie = function (a) {
      var b = "tho_post_cookie_" + a.post_id,
        c = tho_get_cookie(b, !0);
      return "" == c
        ? a.log_type == THO_Front.data.const._impression
        : c.test_id == a.test_id &&
            !(
              c.impressions.indexOf(a.eng_type) >= 0 &&
              a.log_type == THO_Front.data.const._impression
            ) &&
            !(
              c.engagements.indexOf(a.eng_type) >= 0 &&
              a.log_type == THO_Front.data.const._engagement
            ) &&
            (a.eng_type != THO_Front.data.const._e_click ||
              (!c.no_click && -1 !== c.impressions.indexOf(a.eng_type)));
    }),
    (THO_Front.getEngagementName = function (a) {
      switch (parseInt(a)) {
        case 1:
          return "click";
        case 2:
          return "scroll";
        case 3:
          return "time";
        case 4:
          return "viewport";
        default:
          return "undetected";
      }
    });
} catch (e) {}
try {
  jQuery(document).ready(function (e) {
    if ("undefined" == typeof wplmiFrontend) return !1;
    if ("yes" === wplmiFrontend.is_enabled) {
      var n = e(wplmiFrontend.css_selectors);
      n.length && n.replaceWith(wplmiFrontend.html_template);
    }
  });
} catch (e) {}
try {
  var oncanvasStrings = { slicknav_menu_home: "HOME" };
} catch (e) {}
try {
  jQuery(document).ready(function ($) {
    "use strict";
    var $document = $(document);
    var $window = $(window);
    $(function () {
      $(".sf-menu").superfish({
        speed: "fast",
        delay: 0,
        animation: { height: "show" },
      });
    });
    $("#menu-main-slick").slicknav({
      prependTo: ".navbar-header",
      label: oncanvasStrings.slicknav_menu_home,
      allowParentLinks: true,
    });
    function oncanvas_mobileadjust() {
      var windowWidth = $(window).width();
      if (typeof window.orientation === "undefined") {
        $("#menu-main-menu").removeAttr("style");
      }
      if (windowWidth < 769) {
        $("#menu-main-menu").addClass("mobile-menu");
      }
    }
    oncanvas_mobileadjust();
    $(window).resize(function () {
      oncanvas_mobileadjust();
    });
  });
} catch (e) {}
try {
  function q2w3_sidebar_init() {
    for (var e = 0; e < q2w3_sidebar_options.length; e++)
      q2w3_sidebar(q2w3_sidebar_options[e]);
    jQuery(window).on("resize", function () {
      for (var e = 0; e < q2w3_sidebar_options.length; e++)
        q2w3_sidebar(q2w3_sidebar_options[e]);
    });
    var i = (function () {
      for (var e = ["WebKit", "Moz", "O", "Ms", ""], i = 0; i < e.length; i++)
        if (e[i] + "MutationObserver" in window)
          return window[e[i] + "MutationObserver"];
      return !1;
    })();
    0 == q2w3_sidebar_options[0].disable_mo_api && i
      ? ((q2w3Refresh = !1),
        new i(function (e) {
          e.forEach(function (e) {
            -1 !=
              q2w3_exclude_mutations_array(q2w3_sidebar_options).indexOf(
                e.target.id
              ) ||
              (e.target.className &&
                "function" == typeof e.target.className.indexOf &&
                -1 !=
                  e.target.className.indexOf("q2w3-fixed-widget-container")) ||
              (q2w3Refresh = !0);
          });
        }).observe(document.body, {
          childList: !0,
          attributes: !0,
          attributeFilter: ["style", "class"],
          subtree: !0,
        }),
        setInterval(function () {
          if (q2w3Refresh) {
            for (var e = 0; e < q2w3_sidebar_options.length; e++)
              q2w3_sidebar(q2w3_sidebar_options[e]);
            q2w3Refresh = !1;
          }
        }, 300))
      : (console.log("MutationObserver not supported or disabled!"),
        q2w3_sidebar_options[0].refresh_interval > 0 &&
          setInterval(function () {
            for (var e = 0; e < q2w3_sidebar_options.length; e++)
              q2w3_sidebar(q2w3_sidebar_options[e]);
          }, q2w3_sidebar_options[0].refresh_interval));
  }
  function q2w3_exclude_mutations_array(e) {
    for (var i = new Array(), o = 0; o < e.length; o++)
      if (e[o].widgets.length > 0)
        for (var t = 0; t < e[o].widgets.length; t++)
          i.push(e[o].widgets[t]), i.push(e[o].widgets[t] + "_clone");
    return i;
  }
  function q2w3_sidebar(e) {
    if (!e) return !1;
    if (!e.widgets) return !1;
    if (e.widgets.length < 1) return !1;
    function i() {}
    e.sidebar || (e.sidebar = "q2w3-default-sidebar");
    var o = new Array(),
      t = jQuery(window).height(),
      n = jQuery(document).height(),
      r = e.margin_top;
    jQuery("#wpadminbar").length &&
      (r = e.margin_top + jQuery("#wpadminbar").height()),
      jQuery(".q2w3-widget-clone-" + e.sidebar).remove();
    for (var s = 0; s < e.widgets.length; s++)
      (widget_obj = jQuery("#" + e.widgets[s])),
        widget_obj.css("position", ""),
        widget_obj.attr("id")
          ? ((o[s] = new i()),
            (o[s].obj = widget_obj),
            (o[s].clone = widget_obj.clone()),
            o[s].clone.children().remove(),
            (o[s].clone_id = widget_obj.attr("id") + "_clone"),
            o[s].clone.addClass("q2w3-widget-clone-" + e.sidebar),
            o[s].clone.attr("id", o[s].clone_id),
            o[s].clone.css("height", widget_obj.height()),
            o[s].clone.css("visibility", "hidden"),
            (o[s].offset_top = widget_obj.offset().top),
            (o[s].fixed_margin_top = r),
            (o[s].height = widget_obj.outerHeight(!0)),
            (o[s].fixed_margin_bottom = r + o[s].height),
            (r += o[s].height))
          : (o[s] = !1);
    var d,
      a = 0;
    for (s = o.length - 1; s >= 0; s--)
      o[s] &&
        ((o[s].next_widgets_height = a),
        (o[s].fixed_margin_bottom += a),
        (a += o[s].height),
        d ||
          ((d = widget_obj.parent()).addClass("q2w3-fixed-widget-container"),
          d.css("height", ""),
          d.height(d.height())));
    jQuery(window).off("scroll." + e.sidebar);
    for (s = 0; s < o.length; s++) o[s] && _(o[s]);
    function _(i) {
      var o,
        r = i.offset_top - i.fixed_margin_top,
        s = n - e.margin_bottom;
      e.stop_id &&
        jQuery("#" + e.stop_id).length &&
        (s = jQuery("#" + e.stop_id).offset().top - e.margin_bottom),
        (o = e.width_inherit ? "inherit" : i.obj.css("width"));
      var d = !1,
        a = !1,
        _ = !1;
      jQuery(window)
        .on("scroll." + e.sidebar, function (n) {
          if (
            jQuery(window).width() <= e.screen_max_width ||
            jQuery(window).height() <= e.screen_max_height
          )
            _ ||
              (i.obj.css("position", ""),
              i.obj.css("top", ""),
              i.obj.css("bottom", ""),
              i.obj.css("width", ""),
              i.obj.css("margin", ""),
              i.obj.css("padding", ""),
              widget_obj.parent().css("height", ""),
              jQuery("#" + i.clone_id).length > 0 &&
                jQuery("#" + i.clone_id).remove(),
              (_ = !0),
              (d = !1),
              (a = !1));
          else {
            var w = jQuery(this).scrollTop();
            w + i.fixed_margin_bottom >= s
              ? (a ||
                  (i.obj.css("position", "fixed"),
                  i.obj.css("top", ""),
                  i.obj.css("width", o),
                  jQuery("#" + i.clone_id).length <= 0 && i.obj.before(i.clone),
                  (a = !0),
                  (d = !1),
                  (_ = !1)),
                i.obj.css("bottom", w + t + i.next_widgets_height - s))
              : w >= r
              ? d ||
                (i.obj.css("position", "fixed"),
                i.obj.css("top", i.fixed_margin_top),
                i.obj.css("bottom", ""),
                i.obj.css("width", o),
                jQuery("#" + i.clone_id).length <= 0 && i.obj.before(i.clone),
                (d = !0),
                (a = !1),
                (_ = !1))
              : _ ||
                (i.obj.css("position", ""),
                i.obj.css("top", ""),
                i.obj.css("bottom", ""),
                i.obj.css("width", ""),
                jQuery("#" + i.clone_id).length > 0 &&
                  jQuery("#" + i.clone_id).remove(),
                (_ = !0),
                (d = !1),
                (a = !1));
          }
        })
        .trigger("scroll." + e.sidebar);
    }
  }
  "undefined" != typeof q2w3_sidebar_options && q2w3_sidebar_options.length > 0
    ? window.jQuery
      ? q2w3_sidebar_options[0].window_load_hook
        ? jQuery(window).load(q2w3_sidebar_init)
        : "loading" != document.readyState
        ? q2w3_sidebar_init()
        : document.addEventListener("DOMContentLoaded", q2w3_sidebar_init)
      : console.log("jQuery is not loaded!")
    : console.log("q2w3_sidebar_options not found!");
} catch (e) {}
try {
  (function (d) {
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.src = "https://a.omappapi.com/app/js/api.min.js";
    s.async = true;
    s.id = "omapi-script";
    d.getElementsByTagName("head")[0].appendChild(s);
  })(document);
} catch (e) {}
try {
  var a3_lazyload_params = { apply_images: "1", apply_videos: "1" };
} catch (e) {}
try {
  /* Lazy Load XT 1.1.0 | MIT License */
  !(function (m, y, e, o) {
    var p = "lazyLoadXT",
      w = "lazied",
      z = "load error",
      t = "lazy-hidden",
      C = e.documentElement || e.body,
      b = {
        autoInit: !0,
        selector: "img[data-src]",
        blankImage:
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        throttle: 99,
        forceLoad:
          y.onscroll === o || !!y.operamini || !C.getBoundingClientRect,
        loadEvent: "pageshow",
        updateEvent: "load orientationchange resize scroll touchmove focus",
        forceEvent: "lazyloadall",
        oninit: { removeClass: "lazy" },
        onshow: { addClass: t },
        onload: { removeClass: t, addClass: "lazy-loaded" },
        onerror: { removeClass: t },
        checkDuplicates: !0,
      },
      n = { srcAttr: "data-src", edgeX: 0, edgeY: 0, visibleOnly: !0 },
      a = m(y),
      E = m.isFunction,
      d = m.extend,
      T =
        m.data ||
        function (e, t) {
          return m(e).data(t);
        },
      L = [],
      I = 0,
      r = 0;
    function c(e, t) {
      return e[t] === o ? b[t] : e[t];
    }
    function X() {
      var e = y.pageYOffset;
      return e === o ? C.scrollTop : e;
    }
    function B(e, t) {
      var o = b["on" + e];
      o &&
        (E(o)
          ? o.call(t[0])
          : (o.addClass && t.addClass(o.addClass),
            o.removeClass && t.removeClass(o.removeClass))),
        t.trigger("lazy" + e, [t]),
        u();
    }
    function k(e) {
      B(e.type, m(this).off(z, k));
    }
    function i(e) {
      if (L.length) {
        (e = e || b.forceLoad), (I = 1 / 0);
        var t,
          o,
          n = X(),
          a = y.innerHeight || C.clientHeight,
          r = y.innerWidth || C.clientWidth;
        for (t = 0, o = L.length; t < o; t++) {
          var i,
            s = L[t],
            l = s[0],
            d = s[p],
            c = !1,
            u = e || T(l, w) < 0;
          if (m.contains(C, l)) {
            if (e || !d.visibleOnly || l.offsetWidth || l.offsetHeight) {
              if (!u) {
                var f = l.getBoundingClientRect(),
                  h = d.edgeX,
                  v = d.edgeY;
                u =
                  (i = f.top + n - v - a) <= n &&
                  f.bottom > -v &&
                  f.left <= r + h &&
                  f.right > -h;
              }
              if (u) {
                s.on(z, k), B("show", s);
                var A = d.srcAttr,
                  g = E(A) ? A(s) : l.getAttribute(A);
                g && (l.src = g), (c = !0);
              } else i < I && (I = i);
            }
          } else c = !0;
          c && (L.splice(t--, 1), o--);
        }
        o || B("complete", m(C));
      }
    }
    function s() {
      1 < r ? ((r = 1), i(), setTimeout(s, b.throttle)) : (r = 0);
    }
    function u(e) {
      L.length &&
        ((e && "scroll" === e.type && e.currentTarget === y && I >= X()) ||
          (r || setTimeout(s, 0), (r = 2)));
    }
    function l() {
      a.lazyLoadXT();
    }
    function f() {
      i(!0);
    }
    (m[p] = d(b, n, m[p])),
      (m.fn[p] = function (a) {
        var e,
          r = c((a = a || {}), "blankImage"),
          i = c(a, "checkDuplicates"),
          t = c(a, "scrollContainer"),
          s = c(a, "show"),
          l = {};
        for (e in (m(t).on("scroll", u), n)) l[e] = c(a, e);
        return this.each(function (e, t) {
          if (t === y) m(b.selector).lazyLoadXT(a);
          else {
            var o = i && T(t, w),
              n = m(t).data(w, s ? -1 : 1);
            if (o) return void u();
            r && "IMG" === t.tagName && !t.src && (t.src = r),
              (n[p] = d({}, l)),
              B("init", n),
              L.push(n),
              u();
          }
        });
      }),
      m(e).ready(function () {
        B("start", a),
          a.on(b.updateEvent, u).on(b.forceEvent, f),
          m(e).on(b.updateEvent, u),
          b.autoInit && (a.on(b.loadEvent, l), l());
      });
  })(window.jQuery || window.Zepto || window.$, window, document),
    (function (s) {
      var o = s.lazyLoadXT;
      (o.selector += ",video,iframe[data-src],embed[data-src]"),
        (o.videoPoster = "data-poster"),
        s(document).on("lazyshow", "video", function (e, t) {
          var a = t.lazyLoadXT.srcAttr,
            r = s.isFunction(a),
            i = !1;
          t.attr("poster", t.attr(o.videoPoster)),
            t.children("source,track").each(function (e, t) {
              var o = s(t),
                n = r ? a(o) : o.attr(a);
              n && (o.attr("src", n), (i = !0));
            }),
            i &&
              void 0 !== s(this).attr("preload") &&
              "none" != s(this).attr("preload") &&
              this.load(),
            s(this).removeClass("lazy-hidden");
        }),
        s(document).on("lazyshow", "embed", function (e, t) {
          s(this).removeClass("lazy-hidden");
        });
    })(window.jQuery || window.Zepto || window.$);
} catch (e) {}
try {
  /* Lazy Load XT 1.1.0 | MIT License */
  !(function (t, r, e, s) {
    var n,
      a,
      c = t.lazyLoadXT,
      i = "srcset" in new Image(),
      o = /^\s*(\S*)/,
      d = /\S\s+(\d+)w/,
      u = /\S\s+(\d+)h/,
      l = /\S\s+([\d\.]+)x/,
      x = [0, 1 / 0],
      w = [0, 1],
      h = {
        srcsetAttr: "data-srcset",
        srcsetExtended: !0,
        srcsetBaseAttr: "data-srcset-base",
        srcsetExtAttr: "data-srcset-ext",
      },
      f = { w: 0, h: 0, x: 0 };
    for (n in h) void 0 === c[n] && (c[n] = h[n]);
    function p(r, e) {
      return Math[e].apply(
        null,
        t.map(r, function (t) {
          return t[n];
        })
      );
    }
    function A(t) {
      return t[n] >= f[n] || t[n] === a;
    }
    function m(t) {
      return t[n] === a;
    }
    function g(s) {
      var i = s.attr(c.srcsetAttr);
      if (!i) return !1;
      var h = t.map(
        i.replace(/(\s[\d.]+[whx]),/g, "$1 @,@ ").split(" @,@ "),
        function (t) {
          return {
            url: o.exec(t)[1],
            w: parseFloat((d.exec(t) || x)[1]),
            h: parseFloat((u.exec(t) || x)[1]),
            x: parseFloat((l.exec(t) || w)[1]),
          };
        }
      );
      if (!h.length) return !1;
      var g,
        v,
        y = e.documentElement;
      for (g in (f = {
        w: r.innerWidth || y.clientWidth,
        h: r.innerHeight || y.clientHeight,
        x: r.devicePixelRatio || 1,
      }))
        (n = g), (a = p(h, "max")), (h = t.grep(h, A));
      for (g in f) (n = g), (a = p(h, "min")), (h = t.grep(h, m));
      return (
        (v = h[0].url),
        c.srcsetExtended &&
          (v =
            (s.attr(c.srcsetBaseAttr) || "") +
            v +
            (s.attr(c.srcsetExtAttr) || "")),
        v
      );
    }
    (c.selector += ",img[" + c.srcsetAttr + "],source[" + c.srcsetAttr + "]"),
      t(e).on("lazyshow", "img", function (t, r) {
        var e = r.attr(c.srcsetAttr);
        e &&
          (!c.srcsetExtended && i
            ? (r.attr("srcset", e), r.attr("data-srcset", ""))
            : (r.lazyLoadXT.srcAttr = g));
      }),
      t(e).on("lazyshow", "source", function (r, e) {
        t(this).removeClass("lazy-hidden");
        var s = e.attr(c.srcsetAttr);
        s &&
          (!c.srcsetExtended && i
            ? (e.attr("srcset", s), e.attr("data-srcset", ""))
            : (e.lazyLoadXT.srcAttr = g));
      });
  })(window.jQuery || window.Zepto || window.$, window, document);
} catch (e) {}
try {
  var a3_lazyload_extend_params = {
    edgeY: "0",
    horizontal_container_classnames: "",
  };
} catch (e) {}
try {
  jQuery.lazyLoadXT.updateEvent =
    "load orientationchange resize scroll touchmove focus click customlazyloadxtevent";
  jQuery.lazyLoadXT.edgeY = a3_lazyload_extend_params.edgeY;
  jQuery.lazyLoadXT.srcsetExtended = false;
  if (
    typeof a3_lazyload_extend_params.horizontal_container_classnames !==
      "undefined" &&
    "" !== a3_lazyload_extend_params.horizontal_container_classnames
  ) {
    jQuery.lazyLoadXT.scrollContainer =
      a3_lazyload_extend_params.horizontal_container_classnames;
  }
  jQuery(document).ready(function ($) {
    jQuery(document).on("mouseenter", ".site-header-cart", function () {
      jQuery(document).trigger("customlazyloadxtevent");
    });
    jQuery(document).on("mouseenter", ".widget_shopping_cart", function () {
      jQuery(document).trigger("customlazyloadxtevent");
    });
    jQuery(document).on(
      "mouseover",
      "#wp-admin-bar-top-secondary",
      function () {
        jQuery(document).trigger("customlazyloadxtevent");
      }
    );
  });
  jQuery(window).on("ajaxComplete", function () {
    setTimeout(function () {
      jQuery(window).lazyLoadXT();
    }, 1000);
  });
} catch (e) {}
try {
  /*! This file is auto-generated */
  !(function (I) {
    I.fn.hoverIntent = function (e, t, n) {
      function r(e) {
        (o = e.pageX), (v = e.pageY);
      }
      var o,
        v,
        i,
        u,
        s = { interval: 100, sensitivity: 6, timeout: 0 },
        s =
          "object" == typeof e
            ? I.extend(s, e)
            : I.isFunction(t)
            ? I.extend(s, { over: e, out: t, selector: n })
            : I.extend(s, { over: e, out: e, selector: t }),
        h = function (e, t) {
          if (
            ((t.hoverIntent_t = clearTimeout(t.hoverIntent_t)),
            Math.sqrt((i - o) * (i - o) + (u - v) * (u - v)) < s.sensitivity)
          )
            return (
              I(t).off("mousemove.hoverIntent", r),
              (t.hoverIntent_s = !0),
              s.over.apply(t, [e])
            );
          (i = o),
            (u = v),
            (t.hoverIntent_t = setTimeout(function () {
              h(e, t);
            }, s.interval));
        },
        t = function (e) {
          var n = I.extend({}, e),
            o = this;
          o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)),
            "mouseenter" === e.type
              ? ((i = n.pageX),
                (u = n.pageY),
                I(o).on("mousemove.hoverIntent", r),
                o.hoverIntent_s ||
                  (o.hoverIntent_t = setTimeout(function () {
                    h(n, o);
                  }, s.interval)))
              : (I(o).off("mousemove.hoverIntent", r),
                o.hoverIntent_s &&
                  (o.hoverIntent_t = setTimeout(function () {
                    var e, t;
                    (e = n),
                      ((t = o).hoverIntent_t = clearTimeout(t.hoverIntent_t)),
                      (t.hoverIntent_s = !1),
                      s.out.apply(t, [e]);
                  }, s.timeout)));
        };
      return this.on(
        { "mouseenter.hoverIntent": t, "mouseleave.hoverIntent": t },
        s.selector
      );
    };
  })(jQuery);
} catch (e) {}
try {
  var megamenu = { timeout: "300", interval: "100" };
} catch (e) {}
try {
  /*! Max Mega Menu jQuery Plugin */
  (function ($) {
    "use strict";
    $.maxmegamenu = function (menu, options) {
      var plugin = this;
      var $menu = $(menu);
      var $toggle_bar = $menu.siblings(".mega-menu-toggle");
      var html_body_class_timeout;
      var defaults = {
        event: $menu.attr("data-event"),
        effect: $menu.attr("data-effect"),
        effect_speed: parseInt($menu.attr("data-effect-speed")),
        effect_mobile: $menu.attr("data-effect-mobile"),
        effect_speed_mobile: parseInt($menu.attr("data-effect-speed-mobile")),
        panel_width: $menu.attr("data-panel-width"),
        panel_inner_width: $menu.attr("data-panel-inner-width"),
        mobile_force_width: $menu.attr("data-mobile-force-width"),
        mobile_overlay: $menu.attr("data-mobile-overlay"),
        mobile_state: $menu.attr("data-mobile-state"),
        second_click: $menu.attr("data-second-click"),
        vertical_behaviour: $menu.attr("data-vertical-behaviour"),
        document_click: $menu.attr("data-document-click"),
        breakpoint: $menu.attr("data-breakpoint"),
        unbind_events: $menu.attr("data-unbind"),
        hover_intent_timeout: $menu.attr("data-hover-intent-timeout"),
        hover_intent_interval: $menu.attr("data-hover-intent-interval"),
      };
      plugin.settings = {};
      var items_with_submenus = $(
        "li.mega-menu-megamenu.mega-menu-item-has-children," +
          "li.mega-menu-flyout.mega-menu-item-has-children," +
          "li.mega-menu-tabbed > ul.mega-sub-menu > li.mega-menu-item-has-children," +
          "li.mega-menu-flyout li.mega-menu-item-has-children",
        menu
      );
      var collapse_children_parents = $(
        "li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link",
        menu
      );
      plugin.addAnimatingClass = function (element) {
        if (plugin.settings.effect === "disabled") {
          return;
        }
        $(".mega-animating").removeClass("mega-animating");
        var timeout =
          plugin.settings.effect_speed + parseInt(megamenu.timeout, 10);
        element.addClass("mega-animating");
        setTimeout(function () {
          element.removeClass("mega-animating");
        }, timeout);
      };
      plugin.hideAllPanels = function () {
        $(".mega-toggle-on > a.mega-menu-link", $menu).each(function () {
          plugin.hidePanel($(this), false);
        });
      };
      plugin.expandMobileSubMenus = function () {
        $(
          ".mega-menu-item-has-children.mega-expand-on-mobile > a.mega-menu-link",
          $menu
        ).each(function () {
          plugin.showPanel($(this));
        });
        if (plugin.settings.mobile_state == "expand_all") {
          $(".mega-menu-item-has-children > a.mega-menu-link", $menu).each(
            function () {
              plugin.showPanel($(this));
            }
          );
        }
        if (plugin.settings.mobile_state == "expand_active") {
          $(
            "li.mega-current-menu-ancestor.mega-menu-item-has-children > a.mega-menu-link," +
              "li.mega-current-menu-item.mega-menu-item-has-children > a.mega-menu-link" +
              "li.mega-current-menu-parent.mega-menu-item-has-children > a.mega-menu-link" +
              "li.mega-current_page_ancestor.mega-menu-item-has-children > a.mega-menu-link" +
              "li.mega-current_page_item.mega-menu-item-has-children > a.mega-menu-link",
            $menu
          ).each(function () {
            plugin.showPanel($(this));
          });
        }
      };
      plugin.hideSiblingPanels = function (anchor, immediate) {
        anchor
          .parent()
          .parent()
          .find(".mega-toggle-on")
          .children("a.mega-menu-link")
          .each(function () {
            plugin.hidePanel($(this), immediate);
          });
      };
      plugin.isDesktopView = function () {
        return (
          Math.max(window.outerWidth, $(window).width()) >
          plugin.settings.breakpoint
        );
      };
      plugin.isMobileView = function () {
        return !plugin.isDesktopView();
      };
      plugin.showPanel = function (anchor) {
        anchor.parent().triggerHandler("before_open_panel");
        anchor.attr("aria-expanded", "true");
        $(".mega-animating").removeClass("mega-animating");
        if (
          plugin.isMobileView() &&
          anchor.parent().hasClass("mega-hide-sub-menu-on-mobile")
        ) {
          return;
        }
        if (
          plugin.isDesktopView() &&
          ($menu.hasClass("mega-menu-horizontal") ||
            $menu.hasClass("mega-menu-vertical")) &&
          !anchor.parent().hasClass("mega-collapse-children")
        ) {
          plugin.hideSiblingPanels(anchor, true);
        }
        if (
          (plugin.isMobileView() &&
            $menu.hasClass("mega-keyboard-navigation")) ||
          plugin.settings.vertical_behaviour === "accordion"
        ) {
          plugin.hideSiblingPanels(anchor, false);
        }
        plugin.calculateDynamicSubmenuWidths(anchor);
        if (
          anchor.parent().hasClass("mega-collapse-children") ||
          plugin.settings.effect === "slide" ||
          (plugin.isMobileView() &&
            (plugin.settings.effect_mobile === "slide" ||
              plugin.settings.effect_mobile === "slide_left" ||
              plugin.settings.effect_mobile === "slide_right"))
        ) {
          var speed = plugin.isMobileView()
            ? plugin.settings.effect_speed_mobile
            : plugin.settings.effect_speed;
          anchor
            .siblings(".mega-sub-menu")
            .css("display", "none")
            .animate(
              {
                height: "show",
                paddingTop: "show",
                paddingBottom: "show",
                minHeight: "show",
              },
              speed,
              function () {
                $(this).css("display", "");
              }
            );
        }
        anchor.parent().addClass("mega-toggle-on").triggerHandler("open_panel");
      };
      plugin.hidePanel = function (anchor, immediate) {
        anchor.parent().triggerHandler("before_close_panel");
        anchor.attr("aria-expanded", "false");
        if (
          anchor.parent().hasClass("mega-collapse-children") ||
          (!immediate && plugin.settings.effect === "slide") ||
          (plugin.isMobileView() &&
            (plugin.settings.effect_mobile === "slide" ||
              plugin.settings.effect_mobile === "slide_left" ||
              plugin.settings.effect_mobile === "slide_right"))
        ) {
          var speed = plugin.isMobileView()
            ? plugin.settings.effect_speed_mobile
            : plugin.settings.effect_speed;
          anchor.siblings(".mega-sub-menu").animate(
            {
              height: "hide",
              paddingTop: "hide",
              paddingBottom: "hide",
              minHeight: "hide",
            },
            speed,
            function () {
              anchor.siblings(".mega-sub-menu").css("display", "");
              anchor
                .parent()
                .removeClass("mega-toggle-on")
                .triggerHandler("close_panel");
            }
          );
          return;
        }
        if (immediate) {
          anchor
            .siblings(".mega-sub-menu")
            .css("display", "none")
            .delay(plugin.settings.effect_speed)
            .queue(function () {
              $(this).css("display", "").dequeue();
            });
        }
        anchor
          .siblings(".mega-sub-menu")
          .find(".widget_media_video video")
          .each(function () {
            this.player.pause();
          });
        anchor
          .parent()
          .removeClass("mega-toggle-on")
          .triggerHandler("close_panel");
        plugin.addAnimatingClass(anchor.parent());
      };
      plugin.calculateDynamicSubmenuWidths = function (anchor) {
        if (
          anchor.parent().hasClass("mega-menu-megamenu") &&
          anchor.parent().parent().hasClass("max-mega-menu") &&
          plugin.settings.panel_width &&
          $(plugin.settings.panel_width).length > 0
        ) {
          if (plugin.isDesktopView()) {
            var submenu_offset = $menu.offset();
            var target_offset = $(plugin.settings.panel_width).offset();
            anchor.siblings(".mega-sub-menu").css({
              width: $(plugin.settings.panel_width).outerWidth(),
              left: target_offset.left - submenu_offset.left + "px",
            });
          } else {
            anchor.siblings(".mega-sub-menu").css({ width: "", left: "" });
          }
        }
        if (
          anchor.parent().hasClass("mega-menu-megamenu") &&
          anchor.parent().parent().hasClass("max-mega-menu") &&
          plugin.settings.panel_inner_width &&
          $(plugin.settings.panel_inner_width).length > 0
        ) {
          var target_width = 0;
          if ($(plugin.settings.panel_inner_width).length) {
            target_width = parseInt(
              $(plugin.settings.panel_inner_width).width(),
              10
            );
          } else {
            target_width = parseInt(plugin.settings.panel_inner_width, 10);
          }
          var submenu_width = parseInt(
            anchor.siblings(".mega-sub-menu").innerWidth(),
            10
          );
          if (
            plugin.isDesktopView() &&
            target_width > 0 &&
            target_width < submenu_width
          ) {
            anchor.siblings(".mega-sub-menu").css({
              paddingLeft: (submenu_width - target_width) / 2 + "px",
              paddingRight: (submenu_width - target_width) / 2 + "px",
            });
          } else {
            anchor
              .siblings(".mega-sub-menu")
              .css({ paddingLeft: "", paddingRight: "" });
          }
        }
      };
      plugin.bindClickEvents = function () {
        var dragging = false;
        $(document).on({
          touchmove: function (e) {
            dragging = true;
          },
          touchstart: function (e) {
            dragging = false;
          },
        });
        $(document).on("click touchend", function (e) {
          if (
            !dragging &&
            plugin.settings.document_click === "collapse" &&
            !$(e.target).closest(".max-mega-menu li").length &&
            !$(e.target).closest(".mega-menu-toggle").length
          ) {
            plugin.hideAllPanels();
            plugin.hideMobileMenu();
          }
          dragging = false;
        });
        var clickable_parents = $(
          "> a.mega-menu-link",
          items_with_submenus
        ).add(collapse_children_parents);
        clickable_parents.on("touchend.megamenu", function (e) {
          plugin.unbindHoverEvents();
          plugin.unbindHoverIntentEvents();
        });
        clickable_parents
          .not("[data-has-click-event]")
          .on("click.megamenu", function (e) {
            if (
              plugin.isDesktopView() &&
              $(this).parent().hasClass("mega-toggle-on") &&
              $(this).parent().parent().parent().hasClass("mega-menu-tabbed")
            ) {
              if (plugin.settings.second_click === "go") {
                return;
              } else {
                e.preventDefault();
                return;
              }
            }
            if (dragging) {
              return;
            }
            if (
              plugin.isMobileView() &&
              $(this).parent().hasClass("mega-hide-sub-menu-on-mobile")
            ) {
              return;
            }
            if (
              (plugin.settings.second_click === "go" ||
                $(this).parent().hasClass("mega-click-click-go")) &&
              $(this).attr("href") !== undefined
            ) {
              if (!$(this).parent().hasClass("mega-toggle-on")) {
                e.preventDefault();
                plugin.showPanel($(this));
              }
            } else {
              e.preventDefault();
              if ($(this).parent().hasClass("mega-toggle-on")) {
                plugin.hidePanel($(this), false);
              } else {
                plugin.showPanel($(this));
              }
            }
          });
        collapse_children_parents.each(function () {
          $(this).attr("data-has-click-event", "true");
        });
      };
      plugin.bindHoverEvents = function () {
        items_with_submenus.on({
          "mouseenter.megamenu": function () {
            plugin.unbindClickEvents();
            if (!$(this).hasClass("mega-toggle-on")) {
              plugin.showPanel($(this).children("a.mega-menu-link"));
            }
          },
          "mouseleave.megamenu": function () {
            if (
              $(this).hasClass("mega-toggle-on") &&
              !$(this).hasClass("mega-disable-collapse") &&
              !$(this).parent().parent().hasClass("mega-menu-tabbed")
            ) {
              plugin.hidePanel($(this).children("a.mega-menu-link"), false);
            }
          },
        });
      };
      plugin.bindHoverIntentEvents = function () {
        items_with_submenus.hoverIntent({
          over: function () {
            plugin.unbindClickEvents();
            if (!$(this).hasClass("mega-toggle-on")) {
              plugin.showPanel($(this).children("a.mega-menu-link"));
            }
          },
          out: function () {
            if (
              $(this).hasClass("mega-toggle-on") &&
              !$(this).hasClass("mega-disable-collapse") &&
              !$(this).parent().parent().hasClass("mega-menu-tabbed")
            ) {
              plugin.hidePanel($(this).children("a.mega-menu-link"), false);
            }
          },
          timeout: plugin.settings.hover_intent_timeout,
          interval: plugin.settings.hover_intent_interval,
        });
      };
      plugin.bindKeyboardEvents = function () {
        var tab_key = 9;
        var escape_key = 27;
        var enter_key = 13;
        var left_arrow_key = 37;
        var right_arrow_key = 39;
        var space_key = 32;
        $menu.parent().on("keyup.megamenu", function (e) {
          var keyCode = e.keyCode || e.which;
          if (keyCode === tab_key) {
            $menu.parent().addClass("mega-keyboard-navigation");
          }
        });
        $menu.parent().on("keydown.megamenu", function (e) {
          var keyCode = e.keyCode || e.which;
          var active_link = $(e.target);
          if (
            keyCode === space_key &&
            active_link.is(".mega-menu-link") &&
            $menu.parent().hasClass("mega-keyboard-navigation")
          ) {
            e.preventDefault();
            if (active_link.parent().is(items_with_submenus)) {
              if (
                active_link.parent().hasClass("mega-toggle-on") &&
                !active_link
                  .parent()
                  .parent()
                  .parent()
                  .hasClass("mega-menu-tabbed")
              ) {
                plugin.hidePanel(active_link);
              } else {
                plugin.showPanel(active_link);
              }
            }
          }
        });
        $menu.parent().on("keyup.megamenu", function (e) {
          var keyCode = e.keyCode || e.which;
          var active_link = $(e.target);
          if (
            keyCode === tab_key &&
            $menu.parent().hasClass("mega-keyboard-navigation")
          ) {
            if (
              active_link.parent().is(items_with_submenus) &&
              active_link.is("[href]") !== false
            ) {
              plugin.showPanel(active_link);
            } else {
              if (
                !active_link
                  .parent()
                  .parent()
                  .parent()
                  .hasClass("mega-menu-tabbed")
              ) {
                plugin.hideSiblingPanels(active_link);
              }
            }
          }
          if (
            keyCode === escape_key &&
            $menu.parent().hasClass("mega-keyboard-navigation")
          ) {
            var submenu_open = $("> .mega-toggle-on", $menu).length !== 0;
            $("> .mega-toggle-on > a.mega-menu-link", $menu).focus();
            plugin.hideAllPanels();
            if (plugin.isMobileView() && !submenu_open) {
              plugin.hideMobileMenu();
              $(
                ".mega-menu-toggle-block, button.mega-toggle-animated",
                $toggle_bar
              )
                .first()
                .focus();
            }
          }
          if (
            keyCode === enter_key &&
            $menu.parent().hasClass("mega-keyboard-navigation")
          ) {
            if (active_link.hasClass("mega-menu-toggle-block")) {
              if ($toggle_bar.hasClass("mega-menu-open")) {
                plugin.hideMobileMenu();
              } else {
                plugin.showMobileMenu();
              }
            }
            if (
              active_link.parent().is(items_with_submenus) &&
              active_link.is("[href]") === false
            ) {
              if (
                active_link.parent().hasClass("mega-toggle-on") &&
                !active_link
                  .parent()
                  .parent()
                  .parent()
                  .hasClass("mega-menu-tabbed")
              ) {
                plugin.hidePanel(active_link);
              } else {
                plugin.showPanel(active_link);
              }
            }
          }
          if (
            keyCode === right_arrow_key &&
            plugin.isDesktopView() &&
            $menu.parent().hasClass("mega-keyboard-navigation") &&
            $menu.hasClass("mega-menu-horizontal")
          ) {
            var next_top_level_item = $("> .mega-toggle-on", $menu)
              .nextAll("li.mega-menu-item:visible")
              .find("> a.mega-menu-link, .mega-search input[type=text]")
              .first();
            if (next_top_level_item.length === 0) {
              next_top_level_item = $(":focus", $menu)
                .parent()
                .nextAll("li.mega-menu-item:visible")
                .find("> a.mega-menu-link, .mega-search input[type=text]")
                .first();
            }
            next_top_level_item.focus();
            if (
              next_top_level_item.parent().is(items_with_submenus) &&
              next_top_level_item.is("[href]") !== false
            ) {
              plugin.showPanel(next_top_level_item);
            } else {
              plugin.hideSiblingPanels(next_top_level_item);
            }
          }
          if (
            keyCode === left_arrow_key &&
            plugin.isDesktopView() &&
            $menu.parent().hasClass("mega-keyboard-navigation") &&
            $menu.hasClass("mega-menu-horizontal")
          ) {
            var prev_top_level_item = $("> .mega-toggle-on", $menu)
              .prevAll("li.mega-menu-item:visible")
              .find("> a.mega-menu-link, .mega-search input[type=text]")
              .last();
            if (prev_top_level_item.length === 0) {
              prev_top_level_item = $(":focus", $menu)
                .parent()
                .prevAll("li.mega-menu-item:visible")
                .find("> a.mega-menu-link, .mega-search input[type=text]")
                .last();
            }
            prev_top_level_item.focus();
            if (
              prev_top_level_item.parent().is(items_with_submenus) &&
              prev_top_level_item.is("[href]") !== false
            ) {
              plugin.showPanel(prev_top_level_item);
            } else {
              plugin.hideSiblingPanels(prev_top_level_item);
            }
          }
        });
        $menu.parent().on("focusout.megamenu", function (e) {
          if ($menu.parent().hasClass("mega-keyboard-navigation")) {
            setTimeout(function () {
              var menu_has_focus = $menu.parent().find(":focus").length > 0;
              if (!menu_has_focus) {
                $menu.parent().removeClass("mega-keyboard-navigation");
                plugin.hideAllPanels();
                plugin.hideMobileMenu();
              }
            }, 10);
          }
        });
      };
      plugin.unbindAllEvents = function () {
        $(
          "ul.mega-sub-menu, li.mega-menu-item, li.mega-menu-row, li.mega-menu-column, a.mega-menu-link, span.mega-indicator",
          menu
        )
          .off()
          .unbind();
      };
      plugin.unbindClickEvents = function () {
        $("> a.mega-menu-link", items_with_submenus)
          .not(collapse_children_parents)
          .off("click.megamenu touchend.megamenu");
      };
      plugin.unbindHoverEvents = function () {
        items_with_submenus.unbind("mouseenter.megamenu mouseleave.megamenu");
      };
      plugin.unbindHoverIntentEvents = function () {
        items_with_submenus
          .unbind("mouseenter mouseleave")
          .removeProp("hoverIntent_t")
          .removeProp("hoverIntent_s");
      };
      plugin.unbindKeyboardEvents = function () {
        $menu.parent().off("keyup.megamenu keydown.megamenu focusout.megamenu");
      };
      plugin.unbindMegaMenuEvents = function () {
        if (plugin.settings.event === "hover_intent") {
          plugin.unbindHoverIntentEvents();
        }
        if (plugin.settings.event === "hover") {
          plugin.unbindHoverEvents();
        }
        plugin.unbindClickEvents();
        plugin.unbindKeyboardEvents();
      };
      plugin.bindMegaMenuEvents = function () {
        plugin.unbindMegaMenuEvents();
        if (
          plugin.isDesktopView() &&
          plugin.settings.event === "hover_intent"
        ) {
          plugin.bindHoverIntentEvents();
        }
        if (plugin.isDesktopView() && plugin.settings.event === "hover") {
          plugin.bindHoverEvents();
        }
        plugin.bindClickEvents();
        plugin.bindKeyboardEvents();
      };
      plugin.checkWidth = function () {
        if (plugin.isMobileView() && $menu.data("view") === "desktop") {
          plugin.switchToMobile();
        }
        if (plugin.isDesktopView() && $menu.data("view") === "mobile") {
          plugin.switchToDesktop();
        }
        plugin.calculateDynamicSubmenuWidths(
          $("> li.mega-menu-megamenu > a.mega-menu-link", $menu)
        );
      };
      plugin.reverseRightAlignedItems = function () {
        if (!$("body").hasClass("rtl")) {
          $menu.append(
            $menu.children("li.mega-item-align-right").get().reverse()
          );
        }
      };
      plugin.addClearClassesToMobileItems = function () {
        $(".mega-menu-row", $menu).each(function () {
          $(
            "> .mega-sub-menu > .mega-menu-column:not(.mega-hide-on-mobile)",
            $(this)
          )
            .filter(":even")
            .addClass("mega-menu-clear");
        });
      };
      plugin.initDesktop = function () {
        $menu.data("view", "desktop");
        plugin.bindMegaMenuEvents();
        plugin.initIndicators();
      };
      plugin.switchToDesktop = function () {
        $menu.data("view", "desktop");
        plugin.bindMegaMenuEvents();
        plugin.reverseRightAlignedItems();
        plugin.hideAllPanels();
        plugin.hideMobileMenu(true);
      };
      plugin.initMobile = function () {
        plugin.switchToMobile();
      };
      plugin.switchToMobile = function () {
        $menu.data("view", "mobile");
        plugin.bindMegaMenuEvents();
        plugin.initIndicators();
        plugin.reverseRightAlignedItems();
        plugin.addClearClassesToMobileItems();
        plugin.hideAllPanels();
        plugin.expandMobileSubMenus();
      };
      plugin.initToggleBar = function () {
        $toggle_bar.on("click", function (e) {
          if (
            $(e.target).is(
              ".mega-menu-toggle, .mega-menu-toggle-custom-block *, .mega-menu-toggle-block, .mega-menu-toggle-animated-block, .mega-menu-toggle-animated-block *, .mega-toggle-blocks-left, .mega-toggle-blocks-center, .mega-toggle-blocks-right, .mega-toggle-label, .mega-toggle-label span"
            )
          ) {
            e.preventDefault();
            if ($(this).hasClass("mega-menu-open")) {
              plugin.hideMobileMenu();
            } else {
              plugin.showMobileMenu();
            }
          }
        });
      };
      plugin.initIndicators = function () {
        $("span.mega-indicator", $menu)
          .not("[data-has-click-event]")
          .on("click.megamenu", function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).parent().parent().hasClass("mega-toggle-on")) {
              if (
                !$(this)
                  .parent()
                  .parent()
                  .parent()
                  .parent()
                  .hasClass("mega-menu-tabbed") ||
                plugin.isMobileView()
              ) {
                plugin.hidePanel($(this).parent(), false);
              }
            } else {
              plugin.showPanel($(this).parent(), false);
            }
          });
        $("span.mega-indicator", $menu).each(function () {
          $(this).attr("data-has-click-event", "true");
        });
      };
      plugin.hideMobileMenu = function (force) {
        force = force || false;
        if (!$toggle_bar.is(":visible") && !force) {
          return;
        }
        html_body_class_timeout = setTimeout(function () {
          $("body").removeClass($menu.attr("id") + "-mobile-open");
          $("html").removeClass($menu.attr("id") + "-off-canvas-open");
        }, plugin.settings.effect_speed_mobile);
        $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr(
          "aria-expanded",
          "false"
        );
        if (plugin.settings.effect_mobile === "slide" && !force) {
          $menu.animate(
            { height: "hide" },
            plugin.settings.effect_speed_mobile,
            function () {
              $menu.css({ width: "", left: "", display: "" });
            }
          );
        }
        $menu.css({ width: "", left: "", display: "" });
        $toggle_bar.removeClass("mega-menu-open");
        $menu.triggerHandler("mmm:hideMobileMenu");
      };
      plugin.showMobileMenu = function () {
        if (!$toggle_bar.is(":visible")) {
          return;
        }
        clearTimeout(html_body_class_timeout);
        $("body").addClass($menu.attr("id") + "-mobile-open");
        if (
          plugin.settings.effect_mobile === "slide_left" ||
          plugin.settings.effect_mobile === "slide_right"
        ) {
          $("html").addClass($menu.attr("id") + "-off-canvas-open");
        }
        $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr(
          "aria-expanded",
          "true"
        );
        plugin.toggleBarForceWidth();
        if (plugin.settings.effect_mobile === "slide") {
          $menu.animate(
            { height: "show" },
            plugin.settings.effect_speed_mobile
          );
        }
        $toggle_bar.addClass("mega-menu-open");
        $menu.triggerHandler("mmm:showMobileMenu");
      };
      plugin.toggleBarForceWidth = function () {
        if (
          $(plugin.settings.mobile_force_width).length &&
          (plugin.settings.effect_mobile === "slide" ||
            plugin.settings.effect_mobile === "disabled")
        ) {
          var submenu_offset = $toggle_bar.offset();
          var target_offset = $(plugin.settings.mobile_force_width).offset();
          $menu.css({
            width: $(plugin.settings.mobile_force_width).outerWidth(),
            left: target_offset.left - submenu_offset.left + "px",
          });
        }
      };
      plugin.init = function () {
        $menu.triggerHandler("before_mega_menu_init");
        plugin.settings = $.extend({}, defaults, options);
        $menu.removeClass("mega-no-js");
        plugin.initToggleBar();
        if (plugin.settings.unbind_events === "true") {
          plugin.unbindAllEvents();
        }
        $(window).on("load", function () {
          plugin.calculateDynamicSubmenuWidths(
            $("> li.mega-menu-megamenu > a.mega-menu-link", $menu)
          );
        });
        if (plugin.isDesktopView()) {
          plugin.initDesktop();
        } else {
          plugin.initMobile();
        }
        $(window).resize(function () {
          plugin.checkWidth();
        });
        $menu.triggerHandler("after_mega_menu_init");
      };
      plugin.init();
    };
    $.fn.maxmegamenu = function (options) {
      return this.each(function () {
        if (undefined === $(this).data("maxmegamenu")) {
          var plugin = new $.maxmegamenu(this, options);
          $(this).data("maxmegamenu", plugin);
        }
      });
    };
    $(function () {
      $(".max-mega-menu").maxmegamenu();
    });
  })(jQuery);
} catch (e) {}
try {
  var omapi_data = {
    wc_cart: [],
    object_id: 1984,
    object_key: "page",
    object_type: "post",
    term_ids: [8],
  };
} catch (e) {}
try {
  (function () {
    if (typeof _bsa !== "undefined" && _bsa) {
      _bsa.init("fancybar", "CKYI42QJ", "placement:htmlcom");
    }
  })();
} catch (e) {}
