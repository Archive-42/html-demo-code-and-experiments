<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Web Images: Best Practices and HTML Code In One Useful Guide](https://html.com/images/) / HTML Tags Guide To Adding Images To Your Web Documents

`HTML  Tags Guide To Adding Images To Your Web Documents`
=========================================================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Web Images: Best Practices and HTML Code In One Useful Guide](https://html.com/images/)

What does `HTML  Tags Guide To Adding Images To Your Web Documents` do?  
The &lt;img&gt; tag is used to insert an image into a document.

Display  
inline

Null element  
This element must not contain any content, and does not need a closing tag.

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Using the &lt;img&gt; tag](#Using_the_ltimggt_tag)
    -   [<span class="toc_number toc_depth_2">2.1</span> Inline vs. Block](#Inline_vs_Block)
    -   [<span class="toc_number toc_depth_2">2.2</span> Responsive Images](#Responsive_Images)
-   [<span class="toc_number toc_depth_1">3</span> Deprecated &lt;img&gt; attributes](#Deprecated_ltimggt_attributes)
-   [<span class="toc_number toc_depth_1">4</span> Browser Support for img](#Browser_Support_for_img)
-   [<span class="toc_number toc_depth_1">5</span> Attributes of img](#Attributes_of_img)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <img src="/wp-content/uploads/flamingo.jpg">

<img src="https://html.com/wp-content/uploads/flamingo.jpg" class="sp-no-webp" srcset="/wp-content/uploads/flamingo.jpg" />

<span class="underline"></span>

<span id="Using_the_ltimggt_tag">Using the `<img>` tag</span>
-------------------------------------------------------------

The `<img>` element is the most straight-forward way of displaying a static image on a page. You should normally use it whenever an image is actually a part of the content (as opposed to using an image as part of a page’s design).

All `<img>` tags must have a defined [`src` attribute](https://html.com/attributes/img-src/). This defines the image to be displayed. Typically, the `src` is a URL, but a data representation of the image can also be used in some cases.

### <span id="Inline_vs_Block">Inline vs. Block</span>

Intuitively, an image seems like a block element. It has a defined width and height, and cannot be broken over multiple lines. It behaves *like a block*.

Unfortunately, because of historical reasons, the HTML specification (and all browsers, by default) treat the `<img>` tag as if it is an inline element. Because of the way browsers handle white space, this can cause problems if you are not careful.

    <img src="/wp-content/uploads/flamingo.jpg">
    This combination of text and image looks bad on most browsers.

<img src="https://html.com/wp-content/uploads/flamingo.jpg" class="sp-no-webp" srcset="/wp-content/uploads/flamingo.jpg" />

This combination of text and image looks bad on most browsers.

There at least two easy ways to fix this. The simplest is to simply make sure there is a line break before and after your images. This is fine if you don’t care much about flowing text around your image.

    <!-- Line breaks around the image. -->

    This is some text that appears above the image.<br>
    <img src="/wp-content/uploads/flamingo.jpg"><br>
    Here is some other text below the image.

This is some text that appears above the image.  

<img src="https://html.com/wp-content/uploads/flamingo.jpg" class="sp-no-webp" srcset="/wp-content/uploads/flamingo.jpg" />

  
Here is some other text below the image.

A better, more systematic way of handling the inline image problem is to images into block elements with CSS.

    img {
      display: block;
    }

    <!-- Image is block level. No need for line breaks. -->

    This is some text that appears above the image.
    <img src="/wp-content/uploads/flamingo.jpg">
    Here is some other text below the image.

\#block-img img {  
display: block;  
}

This is some text that appears above the image.<img src="https://html.com/wp-content/uploads/flamingo.jpg" class="sp-no-webp" srcset="/wp-content/uploads/flamingo.jpg" />Here is some other text below the image.

Using the `display: block;` CSS rule is a good default way of presenting images, which you can then build upon for other types of presentation — such as wrapping text around an image within the flow of an article.

### <span id="Responsive_Images">Responsive Images</span>

It’s important to make sure that images display correctly across a wide variety of screen widths and window sizes. One of the easiest techniques for accomplishing this is to use CSS to set the `width` (or the `max-width`) to `100%`. This will ensure that the image is never too big for its container. When used in conjunction with a flexible-grid system, this optimizes the images display size for various screen widths.

    img {
     width: 100%;
     height: auto;
    }

    <!-- This image is very large, but it will not overflow the container. -->

    <img src="/wp-content/uploads/very-large-flamingo.jpg">

\#responsive-width img {  
width: 100%;  
height: auto;  
}

<img src="https://html.com/wp-content/uploads/very-large-flamingo.jpg" class="sp-no-webp" srcset="/wp-content/uploads/very-large-flamingo.jpg" />

There are two other techniques you should know for responsive images:

-   Using the [`srcset`](https://html.com/attributes/img-srcset/) image attribute to specify multiple sizes of a single image.
-   Using the [`<picture>`](#) element to specify different image designs for different contexts.

<span id="Deprecated_ltimggt_attributes">Deprecated `<img>` attributes</span>
-----------------------------------------------------------------------------

The `<img>` element has been a part of the HTML specification almost since the beginning, and has been a vital part of HTML-based page design since before the advent of modern browsers, CSS3, or semantic markup. Because of this history, there are a large number of deprecated (no longer in use) attributes that have previously been used with the `<img>` element.

Many of the deprecated attributes are related to layout and positioning, other have to do with browser behavior. In most cases, [CSS](https://html.com/css/) is the preferred method for achieving these layout effects. In other cases, [JavaScript](https://html.com/javascript/) is the best way to get the desired results.

Deprecated attributes are marked below in red. Where possible, we have provided additional information on how to achieve the desired effects using modern standards.

For more information about deprecated tags and other changes to the HTML specification, see our article on [HTML5](https://html.com/html5/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_img">Browser Support for img</span>
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

<span id="Attributes_of_img">Attributes of img</span>
-----------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/img-crossorigin/" class="linked-name">crossorigin</a><br />
</td><td></td><td>Indicates that CORS headers should be used in the HTTP request, and specifies whether or not to use credentials.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-height/" class="linked-name">height</a><br />
</td><td></td><td>Identifies the intrinsic height of an image file, in CSS pixels.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-srcset/" class="linked-name">srcset</a><br />
</td><td></td><td>Defines multiple sizes of the same image, allowing the browser to select the appropriate image source.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-align/" class="linked-name deprecated">align</a><br />
</td><td></td><td>Was previously used to specify the alignment and placement of an image relative to the surrounding text. It has been deprecated and should not be used.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-alt/" class="linked-name">alt</a><br />
</td><td></td><td>Defines alternate text, which may be presented in place of the image.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-border/" class="linked-name deprecated">border</a><br />
</td><td></td><td>Previously used to define a border on an image element. It has been deprecated and should no longer be used.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-controls/" class="linked-name deprecated">controls</a><br />
</td><td></td><td>Toggled media player controls when used in conjunction with the &lt;code&gt;dynsrc&lt;/code&gt; attribute. Both attributes are now deprecated.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-dynsrc/" class="linked-name deprecated">dynsrc</a><br />
</td><td></td><td>An early failed attempt to include native video playback in HTML.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-hspace/" class="linked-name deprecated">hspace</a><br />
</td><td></td><td>Previously used to add horizontal space on both side of an image. It is now deprecated.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-ismap/" class="linked-name">ismap</a><br />
</td><td></td><td>Identifies an image as a server-side image map. When the containing anchor link is clicked, the coordinates of the mouse will be included in the request.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-longdesc/" class="linked-name">longdesc</a><br />
</td><td></td><td>Defines a URL at which can be found more information about the image. It was written out of the HTML5 specification, but its status is not quite so clear as other deprecated features.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-loop/" class="linked-name deprecated">loop</a><br />
</td><td></td><td>Previously used to specify the number of times a video should play, when used in conjunction with the dynsource attribute. Both attributes have been deprecated.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-lowsrc/" class="linked-name deprecated">lowsrc</a><br />
</td><td></td><td>Specified a smaller or lower-quality version of an image.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-name/" class="linked-name deprecated">name</a><br />
</td><td></td><td>Identified the image or provided additional information about it. Deprecated in HTML 4.0 in favor of other attributes.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-naturalsizeflag/" class="linked-name deprecated">naturalsizeflag</a><br />
</td><td></td><td>This attribute does nothing. It was once used by a proprietary software system.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-nosave/" class="linked-name deprecated">nosave</a><br />
</td><td></td><td>Was intended to prevent users from downloading an image. Was never a part of the HTML specification, and not widely implemented.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-start/" class="linked-name deprecated">start</a><br />
</td><td></td><td>Was used in conjunction with the dynsrc attribute to add a video that would load in supported browsers in the place of the image that would otherwise be displayed.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-suppress/" class="linked-name deprecated">suppress</a><br />
</td><td></td><td>Used by the now-defunct Netscape browser to suppress the display of image prior to image download completion.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-usemap/" class="linked-name">usemap</a><br />
</td><td></td><td>Specifies a client-side image map to be used with the image.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-width/" class="linked-name">width</a><br />
</td><td></td><td>Indicates the intrinsic width of the image, in CSS pixels.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-src/" class="linked-name">src</a><br />
</td><td></td><td>Specifies the URL of an image to be displayed.</td></tr></tbody></table>

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
