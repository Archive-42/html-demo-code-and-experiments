<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/) / &lt;colgroup&gt; HTML Tag

`<colgroup> HTML Tag`
=====================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/)

What does `<colgroup> HTML Tag` do?  
The &lt;colgroup&gt; element is used a parent container for one or more &lt;col&gt; elements which are used to target columns in an HTML table.

Display  
none

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Using &lt;col&gt; and &lt;colgroup&gt;](#Using_ltcolgt_and_ltcolgroupgt)
-   [<span class="toc_number toc_depth_1">3</span> Browser Support for colgroup](#Browser_Support_for_colgroup)
-   [<span class="toc_number toc_depth_1">4</span> Attributes of colgroup](#Attributes_of_colgroup)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <style>
    .total {
     background-color: #eeeeee;
    }
    </style>
    <table>
    <colgroup>
     <col span="3">
     <col class="total">
    </colgroup>
    <tr>
    <th>Item</th> 
    <th>Qty.</th> 
    <th>Price</th>
    <th>Cost</th> 
    </tr>
    <tr>
    <tr>
    <td>Bananas</td>
    <td>5</td>
    <td>0.50</td>
    <td>2.50</td>
    </tr>
    <tr>
    <td>Apples</td>
    <td>2</td>
    <td>0.25</td>
    <td>0.50</td>
    </tr>
    <tr>
    <td>Oranges</td>
    <td>3</td>
    <td>0.75</td>
    <td>2.25</td>
    </tr>
    <tr>
    <td colspan="3">TOTAL</td>
    <td>5.25</td>
    </tr>
    </table>

Item

Qty.

Price

Cost

Bananas

5

0.50

2.50

Apples

2

0.25

0.50

Oranges

3

0.75

2.25

TOTAL

5.25

<span class="underline"></span>

<span id="Using_ltcolgt_and_ltcolgroupgt">Using `<col>` and `<colgroup>`</span>
-------------------------------------------------------------------------------

The `<colgroup>` element serves only as a container for one or more `<col>` elements, which define columns within a [`<table>`](https://html.com/tags/table/). For more information about table columns, including common problems and solutions for styling them, see the [`<col>` element documentation](https://html.com/tags/col/)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_colgroup">Browser Support for colgroup</span>
---------------------------------------------------------------------------

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

<span id="Attributes_of_colgroup">Attributes of colgroup</span>
---------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/colgroup-align/" class="linked-name deprecated">align</a><br />
</td><td></td><td>Was used to control the text alignment within a column group in a table. Deprecated. Use CSS.</td></tr><tr class="even"><td><a href="https://html.com/attributes/colgroup-span/" class="linked-name">span</a><br />
</td><td></td><td>Specifies the number of vertical table columns to be included in a column group.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/colgroup-width/" class="linked-name deprecated">wdith</a><br />
</td><td></td><td>Was used to specify the width of a group of table columns. Deprecated. Use CSS instead.</td></tr></tbody></table>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/button/" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/button/#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
