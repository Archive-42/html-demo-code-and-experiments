<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="../../wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](../../index.html)

Learn HTML Code, Tags & CSS

[HTML](../../index.html)  /  [Web Images: Best Practices and HTML Code In One Useful Guide](../../images/index.html) / &lt;area&gt; HTML Tag

`<area> HTML Tag`
=================

In <span class="post-meta-category">[HTML Tags](../index.html)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](../../disclosure/index.html)

Element of  
[Web Images: Best Practices and HTML Code In One Useful Guide](../../images/index.html)

What does `<area> HTML Tag` do?  
The &lt;area&gt; element is used as a child of a &lt;map&gt; element to define clickable a region on an image map. Different regions of an image map can be hyperlinked to different locations by nesting multiple &lt;area&gt; elements in a single &lt;map&gt; element.

Display  
block

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Image map](#Image_map)
    -   [<span class="toc_number toc_depth_2">2.1</span> The &lt;area&gt; element](#The_ltareagt_element)
-   [<span class="toc_number toc_depth_1">3</span> Learn About Image Maps](#Learn_About_Image_Maps)
-   [<span class="toc_number toc_depth_1">4</span> Browser Support for &lt;area&gt; HTML Tag](#Browser_Support_for_ltareagt_HTML_Tag)
-   [<span class="toc_number toc_depth_1">5</span> Attributes of &lt;area&gt; HTML Tag](#Attributes_of_ltareagt_HTML_Tag)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <img src="/wp-content/uploads/shapes.png" usemap="shapes-map">

    <map name="shapes-map">
      <area shape="rect" title="Square" coords="19,28,222,228" href="/wp-content/uploads/square.png" target="_blank" />
      <area shape="circle" title="Circle" coords="361,132,96" href="/wp-content/uploads/circle.png" target="_blank" />
    </map>

<img src="../../wp-content/uploads/shapes.png" class="sp-no-webp" srcset="/wp-content/uploads/shapes.png" />

<span class="underline"></span>

<span id="Image_map">Image map</span>
-------------------------------------

An image map is a type of User Interface where clicking on different sections of an image lead to different results. To make an image map, you need three things:

1.  an image, in an [`<img>`](../img/index.html) element with the [`usemap`](../../attributes/img-usemap/index.html) attribute pointing to a valid on-page image map defined in a
2.  [`<map>`](../map/index.html) element, which contains
3.  one or more clickable `<area>` elements.

### <span id="The_ltareagt_element">The `<area>` element</span>

Each `<area>` element defined a clickable area within an image map. The area is defined with the (required) `shape` and `coords` attributes. The [`shape` attribute defines the shape of the area](../../attributes/area-shape/index.html) (rectangle, circle, or \[polygon), and the `coords` indicates the size placement of the area over the image. The `<area>` element also defines other attributes associated with [anchor links](../a/index.html), including [`href`](../../attributes/area-href/index.html) and [`target`](../../attributes/area-target/index.html).

<span id="Learn_About_Image_Maps">Learn About Image Maps</span>
---------------------------------------------------------------

For complete details, see our tutorial on [How to Make an Image Map](../../images/how-to-make-an-image-map/index.html), as well as the reference documentation for the [`<map>`](../map/index.html) element, and the related documentation pages listed below.

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](../../author/html/index.html)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](../../index.html).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_ltareagt_HTML_Tag">Browser Support for &lt;area&gt; HTML Tag</span>
-------------------------------------------------------------------------------------------------

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span id="Attributes_of_ltareagt_HTML_Tag">Attributes of &lt;area&gt; HTML Tag</span>
-------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="../../attributes/area-alt/index.html" class="linked-name">alt</a><br />
</td><td></td><td>Specifies alternative text for a clickable area in an image map.</td></tr><tr class="even"><td><a href="../../attributes/area-coords/index.html" class="linked-name">coords</a><br />
</td><td><a href="../../area-coordsvalues/index.html" class="value free linked-name">values</a><br />
</td><td>Defines the shape and size of a clickable area in an image map.</td></tr><tr class="odd"><td><a href="../../attributes/area-href/index.html" class="linked-name">href</a><br />
</td><td></td><td>Defines the URL of the linked document or resource.</td></tr><tr class="even"><td><a href="../../attributes/area-nohref/index.html" class="linked-name deprecated">nohref</a><br />
</td><td></td><td>Specified that an area of an image map did not link to another resource.</td></tr><tr class="odd"><td><a href="../../attributes/area-shape/index.html" class="linked-name">shape</a><br />
</td><td></td><td>In conjunction with the coords attribute, specifies the shape, size, and placement of a clickable area in an image map.</td></tr><tr class="even"><td><a href="../../attributes/area-target/index.html" class="linked-name">target</a><br />
</td><td></td><td>Specifies the context in which to open the linked resource.</td></tr><tr class="odd"><td><a href="../../attributes/area-title/index.html" class="linked-name">title</a><br />
</td><td></td><td>Defines the title text of the clickable area. The title text will appear as a tooltip in most browsers.</td></tr></tbody></table>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](../../resources/citation-guide/index.html)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](../../attributes/img-alt/index.html)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="../../attributes/a-target/index.html" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/a-target/index.html#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../comment-tag/index.html" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="../comment-tag/index.html#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../../attributes/input-pattern/index.html" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/input-pattern/index.html#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../iframe/index.html" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../iframe/index.html#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../img/index.html" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="../img/index.html#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](../../index.html) © 2015-2020 [Sitemap](../../sitemap/index.html) | [Privacy](../../privacy/index.html) | [Contact](../../contact/index.html)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
