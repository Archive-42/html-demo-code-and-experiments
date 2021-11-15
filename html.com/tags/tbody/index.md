<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/) / &lt;tbody&gt; HTML Tag

`<tbody> HTML Tag`
==================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/)

What does `<tbody> HTML Tag` do?  
The &lt;tbody&gt; element must be a direct descendant of a &lt;table&gt; element and is used to identify &lt;tr&gt; elements that comprise the body of the table. The &lt;tbody&gt; element should always come after a &lt;thead&gt; element and may come before or after a &lt;tfoot&gt; element.

Display  
inline

Code Example
------------

    <table>
      <thead>
        <tr>
          <th>Numbers</th>
          <th>Letters</th>
          <th>Colors</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>6</td>
          <td>ABC</td>
          <td>Primary</td>
        </tr>
      </tfoot> 
      <tbody>
        <tr>
          <td>1</td>
          <td>A</td>
          <td>Red</td>
        </tr>
        <tr>
          <td>2</td>
          <td>B</td>
          <td>Yellow</td>
        </tr>
        <tr>
          <td>3</td>
          <td>C</td>
          <td>Blue</td>
        </tr>
      </tbody>
    </table>

<table><thead><tr class="header"><th>Numbers</th><th>Letters</th><th>Colors</th></tr></thead><tbody><tr class="odd"><td>1</td><td>A</td><td>Red</td></tr><tr class="even"><td>2</td><td>B</td><td>Yellow</td></tr><tr class="odd"><td>3</td><td>C</td><td>Blue</td></tr><tr class="even"><td>6</td><td>ABC</td><td>Primary</td></tr></tbody></table>

<span class="underline"></span>

A Container for the Main Contents of a Table
--------------------------------------------

The `tbody` contains the body, or primary content, of an HTML `table`. Use it along with the [`thead`](https://html.com/tags/thead/) and [`tfoot`](https://html.com/tags/tfoot/) elements to add structure and semantic meaning to HTML tables. The `tbody` should contain the primary data presented in the table while the `thead` contains column headings and the `tfoot` contains summary data. The `tbody` element must contain one or more child table rows ([`tr`](https://html.com/tags/tr/) elements) which contain individual table data cells ([`td`](https://html.com/tags/td/) elements. It can appear before or after the `tfoot` element, but it must appear *after* a `thead` element if the parent table contains a `thead` element. In the event that the `tbody` appears after the `tfoot` in the HTML, the browser will rearrange things and put the `tfoot` at the bottom of the table despite it’s position in the HTML — unless, of course, you tamper with things using [CSS](https://html.com/css/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<summary> HTML Tag`](https://html.com/tags/summary/)

[`<tfoot> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/tfoot/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/img/" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/img/#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
