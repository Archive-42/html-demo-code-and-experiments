<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Web Images: Best Practices and HTML Code In One Useful Guide](https://html.com/images/)  /  [HTML Tags Guide To Adding Images To Your Web Documents](https://html.com/tags/img/) / HTML Img Alt Tags For SEO Best Practice - Search Engines Love Them

`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`
====================================================================

In <span class="post-meta-category">[HTML Attributes](https://html.com/attributes/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Attribute of  
[HTML Tags Guide To Adding Images To Your Web Documents](https://html.com/tags/img/)

What does `HTML Img Alt Tags For SEO Best Practice - Search Engines Love Them` do?  
Defines alternate text, which may be presented in place of the image.

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> The alt text](#The_alt_text)
-   [<span class="toc_number toc_depth_1">3</span> The alt description — Users](#The_alt_description_mdash_Users)
-   [<span class="toc_number toc_depth_1">4</span> The alt description — Search Engines](#The_alt_description_mdash_Search_Engines)
-   [<span class="toc_number toc_depth_1">5</span> Learn more about alt](#Learn_more_about_alt)
-   [<span class="toc_number toc_depth_1">6</span> Values of the alt Attribute](#Values_of_the_alt_Attribute)
-   [<span class="toc_number toc_depth_1">7</span> All Attributes of img Element](#All_Attributes_of_img_Element)
-   [<span class="toc_number toc_depth_1">8</span> Browser Support for alt](#Browser_Support_for_alt)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <img src="/wp-content/uploads/flamingo.jpg" alt="Pink flamingo.">

<img src="https://html.com/wp-content/uploads/flamingo.jpg" alt="Pink flamingo." class="sp-no-webp" srcset="/wp-content/uploads/flamingo.jpg" />

<span class="underline"></span>

<span id="The_alt_text">The `alt` text</span>
---------------------------------------------

The `alt` attribute will accept any text string, but there are certain best practices that will help.

-   No special characters. This includes [UTF-8 characters](https://en.wikipedia.org/wiki/UTF-8) such as unencoded curly quotes, as well as [HTML Character Entities](https://html.com/character-codes/).
-   No HTML.
-   No more than 125 characters.
-   Just identify the picture. No need to refer to it (“This is a picture of…”).

<!-- -->

    <!-- Bad alt descriptions. -->  <img src="/wp-content/uploads/flamingo.jpg" alt="A “pink” flamingo.">  <img src="/wp-content/uploads/flamingo.jpg" alt="A <em>pink</em> flamingo.">  <img src="/wp-content/uploads/flamingo.jpg" alt="Flamingo comes from Spanish flamenco, 'with the colour of flame', in turn coming from Provençal flamenc from flama 'flame' and Germanic-like suffix -ing, with a possible influence of words like Fleming. A similar etymology has the Latinate Greek term Phoenicopterus (from Greek: ????????????? phoinikopteros), literally 'blood red-feathered'.">  <img src="/wp-content/uploads/flamingo.jpg" alt="This is a picture of a pink flamingo.">   <!-- Good alt description. --> <img src="/wp-content/uploads/flamingo.jpg" alt="Pink flamingo."> 

<span id="The_alt_description_mdash_Users">The `alt` description — Users</span>
-------------------------------------------------------------------------------

The `alt` attribute provides an “alternative description” for the image. This description is normally not presented to the user, but will be under certain circumstances:

-   Assistive technology — If the user is visually impaired, and is using a screen reader, the screen reader will read the `alt` description to the user.
-   Images turned off — Some users prefer to surf the web with images turned off (to save bandwidth or to minimize distraction). These users will normally see the `alt` description instead of the image.
-   Image failure — If an image fails to load for any reason (bad file name, connection problems), the user will usually see the `alt` description in place of the image.

Here’s an example of displaying the `alt` text in place of a failed image (the image `src` points to nothing).

    <img src="not-a-real-file-name.jpg" alt="Depending on your browser, you might see this message in place of the failed image."> 

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" alt="Depending on your browser, you might see this message in place of the failed image." class="lazy lazy-hidden" />

![Depending on your browser, you might see this message in place of the failed image.](https://html.com/attributes/img-alt/not-a-real-file-name.jpg)

<span id="The_alt_description_mdash_Search_Engines">The `alt` description — Search Engines</span>
-------------------------------------------------------------------------------------------------

The `alt` description is also very helpful for search engines. Search engines have a hard time figuring out what the content of an image actually is. They are getting better at it, but identifying the subject of a photo or picture is [extremely difficult](https://xkcd.com/1425/). So search engines rely on the `alt` description to know what is actually in a picture (they also use the file name and other attributes). Additionally, in Google Image Search, the `alt` description is actually shown to the user.

<figure><img src="https://html.com/wp-content/uploads/flamingo-in-search.jpeg" alt="“American flamingo” is the alt text of flamingo picture." class="size-full wp-image-1922 sp-no-webp" sizes="(max-width: 1189px) 100vw, 1189px" srcset="https://html.com/wp-content/uploads/flamingo-in-search.jpeg 1189w, https://html.com/wp-content/uploads/flamingo-in-search-300x158.jpeg 300w, https://html.com/wp-content/uploads/flamingo-in-search-768x404.jpeg 768w, https://html.com/wp-content/uploads/flamingo-in-search-1024x538.jpeg 1024w" width="1189" height="625" /><figcaption>“American flamingo” is the alt text of flamingo picture.</figcaption></figure>If you care about [SEO](https://html.com/seo/), you should make sure that you have relevant `alt` descriptions for all of your images.

<span id="Learn_more_about_alt">Learn more about `alt`</span>
-------------------------------------------------------------

How much more is there to know about `alt`? A lot. We’ve put together [this tutorial on the Rules of Alt](https://html.com/images/rules-of-alt/) to help you out.

<span id="Values_of_the_alt_Attribute">Values of the `alt` Attribute</span>
---------------------------------------------------------------------------

<table><thead><tr class="header"><th>Value Name</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td>text</td><td>Specifies alternative text to be displayed in particular contexts.</td></tr></tbody></table>

<span id="All_Attributes_of_img_Element">All Attributes of [`img`](https://html.com/tags/img/) Element</span>
-------------------------------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/img-height/">height</a></td><td></td><td>Identifies the intrinsic height of an image file, in CSS pixels.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-srcset/">srcset</a></td><td>list of sources</td><td>Defines multiple sizes of the same image, allowing the browser to select the appropriate image source.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-align/">align</a></td><td>right<br />
left</td><td>Was previously used to specify the alignment and placement of an image relative to the surrounding text. It has been deprecated and should not be used.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-alt/">alt</a></td><td>text</td><td>Defines alternate text, which may be presented in place of the image.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-border/">border</a></td><td>pixels</td><td>Previously used to define a border on an image element. It has been deprecated and should no longer be used.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-controls/">controls</a></td><td></td><td>Toggled media player controls when used in conjunction with the &lt;code&gt;dynsrc&lt;/code&gt; attribute. Both attributes are now deprecated.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-dynsrc/">dynsrc</a></td><td></td><td></td></tr><tr class="even"><td><a href="https://html.com/attributes/img-hspace/">hspace</a></td><td></td><td>Previously used to add horizontal space on both side of an image. It is now deprecated.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-ismap/">ismap</a></td><td></td><td>Identifies an image as a server-side image map. When the containing anchor link is clicked, the coordinates of the mouse will be included in the request.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-longdesc/">longdesc</a></td><td></td><td>Defines a URL at which can be found more information about the image. It was written out of the HTML5 specification, but its status is not quite so clear as other deprecated features.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-loop/">loop</a></td><td></td><td>Previously used to specify the number of times a video should play, when used in conjunction with the dynsource attribute. Both attributes have been deprecated.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-lowsrc/">lowsrc</a></td><td></td><td>Specified a smaller or lower-quality version of an image.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-name/">name</a></td><td></td><td>Identified the image or provided additional information about it. Deprecated in HTML 4.0 in favor of other attributes.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-naturalsizeflag/">naturalsizeflag</a></td><td></td><td>This attribute does nothing. It was once used by a proprietary software system.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-nosave/">nosave</a></td><td></td><td>Was intended to prevent users from downloading an image. Was never a part of the HTML specification, and not widely implemented.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-start/">start</a></td><td>fileopen<br />
mouseover</td><td></td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-suppress/">suppress</a></td><td></td><td>Used by the now-defunct Netscape browser to suppress the display of image prior to image download completion.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-usemap/">usemap</a></td><td></td><td>Specifies a client-side image map to be used with the image.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/img-width/">width</a></td><td></td><td>Indicates the intrinsic width of the image, in CSS pixels.</td></tr><tr class="even"><td><a href="https://html.com/attributes/img-src/">src</a></td><td></td><td>Specifies the URL of an image to be displayed.</td></tr></tbody></table>

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_alt">Browser Support for alt</span>
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

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`How To Use  In HTML`](https://html.com/attributes/img-src/)

[`<td nowrap>`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/td-nowrap/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,784 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">1,204 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,187 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/button/" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/button/#comments" class="popular_posts_bars_comment_count">738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/img/" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/img/#comments" class="popular_posts_bars_comment_count">597 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
