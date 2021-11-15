<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS





[HTML](https://html.com/)  /  Web Images: Best Practices and HTML Code In One Useful Guide

Web Images: Best Practices and HTML Code In One Useful Guide
============================================================

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Images are everywhere on the web. They are the most commonly shared content on social media and every modern web page contains at least one image while most contain a handful, a dozen, a hundred, or more. Yet despite their popularity, many websites are not using images to their full potential.

Contents

-   [<span class="toc_number toc_depth_1">1</span> History of the img tag](#History_of_the_img_tag)
-   [<span class="toc_number toc_depth_1">2</span> Five Tips for Using Images on the Web](#Five_Tips_for_Using_Images_on_the_Web)
    -   [<span class="toc_number toc_depth_2">2.1</span> Only Use Images You Have the Right to Use](#Only_Use_Images_You_Have_the_Right_to_Use)
    -   [<span class="toc_number toc_depth_2">2.2</span> Keep Your Content and Website Accessible](#Keep_Your_Content_and_Website_Accessible)
    -   [<span class="toc_number toc_depth_2">2.3</span> Always Provide Alternate Text](#Always_Provide_Alternate_Text)
    -   [<span class="toc_number toc_depth_2">2.4</span> Know When to Use the Background-Image CSS Property](#Know_When_to_Use_the_Background-Image_CSS_Property)
    -   [<span class="toc_number toc_depth_2">2.5</span> Optimize Images for the Web](#Optimize_Images_for_the_Web)
-   [<span class="toc_number toc_depth_1">3</span> Two Other Ways to Add Images to a Web Page](#Two_Other_Ways_to_Add_Images_to_a_Web_Page)
    -   [<span class="toc_number toc_depth_2">3.1</span> Picture Element](#Picture_Element)
    -   [<span class="toc_number toc_depth_2">3.2</span> Figure Element](#Figure_Element)
-   [<span class="toc_number toc_depth_1">4</span> Conclusion](#Conclusion)
-   [<span class="toc_number toc_depth_1">5</span> Related Elements](#Related_Elements)
-   [<span class="toc_number toc_depth_1">6</span> Tutorials and Resources](#Tutorials_and_Resources)

<span id="History_of_the_img_tag">History of the `img` tag</span>
-----------------------------------------------------------------

Prior to 1993, the web was not a very friendly place for images. But in 1993 [the `img` tag was proposed](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html) and Mosaic, [the first](https://www.w3.org/People/Berners-Lee/FAQ.html#Mosaic) browser to display images inline with text, was launched. Before Mosaic and the `img` tag images were loaded in a separate window or downloaded and opened with an image viewer. However, with Mosaic and the `img` tag added to HTML, the mid-1990s saw rapid growth in the popularity of the web. While the massive growth of the web in the early 1990s cannot be attributed entirely to improved support for images, it was one of a few factors that marked the transition of the web from being a network for researchers to a communications platform for the masses.

<span id="Five_Tips_for_Using_Images_on_the_Web">Five Tips for Using Images on the Web</span>
---------------------------------------------------------------------------------------------

Adding images to your website is great, but using images correctly is better. Images can improve the appearance of your site and can help explain concepts that are difficult to put into words. However, used improperly, images can be ineffective, create accessibility issues, and even land you in legal trouble. To help you avoid those pitfalls, here are our top five recommendations for using images on the web.

### <span id="Only_Use_Images_You_Have_the_Right_to_Use">Only Use Images You Have the Right to Use</span>

Have you ever heard someone say this before?

> “Did you know you can use Google image search to find any image you want?”

While that may technically be true, it’s a terrible way to find images for your website. Many images are protected by copyright laws, meaning that using them without permission can land you in very hot water facing legal and financial penalties. This isn’t something we’re making up or exaggerating. Let the misfortune of teach you an important lesson: only use images you’re sure you have the right to use. There are a few stock image sites that proudly proclaim that you can [use their images free-of-charge without any attribution](https://stocksnap.io/license) whatsoever. Stick to these sorts of sites for your images or buy images from stock photo sites. Wherever you source your images, be sure to follow licensing and attribution guidelines very carefully for every single image you post.

### <span id="Keep_Your_Content_and_Website_Accessible">Keep Your Content and Website Accessible</span>

If you are using an image that adds meaning or functionality to a web page, think about the experience of visitors using a text-only browser or screen reader. Will they be able to use the website and fully understand the web page content? Use the `alt` attribute to assign alternate text to your images to ensure your content and website are accessible.

### <span id="Always_Provide_Alternate_Text">Always Provide Alternate Text</span>

As we just mentioned, alternate text is what website visitors rely on if they can’t see your image. However, the use of `alt` text goes beyond just adding a short description to your images. Did you know there are times when you should use the `alt` attribute but leave it empty? It’s true! If you have an image on your site that is purely aesthetic and does not contribute meaningful content to the site, use the empty attribute `alt=""` so that text-only browsers and screen readers will know to skip it entirely. The `alt` attribute should be used on every single `img` on your website. To learn more about this topic read our article on [the rules of `alt`](https://html.com/images/rules-of-alt/).

### <span id="Know_When_to_Use_the_Background-Image_CSS_Property">Know When to Use the Background-Image CSS Property</span>

There are two ways to add images to a web page.

-   With the `img` HTML element.
-   With the `background-image` CSS property.

When should you use each? Use `img` when the image is part of the content of the web page and use `background-image` when the image is a part of the page presentation or visual design. While these guidelines cover the majority of images uses, if you want more specific guidelines you can find a great discussion on the topic at [StackOverflow](https://stackoverflow.com/questions/492809/when-to-use-img-vs-css-background-image).

### <span id="Optimize_Images_for_the_Web">Optimize Images for the Web</span>

Image files can be very large, and web pages containing multiple large images tend to load very slowly. Web pages that load slowly often have visitors who choose to click away from the site once they realize that it is loading slowly. Optimizing images for the web can reduce web page load times dramatically and give a boost to website traffic as fewer visitors are lost due to slow page loading. Take the time to learn about [optimizing images for the web](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=en) to ensure your website visitors have the best experience possible.

<span id="Two_Other_Ways_to_Add_Images_to_a_Web_Page">Two Other Ways to Add Images to a Web Page</span>
-------------------------------------------------------------------------------------------------------

HTML5 includes two new elements which can be used to add greater meaning to images and to give developers greater control over how visual elements are rendered different devices. These two elements are the `picture` and `figure` elements. These elements each have a specific purpose and aren’t intended to be used as a general-purpose replacement for the `img` tag. Instead, think of these two elements are special-case elements you can use in unique situations to add greater meaning to certain kinds of images.

### <span id="Picture_Element">Picture Element</span>

The `picture` element is used to identify the version of a picture that should be used based on the results of a media query. It is particularly useful when there are specific reasons why a certain version of a picture should be used rather than another for a specific screen size. If all you’re trying to accomplish is to provide multiple image sizes for a variety of screen sizes and resolutions, the `img` tag and [`srcset`](https://html.com/attributes/img-srcset/) attribute are a better option since they allow the browser to identify the best picture for the device. Use the picture element [when the picture options available to the browser are not identical resized versions of each other](http://blog.cloudfour.com/dont-use-picture-most-of-the-time/) and are different in some way. For example, if you have an image with a text overlay, when the image shrinks the text may need to increase in size relative to the image to remain readable on smaller screens. This is a great time to use the `picture` element so that you can explicitly tell the browser which image to use. On the other hand, if you just want to provide a smaller version of an image for use on smaller screens use the `img` tag and `srcset` attribute. [Learn how to use `srcset` here](https://html.com/attributes/img-srcset/). The `picture` element [is not yet fully supported by all browsers](https://caniuse.com/#feat=picture). So if you use this new HTML5 element, be sure to provide an `img` fallback for visitors using unsupported browsers.

### <span id="Figure_Element">Figure Element</span>

The [`figure`](https://html.com/tags/figure/) element is an HTML5 feature used to identify an item on a web page that is relevant to the rest of the web page content, but does not depend on appearing in a specific position on the page. Content contained between `figure` tags should be able to be moved to a different position on the page without affecting it’s meaning or the meaning of the rest of the page content. [The way the HTML specification puts it](https://www.w3.org/TR/html-markup/figure.html) is that “the figure element represents a unit of content…that is self-contained”. Graphs, charts, and images are all common `figure` elements, but virtually any type of content, including videos, audio, and text can be nested between `figure` tags. The `figcaption` tag may optionally be added within the `figure` element to assign a caption to the content of the figure.

<span id="Conclusion">Conclusion</span>
---------------------------------------

What would the web be without cat memes and pictures of your friends on social media? A much more boring place, that’s for sure. Take the time to learn how to use images properly and you may find that your website’s traffic rewards your efforts generously.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                              https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x
                            " width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

<span id="Related_Elements">Related Elements</span>
---------------------------------------------------

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/figure/" class="linked-name">figure</a></td><td></td><td>The &lt;figure&gt; element identifies self-contained content related to the main content, such as an image, table, or chart. The &lt;figcaption&gt; element is often nested within a &lt;figure&gt; element to add a caption to the content identified by the &lt;figure&gt; tags.</td></tr><tr class="even"><td><a href="https://html.com/tags/figcaption/" class="linked-name">figure</a></td><td></td><td>The &lt;figcaption&gt; element is used as a child of a parent &lt;figure&gt; element to attach a caption to the image, table, or chart contained in the &lt;figure&gt; element.</td></tr><tr class="odd"><td><a href="https://html.com/tags/map/" class="linked-name">map</a></td><td><a href="https://html.com/attributes/map-name/" class="linked-name">name</a><br />
</td><td>The &lt;map&gt; element is used in conjunction with one or more &lt;area&gt; elements to define hyperlinked regions of an image map.</td></tr><tr class="even"><td><a href="https://html.com/tags/img/" class="linked-name">img</a></td><td><a href="https://html.com/attributes/img-crossorigin/" class="linked-name">crossorigin</a><br />
<a href="https://html.com/attributes/img-height/" class="linked-name">height</a><br />
<a href="https://html.com/attributes/img-srcset/" class="linked-name">srcset</a><br />
<a href="https://html.com/attributes/img-align/" class="linked-name deprecated">align</a><br />
<a href="https://html.com/attributes/img-alt/" class="linked-name">alt</a><br />
<a href="https://html.com/attributes/img-border/" class="linked-name deprecated">border</a><br />
<a href="https://html.com/attributes/img-controls/" class="linked-name deprecated">controls</a><br />
<a href="https://html.com/attributes/img-dynsrc/" class="linked-name deprecated">dynsrc</a><br />
<a href="https://html.com/attributes/img-hspace/" class="linked-name deprecated">hspace</a><br />
<a href="https://html.com/attributes/img-ismap/" class="linked-name">ismap</a><br />
<a href="https://html.com/attributes/img-longdesc/" class="linked-name">longdesc</a><br />
<a href="https://html.com/attributes/img-loop/" class="linked-name deprecated">loop</a><br />
<a href="https://html.com/attributes/img-lowsrc/" class="linked-name deprecated">lowsrc</a><br />
<a href="https://html.com/attributes/img-name/" class="linked-name deprecated">name</a><br />
<a href="https://html.com/attributes/img-naturalsizeflag/" class="linked-name deprecated">naturalsizeflag</a><br />
<a href="https://html.com/attributes/img-nosave/" class="linked-name deprecated">nosave</a><br />
<a href="https://html.com/attributes/img-start/" class="linked-name deprecated">start</a><br />
<a href="https://html.com/attributes/img-suppress/" class="linked-name deprecated">suppress</a><br />
<a href="https://html.com/attributes/img-usemap/" class="linked-name">usemap</a><br />
<a href="https://html.com/attributes/img-width/" class="linked-name">width</a><br />
<a href="https://html.com/attributes/img-src/" class="linked-name">src</a><br />
</td><td>The &lt;img&gt; tag is used to insert an image into a document.</td></tr><tr class="odd"><td><a href="https://html.com/tags/area/" class="linked-name">&lt;area&gt; HTML Tag</a></td><td><a href="https://html.com/attributes/area-alt/" class="linked-name">alt</a><br />
<a href="https://html.com/attributes/area-coords/" class="linked-name">coords</a><br />
<a href="https://html.com/attributes/area-href/" class="linked-name">href</a><br />
<a href="https://html.com/attributes/area-nohref/" class="linked-name deprecated">nohref</a><br />
<a href="https://html.com/attributes/area-shape/" class="linked-name">shape</a><br />
<a href="https://html.com/attributes/area-target/" class="linked-name">target</a><br />
<a href="https://html.com/attributes/area-title/" class="linked-name">title</a><br />
</td><td>The &lt;area&gt; element is used as a child of a &lt;map&gt; element to define clickable a region on an image map. Different regions of an image map can be hyperlinked to different locations by nesting multiple &lt;area&gt; elements in a single &lt;map&gt; element.</td></tr></tbody></table>

<span id="Tutorials_and_Resources">Tutorials and Resources</span>
-----------------------------------------------------------------

[How to Create Image Transformations with JavaScript](https://html.com/images/image-transformations-javascript/)  
[How to Create Simple Image Transformations](https://html.com/images/simple-image-transformations/)  
[Want To Create Images As Links With Or Without Borders? Here’s How](https://html.com/images/borders-and-image-links/)  
[4 Quick Steps To Make An Image Map In HTML (With Code Example)](https://html.com/images/how-to-make-an-image-map/)  
[The Rules of ALT](https://html.com/images/rules-of-alt/)  

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
