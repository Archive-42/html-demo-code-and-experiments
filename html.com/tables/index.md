<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS





[HTML](https://html.com/)  /  HTML Tables: Find Out When To Use Them (And When To Avoid)

HTML Tables: Find Out When To Use Them (And When To Avoid)
==========================================================

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Tables are used in HTML documents (web pages) to present *tabular data*.

Contents

-   [<span class="toc_number toc_depth_1">1</span> Using Tables](#Using_Tables)
-   [<span class="toc_number toc_depth_1">2</span> Table Code Sample: Simple Table](#Table_Code_Sample_Simple_Table)
-   [<span class="toc_number toc_depth_1">3</span> Table Code Sample: Complex Table](#Table_Code_Sample_Complex_Table)
-   [<span class="toc_number toc_depth_1">4</span> About Table-Based Layout](#About_Table-Based_Layout)
-   [<span class="toc_number toc_depth_1">5</span> Related Elements](#Related_Elements)
-   [<span class="toc_number toc_depth_1">6</span> Tutorials and Resources](#Tutorials_and_Resources)

<span id="Using_Tables">Using Tables</span>
-------------------------------------------

-   A table is defined using the [`<table>`](https://html.com/tags/table/) element, and contains a number of [table cells ( `<td>`, for “table data” )](https://html.com/tags/td/) which are organized into [table rows ( `<tr>`)](https://html.com/tags/tr/). The markup (HTML code) for a table is always based on rows, never columns.
-   Table cells which act as column headers or row headers should use the `<th>` (table header) element.
-   Table cells can be merged using the [`colspan`](https://html.com/attributes/td-colspan/) and `rowspan` attributes.
-   Tables can be broken into sections using the following elements:
    -   [`<thead>` — Table header](https://html.com/tags/thead/)
    -   [`<tbody>` — Table body](https://html.com/tags/tbody/)
    -   [`<tfoot>` — Table footer](https://html.com/tags/tfoot/)
-   A caption can be added to a table using the [`<caption>`](https://html.com/tags/caption/) element.
-   You can use [`<col>`](https://html.com/tags/col/) and [`<colgroup>`](https://html.com/tags/colgroup/) to define table columns for styling. However, there are a [number of limitations with this practice](https://html.com/tags/colgroup/).

<span id="Table_Code_Sample_Simple_Table">Table Code Sample: Simple Table</span>
--------------------------------------------------------------------------------

    <table>
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

<table><thead><tr class="header"><th>Name</th><th>Favorite Color</th></tr></thead><tbody><tr class="odd"><td>Bob</td><td>Yellow</td></tr><tr class="even"><td>Michelle</td><td>Purple</td></tr></tbody></table>

<span id="Table_Code_Sample_Complex_Table">Table Code Sample: Complex Table</span>
----------------------------------------------------------------------------------

    <table>
     <caption>A complex table</caption>
     <thead>
      <tr>
       <th colspan="3">Invoice #123456789</th>
       <th>14 January 2025
      </tr>
      <tr>
       <td colspan="2">
        <strong>Pay to:</strong><br>
        Acme Billing Co.<br>
        123 Main St.<br>
        Cityville, NA 12345
       </td>
       <td colspan="2">
        <strong>Customer:</strong><br>
        John Smith<br>
        321 Willow Way<br>
        Southeast Northwestershire, MA 54321
       </td>
      </tr>
     </thead>
     <tbody>
      <tr>
       <th>Name / Description</th>
       <th>Qty.</th>
       <th>@</th>
       <th>Cost</th>
      </tr>
      <tr>
       <td>Paperclips</td>
       <td>1000</td>
       <td>0.01</td>
       <td>10.00</td>
      </tr>
      <tr>
       <td>Staples (box)</td>
       <td>100</td>
       <td>1.00</td>
       <td>100.00</td>
      </tr>
     </tbody>
     <tfoot>
      <tr>
       <th colspan="3">Subtotal</th>
       <td> 110.00</td>
      </tr>
      <tr>
       <th colspan="2">Tax</th>
       <td> 8% </td>
       <td>8.80</td>
      </tr>
      <tr>
       <th colspan="3">Grand Total</th>
       <td>$ 118.80</td>
      </tr>
     </tfoot>
    </table>

A complex table

Invoice \#123456789

14 January 2025  

**Pay to:**  
Acme Billing Co.  
123 Main St.  
Cityville, NA 12345

**Customer:**  
John Smith  
321 Willow Way  
Southeast Northwestershire, MA 54321

Name / Description

Qty.

@

Cost

Paperclips

1000

0.01

10.00

Staples (box)

100

1.00

100.00

Subtotal

110.00

Tax

8%

8.80

Grand Total

$ 118.80

<span id="About_Table-Based_Layout">About Table-Based Layout</span>
-------------------------------------------------------------------

It was common in the early days of the web to use tables as a layout device. Before the advent of modern standards-based browsers, this was the easiest way to make sure that page elements were arranged properly on the screen.

This design pattern is now considered *very bad*. It is bad for the user experience, bad for SEO, and bad for developers who have to maintain pages.

You should not use table-based *layout* under any circumstances. Instead, check out our [CSS Tutorials](https://html.com/css/) to start learning about modern web site layout.

However, that doesn’t mean you should avoid tables — tables should be used whenever you need to present information in a tabular format.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                              https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x
                            " width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

<span id="Related_Elements">Related Elements</span>
---------------------------------------------------

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/tfoot/" class="linked-name">&lt;tfoot&gt; HTML Tag</a></td><td></td><td>The &lt;tfoot&gt; element identifies one or more &lt;tr&gt; elements as containing summary contents of a table's columns. The &lt;tfoot&gt; element must be the direct descendant of a &lt;table&gt; element. In HTML5, &lt;tfoot&gt; can be placed either before or after &lt;tbody&gt; and &lt;tr&gt; elements, but must appear after any &lt;caption&gt;, &lt;colgroup&gt;, and &lt;thead&gt; elements.</td></tr><tr class="even"><td><a href="https://html.com/tags/tbody/" class="linked-name">&lt;tbody&gt; HTML Tag</a></td><td></td><td>The &lt;tbody&gt; element must be a direct descendant of a &lt;table&gt; element and is used to identify &lt;tr&gt; elements that comprise the body of the table. The &lt;tbody&gt; element should always come after a &lt;thead&gt; element and may come before or after a &lt;tfoot&gt; element.</td></tr><tr class="odd"><td><a href="https://html.com/tags/tr/" class="linked-name">Code Example For Tr In HTML (To Organize Table Rows)</a></td><td><a href="https://html.com/attributes/tr-align/" class="linked-name deprecated">&lt;tr align=""&gt;</a><br />
<a href="https://html.com/attributes/tr-valign/" class="linked-name deprecated">HTML Form Code For Beginners (And When To Use It)</a><br />
<a href="https://html.com/attributes/tr-bgcolor/" class="linked-name deprecated">Tr Bgcolor Is Obsolete: Here's How To Set Table Row Background Color Now</a><br />
<a href="https://html.com/attributes/tr-background/" class="linked-name deprecated">&lt;tr background=""&gt;</a><br />
<a href="https://html.com/attributes/tr-bordercolor/" class="linked-name deprecated">&lt;tr bordercolor=""&gt;</a><br />
</td><td>The &lt;tr&gt; element is used to group together &lt;th&gt; or &lt;td&gt; values into a single row of table heading or data values. The &lt;tr&gt; element may be a direct child of a &lt;table&gt; element or nested within a parent &lt;thead&gt;, &lt;tfoot&gt;, or &lt;tbody&gt; element.</td></tr><tr class="even"><td><a href="https://html.com/tags/thead/" class="linked-name">&lt;thead&gt; HTML Tag</a></td><td></td><td>The &lt;thead&gt; element is used to identify one or more rows of a table that contain column labels rather than table data.</td></tr><tr class="odd"><td><a href="https://html.com/tags/caption/" class="linked-name">caption</a></td><td><a href="https://html.com/attributes/caption-align/" class="linked-name deprecated">align</a><br />
<a href="https://html.com/attributes/caption-valign/" class="linked-name deprecated">valign</a><br />
</td><td>The &lt;caption&gt; element is used to add a caption to an HTML table. A &lt;caption&gt; must appear in an HTML document as the first descendant of a parent &lt;table&gt;, but it may be positioned visually at the bottom of the table with CSS.</td></tr><tr class="even"><td><a href="https://html.com/tags/col/" class="linked-name">col</a></td><td><a href="https://html.com/attributes/col-span/" class="linked-name">span</a><br />
<a href="https://html.com/attributes/col-align/" class="linked-name deprecated">align</a><br />
<a href="https://html.com/attributes/col-bgcolor/" class="linked-name deprecated">bgcolor</a><br />
<a href="https://html.com/attributes/col-width/" class="linked-name deprecated">width</a><br />
</td><td>The &lt;col&gt; element, typically implemented as a child element of a parent &lt;colgroup&gt;, can be used to target a column in an HTML table.</td></tr><tr class="odd"><td><a href="https://html.com/tags/colgroup/" class="linked-name">colgroup</a></td><td><a href="https://html.com/attributes/colgroup-align/" class="linked-name deprecated">align</a><br />
<a href="https://html.com/attributes/colgroup-span/" class="linked-name">span</a><br />
<a href="https://html.com/attributes/colgroup-width/" class="linked-name deprecated">wdith</a><br />
</td><td>The &lt;colgroup&gt; element is used a parent container for one or more &lt;col&gt; elements which are used to target columns in an HTML table.</td></tr></tbody></table>

<span id="Tutorials_and_Resources">Tutorials and Resources</span>
-----------------------------------------------------------------

[Easy Tutorial For Creating HTML Tables That Add Value To Pages](https://html.com/tables/tutorial/)  
[CSS Styling Tutorial To Clean Up Your HTML Tables Today](https://html.com/tables/styling/)  

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
