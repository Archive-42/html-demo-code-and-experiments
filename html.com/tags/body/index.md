<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Document Structure Before And After HTML5 – Here’s What Changed](https://html.com/document/) / HTML Body Tag: Master The Most Important HTML Element Now

# `HTML Body Tag: Master The Most Important HTML Element Now`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Document Structure Before And After HTML5 – Here’s What Changed](https://html.com/document/)

What does `HTML Body Tag: Master The Most Important HTML Element Now` do?  
The &lt;body&gt; element contains the entire content of a webpage. It must be the second element inside of the parent &lt;[html](https://html.com/)&gt; element, following only the &lt;head&gt; element.

Display  
block

Usage  
structural

<span class="underline"></span>

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> The most important… and the simplest](#The_most_important8230_and_the_simplest)
  - [<span class="toc_number toc_depth_2">2.1</span> Styling the &lt;body&gt;](#Styling_the_ltbodygt)
  - [<span class="toc_number toc_depth_2">2.2</span> Targeting the &lt;body&gt;](#Targeting_the_ltbodygt)
- [<span class="toc_number toc_depth_1">3</span> Browser Support for body](#Browser_Support_for_body)
- [<span class="toc_number toc_depth_1">4</span> Attributes of body](#Attributes_of_body)

## <span id="Code_Example">Code Example</span>

    <!DOCTYPE html> <html>  <head>  .  .  .  </head>  <body>   <!-- Page content goes here -->  </body> </html>

## <span id="The_most_important8230_and_the_simplest">The most important… and the simplest</span>

The `<body>` element may be the most important HTML element there is. The contents of the `<body>` element are what actually get displayed to the user visiting your web page or viewing your document. And yet, it is very simple. The `<body>` must be a direct child of [`<html>`](https://html.com/tags/html/), it must come _after_ [`<head>`](https://html.com/tags/head/) (if `<head>` is present, which it doesn’t have to be), there can be only one of it, and … that’s it.

### <span id="Styling_the_ltbodygt">Styling the `<body>`</span>

In previous versions of HTML (and in some proprietary browser markup schemes) there were a number of styling attributes available for the `<body>`. All of these have been [deprecated in HTML5](https://html.com/html5/). Any styling you want to do on the `<body>` should be put into your [CSS](https://html.com/css/). And, in fact, `<body>` is a _great_ place to put all the CSS that should affect the document display as a whole: things like [fonts and typography](https://html.com/fonts/), text and background colors, and other other “default” styling.

    body {  font-family: "Adobe Garamond Premier Pro", Garamond, "Linux Libertine", Baskerville, Georgia, serif;  font-weight: normal:  font-size: 18px;  color: #111111;  background-color: #fefefe;  padding: 1em;  width: 95vw;  max-width: 950px;  margin: 0 auto; }

### <span id="Targeting_the_ltbodygt">Targeting the `<body>`</span>

In content management systems, it is a common practice to place a list of content-specific CSS classes into the `<body>` element. This allows designers and [JavaScript](https://html.com/javascript/) developers to target pages based on specific content attributes, such as category, tags, or content type.

    <body class="post post-single post-template-default tag-html tag-element tag-document category-markup category-html post-123 with-comments social-sharing-on logged-in">

These classes are added programmatically by different components and plugins, and provide an easy way for developers to target styling or functionality at highly specific sets of pages (and if they never get used, they aren’t causing any problems).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and tutorials.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_body">Browser Support for body</span>

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

## <span id="Attributes_of_body">Attributes of body</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/body-background/" class="linked-name deprecated">background</a><br />
</td><td></td><td>Was used to set the background color and image for the document. Deprecated. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/body-bgcolor/" class="linked-name deprecated">bgcolor</a><br />
</td><td></td><td>Was used to set the background color on a document. Deprecated. Use CSS instead.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/body-bgproperties/" class="linked-name deprecated">bgproperties</a><br />
</td><td></td><td>Was used to style the background of a document. Deprecated. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/body-stylesrc/" class="linked-name deprecated">stylesrc</a><br />
</td><td></td><td>Was a proprietary attribute for the Frontpage system. Do not use.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/body-text/" class="linked-name deprecated">text</a><br />
</td><td></td><td>Was used to style the text inside the body of the document. Deprecated. Use CSS.</td></tr><tr class="even"><td><a href="https://html.com/attributes/body-scroll/" class="linked-name deprecated">scroll</a><br />
</td><td></td><td>Was used to toggle the display of scroll bars on a page, disabling the user's ability to scroll. Deprecated. You could use CSS to accomplish this, but you should not because it is a bad idea.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/body-topmargin/" class="linked-name deprecated">topmargin</a><br />
</td><td></td><td>Was used to set a margin above the body of a document. Deprecated. Use CSS.</td></tr><tr class="even"><td><a href="https://html.com/attributes/body-onunload/" class="linked-name">onUnload</a><br />
</td><td></td><td>Fires a script when the visitor leaves the page.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/body-onload/" class="linked-name">onLoad</a><br />
</td><td></td><td>Fires a script when the page has finished loading.</td></tr><tr class="even"><td><a href="https://html.com/attributes/body-onfocus/" class="linked-name">onFocus</a><br />
</td><td></td><td>Fires a script when the visitor focuses on the current page.</td></tr></tbody></table>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/img/" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/img/#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
