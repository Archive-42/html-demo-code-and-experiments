<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/) / &lt;tfoot&gt; HTML Tag

`<tfoot> HTML Tag`
==================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/)

What does `<tfoot> HTML Tag` do?  
The &lt;tfoot&gt; element identifies one or more &lt;tr&gt; elements as containing summary contents of a table's columns. The &lt;tfoot&gt; element must be the direct descendant of a &lt;table&gt; element. In HTML5, &lt;tfoot&gt; can be placed either before or after &lt;tbody&gt; and &lt;tr&gt; elements, but must appear after any &lt;caption&gt;, &lt;colgroup&gt;, and &lt;thead&gt; elements.

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

Summarizing Table Contents
--------------------------

The `tfoot` element is used to provide summary information about the content of an HTML [`table`](https://html.com/tags/table/). It can appear either before or after the table’s [`tbody`](https://html.com/tags/tbody/) element, but will be rendered at the bottom of the table regardless of where it appears in the HTML (unless that default behavior is overridden with [CSS](https://html.com/css/)).

It’s a good idea to use `tfoot`, `tbody`, and `thead` to organize tables that contain complex data sets. These elements can be used by browsers and developers to allow users to scroll the contents of the table independently of the header and footer, providing a better user experience overall.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<tbody> HTML Tag`](https://html.com/tags/tbody/)

[`<time> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/time/)

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
