<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS





8 Invalid HTML Elements You Should Stop Using Immediately
=========================================================

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Development of the HTML specification is an incremental process and sometimes things go wrong. Over time, many elements and attributes have been added to HTML only be removed at a later time when the web community collectively realized that there was a better way. Since deprecated and obsolete elements and attributes are already live on the web many modern browsers continue to support their use. Even though they may still work, you should always follow the latest version of HTML. There’s no guarantee that browser support for obsolete and deprecated elements will last.

Contents

-   [<span class="toc_number toc_depth_1">1</span> Valid but Poorly Implemented](#Valid_but_Poorly_Implemented)
    -   [<span class="toc_number toc_depth_2">1.1</span> DOCTYPE](#DOCTYPE)
    -   [<span class="toc_number toc_depth_2">1.2</span> Identifying the Character Set](#Identifying_the_Character_Set)
    -   [<span class="toc_number toc_depth_2">1.3</span> Linking to Copyright Info](#Linking_to_Copyright_Info)
    -   [<span class="toc_number toc_depth_2">1.4</span> Stop Commenting Out Scripts](#Stop_Commenting_Out_Scripts)
-   [<span class="toc_number toc_depth_1">2</span> HTML Elements to Stop Using Immediately](#HTML_Elements_to_Stop_Using_Immediately)
-   [<span class="toc_number toc_depth_1">3</span> Tasks Better Handled by CSS](#Tasks_Better_Handled_by_CSS)
    -   [<span class="toc_number toc_depth_2">3.1</span> Elements Replaced by CSS Properties](#Elements_Replaced_by_CSS_Properties)
    -   [<span class="toc_number toc_depth_2">3.2</span> Attributes Replaced by CSS Properties](#Attributes_Replaced_by_CSS_Properties)
-   [<span class="toc_number toc_depth_1">4</span> Other Resources](#Other_Resources)

<span id="Valid_but_Poorly_Implemented">Valid but Poorly Implemented</span>
---------------------------------------------------------------------------

There are several cases of HTML elements and attributes that are valid and should be used, but implementation of these features has changed over time while pockets of the web development community haven’t taken notice. HTML `tables` are a good example of this. At one point it was common for web page layouts to be created with the HTML `table` element. Virtually no one does this anymore, CSS is far more powerful than `tables` could ever hope to be. However, there are many other less egregious misuses and syntax errors committed by even experienced web developers. Here are a few perfectly valid and useful HTML features that are often misapplied and examples of their proper implementation.

### <span id="DOCTYPE">`DOCTYPE`</span>

While not technically an HTML element, the `DOCTYPE` declaration should be the first thing to appear in every HTML document. This declaration tells the browser the language of the code in the document. In the past, this declaration included several parts and could get a little complicated. However, in HTML5, it’s quite simple:

    <!DOCTYPE html> 

Start every HTML document with that declaration and web browsers will know exactly what you’re trying to say.

### <span id="Identifying_the_Character_Set">Identifying the Character Set</span>

Web browsers must know the character set used to write the document in order to render it properly. In the vast majority of cases, the proper character set to declare is [UTF-8](https://en.wikipedia.org/wiki/UTF-8). If you need to declare anything else, it’s likely you already know it and know how to do it. If you aren’t sure, sticking with UTF-8 is a safe bet. Declaring the character set in HTML5 is much simpler than it was in previous versions of HTML. Here’s the proper syntax for the declaration in modern HTML5:

    <meta charset="UTF-8"> 

Just drop that line in the [`head`](https://html.com/tags/head/) of your HTML document and you’re all set.

### <span id="Linking_to_Copyright_Info">Linking to Copyright Info</span>

In the past it was common for the [`meta`](https://html.com/tags/meta/) tag to be used to provide copyright information. However, this isn’t the right way to take care of this task, and web crawlers don’t recognize this off-label use of the `meta` tag. The proper way to identify a copyright is to use the [`link`](https://html.com/tags/link/) element in the `head` of an HTML document like this:

    <link  rel="license" href="https://opensource.org/licenses/GPL-3.0"> 

You can also use the `rel="license"` attribute-value pair on [anchor](https://html.com/tags/a/) and [area](https://html.com/tags/area/) elements.

### <span id="Stop_Commenting_Out_Scripts">Stop Commenting Out Scripts</span>

In the past it was common for scripts to be added to HTML documents using a syntax that looked something like this:

    <script>   //<!--   Insert JavaScript here   //--> </script> 

There was a very good reason for this. At one point many browsers did not recognize `script` tags and would attempt to render the contents between the tags as HTML, leading to them displaying the scripting in plain text. To avoid this issue, developers would comment out the text so that it wouldn’t render as HTML by unsupported browsers. Those days are far behind us. All modern browser support the `script` tag. Just drop the HTML comment brackets entirely, or better yet, write your JavaScript in a seperate file and use the [`script`](https://html.com/tags/script/) tag to import it into the current HTML document like this:

    <script src="URL_or_file_path_and_name.js"></script> 

<span id="HTML_Elements_to_Stop_Using_Immediately">HTML Elements to Stop Using Immediately</span>
-------------------------------------------------------------------------------------------------

There are quite a few elements that were once part of the HTML specification that have since been deprecated or obsoleted. Here are eight HTML elements you might still be using that you should stop using immediately as well as alternate tags you can use instead:

1.  `applet`: If you’re still using this tag, you have a bigger problem than use of a deprecated tag since [Java is on its way out](https://html.com/applets/) as a web programming language. Switch to the [`object`](https://html.com/tags/object/) or [`embed`](https://html.com/tags/embed-tag/) element in the short term, but in the long term stop using Java on the web.
2.  `bgsound`: This element was once implemented by IE to add background music to websites. Background music was a bad idea from the start. Just don’t do it. If you want to [add audio content](https://html.com/media/) to your site, use the [`audio`](https://html.com/tags/audio/) tag, but don’t set it to autoplay.
3.  `frame`: The [`frame`](https://html.com/frames/) element and all of it’s related elements have been removed from the HTML specification. Don’t use them. Use [`iframe`](https://html.com/tags/iframe/) if you’re trying to embed an external web page and [CSS](https://html.com/css/) if you’re trying to design a website layout.
4.  `hgroup`: In the past, you could group a title and a subtitle by wrapping each in an appropriate heading level and wrapping both headings in `hgroup` tags. However, this element has been deprecated. Instead, use a single heading element to contain both the title and subtitle, wrap the subtitle in `span` tags, and use CSS to control the styling of the subtitle.
5.  `dir`: The directory element was once part of the HTML specification and was used to represent a list of files or pages. Use an [unordered list](https://html.com/lists/) of [anchor elements](https://html.com/anchors-links/) instead.
6.  `acronym`: This element has been deprecated, use the abbreviation tag [`abbr`](https://html.com/tags/abbr/) instead.
7.  `isindex`: This element created a text field on a web page. However, the same thing can be accomplished with the [`form`](https://html.com/forms/) element [`input`](https://html.com/tags/input/) and the attribute `type="text"` rendering this tag unecessary and obsolete as of HTML 4.01.
8.  `plaintext`, `xmp`, and `listing`: These tags were different ways of displaying text in plain text rather than as HTML. If you want to embed plain text in an HTML document you have two options, [`pre`](https://html.com/tags/pre/) and [‘code’](https://html.com/tags/code/). To display text in a monospace font and to preserve whitespace use `pre`, to display code use the `code` element and escape out all `<` and `>` symbols by typing `&lt;` and `&gt;` to replace each respectively.

<span id="Tasks_Better_Handled_by_CSS">Tasks Better Handled by CSS</span>
-------------------------------------------------------------------------

There are many elements and attributes that were once part of HTML, but performed tasks better suited to CSS. These elements have since been deprecated in favor of letting CSS control web page presentation.

### <span id="Elements_Replaced_by_CSS_Properties">Elements Replaced by CSS Properties</span>

Control of fonts and typography was once performed with HTML elements like `font`, `basefont`, `center`, `strike`, and `u`. These elements have all be deprecated in favor of font and typography controls offered by CSS. To learn more, review [our tutorial on fonts and web typography](https://html.com/fonts/). One unique tag which never really caught on is `multicol`. This tag could be used to break text into multi columns similar to the appearance of a newspaper. A similar but much more powerful effect can now be created in modern browsers by [using the CSS `columns` property](https://html.com/css/columns-layout/).

### <span id="Attributes_Replaced_by_CSS_Properties">Attributes Replaced by CSS Properties</span>

A wide range of HTML element attributes were once available to control the presentation of HTML elements. Virtually all of these tags have been deprecated and the same functionality is now available from CSS. If you aren’t familiar with CSS and how to implement these properties our CSS tutorial will get you up and running with [Cascading Style Sheets](https://html.com/css/) in no time. Here are some of the more commonly used attributes and the CSS properties that can now be used to achieve the same result.

1.  `align`: This attribute has been replaced by a combination of powerful CSS properties including `text-align`, `float`, and `vertical-align`.
2.  `background` and `bgcolor`: Rather than apply background images and colors with these deprecated HTML attributes, use the `background-image` and `background-color` CSS propreties instead.
3.  `height` and `width`: Use of these attributes is still valid on some elements. However, in all cases it is possible to achieve the same effect by using the CSS properties that go by the same names.
4.  `clear`: If you want to force an element to clear all other elements on one or both sides use the `clear` CSS property rather than the `clear` HTML attribute.
5.  `border`: While this attribute still works just fine on many elements, it’s a better practice to apply borders using the `border` CSS property.

<span id="Other_Resources">Other Resources</span>
-------------------------------------------------

In this article we’ve covered some of the most common elements and attributes used improperly or despite their deprecated or obsolete status. However, we really just touched the tip of the iceberg. If you want to read about the full range of HTML elements and attributes that have been removed from the HTML specification refer to these resources:

-   The [WHATWG list of obsolete HTML features](https://developers.whatwg.org/obsolete.html)
-   The [list of obsolete HTML features from the official HTML5 document](https://www.w3.org/TR/html5/obsolete.html)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                              https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x
                            " width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

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
