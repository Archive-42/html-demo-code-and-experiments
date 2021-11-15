<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Create An HTML Table Quickly & Easily With Our Code Example](https://html.com/tags/table/) / What Does HTML Bordercolor Attribute Does To Your Tables? \[Clue: Color!\]

Deprecated in HTML5. Do not use.

`What Does HTML Bordercolor Attribute Does To Your Tables? [Clue: Color!]`
==========================================================================

In <span class="post-meta-category">[HTML Attributes](https://html.com/attributes/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Attribute of  
[Create An HTML Table Quickly & Easily With Our Code Example](https://html.com/tags/table/)

What does `What Does HTML Bordercolor Attribute Does To Your Tables? [Clue: Color!]` do?  
Was used to specify the color of table borders. This attribute has been deprecated. Use CSS to style table borders.

<span class="underline"></span>

<span class="useWarnHead">The Table Bordercolor Attribute is Obsolete</span>  
The following information is provided for it’s historical value. This attribute is obsolete and should not be used. Browser support for this attribute is limited and using it may produce unexpected results. Instead of `bordercolor`, use [CSS](https://html.com/css/) to style tables.

The `BORDERCOLOR` Attribute
---------------------------

In this section we’ll look at setting the colors of table borders. First, we’ll look at setting the borders to a single color. Next, we’ll look at setting the light and dark shades of the border.

The color of the table borders as a whole is set with the `BORDERCOLOR` attribute of the `<TABLE>` tag. For example, this code sets the border to red:

    <TABLE BORDER=10 BORDERCOLOR=RED>
      <TR>
        <TD>carrots</TD>
        <TD>garlic</TD>
      </TR>
      <TR>
        <TD>celery</TD>
        <TD>onions</TD>
      </TR>
    </TABLE>

Here’s how it looks:

<table><tbody><tr class="odd"><td>carrots</td><td>garlic</td></tr><tr class="even"><td>celery</td><td>onions</td></tr></tbody></table>

Netscape and MSIE have very different ways of rendering `BORDERCOLOR`. Netscape maintains the 3-D appearance. MSIE renders all borders as the same color, making the border appear flat. MSIE also sets the color of the inner borders.

<table><thead><tr class="header"><th>Browser</th><th>How it Looks</th></tr></thead><tbody><tr class="odd"><td>Internet Explorer</td><td><img src="https://html.com/wp-content/uploads/bordercolor-msie.gif" alt="screenshot of table rendered in internet explorer" class="sp-no-webp" srcset="/wp-content/uploads/bordercolor-msie.gif" /></td></tr><tr class="even"><td>Netscape</td><td><img src="https://html.com/wp-content/uploads/bordercolor-netscape.gif" alt="screenshot of table rendered in netscape" class="sp-no-webp" srcset="/wp-content/uploads/bordercolor-netscape.gif" /></td></tr></tbody></table>

Table Borders: Light and Dark
-----------------------------

In the previous example we set a single color for all the borders of the table. In this page we’ll look at setting the “light” and the “dark” borders separately. Note that currently only MSIE recognizes the markup necessary to set the light and dark borders separately.

<img src="https://html.com/wp-content/uploads/bordercolorlight.gif" alt="the light source can be visualized as coming from above and to the left of the table" class="alignright size-full wp-image-3904 sp-no-webp" srcset="https://html.com/wp-content/uploads/bordercolorlight.gif" width="463" height="331" />Visual web browsers such as Netscape and MSIE render table borders with a three-dimensional appearance. They do this by making the top and left borders lighter than the bottom right borders, This makes the table look like it is partly under a light source with and partly in shadow. If you visualize a light source above and to the left of the table it’s easier to remember which borders are light and which are dark.

We set the light and dark borders with `BORDERCOLORLIGHT` and `BORDERCOLORDARK`. So, for example, this code sets the light borders to yellow and the dark to blue:

    <TABLE BORDER=10 BORDERCOLORLIGHT=YELLOW BORDERCOLORDARK=BLUE>
      <TR>
        <TD>blah blah blah</TD>
        <TD>yeah yeah yeah</TD>
      </TR>
      <TR>
        <TD>whatever whatever</TD>
        <TD>right on!</TD>
      </TR>
    </TABLE>

Here’s how that code renders in the browser, but note that this is an obsolete attribute and it may not render properly in modern browsers.

<table><tbody><tr class="odd"><td>blah blah blah</td><td>yeah yeah yeah</td></tr><tr class="even"><td>whatever whatever</td><td>right on!</td></tr></tbody></table>

Using All Three `BORDERCOLOR` Attributes at Once
------------------------------------------------

Netscape and MSIE both recognize `BORDERCOLOR`, but currently only MSIE recognizes `BORDERCOLORLIGHT` and `BORDERCOLORDARK`. However, you can use all three at once because MSIE ignores `BORDERCOLOR` if it finds `BORDERCOLORLIGHT` and `BORDERCOLORDARK`. You can use this feature to get a little more control over the border colors than if you use just one or two of those attributes.

For example, this code says that the overall border color is blue, but also specifies that the light portion is a light blue and the dark portion is regular blue:

    <TABLE BORDER=10 BORDERCOLOR="#0000FF" BORDERCOLORLIGHT="#33CCFF" BORDERCOLORDARK="#0000CC">
      <TR>
        <TD>blah blah blah</TD>
        <TD>yeah yeah yeah</TD>
      </TR>
      <TR>
        <TD>whatever whatever</TD>
        <TD>right on!</TD>
      </TR>
    </TABLE>

Here’s how that code renders in the browser, but note that this is an obsolete attribute and it may not render properly in modern browsers.

<table><tbody><tr class="odd"><td>blah blah blah</td><td>yeah yeah yeah</td></tr><tr class="even"><td>whatever whatever</td><td>right on!</td></tr></tbody></table>

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
