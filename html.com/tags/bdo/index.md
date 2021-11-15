<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / &lt;bdo&gt; HTML Tag

This feature is valid in HTML5, but is not recommended for use in most situations. Please read usage details below.

`<bdo> HTML Tag`
================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `<bdo> HTML Tag` do?  
The &lt;bdo&gt; element is used override the default directionality of text. It is used to display characters from languages that are read from right-to-left, such as Hebrew and Arabic.

Display  
inline

Usage  
textual

<span class="underline"></span>

Bidirectional Override
----------------------

The `<bdo>` element overrides the text-directionality of the surrounding text, which is useful if you need to place a word or phrase in an RTL (right-to-left) language (like Arabic or Hebrew) in an otherwise LTR (left-to-right) language (like English).

    <p>The Arabic word for "website" is <bdo>???? ????????</bdo>, and in Hebrew it is <bdo>????? ??????????</bdo>.</p> 

The Arabic word for “website” is ???? ????????, and in Hebrew it is ????? ??????????.

But now we have a problem. If you don’t read Hebrew or Arabic, it may not be obvious but: the RTL text is actually backwards. The `<bdo>` element *reverses* the text from the source code.

    With BDO:  <bdo>????? ??????????</bdo> Without: ????? ?????????? 

With BDO: ????? ?????????? Without: ????? ??????????

Notice that *without* `<bdo>`, the output matches the source. This is the desired behavior. The `<bdo>` element is a holdover from a time when character encoding did not deal well with RTL languages. Today, systems using Unicode (mostly everyone) can handle this without too much trouble. For this reason, the `<bdo>` should usually be avoided.

**Note:** There are some speciality cases where might be appropriate, but they are beyond the scope of this website. If you need to know a lot more about Internationalization in HTML, see the [W3C’s Internationalization Activity Blog](https://www.w3.org/International/).

Bidirectional Isolation
-----------------------

You should not, however, simply leave RTL words and phrases without markup. This can cause [unexpected problems](http://rishida.net/blog/?p=564). Use the [`<bdi>`](https://html.com/tags/bdi/) element (new in [HTML5](https://html.com/html5/)) to isolate bidirectional text and avoid display problems when mixing languages.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<bdi> HTML Tag`](https://html.com/tags/bdi/)

[`<canvas> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/canvas/)

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
