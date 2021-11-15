<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/) / &lt;col&gt; HTML Tag

# `<col> HTML Tag`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Tables: Find Out When To Use Them (And When To Avoid)](https://html.com/tables/)

What does `<col> HTML Tag` do?  
The &lt;col&gt; element, typically implemented as a child element of a parent &lt;colgroup&gt;, can be used to target a column in an HTML table.

Display  
block

Null element  
This element must not contain any content, and does not need a closing tag.

<span class="underline"></span>

Contents

- [<span class="toc_number toc_depth_1">1</span> Using &lt;col&gt;](#Using_ltcolgt)
- [<span class="toc_number toc_depth_1">2</span> The problem with &lt;col&gt;](#The_problem_with_ltcolgt)
  - [<span class="toc_number toc_depth_2">2.1</span> The CSS solution](#The_CSS_solution)
  - [<span class="toc_number toc_depth_2">2.2</span> The problems with this solution](#The_problems_with_this_solution)
- [<span class="toc_number toc_depth_1">3</span> Don’t use &lt;col&gt;?](#Don8217t_use_ltcolgt)
- [<span class="toc_number toc_depth_1">4</span> Browser Support for col](#Browser_Support_for_col)
- [<span class="toc_number toc_depth_1">5</span> Attributes of col](#Attributes_of_col)

## <span id="Using_ltcolgt">Using `<col>`</span>

All the `<col>`-defined columns in a table have to be declared within a single [`<colgroup>`](https://html.com/tags/colgroup/) element at the top of the table. They have to be declared in order (left-to-right), and all vertical columns (defined by the number of [table cells](https://html.com/tags/td/) in any row) have to be accounted for. Several vertical columns can be “grouped together” by using the [`span`](https://html.com/attributes/col-span/) attribute (not to be confused with the [`colspan`](https://html.com/attributes/td-colspan/) attribute). So if you have four vertical columns (four cells in each row), and you want to target the last column for styling, you might do this:

    .total {  background-color: #eeeeee;  }

    <table> <colgroup>  <col span="3">  <col class="total"> </colgroup> <tr> <th>Item</th>  <th>Qty.</th>  <th>Price</th> <th>Cost</th>  </tr> <tr> <tr> <td>Bananas</td> <td>5</td> <td>0.50</td> <td>2.50</td> </tr> <tr> <td>Apples</td> <td>2</td> <td>0.25</td> <td>0.50</td> </tr> <tr> <td>Oranges</td> <td>3</td> <td>0.75</td> <td>2.25</td> </tr> <tr> <td colspan="3">TOTAL</td> <td>5.25</td> </tr> </table>

\#invoice-demo-1 .total { background-color: \#eeeeee; }

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

## <span id="The_problem_with_ltcolgt">The problem with `<col>`</span>

The `<col>` element seems like a very handy element for styling columns in a table — and it does have some benefits. But there is a big problem: the individual table cells aren’t actually contained inside the column. The `<col>` element only serves to provide information about columns: it isn’t the column itself. [HTML tables](https://html.com/tags/table/) are defined by their [rows](https://html.com/tags/tr/), not by columns. The result of this is that any style applied to a row will override any style applied to column. Further complicating things is that [only a handful of CSS properties can be controlled via the `<col>` element](https://www.w3.org/TR/CSS21/tables.html#columns). The properties that can be controlled are:

- `border`
- `background`
- `width`
- `visibility`

So you can control the cell color (`background-color`) in a column, you cannot control the color of the text. And if one of your rows is colored, the row color will override the column color.

### <span id="The_CSS_solution">The CSS solution</span>

You can create columns of styling within CSS by using the `nth-child` selector. The idea here is that you can target the third (or fourth, or whatever) cell in each row, which results in styling a column of rows.

    td {  background-color: black;  color: white; }  td:nth-child(3) {  background-color: red;  color: blue; }  td:nth-child(5) {  background-color: blue;  color: yellow;

    <table> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> </table>

\#nth-demo td { background-color: black; color: white;} \#nth-demo td:nth-child(3) { background-color: red; color: blue;} \#nth-demo td:nth-child(5) { background-color: blue; color: yellow;

<table><tbody><tr class="odd"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr class="even"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr class="odd"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr class="even"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table>

You can also use the `odd` or `even` keywords to highlight every other column in a table.

    td:nth-child(odd) {  background-color: black;  color: white; }  td:nth-child(even) {  background-color: white;  color: black; }

    <table> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> <tr> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> <td>Cell</td> </tr> </table>

\#even-odd td:nth-child(odd) { background-color: black; color: white; } \#even-odd td:nth-child(even) { background-color: white; color: black; }

<table><tbody><tr class="odd"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr class="even"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr class="odd"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr class="even"><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table>

Finally, you can also use the `last-child` selector to re-create the styling in the invoice-list above. This also allows you to avoid styling the header if you want to, and also add additional styling unavailable with the `<col>` element.

    td:last-child {  background-color: #eeeeee;   font-weight: bold; /* Can't do that with <col> */ }

    <table> <tr> <th>Item</th>  <th>Qty.</th>  <th>Price</th> <th>Cost</th>  </tr> <tr> <tr> <td>Bananas</td> <td>5</td> <td>0.50</td> <td>2.50</td> </tr> <tr> <td>Apples</td> <td>2</td> <td>0.25</td> <td>0.50</td> </tr> <tr> <td>Oranges</td> <td>3</td> <td>0.75</td> <td>2.25</td> </tr> <tr> <td colspan="3">TOTAL</td> <td>5.25</td> </tr> </table>

\#invoice-demo-2 td:last-child { background-color: \#eeeeee; font-weight: bold; }

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

### <span id="The_problems_with_this_solution">The problems with this solution</span>

The `nth-child` solution breaks down if you have a complicated table with a lot of merged cells. But so does the (already not very good) `<col>` styling. If you are creating a very complicated table with merged cells, you will probably need to add CSS classes or ids to individual [cells](https://html.com/tags/td/), or to [table rows](https://html.com/tags/tr/). You can combine these approaches too, by specifying the `nth-child` table cell within specific classes of rows.

## <span id="Don8217t_use_ltcolgt">Don’t use `<col>`?</span>

There are not a lot of compelling reasons to use the `<col>` element. It is really only useful for presentational (styling) reasons, which are supposed to be left to CSS. Moreover, it isn’t even very effective at providing styling control. There may be some semantic reasons for grouping columns together, or for naming columns, but there are better ways of doing that. Moreover, if you want to make your tabular data machine-readable, it is probably better to provide the data in a more machine-friendly format such as JSON. The `<col>` element still exists and is valid in HTML, but we can’t find many really great reasons to bother with it.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_col">Browser Support for col</span>

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

## <span id="Attributes_of_col">Attributes of col</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/col-span/" class="linked-name">span</a><br />
</td><td></td><td>Specifies the number of natural vertical columns to be included in the &lt;col&gt; element.</td></tr><tr class="even"><td><a href="https://html.com/attributes/col-align/" class="linked-name deprecated">align</a><br />
</td><td></td><td>Was used to control the alignment of text within table columns. Deprecated. Use CSS instead.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/col-bgcolor/" class="linked-name deprecated">bgcolor</a><br />
</td><td></td><td>Was used to control the background color of table columns. Deprecated. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/col-width/" class="linked-name deprecated">width</a><br />
</td><td></td><td>Was used to control the width of table columns. Deprecated. Use CSS instead.</td></tr></tbody></table>

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
