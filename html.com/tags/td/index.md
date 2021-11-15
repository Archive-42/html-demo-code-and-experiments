<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  Dealing With Td Layout Issues In HTML5 - Quick Tutorial

`Dealing With Td Layout Issues In HTML5 – Quick Tutorial`
=========================================================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

What does `Dealing With Td Layout Issues In HTML5 - Quick Tutorial` do?  
The &lt;td&gt; element creates a single data cell in an HTML &lt;table&gt;. Data cells must be used as child elements of a parent &lt;tr&gt;, and the resulting group of &lt;td&gt; elements will be rendered as a single table row in a &lt;table&gt;.

Display  
inline

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Adding Data to a Table](#Adding_Data_to_a_Table)
-   [<span class="toc_number toc_depth_1">3</span> Dealing with &lt;td&gt; Layout Issues](#Dealing_with_lttdgt_Layout_Issues)
-   [<span class="toc_number toc_depth_1">4</span> Attributes of Dealing With Td Layout Issues In HTML5 - Quick Tutorial](#Attributes_of_Dealing_With_Td_Layout_Issues_In_HTML5_-_Quick_Tutorial)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <table>
      <tr>
        <th>Awesome</th>
        <th>Acceptable</th>
        <th>Ugh</th>
      </tr>
      <tr>
        <td>Saturday</td>
        <td>Thursday</td>
        <td>Monday</td>
      </tr>
      <tr>
        <td>Sunny</td>
        <td>Partly Cloudy</td>
        <td>Wintery Mix</td>
      </tr>
      <tr>
        <td>Comfortable</td>
        <td>Cool</td>
        <td>Frigid</td>
      </tr>
    </table>

<table><thead><tr class="header"><th>Awesome</th><th>Acceptable</th><th>Ugh</th></tr></thead><tbody><tr class="odd"><td>Saturday</td><td>Thursday</td><td>Monday</td></tr><tr class="even"><td>Sunny</td><td>Partly Cloudy</td><td>Wintery Mix</td></tr><tr class="odd"><td>Comfortable</td><td>Cool</td><td>Frigid</td></tr></tbody></table>

<span class="underline"></span>

<span id="Adding_Data_to_a_Table">Adding Data to a Table</span>
---------------------------------------------------------------

Tables are the right choice for presenting tabular data that is difficult to present in other formats. Each data cell in an HTML [table](https://html.com/tags/table/) is added individually as a `<td>` element.

<span id="Dealing_with_lttdgt_Layout_Issues">Dealing with `<td>` Layout Issues</span>
-------------------------------------------------------------------------------------

By default, table data elements are laid out vertically aligned with the table data elements in preceding and following rows. For example, if a table includes three rows of data cells, the first data cell from each row will be aligned with the first data cell of each other row. As a result, adding an extra `<td>` element to a single row can create some unattractive results. For example, this HTML table:

    <table>   <tr>     <td>The first</td>     <td>row of</td>     <td>td elements</td>   </tr>   <tr>     <td>The second</td>     <td>row of</td>     <td>td</td>     <td>elements</td>   </tr>   <tr>     <td>The third</td>     <td>row of</td>     <td>td elements</td>   </tr> </table> 

Won’t look very good unless we do something to address the extra data cell in the middle row.

<table><tbody><tr class="odd"><td>The first</td><td>row of</td><td>td elements</td><td></td></tr><tr class="even"><td>The second</td><td>row of</td><td>td</td><td>elements</td></tr><tr class="odd"><td>The third</td><td>row of</td><td>td elements</td><td></td></tr></tbody></table>

This is where the `colspan` comes in. With this attribute we can tell the cells above and below the offending extra cell to span across two table data cells. You can learn more about this attribute at our page dedicated to the [table data `colspan` attribute](https://html.com/attributes/td-colspan/). Here’s a sneak-peek at what we can do with this attribute to deal with data cell layout issues:

The first

row of

td elements

The second

row of

td

elements

The third

row of

td elements

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Attributes_of_Dealing_With_Td_Layout_Issues_In_HTML5_-_Quick_Tutorial">Attributes of Dealing With Td Layout Issues In HTML5 - Quick Tutorial</span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/td-nowrap/" class="linked-name">&lt;td nowrap&gt;</a><br />
</td><td></td><td>NOWRAP indicates that text should not wrap in the cell.</td></tr><tr class="even"><td><a href="https://html.com/attributes/td-bgcolor/" class="linked-name deprecated">How To Replace Td Bgcolor With CSS Background Property</a><br />
</td><td></td><td>Sets the background color of a single cell in a table.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/td-bordercolor/" class="linked-name">How Td Bordercolor Works To Set Bordercolor Around Cells</a><br />
</td><td></td><td>Sets the color of the entire border around a cell.</td></tr><tr class="even"><td><a href="https://html.com/attributes/td-background/" class="linked-name deprecated">Td Background: Here's The CSS To Replace The HTML Code With</a><br />
</td><td></td><td>Specifies the URL of an image file to be used as the &lt;td&gt; element background image.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/td-colspan/" class="linked-name">What Does Td Colspan Have To Do With Tables In HTML?</a><br />
</td><td></td><td>Indicates how many columns a cell should take up.</td></tr><tr class="even"><td><a href="https://html.com/attributes/td-align/" class="linked-name deprecated">What Replaced Td Align After HTML5?: We've Got The Answer (And The Code)</a><br />
</td><td></td><td>Was used to specify the alignment of the contents of a single table data cell. This attribute has been deprecated. Use CSS to control alignment of the contents of a table data cell.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/td-width/" class="linked-name deprecated">Stop Using To Set Table Width In HTML: Here's Why</a><br />
</td><td></td><td>Was used to set the width of a table data cell to a value that would override the default width. This attribute has been deprecated. Use CSS to control layout of data cells in HTML tables.</td></tr></tbody></table>

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
