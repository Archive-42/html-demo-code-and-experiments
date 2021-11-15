<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Web Images: Best Practices and HTML Code In One Useful Guide](https://html.com/images/) / &lt;map&gt; HTML Tag

`<map> HTML Tag`
================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Web Images: Best Practices and HTML Code In One Useful Guide](https://html.com/images/)

What does `<map> HTML Tag` do?  
The &lt;map&gt; element is used in conjunction with one or more &lt;area&gt; elements to define hyperlinked regions of an image map.

Display  
inline

Usage  
structural

<span class="underline"></span>

Contents

-   [<span class="toc_number toc_depth_1">1</span> Making Images Clickable](#Making_Images_Clickable)
    -   [<span class="toc_number toc_depth_2">1.1</span> Usage](#Usage)
    -   [<span class="toc_number toc_depth_2">1.2</span> New in HTML 5](#New_in_HTML_5)
-   [<span class="toc_number toc_depth_1">2</span> Browser Support for map](#Browser_Support_for_map)
-   [<span class="toc_number toc_depth_1">3</span> Attributes of map](#Attributes_of_map)

<span id="Making_Images_Clickable">Making Images Clickable</span>
-----------------------------------------------------------------

The `<map>` element allows one or more images to be assigned to an image. It works by assigning coordinates to a rectangular area, and then assigning a link. Think of this like a series of hot spots, with coordinates defined in your code. As such, `<map>` is commonly used to assign multiple navigation links to a single image at the top of the page. The image map is a client-side object, which means that the browser is responsible for interpreting the code and rendering the image map. This differs from server-side scripting, which is processed by the web server before the results are sent to the visitor’s browser.

### <span id="Usage">Usage</span>

To use `<map>`, you must first specify an image using the `<img>` element.

    <img src="/wp-content/uploads/shapes.png" width="487" height="271" alt="Shapes" usemap="#shapesmap"> 

The second step is creating the `<map>` code, specifying the coordinates for the shapes you want to define within the [`<area>`](https://html.com/tags/area/) element. Note that the `usemap` attribute in the `<img>` element matches the `name` attribute of the `<map>` element:

    <map name="shapesmap">   <area shape="rect" coords="29,32,230,215" href="square.html" alt="Square">   <area shape="circle" coords="360,130,100" href="circle.html" alt="Circle"> </map> 

The result looks like this. Move your mouse over the image to see the linked areas. <img src="https://html.com/wp-content/uploads/shapes.png" alt="Shapes" class="sp-no-webp" srcset="/wp-content/uploads/shapes.png" width="487" height="271" />

When a user clicks on the square in the image, they will be taken to the specified URL: `square.html`. If they click on the circle, they will be taken to the `circle.html` page.

### <span id="New_in_HTML_5">New in HTML 5</span>

The HTML 5 specification introduces one important change to the attributes of the `<map>` element. In HTML 5, if you choose to specify an `id` attribute for your `<map>`, you, must use exactly the same term for its `name` attribute. Additionally, note that the accompanying `<img>` must include a hashname, such as `#shapesmap`, and not a URL.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Claire Broadley](https://html.com/author/claire/)

<span class="fn">Claire is seasoned technical writer, editor, and HTML enthusiast. She writes for HTML.com and runs a content agency, Red Robot Media.</span>

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_map">Browser Support for map</span>
-----------------------------------------------------------------

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

<span id="Attributes_of_map">Attributes of map</span>
-----------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/map-name/" class="linked-name">name</a><br />
</td><td></td><td>Assigns a name to an image map.</td></tr></tbody></table>

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
