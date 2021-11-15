<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/) / &lt;thead&gt; HTML Tag

`<thead> HTML Tag`
==================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/)

What does `<thead> HTML Tag` do?  
The &lt;thead&gt; element is used to identify one or more rows of a table that contain column labels rather than table data.

Display  
inline

Code Example
------------

    <table>
      <caption>The Three Most Popular JavaScript Libraries</caption>
      <thead>
        <tr>
          <th>Library</th>
          <th>jQuery</th>
          <th>Bootstrap</th>
          <th>Modernizr</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Market Share</td>
          <td>96.1%</td>
          <td>17.0%</td>
          <td>14.3%</td>
        </tr> 
        <tr>
          <td>Absolute Usage</td>
          <td>70.4%</td>
          <td>12.4%</td>
          <td>10.5%</td>
        </tr>
      </tbody> 
      <tfoot>
        <tr>
          <td colspan="4"><em>Market Share</em> refers to the percentage of sites using any JavaScript library that use the specified library. <em>Absolute Usage</em> is the percent of websites surveyed, including those that use no JavaScript libraries, that use the specified library. All data comes from <a href="https://w3techs.com/technologies/overview/javascript_library/all" target="_blank">W3Techs</a> and was accurate in June of 2016.</td>
        </tr>
      </tfoot>
    </table>

The Three Most Popular JavaScript Libraries

Library

jQuery

Bootstrap

Modernizr

Market Share

96.1%

17.0%

14.3%

Absolute Usage

70.4%

12.4%

10.5%

*Market Share* refers to the percentage of sites using any JavaScript library that use the specified library. *Absolute Usage* is the percent of websites surveyed, including those that use no JavaScript libraries, that use the specified library. All data comes from [W3Techs](https://w3techs.com/technologies/overview/javascript_library/all) and was accurate in June of 2016.

<span class="underline"></span>

How to Use `<thead>`
--------------------

The `<thead>` element is used to identify one or more table rows that contain column labels rather than data. It must be a direct child of a `<table>` element and appear after the table `<caption>` and any `<colgroup>` elements. In addition, `<thead>` must also *before* any `<tbody>` or `<tfoot>` elements. It’s important to note that each table may have only one `<thead>` element. If you happen to need two rows for column headings, add both `<tr>` elements to a single `<thead>` element like this:

    <!--Don't do this--> <table>   <thead>     <tr>       <th colspan="2">Company A</th>       <th colspan="2">Company B</th>     </tr>   </thead>   <thead>     <tr>       <th>Founded</th>       <th>Annual Sales</th>       <th>Founded</th>       <th>Annual Sales</th>     </tr>   </thead>   <tr>     <td>2008</td>     <td>$47,000,000</td>     <td>2004</td>     <td>$27,000,000</td>   </tr> </table>  <!--Do this instead--> <table>   <thead>     <tr>       <th colspan="2">Company A</th>       <th colspan="2">Company B</th>     </tr>     <tr>       <th>Founded</th>       <th>Annual Sales</th>       <th>Founded</th>       <th>Annual Sales</th>     </tr>   </thead>   <tr>     <td>2008</td>     <td>$47,000,000</td>     <td>2004</td>     <td>$27,000,000</td>   </tr> </table> 

Let’s see what your browser makes of that misuse of the `<thead>` element.

Company A

Company B

Founded

Annual Sales

Founded

Annual Sales

2008

$47,000,000

2004

$27,000,000

Company A

Company B

Founded

Annual Sales

Founded

Annual Sales

2008

$47,000,000

2004

$27,000,000

In most cases, your browser will handle this semantic error without any trouble. However, it still doesn’t pass as valid HTML and will be flagged as invalid by HTML validation services.

Building a Semantically-Rich Table
----------------------------------

[`<tfoot>`](https://html.com/tags/tfoot/) and [`<tbody>`](https://html.com/tags/tbody/) are siblings of the `<thead>` element. Use all three to provide rich information to browser, crawlers, and assistive technologies about the meaning of the content found in each part of an HTML [`<table>`](https://html.com/tags/table/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`How To Use  In HTML`](https://html.com/attributes/img-src/)

[`<td nowrap>`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/td-nowrap/)

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
