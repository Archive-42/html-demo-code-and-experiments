<a href="https://webpack.js.org/" class="md:mr-auto"><img src="https://webpack.js.org/site-logo.1fcab817090e78435061.svg" alt="webpack logo" class="logo" width="122" height="35" /></a> <a href="https://webpack.js.org/concepts/" class="text-gray-100 dark:text-gray-100 text-sm font-light uppercase hover:text-blue-200">Documentation</a><a href="https://webpack.js.org/contribute/" class="text-gray-100 dark:text-gray-100 text-sm font-light uppercase hover:text-blue-200">Contribute</a><a href="https://webpack.js.org/vote/" class="text-gray-100 dark:text-gray-100 text-sm font-light uppercase hover:text-blue-200">Vote</a><a href="https://webpack.js.org/blog/" class="text-gray-100 dark:text-gray-100 text-sm font-light uppercase hover:text-blue-200">Blog</a>

-   <a href="https://webpack.js.org/" class="px-5 block"><span>English</span></a>
-   <a href="https://webpack.docschina.org/" class="px-5 block"><span lang="zh">中文</span></a>
-   <a href="https://webpack.kr/" class="px-5 block"><span lang="ko">한국어</span></a>

<span class="DocSearch-Button-Placeholder">Search</span><span class="DocSearch-Button-Keys"></span>

 bundle your
===========

assets scripts

STATIC ASSETS .png .css .jpg .js MODULES WITH DEPENDENCIES .jpg .png .sass .sass .js .sass .cjs .hbs .js

<span class="cube cube--dark" style="width: 120px; padding-bottom: 60px"></span>

Write Your Code[<span class="header-link"></span>](#write-your-code)
--------------------------------------------------------------------

**src/index.js**

    import bar from './bar.js';

    bar();

**src/bar.js**

    export default function bar() {
      //
    }

Bundle It[<span class="header-link"></span>](#bundle-it)
--------------------------------------------------------

**[Without config](https://youtu.be/3Nv9muOkb6k?t=21293)** or provide custom **webpack.config.js**

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
    };

**page.html**

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        ...
      </head>
      <body>
        ...
        <script src="dist/bundle.js"></script>
      </body>
    </html>

Then run `webpack` on the command-line to create `bundle.js`.

Awesome isn't it? Let's dive in![<span class="header-link"></span>](#awesome-isnt-it-lets-dive-in)
--------------------------------------------------------------------------------------------------

**[Get Started](https://webpack.js.org/guides/getting-started)** quickly in our **Guides** section, or dig into the **[Concepts](https://webpack.js.org/concepts)** section for more high-level information on the core notions behind webpack.

Support the Team
================

Through contributions, donations, and sponsorship, you allow webpack to thrive. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material!

Latest Sponsors
---------------

 

 

 

Platinum Sponsors
-----------------

 

 

 

Gold Sponsors
-------------

 

 

 

Silver Sponsors
---------------

 

 

 

Bronze Sponsors
---------------

 

 

 

Backers
-------

 

 

 

<a href="https://webpack.js.org/guides/getting-started/" class="footer__link">Get Started</a><a href="https://webpack.js.org/comparison/" class="footer__link">Comparison</a><a href="https://privacy-policy.openjsf.org/" class="footer__link">Privacy Policy</a>

<a href="https://webpack.js.org/" class="footer__icon"><img src="https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg" alt="webpack icon" width="35" height="35" /></a>

<a href="https://webpack.threadless.com/" class="footer__link">Swag Store</a><a href="https://webpack.js.org/awesome-webpack/" class="footer__link">Awesome webpack</a><a href="https://webpack.js.org/glossary/" class="footer__link">Glossary</a><a href="https://webpack.js.org/branding/" class="footer__link">Branding</a><a href="https://gitter.im/webpack/webpack" class="footer__link">Gitter</a><a href="https://github.com/webpack/webpack/releases" class="footer__link">Changelog</a><a href="https://webpack.js.org/license" class="footer__link footer__license"><img src="https://webpack.js.org/cc.ab77d813bf219c6e34ff.svg" alt="Creative Commons License" width="25" height="25" /><img src="https://webpack.js.org/by.1360bb2e6d1fc28cdd9e.svg" alt="Creative Commons License" width="25" height="25" /></a>
