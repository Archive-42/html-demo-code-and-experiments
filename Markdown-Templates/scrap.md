fixtures/node_modules/<span class="citation" data-cites="babel/polyfill">@babel/polyfill</span>/

### <span class="citation" data-cites="babel/polyfill/README.md">\[fixtures/node_modules/@babel/polyfill/README.md\]</span>(fixtures/node_modules/<span class="citation" data-cites="babel/polyfill/README.md">@babel/polyfill/README.md</span>)

# <span class="citation" data-cites="babel/polyfill">@babel/polyfill</span>

> Provides polyfills necessary for a full ES2015+ environment

**This package has been deprecated in favor of separate inclusion of required parts of [`core-js`](https://github.com/zloirock/core-js) and [`regenerator-runtime`](https://www.npmjs.com/package/regenerator-runtime). See our website <span class="citation" data-cites="babel/polyfill">\[@babel/polyfill\]</span>(https://babeljs.io/docs/en/next/babel-polyfill.html) for more information.**

See our website <span class="citation" data-cites="babel/polyfill">\[@babel/polyfill\]</span>(https://babeljs.io/docs/en/next/babel-polyfill.html) for more information or the [issues](https://github.com/babel/babel/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3A%22pkg%3A%20polyfill%22+is%3Aopen) associated with this package.

## Install

Using npm:

    npm install --save @babel/polyfill

or using yarn:

    yarn add @babel/polyfill

fixtures/node_modules/<span class="citation" data-cites="types/unist">@types/unist</span>/

### <span class="citation" data-cites="types/unist/README.md">\[fixtures/node_modules/@types/unist/README.md\]</span>(fixtures/node_modules/<span class="citation" data-cites="types/unist/README.md">@types/unist/README.md</span>)

# Installation

> `npm install --save @types/unist`

# Summary

This package contains type definitions for non-npm package Unist ( https://github.com/syntax-tree/unist ).

# Details

Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/unist

Additional Details

- Last updated: Thu, 14 Feb 2019 18:10:46 GMT
- Dependencies: none
- Global values: none

# Credits

These definitions were written by bizen241 <a href="https://github.com/bizen241" class="uri">https://github.com/bizen241</a>, Jun Lu <a href="https://github.com/lujun2" class="uri">https://github.com/lujun2</a>, Hernan Rajchert <a href="https://github.com/hrajchert" class="uri">https://github.com/hrajchert</a>, Titus Wormer <a href="https://github.com/wooorm" class="uri">https://github.com/wooorm</a>, Junyoung Choi <a href="https://github.com/rokt33r" class="uri">https://github.com/rokt33r</a>.

fixtures/node_modules/balanced-match/

### [fixtures/node_modules/balanced-match/LICENSE.md](fixtures/node_modules/balanced-match/LICENSE.md)

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### [fixtures/node_modules/balanced-match/README.md](fixtures/node_modules/balanced-match/README.md)

# balanced-match

Match balanced string pairs, like `{` and `}` or `<b>` and `</b>`. Supports regular expressions as well!

[![build status](https://secure.travis-ci.org/juliangruber/balanced-match.svg)](http://travis-ci.org/juliangruber/balanced-match) [![downloads](https://img.shields.io/npm/dm/balanced-match.svg)](https://www.npmjs.org/package/balanced-match)

[![testling badge](https://ci.testling.com/juliangruber/balanced-match.png)](https://ci.testling.com/juliangruber/balanced-match)

## Example

Get the first matching pair of braces:

    var balanced = require("balanced-match");

    console.log(balanced("{", "}", "pre{in{nested}}post"));
    console.log(balanced("{", "}", "pre{first}between{second}post"));
    console.log(balanced(/\s+\{\s+/, /\s+\}\s+/, "pre  {   in{nest}   }  post"));

The matches are:

    $ node example.js
    { start: 3, end: 14, pre: 'pre', body: 'in{nested}', post: 'post' }
    { start: 3,
      end: 9,
      pre: 'pre',
      body: 'first',
      post: 'between{second}post' }
    { start: 3, end: 17, pre: 'pre', body: 'in{nest}', post: 'post' }

## API

### var m = balanced(a, b, str)

For the first non-nested matching pair of `a` and `b` in `str`, return an object with those keys:

- **start** the index of the first match of `a`
- **end** the index of the matching `b`
- **pre** the preamble, `a` and `b` not included
- **body** the match, `a` and `b` not included
- **post** the postscript, `a` and `b` not included

If there’s no match, `undefined` will be returned.

If the `str` contains more `a` than `b` / there are unmatched pairs, the first match that was closed will be used. For example, `{{a}` will match `['{', 'a', '']` and `{a}}` will match `['', 'a', '}']`.

### var r = balanced.range(a, b, str)

For the first non-nested matching pair of `a` and `b` in `str`, return an array with indexes: `[ <a index>, <b index> ]`.

If there’s no match, `undefined` will be returned.

If the `str` contains more `a` than `b` / there are unmatched pairs, the first match that was closed will be used. For example, `{{a}` will match `[ 1, 3 ]` and `{a}}` will match `[0, 2]`.

## Installation

With [npm](https://npmjs.org) do:

    npm install balanced-match

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

fixtures/node_modules/bcp-47-match/

### [fixtures/node_modules/bcp-47-match/readme.md](fixtures/node_modules/bcp-47-match/readme.md)

# bcp-47-match

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Match [BCP 47](https://html.spec.whatwg.org/#space-separated-tokens) language tags with “language ranges” per [RFC 4647](https://tools.ietf.org/html/rfc4647), as done by the `:lang()` pseudo-class in CSS, or the `Accept-Language` HTTP header.

Related to [`bcp-47`](https://tools.ietf.org/html/bcp47).

## Contents

- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`match.basicFilter(tags[, ranges])`](#matchbasicfiltertags-ranges)
  - [`match.extendedFilter(tags[, ranges])`](#matchextendedfiltertags-ranges)
  - [`match.lookup(tags, ranges)`](#matchlookuptags-ranges)
- [License](#license)

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install bcp-47-match

## Use

    var match = require("bcp-47-match");

    var basic = match.basicFilter;
    var extended = match.extendedFilter;
    var lookup = match.lookup;

    var tags = ["en-GB", "de-CH", "en", "de"];

    console.log(basic(tags, "*")); // => [ 'en-GB', 'de-CH', 'en', 'de' ]
    console.log(basic(tags, "en")); // => [ 'en-GB', 'en' ]
    console.log(basic(tags, "en-GB")); // => [ 'en-GB' ]
    console.log(basic(tags, ["en-GB", "en"])); // => [ 'en-GB', 'en' ]
    console.log(basic(tags, "jp")); // => []

    console.log(extended(tags, "*")); // => [ 'en-GB', 'de-CH', 'en', 'de' ]
    console.log(extended(tags, "en")); // => [ 'en-GB', 'en' ]
    console.log(extended(tags, "en-GB")); // => [ 'en-GB' ]
    console.log(extended(tags, "*-GB")); // => [ 'en-GB' ]
    console.log(extended(tags, ["en-GB", "en"])); // => [ 'en-GB', 'en' ]
    console.log(extended(tags, "jp")); // => []

    console.log(lookup(tags, "en")); // => 'en'
    console.log(lookup(tags, "en-GB")); // => 'en-GB'
    console.log(lookup(tags, ["en-GB", "en"])); // => 'en-GB'
    console.log(lookup(tags, ["en", "en-GB"])); // => 'en'
    console.log(lookup(tags, "jp")); // => undefined

## API

### `match.basicFilter(tags[, ranges])`

> [See Basic Filtering spec](https://tools.ietf.org/html/rfc4647#section-3.3.1)

Match language tags to a list of simple ranges. Searches for matches between the first range and all tags, and continues with further ranges. Returns a list of matching tags in the order they matched.

View matching table

<table><thead><tr class="header"><th>Basic Filter</th><th>*</th><th>de</th><th>de-CH</th><th>de-DE</th><th>de-*-DE</th><th>*-CH</th></tr></thead><tbody><tr class="odd"><td>de</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>de-CH</td><td>✔︎</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td></tr><tr class="odd"><td>de-CH-1996</td><td>✔︎</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td></tr><tr class="even"><td>de-DE</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td></td><td></td></tr><tr class="odd"><td>de-DE-1996</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td></td><td></td></tr><tr class="even"><td>de-DE-x-goethe</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td></td><td></td></tr><tr class="odd"><td>de-Deva</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>de-Deva-DE</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>de-Latf-DE</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>de-Latn-DE</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>de-Latn-DE-1996</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>de-x-DE</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>en</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>en-GB</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>zh</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>zh-Hans</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>zh-Hant</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

###### Parameters

- `tags` (`string` or `Array.<string>`) — List of BCP-47 tags
- `ranges` (`string` or `Array.<string>`) — List of RFC 4647 [basic ranges](https://tools.ietf.org/html/rfc4647#section-2.1) (aka, matching `/^(\*|[a-z]{1,8}(-[a-z0-9]{1,8})*)$/i`)

###### Returns

`Array.<string>` — Possibly empty list of matching tags in the order they matched.

### `match.extendedFilter(tags[, ranges])`

> [See Extended Filtering spec](https://tools.ietf.org/html/rfc4647#section-3.3.2)

Match language tags to a list of extended ranges. Searches for matches between the first range and all tags, and continues with further ranges.

View matching table

<table><thead><tr class="header"><th>Extended Filter</th><th>*</th><th>de</th><th>de-CH</th><th>de-DE</th><th>de-*-DE</th><th>*-CH</th></tr></thead><tbody><tr class="odd"><td>de</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>de-CH</td><td>✔︎</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>de-CH-1996</td><td>✔︎</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>de-DE</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td>✔︎</td><td></td></tr><tr class="odd"><td>de-DE-1996</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td>✔︎</td><td></td></tr><tr class="even"><td>de-DE-x-goethe</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td>✔︎</td><td></td></tr><tr class="odd"><td>de-Deva</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>de-Deva-DE</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td>✔︎</td><td></td></tr><tr class="odd"><td>de-Latf-DE</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td>✔︎</td><td></td></tr><tr class="even"><td>de-Latn-DE</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td>✔︎</td><td></td></tr><tr class="odd"><td>de-Latn-DE-1996</td><td>✔︎</td><td>✔︎</td><td></td><td>✔︎</td><td>✔︎</td><td></td></tr><tr class="even"><td>de-x-DE</td><td>✔︎</td><td>✔︎</td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>en</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>en-GB</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>zh</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="even"><td>zh-Hans</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr><tr class="odd"><td>zh-Hant</td><td>✔︎</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

###### Parameters

- `tags` (`string` or `Array.<string>`) — List of BCP-47 tags
- `ranges` (`string` or `Array.<string>`) — List of RFC 4647 [extended ranges](https://tools.ietf.org/html/rfc4647#section-2.2) (aka, matching `/^(\*|[a-z]{1,8})(-(\*|[a-z0-9]{1,8}))*$/i`)

###### Returns

`Array.<string>` — Possibly empty list of matching tags in the order they matched.

### `match.lookup(tags, ranges)`

> [See Lookup spec](https://tools.ietf.org/html/rfc4647#section-3.4)

Find the best language tag that matches a list of ranges. Searches for a match between the first range and all tags, and continues with further ranges. Returns the first match, if any.

View matching table

<table><thead><tr class="header"><th>Lookup</th><th>*</th><th>de</th><th>de-CH</th><th>de-DE</th><th>de-*-DE</th><th>*-CH</th></tr></thead><tbody><tr class="odd"><td>de</td><td></td><td>✔︎︎</td><td>✔︎︎</td><td>✔︎</td><td>✔︎</td><td>✔︎</td></tr><tr class="even"><td>de-CH</td><td></td><td></td><td>✔︎</td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>de-CH-1996</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>de-DE</td><td></td><td></td><td></td><td>✔︎</td><td></td><td>✔︎</td></tr><tr class="odd"><td>de-DE-1996</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>de-DE-x-goethe</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>de-Deva</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>de-Deva-DE</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>de-Latf-DE</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>de-Latn-DE</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>de-Latn-DE-1996</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>de-x-DE</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>en</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>en-GB</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>zh</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="even"><td>zh-Hans</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr><tr class="odd"><td>zh-Hant</td><td></td><td></td><td></td><td></td><td></td><td>✔︎</td></tr></tbody></table>

###### Parameters

- `tags` (`string` or `Array.<string>`) — List of BCP-47 tags
- `ranges` (`string` or `Array.<string>`) — List of RFC 4647 basic ranges (but `*` is ignored)

###### Returns

`string?` — The first matching tag in `tags`, or `undefined` otherwise.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/boolbase/

### [fixtures/node_modules/boolbase/README.md](fixtures/node_modules/boolbase/README.md)

\#boolbase This very simple module provides two basic functions, one that always returns true (`trueFunc`) and one that always returns false (`falseFunc`).

\#\#\#WTF?

By having only a single instance of these functions around, it’s possible to do some nice optimizations. Eg. [`CSSselect`](https://github.com/fb55/CSSselect) uses these functions to determine whether a selector won’t match any elements. If that’s the case, the DOM doesn’t even have to be touched.

\#\#\#And why is this a separate module?

I’m trying to modularize `CSSselect` and most modules depend on these functions. IMHO, having a separate module is the easiest solution to this problem.

fixtures/node_modules/brace-expansion/

### [fixtures/node_modules/brace-expansion/README.md](fixtures/node_modules/brace-expansion/README.md)

# brace-expansion

[Brace expansion](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html), as known from sh/bash, in JavaScript.

[![build status](https://secure.travis-ci.org/juliangruber/brace-expansion.svg)](http://travis-ci.org/juliangruber/brace-expansion) [![downloads](https://img.shields.io/npm/dm/brace-expansion.svg)](https://www.npmjs.org/package/brace-expansion) [![Greenkeeper badge](https://badges.greenkeeper.io/juliangruber/brace-expansion.svg)](https://greenkeeper.io/)

[![testling badge](https://ci.testling.com/juliangruber/brace-expansion.png)](https://ci.testling.com/juliangruber/brace-expansion)

## Example

    var expand = require("brace-expansion");

    expand("file-{a,b,c}.jpg");
    // => ['file-a.jpg', 'file-b.jpg', 'file-c.jpg']

    expand("-v{,,}");
    // => ['-v', '-v', '-v']

    expand("file{0..2}.jpg");
    // => ['file0.jpg', 'file1.jpg', 'file2.jpg']

    expand("file-{a..c}.jpg");
    // => ['file-a.jpg', 'file-b.jpg', 'file-c.jpg']

    expand("file{2..0}.jpg");
    // => ['file2.jpg', 'file1.jpg', 'file0.jpg']

    expand("file{0..4..2}.jpg");
    // => ['file0.jpg', 'file2.jpg', 'file4.jpg']

    expand("file-{a..e..2}.jpg");
    // => ['file-a.jpg', 'file-c.jpg', 'file-e.jpg']

    expand("file{00..10..5}.jpg");
    // => ['file00.jpg', 'file05.jpg', 'file10.jpg']

    expand("{{A..C},{a..c}}");
    // => ['A', 'B', 'C', 'a', 'b', 'c']

    expand("ppp{,config,oe{,conf}}");
    // => ['ppp', 'pppconfig', 'pppoe', 'pppoeconf']

## API

    var expand = require("brace-expansion");

### var expanded = expand(str)

Return an array of all possible and valid expansions of `str`. If none are found, `[str]` is returned.

Valid expansions are:

    /^(.*,)+(.+)?$/;
    // {a,b,...}

A comma separated list of options, like `{a,b}` or `{a,{b,c}}` or `{,a,}`.

    /^-?\d+\.\.-?\d+(\.\.-?\d+)?$/;
    // {x..y[..incr]}

A numeric sequence from `x` to `y` inclusive, with optional increment. If `x` or `y` start with a leading `0`, all the numbers will be padded to have equal length. Negative numbers and backwards iteration work too.

    /^-?\d+\.\.-?\d+(\.\.-?\d+)?$/;
    // {x..y[..incr]}

An alphabetic sequence from `x` to `y` inclusive, with optional increment. `x` and `y` must be exactly one character, and if given, `incr` must be a number.

For compatibility reasons, the string `${` is not eligible for brace expansion.

## Installation

With [npm](https://npmjs.org) do:

    npm install brace-expansion

## Contributors

- [Julian Gruber](https://github.com/juliangruber)
- [Isaac Z. Schlueter](https://github.com/isaacs)

## Sponsors

This module is proudly supported by my [Sponsors](https://github.com/juliangruber/sponsors)!

Do you want to support modules like this to improve their quality, stability and weigh in on new features? Then please consider donating to my [Patreon](https://www.patreon.com/juliangruber). Not sure how much of my modules you’re using? Try [feross/thanks](https://github.com/feross/thanks)!

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

fixtures/node_modules/ccount/

### [fixtures/node_modules/ccount/readme.md](fixtures/node_modules/ccount/readme.md)

# ccount

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Count characters.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install ccount

## Use

    var ccount = require("ccount");

    ccount("foo(bar(baz)", "("); // => 2
    ccount("foo(bar(baz)", ")"); // => 1

## API

### `ccount(value, character)`

Get the total count of `character` in `value`.

###### Parameters

- `value` (`string`) — Content, coerced to string
- `character` (`string`) — Single character to look for

###### Returns

`number` — Number of times `character` occurred in `value`.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/character-entities-html4/

### [fixtures/node_modules/character-entities-html4/readme.md](fixtures/node_modules/character-entities-html4/readme.md)

# character-entities-html4

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

HTML4 character entity information.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install character-entities-html4

## Use

    var characterEntities = require("character-entities-html4");

    console.log(characterEntities.AElig); // => 'Æ'
    console.log(characterEntities.aelig); // => 'æ'
    console.log(characterEntities.amp); // => '&'
    console.log(characterEntities.apos); // => undefined

## API

### `characterEntitiesHTML4`

Mapping between (case-sensitive) character entity names to replacements.

## Support

See [`w3.org`](https://raw.githubusercontent.com/whatwg/html/master/json-entities-legacy.inc).

## Related

- [`character-entities`](https://github.com/wooorm/character-entities) — HTML character entity info
- [`character-entities-legacy`](https://github.com/wooorm/character-entities-legacy) — Legacy character entity info
- [`parse-entities`](https://github.com/wooorm/parse-entities) — Parse HTML character references
- [`stringify-entities`](https://github.com/wooorm/stringify-entities) — Stringify HTML character references

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/character-entities-legacy/

### [fixtures/node_modules/character-entities-legacy/readme.md](fixtures/node_modules/character-entities-legacy/readme.md)

# character-entities-legacy

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

HTML legacy character entity information: for legacy reasons some character entities are not required to have a trailing semicolon: `&copy` is perfectly okay for `©`.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install character-entities-legacy

## Use

    var characterEntitiesLegacy = require("character-entities-legacy");

    console.log(characterEntitiesLegacy.copy); // => '©'
    console.log(characterEntitiesLegacy.frac34); // => '¾'
    console.log(characterEntitiesLegacy.sup1); // => '¹'

## API

### `characterEntitiesLegacy`

Mapping between (case-sensitive) legacy character entity names to replacements.

## Support

See [`whatwg/html`](https://raw.githubusercontent.com/whatwg/html/master/json-entities-legacy.inc).

## Related

- [`character-entities`](https://github.com/wooorm/character-entities) — HTML character entity info
- [`character-entities-html4`](https://github.com/wooorm/character-entities-html4) — HTML 4 character entity info
- [`parse-entities`](https://github.com/wooorm/parse-entities) — Parse HTML character references
- [`stringify-entities`](https://github.com/wooorm/stringify-entities) — Serialize HTML character references

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/comma-separated-tokens/

### [fixtures/node_modules/comma-separated-tokens/readme.md](fixtures/node_modules/comma-separated-tokens/readme.md)

# comma-separated-tokens

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Parse and stringify comma-separated tokens according to the [spec](https://html.spec.whatwg.org/#space-separated-tokens).

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install comma-separated-tokens

## Use

    var commaSeparated = require("comma-separated-tokens");

    commaSeparated.parse(" a ,b,,d d "); //=> ['a', 'b', '', 'd d']
    commaSeparated.stringify(["a", "b", "", "d d"]); //=> 'a, b, , d d'

## API

### `commaSeparated.parse(value)`

Parse comma-separated tokens (`string`) to an array of strings, according to the [spec](https://html.spec.whatwg.org/#space-separated-tokens).

### `commaSeparated.stringify(values[, options])`

Compile an array of strings to comma-separated tokens (`string`). Handles empty items at start or end correctly. Note that it’s not possible to specify initial or final whitespace per value.

##### `options`

###### `options.padLeft`

Whether to pad a space before a token (`boolean`, default: `true`).

###### `options.padRight`

Whether to pad a space after a token (`boolean`, default: `false`).

## Related

- [`collapse-white-space`](https://github.com/wooorm/collapse-white-space) — Replace multiple white-space characters with a single space
- [`property-information`](https://github.com/wooorm/property-information) — Information on HTML properties
- [`space-separated-tokens`](https://github.com/wooorm/space-separated-tokens) — Parse/stringify space-separated tokens

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/core-js/

### [fixtures/node_modules/core-js/CHANGELOG.md](fixtures/node_modules/core-js/CHANGELOG.md)

## Changelog

##### 2.6.11 [LEGACY](https://github.com/wooorm/character-entities-legacy) - 2019.12.09

- Returned usage of `node -e` in `postinstall` scripts for better cross-platform compatibility, [\#582](https://github.com/zloirock/core-js/issues/582)
- Improved CI detection in the `postinstall` script, [\#707](https://github.com/zloirock/core-js/issues/707)

##### 2.6.10 [LEGACY](https://github.com/wooorm/character-entities-legacy) - 2019.10.13

- Show similar `postinstall` messages only once per `npm i`, [\#597](https://github.com/zloirock/core-js/issues/597)

##### 2.6.9 [LEGACY](https://github.com/wooorm/character-entities-legacy) - 2019.05.27

- Some fixes and improvements of the `postinstall` script like support `npm` color config ([\#556](https://github.com/zloirock/core-js/issues/556)) or adding support of `ADBLOCK` env variable

##### 2.6.8 [LEGACY](https://github.com/wooorm/character-entities-legacy) - 2019.05.22

- Added a workaround of a strange `npx` bug on `postinstall`, [\#551](https://github.com/zloirock/core-js/issues/551)

##### 2.6.7 [LEGACY](https://github.com/wooorm/character-entities-legacy) - 2019.05.21

- Added one more workaround of alternative not completely correct `Symbol` polyfills, [\#550](https://github.com/zloirock/core-js/issues/550), [\#554](https://github.com/zloirock/core-js/issues/554)

##### 2.6.6 [LEGACY](https://github.com/wooorm/character-entities-legacy) - 2019.05.20

- Fixed IE8- non-enumerable properties support in `Object.{ assign, entries, values }`, [\#541](https://github.com/zloirock/core-js/issues/541)
- Fixed support of primitives in `Object.getOwnPropertySymbols` in Chrome 38 / 39, [\#539](https://github.com/zloirock/core-js/issues/539)
- Show a message on `postinstall`

##### 2.6.5 - 2019.02.15

- Fixed buggy `String#padStart` and `String#padEnd` mobile Safari implementations, [\#414](https://github.com/zloirock/core-js/issues/414).

##### 2.6.4 - 2019.02.07

- Added a workaround against crushing an old IE11.0.9600.16384 build, [\#485](https://github.com/zloirock/core-js/issues/485).

##### 2.6.3 - 2019.01.22

- Added a workaround for `babel-minify` bug, [\#479](https://github.com/zloirock/core-js/issues/479)

##### 2.6.2 - 2019.01.10

- Fixed handling of `$` in `String#replace`, [\#471](https://github.com/zloirock/core-js/issues/471)

##### 2.6.1 - 2018.12.18

- Fixed an issue with minified version, [\#463](https://github.com/zloirock/core-js/issues/463)

##### 2.6.0 - 2018.12.05

- Add direct .exec calling to `RegExp#{@@replace, @@split, @@match, @@search}`. Also, added fixes for `RegExp#exec` method. [\#411](https://github.com/zloirock/core-js/issues/411), [\#428](https://github.com/zloirock/core-js/issues/428), [\#434](https://github.com/zloirock/core-js/issues/434), [\#435](https://github.com/zloirock/core-js/issues/435), [\#453](https://github.com/zloirock/core-js/issues/453), [\#458](https://github.com/zloirock/core-js/issues/458), thanks [**<span class="citation" data-cites="nicolo-ribaudo">@nicolo-ribaudo</span>**](https://github.com/nicolo-ribaudo).

##### 2.5.7 - 2018.05.26

- Get rid of reserved variable name `final`, related [\#400](https://github.com/zloirock/core-js/issues/400)

##### 2.5.6 - 2018.05.07

- Forced replace native `Promise` in V8 6.6 (Node 10 and Chrome 66) because of [a bug with resolving custom thenables](https://bugs.chromium.org/p/chromium/issues/detail?id=830565)
- Added a workaround for usage buggy native LG WebOS 2 `Promise` in microtask implementation, [\#396](https://github.com/zloirock/core-js/issues/396)
- Added modern version internal debugging information about used versions

##### 2.5.5 - 2018.04.08

- Fix some edge cases of `Reflect.set`, [\#392](https://github.com/zloirock/core-js/issues/392) and [\#393](https://github.com/zloirock/core-js/issues/393)

##### 2.5.4 - 2018.03.27

- Fixed one case of deoptimization built-in iterators in V8, related [\#377](https://github.com/zloirock/core-js/issues/377)
- Fixed some cases of iterators feature detection, [\#368](https://github.com/zloirock/core-js/issues/368)
- Fixed manually entered NodeJS domains issue in `Promise`, [\#367](https://github.com/zloirock/core-js/issues/367)
- Fixed `Number.{parseInt, parseFloat}` entry points
- Fixed `__(define|lookup)[GS]etter__` import in the `library` version

##### 2.5.3 - 2017.12.12

- Fixed calling `onunhandledrejectionhandler` multiple times for one `Promise` chain, [\#318](https://github.com/zloirock/core-js/issues/318)
- Forced replacement of `String#{padStart, padEnd}` in Safari 10 because of [a bug](https://bugs.webkit.org/show_bug.cgi?id=161944), [\#280](https://github.com/zloirock/core-js/issues/280)
- Fixed `Array#@@iterator` in a very rare version of `WebKit`, [\#236](https://github.com/zloirock/core-js/issues/236) and [\#237](https://github.com/zloirock/core-js/issues/237)
- One more [\#345](https://github.com/zloirock/core-js/issues/345)-related fix

##### 2.5.2 - 2017.12.09

- `MutationObserver` no longer used for microtask implementation in iOS Safari because of bug with scrolling, [\#339](https://github.com/zloirock/core-js/issues/339)
- Fixed `JSON.stringify(undefined, replacer)` case in the wrapper from the `Symbol` polyfill, [\#345](https://github.com/zloirock/core-js/issues/345)
- `Array()` calls changed to `new Array()` for V8 optimisation

##### 2.5.1 - 2017.09.01

- Updated `Promise#finally` per [tc39/proposal-promise-finally\#37](https://github.com/tc39/proposal-promise-finally/issues/37)
- Optimized usage of some internal helpers for reducing size of `shim` version
- Fixed some entry points for virtual methods

##### 2.5.0 - 2017.08.05

- Added `Promise#finally` [stage 3 proposal](https://github.com/tc39/proposal-promise-finally), [\#225](https://github.com/zloirock/core-js/issues/225)
- Added `Promise.try` [stage 1 proposal](https://github.com/tc39/proposal-promise-try)
- Added `Array#flatten` and `Array#flatMap` [stage 1 proposal](https://tc39.github.io/proposal-flatMap)
- Added `.of` and `.from` methods on collection constructors [stage 1 proposal](https://github.com/tc39/proposal-setmap-offrom):
  - `Map.of`
  - `Set.of`
  - `WeakSet.of`
  - `WeakMap.of`
  - `Map.from`
  - `Set.from`
  - `WeakSet.from`
  - `WeakMap.from`
- Added `Math` extensions [stage 1 proposal](https://github.com/rwaldron/proposal-math-extensions), [\#226](https://github.com/zloirock/core-js/issues/226):
  - `Math.clamp`
  - `Math.DEG_PER_RAD`
  - `Math.degrees`
  - `Math.fscale`
  - `Math.RAD_PER_DEG`
  - `Math.radians`
  - `Math.scale`
- Added `Math.signbit` [stage 1 proposal](http://jfbastien.github.io/papers/Math.signbit.html)
- Updated `global` [stage 3 proposal](https://github.com/tc39/proposal-global) - added `global` global object, `System.global` deprecated
- Updated `Object.getOwnPropertyDescriptors` to the [final version](https://tc39.github.io/ecma262/2017/#sec-object.getownpropertydescriptors) - it should not create properties if descriptors are `undefined`
- Updated the list of iterable DOM collections, [\#249](https://github.com/zloirock/core-js/issues/249), added:
  - `CSSStyleDeclaration#@@iterator`
  - `CSSValueList#@@iterator`
  - `ClientRectList#@@iterator`
  - `DOMRectList#@@iterator`
  - `DOMStringList#@@iterator`
  - `DataTransferItemList#@@iterator`
  - `FileList#@@iterator`
  - `HTMLAllCollection#@@iterator`
  - `HTMLCollection#@@iterator`
  - `HTMLFormElement#@@iterator`
  - `HTMLSelectElement#@@iterator`
  - `MimeTypeArray#@@iterator`
  - `NamedNodeMap#@@iterator`
  - `PaintRequestList#@@iterator`
  - `Plugin#@@iterator`
  - `PluginArray#@@iterator`
  - `SVGLengthList#@@iterator`
  - `SVGNumberList#@@iterator`
  - `SVGPathSegList#@@iterator`
  - `SVGPointList#@@iterator`
  - `SVGStringList#@@iterator`
  - `SVGTransformList#@@iterator`
  - `SourceBufferList#@@iterator`
  - `TextTrackCueList#@@iterator`
  - `TextTrackList#@@iterator`
  - `TouchList#@@iterator`
- Updated stages of proposals:
  - [`Object.getOwnPropertyDescriptors`](https://github.com/tc39/proposal-object-getownpropertydescriptors) to [stage 4 (ES2017)](https://tc39.github.io/ecma262/2017/#sec-object.getownpropertydescriptors)
  - [String padding](https://github.com/tc39/proposal-string-pad-start-end) to [stage 4 (ES2017)](https://tc39.github.io/ecma262/2017/#sec-string.prototype.padend)
  - [`global`](https://github.com/tc39/proposal-global) to [stage 3](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-09/sept-28.md#revisit-systemglobal--global)
  - [String trimming](https://github.com/tc39/proposal-string-left-right-trim) to [stage 2](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-07/jul-27.md#10iic-trimstarttrimend)
- Updated typed arrays to the modern (ES2016+) arguments validation, [\#293](https://github.com/zloirock/core-js/pull/293)
- Fixed `%TypedArray%.from` Safari bug, [\#285](https://github.com/zloirock/core-js/issues/285)
- Fixed compatibility with old version of Prototype.js, [\#278](https://github.com/zloirock/core-js/issues/278), [\#289](https://github.com/zloirock/core-js/issues/289)
- `Function#name` no longer cache the result for correct behaviour with inherited constructors, [\#296](https://github.com/zloirock/core-js/issues/296)
- Added errors on incorrect context of collection methods, [\#272](https://github.com/zloirock/core-js/issues/272)
- Fixed conversion typed array constructors to string, fix [\#300](https://github.com/zloirock/core-js/issues/300)
- Fixed `Set#size` with debugger ReactNative for Android, [\#297](https://github.com/zloirock/core-js/issues/297)
- Fixed an issue with Electron-based debugger, [\#230](https://github.com/zloirock/core-js/issues/230)
- Fixed compatibility with incomplete third-party `WeakMap` polyfills, [\#252](https://github.com/zloirock/core-js/pull/252)
- Added a fallback for `Date#toJSON` in engines without native `Date#toISOString`, [\#220](https://github.com/zloirock/core-js/issues/220)
- Added support for Sphere Dispatch API, [\#286](https://github.com/zloirock/core-js/pull/286)
- Seriously changed the coding style and the [ESLint config](https://github.com/zloirock/core-js/blob/master/.eslintrc.js)
- Updated many dev dependencies (`webpack`, `uglify`, etc)
- Some other minor fixes and optimizations

##### 2.4.1 - 2016.07.18

- Fixed `script` tag for some parsers, [\#204](https://github.com/zloirock/core-js/issues/204), [\#216](https://github.com/zloirock/core-js/issues/216)
- Removed some unused variables, [\#217](https://github.com/zloirock/core-js/issues/217), [\#218](https://github.com/zloirock/core-js/issues/218)
- Fixed MS Edge `Reflect.construct` and `Reflect.apply` - they should not allow primitive as `argumentsList` argument

##### 1.2.7 [LEGACY](https://github.com/wooorm/character-entities-legacy) - 2016.07.18

- Some fixes for issues like [\#159](https://github.com/zloirock/core-js/issues/159), [\#186](https://github.com/zloirock/core-js/issues/186), [\#194](https://github.com/zloirock/core-js/issues/194), [\#207](https://github.com/zloirock/core-js/issues/207)

##### 2.4.0 - 2016.05.08

- Added `Observable`, [stage 1 proposal](https://github.com/zenparsing/es-observable)
- Fixed behavior `Object.{getOwnPropertySymbols, getOwnPropertyDescriptor}` and `Object#propertyIsEnumerable` on `Object.prototype`
- `Reflect.construct` and `Reflect.apply` should throw an error if `argumentsList` argument is not an object, [\#194](https://github.com/zloirock/core-js/issues/194)

##### 2.3.0 - 2016.04.24

- Added `asap` for enqueuing microtasks, [stage 0 proposal](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask)
- Added well-known symbol `Symbol.asyncIterator` for [stage 2 async iteration proposal](https://github.com/tc39/proposal-async-iteration)
- Added well-known symbol `Symbol.observable` for [stage 1 observables proposal](https://github.com/zenparsing/es-observable)
- `String#{padStart, padEnd}` returns original string if filler is empty string, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#stringprototypepadstartpadend)
- `Object.values` and `Object.entries` moved to stage 4 from 3, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#objectvalues--objectentries)
- `System.global` moved to stage 2 from 1, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#systemglobal)
- `Map#toJSON` and `Set#toJSON` rejected and will be removed from the next major release, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-31.md#mapprototypetojsonsetprototypetojson)
- `Error.isError` withdrawn and will be removed from the next major release, [TC39 meeting notes](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-03/march-29.md#erroriserror)
- Added fallback for `Function#name` on non-extensible functions and functions with broken `toString` conversion, [\#193](https://github.com/zloirock/core-js/issues/193)

##### 2.2.2 - 2016.04.06

- Added conversion `-0` to `+0` to `Array#{indexOf, lastIndexOf}`, [ES2016 fix](https://github.com/tc39/ecma262/pull/316)
- Added fixes for some `Math` methods in Tor Browser
- `Array.{from, of}` no longer calls prototype setters
- Added workaround over Chrome DevTools strange behavior, [\#186](https://github.com/zloirock/core-js/issues/186)

##### 2.2.1 - 2016.03.19

- Fixed `Object.getOwnPropertyNames(window)` `2.1+` versions bug, [\#181](https://github.com/zloirock/core-js/issues/181)

##### 2.2.0 - 2016.03.15

- Added `String#matchAll`, [proposal](https://github.com/tc39/String.prototype.matchAll)
- Added `Object#__(define|lookup)[GS]etter__`, [annex B ES2017](https://github.com/tc39/ecma262/pull/381)
- Added `@@toPrimitive` methods to `Date` and `Symbol`
- Fixed `%TypedArray%#slice` in Edge ~ 13 (throws with `@@species` and wrapped / inherited constructor)
- Some other minor fixes

##### 2.1.5 - 2016.03.12

- Improved support NodeJS domains in `Promise#then`, [\#180](https://github.com/zloirock/core-js/issues/180)
- Added fallback for `Date#toJSON` bug in Qt Script, [\#173](https://github.com/zloirock/core-js/issues/173#issuecomment-193972502)

##### 2.1.4 - 2016.03.08

- Added fallback for `Symbol` polyfill in Qt Script, [\#173](https://github.com/zloirock/core-js/issues/173)
- Added one more fallback for IE11 `Script Access Denied` error with iframes, [\#165](https://github.com/zloirock/core-js/issues/165)

##### 2.1.3 - 2016.02.29

- Added fallback for [`es6-promise` package bug](https://github.com/stefanpenner/es6-promise/issues/169), [\#176](https://github.com/zloirock/core-js/issues/176)

##### 2.1.2 - 2016.02.29

- Some minor `Promise` fixes:
  - Browsers `rejectionhandled` event better HTML spec complaint
  - Errors in unhandled rejection handlers should not cause any problems
  - Fixed typo in feature detection

##### 2.1.1 - 2016.02.22

- Some `Promise` improvements:
  - Feature detection:
    - **Added detection unhandled rejection tracking support - now it’s available everywhere**, [\#140](https://github.com/zloirock/core-js/issues/140)
    - Added detection `@@species` pattern support for completely correct subclassing
    - Removed usage `Object.setPrototypeOf` from feature detection and noisy console message about it in FF
  - `Promise.all` fixed for some very specific cases

##### 2.1.0 - 2016.02.09

- **API**:
  - ES5 polyfills are split and logic, used in other polyfills, moved to internal modules
    - **All entry point works in ES3 environment like IE8- without `core-js/(library/)es5`**
    - **Added all missed single entry points for ES5 polyfills**
    - Separated ES5 polyfills moved to the ES6 namespace. Why?
      - Mainly, for prevent duplication features in different namespaces - logic of most required ES5 polyfills changed in ES6+:
        - Already added changes for: `Object` statics - should accept primitives, new whitespaces lists in `String#trim`, `parse(Int|float)`, `RegExp#toString` logic, `String#split`, etc
        - Should be changed in the future: `@@species` and `ToLength` logic in `Array` methods, `Date` parsing, `Function#bind`, etc
        - Should not be changed only several features like `Array.isArray` and `Date.now`
      - Some ES5 polyfills required for modern engines
    - All old entry points should work fine, but in the next major release API can be changed
  - `Object.getOwnPropertyDescriptors` moved to the stage 3, [January TC39 meeting](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-01/2016-01-28.md#objectgetownpropertydescriptors-to-stage-3-jordan-harband-low-priority-but-super-quick)
  - Added `umd` option for [custom build process](https://github.com/zloirock/core-js#custom-build-from-external-scripts), [\#169](https://github.com/zloirock/core-js/issues/169)
  - Returned entry points for `Array` statics, removed in `2.0`, for compatibility with `babel` `6` and for future fixes
- **Deprecated**:
  - `Reflect.enumerate` deprecated and will be removed from the next major release, [January TC39 meeting](https://github.com/rwaldron/tc39-notes/blob/master/es7/2016-01/2016-01-28.md#5xix-revisit-proxy-enumerate---revisit-decision-to-exhaust-iterator)
- **New Features**:
  - Added [`Reflect` metadata API](https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md) as a pre-strawman feature, [\#152](https://github.com/zloirock/core-js/issues/152):
    - `Reflect.defineMetadata`
    - `Reflect.deleteMetadata`
    - `Reflect.getMetadata`
    - `Reflect.getMetadataKeys`
    - `Reflect.getOwnMetadata`
    - `Reflect.getOwnMetadataKeys`
    - `Reflect.hasMetadata`
    - `Reflect.hasOwnMetadata`
    - `Reflect.metadata`
  - Implementation / fixes `Date#toJSON`
  - Fixes for `parseInt` and `Number.parseInt`
  - Fixes for `parseFloat` and `Number.parseFloat`
  - Fixes for `RegExp#toString`
  - Fixes for `Array#sort`
  - Fixes for `Number#toFixed`
  - Fixes for `Number#toPrecision`
  - Additional fixes for `String#split` (`RegExp#@@split`)
- **Improvements**:
  - Correct subclassing wrapped collections, `Number` and `RegExp` constructors with native class syntax
  - Correct support `SharedArrayBuffer` and buffers from other realms in typed arrays wrappers
  - Additional validations for `Object.{defineProperty, getOwnPropertyDescriptor}` and `Reflect.defineProperty`
- **Bug Fixes**:
  - Fixed some cases `Array#lastIndexOf` with negative second argument

##### 2.0.3 - 2016.01.11

- Added fallback for V8 ~ Chrome 49 `Promise` subclassing bug causes unhandled rejection on feature detection, [\#159](https://github.com/zloirock/core-js/issues/159)
- Added fix for very specific environments with global `window === null`

##### 2.0.2 - 2016.01.04

- Temporarily removed `length` validation from `Uint8Array` constructor wrapper. Reason - [bug in `ws` module](https://github.com/websockets/ws/pull/645) (-&gt; `socket.io`) which passes to `Buffer` constructor -&gt; `Uint8Array` float and uses [the `V8` bug](https://code.google.com/p/v8/issues/detail?id=4552) for conversion to int (by the spec should be thrown an error). [It creates problems for many people.](https://github.com/karma-runner/karma/issues/1768) I hope, it will be returned after fixing this bug in `V8`.

##### 2.0.1 - 2015.12.31

- Forced usage `Promise.resolve` polyfill in the `library` version for correct work with wrapper
- `Object.assign` should be defined in the strict mode -&gt; throw an error on extension non-extensible objects, [\#154](https://github.com/zloirock/core-js/issues/154)

##### 2.0.0 - 2015.12.24

- Added implementations and fixes [Typed Arrays](https://github.com/zloirock/core-js#ecmascript-6-typed-arrays)-related features
  - `ArrayBuffer`, `ArrayBuffer.isView`, `ArrayBuffer#slice`
  - `DataView` with all getter / setter methods
  - `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array` and `Float64Array` constructors
  - `%TypedArray%.{for, of}`, `%TypedArray%#{copyWithin, every, fill, filter, find, findIndex, forEach, indexOf, includes, join, lastIndexOf, map, reduce, reduceRight, reverse, set, slice, some, sort, subarray, values, keys, entries, @@iterator, ...}`
- Added [`System.global`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/tc39/proposal-global), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-19.md#systemglobal-jhd)
- Added [`Error.isError`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/ljharb/proposal-is-error), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-19.md#jhd-erroriserror)
- Added [`Math.{iaddh, isubh, imulh, umulh}`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://gist.github.com/BrendanEich/4294d5c212a6d2254703)
- `RegExp.escape` moved from the `es7` to the non-standard `core` namespace, [July TC39 meeting](https://github.com/rwaldron/tc39-notes/blob/master/es7/2015-07/july-28.md#62-regexpescape) - too slow, but it’s condition of stability, [\#116](https://github.com/zloirock/core-js/issues/116)
- [`Promise`](https://github.com/zloirock/core-js#ecmascript-6-promise)
  - Some performance optimisations
  - Added basic support [`rejectionHandled` event / `onrejectionhandled` handler](https://github.com/zloirock/core-js#unhandled-rejection-tracking) to the polyfill
  - Removed usage `@@species` from `Promise.{all, race}`, [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-18.md#conclusionresolution-2)
- Some improvements [collections polyfills](https://github.com/zloirock/core-js#ecmascript-6-collections)
  - `O(1)` and preventing possible leaks with frozen keys, [\#134](https://github.com/zloirock/core-js/issues/134)
  - Correct observable state object keys
- Renamed `String#{padLeft, padRight}` -&gt; [`String#{padStart, padEnd}`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/tc39/proposal-string-pad-start-end), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-17.md#conclusionresolution-2) (they want to rename it on each meeting?O_o), [\#132](https://github.com/zloirock/core-js/issues/132)
- Added [`String#{trimStart, trimEnd}` as aliases for `String#{trimLeft, trimRight}`](https://github.com/zloirock/core-js#ecmascript-7-proposals), [proposal](https://github.com/sebmarkbage/ecmascript-string-left-right-trim), [November TC39 meeting](https://github.com/rwaldron/tc39-notes/tree/master/es7/2015-11/nov-17.md#conclusionresolution-2)
- Added [annex B HTML methods](https://github.com/zloirock/core-js#ecmascript-6-string) - ugly, but also [the part of the spec](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.anchor)
- Added little fix for [`Date#toString`](https://github.com/zloirock/core-js#ecmascript-6-date) - `new Date(NaN).toString()` [should be `'Invalid Date'`](http://www.ecma-international.org/ecma-262/6.0/#sec-todatestring)
- Added [`{keys, values, entries, @@iterator}` methods to DOM collections](https://github.com/zloirock/core-js#iterable-dom-collections) which should have [iterable interface](https://heycam.github.io/webidl/#idl-iterable) or should be [inherited from `Array`](https://heycam.github.io/webidl/#LegacyArrayClass) - `NodeList`, `DOMTokenList`, `MediaList`, `StyleSheetList`, `CSSRuleList`.
- Removed Mozilla `Array` generics - [deprecated and will be removed from FF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Array_generic_methods), [looks like strawman is dead](http://wiki.ecmascript.org/doku.php?id=strawman:array_statics), available [alternative shim](https://github.com/plusdude/array-generics)
- Removed `core.log` module
- CommonJS API
  - Added entry points for [virtual methods](https://github.com/zloirock/core-js#commonjs-and-prototype-methods-without-global-namespace-pollution)
  - Added entry points for [stages proposals](https://github.com/zloirock/core-js#ecmascript-7-proposals)
  - Some other minor changes
- [Custom build from external scripts](https://github.com/zloirock/core-js#custom-build-from-external-scripts) moved to the separate package for preventing problems with dependencies
- Changed `$` prefix for internal modules file names because Team Foundation Server does not support it, [\#129](https://github.com/zloirock/core-js/issues/129)
- Additional fix for `SameValueZero` in V8 ~ Chromium 39-42 collections
- Additional fix for FF27 `Array` iterator
- Removed usage shortcuts for `arguments` object - old WebKit bug, [\#150](https://github.com/zloirock/core-js/issues/150)
- `{Map, Set}#forEach` non-generic, [\#144](https://github.com/zloirock/core-js/issues/144)
- Many other improvements

##### 1.2.6 - 2015.11.09

- Reject with `TypeError` on attempt resolve promise itself
- Correct behavior with broken `Promise` subclass constructors / methods
- Added `Promise`-based fallback for microtask
- Fixed V8 and FF `Array#{values, @@iterator}.name`
- Fixed IE7- `[1, 2].join(undefined) -> '1,2'`
- Some other fixes / improvements / optimizations

##### 1.2.5 - 2015.11.02

- Some more `Number` constructor fixes:
  - Fixed V8 ~ Node 0.8 bug: `Number('+0x1')` should be `NaN`
  - Fixed `Number(' 0b1\n')` case, should be `1`
  - Fixed `Number()` case, should be `0`

##### 1.2.4 - 2015.11.01

- Fixed `Number('0b12') -> NaN` case in the shim
- Fixed V8 ~ Chromium 40- bug - `Weak(Map|Set)#{delete, get, has}` should not throw errors [\#124](https://github.com/zloirock/core-js/issues/124)
- Some other fixes and optimizations

##### 1.2.3 - 2015.10.23

- Fixed some problems related old V8 bug `Object('a').propertyIsEnumerable(0) // => false`, for example, `Object.assign({}, 'qwe')` from the last release
- Fixed `.name` property and `Function#toString` conversion some polyfilled methods
- Fixed `Math.imul` arity in Safari 8-

##### 1.2.2 - 2015.10.18

- Improved optimisations for V8
- Fixed build process from external packages, [\#120](https://github.com/zloirock/core-js/pull/120)
- One more `Object.{assign, values, entries}` fix for [**very** specific case](https://github.com/ljharb/proposal-object-values-entries/issues/5)

##### 1.2.1 - 2015.10.02

- Replaced fix `JSON.stringify` + `Symbol` behavior from `.toJSON` method to wrapping `JSON.stringify` - little more correct, [compat-table/642](https://github.com/kangax/compat-table/pull/642)
- Fixed typo which broke tasks scheduler in WebWorkers in old FF, [\#114](https://github.com/zloirock/core-js/pull/114)

##### 1.2.0 - 2015.09.27

- Added browser [`Promise` rejection hook](#unhandled-rejection-tracking), [\#106](https://github.com/zloirock/core-js/issues/106)
- Added correct [`IsRegExp`](http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp) logic to [`String#{includes, startsWith, endsWith}`](https://github.com/zloirock/core-js/#ecmascript-6-string) and [`RegExp` constructor](https://github.com/zloirock/core-js/#ecmascript-6-regexp), `@@match` case, [example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match#Disabling_the_isRegExp_check)
- Updated [`String#leftPad`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) [with proposal](https://github.com/ljharb/proposal-string-pad-left-right/issues/6): string filler truncated from the right side
- Replaced V8 [`Object.assign`](https://github.com/zloirock/core-js/#ecmascript-6-object) - its properties order not only [incorrect](https://github.com/sindresorhus/object-assign/issues/22), it is non-deterministic and it causes some problems
- Fixed behavior with deleted in getters properties for `Object.{`[`assign`](https://github.com/zloirock/core-js/#ecmascript-6-object)`,`[`entries, values`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)`}`, [example](http://goo.gl/iQE01c)
- Fixed [`Math.sinh`](https://github.com/zloirock/core-js/#ecmascript-6-math) with very small numbers in V8 near Chromium 38
- Some other fixes and optimizations

##### 1.1.4 - 2015.09.05

- Fixed support symbols in FF34-35 [`Object.assign`](https://github.com/zloirock/core-js/#ecmascript-6-object)
- Fixed [collections iterators](https://github.com/zloirock/core-js/#ecmascript-6-iterators) in FF25-26
- Fixed non-generic WebKit [`Array.of`](https://github.com/zloirock/core-js/#ecmascript-6-array)
- Some other fixes and optimizations

##### 1.1.3 - 2015.08.29

- Fixed support Node.js domains in [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise), [\#103](https://github.com/zloirock/core-js/issues/103)

##### 1.1.2 - 2015.08.28

- Added `toJSON` method to [`Symbol`](https://github.com/zloirock/core-js/#ecmascript-6-symbol) polyfill and to MS Edge implementation for expected `JSON.stringify` result w/o patching this method
- Replaced [`Reflect.construct`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) implementations w/o correct support third argument
- Fixed `global` detection with changed `document.domain` in ~IE8, [\#100](https://github.com/zloirock/core-js/issues/100)

##### 1.1.1 - 2015.08.20

- Added more correct microtask implementation for [`Promise`](#ecmascript-6-promise)

##### 1.1.0 - 2015.08.17

- Updated [string padding](https://github.com/zloirock/core-js/#ecmascript-7-proposals) to [actual proposal](https://github.com/ljharb/proposal-string-pad-left-right) - renamed, minor internal changes:
  - `String#lpad` -&gt; `String#padLeft`
  - `String#rpad` -&gt; `String#padRight`
- Added [string trim functions](#ecmascript-7-proposals) - [proposal](https://github.com/sebmarkbage/ecmascript-string-left-right-trim), defacto standard - required only for IE11- and fixed for some old engines:
  - `String#trimLeft`
  - `String#trimRight`
- [`String#trim`](https://github.com/zloirock/core-js/#ecmascript-6-string) fixed for some engines by es6 spec and moved from `es5` to single `es6` module
- Splitted [`es6.object.statics-accept-primitives`](https://github.com/zloirock/core-js/#ecmascript-6-object)
- Caps for `freeze`-family `Object` methods moved from `es5` to `es6` namespace and joined with [es6 wrappers](https://github.com/zloirock/core-js/#ecmascript-6-object)
- `es5` [namespace](https://github.com/zloirock/core-js/#commonjs) also includes modules, moved to `es6` namespace - you can use it as before
- Increased `MessageChannel` priority in `$.task`, [\#95](https://github.com/zloirock/core-js/issues/95)
- Does not get `global.Symbol` on each getting iterator, if you wanna use alternative `Symbol` shim - add it before `core-js`
- [`Reflect.construct`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) optimized and fixed for some cases
- Simplified [`Reflect.enumerate`](https://github.com/zloirock/core-js/#ecmascript-6-reflect), see [this question](https://esdiscuss.org/topic/question-about-enumerate-and-property-decision-timing)
- Some corrections in [`Math.acosh`](https://github.com/zloirock/core-js/#ecmascript-6-math)
- Fixed [`Math.imul`](https://github.com/zloirock/core-js/#ecmascript-6-math) for old WebKit
- Some fixes in string / RegExp [well-known symbols](https://github.com/zloirock/core-js/#ecmascript-6-regexp) logic
- Some other fixes and optimizations

##### 1.0.1 - 2015.07.31

- Some fixes for final MS Edge, replaced broken native `Reflect.defineProperty`
- Some minor fixes and optimizations
- Changed compression `client/*.min.js` options for safe `Function#name` and `Function#length`, should be fixed [\#92](https://github.com/zloirock/core-js/issues/92)

##### 1.0.0 - 2015.07.22

- Added logic for [well-known symbols](https://github.com/zloirock/core-js/#ecmascript-6-regexp):
  - `Symbol.match`
  - `Symbol.replace`
  - `Symbol.split`
  - `Symbol.search`
- Actualized and optimized work with iterables:
  - Optimized [`Map`, `Set`, `WeakMap`, `WeakSet` constructors](https://github.com/zloirock/core-js/#ecmascript-6-collections), [`Promise.all`, `Promise.race`](https://github.com/zloirock/core-js/#ecmascript-6-promise) for default `Array Iterator`
  - Optimized [`Array.from`](https://github.com/zloirock/core-js/#ecmascript-6-array) for default `Array Iterator`
  - Added [`core.getIteratorMethod`](https://github.com/zloirock/core-js/#ecmascript-6-iterators) helper
- Uses enumerable properties in shimmed instances - collections, iterators, etc for optimize performance
- Added support native constructors to [`Reflect.construct`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) with 2 arguments
- Added support native constructors to [`Function#bind`](https://github.com/zloirock/core-js/#ecmascript-5) shim with `new`
- Removed obsolete `.clear` methods native [`Weak`-collections](https://github.com/zloirock/core-js/#ecmascript-6-collections)
- Maximum modularity, reduced minimal custom build size, separated into submodules:
  - [`es6.reflect`](https://github.com/zloirock/core-js/#ecmascript-6-reflect)
  - [`es6.regexp`](https://github.com/zloirock/core-js/#ecmascript-6-regexp)
  - [`es6.math`](https://github.com/zloirock/core-js/#ecmascript-6-math)
  - [`es6.number`](https://github.com/zloirock/core-js/#ecmascript-6-number)
  - [`es7.object.to-array`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
  - [`core.object`](https://github.com/zloirock/core-js/#object)
  - [`core.string`](https://github.com/zloirock/core-js/#escaping-strings)
  - [`core.iter-helpers`](https://github.com/zloirock/core-js/#ecmascript-6-iterators)
  - Internal modules (`$`, `$.iter`, etc)
- Many other optimizations
- Final cleaning non-standard features
  - Moved `$for` to [separate library](https://github.com/zloirock/forof). This work for syntax - `for-of` loop and comprehensions
  - Moved `Date#{format, formatUTC}` to [separate library](https://github.com/zloirock/dtf). Standard way for this - `ECMA-402`
  - Removed `Math` methods from `Number.prototype`. Slight sugar for simple `Math` methods calling
  - Removed `{Array#, Array, Dict}.turn`
  - Removed `core.global`
- Uses `ToNumber` instead of `ToLength` in [`Number Iterator`](https://github.com/zloirock/core-js/#number-iterator), `Array.from(2.5)` will be `[0, 1, 2]` instead of `[0, 1]`
- Fixed [\#85](https://github.com/zloirock/core-js/issues/85) - invalid `Promise` unhandled rejection message in nested `setTimeout`
- Fixed [\#86](https://github.com/zloirock/core-js/issues/86) - support FF extensions
- Fixed [\#89](https://github.com/zloirock/core-js/issues/89) - behavior `Number` constructor in strange case

##### 0.9.18 - 2015.06.17

- Removed `/` from [`RegExp.escape`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) escaped characters

##### 0.9.17 - 2015.06.14

- Updated [`RegExp.escape`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) to the [latest proposal](https://github.com/benjamingr/RexExp.escape)
- Fixed conflict with webpack dev server + IE buggy behavior

##### 0.9.16 - 2015.06.11

- More correct order resolving thenable in [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) polyfill
- Uses polyfill instead of [buggy V8 `Promise`](https://github.com/zloirock/core-js/issues/78)

##### 0.9.15 - 2015.06.09

- [Collections](https://github.com/zloirock/core-js/#ecmascript-6-collections) from `library` version return wrapped native instances
- Fixed collections prototype methods in `library` version
- Optimized [`Math.hypot`](https://github.com/zloirock/core-js/#ecmascript-6-math)

##### 0.9.14 - 2015.06.04

- Updated [`Promise.resolve` behavior](https://esdiscuss.org/topic/fixing-promise-resolve)
- Added fallback for IE11 buggy `Object.getOwnPropertyNames` + iframe
- Some other fixes

##### 0.9.13 - 2015.05.25

- Added fallback for [`Symbol` polyfill](https://github.com/zloirock/core-js/#ecmascript-6-symbol) for old Android
- Some other fixes

##### 0.9.12 - 2015.05.24

- Different instances `core-js` should use / recognize the same symbols
- Some fixes

##### 0.9.11 - 2015.05.18

- Simplified [custom build](https://github.com/zloirock/core-js/#custom-build)
  - Added custom build js api
  - Added `grunt-cli` to `devDependencies` for `npm run grunt`
- Some fixes

##### 0.9.10 - 2015.05.16

- Wrapped `Function#toString` for correct work wrapped methods / constructors with methods similar to the [`lodash` `isNative`](https://github.com/lodash/lodash/issues/1197)
- Added proto versions of methods to export object in `default` version for consistency with `library` version

##### 0.9.9 - 2015.05.14

- Wrapped `Object#propertyIsEnumerable` for [`Symbol` polyfill](https://github.com/zloirock/core-js/#ecmascript-6-symbol)
- [Added proto versions of methods to `library` for ES7 bind syntax](https://github.com/zloirock/core-js/issues/65)
- Some other fixes

##### 0.9.8 - 2015.05.12

- Fixed [`Math.hypot`](https://github.com/zloirock/core-js/#ecmascript-6-math) with negative arguments
- Added `Object#toString.toString` as fallback for [`lodash` `isNative`](https://github.com/lodash/lodash/issues/1197)

##### 0.9.7 - 2015.05.07

- Added [support DOM collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Streamlining_cross-browser_behavior) to IE8- `Array#slice`

##### 0.9.6 - 2015.05.01

- Added [`String#lpad`, `String#rpad`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)

##### 0.9.5 - 2015.04.30

- Added cap for `Function#@@hasInstance`
- Some fixes and optimizations

##### 0.9.4 - 2015.04.27

- Fixed `RegExp` constructor

##### 0.9.3 - 2015.04.26

- Some fixes and optimizations

##### 0.9.2 - 2015.04.25

- More correct [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) unhandled rejection tracking and resolving / rejection priority

##### 0.9.1 - 2015.04.25

- Fixed `__proto__`-based [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) subclassing in some environments

##### 0.9.0 - 2015.04.24

- Added correct [symbols](https://github.com/zloirock/core-js/#ecmascript-6-symbol) descriptors
  - Fixed behavior `Object.{assign, create, defineProperty, defineProperties, getOwnPropertyDescriptor, getOwnPropertyDescriptors}` with symbols
  - Added [single entry points](https://github.com/zloirock/core-js/#commonjs) for `Object.{create, defineProperty, defineProperties}`
- Added [`Map#toJSON`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
- Removed non-standard methods `Object#[_]` and `Function#only` - they solves syntax problems, but now in compilers available arrows and <s>in near future will be available</s> [available](http://babeljs.io/blog/2015/05/14/function-bind/) [bind syntax](https://github.com/zenparsing/es-function-bind)
- Removed non-standard undocumented methods `Symbol.{pure, set}`
- Some fixes and internal changes

##### 0.8.4 - 2015.04.18

- Uses `webpack` instead of `browserify` for browser builds - more compression-friendly result

##### 0.8.3 - 2015.04.14

- Fixed `Array` statics with single entry points

##### 0.8.2 - 2015.04.13

- [`Math.fround`](https://github.com/zloirock/core-js/#ecmascript-6-math) now also works in IE9-
- Added [`Set#toJSON`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
- Some optimizations and fixes

##### 0.8.1 - 2015.04.03

- Fixed `Symbol.keyFor`

##### 0.8.0 - 2015.04.02

- Changed [CommonJS API](https://github.com/zloirock/core-js/#commonjs)
- Splitted and renamed some modules
- Added support ES3 environment (ES5 polyfill) to **all** default versions - size increases slightly (+ ~4kb w/o gzip), many issues disappear, if you don’t need it - [simply include only required namespaces / features / modules](https://github.com/zloirock/core-js/#commonjs)
- Removed [abstract references](https://github.com/zenparsing/es-abstract-refs) support - proposal has been superseded =
- [`$for.isIterable` -&gt; `core.isIterable`, `$for.getIterator` -&gt; `core.getIterator`](https://github.com/zloirock/core-js/#ecmascript-6-iterators), temporary available in old namespace
- Fixed iterators support in v8 `Promise.all` and `Promise.race`
- Many other fixes

##### 0.7.2 - 2015.03.09

- Some fixes

##### 0.7.1 - 2015.03.07

- Some fixes

##### 0.7.0 - 2015.03.06

- Rewritten and splitted into [CommonJS modules](https://github.com/zloirock/core-js/#commonjs)

##### 0.6.1 - 2015.02.24

- Fixed support [`Object.defineProperty`](https://github.com/zloirock/core-js/#ecmascript-5) with accessors on DOM elements on IE8

##### 0.6.0 - 2015.02.23

- Added support safe closing iteration - calling `iterator.return` on abort iteration, if it exists
- Added basic support [`Promise`](https://github.com/zloirock/core-js/#ecmascript-6-promise) unhandled rejection tracking in shim
- Added [`Object.getOwnPropertyDescriptors`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
- Removed `console` cap - creates too many problems
- Restructuring [namespaces](https://github.com/zloirock/core-js/#custom-build)
- Some fixes

##### 0.5.4 - 2015.02.15

- Some fixes

##### 0.5.3 - 2015.02.14

- Added [support binary and octal literals](https://github.com/zloirock/core-js/#ecmascript-6-number) to `Number` constructor
- Added [`Date#toISOString`](https://github.com/zloirock/core-js/#ecmascript-5)

##### 0.5.2 - 2015.02.10

- Some fixes

##### 0.5.1 - 2015.02.09

- Some fixes

##### 0.5.0 - 2015.02.08

- Systematization of modules
- Splitted [`es6` module](https://github.com/zloirock/core-js/#ecmascript-6)
- Splitted `console` module: `web.console` - only cap for missing methods, `core.log` - bound methods & additional features
- Added [`delay` method](https://github.com/zloirock/core-js/#delay)
- Some fixes

##### 0.4.10 - 2015.01.28

- [`Object.getOwnPropertySymbols`](https://github.com/zloirock/core-js/#ecmascript-6-symbol) polyfill returns array of wrapped keys

##### 0.4.9 - 2015.01.27

- FF20-24 fix

##### 0.4.8 - 2015.01.25

- Some [collections](https://github.com/zloirock/core-js/#ecmascript-6-collections) fixes

##### 0.4.7 - 2015.01.25

- Added support frozen objects as [collections](https://github.com/zloirock/core-js/#ecmascript-6-collections) keys

##### 0.4.6 - 2015.01.21

- Added [`Object.getOwnPropertySymbols`](https://github.com/zloirock/core-js/#ecmascript-6-symbol)
- Added [`NodeList.prototype[@@iterator]`](https://github.com/zloirock/core-js/#ecmascript-6-iterators)
- Added basic `@@species` logic - getter in native constructors
- Removed `Function#by`
- Some fixes

##### 0.4.5 - 2015.01.16

- Some fixes

##### 0.4.4 - 2015.01.11

- Enabled CSP support

##### 0.4.3 - 2015.01.10

- Added `Function` instances `name` property for IE9+

##### 0.4.2 - 2015.01.10

- `Object` static methods accept primitives
- `RegExp` constructor can alter flags (IE9+)
- Added `Array.prototype[Symbol.unscopables]`

##### 0.4.1 - 2015.01.05

- Some fixes

##### 0.4.0 - 2015.01.03

- Added [`es6.reflect`](https://github.com/zloirock/core-js/#ecmascript-6-reflect) module:
  - Added `Reflect.apply`
  - Added `Reflect.construct`
  - Added `Reflect.defineProperty`
  - Added `Reflect.deleteProperty`
  - Added `Reflect.enumerate`
  - Added `Reflect.get`
  - Added `Reflect.getOwnPropertyDescriptor`
  - Added `Reflect.getPrototypeOf`
  - Added `Reflect.has`
  - Added `Reflect.isExtensible`
  - Added `Reflect.preventExtensions`
  - Added `Reflect.set`
  - Added `Reflect.setPrototypeOf`
- `core-js` methods now can use external `Symbol.iterator` polyfill
- Some fixes

##### 0.3.3 - 2014.12.28

- [Console cap](https://github.com/zloirock/core-js/#console) excluded from node.js default builds

##### 0.3.2 - 2014.12.25

- Added cap for [ES5](https://github.com/zloirock/core-js/#ecmascript-5) freeze-family methods
- Fixed `console` bug

##### 0.3.1 - 2014.12.23

- Some fixes

##### 0.3.0 - 2014.12.23

- Optimize [`Map` & `Set`](https://github.com/zloirock/core-js/#ecmascript-6-collections):
  - Use entries chain on hash table
  - Fast & correct iteration
  - Iterators moved to [`es6`](https://github.com/zloirock/core-js/#ecmascript-6) and [`es6.collections`](https://github.com/zloirock/core-js/#ecmascript-6-collections) modules

##### 0.2.5 - 2014.12.20

- `console` no longer shortcut for `console.log` (compatibility problems)
- Some fixes

##### 0.2.4 - 2014.12.17

- Better compliance of ES6
- Added [`Math.fround`](https://github.com/zloirock/core-js/#ecmascript-6-math) (IE10+)
- Some fixes

##### 0.2.3 - 2014.12.15

- [Symbols](https://github.com/zloirock/core-js/#ecmascript-6-symbol):
  - Added option to disable addition setter to `Object.prototype` for Symbol polyfill:
    - Added `Symbol.useSimple`
    - Added `Symbol.useSetter`
  - Added cap for well-known Symbols:
    - Added `Symbol.hasInstance`
    - Added `Symbol.isConcatSpreadable`
    - Added `Symbol.match`
    - Added `Symbol.replace`
    - Added `Symbol.search`
    - Added `Symbol.species`
    - Added `Symbol.split`
    - Added `Symbol.toPrimitive`
    - Added `Symbol.unscopables`

##### 0.2.2 - 2014.12.13

- Added [`RegExp#flags`](https://github.com/zloirock/core-js/#ecmascript-6-regexp) ([December 2014 Draft Rev 29](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#december_6_2014_draft_rev_29))
- Added [`String.raw`](https://github.com/zloirock/core-js/#ecmascript-6-string)

##### 0.2.1 - 2014.12.12

- Repair converting -0 to +0 in [native collections](https://github.com/zloirock/core-js/#ecmascript-6-collections)

##### 0.2.0 - 2014.12.06

- Added [`es7.proposals`](https://github.com/zloirock/core-js/#ecmascript-7-proposals) and [`es7.abstract-refs`](https://github.com/zenparsing/es-abstract-refs) modules
- Added [`String#at`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
- Added real [`String Iterator`](https://github.com/zloirock/core-js/#ecmascript-6-iterators), older versions used Array Iterator
- Added abstract references support:
  - Added `Symbol.referenceGet`
  - Added `Symbol.referenceSet`
  - Added `Symbol.referenceDelete`
  - Added `Function#@@referenceGet`
  - Added `Map#@@referenceGet`
  - Added `Map#@@referenceSet`
  - Added `Map#@@referenceDelete`
  - Added `WeakMap#@@referenceGet`
  - Added `WeakMap#@@referenceSet`
  - Added `WeakMap#@@referenceDelete`
  - Added `Dict.{...methods}[@@referenceGet]`
- Removed deprecated `.contains` methods
- Some fixes

##### 0.1.5 - 2014.12.01

- Added [`Array#copyWithin`](https://github.com/zloirock/core-js/#ecmascript-6-array)
- Added [`String#codePointAt`](https://github.com/zloirock/core-js/#ecmascript-6-string)
- Added [`String.fromCodePoint`](https://github.com/zloirock/core-js/#ecmascript-6-string)

##### 0.1.4 - 2014.11.27

- Added [`Dict.mapPairs`](https://github.com/zloirock/core-js/#dict)

##### 0.1.3 - 2014.11.20

- [TC39 November meeting](https://github.com/rwaldron/tc39-notes/tree/master/es6/2014-11):
  - [`.contains` -&gt; `.includes`](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-11/nov-18.md#51--44-arrayprototypecontains-and-stringprototypecontains)
    - `String#contains` -&gt; [`String#includes`](https://github.com/zloirock/core-js/#ecmascript-6-string)
    - `Array#contains` -&gt; [`Array#includes`](https://github.com/zloirock/core-js/#ecmascript-7-proposals)
    - `Dict.contains` -&gt; [`Dict.includes`](https://github.com/zloirock/core-js/#dict)
  - [Removed `WeakMap#clear`](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-11/nov-19.md#412-should-weakmapweakset-have-a-clear-method-markm)
  - [Removed `WeakSet#clear`](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-11/nov-19.md#412-should-weakmapweakset-have-a-clear-method-markm)

##### 0.1.2 - 2014.11.19

- `Map` & `Set` bug fix

##### 0.1.1 - 2014.11.18

- Public release

### [fixtures/node_modules/core-js/README.md](fixtures/node_modules/core-js/README.md)

# core-js

[![Sponsors on Open Collective](https://opencollective.com/core-js/sponsors/badge.svg)](#raising-funds) [![Backers on Open Collective](https://opencollective.com/core-js/backers/badge.svg)](#raising-funds) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zloirock/core-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![version](https://img.shields.io/npm/v/core-js.svg)](https://www.npmjs.com/package/core-js) [![npm downloads](https://img.shields.io/npm/dm/core-js.svg)](http://npm-stat.com/charts.html?package=core-js&author=&from=2014-11-18) [![Build Status](https://travis-ci.org/zloirock/core-js.svg)](https://travis-ci.org/zloirock/core-js) [![devDependency status](https://david-dm.org/zloirock/core-js/dev-status.svg)](https://david-dm.org/zloirock/core-js?type=dev)

## As advertising: the author is looking for a good job :)

## [core-js@3, babel and a look into the future](https://github.com/zloirock/core-js/tree/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md)

## Raising funds

`core-js` isn’t backed by a company, so the future of this project depends on you. Become a sponsor or a backer [**on Open Collective**](https://opencollective.com/core-js) or [**on Patreon**](https://www.patreon.com/zloirock) if you are interested in `core-js`.

---

[![](https://opencollective.com/core-js/sponsor/0/avatar.svg)](https://opencollective.com/core-js/sponsor/0/website)[![](https://opencollective.com/core-js/sponsor/1/avatar.svg)](https://opencollective.com/core-js/sponsor/1/website)[![](https://opencollective.com/core-js/sponsor/2/avatar.svg)](https://opencollective.com/core-js/sponsor/2/website)[![](https://opencollective.com/core-js/sponsor/3/avatar.svg)](https://opencollective.com/core-js/sponsor/3/website)[![](https://opencollective.com/core-js/sponsor/4/avatar.svg)](https://opencollective.com/core-js/sponsor/4/website)[![](https://opencollective.com/core-js/sponsor/5/avatar.svg)](https://opencollective.com/core-js/sponsor/5/website)[![](https://opencollective.com/core-js/sponsor/6/avatar.svg)](https://opencollective.com/core-js/sponsor/6/website)[![](https://opencollective.com/core-js/sponsor/7/avatar.svg)](https://opencollective.com/core-js/sponsor/7/website)[![](https://opencollective.com/core-js/sponsor/8/avatar.svg)](https://opencollective.com/core-js/sponsor/8/website)[![](https://opencollective.com/core-js/sponsor/9/avatar.svg)](https://opencollective.com/core-js/sponsor/9/website)

---

[![](https://opencollective.com/core-js/backers.svg?width=890)](https://opencollective.com/core-js#backers)

---

**It’s documentation for obsolete `core-js@2`. If you looking documentation for actual `core-js` version, please, check [this branch](https://github.com/zloirock/core-js/tree/master).**

Modular standard library for JavaScript. Includes polyfills for [ECMAScript 5](#ecmascript-5), [ECMAScript 6](#ecmascript-6): [promises](#ecmascript-6-promise), [symbols](#ecmascript-6-symbol), [collections](#ecmascript-6-collections), iterators, [typed arrays](#ecmascript-6-typed-arrays), [ECMAScript 7+ proposals](#ecmascript-7-proposals), [setImmediate](#setimmediate), etc. Some additional features such as [dictionaries](#dict) or [extended partial application](#partial-application). You can require only needed features or use it without global namespace pollution.

[_Example_](http://goo.gl/a2xexl):

    Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
    "*".repeat(10); // => '**********'
    Promise.resolve(32).then((x) => console.log(x)); // => 32
    setImmediate((x) => console.log(x), 42); // => 42

[_Without global namespace pollution_](http://goo.gl/paOHb0):

    var core = require("core-js/library"); // With a modular system, otherwise use global `core`
    core.Array.from(new core.Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
    core.String.repeat("*", 10); // => '**********'
    core.Promise.resolve(32).then((x) => console.log(x)); // => 32
    core.setImmediate((x) => console.log(x), 42); // => 42

### Index

- [Usage](#usage)
  - [Basic](#basic)
  - [CommonJS](#commonjs)
  - [Custom build](#custom-build-from-the-command-line)
- [Supported engines](#supported-engines)
- [Features](#features)
  - [ECMAScript 5](#ecmascript-5)
  - [ECMAScript 6](#ecmascript-6)
    - [ECMAScript 6: Object](#ecmascript-6-object)
    - [ECMAScript 6: Function](#ecmascript-6-function)
    - [ECMAScript 6: Array](#ecmascript-6-array)
    - [ECMAScript 6: String](#ecmascript-6-string)
    - [ECMAScript 6: RegExp](#ecmascript-6-regexp)
    - [ECMAScript 6: Number](#ecmascript-6-number)
    - [ECMAScript 6: Math](#ecmascript-6-math)
    - [ECMAScript 6: Date](#ecmascript-6-date)
    - [ECMAScript 6: Promise](#ecmascript-6-promise)
    - [ECMAScript 6: Symbol](#ecmascript-6-symbol)
    - [ECMAScript 6: Collections](#ecmascript-6-collections)
    - [ECMAScript 6: Typed Arrays](#ecmascript-6-typed-arrays)
    - [ECMAScript 6: Reflect](#ecmascript-6-reflect)
  - [ECMAScript 7+ proposals](#ecmascript-7-proposals)
    - [stage 4 proposals](#stage-4-proposals)
    - [stage 3 proposals](#stage-3-proposals)
    - [stage 2 proposals](#stage-2-proposals)
    - [stage 1 proposals](#stage-1-proposals)
    - [stage 0 proposals](#stage-0-proposals)
    - [pre-stage 0 proposals](#pre-stage-0-proposals)
  - [Web standards](#web-standards)
    - [setTimeout / setInterval](#settimeout--setinterval)
    - [setImmediate](#setimmediate)
    - [iterable DOM collections](#iterable-dom-collections)
  - [Non-standard](#non-standard)
    - [Object](#object)
    - [Dict](#dict)
    - [partial application](#partial-application)
    - [Number Iterator](#number-iterator)
    - [escaping strings](#escaping-strings)
    - [delay](#delay)
    - [helpers for iterators](#helpers-for-iterators)
- [Missing polyfills](#missing-polyfills)
- [Changelog](./CHANGELOG.md)

## Usage

### Basic

    npm i core-js
    bower install core.js

    // Default
    require("core-js");
    // Without global namespace pollution
    var core = require("core-js/library");
    // Shim only
    require("core-js/shim");

If you need complete build for browser, use builds from `core-js/client` path:

- [default](https://raw.githack.com/zloirock/core-js/v2.6.11/client/core.min.js): Includes all features, standard and non-standard.
- [as a library](https://raw.githack.com/zloirock/core-js/v2.6.11/client/library.min.js): Like “default”, but does not pollute the global namespace (see [2nd example at the top](#core-js)).
- [shim only](https://raw.githack.com/zloirock/core-js/v2.6.11/client/shim.min.js): Only includes the standard methods.

Warning: if you use `core-js` with the extension of native objects, require all needed `core-js` modules at the beginning of entry point of your application, otherwise, conflicts may occur.

### CommonJS

You can require only needed modules.

    require("core-js/fn/set");
    require("core-js/fn/array/from");
    require("core-js/fn/array/find-index");
    Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
    [1, 2, NaN, 3, 4].findIndex(isNaN); // => 2

    // or, w/o global namespace pollution:

    var Set = require("core-js/library/fn/set");
    var from = require("core-js/library/fn/array/from");
    var findIndex = require("core-js/library/fn/array/find-index");
    from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
    findIndex([1, 2, NaN, 3, 4], isNaN); // => 2

Available entry points for methods / constructors, as above examples, and namespaces: for example, `core-js/es6/array` (`core-js/library/es6/array`) contains all [ES6 `Array` features](#ecmascript-6-array), `core-js/es6` (`core-js/library/es6`) contains all ES6 features.

##### Caveats when using CommonJS API:

- `modules` path is internal API, does not inject all required dependencies and can be changed in minor or patch releases. Use it only for a custom build and / or if you know what are you doing.
- `core-js` is extremely modular and uses a lot of very tiny modules, because of that for usage in browsers bundle up `core-js` instead of usage loader for each file, otherwise, you will have hundreds of requests.

#### CommonJS and prototype methods without global namespace pollution

In the `library` version, we can’t pollute prototypes of native constructors. Because of that, prototype methods transformed to static methods like in examples above. `babel` `runtime` transformer also can’t transform them. But with transpilers we can use one more trick - [bind operator and virtual methods](https://github.com/zenparsing/es-function-bind). Special for that, available `/virtual/` entry points. Example:

    import fill from "core-js/library/fn/array/virtual/fill";
    import findIndex from "core-js/library/fn/array/virtual/find-index";

    Array(10)
      ::fill(0)
      .map((a, b) => b * b)
      ::findIndex((it) => it && !(it % 8)); // => 4

    // or

    import { fill, findIndex } from "core-js/library/fn/array/virtual";

    Array(10)
      ::fill(0)
      .map((a, b) => b * b)
      ::findIndex((it) => it && !(it % 8)); // => 4

### Custom build (from the command-line)

    npm i core-js && cd node_modules/core-js && npm i
    npm run grunt build:core.dict,es6 -- --blacklist=es6.promise,es6.math --library=on --path=custom uglify

Where `core.dict` and `es6` are modules (namespaces) names, which will be added to the build, `es6.promise` and `es6.math` are modules (namespaces) names, which will be excluded from the build, `--library=on` is flag for build without global namespace pollution and `custom` is target file name.

Available namespaces: for example, `es6.array` contains [ES6 `Array` features](#ecmascript-6-array), `es6` contains all modules whose names start with `es6`.

### Custom build (from external scripts)

[`core-js-builder`](https://www.npmjs.com/package/core-js-builder) package exports a function that takes the same parameters as the `build` target from the previous section. This will conditionally include or exclude certain parts of `core-js`:

    require("core-js-builder")({
      modules: ["es6", "core.dict"], // modules / namespaces
      blacklist: ["es6.reflect"], // blacklist of modules / namespaces, by default - empty list
      library: false, // flag for build without global namespace pollution, by default - false
      umd: true, // use UMD wrapper for export `core` object, by default - true
    })
      .then((code) => {
        // ...
      })
      .catch((error) => {
        // ...
      });

## Supported engines

**Tested in:**

- Chrome 26+
- Firefox 4+
- Safari 5+
- Opera 12+
- Internet Explorer 6+ (sure, IE8- with ES3 limitations)
- Edge
- Android Browser 2.3+
- iOS Safari 5.1+
- PhantomJS 1.9 / 2.1
- NodeJS 0.8+

…and it doesn’t mean `core-js` will not work in other engines, they just have not been tested.

## Features:

[_CommonJS entry points:_](#commonjs)

    core-js(/library)       <- all features
    core-js(/library)/shim  <- only polyfills

### ECMAScript 5

All features moved to the [`es6` namespace](#ecmascript-6), here just a list of features:

    Object
      .create(proto | null, descriptors?)    -> object
      .getPrototypeOf(object)                -> proto | null
      .defineProperty(target, key, desc)     -> target, cap for ie8-
      .defineProperties(target, descriptors) -> target, cap for ie8-
      .getOwnPropertyDescriptor(object, key) -> desc
      .getOwnPropertyNames(object)           -> array
      .keys(object)                          -> array
      .seal(object)                          -> object, cap for ie8-
      .freeze(object)                        -> object, cap for ie8-
      .preventExtensions(object)             -> object, cap for ie8-
      .isSealed(object)                      -> bool, cap for ie8-
      .isFrozen(object)                      -> bool, cap for ie8-
      .isExtensible(object)                  -> bool, cap for ie8-
    Array
      .isArray(var)                                -> bool
      #slice(start?, end?)                         -> array, fix for ie7-
      #join(string = ',')                          -> string, fix for ie7-
      #indexOf(var, from?)                         -> int
      #lastIndexOf(var, from?)                     -> int
      #every(fn(val, index, @), that)              -> bool
      #some(fn(val, index, @), that)               -> bool
      #forEach(fn(val, index, @), that)            -> void
      #map(fn(val, index, @), that)                -> array
      #filter(fn(val, index, @), that)             -> array
      #reduce(fn(memo, val, index, @), memo?)      -> var
      #reduceRight(fn(memo, val, index, @), memo?) -> var
      #sort(fn?)                                   -> @, fixes for some engines
    Function
      #bind(object, ...args) -> boundFn(...args)
    String
      #split(separator, limit) -> array
      #trim()                  -> str
    RegExp
      #toString() -> str
    Number
      #toFixed(digits)        -> string
      #toPrecision(precision) -> string
    parseInt(str, radix) -> int
    parseFloat(str)      -> num
    Date
      .now()         -> int
      #toISOString() -> string
      #toJSON()      -> string

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es5

### ECMAScript 6

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6

#### ECMAScript 6: Object

Modules [`es6.object.assign`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.assign.js), [`es6.object.is`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.is.js), [`es6.object.set-prototype-of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.set-prototype-of.js) and [`es6.object.to-string`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.to-string.js).

In ES6 most `Object` static methods should work with primitives. Modules [`es6.object.freeze`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.freeze.js), [`es6.object.seal`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.seal.js), [`es6.object.prevent-extensions`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.prevent-extensions.js), [`es6.object.is-frozen`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.is-frozen.js), [`es6.object.is-sealed`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.is-sealed.js), [`es6.object.is-extensible`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.is-extensible.js), [`es6.object.get-own-property-descriptor`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.get-own-property-descriptor.js), [`es6.object.get-prototype-of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.get-prototype-of.js), [`es6.object.keys`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.keys.js) and [`es6.object.get-own-property-names`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.get-own-property-names.js).

Just ES5 features: [`es6.object.create`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.create.js), [`es6.object.define-property`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.define-property.js) and [`es6.object.define-properties`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.object.es6.object.define-properties.js).

    Object
      .assign(target, ...src)                -> target
      .is(a, b)                              -> bool
      .setPrototypeOf(target, proto | null)  -> target (required __proto__ - IE11+)
      .create(object | null, descriptors?)   -> object
      .getPrototypeOf(var)                   -> object | null
      .defineProperty(object, key, desc)     -> target
      .defineProperties(object, descriptors) -> target
      .getOwnPropertyDescriptor(var, key)    -> desc | undefined
      .keys(var)                             -> array
      .getOwnPropertyNames(var)              -> array
      .freeze(var)                           -> var
      .seal(var)                             -> var
      .preventExtensions(var)                -> var
      .isFrozen(var)                         -> bool
      .isSealed(var)                         -> bool
      .isExtensible(var)                     -> bool
      #toString()                            -> string, ES6 fix: @@toStringTag support

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/object
    core-js(/library)/fn/object/assign
    core-js(/library)/fn/object/is
    core-js(/library)/fn/object/set-prototype-of
    core-js(/library)/fn/object/get-prototype-of
    core-js(/library)/fn/object/create
    core-js(/library)/fn/object/define-property
    core-js(/library)/fn/object/define-properties
    core-js(/library)/fn/object/get-own-property-descriptor
    core-js(/library)/fn/object/keys
    core-js(/library)/fn/object/get-own-property-names
    core-js(/library)/fn/object/freeze
    core-js(/library)/fn/object/seal
    core-js(/library)/fn/object/prevent-extensions
    core-js(/library)/fn/object/is-frozen
    core-js(/library)/fn/object/is-sealed
    core-js(/library)/fn/object/is-extensible
    core-js/fn/object/to-string

[_Examples_](http://goo.gl/ywdwPz):

    var foo = { q: 1, w: 2 },
      bar = { e: 3, r: 4 },
      baz = { t: 5, y: 6 };
    Object.assign(foo, bar, baz); // => foo = {q: 1, w: 2, e: 3, r: 4, t: 5, y: 6}

    Object.is(NaN, NaN); // => true
    Object.is(0, -0); // => false
    Object.is(42, 42); // => true
    Object.is(42, "42"); // => false

    function Parent() {}
    function Child() {}
    Object.setPrototypeOf(Child.prototype, Parent.prototype);
    new Child() instanceof Child; // => true
    new Child() instanceof Parent; // => true

    var O = {};
    O[Symbol.toStringTag] = "Foo";
    "" + O; // => '[object Foo]'

    Object.keys("qwe"); // => ['0', '1', '2']
    Object.getPrototypeOf("qwe") === String.prototype; // => true

#### ECMAScript 6: Function

Modules [`es6.function.name`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.function.name.js), [`es6.function.has-instance`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.function.has-instance.js). Just ES5: [`es6.function.bind`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.function.bind.js).

    Function
      #bind(object, ...args) -> boundFn(...args)
      #name                  -> string (IE9+)
      #@@hasInstance(var)    -> bool

[_CommonJS entry points:_](#commonjs)

    core-js/es6/function
    core-js/fn/function/name
    core-js/fn/function/has-instance
    core-js/fn/function/bind
    core-js/fn/function/virtual/bind

[_Example_](http://goo.gl/zqu3Wp):

    (function foo() {}.name); // => 'foo'

    console.log.bind(console, 42)(43); // => 42 43

#### ECMAScript 6: Array

Modules [`es6.array.from`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.from.js), [`es6.array.of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.of.js), [`es6.array.copy-within`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.copy-within.js), [`es6.array.fill`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.fill.js), [`es6.array.find`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.find.js), [`es6.array.find-index`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.find-index.js), [`es6.array.iterator`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.iterator.js). ES5 features with fixes: [`es6.array.is-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.is-array.js), [`es6.array.slice`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.slice.js), [`es6.array.join`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.join.js), [`es6.array.index-of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.index-of.js), [`es6.array.last-index-of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.last-index-of.js), [`es6.array.every`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.every.js), [`es6.array.some`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.some.js), [`es6.array.for-each`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.for-each.js), [`es6.array.map`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.map.js), [`es6.array.filter`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.filter.js), [`es6.array.reduce`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.reduce.js), [`es6.array.reduce-right`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.reduce-right.js), [`es6.array.sort`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.array.sort.js).

    Array
      .from(iterable | array-like, mapFn(val, index)?, that) -> array
      .of(...args)                                           -> array
      .isArray(var)                                          -> bool
      #copyWithin(target = 0, start = 0, end = @length)      -> @
      #fill(val, start = 0, end = @length)                   -> @
      #find(fn(val, index, @), that)                         -> val
      #findIndex(fn(val, index, @), that)                    -> index | -1
      #values()                                              -> iterator
      #keys()                                                -> iterator
      #entries()                                             -> iterator
      #join(string = ',')                                    -> string, fix for ie7-
      #slice(start?, end?)                                   -> array, fix for ie7-
      #indexOf(var, from?)                                   -> index | -1
      #lastIndexOf(var, from?)                               -> index | -1
      #every(fn(val, index, @), that)                        -> bool
      #some(fn(val, index, @), that)                         -> bool
      #forEach(fn(val, index, @), that)                      -> void
      #map(fn(val, index, @), that)                          -> array
      #filter(fn(val, index, @), that)                       -> array
      #reduce(fn(memo, val, index, @), memo?)                -> var
      #reduceRight(fn(memo, val, index, @), memo?)           -> var
      #sort(fn?)                                             -> @, invalid arguments fix
      #@@iterator()                                          -> iterator (values)
      #@@unscopables                                         -> object (cap)
    Arguments
      #@@iterator() -> iterator (values, available only in core-js methods)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/array
    core-js(/library)/fn/array/from
    core-js(/library)/fn/array/of
    core-js(/library)/fn/array/is-array
    core-js(/library)/fn/array/iterator
    core-js(/library)/fn/array/copy-within
    core-js(/library)/fn/array/fill
    core-js(/library)/fn/array/find
    core-js(/library)/fn/array/find-index
    core-js(/library)/fn/array/values
    core-js(/library)/fn/array/keys
    core-js(/library)/fn/array/entries
    core-js(/library)/fn/array/slice
    core-js(/library)/fn/array/join
    core-js(/library)/fn/array/index-of
    core-js(/library)/fn/array/last-index-of
    core-js(/library)/fn/array/every
    core-js(/library)/fn/array/some
    core-js(/library)/fn/array/for-each
    core-js(/library)/fn/array/map
    core-js(/library)/fn/array/filter
    core-js(/library)/fn/array/reduce
    core-js(/library)/fn/array/reduce-right
    core-js(/library)/fn/array/sort
    core-js(/library)/fn/array/virtual/iterator
    core-js(/library)/fn/array/virtual/copy-within
    core-js(/library)/fn/array/virtual/fill
    core-js(/library)/fn/array/virtual/find
    core-js(/library)/fn/array/virtual/find-index
    core-js(/library)/fn/array/virtual/values
    core-js(/library)/fn/array/virtual/keys
    core-js(/library)/fn/array/virtual/entries
    core-js(/library)/fn/array/virtual/slice
    core-js(/library)/fn/array/virtual/join
    core-js(/library)/fn/array/virtual/index-of
    core-js(/library)/fn/array/virtual/last-index-of
    core-js(/library)/fn/array/virtual/every
    core-js(/library)/fn/array/virtual/some
    core-js(/library)/fn/array/virtual/for-each
    core-js(/library)/fn/array/virtual/map
    core-js(/library)/fn/array/virtual/filter
    core-js(/library)/fn/array/virtual/reduce
    core-js(/library)/fn/array/virtual/reduce-right
    core-js(/library)/fn/array/virtual/sort

[_Examples_](http://goo.gl/oaUFUf):

    Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
    Array.from({ 0: 1, 1: 2, 2: 3, length: 3 }); // => [1, 2, 3]
    Array.from("123", Number); // => [1, 2, 3]
    Array.from("123", function (it) {
      return it * it;
    }); // => [1, 4, 9]

    Array.of(1); // => [1]
    Array.of(1, 2, 3); // => [1, 2, 3]

    var array = ["a", "b", "c"];

    for (var val of array) console.log(val); // => 'a', 'b', 'c'
    for (var val of array.values()) console.log(val); // => 'a', 'b', 'c'
    for (var key of array.keys()) console.log(key); // => 0, 1, 2
    for (var [key, val] of array.entries()) {
      console.log(key); // => 0, 1, 2
      console.log(val); // => 'a', 'b', 'c'
    }

    function isOdd(val) {
      return val % 2;
    }
    [4, 8, 15, 16, 23, 42].find(isOdd); // => 15
    [4, 8, 15, 16, 23, 42].findIndex(isOdd); // => 2
    [4, 8, 15, 16, 23, 42].find(isNaN); // => undefined
    [4, 8, 15, 16, 23, 42].findIndex(isNaN); // => -1

    Array(5).fill(42); // => [42, 42, 42, 42, 42]

    [1, 2, 3, 4, 5].copyWithin(0, 3); // => [4, 5, 3, 4, 5]

#### ECMAScript 6: String

Modules [`es6.string.from-code-point`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.from-code-point.js), [`es6.string.raw`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.raw.js), [`es6.string.iterator`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.iterator.js), [`es6.string.code-point-at`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.code-point-at.js), [`es6.string.ends-with`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.ends-with.js), [`es6.string.includes`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.includes.js), [`es6.string.repeat`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.repeat.js), [`es6.string.starts-with`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.starts-with.js) and [`es6.string.trim`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.trim.js).

Annex B HTML methods. Ugly, but it’s also the part of the spec. Modules [`es6.string.anchor`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.anchor.js), [`es6.string.big`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.big.js), [`es6.string.blink`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.blink.js), [`es6.string.bold`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.bold.js), [`es6.string.fixed`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.fixed.js), [`es6.string.fontcolor`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.fontcolor.js), [`es6.string.fontsize`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.fontsize.js), [`es6.string.italics`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.italics.js), [`es6.string.link`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.link.js), [`es6.string.small`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.small.js), [`es6.string.strike`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.strike.js), [`es6.string.sub`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.sub.js) and [`es6.string.sup`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.string.sup.js).

    String
      .fromCodePoint(...codePoints) -> str
      .raw({raw}, ...substitutions) -> str
      #includes(str, from?) -> bool
      #startsWith(str, from?) -> bool
      #endsWith(str, from?) -> bool
      #repeat(num) -> str
      #codePointAt(pos) -> uint
      #trim() -> str, ES6 fix
      #anchor(name)     -> str
      #big()            -> str
      #blink()          -> str
      #bold()           -> str
      #fixed()          -> str
      #fontcolor(color) -> str
      #fontsize(size)   -> str
      #italics()        -> str
      #link(url)        -> str
      #small()          -> str
      #strike()         -> str
      #sub()            -> str
      #sup()            -> str
      #@@iterator() -> iterator (code points)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/string
    core-js(/library)/fn/string/from-code-point
    core-js(/library)/fn/string/raw
    core-js(/library)/fn/string/includes
    core-js(/library)/fn/string/starts-with
    core-js(/library)/fn/string/ends-with
    core-js(/library)/fn/string/repeat
    core-js(/library)/fn/string/code-point-at
    core-js(/library)/fn/string/trim
    core-js(/library)/fn/string/anchor
    core-js(/library)/fn/string/big
    core-js(/library)/fn/string/blink
    core-js(/library)/fn/string/bold
    core-js(/library)/fn/string/fixed
    core-js(/library)/fn/string/fontcolor
    core-js(/library)/fn/string/fontsize
    core-js(/library)/fn/string/italics
    core-js(/library)/fn/string/link
    core-js(/library)/fn/string/small
    core-js(/library)/fn/string/strike
    core-js(/library)/fn/string/sub
    core-js(/library)/fn/string/sup
    core-js(/library)/fn/string/iterator
    core-js(/library)/fn/string/virtual/includes
    core-js(/library)/fn/string/virtual/starts-with
    core-js(/library)/fn/string/virtual/ends-with
    core-js(/library)/fn/string/virtual/repeat
    core-js(/library)/fn/string/virtual/code-point-at
    core-js(/library)/fn/string/virtual/trim
    core-js(/library)/fn/string/virtual/anchor
    core-js(/library)/fn/string/virtual/big
    core-js(/library)/fn/string/virtual/blink
    core-js(/library)/fn/string/virtual/bold
    core-js(/library)/fn/string/virtual/fixed
    core-js(/library)/fn/string/virtual/fontcolor
    core-js(/library)/fn/string/virtual/fontsize
    core-js(/library)/fn/string/virtual/italics
    core-js(/library)/fn/string/virtual/link
    core-js(/library)/fn/string/virtual/small
    core-js(/library)/fn/string/virtual/strike
    core-js(/library)/fn/string/virtual/sub
    core-js(/library)/fn/string/virtual/sup
    core-js(/library)/fn/string/virtual/iterator

[_Examples_](http://goo.gl/3UaQ93):

    for (var val of "a𠮷b") {
      console.log(val); // => 'a', '𠮷', 'b'
    }

    "foobarbaz".includes("bar"); // => true
    "foobarbaz".includes("bar", 4); // => false
    "foobarbaz".startsWith("foo"); // => true
    "foobarbaz".startsWith("bar", 3); // => true
    "foobarbaz".endsWith("baz"); // => true
    "foobarbaz".endsWith("bar", 6); // => true

    "string".repeat(3); // => 'stringstringstring'

    "𠮷".codePointAt(0); // => 134071
    String.fromCodePoint(97, 134071, 98); // => 'a𠮷b'

    var name = "Bob";
    String.raw`Hi\n${name}!`; // => 'Hi\\nBob!' (ES6 template string syntax)
    String.raw({ raw: "test" }, 0, 1, 2); // => 't0e1s2t'

    "foo".bold(); // => '<b>foo</b>'
    "bar".anchor('a"b'); // => '<a name="a&quot;b">bar</a>'
    "baz".link("http://example.com"); // => '<a href="http://example.com">baz</a>'

#### ECMAScript 6: RegExp

Modules [`es6.regexp.constructor`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.regexp.constructor.js) and [`es6.regexp.flags`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.regexp.flags.js).

Support well-known [symbols](#ecmascript-6-symbol) `@@match`, `@@replace`, `@@search` and `@@split`, modules [`es6.regexp.match`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.regexp.match.js), [`es6.regexp.replace`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.regexp.replace.js), [`es6.regexp.search`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.regexp.search.js) and [`es6.regexp.split`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.regexp.split.js).

    [new] RegExp(pattern, flags?) -> regexp, ES6 fix: can alter flags (IE9+)
      #flags -> str (IE9+)
      #toString() -> str, ES6 fixes
      #@@match(str)             -> array | null
      #@@replace(str, replacer) -> string
      #@@search(str)            -> index
      #@@split(str, limit)      -> array
    String
      #match(tpl)             -> var, ES6 fix for support @@match
      #replace(tpl, replacer) -> var, ES6 fix for support @@replace
      #search(tpl)            -> var, ES6 fix for support @@search
      #split(tpl, limit)      -> var, ES6 fix for support @@split, some fixes for old engines

[_CommonJS entry points:_](#commonjs)

    core-js/es6/regexp
    core-js/fn/regexp/constructor
    core-js(/library)/fn/regexp/flags
    core-js/fn/regexp/to-string
    core-js/fn/regexp/match
    core-js/fn/regexp/replace
    core-js/fn/regexp/search
    core-js/fn/regexp/split

[_Examples_](http://goo.gl/PiJxBD):

    RegExp(/./g, "m"); // => /./m

    /foo/.flags; // => ''
    /foo/gim.flags; // => 'gim'

    "foo".match({ [Symbol.match]: (_) => 1 }); // => 1
    "foo".replace({ [Symbol.replace]: (_) => 2 }); // => 2
    "foo".search({ [Symbol.search]: (_) => 3 }); // => 3
    "foo".split({ [Symbol.split]: (_) => 4 }); // => 4

    RegExp.prototype.toString.call({ source: "foo", flags: "bar" }); // => '/foo/bar'

#### ECMAScript 6: Number

Module [`es6.number.constructor`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.constructor.js). `Number` constructor support binary and octal literals, [_example_](http://goo.gl/jRd6b3):

    Number("0b1010101"); // => 85
    Number("0o7654321"); // => 2054353

Modules [`es6.number.epsilon`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.epsilon.js), [`es6.number.is-finite`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.is-finite.js), [`es6.number.is-integer`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.is-integer.js), [`es6.number.is-nan`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.is-nan.js), [`es6.number.is-safe-integer`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.is-safe-integer.js), [`es6.number.max-safe-integer`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.max-safe-integer.js), [`es6.number.min-safe-integer`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.min-safe-integer.js), [`es6.number.parse-float`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.parse-float.js), [`es6.number.parse-int`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.parse-int.js), [`es6.number.to-fixed`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.to-fixed.js), [`es6.number.to-precision`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.number.to-precision.js), [`es6.parse-int`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.parse-int.js), [`es6.parse-float`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.parse-float.js).

    [new] Number(var)         -> number | number object
      .isFinite(num)          -> bool
      .isNaN(num)             -> bool
      .isInteger(num)         -> bool
      .isSafeInteger(num)     -> bool
      .parseFloat(str)        -> num
      .parseInt(str)          -> int
      .EPSILON                -> num
      .MAX_SAFE_INTEGER       -> int
      .MIN_SAFE_INTEGER       -> int
      #toFixed(digits)        -> string, fixes
      #toPrecision(precision) -> string, fixes
    parseFloat(str)           -> num, fixes
    parseInt(str)             -> int, fixes

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/number
    core-js/es6/number/constructor
    core-js(/library)/fn/number/is-finite
    core-js(/library)/fn/number/is-nan
    core-js(/library)/fn/number/is-integer
    core-js(/library)/fn/number/is-safe-integer
    core-js(/library)/fn/number/parse-float
    core-js(/library)/fn/number/parse-int
    core-js(/library)/fn/number/epsilon
    core-js(/library)/fn/number/max-safe-integer
    core-js(/library)/fn/number/min-safe-integer
    core-js(/library)/fn/number/to-fixed
    core-js(/library)/fn/number/to-precision
    core-js(/library)/fn/parse-float
    core-js(/library)/fn/parse-int

#### ECMAScript 6: Math

Modules [`es6.math.acosh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.acosh.js), [`es6.math.asinh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.asinh.js), [`es6.math.atanh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.atanh.js), [`es6.math.cbrt`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.cbrt.js), [`es6.math.clz32`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.clz32.js), [`es6.math.cosh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.cosh.js), [`es6.math.expm1`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.expm1.js), [`es6.math.fround`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.fround.js), [`es6.math.hypot`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.hypot.js), [`es6.math.imul`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.imul.js), [`es6.math.log10`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.log10.js), [`es6.math.log1p`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.log1p.js), [`es6.math.log2`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.log2.js), [`es6.math.sign`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.sign.js), [`es6.math.sinh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.sinh.js), [`es6.math.tanh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.tanh.js), [`es6.math.trunc`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.math.trunc.js).

    Math
      .acosh(num)     -> num
      .asinh(num)     -> num
      .atanh(num)     -> num
      .cbrt(num)      -> num
      .clz32(num)     -> uint
      .cosh(num)      -> num
      .expm1(num)     -> num
      .fround(num)    -> num
      .hypot(...args) -> num
      .imul(num, num) -> int
      .log1p(num)     -> num
      .log10(num)     -> num
      .log2(num)      -> num
      .sign(num)      -> 1 | -1 | 0 | -0 | NaN
      .sinh(num)      -> num
      .tanh(num)      -> num
      .trunc(num)     -> num

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/math
    core-js(/library)/fn/math/acosh
    core-js(/library)/fn/math/asinh
    core-js(/library)/fn/math/atanh
    core-js(/library)/fn/math/cbrt
    core-js(/library)/fn/math/clz32
    core-js(/library)/fn/math/cosh
    core-js(/library)/fn/math/expm1
    core-js(/library)/fn/math/fround
    core-js(/library)/fn/math/hypot
    core-js(/library)/fn/math/imul
    core-js(/library)/fn/math/log1p
    core-js(/library)/fn/math/log10
    core-js(/library)/fn/math/log2
    core-js(/library)/fn/math/sign
    core-js(/library)/fn/math/sinh
    core-js(/library)/fn/math/tanh
    core-js(/library)/fn/math/trunc

#### ECMAScript 6: Date

Modules [`es6.date.to-string`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.date.to-string.js), ES5 features with fixes: [`es6.date.now`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.date.now.js), [`es6.date.to-iso-string`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.date.to-iso-string.js), [`es6.date.to-json`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.date.to-json.js) and [`es6.date.to-primitive`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.date.to-primitive.js).

    Date
      .now()               -> int
      #toISOString()       -> string
      #toJSON()            -> string
      #toString()          -> string
      #@@toPrimitive(hint) -> primitive

[_CommonJS entry points:_](#commonjs)

    core-js/es6/date
    core-js/fn/date/to-string
    core-js(/library)/fn/date/now
    core-js(/library)/fn/date/to-iso-string
    core-js(/library)/fn/date/to-json
    core-js(/library)/fn/date/to-primitive

[_Example_](http://goo.gl/haeHLR):

    new Date(NaN).toString(); // => 'Invalid Date'

#### ECMAScript 6: Promise

Module [`es6.promise`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.promise.js).

    new Promise(executor(resolve(var), reject(var))) -> promise
      #then(resolved(var), rejected(var))            -> promise
      #catch(rejected(var))                          -> promise
      .resolve(promise | var)                        -> promise
      .reject(var)                                   -> promise
      .all(iterable)                                 -> promise
      .race(iterable)                                -> promise

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/promise
    core-js(/library)/fn/promise

Basic [_example_](http://goo.gl/vGrtUC):

    function sleepRandom(time) {
      return new Promise(function (resolve, reject) {
        setTimeout(resolve, time * 1e3, 0 | (Math.random() * 1e3));
      });
    }

    console.log("Run"); // => Run
    sleepRandom(5)
      .then(function (result) {
        console.log(result); // => 869, after 5 sec.
        return sleepRandom(10);
      })
      .then(function (result) {
        console.log(result); // => 202, after 10 sec.
      })
      .then(function () {
        console.log("immediately after"); // => immediately after
        throw Error("Irror!");
      })
      .then(function () {
        console.log("will not be displayed");
      })
      .catch((x) => console.log(x)); // => => Error: Irror!

`Promise.resolve` and `Promise.reject` [_example_](http://goo.gl/vr8TN3):

    Promise.resolve(42).then((x) => console.log(x)); // => 42
    Promise.reject(42).catch((x) => console.log(x)); // => 42

    Promise.resolve($.getJSON("/data.json")); // => ES6 promise

`Promise.all` [_example_](http://goo.gl/RdoDBZ):

    Promise.all([
      "foo",
      sleepRandom(5),
      sleepRandom(15),
      sleepRandom(10), // after 15 sec:
    ]).then((x) => console.log(x)); // => ['foo', 956, 85, 382]

`Promise.race` [_example_](http://goo.gl/L8ovkJ):

    function timeLimit(promise, time) {
      return Promise.race([
        promise,
        new Promise(function (resolve, reject) {
          setTimeout(reject, time * 1e3, Error("Await > " + time + " sec"));
        }),
      ]);
    }

    timeLimit(sleepRandom(5), 10).then((x) => console.log(x)); // => 853, after 5 sec.
    timeLimit(sleepRandom(15), 10).catch((x) => console.log(x)); // Error: Await > 10 sec

ECMAScript 7 [async functions](https://tc39.github.io/ecmascript-asyncawait) [example](http://goo.gl/wnQS4j):

    var delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

    async function sleepRandom(time) {
      await delay(time * 1e3);
      return 0 | (Math.random() * 1e3);
    }
    async function sleepError(time, msg) {
      await delay(time * 1e3);
      throw Error(msg);
    }

    (async () => {
      try {
        console.log("Run"); // => Run
        console.log(await sleepRandom(5)); // => 936, after 5 sec.
        var [a, b, c] = await Promise.all([
          sleepRandom(5),
          sleepRandom(15),
          sleepRandom(10),
        ]);
        console.log(a, b, c); // => 210 445 71, after 15 sec.
        await sleepError(5, "Irror!");
        console.log("Will not be displayed");
      } catch (e) {
        console.log(e); // => Error: 'Irror!', after 5 sec.
      }
    })();

##### Unhandled rejection tracking

In Node.js, like in native implementation, available events [`unhandledRejection`](https://nodejs.org/api/process.html#process_event_unhandledrejection) and [`rejectionHandled`](https://nodejs.org/api/process.html#process_event_rejectionhandled):

    process.on("unhandledRejection", (reason, promise) =>
      console.log("unhandled", reason, promise)
    );
    process.on("rejectionHandled", (promise) => console.log("handled", promise));

    var p = Promise.reject(42);
    // unhandled 42 [object Promise]

    setTimeout(() => p.catch((_) => _), 1e3);
    // handled [object Promise]

In a browser on rejection, by default, you will see notify in the console, or you can add a custom handler and a handler on handling unhandled, [_example_](http://goo.gl/Wozskl):

    window.onunhandledrejection = (e) =>
      console.log("unhandled", e.reason, e.promise);
    window.onrejectionhandled = (e) => console.log("handled", e.reason, e.promise);

    var p = Promise.reject(42);
    // unhandled 42 [object Promise]

    setTimeout(() => p.catch((_) => _), 1e3);
    // handled 42 [object Promise]

#### ECMAScript 6: Symbol

Module [`es6.symbol`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.symbol.js).

    Symbol(description?)  -> symbol
      .hasInstance        -> @@hasInstance
      .isConcatSpreadable -> @@isConcatSpreadable
      .iterator           -> @@iterator
      .match              -> @@match
      .replace            -> @@replace
      .search             -> @@search
      .species            -> @@species
      .split              -> @@split
      .toPrimitive        -> @@toPrimitive
      .toStringTag        -> @@toStringTag
      .unscopables        -> @@unscopables
      .for(key)           -> symbol
      .keyFor(symbol)     -> key
      .useSimple()        -> void
      .useSetter()        -> void
    Object
      .getOwnPropertySymbols(object) -> array

Also wrapped some methods for correct work with `Symbol` polyfill.

    Object
      .create(proto | null, descriptors?)    -> object
      .defineProperty(target, key, desc)     -> target
      .defineProperties(target, descriptors) -> target
      .getOwnPropertyDescriptor(var, key)    -> desc | undefined
      .getOwnPropertyNames(var)              -> array
      #propertyIsEnumerable(key)             -> bool
    JSON
      .stringify(target, replacer?, space?) -> string | undefined

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/symbol
    core-js(/library)/fn/symbol
    core-js(/library)/fn/symbol/has-instance
    core-js(/library)/fn/symbol/is-concat-spreadable
    core-js(/library)/fn/symbol/iterator
    core-js(/library)/fn/symbol/match
    core-js(/library)/fn/symbol/replace
    core-js(/library)/fn/symbol/search
    core-js(/library)/fn/symbol/species
    core-js(/library)/fn/symbol/split
    core-js(/library)/fn/symbol/to-primitive
    core-js(/library)/fn/symbol/to-string-tag
    core-js(/library)/fn/symbol/unscopables
    core-js(/library)/fn/symbol/for
    core-js(/library)/fn/symbol/key-for

[_Basic example_](http://goo.gl/BbvWFc):

    var Person = (function () {
      var NAME = Symbol("name");
      function Person(name) {
        this[NAME] = name;
      }
      Person.prototype.getName = function () {
        return this[NAME];
      };
      return Person;
    })();

    var person = new Person("Vasya");
    console.log(person.getName()); // => 'Vasya'
    console.log(person["name"]); // => undefined
    console.log(person[Symbol("name")]); // => undefined, symbols are uniq
    for (var key in person) console.log(key); // => only 'getName', symbols are not enumerable

`Symbol.for` & `Symbol.keyFor` [_example_](http://goo.gl/0pdJjX):

    var symbol = Symbol.for("key");
    symbol === Symbol.for("key"); // true
    Symbol.keyFor(symbol); // 'key'

[_Example_](http://goo.gl/mKVOQJ) with methods for getting own object keys:

    var O = { a: 1 };
    Object.defineProperty(O, "b", { value: 2 });
    O[Symbol("c")] = 3;
    Object.keys(O); // => ['a']
    Object.getOwnPropertyNames(O); // => ['a', 'b']
    Object.getOwnPropertySymbols(O); // => [Symbol(c)]
    Reflect.ownKeys(O); // => ['a', 'b', Symbol(c)]

##### Caveats when using `Symbol` polyfill:

- We can’t add new primitive type, `Symbol` returns object.
- `Symbol.for` and `Symbol.keyFor` can’t be shimmed cross-realm.
- By default, to hide the keys, `Symbol` polyfill defines setter in `Object.prototype`. For this reason, uncontrolled creation of symbols can cause memory leak and the `in` operator is not working correctly with `Symbol` polyfill: `Symbol() in {} // => true`.

You can disable defining setters in `Object.prototype`. [Example](http://goo.gl/N5UD7J):

    Symbol.useSimple();
    var s1 = Symbol("s1"),
      o1 = {};
    o1[s1] = true;
    for (var key in o1) console.log(key); // => 'Symbol(s1)_t.qamkg9f3q', w/o native Symbol

    Symbol.useSetter();
    var s2 = Symbol("s2"),
      o2 = {};
    o2[s2] = true;
    for (var key in o2) console.log(key); // nothing

- Currently, `core-js` not adds setters to `Object.prototype` for well-known symbols for correct work something like `Symbol.iterator in foo`. It can cause problems with their enumerability.
- Some problems possible with environment exotic objects (for example, IE `localStorage`).

#### ECMAScript 6: Collections

`core-js` uses native collections in most case, just fixes methods / constructor, if it’s required, and in old environment uses fast polyfill (O(1) lookup).

#### Map

Module [`es6.map`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.map.js).

    new Map(iterable (entries) ?)     -> map
      #clear()                        -> void
      #delete(key)                    -> bool
      #forEach(fn(val, key, @), that) -> void
      #get(key)                       -> val
      #has(key)                       -> bool
      #set(key, val)                  -> @
      #size                           -> uint
      #values()                       -> iterator
      #keys()                         -> iterator
      #entries()                      -> iterator
      #@@iterator()                   -> iterator (entries)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/map
    core-js(/library)/fn/map

[_Examples_](http://goo.gl/GWR7NI):

    var a = [1];

    var map = new Map([
      ["a", 1],
      [42, 2],
    ]);
    map.set(a, 3).set(true, 4);

    console.log(map.size); // => 4
    console.log(map.has(a)); // => true
    console.log(map.has([1])); // => false
    console.log(map.get(a)); // => 3
    map.forEach(function (val, key) {
      console.log(val); // => 1, 2, 3, 4
      console.log(key); // => 'a', 42, [1], true
    });
    map.delete(a);
    console.log(map.size); // => 3
    console.log(map.get(a)); // => undefined
    console.log(Array.from(map)); // => [['a', 1], [42, 2], [true, 4]]

    var map = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);

    for (var [key, val] of map) {
      console.log(key); // => 'a', 'b', 'c'
      console.log(val); // => 1, 2, 3
    }
    for (var val of map.values()) console.log(val); // => 1, 2, 3
    for (var key of map.keys()) console.log(key); // => 'a', 'b', 'c'
    for (var [key, val] of map.entries()) {
      console.log(key); // => 'a', 'b', 'c'
      console.log(val); // => 1, 2, 3
    }

#### Set

Module [`es6.set`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.set.js).

    new Set(iterable?)              -> set
      #add(key)                     -> @
      #clear()                      -> void
      #delete(key)                  -> bool
      #forEach(fn(el, el, @), that) -> void
      #has(key)                     -> bool
      #size                         -> uint
      #values()                     -> iterator
      #keys()                       -> iterator
      #entries()                    -> iterator
      #@@iterator()                 -> iterator (values)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/set
    core-js(/library)/fn/set

[_Examples_](http://goo.gl/bmhLwg):

    var set = new Set(["a", "b", "a", "c"]);
    set.add("d").add("b").add("e");
    console.log(set.size); // => 5
    console.log(set.has("b")); // => true
    set.forEach(function (it) {
      console.log(it); // => 'a', 'b', 'c', 'd', 'e'
    });
    set.delete("b");
    console.log(set.size); // => 4
    console.log(set.has("b")); // => false
    console.log(Array.from(set)); // => ['a', 'c', 'd', 'e']

    var set = new Set([1, 2, 3, 2, 1]);

    for (var val of set) console.log(val); // => 1, 2, 3
    for (var val of set.values()) console.log(val); // => 1, 2, 3
    for (var key of set.keys()) console.log(key); // => 1, 2, 3
    for (var [key, val] of set.entries()) {
      console.log(key); // => 1, 2, 3
      console.log(val); // => 1, 2, 3
    }

#### WeakMap

Module [`es6.weak-map`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.weak-map.js).

    new WeakMap(iterable (entries) ?) -> weakmap
      #delete(key)                    -> bool
      #get(key)                       -> val
      #has(key)                       -> bool
      #set(key, val)                  -> @

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/weak-map
    core-js(/library)/fn/weak-map

[_Examples_](http://goo.gl/SILXyw):

    var a = [1],
      b = [2],
      c = [3];

    var wmap = new WeakMap([
      [a, 1],
      [b, 2],
    ]);
    wmap.set(c, 3).set(b, 4);
    console.log(wmap.has(a)); // => true
    console.log(wmap.has([1])); // => false
    console.log(wmap.get(a)); // => 1
    wmap.delete(a);
    console.log(wmap.get(a)); // => undefined

    // Private properties store:
    var Person = (function () {
      var names = new WeakMap();
      function Person(name) {
        names.set(this, name);
      }
      Person.prototype.getName = function () {
        return names.get(this);
      };
      return Person;
    })();

    var person = new Person("Vasya");
    console.log(person.getName()); // => 'Vasya'
    for (var key in person) console.log(key); // => only 'getName'

#### WeakSet

Module [`es6.weak-set`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.weak-set.js).

    new WeakSet(iterable?) -> weakset
      #add(key)            -> @
      #delete(key)         -> bool
      #has(key)            -> bool

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/weak-set
    core-js(/library)/fn/weak-set

[_Examples_](http://goo.gl/TdFbEx):

    var a = [1],
      b = [2],
      c = [3];

    var wset = new WeakSet([a, b, a]);
    wset.add(c).add(b).add(c);
    console.log(wset.has(b)); // => true
    console.log(wset.has([2])); // => false
    wset.delete(b);
    console.log(wset.has(b)); // => false

##### Caveats when using collections polyfill:

- Weak-collections polyfill stores values as hidden properties of keys. It works correct and not leak in most cases. However, it is desirable to store a collection longer than its keys.

#### ECMAScript 6: Typed Arrays

Implementations and fixes `ArrayBuffer`, `DataView`, typed arrays constructors, static and prototype methods. Typed Arrays work only in environments with support descriptors (IE9+), `ArrayBuffer` and `DataView` should work anywhere.

Modules [`es6.typed.array-buffer`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.array-buffer.js), [`es6.typed.data-view`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.data-view.js), [`es6.typed.int8-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.int8-array.js), [`es6.typed.uint8-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.uint8-array.js), [`es6.typed.uint8-clamped-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.uint8-clamped-array.js), [`es6.typed.int16-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.int16-array.js), [`es6.typed.uint16-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.uint16-array.js), [`es6.typed.int32-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.int32-array.js), [`es6.typed.uint32-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.uint32-array.js), [`es6.typed.float32-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.float32-array.js) and [`es6.typed.float64-array`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.typed.float64-array.js).

    new ArrayBuffer(length) -> buffer
      .isView(var) -> bool
      #slice(start = 0, end = @length) -> buffer
      #byteLength -> uint

    new DataView(buffer, byteOffset = 0, byteLength = buffer.byteLength - byteOffset) -> view
      #getInt8(offset)                          -> int8
      #getUint8(offset)                         -> uint8
      #getInt16(offset, littleEndian = false)   -> int16
      #getUint16(offset, littleEndian = false)  -> uint16
      #getInt32(offset, littleEndian = false)   -> int32
      #getUint32(offset, littleEndian = false)  -> uint32
      #getFloat32(offset, littleEndian = false) -> float32
      #getFloat64(offset, littleEndian = false) -> float64
      #setInt8(offset, value)                          -> void
      #setUint8(offset, value)                         -> void
      #setInt16(offset, value, littleEndian = false)   -> void
      #setUint16(offset, value, littleEndian = false)  -> void
      #setInt32(offset, value, littleEndian = false)   -> void
      #setUint32(offset, value, littleEndian = false)  -> void
      #setFloat32(offset, value, littleEndian = false) -> void
      #setFloat64(offset, value, littleEndian = false) -> void
      #buffer     -> buffer
      #byteLength -> uint
      #byteOffset -> uint

    {
      Int8Array,
      Uint8Array,
      Uint8ClampedArray,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array
    }
      new %TypedArray%(length)    -> typed
      new %TypedArray%(typed)     -> typed
      new %TypedArray%(arrayLike) -> typed
      new %TypedArray%(iterable)  -> typed
      new %TypedArray%(buffer, byteOffset = 0, length = (buffer.byteLength - byteOffset) / @BYTES_PER_ELEMENT) -> typed
      .BYTES_PER_ELEMENT -> uint
      .from(arrayLike | iterable, mapFn(val, index)?, that) -> typed
      .of(...args) -> typed
      #BYTES_PER_ELEMENT -> uint
      #copyWithin(target = 0, start = 0, end = @length) -> @
      #every(fn(val, index, @), that) -> bool
      #fill(val, start = 0, end = @length) -> @
      #filter(fn(val, index, @), that) -> typed
      #find(fn(val, index, @), that) -> val
      #findIndex(fn(val, index, @), that) -> index
      #forEach(fn(val, index, @), that) -> void
      #indexOf(var, from?) -> int
      #join(string = ',') -> string
      #lastIndexOf(var, from?) -> int
      #map(fn(val, index, @), that) -> typed
      #reduce(fn(memo, val, index, @), memo?) -> var
      #reduceRight(fn(memo, val, index, @), memo?) -> var
      #reverse() -> @
      #set(arrayLike, offset = 0) -> void
      #slice(start = 0, end = @length) -> typed
      #some(fn(val, index, @), that) -> bool
      #sort(fn(a, b)?) -> @
      #subarray(start = 0, end = @length) -> typed
      #toString() -> string
      #toLocaleString() -> string
      #values()     -> iterator
      #keys()       -> iterator
      #entries()    -> iterator
      #@@iterator() -> iterator (values)
      #buffer     -> buffer
      #byteLength -> uint
      #byteOffset -> uint
      #length     -> uint

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/typed
    core-js(/library)/fn/typed
    core-js(/library)/fn/typed/array-buffer
    core-js(/library)/fn/typed/data-view
    core-js(/library)/fn/typed/int8-array
    core-js(/library)/fn/typed/uint8-array
    core-js(/library)/fn/typed/uint8-clamped-array
    core-js(/library)/fn/typed/int16-array
    core-js(/library)/fn/typed/uint16-array
    core-js(/library)/fn/typed/int32-array
    core-js(/library)/fn/typed/uint32-array
    core-js(/library)/fn/typed/float32-array
    core-js(/library)/fn/typed/float64-array

[_Examples_](http://goo.gl/yla75z):

    new Int32Array(4); // => [0, 0, 0, 0]
    new Uint8ClampedArray([1, 2, 3, 666]); // => [1, 2, 3, 255]
    new Float32Array(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]

    var buffer = new ArrayBuffer(8);
    var view = new DataView(buffer);
    view.setFloat64(0, 123.456, true);
    new Uint8Array(buffer.slice(4)); // => [47, 221, 94, 64]

    Int8Array.of(1, 1.5, 5.7, 745); // => [1, 1, 5, -23]
    Uint8Array.from([1, 1.5, 5.7, 745]); // => [1, 1, 5, 233]

    var typed = new Uint8Array([1, 2, 3]);

    var a = typed.slice(1); // => [2, 3]
    typed.buffer === a.buffer; // => false
    var b = typed.subarray(1); // => [2, 3]
    typed.buffer === b.buffer; // => true

    typed.filter((it) => it % 2); // => [1, 3]
    typed.map((it) => it * 1.5); // => [1, 3, 4]

    for (var val of typed) console.log(val); // => 1, 2, 3
    for (var val of typed.values()) console.log(val); // => 1, 2, 3
    for (var key of typed.keys()) console.log(key); // => 0, 1, 2
    for (var [key, val] of typed.entries()) {
      console.log(key); // => 0, 1, 2
      console.log(val); // => 1, 2, 3
    }

##### Caveats when using typed arrays:

- Typed Arrays polyfills works completely how should work by the spec, but because of internal use getter / setters on each instance, is slow and consumes significant memory. However, typed arrays polyfills required mainly for IE9 (and for `Uint8ClampedArray` in IE10 and early IE11), all modern engines have native typed arrays and requires only constructors fixes and methods.
- The current version hasn’t special entry points for methods, they can be added only with constructors. It can be added in the future.
- In the `library` version we can’t pollute native prototypes, so prototype methods available as constructors static.

#### ECMAScript 6: Reflect

Modules [`es6.reflect.apply`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.apply.js), [`es6.reflect.construct`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.construct.js), [`es6.reflect.define-property`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.define-property.js), [`es6.reflect.delete-property`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.delete-property.js), [`es6.reflect.enumerate`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.enumerate.js), [`es6.reflect.get`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.get.js), [`es6.reflect.get-own-property-descriptor`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.get-own-property-descriptor.js), [`es6.reflect.get-prototype-of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.get-prototype-of.js), [`es6.reflect.has`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.has.js), [`es6.reflect.is-extensible`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.is-extensible.js), [`es6.reflect.own-keys`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.own-keys.js), [`es6.reflect.prevent-extensions`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.prevent-extensions.js), [`es6.reflect.set`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.set.js), [`es6.reflect.set-prototype-of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es6.reflect.set-prototype-of.js).

    Reflect
      .apply(target, thisArgument, argumentsList) -> var
      .construct(target, argumentsList, newTarget?) -> object
      .defineProperty(target, propertyKey, attributes) -> bool
      .deleteProperty(target, propertyKey) -> bool
      .enumerate(target) -> iterator (removed from the spec and will be removed from core-js@3)
      .get(target, propertyKey, receiver?) -> var
      .getOwnPropertyDescriptor(target, propertyKey) -> desc
      .getPrototypeOf(target) -> object | null
      .has(target, propertyKey) -> bool
      .isExtensible(target) -> bool
      .ownKeys(target) -> array
      .preventExtensions(target) -> bool
      .set(target, propertyKey, V, receiver?) -> bool
      .setPrototypeOf(target, proto) -> bool (required __proto__ - IE11+)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es6/reflect
    core-js(/library)/fn/reflect
    core-js(/library)/fn/reflect/apply
    core-js(/library)/fn/reflect/construct
    core-js(/library)/fn/reflect/define-property
    core-js(/library)/fn/reflect/delete-property
    core-js(/library)/fn/reflect/enumerate (deprecated and will be removed from the next major release)
    core-js(/library)/fn/reflect/get
    core-js(/library)/fn/reflect/get-own-property-descriptor
    core-js(/library)/fn/reflect/get-prototype-of
    core-js(/library)/fn/reflect/has
    core-js(/library)/fn/reflect/is-extensible
    core-js(/library)/fn/reflect/own-keys
    core-js(/library)/fn/reflect/prevent-extensions
    core-js(/library)/fn/reflect/set
    core-js(/library)/fn/reflect/set-prototype-of

[_Examples_](http://goo.gl/gVT0cH):

    var O = { a: 1 };
    Object.defineProperty(O, "b", { value: 2 });
    O[Symbol("c")] = 3;
    Reflect.ownKeys(O); // => ['a', 'b', Symbol(c)]

    function C(a, b) {
      this.c = a + b;
    }

    var instance = Reflect.construct(C, [20, 22]);
    instance.c; // => 42

### ECMAScript 7+ proposals

[The TC39 process.](https://tc39.github.io/process-document/)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/es7
    core-js(/library)/es7/array
    core-js(/library)/es7/global
    core-js(/library)/es7/string
    core-js(/library)/es7/map
    core-js(/library)/es7/set
    core-js(/library)/es7/error
    core-js(/library)/es7/math
    core-js(/library)/es7/system
    core-js(/library)/es7/symbol
    core-js(/library)/es7/reflect
    core-js(/library)/es7/observable

`core-js/stage/4` entry point contains only stage 4 proposals, `core-js/stage/3` - stage 3 and stage 4, etc.

#### Stage 4 proposals

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/stage/4

- `{Array, %TypedArray%}#includes` [proposal](https://github.com/tc39/Array.prototype.includes) - module [`es7.array.includes`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.array.includes.js), `%TypedArray%` version in modules from [this section](#ecmascript-6-typed-arrays).

  Array
  #includes(var, from?) -> bool
  {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
  }
  #includes(var, from?) -> bool

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/array/includes

[_Examples_](http://goo.gl/2Gq4ma):

    [1, 2, 3].includes(2); // => true
    [1, 2, 3].includes(4); // => false
    [1, 2, 3].includes(2, 2); // => false

    [NaN].indexOf(NaN); // => -1
    [NaN].includes(NaN); // => true
    Array(1).indexOf(undefined); // => -1
    Array(1).includes(undefined); // => true

- `Object.values`, `Object.entries` [proposal](https://github.com/tc39/proposal-object-values-entries) - modules [`es7.object.values`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.object.values.js), [`es7.object.entries`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.object.entries.js)

  Object
  .values(object) -> array
  .entries(object) -> array

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/object/values
    core-js(/library)/fn/object/entries

[_Examples_](http://goo.gl/6kuGOn):

    Object.values({ a: 1, b: 2, c: 3 }); // => [1, 2, 3]
    Object.entries({ a: 1, b: 2, c: 3 }); // => [['a', 1], ['b', 2], ['c', 3]]

    for (let [key, value] of Object.entries({ a: 1, b: 2, c: 3 })) {
      console.log(key); // => 'a', 'b', 'c'
      console.log(value); // => 1, 2, 3
    }

- `Object.getOwnPropertyDescriptors` [proposal](https://github.com/tc39/proposal-object-getownpropertydescriptors) - module [`es7.object.get-own-property-descriptors`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.object.get-own-property-descriptors.js)

  Object
  .getOwnPropertyDescriptors(object) -> object

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/object/get-own-property-descriptors

_Examples_:

    // Shallow object cloning with prototype and descriptors:
    var copy = Object.create(
      Object.getPrototypeOf(O),
      Object.getOwnPropertyDescriptors(O)
    );
    // Mixin:
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

- `String#padStart`, `String#padEnd` [proposal](https://github.com/tc39/proposal-string-pad-start-end) - modules [`es7.string.pad-start`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.string.pad-start.js), [`es7.string.pad-end`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.string.pad-end.js)

  String
  #padStart(length, fillStr = ' ') -> string
  #padEnd(length, fillStr = ' ') -> string

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/string/pad-start
    core-js(/library)/fn/string/pad-end
    core-js(/library)/fn/string/virtual/pad-start
    core-js(/library)/fn/string/virtual/pad-end

[_Examples_](http://goo.gl/hK5ccv):

    "hello".padStart(10); // => '     hello'
    "hello".padStart(10, "1234"); // => '12341hello'
    "hello".padEnd(10); // => 'hello     '
    "hello".padEnd(10, "1234"); // => 'hello12341'

- `Object#__(define|lookup)[GS]etter__`, [annex B ES2017](https://github.com/tc39/ecma262/pull/381), but we haven’t special namespace for that - modules [`es7.object.define-setter`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.object.define-setter.js), [`es7.object.define-getter`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.object.define-getter.js), [`es7.object.lookup-setter`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.object.lookup-setter.js) and [`es7.object.lookup-getter`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.object.lookup-getter.js).

  Object #**defineSetter**(key, fn) -> void #**defineGetter**(key, fn) -> void #**lookupSetter**(key) -> fn | void #**lookupGetter**(key) -> fn | void

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/object/define-getter
    core-js(/library)/fn/object/define-setter
    core-js(/library)/fn/object/lookup-getter
    core-js(/library)/fn/object/lookup-setter

#### Stage 3 proposals

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/stage/3

- `global` [proposal](https://github.com/tc39/proposal-global) - modules [`es7.global`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.global.js) and [`es7.system.global`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.system.global.js) (obsolete)

  global -> object
  System
  .global -> object (obsolete)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/global
    core-js(/library)/fn/system/global (obsolete)

[_Examples_](http://goo.gl/gEqMl7):

    global.Array === Array; // => true

- `Promise#finally` [proposal](https://github.com/tc39/proposal-promise-finally) - module [`es7.promise.finally`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.promise.finally.js)

  Promise
  #finally(onFinally()) -> promise

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/promise/finally

[_Examples_](https://goo.gl/AhyBbJ):

    Promise.resolve(42).finally(() => console.log('You will see it anyway'));

    Promise.reject(42).finally(() => console.log('You will see it anyway'));

    #### Stage 2 proposals
    [*CommonJS entry points:*](#commonjs)
    ```js
    core-js(/library)/stage/2

- `String#trimLeft`, `String#trimRight` / `String#trimStart`, `String#trimEnd` [proposal](https://github.com/sebmarkbage/ecmascript-string-left-right-trim) - modules [`es7.string.trim-left`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.string.trim-right.js), [`es7.string.trim-right`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.string.trim-right.js)

  String
  #trimLeft() -> string
  #trimRight() -> string
  #trimStart() -> string
  #trimEnd() -> string

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/string/trim-start
    core-js(/library)/fn/string/trim-end
    core-js(/library)/fn/string/trim-left
    core-js(/library)/fn/string/trim-right
    core-js(/library)/fn/string/virtual/trim-start
    core-js(/library)/fn/string/virtual/trim-end
    core-js(/library)/fn/string/virtual/trim-left
    core-js(/library)/fn/string/virtual/trim-right

[_Examples_](http://goo.gl/Er5lMJ):

    "   hello   ".trimLeft(); // => 'hello   '
    "   hello   ".trimRight(); // => '   hello'

    * `Symbol.asyncIterator` for [async iteration proposal](https://github.com/tc39/proposal-async-iteration) - module [`es7.symbol.async-iterator`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.symbol.async-iterator.js)
    ```js
    Symbol
      .asyncIterator -> @@asyncIterator

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/symbol/async-iterator

#### Stage 1 proposals

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/stage/1

- `Promise.try` [proposal](https://github.com/tc39/proposal-promise-try) - module [`es7.promise.try`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.promise.try.js)

  Promise
  .try(function()) -> promise

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/promise/try

[_Examples_](https://goo.gl/k5GGRo):

    Promise.try(() => 42).then((it) => console.log(`Promise, resolved as ${it}`));

    Promise.try(() => {
      throw 42;
    }).catch((it) => console.log(`Promise, rejected as ${it}`));

- `Array#flatten` and `Array#flatMap` [proposal](https://tc39.github.io/proposal-flatMap) - modules [`es7.array.flatten`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.array.flatten.js) and [`es7.array.flat-map`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.array.flat-map.js)

  Array
  #flatten(depthArg = 1) -> array
  #flatMap(fn(val, key, @), that) -> array

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/array/flatten
    core-js(/library)/fn/array/flat-map
    core-js(/library)/fn/array/virtual/flatten
    core-js(/library)/fn/array/virtual/flat-map

[_Examples_](https://goo.gl/jTXsZi):

    [1, [2, 3], [4, 5]].flatten(); // => [1, 2, 3, 4, 5]
    [1, [2, [3, [4]]], 5].flatten(); // => [1, 2, [3, [4]], 5]
    [1, [2, [3, [4]]], 5].flatten(3); // => [1, 2, 3, 4, 5]

    [
      { a: 1, b: 2 },
      { a: 3, b: 4 },
      { a: 5, b: 6 },
    ].flatMap((it) => [it.a, it.b]); // => [1, 2, 3, 4, 5, 6]

- `.of` and `.from` methods on collection constructors [proposal](https://github.com/tc39/proposal-setmap-offrom) - modules [`es7.set.of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.set.of.js), [`es7.set.from`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.set.from.js), [`es7.map.of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.map.of.js), [`es7.map.from`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.map.from.js), [`es7.weak-set.of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.weak-set.of.js), [`es7.weak-set.from`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.weak-set.from.js), [`es7.weak-map.of`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.weak-map.of.js), [`es7.weak-map.from`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.weak-map.from.js)

  Set
  .of(...args) -> set
  .from(iterable, mapFn(val, index)?, that?) -> set
  Map
  .of(...args) -> map
  .from(iterable, mapFn(val, index)?, that?) -> map
  WeakSet
  .of(...args) -> weakset
  .from(iterable, mapFn(val, index)?, that?) -> weakset
  WeakMap
  .of(...args) -> weakmap
  .from(iterable, mapFn(val, index)?, that?) -> weakmap

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/set/of
    core-js(/library)/fn/set/from
    core-js(/library)/fn/map/of
    core-js(/library)/fn/map/from
    core-js(/library)/fn/weak-set/of
    core-js(/library)/fn/weak-set/from
    core-js(/library)/fn/weak-map/of
    core-js(/library)/fn/weak-map/from

[_Examples_](https://goo.gl/mSC7eU):

    Set.of(1, 2, 3, 2, 1); // => Set {1, 2, 3}

    Map.from(
      [
        [1, 2],
        [3, 4],
      ],
      ([key, val]) => [key ** 2, val ** 2]
    ); // => Map {1: 4, 9: 16}

- `String#matchAll` [proposal](https://github.com/tc39/String.prototype.matchAll) - module [`es7.string.match-all`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.string.match-all.js)

  String
  #matchAll(regexp) -> iterator

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/string/match-all
    core-js(/library)/fn/string/virtual/match-all

[_Examples_](http://goo.gl/6kp9EB):

    for (let [_, d, D] of "1111a2b3cccc".matchAll(/(\d)(\D)/)) {
      console.log(d, D); // => 1 a, 2 b, 3 c
    }

- `Observable` [proposal](https://github.com/zenparsing/es-observable) - modules [`es7.observable`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.observable.js) and [`es7.symbol.observable`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.symbol.observable.js)

  new Observable(fn) -> observable
  #subscribe(observer) -> subscription
  #forEach(fn) -> promise
  #@@observable() -> @
  .of(...items) -> observable
  .from(observable | iterable) -> observable
  .@@species -> @
  Symbol
  .observable -> @@observable

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/observable
    core-js(/library)/fn/symbol/observable

[_Examples_](http://goo.gl/1LDywi):

    new Observable((observer) => {
      observer.next("hello");
      observer.next("world");
      observer.complete();
    })
      .forEach((it) => console.log(it))
      .then((_) => console.log("!"));

- `Math.{clamp, DEG_PER_RAD, degrees, fscale, rad-per-deg, radians, scale}` [proposal](https://github.com/rwaldron/proposal-math-extensions) - modules [`es7.math.clamp`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.clamp.js), [`es7.math.DEG_PER_RAD`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.DEG_PER_RAD.js), [`es7.math.degrees`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.degrees.js), [`es7.math.fscale`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.fscale.js), [`es7.math.RAD_PER_DEG`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.RAD_PER_DEG.js), [`es7.math.radians`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.radians.js) and [`es7.math.scale`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.scale.js)

  Math
  .DEG_PER_RAD -> number
  .RAD_PER_DEG -> number
  .clamp(x, lower, upper) -> number
  .degrees(radians) -> number
  .fscale(x, inLow, inHigh, outLow, outHigh) -> number
  .radians(degrees) -> number
  .scale(x, inLow, inHigh, outLow, outHigh) -> number

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/math/clamp
    core-js(/library)/fn/math/deg-per-rad
    core-js(/library)/fn/math/degrees
    core-js(/library)/fn/math/fscale
    core-js(/library)/fn/math/rad-per-deg
    core-js(/library)/fn/math/radians
    core-js(/library)/fn/math/scale

- `Math.signbit` [proposal](http://jfbastien.github.io/papers/Math.signbit.html) - module [`es7.math.signbit`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.signbit.js)

  Math
  .signbit(x) -> bool

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/math/signbit

[_Examples_](http://es6.zloirock.ru/):

    Math.signbit(NaN); // => NaN
    Math.signbit(1); // => true
    Math.signbit(-1); // => false
    Math.signbit(0); // => true
    Math.signbit(-0); // => false

#### Stage 0 proposals

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/stage/0

- `String#at` [proposal](https://github.com/mathiasbynens/String.prototype.at) - module [`es7.string.at`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.string.at.js)

  String
  #at(index) -> string

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/string/at
    core-js(/library)/fn/string/virtual/at

[_Examples_](http://goo.gl/XluXI8):

    "a𠮷b".at(1); // => '𠮷'
    "a𠮷b".at(1).length; // => 2

- `Map#toJSON`, `Set#toJSON` [proposal](https://github.com/DavidBruant/Map-Set.prototype.toJSON) - modules [`es7.map.to-json`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.map.to-json.js), [`es7.set.to-json`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.set.to-json.js) (rejected and will be removed from `core-js@3`)

  Map
  #toJSON() -> array (rejected and will be removed from core-js@3)
  Set
  #toJSON() -> array (rejected and will be removed from core-js@3)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/map
    core-js(/library)/fn/set

- `Error.isError` [proposal](https://github.com/ljharb/proposal-is-error) - module [`es7.error.is-error`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.error.is-error.js) (withdrawn and will be removed from `core-js@3`)

  Error
  .isError(it) -> bool (withdrawn and will be removed from core-js@3)

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/error/is-error

- `Math.{iaddh, isubh, imulh, umulh}` [proposal](https://gist.github.com/BrendanEich/4294d5c212a6d2254703) - modules [`es7.math.iaddh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.iaddh.js), [`es7.math.isubh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.isubh.js), [`es7.math.imulh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.imulh.js) and [`es7.math.umulh`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.math.umulh.js)

  Math
  .iaddh(lo0, hi0, lo1, hi1) -> int32
  .isubh(lo0, hi0, lo1, hi1) -> int32
  .imulh(a, b) -> int32
  .umulh(a, b) -> uint32

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/math/iaddh
    core-js(/library)/fn/math/isubh
    core-js(/library)/fn/math/imulh
    core-js(/library)/fn/math/umulh

- `global.asap`, [TC39 discussion](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask), module [`es7.asap`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.asap.js)

  asap(fn) -> void

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/asap

[_Examples_](http://goo.gl/tx3SRK):

    asap(() => console.log("called as microtask"));

#### Pre-stage 0 proposals

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/stage/pre

- `Reflect` metadata [proposal](https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md) - modules [`es7.reflect.define-metadata`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.define-metadata.js), [`es7.reflect.delete-metadata`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.delete-metadata.js), [`es7.reflect.get-metadata`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.get-metadata.js), [`es7.reflect.get-metadata-keys`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.get-metadata-keys.js), [`es7.reflect.get-own-metadata`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.get-own-metadata.js), [`es7.reflect.get-own-metadata-keys`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.get-own-metadata-keys.js), [`es7.reflect.has-metadata`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.has-metadata.js), [`es7.reflect.has-own-metadata`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.has-own-metadata.js) and [`es7.reflect.metadata`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/es7.reflect.metadata.js).

  Reflect
  .defineMetadata(metadataKey, metadataValue, target, propertyKey?) -> void
  .getMetadata(metadataKey, target, propertyKey?) -> var
  .getOwnMetadata(metadataKey, target, propertyKey?) -> var
  .hasMetadata(metadataKey, target, propertyKey?) -> bool
  .hasOwnMetadata(metadataKey, target, propertyKey?) -> bool
  .deleteMetadata(metadataKey, target, propertyKey?) -> bool
  .getMetadataKeys(target, propertyKey?) -> array
  .getOwnMetadataKeys(target, propertyKey?) -> array
  .metadata(metadataKey, metadataValue) -> decorator(target, targetKey?) -> void

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/reflect/define-metadata
    core-js(/library)/fn/reflect/delete-metadata
    core-js(/library)/fn/reflect/get-metadata
    core-js(/library)/fn/reflect/get-metadata-keys
    core-js(/library)/fn/reflect/get-own-metadata
    core-js(/library)/fn/reflect/get-own-metadata-keys
    core-js(/library)/fn/reflect/has-metadata
    core-js(/library)/fn/reflect/has-own-metadata
    core-js(/library)/fn/reflect/metadata

[_Examples_](http://goo.gl/KCo3PS):

    var O = {};
    Reflect.defineMetadata("foo", "bar", O);
    Reflect.ownKeys(O); // => []
    Reflect.getOwnMetadataKeys(O); // => ['foo']
    Reflect.getOwnMetadata("foo", O); // => 'bar'

### Web standards

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/web

#### setTimeout / setInterval

Module [`web.timers`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/web.timers.js). Additional arguments fix for IE9-.

    setTimeout(fn(...args), time, ...args) -> id
    setInterval(fn(...args), time, ...args) -> id

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/web/timers
    core-js(/library)/fn/set-timeout
    core-js(/library)/fn/set-interval

    // Before:
    setTimeout(log.bind(null, 42), 1000);
    // After:
    setTimeout(log, 1000, 42);

#### setImmediate

Module [`web.immediate`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/web.immediate.js). [`setImmediate` proposal](https://developer.mozilla.org/en-US/docs/Web/API/Window.setImmediate) polyfill.

    setImmediate(fn(...args), ...args) -> id
    clearImmediate(id) -> void

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/web/immediate
    core-js(/library)/fn/set-immediate
    core-js(/library)/fn/clear-immediate

[_Examples_](http://goo.gl/6nXGrx):

    setImmediate(
      function (arg1, arg2) {
        console.log(arg1, arg2); // => Message will be displayed with minimum delay
      },
      "Message will be displayed",
      "with minimum delay"
    );

    clearImmediate(
      setImmediate(function () {
        console.log("Message will not be displayed");
      })
    );

#### Iterable DOM collections

Some DOM collections should have [iterable interface](https://heycam.github.io/webidl/#idl-iterable) or should be [inherited from `Array`](https://heycam.github.io/webidl/#LegacyArrayClass). That mean they should have `keys`, `values`, `entries` and `@@iterator` methods for iteration. So add them. Module [`web.dom.iterable`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/web.dom.iterable.js):

    {
      CSSRuleList,
      CSSStyleDeclaration,
      CSSValueList,
      ClientRectList,
      DOMRectList,
      DOMStringList,
      DOMTokenList,
      DataTransferItemList,
      FileList,
      HTMLAllCollection,
      HTMLCollection,
      HTMLFormElement,
      HTMLSelectElement,
      MediaList,
      MimeTypeArray,
      NamedNodeMap,
      NodeList,
      PaintRequestList,
      Plugin,
      PluginArray,
      SVGLengthList,
      SVGNumberList,
      SVGPathSegList,
      SVGPointList,
      SVGStringList,
      SVGTransformList,
      SourceBufferList,
      StyleSheetList,
      TextTrackCueList,
      TextTrackList,
      TouchList
    }
      #@@iterator() -> iterator (values)

    {
      DOMTokenList,
      NodeList
    }
      #values()  -> iterator
      #keys()    -> iterator
      #entries() -> iterator

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/web/dom-collections
    core-js(/library)/fn/dom-collections/iterator

[_Examples_](http://goo.gl/lfXVFl):

    for (var { id } of document.querySelectorAll("*")) {
      if (id) console.log(id);
    }

    for (var [index, { id }] of document.querySelectorAll("*").entries()) {
      if (id) console.log(index, id);
    }

### Non-standard

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/core

#### Object

Modules [`core.object.is-object`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.object.is-object.js), [`core.object.classof`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.object.classof.js), [`core.object.define`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.object.define.js), [`core.object.make`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.object.make.js).

    Object
      .isObject(var) -> bool
      .classof(var) -> string
      .define(target, mixin) -> target
      .make(proto | null, mixin?) -> object

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/core/object
    core-js(/library)/fn/object/is-object
    core-js(/library)/fn/object/define
    core-js(/library)/fn/object/make

Object classify [_examples_](http://goo.gl/YZQmGo):

    Object.isObject({}); // => true
    Object.isObject(isNaN); // => true
    Object.isObject(null); // => false

    var classof = Object.classof;

    classof(null); // => 'Null'
    classof(undefined); // => 'Undefined'
    classof(1); // => 'Number'
    classof(true); // => 'Boolean'
    classof("string"); // => 'String'
    classof(Symbol()); // => 'Symbol'

    classof(new Number(1)); // => 'Number'
    classof(new Boolean(true)); // => 'Boolean'
    classof(new String("string")); // => 'String'

    var fn = function () {},
      list = (function () {
        return arguments;
      })(1, 2, 3);

    classof({}); // => 'Object'
    classof(fn); // => 'Function'
    classof([]); // => 'Array'
    classof(list); // => 'Arguments'
    classof(/./); // => 'RegExp'
    classof(new TypeError()); // => 'Error'

    classof(new Set()); // => 'Set'
    classof(new Map()); // => 'Map'
    classof(new WeakSet()); // => 'WeakSet'
    classof(new WeakMap()); // => 'WeakMap'
    classof(new Promise(fn)); // => 'Promise'

    classof([].values()); // => 'Array Iterator'
    classof(new Set().values()); // => 'Set Iterator'
    classof(new Map().values()); // => 'Map Iterator'

    classof(Math); // => 'Math'
    classof(JSON); // => 'JSON'

    function Example() {}
    Example.prototype[Symbol.toStringTag] = "Example";

    classof(new Example()); // => 'Example'

`Object.define` and `Object.make` [_examples_](http://goo.gl/rtpD5Z):

    // Before:
    Object.defineProperty(target, "c", {
      enumerable: true,
      configurable: true,
      get: function () {
        return this.a + this.b;
      },
    });

    // After:
    Object.define(target, {
      get c() {
        return this.a + this.b;
      },
    });

    // Shallow object cloning with prototype and descriptors:
    var copy = Object.make(Object.getPrototypeOf(src), src);

    // Simple inheritance:
    function Vector2D(x, y) {
      this.x = x;
      this.y = y;
    }
    Object.define(Vector2D.prototype, {
      get xy() {
        return Math.hypot(this.x, this.y);
      },
    });
    function Vector3D(x, y, z) {
      Vector2D.apply(this, arguments);
      this.z = z;
    }
    Vector3D.prototype = Object.make(Vector2D.prototype, {
      constructor: Vector3D,
      get xyz() {
        return Math.hypot(this.x, this.y, this.z);
      },
    });

    var vector = new Vector3D(9, 12, 20);
    console.log(vector.xy); // => 15
    console.log(vector.xyz); // => 25
    vector.y++;
    console.log(vector.xy); // => 15.811388300841896
    console.log(vector.xyz); // => 25.495097567963924

#### Dict

Module [`core.dict`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.dict.js). Based on [TC39 discuss](https://github.com/rwaldron/tc39-notes/blob/master/es6/2012-11/nov-29.md#collection-apis-review) / [strawman](http://wiki.ecmascript.org/doku.php?id=harmony:modules_standard#dictionaries).

    [new] Dict(iterable (entries) | object ?) -> dict
      .isDict(var) -> bool
      .values(object) -> iterator
      .keys(object) -> iterator
      .entries(object) -> iterator (entries)
      .has(object, key) -> bool
      .get(object, key) -> val
      .set(object, key, value) -> object
      .forEach(object, fn(val, key, @), that) -> void
      .map(object, fn(val, key, @), that) -> new @
      .mapPairs(object, fn(val, key, @), that) -> new @
      .filter(object, fn(val, key, @), that) -> new @
      .some(object, fn(val, key, @), that) -> bool
      .every(object, fn(val, key, @), that) -> bool
      .find(object, fn(val, key, @), that) -> val
      .findKey(object, fn(val, key, @), that) -> key
      .keyOf(object, var) -> key
      .includes(object, var) -> bool
      .reduce(object, fn(memo, val, key, @), memo?) -> var

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/core/dict
    core-js(/library)/fn/dict

`Dict` create object without prototype from iterable or simple object.

[_Examples_](http://goo.gl/pnp8Vr):

    var map = new Map([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);

    Dict(); // => {__proto__: null}
    Dict({ a: 1, b: 2, c: 3 }); // => {__proto__: null, a: 1, b: 2, c: 3}
    Dict(map); // => {__proto__: null, a: 1, b: 2, c: 3}
    Dict([1, 2, 3].entries()); // => {__proto__: null, 0: 1, 1: 2, 2: 3}

    var dict = Dict({ a: 42 });
    dict instanceof Object; // => false
    dict.a; // => 42
    dict.toString; // => undefined
    "a" in dict; // => true
    "hasOwnProperty" in dict; // => false

    Dict.isDict({}); // => false
    Dict.isDict(Dict()); // => true

`Dict.keys`, `Dict.values` and `Dict.entries` returns iterators for objects.

[_Examples_](http://goo.gl/xAvECH):

    var dict = { a: 1, b: 2, c: 3 };

    for (var key of Dict.keys(dict)) console.log(key); // => 'a', 'b', 'c'

    for (var val of Dict.values(dict)) console.log(val); // => 1, 2, 3

    for (var [key, val] of Dict.entries(dict)) {
      console.log(key); // => 'a', 'b', 'c'
      console.log(val); // => 1, 2, 3
    }

    new Map(Dict.entries(dict)); // => Map {a: 1, b: 2, c: 3}

Basic dict operations for objects with prototype [_examples_](http://goo.gl/B28UnG):

    "q" in { q: 1 }; // => true
    "toString" in {}; // => true

    Dict.has({ q: 1 }, "q"); // => true
    Dict.has({}, "toString"); // => false

    ({ q: 1 }["q"]); // => 1
    ({}.toString); // => function toString(){ [native code] }

    Dict.get({ q: 1 }, "q"); // => 1
    Dict.get({}, "toString"); // => undefined

    var O = {};
    O["q"] = 1;
    O["q"]; // => 1
    O["__proto__"] = { w: 2 };
    O["__proto__"]; // => {w: 2}
    O["w"]; // => 2

    var O = {};
    Dict.set(O, "q", 1);
    O["q"]; // => 1
    Dict.set(O, "__proto__", { w: 2 });
    O["__proto__"]; // => {w: 2}
    O["w"]; // => undefined

Other methods of `Dict` module are static equivalents of `Array.prototype` methods for dictionaries.

[_Examples_](http://goo.gl/xFi1RH):

    var dict = { a: 1, b: 2, c: 3 };

    Dict.forEach(dict, console.log, console);
    // => 1, 'a', {a: 1, b: 2, c: 3}
    // => 2, 'b', {a: 1, b: 2, c: 3}
    // => 3, 'c', {a: 1, b: 2, c: 3}

    Dict.map(dict, function (it) {
      return it * it;
    }); // => {a: 1, b: 4, c: 9}

    Dict.mapPairs(dict, function (val, key) {
      if (key != "b") return [key + key, val * val];
    }); // => {aa: 1, cc: 9}

    Dict.filter(dict, function (it) {
      return it % 2;
    }); // => {a: 1, c: 3}

    Dict.some(dict, function (it) {
      return it === 2;
    }); // => true

    Dict.every(dict, function (it) {
      return it === 2;
    }); // => false

    Dict.find(dict, function (it) {
      return it > 2;
    }); // => 3
    Dict.find(dict, function (it) {
      return it > 4;
    }); // => undefined

    Dict.findKey(dict, function (it) {
      return it > 2;
    }); // => 'c'
    Dict.findKey(dict, function (it) {
      return it > 4;
    }); // => undefined

    Dict.keyOf(dict, 2); // => 'b'
    Dict.keyOf(dict, 4); // => undefined

    Dict.includes(dict, 2); // => true
    Dict.includes(dict, 4); // => false

    Dict.reduce(dict, function (memo, it) {
      return memo + it;
    }); // => 6
    Dict.reduce(
      dict,
      function (memo, it) {
        return memo + it;
      },
      ""
    ); // => '123'

#### Partial application

Module [`core.function.part`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.function.part.js).

    Function
      #part(...args | _) -> fn(...args)

[_CommonJS entry points:_](#commonjs)

    core-js/core/function
    core-js(/library)/fn/function/part
    core-js(/library)/fn/function/virtual/part
    core-js(/library)/fn/_

`Function#part` partial apply function without `this` binding. Uses global variable `_` (`core._` for builds without global namespace pollution) as placeholder and not conflict with `Underscore` / `LoDash`.

[_Examples_](http://goo.gl/p9ZJ8K):

    var fn1 = log.part(1, 2);
    fn1(3, 4); // => 1, 2, 3, 4

    var fn2 = log.part(_, 2, _, 4);
    fn2(1, 3); // => 1, 2, 3, 4

    var fn3 = log.part(1, _, _, 4);
    fn3(2, 3); // => 1, 2, 3, 4

    fn2(1, 3, 5); // => 1, 2, 3, 4, 5
    fn2(1); // => 1, 2, undefined, 4

#### Number Iterator

Module [`core.number.iterator`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.number.iterator.js).

    Number
      #@@iterator() -> iterator

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/core/number
    core-js(/library)/fn/number/iterator
    core-js(/library)/fn/number/virtual/iterator

[_Examples_](http://goo.gl/o45pCN):

    for (var i of 3) console.log(i); // => 0, 1, 2

    [...10]; // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    Array.from(10, Math.random); // => [0.9817775336559862, 0.02720663254149258, ...]

    Array.from(
      10,
      function (it) {
        return this + it * it;
      },
      0.42
    ); // => [0.42, 1.42, 4.42, 9.42, 16.42, 25.42, 36.42, 49.42, 64.42, 81.42]

#### Escaping strings

Modules [`core.regexp.escape`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.regexp.escape.js), [`core.string.escape-html`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.string.escape-html.js) and [`core.string.unescape-html`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.string.unescape-html.js).

    RegExp
      .escape(str) -> str
    String
      #escapeHTML() -> str
      #unescapeHTML() -> str

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/core/regexp
    core-js(/library)/core/string
    core-js(/library)/fn/regexp/escape
    core-js(/library)/fn/string/escape-html
    core-js(/library)/fn/string/unescape-html
    core-js(/library)/fn/string/virtual/escape-html
    core-js(/library)/fn/string/virtual/unescape-html

[_Examples_](http://goo.gl/6bOvsQ):

    RegExp.escape("Hello, []{}()*+?.\\^$|!"); // => 'Hello, \[\]\{\}\(\)\*\+\?\.\\\^\$\|!'

    "<script>doSomething();</script>".escapeHTML(); // => '&lt;script&gt;doSomething();&lt;/script&gt;'
    "&lt;script&gt;doSomething();&lt;/script&gt;".unescapeHTML(); // => '<script>doSomething();</script>'

#### delay

Module [`core.delay`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.delay.js). [Promise](#ecmascript-6-promise)-returning delay function, [esdiscuss](https://esdiscuss.org/topic/promise-returning-delay-function).

    delay(ms) -> promise

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/core/delay
    core-js(/library)/fn/delay

[_Examples_](http://goo.gl/lbucba):

    delay(1e3).then(() => console.log("after 1 sec"));

    (async () => {
      await delay(3e3);
      console.log("after 3 sec");

      while (await delay(3e3)) console.log("each 3 sec");
    })();

#### Helpers for iterators

Modules [`core.is-iterable`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.is-iterable.js), [`core.get-iterator`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.get-iterator.js), [`core.get-iterator-method`](https://github.com/zloirock/core-js/blob/v2.6.11/modules/core.get-iterator-method.js) - helpers for check iterability / get iterator in the `library` version or, for example, for `arguments` object:

    core
      .isIterable(var) -> bool
      .getIterator(iterable) -> iterator
      .getIteratorMethod(var) -> function | undefined

[_CommonJS entry points:_](#commonjs)

    core-js(/library)/fn/is-iterable
    core-js(/library)/fn/get-iterator
    core-js(/library)/fn/get-iterator-method

[_Examples_](http://goo.gl/SXsM6D):

    var list = (function () {
      return arguments;
    })(1, 2, 3);

    console.log(core.isIterable(list)); // true;

    var iter = core.getIterator(list);
    console.log(iter.next().value); // 1
    console.log(iter.next().value); // 2
    console.log(iter.next().value); // 3
    console.log(iter.next().value); // undefined

    core.getIterator({}); // TypeError: [object Object] is not iterable!

    var iterFn = core.getIteratorMethod(list);
    console.log(typeof iterFn); // 'function'
    var iter = iterFn.call(list);
    console.log(iter.next().value); // 1
    console.log(iter.next().value); // 2
    console.log(iter.next().value); // 3
    console.log(iter.next().value); // undefined

    console.log(core.getIteratorMethod({})); // undefined

## Missing polyfills

- ES5 `JSON` is missing now only in IE7- and never will it be added to `core-js`, if you need it in these old browsers, many implementations are available, for example, [json3](https://github.com/bestiejs/json3).
- ES6 `String#normalize` is not a very useful feature, but this polyfill will be very large. If you need it, you can use [unorm](https://github.com/walling/unorm/).
- ES6 `Proxy` can’t be polyfilled, but for Node.js / Chromium with additional flags you can try [harmony-reflect](https://github.com/tvcutsem/harmony-reflect) for adapt old style `Proxy` API to final ES6 version.
- ES6 logic for `@@isConcatSpreadable` and `@@species` (in most places) can be polyfilled without problems, but it will cause a serious slowdown in popular cases in some engines. It will be polyfilled when it will be implemented in modern engines.
- ES7 `SIMD`. `core-js` doesn’t add polyfill of this feature because of large size and some other reasons. You can use [this polyfill](https://github.com/tc39/ecmascript_simd/blob/master/src/ecmascript_simd.js).
- `window.fetch` is not a cross-platform feature, in some environments it makes no sense. For this reason, I don’t think it should be in `core-js`. Looking at a large number of requests it _may be_ added in the future. Now you can use, for example, [this polyfill](https://github.com/github/fetch).
- ECMA-402 `Intl` is missed because of size. You can use [this polyfill](https://github.com/andyearnshaw/Intl.js/).

fixtures/node_modules/css-selector-parser/

### [fixtures/node_modules/css-selector-parser/README.md](fixtures/node_modules/css-selector-parser/README.md)

# node-css-selector-parser [![Build Status](https://travis-ci.org/mdevils/node-css-selector-parser.svg?branch=master)](https://travis-ci.org/mdevils/node-css-selector-parser)

Fast and low memory CSS selector parser.

Parses CSS selector into object-model.

## Installation

    npm install css-selector-parser

## Usage

    var CssSelectorParser = require("css-selector-parser").CssSelectorParser,
      parser = new CssSelectorParser();

    parser.registerSelectorPseudos("has");
    parser.registerNestingOperators(">", "+", "~");
    parser.registerAttrEqualityMods("^", "$", "*", "~");
    parser.enableSubstitutes();

    var util = require("util");

    console.log(
      util.inspect(
        parser.parse("a[href^=/], .container:has(nav) > a[href]:lt($var)"),
        false,
        null
      )
    );

Produces:

    { type: 'selectors',
      selectors:
       [ { type: 'ruleSet',
           rule:
            { tagName: 'a',
              attrs: [ { name: 'href', operator: '^=', valueType: 'string', value: '/' } ],
              type: 'rule' } },
         { type: 'ruleSet',
           rule:
            { classNames: [ 'container' ],
              pseudos:
               [ { name: 'has',
                   valueType: 'selector',
                   value: { type: 'ruleSet', rule: { tagName: 'nav', type: 'rule' } } } ],
              type: 'rule',
              rule:
               { tagName: 'a',
                 attrs: [ { name: 'href' } ],
                 pseudos: [ { name: 'lt', valueType: 'substitute', value: 'var' } ],
                 nestingOperator: '>',
                 type: 'rule' } } } ] }

## Token description

_type_ may be one of:

- _selectors_ — list of selectors, token contains _selectors_ array of _ruleSet_ tokens (based on “,” operator).
- _ruleSet_ — selector, token contains _rule_ field with _rule_-type object.
- _rule_ — single rule.

Fields for _rule_ type.

- _tagName_ — tag name for the rule (e.g. “div”), may be ‘\*’.
- _classNames_ — list of CSS class names for the rule.
- _attrs_ — list of attribute rules; rule may contain fields:
  - _name_ — attribute name, required field.
  - _valueType_ — type of comparison value (“string” or “substitute”).
  - _operator_ — attribute value comparison operator.
  - _value_ — comparison attribute value.
- _pseudos_ — list of pseudo class rules; rule may contain fields:
  - _name_ — pseudo name, required field.
  - _valueType_ — argument type (“string”, “selector” or “substitute”).
  - _value_ — pseudo argument.
- _nestingOperator_ — the operator used to nest this rule (e.g. in selector “tag1 &gt; tag2”, tag2 will have nestingOperator=“&gt;”)
- _rule_ — nested rule.

fixtures/node_modules/direction/

### [fixtures/node_modules/direction/readme.md](fixtures/node_modules/direction/readme.md)

# direction

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Detect direction: left-to-right, right-to-left, or neutral.

## API

Install:

    npm install direction

Use:

    var direction = require("direction");

    direction("A"); // => 'ltr'
    direction("anglais"); // => 'ltr'
    direction("بسيطة"); // => 'rtl'
    direction("@"); // => 'neutral'

## CLI

Install:

    npm install -g direction

Use:

    Usage: direction [options] <words...>

    Detect directionality: left-to-right, right-to-left, or neutral

    Options:

      -h, --help           output usage information
      -v, --version        output version number

    Usage:

    # output directionality
    $ direction @
    # neutral

    # output directionality from stdin
    $ echo 'الانجليزية' | direction
    # rtl

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/doctype/

### [fixtures/node_modules/doctype/readme.md](fixtures/node_modules/doctype/readme.md)

# doctype

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Info on HTML / XHTML / MathML / SVG doctypes.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install doctype

## Use

    var doctype = require("doctype");

    doctype(5);
    // => 'html'

    doctype(4.01);
    doctype("4.01t");
    doctype("4.01 Transitional");
    doctype("HTML 4.01 Transitional");
    // => 'HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"'

    doctype("svg");
    // => 'svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"'

## API

### `doctype(name)`

Get a doctype, where `name` stripped from white-space, casing, fractional-part of version, `'HTML'` or `'XHTML'` prefix, and suffixes are normalised (`Transitional` to `t`).

Returns: `string?` — When applicable.

### `doctype.all`

    {
      'HTML 5': 'html',
      'HTML 4.01 Strict': 'HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"',
      // ...
    }

`Object` mapping doctype names to doctype strings. This gives raw access to the information returned by [`doctype()`](#doctypename).

## Related

- [`html-tag-names`](https://github.com/wooorm/html-tag-names) — List of HTML tag-names
- [`html-element-attributes`](https://github.com/wooorm/html-element-attributes) — Map of HTML attributes
- [`html-void-elements`](https://github.com/wooorm/html-void-elements) — List of void HTML tag-names
- [`property-information`](https://github.com/wooorm/property-information) — Information on HTML properties
- [`web-namespaces`](https://github.com/wooorm/web-namespaces) — Map of web namespaces

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/dotenv/

### [fixtures/node_modules/dotenv/CHANGELOG.md](fixtures/node_modules/dotenv/CHANGELOG.md)

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [8.2.0](https://github.com/motdotla/dotenv/compare/v8.1.0...v8.2.0) (2019-10-16)

## [8.1.0](https://github.com/motdotla/dotenv/compare/v7.0.0...v8.1.0) (2019-08-18)

### ⚠ BREAKING CHANGES

- dropping Node v6 support because end-of-life

- Drop support for Node v6 (\#392) ([2e9636a](https://github.com/motdotla/dotenv/commit/2e9636a)), closes [\#392](https://github.com/motdotla/dotenv/issues/392)

# [8.0.0](https://github.com/motdotla/dotenv/compare/v7.0.0...v8.0.0) (2019-05-02)

- Drop support for Node v6 (\#392) ([2e9636a](https://github.com/motdotla/dotenv/commit/2e9636a)), closes [\#392](https://github.com/motdotla/dotenv/issues/392)

### BREAKING CHANGES

- dropping Node v6 support because end-of-life

## [7.0.0](https://github.com/motdotla/dotenv/compare/v6.2.0...v7.0.0) - 2019-03-12

### Fixed

- Fix removing unbalanced quotes ([\#376](https://github.com/motdotla/dotenv/pull/376))

### Removed

- Removed `load` alias for `config` for consistency throughout code and documentation.

## [6.2.0](https://github.com/motdotla/dotenv/compare/v6.1.0...v6.2.0) - 2018-12-03

### Added

- Support preload configuration via environment variables ([\#351](https://github.com/motdotla/dotenv/issues/351))

## [6.1.0](https://github.com/motdotla/dotenv/compare/v6.0.0...v6.1.0) - 2018-10-08

### Added

- `debug` option for `config` and `parse` methods will turn on logging

## [6.0.0](https://github.com/motdotla/dotenv/compare/v5.0.0...v6.0.0) - 2018-06-02

### Changed

- _Breaking:_ drop support for Node v4 ([\#304](https://github.com/motdotla/dotenv/pull/304))

## [5.0.0](https://github.com/motdotla/dotenv/compare/v4.0.0...v5.0.0) - 2018-01-29

### Added

- Testing against Node v8 and v9
- Documentation on trim behavior of values
- Documentation on how to use with `import`

### Changed

- _Breaking_: default `path` is now `path.resolve(process.cwd(), '.env')`
- _Breaking_: does not write over keys already in `process.env` if the key has a falsy value
- using `const` and `let` instead of `var`

### Removed

- Testing against Node v7

## [4.0.0](https://github.com/motdotla/dotenv/compare/v3.0.0...v4.0.0) - 2016-12-23

### Changed

- Return Object with parsed content or error instead of false ([\#165](https://github.com/motdotla/dotenv/pull/165)).

### Removed

- `verbose` option removed in favor of returning result.

## [3.0.0](https://github.com/motdotla/dotenv/compare/v2.0.0...v3.0.0) - 2016-12-20

### Added

- `verbose` option will log any error messages. Off by default.
- parses email addresses correctly
- allow importing config method directly in ES6

### Changed

- Suppress error messages by default ([\#154](https://github.com/motdotla/dotenv/pull/154))
- Ignoring more files for NPM to make package download smaller

### Fixed

- False positive test due to case-sensitive variable ([\#124](https://github.com/motdotla/dotenv/pull/124))

### Removed

- `silent` option removed in favor of `verbose`

## [2.0.0](https://github.com/motdotla/dotenv/compare/v1.2.0...v2.0.0) - 2016-01-20

### Added

- CHANGELOG to [“make it easier for users and contributors to see precisely what notable changes have been made between each release”](http://keepachangelog.com/). Linked to from README
- LICENSE to be more explicit about what was defined in `package.json`. Linked to from README
- Testing nodejs v4 on travis-ci
- added examples of how to use dotenv in different ways
- return parsed object on success rather than boolean true

### Changed

- README has shorter description not referencing ruby gem since we don’t have or want feature parity

### Removed

- Variable expansion and escaping so environment variables are encouraged to be fully orthogonal

## [1.2.0](https://github.com/motdotla/dotenv/compare/v1.1.0...v1.2.0) - 2015-06-20

### Added

- Preload hook to require dotenv without including it in your code

### Changed

- clarified license to be “BSD-2-Clause” in `package.json`

### Fixed

- retain spaces in string vars

## [1.1.0](https://github.com/motdotla/dotenv/compare/v1.0.0...v1.1.0) - 2015-03-31

### Added

- Silent option to silence `console.log` when `.env` missing

## [1.0.0](https://github.com/motdotla/dotenv/compare/v0.4.0...v1.0.0) - 2015-03-13

### Removed

- support for multiple `.env` files. should always use one `.env` file for the current environment

### [fixtures/node_modules/dotenv/README.md](fixtures/node_modules/dotenv/README.md)

# dotenv

![dotenv](https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png)

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env). Storing configuration in the environment separate from code is based on [The Twelve-Factor App](http://12factor.net/config) methodology.

[![BuildStatus](https://img.shields.io/travis/motdotla/dotenv/master.svg?style=flat-square)](https://travis-ci.org/motdotla/dotenv) [![Build status](https://ci.appveyor.com/api/projects/status/github/motdotla/dotenv?svg=true)](https://ci.appveyor.com/project/motdotla/dotenv/branch/master) [![NPM version](https://img.shields.io/npm/v/dotenv.svg?style=flat-square)](https://www.npmjs.com/package/dotenv) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard) [![Coverage Status](https://img.shields.io/coveralls/motdotla/dotenv/master.svg?style=flat-square)](https://coveralls.io/github/motdotla/dotenv?branch=coverall-intergration) [![LICENSE](https://img.shields.io/github/license/motdotla/dotenv.svg)](LICENSE) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Install

    # with npm
    npm install dotenv

    # or with Yarn
    yarn add dotenv

## Usage

As early as possible in your application, require and configure dotenv.

    require("dotenv").config();

Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=s1mpl3

`process.env` now has the keys and values you defined in your `.env` file.

    const db = require("db");
    db.connect({
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
    });

### Preload

You can use the `--require` (`-r`) [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload dotenv. By doing this, you do not need to require and load dotenv in your application code. This is the preferred approach when using `import` instead of `require`.

    $ node -r dotenv/config your_script.js

The configuration options below are supported as command line arguments in the format `dotenv_config_<option>=value`

    $ node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/your/env/vars

Additionally, you can use environment variables to set configuration options. Command line arguments will precede these.

    $ DOTENV_CONFIG_<OPTION>=value node -r dotenv/config your_script.js

    $ DOTENV_CONFIG_ENCODING=latin1 node -r dotenv/config your_script.js dotenv_config_path=/custom/path/to/.env

## Config

`config` will read your `.env` file, parse the contents, assign it to [`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env), and return an Object with a `parsed` key containing the loaded content or an `error` key if it failed.

    const result = dotenv.config();

    if (result.error) {
      throw result.error;
    }

    console.log(result.parsed);

You can additionally, pass options to `config`.

### Options

#### Path

Default: `path.resolve(process.cwd(), '.env')`

You may specify a custom path if your file containing environment variables is located elsewhere.

    require("dotenv").config({ path: "/full/custom/path/to/your/env/vars" });

#### Encoding

Default: `utf8`

You may specify the encoding of your file containing environment variables.

    require("dotenv").config({ encoding: "latin1" });

#### Debug

Default: `false`

You may turn on logging to help debug why certain keys or values are not being set as you expect.

    require("dotenv").config({ debug: process.env.DEBUG });

## Parse

The engine which parses the contents of your file containing environment variables is available to use. It accepts a String or Buffer and will return an Object with the parsed keys and values.

    const dotenv = require("dotenv");
    const buf = Buffer.from("BASIC=basic");
    const config = dotenv.parse(buf); // will return an object
    console.log(typeof config, config); // object { BASIC : 'basic' }

### Options

#### Debug

Default: `false`

You may turn on logging to help debug why certain keys or values are not being set as you expect.

    const dotenv = require("dotenv");
    const buf = Buffer.from("hello world");
    const opt = { debug: true };
    const config = dotenv.parse(buf, opt);
    // expect a debug message because the buffer is not in KEY=VAL form

### Rules

The parsing engine currently supports the following rules:

- `BASIC=basic` becomes `{BASIC: 'basic'}`
- empty lines are skipped
- lines beginning with `#` are treated as comments
- empty values become empty strings (`EMPTY=` becomes `{EMPTY: ''}`)
- inner quotes are maintained (think JSON) (`JSON={"foo": "bar"}` becomes `{JSON:"{\"foo\": \"bar\"}"`)
- whitespace is removed from both ends of unquoted values (see more on [`trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)) (`FOO= some value` becomes `{FOO: 'some value'}`)
- single and double quoted values are escaped (`SINGLE_QUOTE='quoted'` becomes `{SINGLE_QUOTE: "quoted"}`)
- single and double quoted values maintain whitespace from both ends (`FOO=" some value "` becomes `{FOO: ' some value '}`)
- double quoted values expand new lines (`MULTILINE="new\nline"` becomes

<!-- -->

    {MULTILINE: 'new
    line'}

## FAQ

### Should I commit my `.env` file?

No. We **strongly** recommend against committing your `.env` file to version control. It should only include environment-specific values such as database passwords or API keys. Your production database should have a different password than your development database.

### Should I have multiple `.env` files?

No. We **strongly** recommend against having a “main” `.env` file and an “environment” `.env` file like `.env.test`. Your config should vary between deploys, and you should not be sharing values between environments.

> In a twelve-factor app, env vars are granular controls, each fully orthogonal to other env vars. They are never grouped together as “environments”, but instead are independently managed for each deploy. This is a model that scales up smoothly as the app naturally expands into more deploys over its lifetime.
>
> – [The Twelve-Factor App](http://12factor.net/config)

### What happens to environment variables that were already set?

We will never modify any environment variables that have already been set. In particular, if there is a variable in your `.env` file which collides with one that already exists in your environment, then that variable will be skipped. This behavior allows you to override all `.env` configurations with a machine-specific environment, although it is not recommended.

If you want to override `process.env` you can do something like this:

    const fs = require("fs");
    const dotenv = require("dotenv");
    const envConfig = dotenv.parse(fs.readFileSync(".env.override"));
    for (const k in envConfig) {
      process.env[k] = envConfig[k];
    }

### Can I customize/write plugins for dotenv?

For `dotenv@2.x.x`: Yes. `dotenv.config()` now returns an object representing the parsed `.env` file. This gives you everything you need to continue setting values on `process.env`. For example:

    const dotenv = require("dotenv");
    const variableExpansion = require("dotenv-expand");
    const myEnv = dotenv.config();
    variableExpansion(myEnv);

### What about variable expansion?

Try [dotenv-expand](https://github.com/motdotla/dotenv-expand)

### How do I use dotenv with `import`?

ES2015 and beyond offers modules that allow you to `export` any top-level `function`, `class`, `var`, `let`, or `const`.

> When you run a module containing an `import` declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph, avoiding cycles by skipping anything already executed.
>
> – [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)

You must run `dotenv.config()` before referencing any environment variables. Here’s an example of problematic code:

`errorReporter.js`:

    import { Client } from "best-error-reporting-service";

    export const client = new Client(process.env.BEST_API_KEY);

`index.js`:

    import dotenv from "dotenv";
    import errorReporter from "./errorReporter";

    dotenv.config();
    errorReporter.client.report(new Error("faq example"));

`client` will not be configured correctly because it was constructed before `dotenv.config()` was executed. There are (at least) 3 ways to make this work.

1.  Preload dotenv: `node --require dotenv/config index.js` (_Note: you do not need to `import` dotenv with this approach_)
2.  Import `dotenv/config` instead of `dotenv` (_Note: you do not need to call `dotenv.config()` and must pass options via the command line or environment variables with this approach_)
3.  Create a separate file that will execute `config` first as outlined in [this comment on \#133](https://github.com/motdotla/dotenv/issues/133#issuecomment-255298822)

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Change Log

See [CHANGELOG.md](CHANGELOG.md)

## Who’s using dotenv?

[These npm modules depend on it.](https://www.npmjs.com/browse/depended/dotenv)

Projects that expand it often use the [keyword “dotenv” on npm](https://www.npmjs.com/search?q=keywords:dotenv).

fixtures/node_modules/fs.realpath/

### [fixtures/node_modules/fs.realpath/README.md](fixtures/node_modules/fs.realpath/README.md)

# fs.realpath

A backwards-compatible fs.realpath for Node v6 and above

In Node v6, the JavaScript implementation of fs.realpath was replaced with a faster (but less resilient) native implementation. That raises new and platform-specific errors and cannot handle long or excessively symlink-looping paths.

This module handles those cases by detecting the new errors and falling back to the JavaScript implementation. On versions of Node prior to v6, it has no effect.

## USAGE

    var rp = require("fs.realpath");

    // async version
    rp.realpath(someLongAndLoopingPath, function (er, real) {
      // the ELOOP was handled, but it was a bit slower
    });

    // sync version
    var real = rp.realpathSync(someLongAndLoopingPath);

    // monkeypatch at your own risk!
    // This replaces the fs.realpath/fs.realpathSync builtins
    rp.monkeypatch();

    // un-do the monkeypatching
    rp.unmonkeypatch();

fixtures/node_modules/glob/

### [fixtures/node_modules/glob/changelog.md](fixtures/node_modules/glob/changelog.md)

## 7.0

- Raise error if `options.cwd` is specified, and not a directory

## 6.0

- Remove comment and negation pattern support
- Ignore patterns are always in `dot:true` mode

## 5.0

- Deprecate comment and negation patterns
- Fix regression in `mark` and `nodir` options from making all cache keys absolute path.
- Abort if `fs.readdir` returns an error that’s unexpected
- Don’t emit `match` events for ignored items
- Treat ENOTSUP like ENOTDIR in readdir

## 4.5

- Add `options.follow` to always follow directory symlinks in globstar
- Add `options.realpath` to call `fs.realpath` on all results
- Always cache based on absolute path

## 4.4

- Add `options.ignore`
- Fix handling of broken symlinks

## 4.3

- Bump minimatch to 2.x
- Pass all tests on Windows

## 4.2

- Add `glob.hasMagic` function
- Add `options.nodir` flag

## 4.1

- Refactor sync and async implementations for performance
- Throw if callback provided to sync glob function
- Treat symbolic links in globstar results the same as Bash 4.3

## 4.0

- Use `^` for dependency versions (bumped major because this breaks older npm versions)
- Ensure callbacks are only ever called once
- switch to ISC license

## 3.x

- Rewrite in JavaScript
- Add support for setting root, cwd, and windows support
- Cache many fs calls
- Add globstar support
- emit match events

## 2.x

- Use `glob.h` and `fnmatch.h` from NetBSD

## 1.x

- `glob.h` static binding.

### [fixtures/node_modules/glob/README.md](fixtures/node_modules/glob/README.md)

# Glob

Match files using the patterns the shell uses, like stars and stuff.

[![Build Status](https://travis-ci.org/isaacs/node-glob.svg?branch=master)](https://travis-ci.org/isaacs/node-glob/) [![Build Status](https://ci.appveyor.com/api/projects/status/kd7f3yftf7unxlsx?svg=true)](https://ci.appveyor.com/project/isaacs/node-glob) [![Coverage Status](https://coveralls.io/repos/isaacs/node-glob/badge.svg?branch=master&service=github)](https://coveralls.io/github/isaacs/node-glob?branch=master)

This is a glob implementation in JavaScript. It uses the `minimatch` library to do its matching.

![](logo/glob.png)

## Usage

Install with npm

    npm i glob

    var glob = require("glob");

    // options is optional
    glob("**/*.js", options, function (er, files) {
      // files is an array of filenames.
      // If the `nonull` option is set, and nothing
      // was found, then files is ["**/*.js"]
      // er is an error object or null.
    });

## Glob Primer

“Globs” are the patterns you type when you do stuff like `ls *.js` on the command line, or put `build/*` in a `.gitignore` file.

Before parsing the path part patterns, braced sections are expanded into a set. Braced sections start with `{` and end with `}`, with any number of comma-delimited sections within. Braced sections may contain slash characters, so `a{/b/c,bcd}` would expand into `a/b/c` and `abcd`.

The following characters have special magic meaning when used in a path portion:

- `*` Matches 0 or more characters in a single path portion
- `?` Matches 1 character
- `[...]` Matches a range of characters, similar to a RegExp range. If the first character of the range is `!` or `^` then it matches any character not in the range.
- `!(pattern|pattern|pattern)` Matches anything that does not match any of the patterns provided.
- `?(pattern|pattern|pattern)` Matches zero or one occurrence of the patterns provided.
- `+(pattern|pattern|pattern)` Matches one or more occurrences of the patterns provided.
- `*(a|b|c)` Matches zero or more occurrences of the patterns provided
- `@(pattern|pat*|pat?erN)` Matches exactly one of the patterns provided
- `**` If a “globstar” is alone in a path portion, then it matches zero or more directories and subdirectories searching for matches. It does not crawl symlinked directories.

### Dots

If a file or directory path portion has a `.` as the first character, then it will not match any glob pattern unless that pattern’s corresponding path part also has a `.` as its first character.

For example, the pattern `a/.*/c` would match the file at `a/.b/c`. However the pattern `a/*/c` would not, because `*` does not start with a dot character.

You can make glob treat dots as normal characters by setting `dot:true` in the options.

### Basename Matching

If you set `matchBase:true` in the options, and the pattern has no slashes in it, then it will seek for any file anywhere in the tree with a matching basename. For example, `*.js` would match `test/simple/basic.js`.

### Empty Sets

If no matching files are found, then an empty array is returned. This differs from the shell, where the pattern itself is returned. For example:

    $ echo a*s*d*f
    a*s*d*f

To get the bash-style behavior, set the `nonull:true` in the options.

### See Also:

- `man sh`
- `man bash` (Search for “Pattern Matching”)
- `man 3 fnmatch`
- `man 5 gitignore`
- [minimatch documentation](https://github.com/isaacs/minimatch)

## glob.hasMagic(pattern, [options](#options-10))

Returns `true` if there are any special characters in the pattern, and `false` otherwise.

Note that the options affect the results. If `noext:true` is set in the options object, then `+(a|b)` will not be considered a magic pattern. If the pattern has a brace expansion, like `a/{b/c,x/y}` then that is considered magical, unless `nobrace:true` is set in the options.

## glob(pattern, [options](#options-10), cb)

- `pattern` `{String}` Pattern to be matched
- `options` `{Object}`
- `cb` `{Function}`
  - `err` `{Error | null}`
  - `matches` `{Array<String>}` filenames found matching the pattern

Perform an asynchronous glob search.

## glob.sync(pattern, [options](#options-10))

- `pattern` `{String}` Pattern to be matched
- `options` `{Object}`
- return: `{Array<String>}` filenames found matching the pattern

Perform a synchronous glob search.

## Class: glob.Glob

Create a Glob object by instantiating the `glob.Glob` class.

    var Glob = require("glob").Glob;
    var mg = new Glob(pattern, options, cb);

It’s an EventEmitter, and starts walking the filesystem to find matches immediately.

### new glob.Glob(pattern, [options](#options-10), \[cb\])

- `pattern` `{String}` pattern to search for
- `options` `{Object}`
- `cb` `{Function}` Called when an error occurs, or matches are found
  - `err` `{Error | null}`
  - `matches` `{Array<String>}` filenames found matching the pattern

Note that if the `sync` flag is set in the options, then matches will be immediately available on the `g.found` member.

### Properties

- `minimatch` The minimatch object that the glob uses.
- `options` The options object passed in.
- `aborted` Boolean which is set to true when calling `abort()`. There is no way at this time to continue a glob search after aborting, but you can re-use the statCache to avoid having to duplicate syscalls.
- `cache` Convenience object. Each field has the following possible values:
  - `false` - Path does not exist
  - `true` - Path exists
  - `'FILE'` - Path exists, and is not a directory
  - `'DIR'` - Path exists, and is a directory
  - `[file, entries, ...]` - Path exists, is a directory, and the array value is the results of `fs.readdir`
- `statCache` Cache of `fs.stat` results, to prevent statting the same path multiple times.
- `symlinks` A record of which paths are symbolic links, which is relevant in resolving `**` patterns.
- `realpathCache` An optional object which is passed to `fs.realpath` to minimize unnecessary syscalls. It is stored on the instantiated Glob object, and may be re-used.

### Events

- `end` When the matching is finished, this is emitted with all the matches found. If the `nonull` option is set, and no match was found, then the `matches` list contains the original pattern. The matches are sorted, unless the `nosort` flag is set.
- `match` Every time a match is found, this is emitted with the specific thing that matched. It is not deduplicated or resolved to a realpath.
- `error` Emitted when an unexpected error is encountered, or whenever any fs error occurs if `options.strict` is set.
- `abort` When `abort()` is called, this event is raised.

### Methods

- `pause` Temporarily stop the search
- `resume` Resume the search
- `abort` Stop the search forever

### Options

All the options that can be passed to Minimatch can also be passed to Glob to change pattern matching behavior. Also, some have been added, or have glob-specific ramifications.

All options are false by default, unless otherwise noted.

All options are added to the Glob object, as well.

If you are running many `glob` operations, you can pass a Glob object as the `options` argument to a subsequent operation to shortcut some `stat` and `readdir` calls. At the very least, you may pass in shared `symlinks`, `statCache`, `realpathCache`, and `cache` options, so that parallel glob operations will be sped up by sharing information about the filesystem.

- `cwd` The current working directory in which to search. Defaults to `process.cwd()`.
- `root` The place where patterns starting with `/` will be mounted onto. Defaults to `path.resolve(options.cwd, "/")` (`/` on Unix systems, and `C:\` or some such on Windows.)
- `dot` Include `.dot` files in normal matches and `globstar` matches. Note that an explicit dot in a portion of the pattern will always match dot files.
- `nomount` By default, a pattern starting with a forward-slash will be “mounted” onto the root setting, so that a valid filesystem path is returned. Set this flag to disable that behavior.
- `mark` Add a `/` character to directory matches. Note that this requires additional stat calls.
- `nosort` Don’t sort the results.
- `stat` Set to true to stat _all_ results. This reduces performance somewhat, and is completely unnecessary, unless `readdir` is presumed to be an untrustworthy indicator of file existence.
- `silent` When an unusual error is encountered when attempting to read a directory, a warning will be printed to stderr. Set the `silent` option to true to suppress these warnings.
- `strict` When an unusual error is encountered when attempting to read a directory, the process will just continue on in search of other matches. Set the `strict` option to raise an error in these cases.
- `cache` See `cache` property above. Pass in a previously generated cache object to save some fs calls.
- `statCache` A cache of results of filesystem information, to prevent unnecessary stat calls. While it should not normally be necessary to set this, you may pass the statCache from one glob() call to the options object of another, if you know that the filesystem will not change between calls. (See “Race Conditions” below.)
- `symlinks` A cache of known symbolic links. You may pass in a previously generated `symlinks` object to save `lstat` calls when resolving `**` matches.
- `sync` DEPRECATED: use `glob.sync(pattern, opts)` instead.
- `nounique` In some cases, brace-expanded patterns can result in the same file showing up multiple times in the result set. By default, this implementation prevents duplicates in the result set. Set this flag to disable that behavior.
- `nonull` Set to never return an empty set, instead returning a set containing the pattern itself. This is the default in glob(3).
- `debug` Set to enable debug logging in minimatch and glob.
- `nobrace` Do not expand `{a,b}` and `{1..3}` brace sets.
- `noglobstar` Do not match `**` against multiple filenames. (Ie, treat it as a normal `*` instead.)
- `noext` Do not match `+(a|b)` “extglob” patterns.
- `nocase` Perform a case-insensitive match. Note: on case-insensitive filesystems, non-magic patterns will match by default, since `stat` and `readdir` will not raise errors.
- `matchBase` Perform a basename-only match if the pattern does not contain any slash characters. That is, `*.js` would be treated as equivalent to `**/*.js`, matching all js files in all directories.
- `nodir` Do not match directories, only files. (Note: to match _only_ directories, simply put a `/` at the end of the pattern.)
- `ignore` Add a pattern or an array of glob patterns to exclude matches. Note: `ignore` patterns are _always_ in `dot:true` mode, regardless of any other settings.
- `follow` Follow symlinked directories when expanding `**` patterns. Note that this can result in a lot of duplicate references in the presence of cyclic links.
- `realpath` Set to true to call `fs.realpath` on all of the results. In the case of a symlink that cannot be resolved, the full absolute path to the matched entry is returned (though it will usually be a broken symlink)
- `absolute` Set to true to always receive absolute paths for matched files. Unlike `realpath`, this also affects the values returned in the `match` event.

## Comparisons to other fnmatch/glob implementations

While strict compliance with the existing standards is a worthwhile goal, some discrepancies exist between node-glob and other implementations, and are intentional.

The double-star character `**` is supported by default, unless the `noglobstar` flag is set. This is supported in the manner of bsdglob and bash 4.3, where `**` only has special significance if it is the only thing in a path part. That is, `a/**/b` will match `a/x/y/b`, but `a/**b` will not.

Note that symlinked directories are not crawled as part of a `**`, though their contents may match against subsequent portions of the pattern. This prevents infinite loops and duplicates and the like.

If an escaped pattern has no matches, and the `nonull` flag is set, then glob returns the pattern as-provided, rather than interpreting the character escapes. For example, `glob.match([], "\\*a\\?")` will return `"\\*a\\?"` rather than `"*a?"`. This is akin to setting the `nullglob` option in bash, except that it does not resolve escaped pattern characters.

If brace expansion is not disabled, then it is performed before any other interpretation of the glob pattern. Thus, a pattern like `+(a|{b),c)}`, which would not be valid in bash or zsh, is expanded **first** into the set of `+(a|b)` and `+(a|c)`, and those patterns are checked for validity. Since those two are valid, matching proceeds.

### Comments and Negation

Previously, this module let you mark a pattern as a “comment” if it started with a `#` character, or a “negated” pattern if it started with a `!` character.

These options were deprecated in version 5, and removed in version 6.

To specify things that should not match, use the `ignore` option.

## Windows

**Please only use forward-slashes in glob expressions.**

Though windows uses either `/` or `\` as its path separator, only `/` characters are used by this glob implementation. You must use forward-slashes **only** in glob expressions. Back-slashes will always be interpreted as escape characters, not path separators.

Results from absolute patterns such as `/foo/*` are mounted onto the root setting using `path.join`. On windows, this will by default result in `/foo/*` matching `C:\foo\bar.txt`.

## Race Conditions

Glob searching, by its very nature, is susceptible to race conditions, since it relies on directory walking and such.

As a result, it is possible that a file that exists when glob looks for it may have been deleted or modified by the time it returns the result.

As part of its internal implementation, this program caches all stat and readdir calls that it makes, in order to cut down on system overhead. However, this also makes it even more susceptible to races, especially if the cache or statCache objects are reused between glob calls.

Users are thus advised not to use a glob result as a guarantee of filesystem state in the face of rapid changes. For the vast majority of operations, this is never a problem.

## Glob Logo

Glob’s logo was created by [Tanya Brassie](http://tanyabrassie.com/). Logo files can be found [here](https://github.com/isaacs/node-glob/tree/master/logo).

The logo is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

## Contributing

Any change to behavior (including bugfixes) must come with a test.

Patches that fail tests or reduce performance will be rejected.

    # to run tests
    npm test

    # to re-generate test fixtures
    npm run test-regen

    # to benchmark against bash/zsh
    npm run bench

    # to profile javascript
    npm run prof

![](oh-my-glob.gif)

fixtures/node_modules/hast-util-from-selector/

### [fixtures/node_modules/hast-util-from-selector/readme.md](fixtures/node_modules/hast-util-from-selector/readme.md)

# hast-util-from-selector

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility to create nodes from an advanced CSS selector.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-from-selector

## Use

    var from = require("hast-util-from-selector");

    console.log(from("p svg[viewbox=0 0 10 10] circle[cx=10][cy=10][r=10]"));

Yields:

    {
      type: 'element',
      tagName: 'p',
      properties: {},
      children: [
        {
          type: 'element',
          tagName: 'svg',
          properties: {viewBox: '0 0 10 10'},
          children: [
            {
              type: 'element',
              tagName: 'circle',
              properties: {cx: '10', cy: '10', r: '10'},
              children: []
            }
          ]
        }
      ]
    }

## API

### `fromSelector([selector][, options])`

Create one or more [_element_](https://github.com/syntax-tree/hast#element) [_node_](https://github.com/syntax-tree/unist#node)s from a CSS selector.

###### Parameters

- `selector` (`string`, optional) — CSS selector
- `space` (`string`, optional) — Treated as `options.space`
- `options.space` (enum, `'svg'` or `'html'`, default: `'html'`) — Which space first element in the selector is in. When an `svg` is created in HTML, the space is switched automatically to SVG

###### Returns

[`Element`](https://github.com/syntax-tree/hast#element).

## Support

- \[x\] `*` (universal selector, _creates a `div` in HTML, `g` in SVG_)
- \[x\] `p` (type selector)
- \[x\] `.class` (class selector)
- \[x\] `#id` (id selector)
- \[x\] `[attr]` (attribute existence, _creates a boolean_)
- \[x\] `[attr=value]` (attribute equality)
- \[x\] `article p` (descendant combinator)
- \[x\] `article > p` (child combinator)
- \[x\] `section h1 + p` (next-sibling combinator, _not at root_)
- \[x\] `section h1 ~ p` (subsequent-sibling combinator, _not at root_)

## Security

Use of `from-selector` can open you up to a [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attack as values are injected into the syntax tree.

Either do not use user input in `from-selector` or use [`hast-util-santize`](https://github.com/rehypejs/rehype-sanitize).

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hast-util-has-property/

### [fixtures/node_modules/hast-util-has-property/readme.md](fixtures/node_modules/hast-util-has-property/readme.md)

# hast-util-has-property

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility to check if an [_element_](https://github.com/syntax-tree/hast#element) has a [_property_](https://github.com/syntax-tree/hast#property-names).

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-has-property

## Use

    var has = require("hast-util-has-property");

    has({ type: "text", value: "alpha" }, "bravo"); // => false

    has(
      {
        type: "element",
        tagName: "div",
        properties: { id: "bravo" },
        children: [],
      },
      "className"
    ); // => false

    has(
      {
        type: "element",
        tagName: "div",
        properties: { id: "charlie" },
        children: [],
      },
      "id"
    ); // => true

## API

### `hasProperty(node, name)`

Check if `node` is an [_element_](https://github.com/syntax-tree/hast#element) that has a `name` [_property name_](https://github.com/syntax-tree/hast#property-names).

###### Parameters

- `node` ([`Node`](https://github.com/syntax-tree/unist#node), optional) — [_Node_](https://github.com/syntax-tree/unist#node) to check
- `name` (`string`) - [_Property name_](https://github.com/syntax-tree/hast#property-names)

###### Returns

`boolean` — Whether `node` is an [_element_](https://github.com/syntax-tree/hast#element) that has a `name` [_property name_](https://github.com/syntax-tree/hast#property-names).

## Security

`hast-util-has-property` does not change the syntax tree so there are no openings for [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hast-util-is-element/

### [fixtures/node_modules/hast-util-is-element/readme.md](fixtures/node_modules/hast-util-is-element/readme.md)

# hast-util-is-element

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility to check if a [_node_](https://github.com/syntax-tree/unist#node) is a (certain) [_element_](https://github.com/syntax-tree/hast#element).

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-is-element

## Use

    var is = require("hast-util-is-element");

    is({ type: "text", value: "foo" }); // => false

    is({ type: "element", tagName: "a" }, "a"); // => true

    is({ type: "element", tagName: "a" }, ["a", "area"]); // => true

## API

### `isElement(node[, tagName|tagNames])`

Check if the given value is a (certain) [_element_](https://github.com/syntax-tree/hast#element).

- When given a `tagName` or `tagNames`, checks that `node` is an [_element_](https://github.com/syntax-tree/hast#element) whose `tagName` field matches `tagName` or is included in `tagNames`
- Otherwise checks that `node` is an [_element_](https://github.com/syntax-tree/hast#element)

###### Parameters

- `node` (`*`) — Value to check, probably [`Node`](https://github.com/syntax-tree/unist#node)
- `tagName` (`string`, optional) — Value that `node`s `tagName` field should match
- `tagNames` (`Array.<string>`, optional) — Values that should include `node`s `tagName` field should match

###### Returns

`boolean` — whether `node` passes the test.

###### Throws

`Error` — When the second parameter is given but invalid.

## Security

`hast-util-is-element` does not change the syntax tree so there are no openings for [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hast-util-parse-selector/

### [fixtures/node_modules/hast-util-parse-selector/readme.md](fixtures/node_modules/hast-util-parse-selector/readme.md)

# hast-util-parse-selector

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility to create an [_element_](https://github.com/syntax-tree/hast#element) from a simple CSS selector.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-parse-selector

## Use

    var parseSelector = require("hast-util-parse-selector");

    console.log(parseSelector(".quux#bar.baz.qux"));

Yields:

    { type: 'element',
      tagName: 'div',
      properties: { id: 'bar', className: [ 'quux', 'baz', 'qux' ] },
      children: [] }

## API

### `parseSelector([selector][, defaultTagName])`

Create an [_element_](https://github.com/syntax-tree/hast#element) [_node_](https://github.com/syntax-tree/unist#node) from a simple CSS selector.

###### `selector`

`string`, optional — Can contain a tag-name (`foo`), classes (`.bar`), and an ID (`#baz`). Multiple classes are allowed. Uses the last ID if multiple IDs are found.

###### `defaultTagName`

`string`, optional, defaults to `div` — Tag name to use if `selector` does not specify one.

###### Returns

[`Element`](https://github.com/syntax-tree/hast#element).

## Security

Improper use of the `selector` or `defaultTagName` can open you up to a [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attack as the value of `tagName`, when resolving to `script`, injects a `script` element into the syntax tree.

Do not use user input in `selector` or use [`hast-util-santize`](https://github.com/rehypejs/rehype-sanitize).

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hast-util-select/

### [fixtures/node_modules/hast-util-select/readme.md](fixtures/node_modules/hast-util-select/readme.md)

# hast-util-select

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility with equivalents `querySelector`, `querySelectorAll`, and `matches`.

One notable difference between DOM and hast is that DOM nodes have references to their parents, meaning that `document.body.matches(':last-child')` can be evaluated. This information is not stored in hast, so selectors like that don’t work.

[View the list of supported selectors »](https://github.com/syntax-tree/.github/blob/master/support.md)

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-select

## API

### `select.matches(selector, node[, space])`

Check that the given `node` matches `selector`. Returns boolean, whether the node matches or not.

This only checks the element itself, not the surrounding tree. Thus, nesting in selectors is not supported (`p b`, `p > b`), neither are selectors like `:first-child`, etc. This only checks that the given element matches the selector.

##### Use

    var h = require("hastscript");
    var matches = require("hast-util-select").matches;

    matches("b, i", h("b")); // => true
    matches(":any-link", h("a")); // => false
    matches(":any-link", h("a", { href: "#" })); // => true
    matches(".classy", h("a", { className: ["classy"] })); // => true
    matches("#id", h("a", { id: "id" })); // => true
    matches("[lang|=en]", h("a", { lang: "en" })); // => true
    matches("[lang|=en]", h("a", { lang: "en-GB" })); // => true
    // ...

##### Parameters

- `selector` (`string`) — CSS selectors (`,` is also supported)
- `node` ([`Node`](https://github.com/syntax-tree/unist#node)) — Thing to check, could be anything, but should be an [_element_](https://github.com/syntax-tree/hast#element)
- `space` (enum, `'svg'` or `'html'`, default: `'html'`) — Which space the node exists in

##### Returns

`boolean` — Whether the node matches the selector.

### `select.select(selector, tree[, space])`

Select the first `node` matching `selector` in the given `tree` (could be the tree itself). Searches the [_tree_](https://github.com/syntax-tree/unist#tree) in [_preorder_](https://github.com/syntax-tree/unist#preorder).

##### Use

    var h = require("hastscript");
    var select = require("hast-util-select").select;

    console.log(
      select(
        "h1 ~ :nth-child(even)",
        h("section", [
          h("p", "Alpha"),
          h("p", "Bravo"),
          h("h1", "Charlie"),
          h("p", "Delta"),
          h("p", "Echo"),
        ])
      )
    );

Yields:

    { type: 'element',
      tagName: 'p',
      properties: {},
      children: [ { type: 'text', value: 'Delta' } ] }

##### Parameters

- `selector` (`string`) — CSS selectors (`,` is also supported)
- `tree` ([`Node`](https://github.com/syntax-tree/unist#node)) — [_Tree_](https://github.com/syntax-tree/unist#tree) to search
- `space` (enum, `'svg'` or `'html'`, default: `'html'`) — Which space the tree exists in

##### Returns

[`Element?`](https://github.com/syntax-tree/hast#element) — The found element, if any.

### `select.selectAll(selector, tree[, space])`

Select all nodes matching `selector` in the given `tree` (could include the tree itself). Searches the [_tree_](https://github.com/syntax-tree/unist#tree) in [_preorder_](https://github.com/syntax-tree/unist#preorder).

##### Use

    var h = require("hastscript");
    var selectAll = require("hast-util-select").selectAll;

    console.log(
      selectAll(
        "h1 ~ :nth-child(even)",
        h("section", [
          h("p", "Alpha"),
          h("p", "Bravo"),
          h("h1", "Charlie"),
          h("p", "Delta"),
          h("p", "Echo"),
          h("p", "Foxtrot"),
          h("p", "Golf"),
        ])
      )
    );

Yields:

    [
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [{ type: "text", value: "Delta" }],
      },
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [{ type: "text", value: "Foxtrot" }],
      },
    ];

##### Parameters

- `selector` (`string`) — CSS selectors (`,` is also supported)
- `tree` ([`Node`](https://github.com/syntax-tree/unist#node)) — [_Tree_](https://github.com/syntax-tree/unist#tree) to search
- `space` (enum, `'svg'` or `'html'`, default: `'html'`) — Which space the tree exists in

##### Returns

[`Array.<Element>`](https://github.com/syntax-tree/hast#element) — All found elements, if any.

## Support

- \[x\] `*` (universal selector)
- \[x\] `,` (multiple selector)
- \[x\] `p` (type selector)
- \[x\] `.class` (class selector)
- \[x\] `#id` (id selector)
- \[x\] `article p` (combinator: descendant selector)
- \[x\] `article > p` (combinator: child selector)
- \[x\] `h1 + p` (combinator: next-sibling selector)
- \[x\] `h1 ~ p` (combinator: subsequent sibling selector)
- \[x\] `[attr]` (attribute existence)
- \[x\] `[attr=value]` (attribute equality)
- \[x\] `[attr~=value]` (attribute contains in space-separated list)
- \[x\] `[attr|=value]` (attribute equality or prefix)
- \[x\] `[attr^=value]` (attribute begins with)
- \[x\] `[attr$=value]` (attribute ends with)
- \[x\] `[attr*=value]` (attribute contains)
- \[x\] `:any()` (functional pseudo-class, use `:matches` instead)
- \[x\] `:dir()` (functional pseudo-class)
- \[x\] `:has()` (functional pseudo-class)
- \[x\] `:lang()` (functional pseudo-class)
- \[x\] `:matches()` (functional pseudo-class)
- \[x\] `:not()` (functional pseudo-class)
- \[x\] `:any-link` (pseudo-class)
- \[x\] `:blank` (pseudo-class)
- \[x\] `:checked` (pseudo-class)
- \[x\] `:disabled` (pseudo-class)
- \[x\] `:empty` (pseudo-class)
- \[x\] `:enabled` (pseudo-class)
- \[x\] `:optional` (pseudo-class)
- \[x\] `:read-only` (pseudo-class)
- \[x\] `:read-write` (pseudo-class)
- \[x\] `:required` (pseudo-class)
- \[x\] `:root` (pseudo-class)
- \[x\] `:scope` (pseudo-class):
- \[x\] \* `:first-child` (pseudo-class)
- \[x\] \* `:first-of-type` (pseudo-class)
- \[x\] \* `:last-child` (pseudo-class)
- \[x\] \* `:last-of-type` (pseudo-class)
- \[x\] \* `:only-child` (pseudo-class)
- \[x\] \* `:only-of-type` (pseudo-class)
- \[x\] \* `:nth-child()` (functional pseudo-class)
- \[x\] \* `:nth-last-child()` (functional pseudo-class)
- \[x\] \* `:nth-last-of-type()` (functional pseudo-class)
- \[x\] \* `:nth-of-type()` (functional pseudo-class)

## Unsupported

- \[ \] † `||` (column combinator)
- \[ \] ‡ `ns|E` (namespace type selector)
- \[ \] ‡ `*|E` (any namespace type selector)
- \[ \] ‡ `|E` (no namespace type selector)
- \[ \] ‡ `[ns|attr]` (namespace attribute)
- \[ \] ‡ `[*|attr]` (any namespace attribute)
- \[ \] ‡ `[|attr]` (no namespace attribute)
- \[ \] ‡ `[attr=value i]` (attribute case-insensitive)
- \[ \] ‡ `:has()` (functional pseudo-class). <span class="small">Relative selectors (`:has(> img)`) are not supported, but scope is (`:has(:scope > img)`)</span>
- \[ \] ‖ `:nth-child(n of S)` (functional pseudo-class). <span class="small">Scoping to parents is not supported</span>
- \[ \] ‖ `:nth-last-child(n of S)` (scoped to parent S). <span class="small">Scoping to parents is not supported</span>
- \[ \] † `:active` (pseudo-class)
- \[ \] † `:current` (pseudo-class)
- \[ \] † `:current()` (functional pseudo-class)
- \[ \] † `:default` (pseudo-class)
- \[ \] † `:defined` (pseudo-class)
- \[ \] † `:drop` (pseudo-class)
- \[ \] † `:drop()` (functional pseudo-class)
- \[ \] † `:focus` (pseudo-class)
- \[ \] † `:focus-visible` (pseudo-class)
- \[ \] † `:focus-within` (pseudo-class)
- \[ \] † `:fullscreen` (pseudo-class)
- \[ \] † `:future` (pseudo-class)
- \[ \] ‖ `:host()` (functional pseudo-class)
- \[ \] ‖ `:host-context()` (functional pseudo-class)
- \[ \] † `:hover` (pseudo-class)
- \[ \] § `:in-range` (pseudo-class)
- \[ \] † `:indeterminate` (pseudo-class)
- \[ \] § `:invalid` (pseudo-class)
- \[ \] † `:link` (pseudo-class)
- \[ \] † `:local-link` (pseudo-class)
- \[ \] † `:nth-column()` (functional pseudo-class)
- \[ \] † `:nth-last-column()` (functional pseudo-class)
- \[ \] § `:out-of-range` (pseudo-class)
- \[ \] † `:past` (pseudo-class)
- \[ \] † `:paused` (pseudo-class)
- \[ \] † `:placeholder-shown` (pseudo-class)
- \[ \] † `:playing` (pseudo-class)
- \[ \] ‖ `:something()` (functional pseudo-class)
- \[ \] † `:target` (pseudo-class)
- \[ \] † `:target-within` (pseudo-class)
- \[ \] † `:user-error` (pseudo-class)
- \[ \] † `:user-invalid` (pseudo-class)
- \[ \] § `:valid` (pseudo-class)
- \[ \] † `:visited` (pseudo-class)
- \[ \] † `::before` (pseudo-elements: none are supported)

###### Notes

- \* — Not supported in `matches`
- † — Needs a user, browser, interactivity, or scripting to make sense
- ‡ — Not supported by the underlying algorithm
- § — Not very interested in writing / including the code for this
- ‖ — Too new, the spec is still changing

## Security

`hast-util-select` does not change the syntax tree so there are no openings for [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hast-util-to-html/

### [fixtures/node_modules/hast-util-to-html/readme.md](fixtures/node_modules/hast-util-to-html/readme.md)

# hast-util-to-html

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility to serialize to HTML.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-to-html

## Use

    var h = require("hastscript");
    var toHtml = require("hast-util-to-html");

    var tree = h(".alpha", [
      "bravo ",
      h("b", "charlie"),
      " delta ",
      h("a.echo", { download: true }, "foxtrot"),
    ]);

    console.log(toHtml(tree));

Yields:

    <div class="alpha">
      bravo <b>charlie</b> delta <a class="echo" download>foxtrot</a>
    </div>

## API

### `toHtml(tree[, options])`

Serialize the given [**hast**](https://github.com/syntax-tree/hast) [_tree_](https://github.com/syntax-tree/unist#tree) (or list of nodes).

###### `options.space`

Whether the [_root_](https://github.com/syntax-tree/unist#root) of the [_tree_](https://github.com/syntax-tree/unist#tree) is in the `'html'` or `'svg'` space (enum, `'svg'` or `'html'`, default: `'html'`).

If an `svg` element is found in the HTML space, `toHtml` automatically switches to the SVG space when entering the element, and switches back when exiting.

###### `options.entities`

Configuration for [`stringify-entities`](https://github.com/wooorm/stringify-entities) (`Object`, default: `{}`). Do not use `escapeOnly`, `attribute`, or `subset` (`toHtml` already passes those, so they won’t work). However, `useNamedReferences`, `useShortestReferences`, and `omitOptionalSemicolons` are all fine.

###### `options.voids`

Tag names of [_elements_](https://github.com/syntax-tree/hast#element) to serialize without closing tag (`Array.<string>`, default: [`html-void-elements`](https://github.com/wooorm/html-void-elements)).

Not used in the SVG space.

###### `options.upperDoctype`

Use a `<!DOCTYPE…` instead of `<!doctype…`. Useless except for XHTML (`boolean`, default: `false`).

###### `options.quote`

Preferred quote to use (`'"'` or `'\''`, default: `'"'`).

###### `options.quoteSmart`

Use the other quote if that results in less bytes (`boolean`, default: `false`).

###### `options.preferUnquoted`

Leave attributes unquoted if that results in less bytes (`boolean`, default: `false`).

Not used in the SVG space.

###### `options.omitOptionalTags`

Omit optional opening and closing tags (`boolean`, default: `false`). For example, in `<ol><li>one</li><li>two</li></ol>`, both `</li>` closing tags can be omitted. The first because it’s followed by another `li`, the last because it’s followed by nothing.

Not used in the SVG space.

###### `options.collapseEmptyAttributes`

Collapse empty attributes: get `class` instead of `class=""` (`boolean`, default: `false`). **Note**: boolean attributes, such as `hidden`, are always collapsed.

Not used in the SVG space.

###### `options.closeSelfClosing`

Close self-closing nodes with an extra slash (`/`): `<img />` instead of `<img>` (`boolean`, default: `false`). See `tightSelfClosing` to control whether a space is used before the slash.

Not used in the SVG space.

###### `options.closeEmptyElements`

Close SVG elements without any content with slash (`/`) on the opening tag instead of an end tag: `<circle />` instead of `<circle></circle>` (`boolean`, default: `false`). See `tightSelfClosing` to control whether a space is used before the slash.

Not used in the HTML space.

###### `options.tightSelfClosing`

Do not use an extra space when closing self-closing elements: `<img/>` instead of `<img />` (`boolean`, default: `false`). **Note**: Only used if `closeSelfClosing: true` or `closeEmptyElements: true`.

###### `options.tightCommaSeparatedLists`

Join known comma-separated attribute values with just a comma (`,`), instead of padding them on the right as well (`,·`, where `·` represents a space) (`boolean`, default: `false`).

###### `options.tightAttributes`

Join attributes together, without white-space, if possible: get `class="a b"title="c d"` instead of `class="a b" title="c d"` to save bytes (`boolean`, default: `false`). **Note**: creates invalid (but working) markup.

Not used in the SVG space.

###### `options.tightDoctype`

Drop unneeded spaces in doctypes: `<!doctypehtml>` instead of `<!doctype html>` to save bytes (`boolean`, default: `false`). **Note**: creates invalid (but working) markup.

###### `options.bogusComments`

Use “bogus comments” instead of comments to save byes: `<?charlie>` instead of `<!--charlie-->` (`boolean`, default: `false`). **Note**: creates invalid (but working) markup.

###### `options.allowParseErrors`

Do not encode characters which cause parse errors (even though they work), to save bytes (`boolean`, default: `false`). **Note**: creates invalid (but working) markup.

Not used in the SVG space.

###### `options.allowDangerousCharacters`

Do not encode some characters which cause XSS vulnerabilities in older browsers (`boolean`, default: `false`). **Note**: Only set this if you completely trust the content.

###### `options.allowDangerousHtml`

Allow `raw` nodes and insert them as raw HTML. When falsey, encodes `raw` nodes (`boolean`, default: `false`). **Note**: Only set this if you completely trust the content.

## Security

Use of `hast-util-to-html` can open you up to a [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attack if the hast tree is unsafe. Use [`hast-util-santize`](https://github.com/rehypejs/rehype-sanitize) to make the hast tree safe.

## Related

- [`hast-util-sanitize`](https://github.com/syntax-tree/hast-util-sanitize) — Sanitize hast nodes
- [`rehype-stringify`](https://github.com/wooorm/rehype/tree/master/packages/rehype-stringify) — Wrapper around this project for [**rehype**](https://github.com/wooorm/rehype)

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hast-util-to-string/

### [fixtures/node_modules/hast-util-to-string/readme.md](fixtures/node_modules/hast-util-to-string/readme.md)

# hast-util-to-string

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

Get the plain-text value of a hast node.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-to-string

## Use

    var h = require("hastscript");
    var toString = require("hast-util-to-string");

    toString(h("p", "Alpha"));
    //=> 'Alpha'
    toString(h("div", [h("b", "Bold"), " and ", h("i", "italic"), "."]));
    //=> 'Bold and italic.'

## API

### `toString(node)`

Transform a node to a string.

## Contribute

See [`contributing.md`](https://github.com/syntax-tree/.github/blob/master/contributing.md) in [`rehypejs/.github`](https://github.com/rehypejs/.github) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hast-util-whitespace/

### [fixtures/node_modules/hast-util-whitespace/readme.md](fixtures/node_modules/hast-util-whitespace/readme.md)

# hast-util-whitespace

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility to check if a `node` is [_inter-element whitespace_](https://html.spec.whatwg.org/#space-separated-tokens).

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hast-util-whitespace

## Use

    var whitespace = require("hast-util-whitespace");

    whitespace({
      type: "element",
      tagName: "div",
      children: [],
    }); // => false

    whitespace({
      type: "text",
      value: "\t  \n",
    }); // => true

    whitespace({
      type: "text",
      value: "  text\f",
    }); // => false

## API

### `whitespace(node|value)`

Check if the given value is [_inter-element whitespace_](https://html.spec.whatwg.org/#space-separated-tokens).

###### Parameters

- `node` ([`Node`](https://github.com/syntax-tree/unist#node), optional) — Node to check
- `value` (`string`, optional) — Value to check

###### Returns

`boolean` — Whether the `value` is inter-element white-space: consisting of zero or more of space, tab (`\t`), line feed (`\n`), carriage return (`\r`), or form feed (`\f`). If `node` is passed it must be a [_text_](https://github.com/syntax-tree/hast#text) node.

## Security

`hast-util-whitespace` does not change the syntax tree so there are no openings for [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/hastscript/

### [fixtures/node_modules/hastscript/readme.md](fixtures/node_modules/hastscript/readme.md)

# hastscript

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**hast**](https://github.com/syntax-tree/hast) utility to create [_trees_](https://github.com/syntax-tree/unist#tree) in HTML or SVG.

Similar to [`hyperscript`](https://github.com/dominictarr/hyperscript), [`virtual-dom/h`](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript), [`React.createElement`](https://github.com/facebook/react), and [Vue’s `createElement`](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments), but for [**hast**](https://github.com/syntax-tree/hast).

Use [`unist-builder`](https://github.com/syntax-tree/unist-builder) to create any [**unist**](https://github.com/syntax-tree/unist) tree.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install hastscript

## Use

    var h = require("hastscript");
    var s = require("hastscript/svg");

    // Children as an array:
    console.log(
      h(".foo#some-id", [
        h("span", "some text"),
        h("input", { type: "text", value: "foo" }),
        h("a.alpha", { class: "bravo charlie", download: "download" }, [
          "delta",
          "echo",
        ]),
      ])
    );

    // Children as arguments:
    console.log(
      h(
        "form",
        { method: "POST" },
        h("input", { type: "text", name: "foo" }),
        h("input", { type: "text", name: "bar" }),
        h("input", { type: "submit", value: "send" })
      )
    );

    // SVG:
    console.log(
      s("svg", { xmlns: "http://www.w3.org/2000/svg", viewbox: "0 0 500 500" }, [
        s("title", "SVG `<circle>` element"),
        s("circle", { cx: 120, cy: 120, r: 100 }),
      ])
    );

Yields:

    {
      type: 'element',
      tagName: 'div',
      properties: {className: ['foo'], id: 'some-id'},
      children: [
        {
          type: 'element',
          tagName: 'span',
          properties: {},
          children: [{type: 'text', value: 'some text'}]
        },
        {
          type: 'element',
          tagName: 'input',
          properties: {type: 'text', value: 'foo'},
          children: []
        },
        {
          type: 'element',
          tagName: 'a',
          properties: {className: ['alpha', 'bravo', 'charlie'], download: true},
          children: [{type: 'text', value: 'delta'}, {type: 'text', value: 'echo'}]
        }
      ]
    }
    {
      type: 'element',
      tagName: 'form',
      properties: {method: 'POST'},
      children: [
        {
          type: 'element',
          tagName: 'input',
          properties: {type: 'text', name: 'foo'},
          children: []
        },
        {
          type: 'element',
          tagName: 'input',
          properties: {type: 'text', name: 'bar'},
          children: []
        },
        {
          type: 'element',
          tagName: 'input',
          properties: {type: 'submit', value: 'send'},
          children: []
        }
      ]
    }
    {
      type: 'element',
      tagName: 'svg',
      properties: {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500'},
      children: [
        {
          type: 'element',
          tagName: 'title',
          properties: {},
          children: [{type: 'text', value: 'SVG `<circle>` element'}]
        },
        {
          type: 'element',
          tagName: 'circle',
          properties: {cx: 120, cy: 120, r: 100},
          children: []
        }
      ]
    }

## API

### `h(selector?[, properties][, ...children])`

### `s(selector?[, properties][, ...children])`

DSL to create virtual [**hast**](https://github.com/syntax-tree/hast) [_trees_](https://github.com/syntax-tree/unist#tree) for HTML or SVG.

##### Parameters

###### `selector`

Simple CSS selector (`string`, optional). Can contain a tag name (`foo`), IDs (`#bar`), and classes (`.baz`). If there is no tag name in the selector, `h` defaults to a `div` element, and `s` to a `g` element. `selector` is parsed by [`hast-util-parse-selector`](https://github.com/syntax-tree/hast-util-parse-selector).

###### `properties`

Map of properties (`Object.<*>`, optional).

###### `children`

(Lists of) child nodes (`string`, `Node`, `Array.<string|Node>`, optional). When strings are encountered, they are mapped to [`text`](https://github.com/syntax-tree/hast#text) nodes.

##### Returns

[`Element`](https://github.com/syntax-tree/hast#element).

## Security

Use of `hastscript` can open you up to a [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attack as values are injected into the syntax tree. The following example shows how a script is injected that runs when loaded in a browser.

    var tree = { type: "root", children: [] };

    tree.children.push(h("script", "alert(1)"));

Yields:

    <script>
      alert(1);
    </script>

The following example shows how an image is injected that fails loading and therefore runs code in a browser.

    var tree = { type: "root", children: [] };

    // Somehow someone injected these properties instead of an expected `src` and
    // `alt`:
    var otherProps = { src: "x", onError: "alert(2)" };

    tree.children.push(h("img", { src: "default.png", ...otherProps }));

Yields:

    <img src="x" onerror="alert(2)" />

The following example shows how code can run in a browser because someone stored an object in a database instead of the expected string.

    var tree = { type: "root", children: [] };

    // Somehow this isn’t the expected `'wooorm'`.
    var username = {
      type: "element",
      tagName: "script",
      children: [{ type: "text", value: "alert(3)" }],
    };

    tree.children.push(h("span.handle", username));

Yields:

    <span class="handle"
      ><script>
        alert(3);
      </script></span
    >

Either do not use user input in `hastscript` or use [`hast-util-santize`](https://github.com/rehypejs/rehype-sanitize).

## Related

- [`unist-builder`](https://github.com/syntax-tree/unist-builder) — Create any unist tree
- [`hast-to-hyperscript`](https://github.com/syntax-tree/hast-to-hyperscript) — Convert a Node to React, Virtual DOM, Hyperscript, and more
- [`hast-util-from-dom`](https://github.com/syntax-tree/hast-util-from-dom) — Transform a DOM tree to hast
- [`hast-util-select`](https://github.com/syntax-tree/hast-util-select) — `querySelector`, `querySelectorAll`, and `matches`
- [`hast-util-to-html`](https://github.com/syntax-tree/hast-util-to-html) — Stringify nodes to HTML
- [`hast-util-to-dom`](https://github.com/syntax-tree/hast-util-to-dom) — Transform to a DOM tree

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/html-void-elements/

### [fixtures/node_modules/html-void-elements/readme.md](fixtures/node_modules/html-void-elements/readme.md)

# html-void-elements

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

List of known void HTML elements. Includes ancient (such as `nextid` and `basefont`) and modern (such as `img` and `meta`) tag names from the HTML living standard.

**Note**: there’s one special case: `menuitem`. W3C specifies it to be void, but WHATWG doesn’t. I suggest using the void form.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install html-void-elements

## Use

    var htmlVoidElements = require("html-void-elements");

    console.log(htmlVoidElements);

Yields:

    [
      "area",
      "base",
      "basefont",
      "bgsound",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "image",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "nextid",
      "param",
      "source",
      "track",
      "wbr",
    ];

## API

### `htmlVoidElements`

`Array.<string>` — List of lower-case tag names.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/inflight/

### [fixtures/node_modules/inflight/README.md](fixtures/node_modules/inflight/README.md)

# inflight

Add callbacks to requests in flight to avoid async duplication

## USAGE

    var inflight = require("inflight");

    // some request that does some stuff
    function req(key, callback) {
      // key is any random string.  like a url or filename or whatever.
      //
      // will return either a falsey value, indicating that the
      // request for this key is already in flight, or a new callback
      // which when called will call all callbacks passed to inflightk
      // with the same key
      callback = inflight(key, callback);

      // If we got a falsey value back, then there's already a req going
      if (!callback) return;

      // this is where you'd fetch the url or whatever
      // callback is also once()-ified, so it can safely be assigned
      // to multiple events etc.  First call wins.
      setTimeout(function () {
        callback(null, key);
      }, 100);
    }

    // only assigns a single setTimeout
    // when it dings, all cbs get called
    req("foo", cb1);
    req("foo", cb2);
    req("foo", cb3);
    req("foo", cb4);

fixtures/node_modules/inherits/

### [fixtures/node_modules/inherits/README.md](fixtures/node_modules/inherits/README.md)

Browser-friendly inheritance fully compatible with standard node.js [inherits](http://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor).

This package exports standard `inherits` from node.js `util` module in node environment, but also provides alternative browser-friendly implementation through [browser field](https://gist.github.com/shtylman/4339901). Alternative implementation is a literal copy of standard one located in standalone module to avoid requiring of `util`. It also has a shim for old browsers with no `Object.create` support.

While keeping you sure you are using standard `inherits` implementation in node.js environment, it allows bundlers such as [browserify](https://github.com/substack/node-browserify) to not include full `util` package to your client code if all you need is just `inherits` function. It worth, because browser shim for `util` package is large and `inherits` is often the single function you need from it.

It’s recommended to use this package instead of `require('util').inherits` for any code that has chances to be used not only in node.js but in browser too.

## usage

    var inherits = require("inherits");
    // then use exactly as the standard one

## note on version ~1.0

Version ~1.0 had completely different motivation and is not compatible neither with 2.0 nor with standard node.js `inherits`.

If you are using version ~1.0 and planning to switch to ~2.0, be careful:

- new version uses `super_` instead of `super` for referencing superclass
- new version overwrites current prototype while old one preserves any existing fields on it

fixtures/node_modules/is-alphabetical/

### [fixtures/node_modules/is-alphabetical/readme.md](fixtures/node_modules/is-alphabetical/readme.md)

# is-alphabetical

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Check if a character is alphabetical.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install is-alphabetical

## Use

    var alphabetical = require("is-alphabetical");

    alphabetical("a"); // => true
    alphabetical("B"); // => true
    alphabetical("0"); // => false
    alphabetical("💩"); // => false

## API

### `alphabetical(character|code)`

Check whether the given character code (`number`), or the character code at the first position (`string`), is alphabetical.

## Related

- [`is-decimal`](https://github.com/wooorm/is-decimal)
- [`is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
- [`is-alphanumerical`](https://github.com/wooorm/is-alphanumerical)
- [`is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
- [`is-word-character`](https://github.com/wooorm/is-word-character)

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/is-alphanumerical/

### [fixtures/node_modules/is-alphanumerical/readme.md](fixtures/node_modules/is-alphanumerical/readme.md)

# is-alphanumerical

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Check if a character is alphanumerical (`[a-zA-Z0-9]`).

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install is-alphanumerical

## Use

    var alphanumerical = require("is-alphanumerical");

    alphanumerical("a"); // => true
    alphanumerical("Z"); // => true
    alphanumerical("0"); // => true
    alphanumerical(" "); // => false
    alphanumerical("💩"); // => false

## API

### `alphanumerical(character)`

Check whether the given character code (`number`), or the character code at the first position (`string`), is alphanumerical.

## Related

- [`is-alphabetical`](https://github.com/wooorm/is-alphabetical)
- [`is-decimal`](https://github.com/wooorm/is-decimal)
- [`is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
- [`is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
- [`is-word-character`](https://github.com/wooorm/is-word-character)

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/is-decimal/

### [fixtures/node_modules/is-decimal/readme.md](fixtures/node_modules/is-decimal/readme.md)

# is-decimal

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Check if a character is decimal.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install is-decimal

## Use

    var decimal = require("is-decimal");

    decimal("0"); // => true
    decimal("9"); // => true
    decimal("a"); // => false
    decimal("💩"); // => false

## API

### `decimal(character|code)`

Check whether the given character code (`number`), or the character code at the first position (`string`), is decimal.

## Related

- [`is-alphabetical`](https://github.com/wooorm/is-alphabetical)
- [`is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
- [`is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
- [`is-word-character`](https://github.com/wooorm/is-word-character)

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/is-hexadecimal/

### [fixtures/node_modules/is-hexadecimal/readme.md](fixtures/node_modules/is-hexadecimal/readme.md)

# is-hexadecimal

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Check if a character is hexadecimal.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install is-hexadecimal

## Use

    var hexadecimal = require("is-hexadecimal");

    hexadecimal("a"); // => true
    hexadecimal("0"); // => true
    hexadecimal("G"); // => false
    hexadecimal("💩"); // => false

## API

### `hexadecimal(character|code)`

Check whether the given character code (`number`), or the character code at the first position (`string`), is hexadecimal.

## Related

- [`is-alphabetical`](https://github.com/wooorm/is-alphabetical)
- [`is-alphanumerical`](https://github.com/wooorm/is-alphabetical)
- [`is-decimal`](https://github.com/wooorm/is-decimal)
- [`is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)
- [`is-word-character`](https://github.com/wooorm/is-word-character)

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/minimatch/

### [fixtures/node_modules/minimatch/README.md](fixtures/node_modules/minimatch/README.md)

# minimatch

A minimal matching utility.

[![Build Status](https://secure.travis-ci.org/isaacs/minimatch.svg)](http://travis-ci.org/isaacs/minimatch)

This is the matching library used internally by npm.

It works by converting glob expressions into JavaScript `RegExp` objects.

## Usage

    var minimatch = require("minimatch");

    minimatch("bar.foo", "*.foo"); // true!
    minimatch("bar.foo", "*.bar"); // false!
    minimatch("bar.foo", "*.+(bar|foo)", { debug: true }); // true, and noisy!

## Features

Supports these glob features:

- Brace Expansion
- Extended glob matching
- “Globstar” `**` matching

See:

- `man sh`
- `man bash`
- `man 3 fnmatch`
- `man 5 gitignore`

## Minimatch Class

Create a minimatch object by instantiating the `minimatch.Minimatch` class.

    var Minimatch = require("minimatch").Minimatch;
    var mm = new Minimatch(pattern, options);

### Properties

- `pattern` The original pattern the minimatch object represents.
- `options` The options supplied to the constructor.
- `set` A 2-dimensional array of regexp or string expressions. Each row in the array corresponds to a brace-expanded pattern. Each item in the row corresponds to a single path-part. For example, the pattern `{a,b/c}/d` would expand to a set of patterns like:

        [ [ a, d ]
        , [ b, c, d ] ]

  If a portion of the pattern doesn’t have any “magic” in it (that is, it’s something like `"foo"` rather than `fo*o?`), then it will be left as a string rather than converted to a regular expression.

- `regexp` Created by the `makeRe` method. A single regular expression expressing the entire pattern. This is useful in cases where you wish to use the pattern somewhat like `fnmatch(3)` with `FNM_PATH` enabled.
- `negate` True if the pattern is negated.
- `comment` True if the pattern is a comment.
- `empty` True if the pattern is `""`.

### Methods

- `makeRe` Generate the `regexp` member if necessary, and return it. Will return `false` if the pattern is invalid.
- `match(fname)` Return true if the filename matches the pattern, or false otherwise.
- `matchOne(fileArray, patternArray, partial)` Take a `/`-split filename, and match it against a single row in the `regExpSet`. This method is mainly for internal use, but is exposed so that it can be used by a glob-walker that needs to avoid excessive filesystem calls.

All other methods are internal, and will be called as necessary.

### minimatch(path, pattern, options)

Main export. Tests a path against the pattern using the options.

    var isJS = minimatch(file, "*.js", { matchBase: true });

### minimatch.filter(pattern, options)

Returns a function that tests its supplied argument, suitable for use with `Array.filter`. Example:

    var javascripts = fileList.filter(
      minimatch.filter("*.js", { matchBase: true })
    );

### minimatch.match(list, pattern, options)

Match against the list of files, in the style of fnmatch or glob. If nothing is matched, and options.nonull is set, then return a list containing the pattern itself.

    var javascripts = minimatch.match(fileList, "*.js", {matchBase: true}))

### minimatch.makeRe(pattern, options)

Make a regular expression object from the pattern.

## Options

All options are `false` by default.

### debug

Dump a ton of stuff to stderr.

### nobrace

Do not expand `{a,b}` and `{1..3}` brace sets.

### noglobstar

Disable `**` matching against multiple folder names.

### dot

Allow patterns to match filenames starting with a period, even if the pattern does not explicitly have a period in that spot.

Note that by default, `a/**/b` will **not** match `a/.d/b`, unless `dot` is set.

### noext

Disable “extglob” style patterns like `+(a|b)`.

### nocase

Perform a case-insensitive match.

### nonull

When a match is not found by `minimatch.match`, return a list containing the pattern itself if this option is set. When not set, an empty list is returned if there are no matches.

### matchBase

If set, then patterns without slashes will be matched against the basename of the path if it contains slashes. For example, `a?b` would match the path `/xyz/123/acb`, but not `/xyz/acb/123`.

### nocomment

Suppress the behavior of treating `#` at the start of a pattern as a comment.

### nonegate

Suppress the behavior of treating a leading `!` character as negation.

### flipNegate

Returns from negate expressions the same as if they were not negated. (Ie, true on a hit, false on a miss.)

## Comparisons to other fnmatch/glob implementations

While strict compliance with the existing standards is a worthwhile goal, some discrepancies exist between minimatch and other implementations, and are intentional.

If the pattern starts with a `!` character, then it is negated. Set the `nonegate` flag to suppress this behavior, and treat leading `!` characters normally. This is perhaps relevant if you wish to start the pattern with a negative extglob pattern like `!(a|B)`. Multiple `!` characters at the start of a pattern will negate the pattern multiple times.

If a pattern starts with `#`, then it is treated as a comment, and will not match anything. Use `\#` to match a literal `#` at the start of a line, or set the `nocomment` flag to suppress this behavior.

The double-star character `**` is supported by default, unless the `noglobstar` flag is set. This is supported in the manner of bsdglob and bash 4.1, where `**` only has special significance if it is the only thing in a path part. That is, `a/**/b` will match `a/x/y/b`, but `a/**b` will not.

If an escaped pattern has no matches, and the `nonull` flag is set, then minimatch.match returns the pattern as-provided, rather than interpreting the character escapes. For example, `minimatch.match([], "\\*a\\?")` will return `"\\*a\\?"` rather than `"*a?"`. This is akin to setting the `nullglob` option in bash, except that it does not resolve escaped pattern characters.

If brace expansion is not disabled, then it is performed before any other interpretation of the glob pattern. Thus, a pattern like `+(a|{b),c)}`, which would not be valid in bash or zsh, is expanded **first** into the set of `+(a|b)` and `+(a|c)`, and those patterns are checked for validity. Since those two are valid, matching proceeds.

fixtures/node_modules/newsapi/

### [fixtures/node_modules/newsapi/README.md](fixtures/node_modules/newsapi/README.md)

# newsapi

A node interface for NewsAPI.

[![npm](https://img.shields.io/npm/v/newsapi.svg)](https://www.npmjs.com/package/newsapi) [![npm](https://img.shields.io/npm/dt/newsapi.svg)](https://www.npmjs.com/package/newsapi) [![Build Status](https://travis-ci.org/bzarras/newsapi.svg?branch=master)](https://travis-ci.org/bzarras/newsapi)

Up-to-date news headlines and metadata in JSON from 70+ popular news sites. Powered by NewsAPI.org.

You will need an API key from <https://newsapi.org>.

Please look at their [documentation](https://newsapi.org/docs) to see how to use the API. The convenience functions provided by this module simply pass their options along as querystring parameters to the REST API, so the [documentation](https://newsapi.org/docs) is totally valid. There are some usage examples below to see how these options should be passed in.

If you use this in a project, add a ‘powered by’ attribution link back to NewsAPI.org

## Add to your project

    $ npm install newsapi --save

## Test

    $ API_KEY=<your api key> npm test

## Example usage of v2 API

All methods support promises and node-style callbacks.

    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("YOUR_API_KEY");

    // To query top headlines
    // All options passed to topHeadlines are optional, but you need to include at least one of them
    newsapi.v2
      .topHeadlines({
        q: "trump",
        category: "politics",
        language: "en",
        country: "us",
      })
      .then((response) => {
        console.log(response);
        /*
        {
          status: "ok",
          articles: [...]
        }
      */
      });

    // To query everything
    // You must include at least one q, source, or domain
    newsapi.v2
      .everything({
        q: "trump",
        sources: "bbc-news,the-verge",
        domains: "bbc.co.uk,techcrunch.com",
        from: "2017-12-01",
        to: "2017-12-12",
        language: "en",
        sortBy: "relevancy",
        page: 2,
      })
      .then((response) => {
        console.log(response);
        /*
        {
          status: "ok",
          articles: [...]
        }
      */
      });

    // To query sources
    // All options are optional
    newsapi.v2
      .sources({
        category: "technology",
        language: "en",
        country: "us",
      })
      .then((response) => {
        console.log(response);
        /*
        {
          status: "ok",
          sources: [...]
        }
      */
      });

## Example usage of v1 legacy API

    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("YOUR_API_KEY");

    // To query articles:
    newsapi
      .articles({
        source: "associated-press", // required
        sortBy: "top", // optional
      })
      .then((articlesResponse) => {
        console.log(articlesResponse);
        /*
        {
          status: "ok",
          source: "associated-press",
          sortBy: "top",
          articles: [...]
        }
       */
      });

    // To query sources:
    newsapi
      .sources({
        category: "technology", // optional
        language: "en", // optional
        country: "us", // optional
      })
      .then((sourcesResponse) => {
        console.log(sourcesResponse);
        /*
        {
          status: "ok",
          sources: [...]
        }
      */
      });

    // For both methods you can also use traditional Node callback style:
    newsapi.articles(
      {
        source: "associated-press",
        sortBy: "top",
      },
      (err, articlesResponse) => {
        if (err) console.error(err);
        else console.log(articlesResponse);
      }
    );

## Caching

[NewsAPI’s caching behavior](https://newsapi.org/docs/caching). You can disable caching on a request level by adding the `noCache: true` option to your queries.

    newsapi.v2.everything({
      sources: 'bbc-news'
    }, {
      noCache: true
    }).then(response => {
      ...
    });

### [fixtures/node_modules/newsapi/RELEASE.md](fixtures/node_modules/newsapi/RELEASE.md)

# Release Notes

## v2.4.0

Date: 2018-09-16  
Type: Minor  
This release makes the following changes, updates, and bug fixes:

1.  Add babel build step to provide compatibility with ES5 environments

## v2.3.0

Date: 2018-07-31  
Type: Minor  
This release makes the following changes, updates, and bug fixes:

1.  Update mocha to eliminate vulnerabilities.
2.  Remove use of bluebird. Use native promises instead.

## v2.2.2

Date: 2018-03-26  
Type: Patch  
This release makes the following changes, updates, and bug fixes:

1.  Remove use of Promise.spread() to improve compatibility with react native.

## v2.2.1

Date: 2018-03-24  
Type: Patch  
This release makes the following changes, updates, and bug fixes:

1.  Switch from `request` to `node-fetch` for http requests in order to support more platforms.

fixtures/node_modules/node-fetch/

### [fixtures/node_modules/node-fetch/CHANGELOG.md](fixtures/node_modules/node-fetch/CHANGELOG.md)

# Changelog

# 2.x release

## v2.6.0

- Enhance: `options.agent`, it now accepts a function that returns custom http(s).Agent instance based on current URL, see readme for more information.
- Fix: incorrect `Content-Length` was returned for stream body in 2.5.0 release; note that `node-fetch` doesn’t calculate content length for stream body.
- Fix: `Response.url` should return empty string instead of `null` by default.

## v2.5.0

- Enhance: `Response` object now includes `redirected` property.
- Enhance: `fetch()` now accepts third-party `Blob` implementation as body.
- Other: disable `package-lock.json` generation as we never commit them.
- Other: dev dependency update.
- Other: readme update.

## v2.4.1

- Fix: `Blob` import rule for node &lt; 10, as `Readable` isn’t a named export.

## v2.4.0

- Enhance: added `Brotli` compression support (using node’s zlib).
- Enhance: updated `Blob` implementation per spec.
- Fix: set content type automatically for `URLSearchParams`.
- Fix: `Headers` now reject empty header names.
- Fix: test cases, as node 12+ no longer accepts invalid header response.

## v2.3.0

- Enhance: added `AbortSignal` support, with README example.
- Enhance: handle invalid `Location` header during redirect by rejecting them explicitly with `FetchError`.
- Fix: update `browser.js` to support react-native environment, where `self` isn’t available globally.

## v2.2.1

- Fix: `compress` flag shouldn’t overwrite existing `Accept-Encoding` header.
- Fix: multiple `import` rules, where `PassThrough` etc. doesn’t have a named export when using node &lt;10 and `--exerimental-modules` flag.
- Other: Better README.

## v2.2.0

- Enhance: Support all `ArrayBuffer` view types
- Enhance: Support Web Workers
- Enhance: Support Node.js’ `--experimental-modules` mode; deprecate `.es.js` file
- Fix: Add `__esModule` property to the exports object
- Other: Better example in README for writing response to a file
- Other: More tests for Agent

## v2.1.2

- Fix: allow `Body` methods to work on `ArrayBuffer`-backed `Body` objects
- Fix: reject promise returned by `Body` methods when the accumulated `Buffer` exceeds the maximum size
- Fix: support custom `Host` headers with any casing
- Fix: support importing `fetch()` from TypeScript in `browser.js`
- Fix: handle the redirect response body properly

## v2.1.1

Fix packaging errors in v2.1.0.

## v2.1.0

- Enhance: allow using ArrayBuffer as the `body` of a `fetch()` or `Request`
- Fix: store HTTP headers of a `Headers` object internally with the given case, for compatibility with older servers that incorrectly treated header names in a case-sensitive manner
- Fix: silently ignore invalid HTTP headers
- Fix: handle HTTP redirect responses without a `Location` header just like non-redirect responses
- Fix: include bodies when following a redirection when appropriate

## v2.0.0

This is a major release. Check [our upgrade guide](https://github.com/bitinn/node-fetch/blob/master/UPGRADE-GUIDE.md) for an overview on some key differences between v1 and v2.

### General changes

- Major: Node.js 0.10.x and 0.12.x support is dropped
- Major: `require('node-fetch/lib/response')` etc. is now unsupported; use `require('node-fetch').Response` or ES6 module imports
- Enhance: start testing on Node.js v4.x, v6.x, v8.x LTS, as well as v9.x stable
- Enhance: use Rollup to produce a distributed bundle (less memory overhead and faster startup)
- Enhance: make `Object.prototype.toString()` on Headers, Requests, and Responses return correct class strings
- Other: rewrite in ES2015 using Babel
- Other: use Codecov for code coverage tracking
- Other: update package.json script for npm 5
- Other: `encoding` module is now optional (alpha.7)
- Other: expose browser.js through package.json, avoid bundling mishaps (alpha.9)
- Other: allow TypeScript to `import` node-fetch by exposing default (alpha.9)

### HTTP requests

- Major: overwrite user’s `Content-Length` if we can be sure our information is correct (per spec)
- Fix: errors in a response are caught before the body is accessed
- Fix: support WHATWG URL objects, created by `whatwg-url` package or `require('url').URL` in Node.js 7+

### Response and Request classes

- Major: `response.text()` no longer attempts to detect encoding, instead always opting for UTF-8 (per spec); use `response.textConverted()` for the v1 behavior
- Major: make `response.json()` throw error instead of returning an empty object on 204 no-content respose (per spec; reverts behavior changed in v1.6.2)
- Major: internal methods are no longer exposed
- Major: throw error when a `GET` or `HEAD` Request is constructed with a non-null body (per spec)
- Enhance: add `response.arrayBuffer()` (also applies to Requests)
- Enhance: add experimental `response.blob()` (also applies to Requests)
- Enhance: `URLSearchParams` is now accepted as a body
- Enhance: wrap `response.json()` json parsing error as `FetchError`
- Fix: fix Request and Response with `null` body

### Headers class

- Major: remove `headers.getAll()`; make `get()` return all headers delimited by commas (per spec)
- Enhance: make Headers iterable
- Enhance: make Headers constructor accept an array of tuples
- Enhance: make sure header names and values are valid in HTTP
- Fix: coerce Headers prototype function parameters to strings, where applicable

### Documentation

- Enhance: more comprehensive API docs
- Enhance: add a list of default headers in README

# 1.x release

## backport releases (v1.7.0 and beyond)

See [changelog on 1.x branch](https://github.com/bitinn/node-fetch/blob/1.x/CHANGELOG.md) for details.

## v1.6.3

- Enhance: error handling document to explain `FetchError` design
- Fix: support `form-data` 2.x releases (requires `form-data` &gt;= 2.1.0)

## v1.6.2

- Enhance: minor document update
- Fix: response.json() returns empty object on 204 no-content response instead of throwing a syntax error

## v1.6.1

- Fix: if `res.body` is a non-stream non-formdata object, we will call `body.toString` and send it as a string
- Fix: `counter` value is incorrectly set to `follow` value when wrapping Request instance
- Fix: documentation update

## v1.6.0

- Enhance: added `res.buffer()` api for convenience, it returns body as a Node.js buffer
- Enhance: better old server support by handling raw deflate response
- Enhance: skip encoding detection for non-HTML/XML response
- Enhance: minor document update
- Fix: HEAD request doesn’t need decompression, as body is empty
- Fix: `req.body` now accepts a Node.js buffer

## v1.5.3

- Fix: handle 204 and 304 responses when body is empty but content-encoding is gzip/deflate
- Fix: allow resolving response and cloned response in any order
- Fix: avoid setting `content-length` when `form-data` body use streams
- Fix: send DELETE request with content-length when body is present
- Fix: allow any url when calling new Request, but still reject non-http(s) url in fetch

## v1.5.2

- Fix: allow node.js core to handle keep-alive connection pool when passing a custom agent

## v1.5.1

- Fix: redirect mode `manual` should work even when there is no redirection or broken redirection

## v1.5.0

- Enhance: rejected promise now use custom `Error` (thx to <span class="citation" data-cites="pekeler">@pekeler</span>)
- Enhance: `FetchError` contains `err.type` and `err.code`, allows for better error handling (thx to <span class="citation" data-cites="pekeler">@pekeler</span>)
- Enhance: basic support for redirect mode `manual` and `error`, allows for location header extraction (thx to <span class="citation" data-cites="jimmywarting">@jimmywarting</span> for the initial PR)

## v1.4.1

- Fix: wrapping Request instance with FormData body again should preserve the body as-is

## v1.4.0

- Enhance: Request and Response now have `clone` method (thx to <span class="citation" data-cites="kirill-konshin">@kirill-konshin</span> for the initial PR)
- Enhance: Request and Response now have proper string and buffer body support (thx to <span class="citation" data-cites="kirill-konshin">@kirill-konshin</span>)
- Enhance: Body constructor has been refactored out (thx to <span class="citation" data-cites="kirill-konshin">@kirill-konshin</span>)
- Enhance: Headers now has `forEach` method (thx to <span class="citation" data-cites="tricoder42">@tricoder42</span>)
- Enhance: back to 100% code coverage
- Fix: better form-data support (thx to <span class="citation" data-cites="item4">@item4</span>)
- Fix: better character encoding detection under chunked encoding (thx to <span class="citation" data-cites="dsuket">@dsuket</span> for the initial PR)

## v1.3.3

- Fix: make sure `Content-Length` header is set when body is string for POST/PUT/PATCH requests
- Fix: handle body stream error, for cases such as incorrect `Content-Encoding` header
- Fix: when following certain redirects, use `GET` on subsequent request per Fetch Spec
- Fix: `Request` and `Response` constructors now parse headers input using `Headers`

## v1.3.2

- Enhance: allow auto detect of form-data input (no `FormData` spec on node.js, this is form-data specific feature)

## v1.3.1

- Enhance: allow custom host header to be set (server-side only feature, as it’s a forbidden header on client-side)

## v1.3.0

- Enhance: now `fetch.Request` is exposed as well

## v1.2.1

- Enhance: `Headers` now normalized `Number` value to `String`, prevent common mistakes

## v1.2.0

- Enhance: now fetch.Headers and fetch.Response are exposed, making testing easier

## v1.1.2

- Fix: `Headers` should only support `String` and `Array` properties, and ignore others

## v1.1.1

- Enhance: now req.headers accept both plain object and `Headers` instance

## v1.1.0

- Enhance: timeout now also applies to response body (in case of slow response)
- Fix: timeout is now cleared properly when fetch is done/has failed

## v1.0.6

- Fix: less greedy content-type charset matching

## v1.0.5

- Fix: when `follow = 0`, fetch should not follow redirect
- Enhance: update tests for better coverage
- Enhance: code formatting
- Enhance: clean up doc

## v1.0.4

- Enhance: test iojs support
- Enhance: timeout attached to socket event only fire once per redirect

## v1.0.3

- Fix: response size limit should reject large chunk
- Enhance: added character encoding detection for xml, such as rss/atom feed (encoding in DTD)

## v1.0.2

- Fix: added res.ok per spec change

## v1.0.0

- Enhance: better test coverage and doc

# 0.x release

## v0.1

- Major: initial public release

### [fixtures/node_modules/node-fetch/LICENSE.md](fixtures/node_modules/node-fetch/LICENSE.md)

The MIT License (MIT)

Copyright (c) 2016 David Frank

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### [fixtures/node_modules/node-fetch/README.md](fixtures/node_modules/node-fetch/README.md)

# node-fetch

[![npm version](https://flat.badgen.net/npm/v/node-fetch)](https://www.npmjs.com/package/node-fetch) [![build status](https://flat.badgen.net/travis/bitinn/node-fetch)](https://travis-ci.org/bitinn/node-fetch) [![coverage status](https://flat.badgen.net/codecov/c/github/bitinn/node-fetch/master)](https://codecov.io/gh/bitinn/node-fetch) [![install size](https://flat.badgen.net/packagephobia/install/node-fetch)](https://packagephobia.now.sh/result?p=node-fetch)

A light-weight module that brings `window.fetch` to Node.js

(We are looking for [v2 maintainers and collaborators](https://github.com/bitinn/node-fetch/issues/567))

- [Motivation](#motivation)
- [Features](#features)
- [Difference from client-side fetch](#difference-from-client-side-fetch)
- [Installation](#installation)
- [Loading and configuring the module](#loading-and-configuring-the-module)
- [Common Usage](#common-usage)
  - [Plain text or HTML](#plain-text-or-html)
  - [JSON](#json)
  - [Simple Post](#simple-post)
  - [Post with JSON](#post-with-json)
  - [Post with form parameters](#post-with-form-parameters)
  - [Handling exceptions](#handling-exceptions)
  - [Handling client and server errors](#handling-client-and-server-errors)
- [Advanced Usage](#advanced-usage)
  - [Streams](#streams)
  - [Buffer](#buffer)
  - [Accessing Headers and other Meta data](#accessing-headers-and-other-meta-data)
  - [Extract Set-Cookie Header](#extract-set-cookie-header)
  - [Post data using a file stream](#post-data-using-a-file-stream)
  - [Post with form-data (detect multipart)](#post-with-form-data-detect-multipart)
  - [Request cancellation with AbortSignal](#request-cancellation-with-abortsignal)
- [API](#api)
  - [fetch(url\[, options\])](#fetchurl-options)
  - [Options](#options)
  - [Class: Request](#class-request)
  - [Class: Response](#class-response)
  - [Class: Headers](#class-headers)
  - [Interface: Body](#interface-body)
  - [Class: FetchError](#class-fetcherror)
- [License](#license)
- [Acknowledgement](#acknowledgement)

## Motivation

Instead of implementing `XMLHttpRequest` in Node.js to run browser-specific [Fetch polyfill](https://github.com/github/fetch), why not go from native `http` to `fetch` API directly? Hence `node-fetch`, minimal code for a `window.fetch` compatible API on Node.js runtime.

See Matt Andrews’ [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) or Leonardo Quixada’s [cross-fetch](https://github.com/lquixada/cross-fetch) for isomorphic usage (exports `node-fetch` for server-side, `whatwg-fetch` for client-side).

## Features

- Stay consistent with `window.fetch` API.
- Make conscious trade-off when following [WHATWG fetch spec](https://fetch.spec.whatwg.org/) and [stream spec](https://streams.spec.whatwg.org/) implementation details, document known differences.
- Use native promise, but allow substituting it with \[insert your favorite promise library\].
- Use native Node streams for body, on both request and response.
- Decode content encoding (gzip/deflate) properly, and convert string output (such as `res.text()` and `res.json()`) to UTF-8 automatically.
- Useful extensions such as timeout, redirect limit, response size limit, [explicit errors](ERROR-HANDLING.md) for troubleshooting.

## Difference from client-side fetch

- See [Known Differences](LIMITS.md) for details.
- If you happen to use a missing feature that `window.fetch` offers, feel free to open an issue.
- Pull requests are welcomed too!

## Installation

Current stable release (`2.x`)

    $ npm install node-fetch --save

## Loading and configuring the module

We suggest you load the module via `require`, pending the stabalizing of es modules in node:

    const fetch = require("node-fetch");

If you are using a Promise library other than native, set it through fetch.Promise:

    const Bluebird = require("bluebird");

    fetch.Promise = Bluebird;

## Common Usage

NOTE: The documentation below is up-to-date with `2.x` releases, [see `1.x` readme](https://github.com/bitinn/node-fetch/blob/1.x/README.md), [changelog](https://github.com/bitinn/node-fetch/blob/1.x/CHANGELOG.md) and [2.x upgrade guide](UPGRADE-GUIDE.md) for the differences.

#### Plain text or HTML

    fetch("https://github.com/")
      .then((res) => res.text())
      .then((body) => console.log(body));

#### JSON

    fetch("https://api.github.com/users/github")
      .then((res) => res.json())
      .then((json) => console.log(json));

#### Simple Post

    fetch("https://httpbin.org/post", { method: "POST", body: "a=1" })
      .then((res) => res.json()) // expecting a json response
      .then((json) => console.log(json));

#### Post with JSON

    const body = { a: 1 };

    fetch("https://httpbin.org/post", {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

#### Post with form parameters

`URLSearchParams` is available in Node.js as of v7.5.0. See [official documentation](https://nodejs.org/api/url.html#url_class_urlsearchparams) for more usage methods.

NOTE: The `Content-Type` header is only set automatically to `x-www-form-urlencoded` when an instance of `URLSearchParams` is given as such:

    const { URLSearchParams } = require("url");

    const params = new URLSearchParams();
    params.append("a", 1);

    fetch("https://httpbin.org/post", { method: "POST", body: params })
      .then((res) => res.json())
      .then((json) => console.log(json));

#### Handling exceptions

NOTE: 3xx-5xx responses are _NOT_ exceptions, and should be handled in `then()`, see the next section.

Adding a catch to the fetch promise chain will catch _all_ exceptions, such as errors originating from node core libraries, like network errors, and operational errors which are instances of FetchError. See the [error handling document](ERROR-HANDLING.md) for more details.

    fetch("https://domain.invalid/").catch((err) => console.error(err));

#### Handling client and server errors

It is common to create a helper function to check that the response contains no client (4xx) or server (5xx) error responses:

    function checkStatus(res) {
      if (res.ok) {
        // res.status >= 200 && res.status < 300
        return res;
      } else {
        throw MyCustomError(res.statusText);
      }
    }

    fetch("https://httpbin.org/status/400")
      .then(checkStatus)
      .then((res) => console.log("will not get here..."));

## Advanced Usage

#### Streams

The “Node.js way” is to use streams when possible:

    fetch(
      "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
    ).then((res) => {
      const dest = fs.createWriteStream("./octocat.png");
      res.body.pipe(dest);
    });

#### Buffer

If you prefer to cache binary data in full, use buffer(). (NOTE: buffer() is a `node-fetch` only API)

    const fileType = require("file-type");

    fetch("https://assets-cdn.github.com/images/modules/logos_page/Octocat.png")
      .then((res) => res.buffer())
      .then((buffer) => fileType(buffer))
      .then((type) => {
        /* ... */
      });

#### Accessing Headers and other Meta data

    fetch("https://github.com/").then((res) => {
      console.log(res.ok);
      console.log(res.status);
      console.log(res.statusText);
      console.log(res.headers.raw());
      console.log(res.headers.get("content-type"));
    });

#### Extract Set-Cookie Header

Unlike browsers, you can access raw `Set-Cookie` headers manually using `Headers.raw()`, this is a `node-fetch` only API.

    fetch(url).then((res) => {
      // returns an array of values, instead of a string of comma-separated values
      console.log(res.headers.raw()["set-cookie"]);
    });

#### Post data using a file stream

    const { createReadStream } = require("fs");

    const stream = createReadStream("input.txt");

    fetch("https://httpbin.org/post", { method: "POST", body: stream })
      .then((res) => res.json())
      .then((json) => console.log(json));

#### Post with form-data (detect multipart)

    const FormData = require("form-data");

    const form = new FormData();
    form.append("a", 1);

    fetch("https://httpbin.org/post", { method: "POST", body: form })
      .then((res) => res.json())
      .then((json) => console.log(json));

    // OR, using custom headers
    // NOTE: getHeaders() is non-standard API

    const form = new FormData();
    form.append("a", 1);

    const options = {
      method: "POST",
      body: form,
      headers: form.getHeaders(),
    };

    fetch("https://httpbin.org/post", options)
      .then((res) => res.json())
      .then((json) => console.log(json));

#### Request cancellation with AbortSignal

> NOTE: You may only cancel streamed requests on Node &gt;= v8.0.0

You may cancel requests with `AbortController`. A suggested implementation is [`abort-controller`](https://www.npmjs.com/package/abort-controller).

An example of timing out a request after 150ms could be achieved as follows:

    import AbortController from "abort-controller";

    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
    }, 150);

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then(
        (data) => {
          useData(data);
        },
        (err) => {
          if (err.name === "AbortError") {
            // request was aborted
          }
        }
      )
      .finally(() => {
        clearTimeout(timeout);
      });

See [test cases](https://github.com/bitinn/node-fetch/blob/master/test/test.js) for more examples.

## API

### fetch(url\[, options\])

- `url` A string representing the URL for fetching
- `options` [Options](#fetch-options) for the HTTP(S) request
- Returns: `Promise<Response>`

Perform an HTTP(S) fetch.

`url` should be an absolute url, such as `https://example.com/`. A path-relative URL (`/file/under/root`) or protocol-relative URL (`//can-be-http-or-https.com/`) will result in a rejected promise.

<span id="fetch-options"></span>

### Options

The default values are shown after each option key.

    {
        // These properties are part of the Fetch Standard
        method: 'GET',
        headers: {},        // request headers. format is the identical to that accepted by the Headers constructor (see below)
        body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
        redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect
        signal: null,       // pass an instance of AbortSignal to optionally abort requests

        // The following properties are node-fetch extensions
        follow: 20,         // maximum redirect count. 0 to not follow redirect
        timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies). Signal is recommended instead.
        compress: true,     // support gzip/deflate content encoding. false to disable
        size: 0,            // maximum response body size in bytes. 0 to disable
        agent: null         // http(s).Agent instance or function that returns an instance (see below)
    }

##### Default Headers

If no values are set, the following request headers will be sent automatically:

<table><thead><tr class="header"><th>Header</th><th>Value</th></tr></thead><tbody><tr class="odd"><td><code>Accept-Encoding</code></td><td><code>gzip,deflate</code> <em>(when <code>options.compress === true</code>)</em></td></tr><tr class="even"><td><code>Accept</code></td><td><code>*/*</code></td></tr><tr class="odd"><td><code>Connection</code></td><td><code>close</code> <em>(when no <code>options.agent</code> is present)</em></td></tr><tr class="even"><td><code>Content-Length</code></td><td><em>(automatically calculated, if possible)</em></td></tr><tr class="odd"><td><code>Transfer-Encoding</code></td><td><code>chunked</code> <em>(when <code>req.body</code> is a stream)</em></td></tr><tr class="even"><td><code>User-Agent</code></td><td><code>node-fetch/1.0 (+https://github.com/bitinn/node-fetch)</code></td></tr></tbody></table>

Note: when `body` is a `Stream`, `Content-Length` is not set automatically.

##### Custom Agent

The `agent` option allows you to specify networking related options that’s out of the scope of Fetch. Including and not limit to:

- Support self-signed certificate
- Use only IPv4 or IPv6
- Custom DNS Lookup

See [`http.Agent`](https://nodejs.org/api/http.html#http_new_agent_options) for more information.

In addition, `agent` option accepts a function that returns http(s).Agent instance given current [URL](https://nodejs.org/api/url.html), this is useful during a redirection chain across HTTP and HTTPS protocol.

    const httpAgent = new http.Agent({
      keepAlive: true,
    });
    const httpsAgent = new https.Agent({
      keepAlive: true,
    });

    const options = {
      agent: function (_parsedURL) {
        if (_parsedURL.protocol == "http:") {
          return httpAgent;
        } else {
          return httpsAgent;
        }
      },
    };

<span id="class-request"></span>

### Class: Request

An HTTP(S) request containing information about URL, method, headers, and the body. This class implements the [Body](#iface-body) interface.

Due to the nature of Node.js, the following properties are not implemented at this moment:

- `type`
- `destination`
- `referrer`
- `referrerPolicy`
- `mode`
- `credentials`
- `cache`
- `integrity`
- `keepalive`

The following node-fetch extension properties are provided:

- `follow`
- `compress`
- `counter`
- `agent`

See [options](#fetch-options) for exact meaning of these extensions.

#### new Request(input\[, options\])

<span class="small">_(spec-compliant)_</span>

- `input` A string representing a URL, or another `Request` (which will be cloned)
- `options` \[Options\]\[\#fetch-options\] for the HTTP(S) request

Constructs a new `Request` object. The constructor is identical to that in the [browser](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request).

In most cases, directly `fetch(url, options)` is simpler than creating a `Request` object.

<span id="class-response"></span>

### Class: Response

An HTTP(S) response. This class implements the [Body](#iface-body) interface.

The following properties are not implemented in node-fetch at this moment:

- `Response.error()`
- `Response.redirect()`
- `type`
- `trailer`

#### new Response(\[body\[, options\]\])

<span class="small">_(spec-compliant)_</span>

- `body` A string or [Readable stream](https://nodejs.org/api/stream.html#stream_readable_streams)
- `options` A [`ResponseInit`](https://fetch.spec.whatwg.org/#responseinit) options dictionary

Constructs a new `Response` object. The constructor is identical to that in the [browser](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response).

Because Node.js does not implement service workers (for which this class was designed), one rarely has to construct a `Response` directly.

#### response.ok

<span class="small">_(spec-compliant)_</span>

Convenience property representing if the request ended normally. Will evaluate to true if the response status was greater than or equal to 200 but smaller than 300.

#### response.redirected

<span class="small">_(spec-compliant)_</span>

Convenience property representing if the request has been redirected at least once. Will evaluate to true if the internal redirect counter is greater than 0.

<span id="class-headers"></span>

### Class: Headers

This class allows manipulating and iterating over a set of HTTP headers. All methods specified in the [Fetch Standard](https://fetch.spec.whatwg.org/) are implemented.

#### new Headers(\[init\])

<span class="small">_(spec-compliant)_</span>

- `init` Optional argument to pre-fill the `Headers` object

Construct a new `Headers` object. `init` can be either `null`, a `Headers` object, an key-value map object, or any iterable object.

    // Example adapted from https://fetch.spec.whatwg.org/#example-headers-class

    const meta = {
      "Content-Type": "text/xml",
      "Breaking-Bad": "<3",
    };
    const headers = new Headers(meta);

    // The above is equivalent to
    const meta = [
      ["Content-Type", "text/xml"],
      ["Breaking-Bad", "<3"],
    ];
    const headers = new Headers(meta);

    // You can in fact use any iterable objects, like a Map or even another Headers
    const meta = new Map();
    meta.set("Content-Type", "text/xml");
    meta.set("Breaking-Bad", "<3");
    const headers = new Headers(meta);
    const copyOfHeaders = new Headers(headers);

<span id="iface-body"></span>

### Interface: Body

`Body` is an abstract interface with methods that are applicable to both `Request` and `Response` classes.

The following methods are not yet implemented in node-fetch at this moment:

- `formData()`

#### body.body

<span class="small">_(deviation from spec)_</span>

- Node.js [`Readable` stream](https://nodejs.org/api/stream.html#stream_readable_streams)

The data encapsulated in the `Body` object. Note that while the [Fetch Standard](https://fetch.spec.whatwg.org/) requires the property to always be a WHATWG `ReadableStream`, in node-fetch it is a Node.js [`Readable` stream](https://nodejs.org/api/stream.html#stream_readable_streams).

#### body.bodyUsed

<span class="small">_(spec-compliant)_</span>

- `Boolean`

A boolean property for if this body has been consumed. Per spec, a consumed body cannot be used again.

#### body.arrayBuffer()

#### body.blob()

#### body.json()

#### body.text()

<span class="small">_(spec-compliant)_</span>

- Returns: `Promise`

Consume the body and return a promise that will resolve to one of these formats.

#### body.buffer()

<span class="small">_(node-fetch extension)_</span>

- Returns: `Promise<Buffer>`

Consume the body and return a promise that will resolve to a Buffer.

#### body.textConverted()

<span class="small">_(node-fetch extension)_</span>

- Returns: `Promise<String>`

Identical to `body.text()`, except instead of always converting to UTF-8, encoding sniffing will be performed and text converted to UTF-8, if possible.

(This API requires an optional dependency on npm package [encoding](https://www.npmjs.com/package/encoding), which you need to install manually. `webpack` users may see [a warning message](https://github.com/bitinn/node-fetch/issues/412#issuecomment-379007792) due to this optional dependency.)

<span id="class-fetcherror"></span>

### Class: FetchError

<span class="small">_(node-fetch extension)_</span>

An operational error in the fetching process. See [ERROR-HANDLING.md](https://github.com/bitinn/node-fetch/blob/master/ERROR-HANDLING.md) for more info.

<span id="class-aborterror"></span>

### Class: AbortError

<span class="small">_(node-fetch extension)_</span>

An Error thrown when the request is aborted in response to an `AbortSignal`’s `abort` event. It has a `name` property of `AbortError`. See [ERROR-HANDLING.MD](https://github.com/bitinn/node-fetch/blob/master/ERROR-HANDLING.md) for more info.

## Acknowledgement

Thanks to [github/fetch](https://github.com/github/fetch) for providing a solid implementation reference.

`node-fetch` v1 was maintained by <span class="citation" data-cites="bitinn">\[@bitinn\]</span>(https://github.com/bitinn); v2 was maintained by <span class="citation" data-cites="TimothyGu">\[@TimothyGu\]</span>(https://github.com/timothygu), <span class="citation" data-cites="bitinn">\[@bitinn\]</span>(https://github.com/bitinn) and <span class="citation" data-cites="jimmywarting">\[@jimmywarting\]</span>(https://github.com/jimmywarting); v2 readme is written by <span class="citation" data-cites="jkantr">\[@jkantr\]</span>(https://github.com/jkantr).

## License

MIT

fixtures/node_modules/not/

### [fixtures/node_modules/not/README.md](fixtures/node_modules/not/README.md)

# not

Returns the negation of a function

## Example

    var not = require("not")
        , truth = function () { return true }
        , lies = function () { return false }

    // false true
    console.log(not(truth)(), not(lies)())

## Installation

`npm install not`

## Contributors

- Raynos

## MIT Licenced

fixtures/node_modules/nth-check/

### [fixtures/node_modules/nth-check/README.md](fixtures/node_modules/nth-check/README.md)

# nth-check [![Build Status](https://travis-ci.org/fb55/nth-check.svg)](https://travis-ci.org/fb55/nth-check)

A performant nth-check parser & compiler.

### About

This module can be used to parse & compile nth-checks, as they are found in CSS 3’s `nth-child()` and `nth-last-of-type()`.

`nth-check` focusses on speed, providing optimized functions for different kinds of nth-child formulas, while still following the [spec](http://www.w3.org/TR/css3-selectors/#nth-child-pseudo).

### API

    var nthCheck = require("nth-check");

##### `nthCheck(formula)`

First parses, then compiles the formula.

##### `nthCheck.parse(formula)`

Parses the expression, throws a `SyntaxError` if it fails, otherwise returns an array containing two elements.

**Example:**

    nthCheck.parse("2n+3"); //[2, 3]

##### `nthCheck.compile([a, b])`

Takes an array with two elements (as returned by `.parse`) and returns a highly optimized function.

If the formula doesn’t match any elements, it returns [`boolbase`](https://github.com/fb55/boolbase)’s `falseFunc`, otherwise, a function accepting an _index_ is returned, which returns whether or not a passed _index_ matches the formula. (Note: The spec starts counting at `1`, the returned function at `0`).

**Example:**

    var check = nthCheck.compile([2, 3]);

    check(0); //false
    check(1); //false
    check(2); //true
    check(3); //false
    check(4); //true
    check(5); //false
    check(6); //true

---

License: BSD

fixtures/node_modules/once/

### [fixtures/node_modules/once/README.md](fixtures/node_modules/once/README.md)

# once

Only call a function once.

## usage

    var once = require("once");

    function load(file, cb) {
      cb = once(cb);
      loader.load("file");
      loader.once("load", cb);
      loader.once("error", cb);
    }

Or add to the Function.prototype in a responsible way:

    // only has to be done once
    require("once").proto();

    function load(file, cb) {
      cb = cb.once();
      loader.load("file");
      loader.once("load", cb);
      loader.once("error", cb);
    }

Ironically, the prototype feature makes this module twice as complicated as necessary.

To check whether you function has been called, use `fn.called`. Once the function is called for the first time the return value of the original function is saved in `fn.value` and subsequent calls will continue to return this value.

    var once = require("once");

    function load(cb) {
      cb = once(cb);
      var stream = createStream();
      stream.once("data", cb);
      stream.once("end", function () {
        if (!cb.called) cb(new Error("not found"));
      });
    }

## `once.strict(func)`

Throw an error if the function is called twice.

Some functions are expected to be called only once. Using `once` for them would potentially hide logical errors.

In the example below, the `greet` function has to call the callback only once:

    function greet(name, cb) {
      // return is missing from the if statement
      // when no name is passed, the callback is called twice
      if (!name) cb("Hello anonymous");
      cb("Hello " + name);
    }

    function log(msg) {
      console.log(msg);
    }

    // this will print 'Hello anonymous' but the logical error will be missed
    greet(null, once(msg));

    // once.strict will print 'Hello anonymous' and throw an error when the callback will be called the second time
    greet(null, once.strict(msg));

fixtures/node_modules/path-is-absolute/

### [fixtures/node_modules/path-is-absolute/readme.md](fixtures/node_modules/path-is-absolute/readme.md)

# path-is-absolute [![Build Status](https://travis-ci.org/sindresorhus/path-is-absolute.svg?branch=master)](https://travis-ci.org/sindresorhus/path-is-absolute)

> Node.js 0.12 [`path.isAbsolute()`](http://nodejs.org/api/path.html#path_path_isabsolute_path) [ponyfill](https://ponyfill.com)

## Install

    $ npm install --save path-is-absolute

## Usage

    const pathIsAbsolute = require("path-is-absolute");

    // Running on Linux
    pathIsAbsolute("/home/foo");
    //=> true
    pathIsAbsolute("C:/Users/foo");
    //=> false

    // Running on Windows
    pathIsAbsolute("C:/Users/foo");
    //=> true
    pathIsAbsolute("/home/foo");
    //=> false

    // Running on any OS
    pathIsAbsolute.posix("/home/foo");
    //=> true
    pathIsAbsolute.posix("C:/Users/foo");
    //=> false
    pathIsAbsolute.win32("C:/Users/foo");
    //=> true
    pathIsAbsolute.win32("/home/foo");
    //=> false

## API

See the [`path.isAbsolute()` docs](http://nodejs.org/api/path.html#path_path_isabsolute_path).

### pathIsAbsolute(path)

### pathIsAbsolute.posix(path)

POSIX specific version.

### pathIsAbsolute.win32(path)

Windows specific version.

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

fixtures/node_modules/property-information/

### [fixtures/node_modules/property-information/readme.md](fixtures/node_modules/property-information/readme.md)

# property-information

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Info for properties and attributes on the web-platform (HTML, SVG, ARIA, XML, XMLNS, XLink).

This package follows a sensible naming scheme as defined by [hast](https://github.com/syntax-tree/hast).

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install property-information

## Contents

- [Use](#use)
- [API](#api)
  - [`propertyInformation.find(schema, name)`](#propertyinformationfindschema-name)
  - [`propertyInformation.normalize(name)`](#propertyinformationnormalizename)
  - [`propertyInformation.html`](#propertyinformationhtml)
  - [`propertyInformation.svg`](#propertyinformationsvg)
  - [`hastToReact`](#hasttoreact)
- [Support](#support)
- [Related](#related)
- [License](#license)

## Use

    var info = require("property-information");

    console.log(info.find(info.html, "className"));
    // Or: info.find(info.html, 'class')
    console.log(info.find(info.svg, "horiz-adv-x"));
    // Or: info.find(info.svg, 'horizAdvX')
    console.log(info.find(info.svg, "xlink:arcrole"));
    // Or: info.find(info.svg, 'xLinkArcRole')
    console.log(info.find(info.html, "xmlLang"));
    // Or: info.find(info.html, 'xml:lang')
    console.log(info.find(info.html, "ariaValueNow"));
    // Or: info.find(info.html, 'aria-valuenow')

Yields:

    { space: 'html',
      attribute: 'class',
      property: 'className',
      spaceSeparated: true }
    { space: 'svg',
      attribute: 'horiz-adv-x',
      property: 'horizAdvX',
      number: true }
    { space: 'xlink', attribute: 'xlink:arcrole', property: 'xLinkArcrole' }
    { space: 'xml', attribute: 'xml:lang', property: 'xmlLang' }
    { attribute: 'aria-valuenow', property: 'ariaValueNow', number: true }

## API

### `propertyInformation.find(schema, name)`

Look up info on a property.

In most cases, the given `schema` contains info on the property. All standard, most legacy, and some non-standard properties are supported. For these cases, the returned [`Info`](#info) has hints about value of the property.

`name` can be a [valid data attribute or property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset), in which case an [`Info`](#info) object with the correctly cased `attribute` and `property` is returned.

`name` can be an unknown attribute, in which case an [`Info`](#info) object with `attribute` and `property` set to the given name is returned. It is not recommended to provide unsupported legacy or recently specced properties.

#### Parameters

- `schema` ([`Schema`](#schema)) — Either `propertyInformation.html` or `propertyInformation.svg`
- `name` (`string`) — An attribute-like or property-like name that is passed through [`normalize`](#propertyinformationnormalizename) to find the correct info

#### Returns

[`Info`](#info).

#### Note

`find` can be accessed directly from `require('property-information/find')` as well.

#### Example

Aside from the aforementioned example, which shows known HTML, SVG, XML, XLink, and ARIA support, data properties, and attributes are also supported:

    console.log(info.find(info.html, "data-date-of-birth"));
    // Or: info.find(info.html, 'dataDateOfBirth')

Yields:

    { attribute: 'data-date-of-birth', property: 'dataDateOfBirth' }

Unknown values are passed through untouched:

    console.log(info.find(info.html, "un-Known"));

Yields:

    { attribute: 'un-Known', property: 'un-Known' }

### `propertyInformation.normalize(name)`

Get the cleaned case-insensitive form of an attribute or a property.

#### Parameters

- `name` (`string`) — An attribute-like or property-like name

#### Returns

`string` that can be used to look up the properly cased property in a [`Schema`](#schema).

#### Note

`normalize` can be accessed directly from `require('property-information/normalize')` as well.

#### Example

    info.html.normal[info.normalize("for")]; // => 'htmlFor'
    info.svg.normal[info.normalize("VIEWBOX")]; // => 'viewBox'
    info.html.normal[info.normalize("unknown")]; // => undefined
    info.html.normal[info.normalize("accept-charset")]; // => 'acceptCharset'

### `propertyInformation.html`

### `propertyInformation.svg`

[`Schema`](#schema) for either HTML or SVG, containing info on properties from the primary space (HTML or SVG) and related embedded spaces (ARIA, XML, XMLNS, XLink).

#### Note

`html` and `svg` can be accessed directly from `require('property-information/html')` and `require('property-information/svg')` as well.

#### Example

    console.log(info.html.property.htmlFor);
    console.log(info.svg.property.viewBox);
    console.log(info.html.property.unknown);

Yields:

    { space: 'html',
      attribute: 'for',
      property: 'htmlFor',
      spaceSeparated: true }
    { space: 'svg', attribute: 'viewBox', property: 'viewBox' }
    undefined

#### `Schema`

A schema for a primary space.

- `space` (`'html'` or `'svg'`) — Primary space of the schema
- `normal` (`Object.<string>`) — Object mapping normalized attributes and properties to properly cased properties
- `property` ([`Object.<Info>`](#info)) — Object mapping properties to info

#### `Info`

Info on a property.

- `space` (`'html'`, `'svg'`, `'xml'`, `'xlink'`, `'xmlns'`, optional) — [Space](https://github.com/wooorm/web-namespaces) of the property
- `attribute` (`string`) — Attribute name for the property that could be used in markup (for example: `'aria-describedby'`, `'allowfullscreen'`, `'xml:lang'`, `'for'`, or `'charoff'`)
- `property` (`string`) — JavaScript-style camel-cased name, based on the DOM, but sometimes different (for example: `'ariaDescribedBy'`, `'allowFullScreen'`, `'xmlLang'`, `'htmlFor'`, `'charOff'`)
- `boolean` (`boolean`) — The property is `boolean`. The default value of this property is false, so it can be omitted
- `booleanish` (`boolean`) — The property is a `boolean`. The default value of this property is something other than false, so `false` must persist. The value can hold a string (as is the case with `ariaChecked` and its `'mixed'` value)
- `overloadedBoolean` (`boolean`) — The property is `boolean`. The default value of this property is false, so it can be omitted. The value can hold a string (as is the case with `download` as its value reflects the name to use for the downloaded file)
- `number` (`boolean`) — The property is `number`. These values can sometimes hold a string
- `spaceSeparated` (`boolean`) — The property is a list separated by spaces (for example, `className`)
- `commaSeparated` (`boolean`) — The property is a list separated by commas (for example, `srcSet`)
- `commaOrSpaceSeparated` (`boolean`) — The property is a list separated by commas or spaces (for example, `strokeDashArray`)
- `mustUseProperty` (`boolean`) — If a DOM is used, setting the property should be used for the change to take effect (this is true only for `'checked'`, `'multiple'`, `'muted'`, and `'selected'`)
- `defined` (`boolean`) — The property is [defined by a space](#support). This is true for values in HTML (including data and ARIA), SVG, XML, XMLNS, and XLink. These values can only be accessed through `find`.

### `hastToReact`

> Accessible through `require('property-information/hast-to-react.json')`

[hast](https://github.com/syntax-tree/hast) is close to [React](https://github.com/facebook/react), but differs in a couple of cases. To get a React property from a hast property, check if it is in [`hast-to-react`](hast-to-react.json) (`Object.<string>`), if it is, then use the corresponding value, otherwise, use the hast property.

## Support

<table><thead><tr class="header"><th>Property</th><th>Attribute</th><th>Space</th></tr></thead><tbody><tr class="odd"><td><code>aLink</code></td><td><code>alink</code></td><td><code>html</code></td></tr><tr class="even"><td><code>abbr</code></td><td><code>abbr</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>about</code></td><td><code>about</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>accentHeight</code></td><td><code>accent-height</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>accept</code></td><td><code>accept</code></td><td><code>html</code></td></tr><tr class="even"><td><code>acceptCharset</code></td><td><code>accept-charset</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>accessKey</code></td><td><code>accesskey</code></td><td><code>html</code></td></tr><tr class="even"><td><code>accumulate</code></td><td><code>accumulate</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>action</code></td><td><code>action</code></td><td><code>html</code></td></tr><tr class="even"><td><code>additive</code></td><td><code>additive</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>align</code></td><td><code>align</code></td><td><code>html</code></td></tr><tr class="even"><td><code>alignmentBaseline</code></td><td><code>alignment-baseline</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>allow</code></td><td><code>allow</code></td><td><code>html</code></td></tr><tr class="even"><td><code>allowFullScreen</code></td><td><code>allowfullscreen</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>allowPaymentRequest</code></td><td><code>allowpaymentrequest</code></td><td><code>html</code></td></tr><tr class="even"><td><code>allowTransparency</code></td><td><code>allowtransparency</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>allowUserMedia</code></td><td><code>allowusermedia</code></td><td><code>html</code></td></tr><tr class="even"><td><code>alphabetic</code></td><td><code>alphabetic</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>alt</code></td><td><code>alt</code></td><td><code>html</code></td></tr><tr class="even"><td><code>amplitude</code></td><td><code>amplitude</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>arabicForm</code></td><td><code>arabic-form</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>archive</code></td><td><code>archive</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>ariaActiveDescendant</code></td><td><code>aria-activedescendant</code></td><td></td></tr><tr class="even"><td><code>ariaAtomic</code></td><td><code>aria-atomic</code></td><td></td></tr><tr class="odd"><td><code>ariaAutoComplete</code></td><td><code>aria-autocomplete</code></td><td></td></tr><tr class="even"><td><code>ariaBusy</code></td><td><code>aria-busy</code></td><td></td></tr><tr class="odd"><td><code>ariaChecked</code></td><td><code>aria-checked</code></td><td></td></tr><tr class="even"><td><code>ariaColCount</code></td><td><code>aria-colcount</code></td><td></td></tr><tr class="odd"><td><code>ariaColIndex</code></td><td><code>aria-colindex</code></td><td></td></tr><tr class="even"><td><code>ariaColSpan</code></td><td><code>aria-colspan</code></td><td></td></tr><tr class="odd"><td><code>ariaControls</code></td><td><code>aria-controls</code></td><td></td></tr><tr class="even"><td><code>ariaCurrent</code></td><td><code>aria-current</code></td><td></td></tr><tr class="odd"><td><code>ariaDescribedBy</code></td><td><code>aria-describedby</code></td><td></td></tr><tr class="even"><td><code>ariaDetails</code></td><td><code>aria-details</code></td><td></td></tr><tr class="odd"><td><code>ariaDisabled</code></td><td><code>aria-disabled</code></td><td></td></tr><tr class="even"><td><code>ariaDropEffect</code></td><td><code>aria-dropeffect</code></td><td></td></tr><tr class="odd"><td><code>ariaErrorMessage</code></td><td><code>aria-errormessage</code></td><td></td></tr><tr class="even"><td><code>ariaExpanded</code></td><td><code>aria-expanded</code></td><td></td></tr><tr class="odd"><td><code>ariaFlowTo</code></td><td><code>aria-flowto</code></td><td></td></tr><tr class="even"><td><code>ariaGrabbed</code></td><td><code>aria-grabbed</code></td><td></td></tr><tr class="odd"><td><code>ariaHasPopup</code></td><td><code>aria-haspopup</code></td><td></td></tr><tr class="even"><td><code>ariaHidden</code></td><td><code>aria-hidden</code></td><td></td></tr><tr class="odd"><td><code>ariaInvalid</code></td><td><code>aria-invalid</code></td><td></td></tr><tr class="even"><td><code>ariaKeyShortcuts</code></td><td><code>aria-keyshortcuts</code></td><td></td></tr><tr class="odd"><td><code>ariaLabel</code></td><td><code>aria-label</code></td><td></td></tr><tr class="even"><td><code>ariaLabelledBy</code></td><td><code>aria-labelledby</code></td><td></td></tr><tr class="odd"><td><code>ariaLevel</code></td><td><code>aria-level</code></td><td></td></tr><tr class="even"><td><code>ariaLive</code></td><td><code>aria-live</code></td><td></td></tr><tr class="odd"><td><code>ariaModal</code></td><td><code>aria-modal</code></td><td></td></tr><tr class="even"><td><code>ariaMultiLine</code></td><td><code>aria-multiline</code></td><td></td></tr><tr class="odd"><td><code>ariaMultiSelectable</code></td><td><code>aria-multiselectable</code></td><td></td></tr><tr class="even"><td><code>ariaOrientation</code></td><td><code>aria-orientation</code></td><td></td></tr><tr class="odd"><td><code>ariaOwns</code></td><td><code>aria-owns</code></td><td></td></tr><tr class="even"><td><code>ariaPlaceholder</code></td><td><code>aria-placeholder</code></td><td></td></tr><tr class="odd"><td><code>ariaPosInSet</code></td><td><code>aria-posinset</code></td><td></td></tr><tr class="even"><td><code>ariaPressed</code></td><td><code>aria-pressed</code></td><td></td></tr><tr class="odd"><td><code>ariaReadOnly</code></td><td><code>aria-readonly</code></td><td></td></tr><tr class="even"><td><code>ariaRelevant</code></td><td><code>aria-relevant</code></td><td></td></tr><tr class="odd"><td><code>ariaRequired</code></td><td><code>aria-required</code></td><td></td></tr><tr class="even"><td><code>ariaRoleDescription</code></td><td><code>aria-roledescription</code></td><td></td></tr><tr class="odd"><td><code>ariaRowCount</code></td><td><code>aria-rowcount</code></td><td></td></tr><tr class="even"><td><code>ariaRowIndex</code></td><td><code>aria-rowindex</code></td><td></td></tr><tr class="odd"><td><code>ariaRowSpan</code></td><td><code>aria-rowspan</code></td><td></td></tr><tr class="even"><td><code>ariaSelected</code></td><td><code>aria-selected</code></td><td></td></tr><tr class="odd"><td><code>ariaSetSize</code></td><td><code>aria-setsize</code></td><td></td></tr><tr class="even"><td><code>ariaSort</code></td><td><code>aria-sort</code></td><td></td></tr><tr class="odd"><td><code>ariaValueMax</code></td><td><code>aria-valuemax</code></td><td></td></tr><tr class="even"><td><code>ariaValueMin</code></td><td><code>aria-valuemin</code></td><td></td></tr><tr class="odd"><td><code>ariaValueNow</code></td><td><code>aria-valuenow</code></td><td></td></tr><tr class="even"><td><code>ariaValueText</code></td><td><code>aria-valuetext</code></td><td></td></tr><tr class="odd"><td><code>as</code></td><td><code>as</code></td><td><code>html</code></td></tr><tr class="even"><td><code>ascent</code></td><td><code>ascent</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>async</code></td><td><code>async</code></td><td><code>html</code></td></tr><tr class="even"><td><code>attributeName</code></td><td><code>attributeName</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>attributeType</code></td><td><code>attributeType</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>autoCapitalize</code></td><td><code>autocapitalize</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>autoComplete</code></td><td><code>autocomplete</code></td><td><code>html</code></td></tr><tr class="even"><td><code>autoCorrect</code></td><td><code>autocorrect</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>autoFocus</code></td><td><code>autofocus</code></td><td><code>html</code></td></tr><tr class="even"><td><code>autoPlay</code></td><td><code>autoplay</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>autoSave</code></td><td><code>autosave</code></td><td><code>html</code></td></tr><tr class="even"><td><code>axis</code></td><td><code>axis</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>azimuth</code></td><td><code>azimuth</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>background</code></td><td><code>background</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>bandwidth</code></td><td><code>bandwidth</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>baseFrequency</code></td><td><code>baseFrequency</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>baseProfile</code></td><td><code>baseProfile</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>baselineShift</code></td><td><code>baseline-shift</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>bbox</code></td><td><code>bbox</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>begin</code></td><td><code>begin</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>bgColor</code></td><td><code>bgcolor</code></td><td><code>html</code></td></tr><tr class="even"><td><code>bias</code></td><td><code>bias</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>border</code></td><td><code>border</code></td><td><code>html</code></td></tr><tr class="even"><td><code>borderColor</code></td><td><code>bordercolor</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>bottomMargin</code></td><td><code>bottommargin</code></td><td><code>html</code></td></tr><tr class="even"><td><code>by</code></td><td><code>by</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>calcMode</code></td><td><code>calcMode</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>capHeight</code></td><td><code>cap-height</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>capture</code></td><td><code>capture</code></td><td><code>html</code></td></tr><tr class="even"><td><code>cellPadding</code></td><td><code>cellpadding</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>cellSpacing</code></td><td><code>cellspacing</code></td><td><code>html</code></td></tr><tr class="even"><td><code>char</code></td><td><code>char</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>charOff</code></td><td><code>charoff</code></td><td><code>html</code></td></tr><tr class="even"><td><code>charSet</code></td><td><code>charset</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>checked</code></td><td><code>checked</code></td><td><code>html</code></td></tr><tr class="even"><td><code>cite</code></td><td><code>cite</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>classId</code></td><td><code>classid</code></td><td><code>html</code></td></tr><tr class="even"><td><code>className</code></td><td><code>class</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>clear</code></td><td><code>clear</code></td><td><code>html</code></td></tr><tr class="even"><td><code>clip</code></td><td><code>clip</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>clipPath</code></td><td><code>clip-path</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>clipPathUnits</code></td><td><code>clipPathUnits</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>clipRule</code></td><td><code>clip-rule</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>code</code></td><td><code>code</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>codeBase</code></td><td><code>codebase</code></td><td><code>html</code></td></tr><tr class="even"><td><code>codeType</code></td><td><code>codetype</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>colSpan</code></td><td><code>colspan</code></td><td><code>html</code></td></tr><tr class="even"><td><code>color</code></td><td><code>color</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>colorInterpolation</code></td><td><code>color-interpolation</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>colorInterpolationFilters</code></td><td><code>color-interpolation-filters</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>colorProfile</code></td><td><code>color-profile</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>colorRendering</code></td><td><code>color-rendering</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>cols</code></td><td><code>cols</code></td><td><code>html</code></td></tr><tr class="even"><td><code>compact</code></td><td><code>compact</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>content</code></td><td><code>content</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>contentEditable</code></td><td><code>contenteditable</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>contentScriptType</code></td><td><code>contentScriptType</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>contentStyleType</code></td><td><code>contentStyleType</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>controls</code></td><td><code>controls</code></td><td><code>html</code></td></tr><tr class="even"><td><code>controlsList</code></td><td><code>controlslist</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>coords</code></td><td><code>coords</code></td><td><code>html</code></td></tr><tr class="even"><td><code>crossOrigin</code></td><td><code>crossorigin</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>cursor</code></td><td><code>cursor</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>cx</code></td><td><code>cx</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>cy</code></td><td><code>cy</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>d</code></td><td><code>d</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>data</code></td><td><code>data</code></td><td><code>html</code></td></tr><tr class="even"><td><code>dataType</code></td><td><code>datatype</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>dateTime</code></td><td><code>datetime</code></td><td><code>html</code></td></tr><tr class="even"><td><code>declare</code></td><td><code>declare</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>decoding</code></td><td><code>decoding</code></td><td><code>html</code></td></tr><tr class="even"><td><code>default</code></td><td><code>default</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>defaultAction</code></td><td><code>defaultAction</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>defer</code></td><td><code>defer</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>descent</code></td><td><code>descent</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>diffuseConstant</code></td><td><code>diffuseConstant</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>dir</code></td><td><code>dir</code></td><td><code>html</code></td></tr><tr class="even"><td><code>dirName</code></td><td><code>dirname</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>direction</code></td><td><code>direction</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>disablePictureInPicture</code></td><td><code>disablepictureinpicture</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>disabled</code></td><td><code>disabled</code></td><td><code>html</code></td></tr><tr class="even"><td><code>display</code></td><td><code>display</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>divisor</code></td><td><code>divisor</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>dominantBaseline</code></td><td><code>dominant-baseline</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>download</code></td><td><code>download</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>draggable</code></td><td><code>draggable</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>dur</code></td><td><code>dur</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>dx</code></td><td><code>dx</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>dy</code></td><td><code>dy</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>edgeMode</code></td><td><code>edgeMode</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>editable</code></td><td><code>editable</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>elevation</code></td><td><code>elevation</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>enableBackground</code></td><td><code>enable-background</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>encType</code></td><td><code>enctype</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>end</code></td><td><code>end</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>enterKeyHint</code></td><td><code>enterkeyhint</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>event</code></td><td><code>event</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>exponent</code></td><td><code>exponent</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>externalResourcesRequired</code></td><td><code>externalResourcesRequired</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>face</code></td><td><code>face</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>fill</code></td><td><code>fill</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>fillOpacity</code></td><td><code>fill-opacity</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>fillRule</code></td><td><code>fill-rule</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>filter</code></td><td><code>filter</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>filterRes</code></td><td><code>filterRes</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>filterUnits</code></td><td><code>filterUnits</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>floodColor</code></td><td><code>flood-color</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>floodOpacity</code></td><td><code>flood-opacity</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>focusHighlight</code></td><td><code>focusHighlight</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>focusable</code></td><td><code>focusable</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>fontFamily</code></td><td><code>font-family</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>fontSize</code></td><td><code>font-size</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>fontSizeAdjust</code></td><td><code>font-size-adjust</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>fontStretch</code></td><td><code>font-stretch</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>fontStyle</code></td><td><code>font-style</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>fontVariant</code></td><td><code>font-variant</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>fontWeight</code></td><td><code>font-weight</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>form</code></td><td><code>form</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>formAction</code></td><td><code>formaction</code></td><td><code>html</code></td></tr><tr class="even"><td><code>formEncType</code></td><td><code>formenctype</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>formMethod</code></td><td><code>formmethod</code></td><td><code>html</code></td></tr><tr class="even"><td><code>formNoValidate</code></td><td><code>formnovalidate</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>formTarget</code></td><td><code>formtarget</code></td><td><code>html</code></td></tr><tr class="even"><td><code>format</code></td><td><code>format</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>fr</code></td><td><code>fr</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>frame</code></td><td><code>frame</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>frameBorder</code></td><td><code>frameborder</code></td><td><code>html</code></td></tr><tr class="even"><td><code>from</code></td><td><code>from</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>fx</code></td><td><code>fx</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>fy</code></td><td><code>fy</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>g1</code></td><td><code>g1</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>g2</code></td><td><code>g2</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>glyphName</code></td><td><code>glyph-name</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>glyphOrientationHorizontal</code></td><td><code>glyph-orientation-horizontal</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>glyphOrientationVertical</code></td><td><code>glyph-orientation-vertical</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>glyphRef</code></td><td><code>glyphRef</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>gradientTransform</code></td><td><code>gradientTransform</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>gradientUnits</code></td><td><code>gradientUnits</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>hSpace</code></td><td><code>hspace</code></td><td><code>html</code></td></tr><tr class="even"><td><code>handler</code></td><td><code>handler</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>hanging</code></td><td><code>hanging</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>hatchContentUnits</code></td><td><code>hatchContentUnits</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>hatchUnits</code></td><td><code>hatchUnits</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>headers</code></td><td><code>headers</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>height</code></td><td><code>height</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>hidden</code></td><td><code>hidden</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>high</code></td><td><code>high</code></td><td><code>html</code></td></tr><tr class="even"><td><code>horizAdvX</code></td><td><code>horiz-adv-x</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>horizOriginX</code></td><td><code>horiz-origin-x</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>horizOriginY</code></td><td><code>horiz-origin-y</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>href</code></td><td><code>href</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>hrefLang</code></td><td><code>hreflang</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>htmlFor</code></td><td><code>for</code></td><td><code>html</code></td></tr><tr class="even"><td><code>httpEquiv</code></td><td><code>http-equiv</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>id</code></td><td><code>id</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>ideographic</code></td><td><code>ideographic</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>imageRendering</code></td><td><code>image-rendering</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>imageSizes</code></td><td><code>imagesizes</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>imageSrcSet</code></td><td><code>imagesrcset</code></td><td><code>html</code></td></tr><tr class="even"><td><code>in</code></td><td><code>in</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>in2</code></td><td><code>in2</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>initialVisibility</code></td><td><code>initialVisibility</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>inputMode</code></td><td><code>inputmode</code></td><td><code>html</code></td></tr><tr class="even"><td><code>integrity</code></td><td><code>integrity</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>intercept</code></td><td><code>intercept</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>is</code></td><td><code>is</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>isMap</code></td><td><code>ismap</code></td><td><code>html</code></td></tr><tr class="even"><td><code>itemId</code></td><td><code>itemid</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>itemProp</code></td><td><code>itemprop</code></td><td><code>html</code></td></tr><tr class="even"><td><code>itemRef</code></td><td><code>itemref</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>itemScope</code></td><td><code>itemscope</code></td><td><code>html</code></td></tr><tr class="even"><td><code>itemType</code></td><td><code>itemtype</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>k</code></td><td><code>k</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>k1</code></td><td><code>k1</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>k2</code></td><td><code>k2</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>k3</code></td><td><code>k3</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>k4</code></td><td><code>k4</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>kernelMatrix</code></td><td><code>kernelMatrix</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>kernelUnitLength</code></td><td><code>kernelUnitLength</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>kerning</code></td><td><code>kerning</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>keyPoints</code></td><td><code>keyPoints</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>keySplines</code></td><td><code>keySplines</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>keyTimes</code></td><td><code>keyTimes</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>kind</code></td><td><code>kind</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>label</code></td><td><code>label</code></td><td><code>html</code></td></tr><tr class="even"><td><code>lang</code></td><td><code>lang</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>language</code></td><td><code>language</code></td><td><code>html</code></td></tr><tr class="even"><td><code>leftMargin</code></td><td><code>leftmargin</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>lengthAdjust</code></td><td><code>lengthAdjust</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>letterSpacing</code></td><td><code>letter-spacing</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>lightingColor</code></td><td><code>lighting-color</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>limitingConeAngle</code></td><td><code>limitingConeAngle</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>link</code></td><td><code>link</code></td><td><code>html</code></td></tr><tr class="even"><td><code>list</code></td><td><code>list</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>local</code></td><td><code>local</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>longDesc</code></td><td><code>longdesc</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>loop</code></td><td><code>loop</code></td><td><code>html</code></td></tr><tr class="even"><td><code>low</code></td><td><code>low</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>lowSrc</code></td><td><code>lowsrc</code></td><td><code>html</code></td></tr><tr class="even"><td><code>manifest</code></td><td><code>manifest</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>marginHeight</code></td><td><code>marginheight</code></td><td><code>html</code></td></tr><tr class="even"><td><code>marginWidth</code></td><td><code>marginwidth</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>markerEnd</code></td><td><code>marker-end</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>markerHeight</code></td><td><code>markerHeight</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>markerMid</code></td><td><code>marker-mid</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>markerStart</code></td><td><code>marker-start</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>markerUnits</code></td><td><code>markerUnits</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>markerWidth</code></td><td><code>markerWidth</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>mask</code></td><td><code>mask</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>maskContentUnits</code></td><td><code>maskContentUnits</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>maskUnits</code></td><td><code>maskUnits</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>mathematical</code></td><td><code>mathematical</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>max</code></td><td><code>max</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>maxLength</code></td><td><code>maxlength</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>media</code></td><td><code>media</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>mediaCharacterEncoding</code></td><td><code>mediaCharacterEncoding</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>mediaContentEncodings</code></td><td><code>mediaContentEncodings</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>mediaSize</code></td><td><code>mediaSize</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>mediaTime</code></td><td><code>mediaTime</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>method</code></td><td><code>method</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>min</code></td><td><code>min</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>minLength</code></td><td><code>minlength</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>mode</code></td><td><code>mode</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>multiple</code></td><td><code>multiple</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>muted</code></td><td><code>muted</code></td><td><code>html</code></td></tr><tr class="even"><td><code>name</code></td><td><code>name</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>navDown</code></td><td><code>nav-down</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>navDownLeft</code></td><td><code>nav-down-left</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>navDownRight</code></td><td><code>nav-down-right</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>navLeft</code></td><td><code>nav-left</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>navNext</code></td><td><code>nav-next</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>navPrev</code></td><td><code>nav-prev</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>navRight</code></td><td><code>nav-right</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>navUp</code></td><td><code>nav-up</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>navUpLeft</code></td><td><code>nav-up-left</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>navUpRight</code></td><td><code>nav-up-right</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>noHref</code></td><td><code>nohref</code></td><td><code>html</code></td></tr><tr class="even"><td><code>noModule</code></td><td><code>nomodule</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>noResize</code></td><td><code>noresize</code></td><td><code>html</code></td></tr><tr class="even"><td><code>noShade</code></td><td><code>noshade</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>noValidate</code></td><td><code>novalidate</code></td><td><code>html</code></td></tr><tr class="even"><td><code>noWrap</code></td><td><code>nowrap</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>nonce</code></td><td><code>nonce</code></td><td><code>html</code></td></tr><tr class="even"><td><code>numOctaves</code></td><td><code>numOctaves</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>object</code></td><td><code>object</code></td><td><code>html</code></td></tr><tr class="even"><td><code>observer</code></td><td><code>observer</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>offset</code></td><td><code>offset</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>onAbort</code></td><td><code>onabort</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onActivate</code></td><td><code>onactivate</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>onAfterPrint</code></td><td><code>onafterprint</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onAuxClick</code></td><td><code>onauxclick</code></td><td><code>html</code></td></tr><tr class="even"><td><code>onBeforePrint</code></td><td><code>onbeforeprint</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onBeforeUnload</code></td><td><code>onbeforeunload</code></td><td><code>html</code></td></tr><tr class="even"><td><code>onBegin</code></td><td><code>onbegin</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>onBlur</code></td><td><code>onblur</code></td><td><code>html</code></td></tr><tr class="even"><td><code>onCanPlay</code></td><td><code>oncanplay</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onCanPlayThrough</code></td><td><code>oncanplaythrough</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onCancel</code></td><td><code>oncancel</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onChange</code></td><td><code>onchange</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onClick</code></td><td><code>onclick</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onClose</code></td><td><code>onclose</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onContextMenu</code></td><td><code>oncontextmenu</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>onCopy</code></td><td><code>oncopy</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onCueChange</code></td><td><code>oncuechange</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onCut</code></td><td><code>oncut</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onDblClick</code></td><td><code>ondblclick</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onDrag</code></td><td><code>ondrag</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onDragEnd</code></td><td><code>ondragend</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onDragEnter</code></td><td><code>ondragenter</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onDragExit</code></td><td><code>ondragexit</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onDragLeave</code></td><td><code>ondragleave</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onDragOver</code></td><td><code>ondragover</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onDragStart</code></td><td><code>ondragstart</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onDrop</code></td><td><code>ondrop</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onDurationChange</code></td><td><code>ondurationchange</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onEmptied</code></td><td><code>onemptied</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onEnd</code></td><td><code>onend</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>onEnded</code></td><td><code>onended</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onError</code></td><td><code>onerror</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onFocus</code></td><td><code>onfocus</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onFocusIn</code></td><td><code>onfocusin</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>onFocusOut</code></td><td><code>onfocusout</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>onFormData</code></td><td><code>onformdata</code></td><td><code>html</code></td></tr><tr class="even"><td><code>onHashChange</code></td><td><code>onhashchange</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onInput</code></td><td><code>oninput</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onInvalid</code></td><td><code>oninvalid</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onKeyDown</code></td><td><code>onkeydown</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onKeyPress</code></td><td><code>onkeypress</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onKeyUp</code></td><td><code>onkeyup</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onLanguageChange</code></td><td><code>onlanguagechange</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>onLoad</code></td><td><code>onload</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onLoadEnd</code></td><td><code>onloadend</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>onLoadStart</code></td><td><code>onloadstart</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onLoadedData</code></td><td><code>onloadeddata</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onLoadedMetadata</code></td><td><code>onloadedmetadata</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onMessage</code></td><td><code>onmessage</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onMessageError</code></td><td><code>onmessageerror</code></td><td><code>html</code></td></tr><tr class="even"><td><code>onMouseDown</code></td><td><code>onmousedown</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onMouseEnter</code></td><td><code>onmouseenter</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onMouseLeave</code></td><td><code>onmouseleave</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onMouseMove</code></td><td><code>onmousemove</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onMouseOut</code></td><td><code>onmouseout</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onMouseOver</code></td><td><code>onmouseover</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onMouseUp</code></td><td><code>onmouseup</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onMouseWheel</code></td><td><code>onmousewheel</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>onOffline</code></td><td><code>onoffline</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onOnline</code></td><td><code>ononline</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onPageHide</code></td><td><code>onpagehide</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onPageShow</code></td><td><code>onpageshow</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onPaste</code></td><td><code>onpaste</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onPause</code></td><td><code>onpause</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onPlay</code></td><td><code>onplay</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onPlaying</code></td><td><code>onplaying</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onPopState</code></td><td><code>onpopstate</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onProgress</code></td><td><code>onprogress</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onRateChange</code></td><td><code>onratechange</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onRejectionHandled</code></td><td><code>onrejectionhandled</code></td><td><code>html</code></td></tr><tr class="even"><td><code>onRepeat</code></td><td><code>onrepeat</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>onReset</code></td><td><code>onreset</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onResize</code></td><td><code>onresize</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onScroll</code></td><td><code>onscroll</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onSecurityPolicyViolation</code></td><td><code>onsecuritypolicyviolation</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>onSeeked</code></td><td><code>onseeked</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onSeeking</code></td><td><code>onseeking</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onSelect</code></td><td><code>onselect</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onShow</code></td><td><code>onshow</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>onSlotChange</code></td><td><code>onslotchange</code></td><td><code>html</code></td></tr><tr class="even"><td><code>onStalled</code></td><td><code>onstalled</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onStorage</code></td><td><code>onstorage</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onSubmit</code></td><td><code>onsubmit</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onSuspend</code></td><td><code>onsuspend</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onTimeUpdate</code></td><td><code>ontimeupdate</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onToggle</code></td><td><code>ontoggle</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onUnhandledRejection</code></td><td><code>onunhandledrejection</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>onUnload</code></td><td><code>onunload</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onVolumeChange</code></td><td><code>onvolumechange</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>onWaiting</code></td><td><code>onwaiting</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>onWheel</code></td><td><code>onwheel</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>onZoom</code></td><td><code>onzoom</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>opacity</code></td><td><code>opacity</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>open</code></td><td><code>open</code></td><td><code>html</code></td></tr><tr class="even"><td><code>operator</code></td><td><code>operator</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>optimum</code></td><td><code>optimum</code></td><td><code>html</code></td></tr><tr class="even"><td><code>order</code></td><td><code>order</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>orient</code></td><td><code>orient</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>orientation</code></td><td><code>orientation</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>origin</code></td><td><code>origin</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>overflow</code></td><td><code>overflow</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>overlay</code></td><td><code>overlay</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>overlinePosition</code></td><td><code>overline-position</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>overlineThickness</code></td><td><code>overline-thickness</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>paintOrder</code></td><td><code>paint-order</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>panose1</code></td><td><code>panose-1</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>path</code></td><td><code>path</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>pathLength</code></td><td><code>pathLength</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>pattern</code></td><td><code>pattern</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>patternContentUnits</code></td><td><code>patternContentUnits</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>patternTransform</code></td><td><code>patternTransform</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>patternUnits</code></td><td><code>patternUnits</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>phase</code></td><td><code>phase</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>ping</code></td><td><code>ping</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>pitch</code></td><td><code>pitch</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>placeholder</code></td><td><code>placeholder</code></td><td><code>html</code></td></tr><tr class="even"><td><code>playbackOrder</code></td><td><code>playbackorder</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>playsInline</code></td><td><code>playsinline</code></td><td><code>html</code></td></tr><tr class="even"><td><code>pointerEvents</code></td><td><code>pointer-events</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>points</code></td><td><code>points</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>pointsAtX</code></td><td><code>pointsAtX</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>pointsAtY</code></td><td><code>pointsAtY</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>pointsAtZ</code></td><td><code>pointsAtZ</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>poster</code></td><td><code>poster</code></td><td><code>html</code></td></tr><tr class="even"><td><code>prefix</code></td><td><code>prefix</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>preload</code></td><td><code>preload</code></td><td><code>html</code></td></tr><tr class="even"><td><code>preserveAlpha</code></td><td><code>preserveAlpha</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>preserveAspectRatio</code></td><td><code>preserveAspectRatio</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>primitiveUnits</code></td><td><code>primitiveUnits</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>profile</code></td><td><code>profile</code></td><td><code>html</code></td></tr><tr class="even"><td><code>prompt</code></td><td><code>prompt</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>propagate</code></td><td><code>propagate</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>property</code></td><td><code>property</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>r</code></td><td><code>r</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>radius</code></td><td><code>radius</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>readOnly</code></td><td><code>readonly</code></td><td><code>html</code></td></tr><tr class="even"><td><code>refX</code></td><td><code>refX</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>refY</code></td><td><code>refY</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>referrerPolicy</code></td><td><code>referrerpolicy</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>rel</code></td><td><code>rel</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>renderingIntent</code></td><td><code>rendering-intent</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>repeatCount</code></td><td><code>repeatCount</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>repeatDur</code></td><td><code>repeatDur</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>required</code></td><td><code>required</code></td><td><code>html</code></td></tr><tr class="even"><td><code>requiredExtensions</code></td><td><code>requiredExtensions</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>requiredFeatures</code></td><td><code>requiredFeatures</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>requiredFonts</code></td><td><code>requiredFonts</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>requiredFormats</code></td><td><code>requiredFormats</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>resource</code></td><td><code>resource</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>restart</code></td><td><code>restart</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>result</code></td><td><code>result</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>results</code></td><td><code>results</code></td><td><code>html</code></td></tr><tr class="even"><td><code>rev</code></td><td><code>rev</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>reversed</code></td><td><code>reversed</code></td><td><code>html</code></td></tr><tr class="even"><td><code>rightMargin</code></td><td><code>rightmargin</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>role</code></td><td><code>role</code></td><td></td></tr><tr class="even"><td><code>rotate</code></td><td><code>rotate</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>rowSpan</code></td><td><code>rowspan</code></td><td><code>html</code></td></tr><tr class="even"><td><code>rows</code></td><td><code>rows</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>rules</code></td><td><code>rules</code></td><td><code>html</code></td></tr><tr class="even"><td><code>rx</code></td><td><code>rx</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>ry</code></td><td><code>ry</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>sandbox</code></td><td><code>sandbox</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>scale</code></td><td><code>scale</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>scheme</code></td><td><code>scheme</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>scope</code></td><td><code>scope</code></td><td><code>html</code></td></tr><tr class="even"><td><code>scoped</code></td><td><code>scoped</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>scrolling</code></td><td><code>scrolling</code></td><td><code>html</code></td></tr><tr class="even"><td><code>seamless</code></td><td><code>seamless</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>security</code></td><td><code>security</code></td><td><code>html</code></td></tr><tr class="even"><td><code>seed</code></td><td><code>seed</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>selected</code></td><td><code>selected</code></td><td><code>html</code></td></tr><tr class="even"><td><code>shape</code></td><td><code>shape</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>shapeRendering</code></td><td><code>shape-rendering</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>side</code></td><td><code>side</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>size</code></td><td><code>size</code></td><td><code>html</code></td></tr><tr class="even"><td><code>sizes</code></td><td><code>sizes</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>slope</code></td><td><code>slope</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>slot</code></td><td><code>slot</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>snapshotTime</code></td><td><code>snapshotTime</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>spacing</code></td><td><code>spacing</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>span</code></td><td><code>span</code></td><td><code>html</code></td></tr><tr class="even"><td><code>specularConstant</code></td><td><code>specularConstant</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>specularExponent</code></td><td><code>specularExponent</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>spellCheck</code></td><td><code>spellcheck</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>spreadMethod</code></td><td><code>spreadMethod</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>src</code></td><td><code>src</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>srcDoc</code></td><td><code>srcdoc</code></td><td><code>html</code></td></tr><tr class="even"><td><code>srcLang</code></td><td><code>srclang</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>srcSet</code></td><td><code>srcset</code></td><td><code>html</code></td></tr><tr class="even"><td><code>standby</code></td><td><code>standby</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>start</code></td><td><code>start</code></td><td><code>html</code></td></tr><tr class="even"><td><code>startOffset</code></td><td><code>startOffset</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>stdDeviation</code></td><td><code>stdDeviation</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>stemh</code></td><td><code>stemh</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>stemv</code></td><td><code>stemv</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>step</code></td><td><code>step</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>stitchTiles</code></td><td><code>stitchTiles</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>stopColor</code></td><td><code>stop-color</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>stopOpacity</code></td><td><code>stop-opacity</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>strikethroughPosition</code></td><td><code>strikethrough-position</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>strikethroughThickness</code></td><td><code>strikethrough-thickness</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>string</code></td><td><code>string</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>stroke</code></td><td><code>stroke</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>strokeDashArray</code></td><td><code>stroke-dasharray</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>strokeDashOffset</code></td><td><code>stroke-dashoffset</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>strokeLineCap</code></td><td><code>stroke-linecap</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>strokeLineJoin</code></td><td><code>stroke-linejoin</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>strokeMiterLimit</code></td><td><code>stroke-miterlimit</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>strokeOpacity</code></td><td><code>stroke-opacity</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>strokeWidth</code></td><td><code>stroke-width</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>style</code></td><td><code>style</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>summary</code></td><td><code>summary</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>surfaceScale</code></td><td><code>surfaceScale</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>syncBehavior</code></td><td><code>syncBehavior</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>syncBehaviorDefault</code></td><td><code>syncBehaviorDefault</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>syncMaster</code></td><td><code>syncMaster</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>syncTolerance</code></td><td><code>syncTolerance</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>syncToleranceDefault</code></td><td><code>syncToleranceDefault</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>systemLanguage</code></td><td><code>systemLanguage</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>tabIndex</code></td><td><code>tabindex</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>tableValues</code></td><td><code>tableValues</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>target</code></td><td><code>target</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>targetX</code></td><td><code>targetX</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>targetY</code></td><td><code>targetY</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>text</code></td><td><code>text</code></td><td><code>html</code></td></tr><tr class="even"><td><code>textAnchor</code></td><td><code>text-anchor</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>textDecoration</code></td><td><code>text-decoration</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>textLength</code></td><td><code>textLength</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>textRendering</code></td><td><code>text-rendering</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>timelineBegin</code></td><td><code>timelinebegin</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>title</code></td><td><code>title</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>to</code></td><td><code>to</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>topMargin</code></td><td><code>topmargin</code></td><td><code>html</code></td></tr><tr class="even"><td><code>transform</code></td><td><code>transform</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>transformBehavior</code></td><td><code>transformBehavior</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>translate</code></td><td><code>translate</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>type</code></td><td><code>type</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>typeMustMatch</code></td><td><code>typemustmatch</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>typeOf</code></td><td><code>typeof</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>u1</code></td><td><code>u1</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>u2</code></td><td><code>u2</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>underlinePosition</code></td><td><code>underline-position</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>underlineThickness</code></td><td><code>underline-thickness</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>unicode</code></td><td><code>unicode</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>unicodeBidi</code></td><td><code>unicode-bidi</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>unicodeRange</code></td><td><code>unicode-range</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>unitsPerEm</code></td><td><code>units-per-em</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>unselectable</code></td><td><code>unselectable</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>useMap</code></td><td><code>usemap</code></td><td><code>html</code></td></tr><tr class="even"><td><code>vAlign</code></td><td><code>valign</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>vAlphabetic</code></td><td><code>v-alphabetic</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>vHanging</code></td><td><code>v-hanging</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>vIdeographic</code></td><td><code>v-ideographic</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>vLink</code></td><td><code>vlink</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>vMathematical</code></td><td><code>v-mathematical</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>vSpace</code></td><td><code>vspace</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>value</code></td><td><code>value</code></td><td><code>html</code></td></tr><tr class="even"><td><code>valueType</code></td><td><code>valuetype</code></td><td><code>html</code></td></tr><tr class="odd"><td><code>values</code></td><td><code>values</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>vectorEffect</code></td><td><code>vector-effect</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>version</code></td><td><code>version</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="even"><td><code>vertAdvY</code></td><td><code>vert-adv-y</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>vertOriginX</code></td><td><code>vert-origin-x</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>vertOriginY</code></td><td><code>vert-origin-y</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>viewBox</code></td><td><code>viewBox</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>viewTarget</code></td><td><code>viewTarget</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>visibility</code></td><td><code>visibility</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>width</code></td><td><code>width</code></td><td><code>svg</code>, <code>html</code></td></tr><tr class="odd"><td><code>widths</code></td><td><code>widths</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>wordSpacing</code></td><td><code>word-spacing</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>wrap</code></td><td><code>wrap</code></td><td><code>html</code></td></tr><tr class="even"><td><code>writingMode</code></td><td><code>writing-mode</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>x</code></td><td><code>x</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>x1</code></td><td><code>x1</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>x2</code></td><td><code>x2</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>xChannelSelector</code></td><td><code>xChannelSelector</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>xHeight</code></td><td><code>x-height</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>xLinkActuate</code></td><td><code>xlink:actuate</code></td><td><code>xlink</code></td></tr><tr class="odd"><td><code>xLinkArcRole</code></td><td><code>xlink:arcrole</code></td><td><code>xlink</code></td></tr><tr class="even"><td><code>xLinkHref</code></td><td><code>xlink:href</code></td><td><code>xlink</code></td></tr><tr class="odd"><td><code>xLinkRole</code></td><td><code>xlink:role</code></td><td><code>xlink</code></td></tr><tr class="even"><td><code>xLinkShow</code></td><td><code>xlink:show</code></td><td><code>xlink</code></td></tr><tr class="odd"><td><code>xLinkTitle</code></td><td><code>xlink:title</code></td><td><code>xlink</code></td></tr><tr class="even"><td><code>xLinkType</code></td><td><code>xlink:type</code></td><td><code>xlink</code></td></tr><tr class="odd"><td><code>xmlBase</code></td><td><code>xml:base</code></td><td><code>xml</code></td></tr><tr class="even"><td><code>xmlLang</code></td><td><code>xml:lang</code></td><td><code>xml</code></td></tr><tr class="odd"><td><code>xmlSpace</code></td><td><code>xml:space</code></td><td><code>xml</code></td></tr><tr class="even"><td><code>xmlns</code></td><td><code>xmlns</code></td><td><code>xmlns</code></td></tr><tr class="odd"><td><code>xmlnsXLink</code></td><td><code>xmlns:xlink</code></td><td><code>xmlns</code></td></tr><tr class="even"><td><code>y</code></td><td><code>y</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>y1</code></td><td><code>y1</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>y2</code></td><td><code>y2</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>yChannelSelector</code></td><td><code>yChannelSelector</code></td><td><code>svg</code></td></tr><tr class="even"><td><code>z</code></td><td><code>z</code></td><td><code>svg</code></td></tr><tr class="odd"><td><code>zoomAndPan</code></td><td><code>zoomAndPan</code></td><td><code>svg</code></td></tr></tbody></table>

## Related

- [`web-namespaces`](https://github.com/wooorm/web-namespaces) — List of web namespaces
- [`space-separated-tokens`](https://github.com/wooorm/space-separated-tokens) — Parse/stringify space-separated tokens
- [`comma-separated-tokens`](https://github.com/wooorm/comma-separated-tokens) — Parse/stringify comma-separated tokens
- [`html-tag-names`](https://github.com/wooorm/html-tag-names) — List of HTML tags
- [`mathml-tag-names`](https://github.com/wooorm/mathml-tag-names) — List of MathML tags
- [`svg-tag-names`](https://github.com/wooorm/svg-tag-names) — List of SVG tags
- [`html-void-elements`](https://github.com/wooorm/html-void-elements) — List of void HTML tag-names
- [`svg-element-attributes`](https://github.com/wooorm/svg-element-attributes) — Map of SVG elements to allowed attributes
- [`html-element-attributes`](https://github.com/wooorm/html-element-attributes) — Map of HTML elements to allowed attributes
- [`aria-attributes`](https://github.com/wooorm/aria-attributes) — List of ARIA attributes

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

Derivative work based on [React](https://github.com/facebook/react/blob/f445dd9/src/renderers/dom/shared/HTMLDOMPropertyConfig.js) licensed under [BSD-3-Clause-Clear](https://github.com/facebook/react/blob/88cdc27/LICENSE), © 2013-2015, Facebook, Inc.

fixtures/node_modules/regenerator-runtime/

### [fixtures/node_modules/regenerator-runtime/README.md](fixtures/node_modules/regenerator-runtime/README.md)

# regenerator-runtime

Standalone runtime for [Regenerator](https://github.com/facebook/regenerator)-compiled generator and `async` functions.

To import the runtime as a module (recommended), either of the following import styles will work:

    // CommonJS
    const regeneratorRuntime = require("regenerator-runtime");

    // ECMAScript 2015
    import regeneratorRuntime from "regenerator-runtime";

To ensure that `regeneratorRuntime` is defined globally, either of the following styles will work:

    // CommonJS
    require("regenerator-runtime/runtime");

    // ECMAScript 2015
    import "regenerator-runtime/runtime.js";

To get the absolute file system path of `runtime.js`, evaluate the following expression:

    require("regenerator-runtime/path").path;

fixtures/node_modules/rehype-document/

### [fixtures/node_modules/rehype-document/readme.md](fixtures/node_modules/rehype-document/readme.md)

# rehype-document

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**rehype**](https://github.com/rehypejs/rehype) plugin to wrap a document around a fragment.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install rehype-document

## Use

Say `example.md` looks as follows:

    ## Hello world!

    This is **my** document.

…and `example.js` like this:

    var vfile = require("to-vfile");
    var report = require("vfile-reporter");
    var unified = require("unified");
    var parse = require("remark-parse");
    var mutate = require("remark-rehype");
    var stringify = require("rehype-stringify");
    var doc = require("rehype-document");

    unified()
      .use(parse)
      .use(mutate)
      .use(doc, { title: "Hi!" })
      .use(stringify)
      .process(vfile.readSync("example.md"), function (err, file) {
        console.error(report(err || file));
        console.log(String(file));
      });

Now, running `node example` yields:

    example.md: no issues found
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Hi!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <h2>Hello world!</h2>
        <p>This is <strong>my</strong> document.</p>
      </body>
    </html>

## API

### `rehype().use(document[, options])`

Wrap a document around a fragment.

##### `options`

###### `options.title`

Text to use as title (`string`, default: name of file, if any).

###### `options.language`

Natural language of document (`string`, default: `'en'`). should be a [BCP 47](https://tools.ietf.org/html/bcp47) language tag.

###### `options.responsive`

Whether to insert a `meta[viewport]` (`boolean`, default: `true`).

###### `options.doctype`

[Doctype](https://github.com/wooorm/doctype) to use (`string`, default: `'5'`).

###### `options.style`

CSS to include in `head` in `<style>` elements (`string` or `Array.<string>`, default: `[]`).

###### `options.css`

Links to stylesheets to include in `head` (`string` or `Array.<string>`, default: `[]`).

###### `options.meta`

Metadata to include in `head` (`Object` or `Array.<Object>`, default: `[]`). Each object is passed as [`properties`](https://github.com/syntax-tree/hastscript#hselector-properties-children) to [`hastscript`](https://github.com/syntax-tree/hastscript) with a `meta` element.

###### `options.link`

Link tags to include in `head` (`Object` or `Array.<Object>`, default: `[]`). Each object is passed as [`properties`](https://github.com/syntax-tree/hastscript#hselector-properties-children) to [`hastscript`](https://github.com/syntax-tree/hastscript) with a `link` element.

###### `options.script`

Inline scripts to include at end of `body` (`string` or `Array.<string>`, default: `[]`).

###### `options.js`

External scripts to include at end of `body` (`string` or `Array.<string>`, default: `[]`).

## Security

Use of `rehype-document` can open you up to a [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attack if you pass user provided content in options.

Always be wary of user input and use [`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize).

## Related

- [`rehype-format`](https://github.com/rehypejs/rehype-format) — Format HTML
- [`rehype-minify`](https://github.com/rehypejs/rehype-minify) — Minify HTML

## Contribute

See [`contributing.md`](https://github.com/syntax-tree/.github/blob/master/contributing.md) in [`rehypejs/.github`](https://github.com/rehypejs/.github) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/rehype-meta/

### [fixtures/node_modules/rehype-meta/readme.md](fixtures/node_modules/rehype-meta/readme.md)

# rehype-meta

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**rehype**](https://github.com/rehypejs/rehype) plugin to add metadata (Open Graph, Twitter) to your head.

## Table of contents

- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`rehype().use(meta[, options])`](#rehypeusemeta-options)
  - [`Config`](#config)
- [Metadata](#metadata)
- [Security](#security)
- [Related](#related)
- [Contribute](#contribute)
- [License](#license)

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install rehype-meta

## Use

Say `example.js` looks as follows:

    var report = require("vfile-reporter");
    var rehype = require("rehype");
    var meta = require("rehype-meta");

    rehype()
      .data("settings", { fragment: true })
      .use(meta, {
        twitter: true,
        og: true,
        copyright: true,
        type: "article",
        origin: "https://www.nytimes.com",
        pathname: "/interactive/2019/12/02/nyregion/nyc-subway-map.html",
        name: "The New York Times",
        siteTags: [
          "US Politics",
          "Impeachment",
          "NATO",
          "London",
          "Food",
          "Poverty",
          "Climate Change",
          "Global Warming",
        ],
        siteAuthor: "The New York Times",
        siteTwitter: "@nytimes",
        author: "Jane Doe",
        authorTwitter: "@jane",
        authorFacebook: "janedoe",
        title: "The New York City Subway Map as You’ve Never Seen It Before",
        separator: " | ",
        description:
          "The city has changed drastically over the past 40 years, yet the M.T.A. map designed in 1979 has largely endured.",
        section: "New York",
        tags: [
          "Subway",
          "Map",
          "Public Transit",
          "Design",
          "MTA",
          "Massimo Vignelli",
          "NYC",
        ],
        image: {
          url: "https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-facebookJumbo.jpg",
          alt: "M.T.A. map designed in 1979",
          width: "1050",
          height: "550",
        },
        published: "2019-12-02T10:00:00.000Z",
        modified: "2019-12-03T19:13:00.000Z",
      })
      .process("", function (err, file) {
        console.error(report(err || file));
        console.log(String(file));
      });

Now, running `node example` yields:

    no issues found
    <head>
      <title>
        The New York City Subway Map as You’ve Never Seen It Before | The New York
        Times
      </title>
      <link
        rel="canonical"
        href="https://www.nytimes.com/interactive/2019/12/02/nyregion/nyc-subway-map.html"
      />
      <meta
        name="description"
        content="The city has changed drastically over the past 40 years, yet the M.T.A. map designed in 1979 has largely endured."
      />
      <meta
        name="keywords"
        content="Subway, Map, Public Transit, Design, MTA, Massimo Vignelli, NYC, US Politics, Impeachment, NATO, London, Food, Poverty, Climate Change, Global Warming"
      />
      <meta name="author" content="Jane Doe" />
      <meta name="copyright" content="© 2019 Jane Doe" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="The New York Times" />
      <meta
        property="og:url"
        content="https://www.nytimes.com/interactive/2019/12/02/nyregion/nyc-subway-map.html"
      />
      <meta
        property="og:title"
        content="The New York City Subway Map as You’ve Never Seen It Before"
      />
      <meta
        property="og:description"
        content="The city has changed drastically over the past 40 years, yet the M.T.A. map designed in 1979 has largely endured."
      />
      <meta
        property="og:image"
        content="https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-facebookJumbo.jpg"
      />
      <meta property="og:image:alt" content="M.T.A. map designed in 1979" />
      <meta property="og:image:width" content="1050" />
      <meta property="og:image:height" content="550" />
      <meta property="article:published_time" content="2019-12-02T10:00:00.000Z" />
      <meta property="article:modified_time" content="2019-12-03T19:13:00.000Z" />
      <meta property="article:author" content="https://www.facebook.com/janedoe" />
      <meta property="article:section" content="New York" />
      <meta property="article:tag" content="Subway" />
      <meta property="article:tag" content="Map" />
      <meta property="article:tag" content="Public Transit" />
      <meta property="article:tag" content="Design" />
      <meta property="article:tag" content="MTA" />
      <meta property="article:tag" content="Massimo Vignelli" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-facebookJumbo.jpg"
      />
      <meta name="twitter:image:alt" content="M.T.A. map designed in 1979" />
      <meta name="twitter:site" content="@nytimes" />
      <meta name="twitter:creator" content="@jane" />
    </head>

## API

### `rehype().use(meta[, options])`

Add metadata to the head of a document. Adds a `<head>` if one doesn’t already exist. Overwrites metadata if found: for example, when a `<title>` already exists, updates it.

##### `options`

Configuration with least priority. Mixed into [config](#config).

### `Config`

There are three ways to configure the metadata of a document.

1.  Pass an object as `options` when [using `meta`](#rehypeusemeta-options)
2.  Define it in YAML front matter (by integrating with [`vfile-matter`](https://github.com/vfile/vfile-matter))
3.  Define an object at `file.data.meta`

Configuration is created by extending the defaults, with these objects, in the above order (so `file.data.meta` takes precedence over `options`). Only `options` is enough if every file should have the same metadata. If your workflow enables front matter, `vfile-matter` is a good way to keep data in files. Alternatively, do it yourself by adding data at `file.data.meta`.

###### `config.og`

Whether to add Open Graph metadata (`boolean`, default: `false`).

Affects: [`meta[property=og:site_name]`](#metapropertyogsite_name), [`meta[property=og:url]`](#metapropertyogurl), [`meta[property=og:title]`](#metapropertyogtitle), [`meta[property=og:description]`](#metapropertyogdescription), [`meta[property=og:image]`](#metapropertyogimage), [`meta[property=article:published_time]`](#metapropertyarticlepublished_time), [`meta[property=article:modified_time]`](#metapropertyarticlemodified_time), [`meta[property=article:author]`](#metapropertyarticleauthor), [`meta[property=article:section]`](#metapropertyarticlesection), [`meta[property=article:tag]`](#metapropertyarticletag), [`meta[name=twitter:card]`](#metanametwittercard).

###### `config.twitter`

Whether to add Twitter metadata (`boolean`, default: `false`).

Affects: [`meta[name=twitter:card]`](#metanametwittercard), [`meta[name=twitter:image]`](#metanametwitterimage), [`meta[name=twitter:site]`](#metanametwittersite), [`meta[name=twitter:creator]`](#metanametwittercreator).

###### `config.copyright`

Whether to add copyright metadata (`boolean`, default: `false`).

Affects: [`meta[name=copyright]`](#metanamecopyright).

###### `config.type`

What the document refers to (`'website' | 'article'`, default: `website`).

Affects: [`meta[property=og:type]`](#metapropertyogtype), [`meta[property=article:published_time]`](#metapropertyarticlepublished_time), [`meta[property=article:modified_time]`](#metapropertyarticlemodified_time), [`meta[property=article:author]`](#metapropertyarticleauthor), [`meta[property=article:section]`](#metapropertyarticlesection), [`meta[property=article:tag]`](#metapropertyarticletag).

###### `config.origin`

Origin the file will be hosted on (`string`, optional, example: `https://www.nytimes.com`).

Affects: [`link[rel=canonical]`](#linkrelcanonical), [`meta[property=og:url]`](#metapropertyogurl).

###### `config.pathname`

Absolute pathname of where the file will be hosted (`string`, default: `/`, example: `/interactive/2019/12/02/nyregion/nyc-subway-map.html`).

Affects: [`link[rel=canonical]`](#linkrelcanonical), [`meta[property=og:url]`](#metapropertyogurl).

###### `config.name`

Name of the whole site (`string`, optional, example: `'The New York Times'`).

Affects: [`title`](#title), [`meta[property=og:site_name]`](#metapropertyogsite_name).

###### `config.siteTags`

Tags associated with the whole site (`Array.<string>`, optional, example: `['US Politics', 'Impeachment', 'NATO', 'London', 'Food', 'Poverty', 'Climate Change', 'Global Warming']`).

Affects: [`meta[name=keywords]`](#metanamekeywords).

###### `config.siteAuthor`

Name of the author of the whole site (`string`, optional, example: `'The New York Times'`).

Affects: [`meta[name=author]`](#metanameauthor), [`meta[name=copyright]`](#metanamecopyright).

###### `config.siteTwitter`

Twitter username of the whole site (`string`, optional, example: `'@nytimes'`).

Affects: [`meta[name=twitter:site]`](#metanametwittersite).

###### `config.color`

Hexadecimal theme color of document or site (`string`, optional, example: `'#bada55'`).

Affects: [`meta[name=theme-color]`](#metanametheme-color).

###### `config.author`

Name of the author of the document (`string`, optional, example: `'Jane Doe'`).

Affects: [`meta[name=author]`](#metanameauthor), [`meta[name=copyright]`](#metanamecopyright).

###### `config.authorTwitter`

Twitter username of the author of the document (`string`, optional, example: `'@janedoe'`).

Affects: [`meta[name=twitter:creator]`](#metanametwittercreator).

###### `config.authorFacebook`

Facebook username of the author of the document (`string`, optional, example: `'example'`).

Affects: [`meta[property=article:author]`](#metapropertyarticleauthor).

###### `config.title`

Title of the document (`string`, optional, example: `'The New York City Subway Map as You’ve Never Seen It Before'`).

Affects: [`title`](#title), [`meta[property=og:title]`](#metapropertyogtitle).

###### `config.separator`

Value to use to join the `title` and `name` together (`string`, default: `' - '`).

Affects: [`title`](#title).

###### `config.description`

Value used to join the `title` and `name` together if both exist (`string`, optional, example: `'The city has changed drastically over the past 40 years, yet the M.T.A. map designed in 1979 has largely endured.'`).

Affects: [`meta[name=description]`](#metanamedescription), [`meta[property=og:description]`](#metapropertyogdescription).

###### `config.section`

Section associated with the document (`string`, optional, example: `'New York'`).

Affects: [`meta[property=article:section]`](#metapropertyarticlesection).

###### `config.tags`

Tags associated with the document (`Array.<string>`, optional, example: `['Subway', 'Map', 'Public Transit', 'Design', 'MTA', 'Massimo Vignelli', 'NYC']`).

Affects: [`meta[name=keywords]`](#metanamekeywords), [`meta[property=article:tag]`](#metapropertyarticletag).

###### `config.image`

One or more images associated with the document (`string`, `Image`, or `Array.<string | Image>`, optional). If strings are passed, they are seen as `Image` objects with a `url` field set to that value.

`Image`:

- `url` (`string`, required, example: `'https://static01.nyt.com/images/…/mta-crop-jumbo.jpg'`)
- `alt` (`string`, optional, example: `'M.T.A. map designed in 1979'`)
- `width` (`string`, optional, example: `'1050'`)
- `height` (`string`, optional, example: `'550'`)

Affects: [`meta[property=og:image]`](#metapropertyogimage), [`meta[name=twitter:card]`](#metanametwittercard), [`meta[name=twitter:image]`](#metanametwitterimage).

###### `config.published`

Date the document (or site) was first published (`Date` or `string`, optional, example: `'2019-12-02T10:00:00.000Z'`).

_Note_: parsing a string is [inconsistent](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date#Timestamp_string), prefer dates.

Affects: [`meta[name=copyright]`](#metanamecopyright), [`meta[property=article:published_time]`](#metapropertyarticlepublished_time).

###### `config.modified`

Date the document was last modified (`Date` or `string`, optional, example: `'2019-12-03T19:13:00.000Z'`).

_Note_: parsing a string is [inconsistent](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date#Timestamp_string), prefer dates.

Affects: [`meta[property=article:modified_time]`](#metapropertyarticlemodified_time).

## Metadata

The following metadata can be added by `rehype-meta`.

###### `title`

Affected by: [`title`](#configtitle), [`name`](#configname), [`separator`](#configseparator).

If `title` is `'About'`:

    <title>About</title>

If `name` is `'Example'`:

    <title>Example</title>

If `title` is `'About'` and `name` is `'Example'`:

    <title>About - Example</title>

If `title` is `'About'`, `name` is `'Example'`, and separator to `' | '`:

    <title>About | Example</title>

###### `link[rel=canonical]`

Affected by: [`origin`](#configorigin), [`pathname`](#configpathname).

If `origin` is `'https://example.com'` and `path` is `'/path/'`:

    <link rel="canonical" href="https://example.com/path/" />

If `origin` is `'https://example.com'` and `path` is not set:

    <link rel="canonical" href="https://example.com/" />

###### `meta[name=description]`

Affected by: [`description`](#configdescription).

If `description` is `'Lorem ipsum'`:

    <meta name="description" content="Lorem ipsum" />

###### `meta[name=keywords]`

Affected by: [`tags`](#configtags), [`siteTags`](#configsitetags).

If `tags` is `['a', 'b']`:

    <meta name="keywords" content="a, b" />

If `siteTags` is `['b', 'c']`:

    <meta name="keywords" content="b, c" />

If `tags` is `['a', 'b']` and `siteTags` is `['b', 'c']`:

    <meta name="keywords" content="a, b, c" />

###### `meta[name=author]`

Affected by: [`author`](#configauthor), [`siteAuthor`](#configsiteauthor).

If `author` is `'Jane'`:

    <meta name="author" content="Jane" />

If `siteAuthor` is `'John'`:

    <meta name="author" content="John" />

If `author` is `'Jane'` and `siteAuthor` is `'John'`:

    <meta name="author" content="Jane" />

###### `meta[name=copyright]`

Affected by: [`copyright`](#configcopyright), [`author`](#configauthor), [`siteAuthor`](#configsiteauthor), [`published`](#configpublished).

The below examples depend on the current date, so for example purposes, say it was the year 2030.

If `copyright` is not `true`, `meta[name=copyright]` is not added.

If `copyright` is `true` and `author` is `'Jane'`:

    <meta name="copyright" content="© 2030 Jane" />

If `copyright` is `true` and `siteAuthor` is `'John'`:

    <meta name="copyright" content="© 2030 John" />

If `copyright` is `true`, `author` is `'Jane'`, and `siteAuthor` is `'John'`:

    <meta name="copyright" content="© 2030 Jane" />

If `copyright` is `true`, `author` is `'Jane'`, and `published` is `'2015'`:

    <meta name="copyright" content="© 2015 Jane" />

###### `meta[name=theme-color]`

Affected by: [`color`](#configcolor).

If `color` is `'#bada55'`:

    <meta name="theme-color" content="#bada55" />

###### `meta[property=og:type]`

Affected by: [`og`](#configog), [`type`](#configtype).

If `og` is not `true`, `meta[property=og:type]` is not added.

If `og` is `true` and `type` is `'website'`:

    <meta property="og:type" content="website" />

If `og` is `true` and `type` is `'article'`:

    <meta property="og:type" content="article" />

###### `meta[property=og:site_name]`

Affected by: [`og`](#configog), [`name`](#configname).

If `og` is not `true`, `meta[property=og:site_name]` is not added.

If `og` is `true` and `name` is `'Example'`:

    <meta property="og:site_name" content="Example" />

###### `meta[property=og:url]`

Affected by: [`og`](#configog), [`origin`](#configorigin), [`pathname`](#configpathname).

If `og` is not `true`, `meta[property=og:url]` is not added.

If `og` is `true`, `origin` is `'https://example.com'`, and `path` is `'/path/'`:

    <meta property="og:url" content="https://example.com/path/" />

If `origin` is `'https://example.com'` and `path` is not set:

    <meta property="og:url" content="https://example.com/" />

###### `meta[property=og:title]`

Affected by: [`og`](#configog), [`title`](#configtitle).

If `og` is not `true`, `meta[property=og:title]` is not added.

If `og` is `true` and `title` is `'About'`:

    <meta property="og:title" content="title" />

###### `meta[property=og:description]`

Affected by: [`og`](#configog), [`description`](#configdescription).

If `og` is not `true`, `meta[property=og:description]` is not added.

If `og` is `true` and `description` is `'Lorem ipsum'`:

    <meta property="og:description" content="Lorem ipsum" />

###### `meta[property=og:image]`

Affected by: [`og`](#configog), [`image`](#configimage).

If `og` is not `true`, `meta[property=og:image]`, `meta[property=og:image:alt]`, `meta[property=og:image:width]`, and `meta[property=og:image:height]` are not added.

_Note_: up to 6 images are added.

If `og` is `true` and `image` is `'https://example.com/image.png'`:

    <meta property="og:image" content="https://example.com/image.png" />

If `og` is `true` and `image` is `['https://example.com/a.png', 'https://example.com/b.png']`:

    <meta property="og:image" content="https://example.com/a.png" />
    <meta property="og:image" content="https://example.com/b.png" />

If `og` is `true` and `image` is `{url: 'https://example.com/a.png', alt: 'A', width: '670', height: '1012'}`:

    <meta property="og:image" content="https://example.com/a.png" />
    <meta property="og:image:alt" content="A" />
    <meta property="og:image:width" content="670" />
    <meta property="og:image:height" content="1012" />

###### `meta[property=article:published_time]`

Affected by: [`og`](#configog), [`type`](#configtype), [`published`](#configpublished).

If `og` is not `true` or `type` is not `'article'`, `meta[property=article:published_time]` is not added.

If `og` is `true`, `type` is `'article'`, and `published` is `'2014-06-30T15:01:35-05:00'`:

    <meta property="article:published_time" content="2014-06-30T20:01:35.000Z" />

###### `meta[property=article:modified_time]`

Affected by: [`og`](#configog), [`type`](#configtype), [`modified`](#configmodified).

If `og` is not `true` or `type` is not `'article'`, `meta[property=article:modified_time]` is not added.

If `og` is `true`, `type` is `'article'`, and `modified` is `'2017-04-26T22:37:10-05:00'`:

    <meta property="article:modified_time" content="2017-04-27T03:37:10.000Z" />

###### `meta[property=article:author]`

Affected by: [`og`](#configog), [`type`](#configtype), [`authorFacebook`](#configauthorfacebook).

If `og` is not `true` or `type` is not `'article'`, `meta[property=article:author]` is not added.

If `og` is `true`, `type` is `'article'`, and `authorFacebook` is `'jane'`:

    <meta property="article:author" content="https://www.facebook.com/jane" />

###### `meta[property=article:section]`

Affected by: [`og`](#configog), [`type`](#configtype), [`section`](#configsection).

If `og` is not `true` or `type` is not `'article'`, `meta[property=article:section]` is not added.

If `og` is `true`, `type` is `'article'`, and `section` is `'Politics'`:

    <meta property="article:section" content="Politics" />

###### `meta[property=article:tag]`

Affected by: [`og`](#configog), [`type`](#configtype), [`tag`](#configtags).

If `og` is not `true` or `type` is not `'article'`, `meta[property=article:tag]` are not added.

_Note_: up to 6 tags are added.

If `og` is `true`, `type` is `'article'`, and `tags` is `['US Politics', 'Impeachment', 'NATO', 'London', 'Food', 'Poverty', 'Climate Change']`:

    <meta property="article:tag" content="US Politics" />
    <meta property="article:tag" content="Impeachment" />
    <meta property="article:tag" content="NATO" />
    <meta property="article:tag" content="London" />
    <meta property="article:tag" content="Food" />
    <meta property="article:tag" content="Poverty" />

###### `meta[name=twitter:card]`

Affected by: [`og`](#configog), [`twitter`](#configtwitter), [`image`](#configimage).

If `twitter` is not `true`, `meta[name=twitter:card]` is not added. If `twitter` is `true`, `og` is true, and there is no valid image, no `meta[name=twitter:card]` is added either, because Twitter assumes a summary in this case.

If `twitter` is `true` and there is a valid image:

    <meta name="twitter:card" content="summary_large_image" />

If `twitter` is `true` and there is no valid image:

    <meta name="twitter:card" content="summary" />

###### `meta[name=twitter:image]`

Affected by: [`twitter`](#configtwitter), [`image`](#configimage).

If `twitter` is not `true`, `meta[name=twitter:image]` and `meta[name=twitter:image:alt]` are not added.

_Note_: only one image is added.

If `twitter` is `true` and `image` is `'https://example.com/image.png'`:

    <meta name="twitter:image" content="https://example.com/image.png" />

If `twitter` is `true` and `image` is `['https://example.com/a.png', 'https://example.com/b.png']`:

    <meta name="twitter:image" content="https://example.com/a.png" />

If `twitter` is `true` and `image` is `{url: 'https://example.com/a.png', alt: 'A', width: '670', height: '1012'}`:

    <meta name="twitter:image" content="https://example.com/a.png" />
    <meta name="twitter:image:alt" content="A" />

###### `meta[name=twitter:site]`

Affected by: [`twitter`](#configtwitter), [`siteTwitter`](#configsitetwitter).

If `twitter` is not `true`, `meta[name=twitter:site]` is not added.

If `twitter` is `true` and `siteTwitter` is `'@example'`:

    <meta name="twitter:site" content="@example" />

###### `meta[name=twitter:creator]`

Affected by: [`twitter`](#configtwitter), [`authorTwitter`](#configauthortwitter).

If `twitter` is not `true`, `meta[name=twitter:creator]` is not added.

If `twitter` is `true` and `authorTwitter` is `'@example'`:

    <meta name="twitter:creator" content="@example" />

## Security

Use of `rehype-meta` is relatively safe, however, it is possible for an attacker to define metadata from within a because of the [`matter`](https://github.com/vfile/vfile-matter) integration .

## Related

- [`rehype-document`](https://github.com/rehypejs/rehype-document) — Wrap a document around the tree
- [`rehype-format`](https://github.com/rehypejs/rehype-format) — Format HTML
- [`rehype-minify`](https://github.com/rehypejs/rehype-minify) — Minify HTML

## Contribute

See [`contributing.md`](https://github.com/syntax-tree/.github/blob/master/contributing.md) in [`rehypejs/.github`](https://github.com/rehypejs/.github) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/rehype-stringify/

### [fixtures/node_modules/rehype-stringify/readme.md](fixtures/node_modules/rehype-stringify/readme.md)

# rehype-stringify

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**rehype**](https://github.com/rehypejs/rehype) plugin to serialize HTML. [Compiler](https://github.com/unifiedjs/unified#processorcompiler) for [**unified**](https://github.com/unifiedjs/unified). Stringifies [**hast**](https://github.com/syntax-tree/hast) syntax trees to HTML. Used in the [**rehype** processor](https://github.com/rehypejs/rehype/tree/master/packages/rehype) but can be used on its own as well.

If you’re in a browser, trust the content, and value a smaller bundle size, use [`rehype-dom-stringify`](https://github.com/rehypejs/rehype-dom/tree/master/packages/rehype-dom-stringify) instead.

## Sponsors

<table><tbody><tr class="odd"><td style="text-align: center;"><a href="https://zeit.co"><img src="https://avatars1.githubusercontent.com/u/14985020?s=400&amp;v=4" /></a><br />
<br />
🥇 <a href="https://zeit.co">ZEIT</a></td><td style="text-align: center;"><a href="https://www.gatsbyjs.org"><img src="https://avatars1.githubusercontent.com/u/12551863?s=400&amp;v=4" /></a><br />
<br />
🥇 <a href="https://www.gatsbyjs.org">Gatsby</a></td><td style="text-align: center;"><a href="https://www.netlify.com"><img src="https://avatars1.githubusercontent.com/u/7892489?s=400&amp;v=4" /></a><br />
<br />
🥇 <a href="https://www.netlify.com">Netlify</a></td><td style="text-align: center;"><a href="https://www.holloway.com"><img src="https://avatars1.githubusercontent.com/u/35904294?s=400&amp;v=4" /></a><br />
<br />
<a href="https://www.holloway.com">Holloway</a></td><td style="text-align: center;"><br />
<br />
<br />
<br />
<strong>You?</strong></td></tr></tbody></table>

[**Read more about the unified collective on Medium »**](https://medium.com/unifiedjs/collectively-evolving-through-crowdsourcing-22c359ea95cc)

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install rehype-stringify

## Use

    var unified = require("unified");
    var createStream = require("unified-stream");
    var parse = require("rehype-parse");
    var stringify = require("rehype-stringify");

    var processor = unified()
      .use(parse)
      .use(stringify, {
        quoteSmart: true,
        closeSelfClosing: true,
        omitOptionalTags: true,
        entities: { useShortestReferences: true },
      });

    process.stdin.pipe(createStream(processor)).pipe(process.stdout);

## API

### `processor.use(stringify[, options])`

Configure `processor` to serialize [**hast**](https://github.com/syntax-tree/hast) syntax trees to HTML.

###### `options`

Options can be passed when using `processor.use(stringify, options)` or with `processor.data('settings', options)`. All settings are passed to [`hast-util-to-html`](https://github.com/syntax-tree/hast-util-to-html#tohtmlnode-options).

## Security

As **rehype** works on HTML, and improper use of HTML can open you up to a [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attack, use of rehype can also be unsafe. Use [`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize) to make the tree safe.

## Contribute

See [`contributing.md`](https://github.com/syntax-tree/.github/blob/master/contributing.md) in [`rehypejs/.github`](https://github.com/rehypejs/.github) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help. Ideas for new plugins and tools can be posted in [`rehypejs/ideas`](https://github.com/rehypejs/ideas).

A curated list of awesome rehype resources can be found in [**awesome rehype**](https://github.com/rehypejs/awesome-rehype).

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/rimraf/

### [fixtures/node_modules/rimraf/CHANGELOG.md](fixtures/node_modules/rimraf/CHANGELOG.md)

# v3.0

- Add `--preserve-root` option to executable (default true)
- Drop support for Node.js below version 6

# v2.7

- Make `glob` an optional dependency

# 2.6

- Retry on EBUSY on non-windows platforms as well
- Make `rimraf.sync` 10000% more reliable on Windows

# 2.5

- Handle Windows EPERM when lstat-ing read-only dirs
- Add glob option to pass options to glob

# 2.4

- Add EPERM to delay/retry loop
- Add `disableGlob` option

# 2.3

- Make maxBusyTries and emfileWait configurable
- Handle weird SunOS unlink-dir issue
- Glob the CLI arg for better Windows support

# 2.2

- Handle ENOENT properly on Windows
- Allow overriding fs methods
- Treat EPERM as indicative of non-empty dir
- Remove optional graceful-fs dep
- Consistently return null error instead of undefined on success
- win32: Treat ENOTEMPTY the same as EBUSY
- Add `rimraf` binary

# 2.1

- Fix SunOS error code for a non-empty directory
- Try rmdir before readdir
- Treat EISDIR like EPERM
- Remove chmod
- Remove lstat polyfill, node 0.7 is not supported

# 2.0

- Fix myGid call to check process.getgid
- Simplify the EBUSY backoff logic.
- Use fs.lstat in node &gt;= 0.7.9
- Remove gently option
- remove fiber implementation
- Delete files that are marked read-only

# 1.0

- Allow ENOENT in sync method
- Throw when no callback is provided
- Make opts.gently an absolute path
- use ‘stat’ if ‘lstat’ is not available
- Consistent error naming, and rethrow non-ENOENT stat errors
- add fiber implementation

### [fixtures/node_modules/rimraf/README.md](fixtures/node_modules/rimraf/README.md)

[![Build Status](https://travis-ci.org/isaacs/rimraf.svg?branch=master)](https://travis-ci.org/isaacs/rimraf) [![Dependency Status](https://david-dm.org/isaacs/rimraf.svg)](https://david-dm.org/isaacs/rimraf) [![devDependency Status](https://david-dm.org/isaacs/rimraf/dev-status.svg)](https://david-dm.org/isaacs/rimraf#info=devDependencies)

The [UNIX command](<http://en.wikipedia.org/wiki/Rm_(Unix)>) `rm -rf` for node.

Install with `npm install rimraf`, or just drop rimraf.js somewhere.

## API

`rimraf(f, [opts], callback)`

The first parameter will be interpreted as a globbing pattern for files. If you want to disable globbing you can do so with `opts.disableGlob` (defaults to `false`). This might be handy, for instance, if you have filenames that contain globbing wildcard characters.

The callback will be called with an error if there is one. Certain errors are handled for you:

- Windows: `EBUSY` and `ENOTEMPTY` - rimraf will back off a maximum of `opts.maxBusyTries` times before giving up, adding 100ms of wait between each attempt. The default `maxBusyTries` is 3.
- `ENOENT` - If the file doesn’t exist, rimraf will return successfully, since your desired outcome is already the case.
- `EMFILE` - Since `readdir` requires opening a file descriptor, it’s possible to hit `EMFILE` if too many file descriptors are in use. In the sync case, there’s nothing to be done for this. But in the async case, rimraf will gradually back off with timeouts up to `opts.emfileWait` ms, which defaults to 1000.

## options

- unlink, chmod, stat, lstat, rmdir, readdir, unlinkSync, chmodSync, statSync, lstatSync, rmdirSync, readdirSync

  In order to use a custom file system library, you can override specific fs functions on the options object.

  If any of these functions are present on the options object, then the supplied function will be used instead of the default fs method.

  Sync methods are only relevant for `rimraf.sync()`, of course.

  For example:

      var myCustomFS = require("some-custom-fs");

      rimraf("some-thing", myCustomFS, callback);

- maxBusyTries

  If an `EBUSY`, `ENOTEMPTY`, or `EPERM` error code is encountered on Windows systems, then rimraf will retry with a linear backoff wait of 100ms longer on each try. The default maxBusyTries is 3.

  Only relevant for async usage.

- emfileWait

  If an `EMFILE` error is encountered, then rimraf will retry repeatedly with a linear backoff of 1ms longer on each try, until the timeout counter hits this max. The default limit is 1000.

  If you repeatedly encounter `EMFILE` errors, then consider using [graceful-fs](http://npm.im/graceful-fs) in your program.

  Only relevant for async usage.

- glob

  Set to `false` to disable [glob](http://npm.im/glob) pattern matching.

  Set to an object to pass options to the glob module. The default glob options are `{ nosort: true, silent: true }`.

  Glob version 6 is used in this module.

  Relevant for both sync and async usage.

- disableGlob

  Set to any non-falsey value to disable globbing entirely. (Equivalent to setting `glob: false`.)

## rimraf.sync

It can remove stuff synchronously, too. But that’s not so good. Use the async API. It’s better.

## CLI

If installed with `npm install rimraf -g` it can be used as a global command `rimraf <path> [<path> ...]` which is useful for cross platform support.

## mkdirp

If you need to create a directory recursively, check out [mkdirp](https://github.com/substack/node-mkdirp).

fixtures/node_modules/slugify/

### [fixtures/node_modules/slugify/README.md](fixtures/node_modules/slugify/README.md)

# slugify

[![npm-version](https://img.shields.io/npm/v/slugify.svg?style=flat-square "NPM Package Version")](https://docs.npmjs.com/cli/install) [![travis-ci](https://img.shields.io/travis/simov/slugify/master.svg?style=flat-square "Build Status - Travis CI")](https://travis-ci.org/simov/slugify) [![coveralls-status](https://img.shields.io/coveralls/simov/slugify.svg?style=flat-square "Test Coverage - Coveralls")](https://coveralls.io/r/simov/slugify?branch=master)

    var slugify = require("slugify");

    slugify("some string"); // some-string

    // if you prefer something other than '-' as separator
    slugify("some string", "_"); // some_string

- Vanilla ES5 JavaScript
- No dependencies
- Coerces foreign symbols to their English equivalent (check out the [charMap](https://github.com/simov/slugify/blob/master/config/charmap.json) for more details)
- Works in the browser (window.slugify) and AMD/CommonJS-flavored module loaders

## Options

    slugify("some string", {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: false, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
    });

For example, to remove `*+~.()'"!:@` from the result slug, you can use `slugify('..', {remove: /[*+~.()'"!:@]/g})`.

## Extend

Out of the box `slugify` comes with support for a handful of Unicode symbols. For example the `☢` (radioactive) symbol is not defined in the [`charMap`](https://github.com/simov/slugify/blob/master/config/charmap.json) and therefore it will be stripped by default:

    slugify("unicode ♥ is ☢"); // unicode-love-is

However you can extend the supported symbols, or override the existing ones with your own:

    slugify.extend({ "☢": "radioactive" });
    slugify("unicode ♥ is ☢"); // unicode-love-is-radioactive

Keep in mind that the `extend` method extends/overrides the default `charMap` for the entire process. In case you need a fresh instance of the slugify’s `charMap` object you have to clean up the module cache first:

    delete require.cache[require.resolve("slugify")];
    var slugify = require("slugify");

## Contribute

1.  Add chars to `charmap.json`
2.  Run tests `npm test`
3.  The tests will build the charmap in `index.js` and will sort the `charmap.json`
4.  Commit **all** modified files

---

> This module was originally a vanilla javascript port of [node-slug](https://github.com/dodo/node-slug).  
> Note that the original [slug](https://www.npmjs.com/package/slug) module has been ported to vanilla javascript too.  
> One major difference between the two modules is that `slugify` does not depend on the external [unicode](https://www.npmjs.com/package/unicode) module.

fixtures/node_modules/space-separated-tokens/

### [fixtures/node_modules/space-separated-tokens/readme.md](fixtures/node_modules/space-separated-tokens/readme.md)

# space-separated-tokens

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Parse and stringify space-separated tokens according to the [spec](https://html.spec.whatwg.org/#space-separated-tokens).

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install space-separated-tokens

## Usage

    var spaceSeparated = require("space-separated-tokens");

    spaceSeparated.parse(" foo\tbar\nbaz  ");
    //=> ['foo', 'bar', 'baz']

    spaceSeparated.stringify(["foo", "bar", "baz"]);
    //=> 'foo bar baz'

## API

### `spaceSeparated.parse(value)`

Parse space-separated tokens to an array of strings, according to the [spec](https://html.spec.whatwg.org/#space-separated-tokens).

###### Parameters

- `value` (`string`) — space-separated tokens

###### Returns

`Array.<string>` — List of tokens.

### `spaceSeparated.stringify(values)`

Serialize an array of strings to space-separated tokens. Note that it’s not possible to specify empty or whitespace only values.

###### Parameters

- `values` (`Array.<string>`) — List of tokens

###### Returns

`string` — Space-separated tokens.

## Related

- [`collapse-white-space`](https://github.com/wooorm/collapse-white-space) — Replace multiple white-space characters with a single space
- [`property-information`](https://github.com/wooorm/property-information) — Information on HTML properties
- [`comma-separated-tokens`](https://github.com/wooorm/comma-separated-tokens) — Parse/stringify comma-separated tokens

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/stringify-entities/

### [fixtures/node_modules/stringify-entities/readme.md](fixtures/node_modules/stringify-entities/readme.md)

# stringify-entities

[![Build Status](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/stringify-entities) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/stringify-entities) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Encode HTML character references and character entities.

- \[x\] Very fast
- \[x\] Just the encoding part
- \[x\] Reliable: `` '`' `` characters are escaped to ensure no scripts run in IE6-8. Additionally, only named entities recognised by HTML4 are encoded, meaning the infamous `&apos;` (which people think is a [virus](https://www.telegraph.co.uk/technology/advice/10516839/Why-do-some-apostrophes-get-replaced-with-andapos.html)) won’t show up

## Algorithm

By default, all dangerous, non-ASCII, or non-printable ASCII characters are encoded. A [subset](#optionssubset) of characters can be given to encode just those characters. Alternatively, pass [`escapeOnly`](#optionsescapeonly) to escape just the dangerous characters (`"`, `'`, `<`, `>`, `&`, `` ` ``). By default, numeric entities are used. Pass [`useNamedReferences`](#optionsusenamedreferences) to use named entities when possible, or [`useShortestReferences`](#optionsuseshortestreferences) to use them if that results in less bytes.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install stringify-entities

## Use

    var stringify = require("stringify-entities");

    stringify("alpha © bravo ≠ charlie 𝌆 delta");
    // => 'alpha &#xA9; bravo &#x2260; charlie &#x1D306; delta'

    stringify("alpha © bravo ≠ charlie 𝌆 delta", { useNamedReferences: true });
    // => 'alpha &copy; bravo &ne; charlie &#x1D306; delta'

## API

### `stringifyEntities(value[, options])`

Encode special characters in `value`.

##### `options`

###### `options.escapeOnly`

Whether to only escape possibly dangerous characters (`boolean`, default: `false`). Those characters are `"`, `'`, `<`, `>` `&`, and `` ` ``.

###### `options.subset`

Whether to only escape the given subset of characters (`Array.<string>`).

###### `options.useNamedReferences`

Whether to use named entities where possible (`boolean?`, default: `false`).

###### `options.useShortestReferences`

Whether to use named entities, where possible, if that results in less bytes (`boolean?`, default: `false`). **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.

###### `options.omitOptionalSemicolons`

Whether to omit semi-colons when possible (`boolean?`, default: `false`). **Note**: This creates parse errors, don’t use this except when building a minifier.

Omitting semi-colons is possible for [certain](dangerous.json) [legacy](https://github.com/wooorm/character-entities-legacy) named references, and numeric entities, in some cases.

###### `options.attribute`

Only needed when operating dangerously with `omitOptionalSemicolons: true`. Create entities which don’t fail in attributes (`boolean?`, default: `false`).

## Related

- [`parse-entities`](https://github.com/wooorm/parse-entities) — Parse HTML character references
- [`character-entities`](https://github.com/wooorm/character-entities) — Info on character entities
- [`character-entities-html4`](https://github.com/wooorm/character-entities-html4) — Info on HTML4 character entities
- [`character-entities-legacy`](https://github.com/wooorm/character-entities-legacy) — Info on legacy character entities
- [`character-reference-invalid`](https://github.com/wooorm/character-reference-invalid) — Info on invalid numeric character references

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/unist-builder/

### [fixtures/node_modules/unist-builder/readme.md](fixtures/node_modules/unist-builder/readme.md)

# unist-builder

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**unist**](https://github.com/syntax-tree/unist) utility to create a new [tree](https://github.com/syntax-tree/unist#tree)s with [hyperscript](https://github.com/dominictarr/hyperscript)-like syntax.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install unist-builder

## Use

    var u = require("unist-builder");

    var tree = u("root", [
      u("subtree", { id: 1 }),
      u("subtree", { id: 2 }, [
        u("node", [u("leaf", "leaf 1"), u("leaf", "leaf 2")]),
        u("leaf", { id: 3 }, "leaf 3"),
        u("void", { id: 4 }),
      ]),
    ]);

    console.dir(tree, { depth: null });

results in the following tree:

    {
      type: 'root',
      children: [
        {type: 'subtree', id: 1},
        {
          type: 'subtree',
          id: 2,
          children: [
            {
              type: 'node',
              children: [
                {type: 'leaf', value: 'leaf 1'},
                {type: 'leaf', value: 'leaf 2'}
              ]
            },
            {type: 'leaf', id: 3, value: 'leaf 3'},
            {type: 'void', id: 4}
          ]
        }
      ]
    }

## API

### `u(type[, props][, children|value])`

Creates a node from `props`, `children`, and optionally `value`.

###### Signatures

- `u(type[, props], children)` — create a [parent](https://github.com/syntax-tree/unist#parent-1)
- `u(type[, props], value)` — create a [literal](https://github.com/syntax-tree/unist#literal)
- `u(type[, props])` — create a void node

###### Parameters

- `type` (`string`) — node [type](https://github.com/syntax-tree/unist#type)
- `props` (`Object`) — other values assigned to `node`
- `children` ([`Array.<Node>`](https://github.com/syntax-tree/unist#node)) — children of `node`
- `value` (`*`) — value of `node` (cast to string)

###### Returns

[`Node`](https://github.com/syntax-tree/unist#node).

## Related

- [`unist-builder-blueprint`](https://github.com/syntax-tree/unist-builder-blueprint) — Convert unist trees to `unist-builder` notation
- [`hastscript`](https://github.com/syntax-tree/hastscript) — Create [hast](https://github.com/syntax-tree/hast) elements
- [`xastscript`](https://github.com/syntax-tree/xastscript) — Create [xast](https://github.com/syntax-tree/xast) elements

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © Eugene Sharygin

fixtures/node_modules/unist-util-is/

### [fixtures/node_modules/unist-util-is/readme.md](fixtures/node_modules/unist-util-is/readme.md)

# unist-util-is

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**unist**](https://github.com/syntax-tree/unist) utility to check if a node passes a test.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install unist-util-is

## Use

    var is = require("unist-util-is");

    var node = { type: "strong" };
    var parent = { type: "paragraph", children: [node] };

    function test(node, n) {
      return n === 5;
    }

    is(); // => false
    is({ children: [] }); // => false
    is(node); // => true
    is(node, "strong"); // => true
    is(node, "emphasis"); // => false

    is(node, node); // => true
    is(parent, { type: "paragraph" }); // => true
    is(parent, { type: "strong" }); // => false

    is(node, test); // => false
    is(node, test, 4, parent); // => false
    is(node, test, 5, parent); // => true

## API

### `is(node[, test[, index, parent[, context]]])`

###### Parameters

- `node` ([`Node`](https://github.com/syntax-tree/unist#node)) — Node to check.
- `test` ([`Function`](#function-testnode-index-parent), `string`, `Object`, or `Array.<Test>`, optional) — When not given, checks if `node` is a [`Node`](https://github.com/syntax-tree/unist#node). When `string`, works like passing `node => node.type === test`. When `array`, checks if any one of the subtests pass. When `object`, checks that all keys in `test` are in `node`, and that they have strictly equal values
- `index` (`number`, optional) — [Index](https://github.com/syntax-tree/unist#index) of `node` in `parent`
- `parent` ([`Node`](https://github.com/syntax-tree/unist#node), optional) — [Parent](https://github.com/syntax-tree/unist#parent-1) of `node`
- `context` (`*`, optional) — Context object to invoke `test` with

###### Returns

`boolean` — Whether `test` passed _and_ `node` is a [`Node`](https://github.com/syntax-tree/unist#node) (object with `type` set to a non-empty `string`).

#### `function test(node[, index, parent])`

###### Parameters

- `node` ([`Node`](https://github.com/syntax-tree/unist#node)) — Node to check
- `index` (`number?`) — [Index](https://github.com/syntax-tree/unist#index) of `node` in `parent`
- `parent` ([`Node?`](https://github.com/syntax-tree/unist#node)) — [Parent](https://github.com/syntax-tree/unist#parent-1) of `node`

###### Context

`*` — The to `is` given `context`.

###### Returns

`boolean?` — Whether `node` matches.

### `is.convert(test)`

Create a test function from `test`, that can later be called with a `node`, `index`, and `parent`. Useful if you’re going to test many nodes, for example when creating a utility where something else passes an is-compatible test.

The created function is slightly faster because it expects valid input only. Therefore, passing invalid input, yields unexpected results.

Can also be accessed with `require('unist-util-is/convert')`.

For example:

    var u = require("unist-builder");
    var convert = require("unist-util-is/convert");

    var test = convert("leaf");

    var tree = u("tree", [
      u("node", [u("leaf", "1")]),
      u("leaf", "2"),
      u("node", [u("leaf", "3"), u("leaf", "4")]),
      u("leaf", "5"),
    ]);

    var leafs = tree.children.filter((child, index) => test(child, index, tree));

    console.log(leafs);

Yields:

    [
      { type: "leaf", value: "2" },
      { type: "leaf", value: "5" },
    ];

## Related

- [`unist-util-find-after`](https://github.com/syntax-tree/unist-util-find-after) — Find a node after another node
- [`unist-util-find-before`](https://github.com/syntax-tree/unist-util-find-before) — Find a node before another node
- [`unist-util-find-all-after`](https://github.com/syntax-tree/unist-util-find-all-after) — Find all nodes after another node
- [`unist-util-find-all-before`](https://github.com/syntax-tree/unist-util-find-all-before) — Find all nodes before another node
- [`unist-util-find-all-between`](https://github.com/mrzmmr/unist-util-find-all-between) — Find all nodes between two nodes
- [`unist-util-find`](https://github.com/blahah/unist-util-find) — Find nodes matching a predicate
- [`unist-util-filter`](https://github.com/eush77/unist-util-filter) — Create a new tree with nodes that pass a check
- [`unist-util-remove`](https://github.com/eush77/unist-util-remove) — Remove nodes from tree

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/unist-util-visit-parents/

### [fixtures/node_modules/unist-util-visit-parents/readme.md](fixtures/node_modules/unist-util-visit-parents/readme.md)

# unist-util-visit-parents

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**unist**](https://github.com/syntax-tree/unist) utility to visit nodes, with ancestral information.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install unist-util-visit-parents

## Use

    var remark = require("remark");
    var visit = require("unist-util-visit-parents");

    var tree = remark.parse("Some _emphasis_, **importance**, and `code`.");

    visit(tree, "strong", visitor);

    function visitor(node, ancestors) {
      console.log(ancestors);
    }

Yields:

    [
      { type: "root", children: [[Object]] },
      {
        type: "paragraph",
        children: [
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
          [Object],
        ],
      },
    ];

## API

### `visit(tree[, test], visitor[, reverse])`

Visit nodes ([_inclusive descendants_](https://github.com/syntax-tree/unist#descendant) of [`tree`](https://github.com/syntax-tree/unist#tree)), with ancestral information. Optionally filtering nodes. Optionally in reverse.

This algorithm performs [_depth-first_](https://github.com/syntax-tree/unist#depth-first-traversal) [_tree traversal_](https://github.com/syntax-tree/unist#tree-traversal) in [_preorder_](https://github.com/syntax-tree/unist#preorder) (**NLR**), or if `reverse` is given, in _reverse preorder_ (**NRL**).

Walking the tree is an intensive task. Make use of the return values of the visitor when possible. Instead of walking a tree multiple times with different `test`s, walk it once without a test, and use [`unist-util-is`](https://github.com/syntax-tree/unist-util-is) to check if a node matches a test, and then perform different operations.

###### Parameters

- `tree` ([`Node`](https://github.com/syntax-tree/unist#node)) — [Tree](https://github.com/syntax-tree/unist#tree) to traverse
- `test` ([`Test`](https://github.com/syntax-tree/unist-util-is), optional) — [`is`](https://github.com/syntax-tree/unist-util-is)-compatible test (such as a [type](https://github.com/syntax-tree/unist#type))
- `visitor` ([Function](#next--visitornode-ancestors)) — Function invoked when a node is found that passes `test`
- `reverse` (`boolean`, default: `false`) — The tree is traversed in [preorder](https://github.com/syntax-tree/unist#preorder) (NLR), visiting the node itself, then its [head](https://github.com/syntax-tree/unist#head), etc. When `reverse` is passed, the tree is traversed in reverse preorder (NRL): the node itself is visited, then its [tail](https://github.com/syntax-tree/unist#tail), etc.

#### `next? = visitor(node, ancestors)`

Invoked when a node (matching `test`, if given) is found.

Visitors are free to transform `node`. They can also transform the [parent](https://github.com/syntax-tree/unist#parent-1) of node (the last of `ancestors`). Replacing `node` itself, if `visit.SKIP` is not returned, still causes its [descendant](https://github.com/syntax-tree/unist#descendant)s to be visited. If adding or removing previous [sibling](https://github.com/syntax-tree/unist#sibling)s (or next siblings, in case of `reverse`) of `node`, `visitor` should return a new [`index`](https://github.com/syntax-tree/unist#index) (`number`) to specify the sibling to traverse after `node` is traversed. Adding or removing next siblings of `node` (or previous siblings, in case of reverse) is handled as expected without needing to return a new `index`. Removing the `children` property of an ancestor still results in them being traversed.

###### Parameters

- `node` ([`Node`](https://github.com/syntax-tree/unist#node)) — Found node
- `ancestors` (`Array.<Node>`) — [Ancestor](https://github.com/syntax-tree/unist#ancestor)s of `node`

##### Returns

The return value can have the following forms:

- [`index`](https://github.com/syntax-tree/unist#index) (`number`) — Treated as a tuple of `[CONTINUE, index]`
- `action` (`*`) — Treated as a tuple of `[action]`
- `tuple` (`Array.<*>`) — List with one or two values, the first an `action`, the second and `index`. Note that passing a tuple only makes sense if the `action` is `SKIP`. If the `action` is `EXIT`, that action can be returned. If the `action` is `CONTINUE`, `index` can be returned.

###### `action`

An action can have the following values:

- `visit.EXIT` (`false`) — Stop traversing immediately
- `visit.CONTINUE` (`true`) — Continue traversing as normal (same behaviour as not returning anything)
- `visit.SKIP` (`'skip'`) — Do not traverse this node’s children; continue with the specified index

###### `index`

[`index`](https://github.com/syntax-tree/unist#index) (`number`) — Move to the sibling at `index` next (after `node` itself is completely traversed). Useful if mutating the tree, such as removing the node the visitor is currently on, or any of its previous siblings (or next siblings, in case of `reverse`) Results less than `0` or greater than or equal to `children.length` stop traversing the parent

## Related

- [`unist-util-visit`](https://github.com/syntax-tree/unist-util-visit) — Like `visit-parents`, but with one parent
- [`unist-util-filter`](https://github.com/eush77/unist-util-filter) — Create a new tree with all nodes that pass a test
- [`unist-util-map`](https://github.com/syntax-tree/unist-util-map) — Create a new tree with all nodes mapped by a given function
- [`unist-util-flatmap`](https://gitlab.com/staltz/unist-util-flatmap) — Create a new tree by mapping (to an array) with the provided function and then flattening
- [`unist-util-remove`](https://github.com/eush77/unist-util-remove) — Remove nodes from a tree that pass a test
- [`unist-util-select`](https://github.com/eush77/unist-util-select) — Select nodes with CSS-like selectors

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/unist-util-visit/

### [fixtures/node_modules/unist-util-visit/readme.md](fixtures/node_modules/unist-util-visit/readme.md)

# unist-util-visit

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch) [![Sponsors](https://opencollective.com/unified/sponsors/badge.svg)](https://opencollective.com/unified) [![Backers](https://opencollective.com/unified/backers/badge.svg)](https://opencollective.com/unified) [![Chat](https://img.shields.io/badge/chat-spectrum-7b16ff.svg)](https://spectrum.chat/unified/syntax-tree)

[**unist**](https://github.com/syntax-tree/unist) utility to visit nodes.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install unist-util-visit

## Use

    var u = require("unist-builder");
    var visit = require("unist-util-visit");

    var tree = u("tree", [
      u("leaf", "1"),
      u("node", [u("leaf", "2")]),
      u("void"),
      u("leaf", "3"),
    ]);

    visit(tree, "leaf", function (node) {
      console.log(node);
    });

Yields:

    { type: 'leaf', value: '1' }
    { type: 'leaf', value: '2' }
    { type: 'leaf', value: '3' }

## API

### `visit(tree[, test], visitor[, reverse])`

This function works exactly the same as [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents), but `visitor` has a different signature.

#### `next? = visitor(node, index, parent)`

Instead of being passed an array of ancestors, `visitor` is invoked with the node’s [`index`](https://github.com/syntax-tree/unist#index) and its [`parent`](https://github.com/syntax-tree/unist#parent-1).

Otherwise the same as [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents).

## Related

- [`unist-util-visit-parents`](https://github.com/syntax-tree/unist-util-visit-parents) — Like `visit`, but with a stack of parents
- [`unist-util-filter`](https://github.com/syntax-tree/unist-util-filter) — Create a new tree with all nodes that pass a test
- [`unist-util-map`](https://github.com/syntax-tree/unist-util-map) — Create a new tree with all nodes mapped by a given function
- [`unist-util-flatmap`](https://gitlab.com/staltz/unist-util-flatmap) — Create a new tree by mapping (to an array) with the provided function and then flattening
- [`unist-util-remove`](https://github.com/syntax-tree/unist-util-remove) — Remove nodes from a tree that pass a test
- [`unist-util-select`](https://github.com/syntax-tree/unist-util-select) — Select nodes with CSS-like selectors

## Contribute

See [`contributing.md` in `syntax-tree/.github`](https://github.com/syntax-tree/.github/blob/master/contributing.md) for ways to get started. See [`support.md`](https://github.com/syntax-tree/.github/blob/master/support.md) for ways to get help.

This project has a [code of conduct](https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md). By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/node_modules/wrappy/

### [fixtures/node_modules/wrappy/README.md](fixtures/node_modules/wrappy/README.md)

# wrappy

Callback wrapping utility

## USAGE

    var wrappy = require("wrappy");

    // var wrapper = wrappy(wrapperFunction)

    // make sure a cb is called only once
    // See also: http://npm.im/once for this specific use case
    var once = wrappy(function (cb) {
      var called = false;
      return function () {
        if (called) return;
        called = true;
        return cb.apply(this, arguments);
      };
    });

    function printBoo() {
      console.log("boo");
    }
    // has some rando property
    printBoo.iAmBooPrinter = true;

    var onlyPrintOnce = once(printBoo);

    onlyPrintOnce(); // prints 'boo'
    onlyPrintOnce(); // does nothing

    // random property is retained!
    assert.equal(onlyPrintOnce.iAmBooPrinter, true);

fixtures/node_modules/xtend/

### [fixtures/node_modules/xtend/README.md](fixtures/node_modules/xtend/README.md)

# xtend

[![browser support](http://ci.testling.com/Raynos/xtend.png)](http://ci.testling.com/Raynos/xtend)

[![locked](http://badges.github.io/stability-badges/dist/locked.svg)](http://github.com/badges/stability-badges)

Extend like a boss

xtend is a basic utility library which allows you to extend an object by appending all of the properties from each object in a list. When there are identical properties, the right-most property takes precedence.

## Examples

    var extend = require("xtend");

    // extend returns a new object. Does not mutate arguments
    var combination = extend(
      {
        a: "a",
        b: "c",
      },
      {
        b: "b",
      }
    );
    // { a: "a", b: "b" }

## Stability status: Locked

## MIT Licensed

fixtures/node_modules/zwitch/

### [fixtures/node_modules/zwitch/readme.md](fixtures/node_modules/zwitch/readme.md)

# zwitch

[![Build](https://img.shields.io/travis/wooorm/zwitch.svg)](https://travis-ci.org/wooorm/zwitch) [![Coverage](https://img.shields.io/codecov/c/github/wooorm/zwitch.svg)](https://codecov.io/github/wooorm/zwitch) [![Downloads](https://img.shields.io/npm/dm/zwitch.svg)](https://www.npmjs.com/package/zwitch) [![Size](https://img.shields.io/bundlephobia/minzip/zwitch.svg)](https://bundlephobia.com/result?p=zwitch)

Handle values based on a property.

## Install

[npm](https://docs.npmjs.com/cli/install):

    npm install zwitch

## Use

    var zwitch = require("zwitch");

    var handle = zwitch("type");

    handle.invalid = invalid;
    handle.unknown = unknown;
    handle.handlers.alpha = handle;

    handle({ type: "alpha" });

Or, with a `switch` statement:

    function handle(value) {
      var fn;

      if (!value || typeof value !== "object" || !("type" in value)) {
        fn = invalid;
      } else {
        switch (value.type) {
          case "alpha":
            fn = handle;
            break;
          default:
            fn = unknown;
            break;
        }
      }

      return fn.apply(this, arguments);
    }

    handle({ type: "alpha" });

## API

### `zwitch(key[, options])`

Create a functional switch, based on a `key` (`string`).

###### `options`

Options can be omitted and added later to `one`.

- `handlers` (`Object.<Function>`, optional) — Object mapping values to handle, stored on `one.handlers`
- `invalid` (`Function`, optional) — Handle values without `key`, stored on `one.invalid`
- `unknown` (`Function`, optional) — Handle values with an unhandled `key`, stored on `one.unknown`

###### Returns

`Function` — See [`one`](#onevalue-rest).

#### `one(value[, rest...])`

Handle one value. Based on the bound `key`, a respective handler will be invoked. If `value` is not an object, or doesn’t have a `key` property, the special “invalid” handler will be invoked. If `value` has an unknown `key`, the special “unknown” handler will be invoked.

All arguments, and the context object, are passed through to the [handler](#function-handlervalue-rest), and it’s result is returned.

#### `one.handlers`

Map of [handler](#function-handlervalue-rest)s (`Object.<string, Function>`).

#### `one.invalid`

Special [`handler`](#function-handlervalue-rest) invoked if a value doesn’t have a `key` property. If not set, `undefined` is returned for invalid values.

#### `one.unknown`

Special [`handler`](#function-handlervalue-rest) invoked if a value does not have a matching handler. If not set, `undefined` is returned for unknown values.

### `function handler(value[, rest...])`

Handle one value.

## Related

- [`mapz`](https://github.com/wooorm/mapz) — Functional map

## License

[MIT](license) © [Titus Wormer](https://wooorm.com)

fixtures/publishDir/

### [fixtures/publishDir/README.md](fixtures/publishDir/README.md)

## netlify-plugin-search fixture

Here is an example of a typical publish folder of a news website. Articles are generated some time to time thanks to [News API](https://newsapi.org/).
