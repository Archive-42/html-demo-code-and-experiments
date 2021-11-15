<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Document Structure Before And After HTML5 – Here’s What Changed](https://html.com/document/)  /  [HTML Body Tag: Master The Most Important HTML Element Now](https://html.com/tags/body/) / HTML Body Background: Here Are The CSS Properties To Replace It With

Deprecated in HTML5. Do not use.

`HTML Body Background: Here Are The CSS Properties To                       Replace It With`
============================================================================================

In <span class="post-meta-category">[HTML Attributes](https://html.com/attributes/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Attribute of  
[HTML Body Tag: Master The Most Important HTML Element Now](https://html.com/tags/body/)

 What does `HTML Body Background: Here Are The CSS Properties To                         Replace It With` do?   
Was used to set the background color and image for the document. Deprecated. Use CSS instead.

<span class="underline"></span>

Contents

-   [<span class="toc_number toc_depth_1">1</span> Use CSS instead](#Use_CSS_instead)
-   [<span class="toc_number toc_depth_1">2</span> The CSS background- properties](#The_CSS_background-_properties)
    -   [<span class="toc_number toc_depth_2">2.1</span> Setting a background-color](#Setting_a_background-color)
    -   [<span class="toc_number toc_depth_2">2.2</span> Setting a background-image](#Setting_a_background-image)
        -   [<span class="toc_number toc_depth_3">2.2.1</span> background-image](#background-image)
        -   [<span class="toc_number toc_depth_3">2.2.2</span> background-repeat](#background-repeat)
        -   [<span class="toc_number toc_depth_3">2.2.3</span> background-attachment](#background-attachment)
        -   [<span class="toc_number toc_depth_3">2.2.4</span> background-position](#background-position)
    -   [<span class="toc_number toc_depth_2">2.3</span> The background shorthand property](#The_background_shorthand_property)

<span id="Use_CSS_instead">Use CSS instead</span>
-------------------------------------------------

In previous version of HTML, the [`<body>`](https://html.com/tags/body/) element had a large number of styling attributes like `background`. *All* of them have been [deprecated in HTML5](https://html.com/html5/). The correct way to style anything is with [CSS](https://html.com/css/).

<span id="The_CSS_background-_properties">The CSS `background-` properties</span>
---------------------------------------------------------------------------------

There are several CSS properties used for setting the background of an element. These can be used on `<body>` to set the background of an entire page.

-   `background-color`
-   `background-image`
-   `background-repeat`
-   `background-attachment`
-   `background-position`

### <span id="Setting_a_background-color">Setting a `background-color`</span>

The most straightforward way to change the default (white) background for a page is to use `background-color` on the body.

    body {  background-color: #efefef; } 

One thing you have to watch out for, though — if you set the `background-color` too dark, the default black text won’t be readable, so you’ll need to change it (or not make the background so dark). See our [tutorial on dark backgrounds](https://html.com/css/common-mistakes-with-background/) for more tips on dark-background site design.

### <span id="Setting_a_background-image">Setting a `background-image`</span>

All of the other CSS `background-` properties are connected with setting an image.

-   `background-image` — The source URL for the image.
-   `background-repeat` — Whether and how the image should tile.
-   `background-attachment` — Whether and how the image should scroll with the content.
-   `background-position` — How the image should be placed relative to the element.

#### <span id="background-image">`background-image`</span>

The `background-image` property needs to be a URL to the image. This usually looks like this:

    body {  background-image: url(/path/to/image.png); } 

When using the `url()` value, you have three choices:

-   relative path based on the root domain of the CSS file — begin with a slash (`/`) as shown above
-   relative path based on the immediate directory of the CSS file — no slash ( `url(path/to/image.png)` )
-   absolute URL, if you are linking to an external resource — `url(http://example.com/path/to/image.png)`

Remember that the relative URLs are relative to the CSS file, not the page.

#### <span id="background-repeat">`background-repeat`</span>

This property specifies whether and how the image will repeat, or tile. The default is for the image to repeat both horizontally and vertically. You can change this by specifying a value other than `repeat`.

-   `repeat` — The default. Repeats in both directions.
-   `repeat-x` — Repeats only on the x-axis (horizontally across the element).
-   `repeat-y` — Repeats only on the y-axis (vertically down the element).
-   `no-repeat` — Does not repeat.

#### <span id="background-attachment">`background-attachment`</span>

This property affects how the background image responds to scrolling.

-   `fixed` — The background is fixed relative to the viewport (browser window). Scrolling the contents of the element or scrolling the contents of the entire page will not cause the image to move.
-   `scroll` — The background is fixed relative to the boundaries of the element’s box. Scrolling the entire page (moving the placement of the element itself) will cause the image to move with the element.
-   `local` — The background is fixed relative to the contents of the image. If the contents of the image are scrolled, the background will scroll with them. If the document as a whole is scrolled (causing the element content to be moved), the image will move with the element.

This is a little hard to visualize, so you may want to see [this example of all three attachment values, side-by-side](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment). Note that in the context of the `<body>` element, `scroll` and `local` will have the same effect.

#### <span id="background-position">`background-position`</span>

There are several ways to specify the position of a background image, but the easiest is to use the positioning keywords `left`, `right`, `top`, `bottom`, and `center`. This gives you nine possibilities:

-   `left top`
-   `left center`
-   `left bottom`
-   `center top`
-   `center center`
-   `center bottom`
-   `right top`
-   `right center`
-   `right bottom`

You can omit `center` if you like, as it is the default value — but it’s a good idea to include for clarity’s sake.

### <span id="The_background_shorthand_property">The `background` *shorthand* property</span>

You can combine all of these rules into a single line labelled `background`.

    body {  background: #efefef url(/path/to/light-texture.png) repeat fixed top left; } 

When using the shorthand property, you can omit any of the components if you just want the default value. You must keep them in the same order, though. Note that you should almost always include a background color, even if you want to have a background fully-covered by an image tile. Especially if the image is dark, you’ll want a color that closely matches the overall color of the image. That way, if the image load fails (or is slow), the text is still readable as intended.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                                https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x
                              " width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When                         (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search                         Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

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
