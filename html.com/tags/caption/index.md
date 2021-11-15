<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/) / HTML Table Caption: Here's The Code To Create One Now

# `HTML Table Caption: Here’s The Code To Create One Now`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/)

What does `HTML Table Caption: Here's The Code To Create One Now` do?  
The &lt;caption&gt; element is used to add a caption to an HTML table. A &lt;caption&gt; must appear in an HTML document as the first descendant of a parent &lt;table&gt;, but it may be positioned visually at the bottom of the table with CSS.

Display  
block

Usage  
textual

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> Fixing the awkward default](#Fixing_the_awkward_default)
- [<span class="toc_number toc_depth_1">3</span> Browser Support for caption](#Browser_Support_for_caption)
- [<span class="toc_number toc_depth_1">4</span> Attributes of caption](#Attributes_of_caption)

## <span id="Code_Example">Code Example</span>

    <table>
    <caption>Favorite Colors</caption>
     <tr>
      <th>Name</th>
      <th>Favorite Color</th>
     </tr>
     <tr>
      <td>Bob</td>
      <td>Yellow</td>
     </tr>
     <tr>
      <td>Michelle</td>
      <td>Purple</td>
     </tr>
    </table>

<table><caption>Favorite Colors</caption><thead><tr class="header"><th>Name</th><th>Favorite Color</th></tr></thead><tbody><tr class="odd"><td>Bob</td><td>Yellow</td></tr><tr class="even"><td>Michelle</td><td>Purple</td></tr></tbody></table>

<span class="underline"></span>

## <span id="Fixing_the_awkward_default">Fixing the awkward default</span>

The `<caption>` is an underused element, and part of the reason for that is probably because the default placement of a table’s caption is above the table. This doesn’t really make sense, as the normal placement for a caption in other contexts (print, illustrations, or even the [`<figure>`](https://html.com/tags/figure/) and [`<figcaption>`](https://html.com/tags/figcaption/) elements in HTML5), is below the captioned item. This is easily resolved with the CSS `caption-side` property.

    .better-table caption {  caption-side: bottom; }

    <table class="better-table"> <caption>Favorite Colors</caption>  <tr>   <th>Name</th>   <th>Favorite Color</th>  </tr>  <tr>   <td>Bob</td>   <td>Yellow</td>  </tr>  <tr>   <td>Michelle</td>   <td>Purple</td>  </tr> </table>

.better-table caption { caption-side: bottom; }

<table><caption>Favorite Colors</caption><thead><tr class="header"><th>Name</th><th>Favorite Color</th></tr></thead><tbody><tr class="odd"><td>Bob</td><td>Yellow</td></tr><tr class="even"><td>Michelle</td><td>Purple</td></tr></tbody></table>

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_caption">Browser Support for caption</span>

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

## <span id="Attributes_of_caption">Attributes of caption</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/caption-align/" class="linked-name deprecated">align</a><br />
</td><td></td><td>Was used to control the horizontal alignment of a table caption. Deprecated. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/caption-valign/" class="linked-name deprecated">valign</a><br />
</td><td></td><td>Was used to control the vertical alignment of a table caption. Deprecated. Use CSS.</td></tr></tbody></table>

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
