<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="../../wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](../../index.html)

Learn HTML Code, Tags & CSS

[HTML](../../index.html)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](../../fonts/index.html) / &lt;bdi&gt; HTML Tag

New in HTML5.

`<bdi> HTML Tag`
================

In <span class="post-meta-category">[HTML Tags](../index.html), [New](../../new/index.html)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](../../disclosure/index.html)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](../../fonts/index.html)

What does `<bdi> HTML Tag` do?  
The &lt;bdi&gt; element is used to isolate a small section of text which may be formatted to run in the opposite direction than the text around it (such as right-to-left in a left-to-right context). This is useful when a language with right-to-left directionality, such as Arabic or Hebrew, is used inline with left-to-right languages.

Display  
inline

Usage  
semantic | textual

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Text Direction](#Text_Direction)
-   [<span class="toc_number toc_depth_1">3</span> Bidirectional Isolation](#Bidirectional_Isolation)
-   [<span class="toc_number toc_depth_1">4</span> Difference between &lt;bdi&gt; and &lt;bdo&gt;](#Difference_between_ltbdigt_and_ltbdogt)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <p>The Arabic word for "website" is <bdi>موقع الكتروني</bdi>, and in Hebrew it is <bdi>אֲתַר אִינטֶרנֶט</bdi>.</p>

The Arabic word for "website" is موقع الكتروني, and in Hebrew it is אֲתַר אִינטֶרנֶט.

<span class="underline"></span>

<span id="Text_Direction">Text Direction</span>
-----------------------------------------------

In English, text flows from left-to-right. Not all languages work this way, and so it is possible to set up a page, or even a section of a page, where the text flows from right-to-left.

    /* Setting the Direction for the Whole Document */ body {  direction: rtl; }  /* Setting the Direction for only a section --- demo below */ .rtl {  direction: rtl; }  

    <div class="rtl"> <!-- Some English in an RTL environment. This will not display well. --> Experimentation is the greatest science.  <!-- In Arabic, which is an RTL language. --> ??????? ????? ?????? </div> 

.rtl{direction: rtl;}

Experimentation is the greatest science. ??????? ????? ??????

(If you’re wondering why the English wasn’t SDRAWKCAB, it’s because that isn’t how text direction works. In a document or section with RTL directionality, the source code would *also* be RTL. So text appears in the display the same way it appears in the source code — with some punctuation and alignment problems.)

<span id="Bidirectional_Isolation">Bidirectional Isolation</span>
-----------------------------------------------------------------

What if you need to have a single Arabic or Hebrew word or phrase within otherwise LTR text? That’s what the `<bdi>` element is for.

    The Hebrew word for "computer" is <bdi>???????</bdi>. 

The Hebrew word for “computer” is ???????.

It is important, again, to realize that the `<bdi>` element does not reverse the direction of the characters in the source code. Rather, it provides information to the browser so that the presence of RTL characters in an other LTW environment (or vice-versa) does not cause a rendering problem.

<span id="Difference_between_ltbdigt_and_ltbdogt">Difference between `<bdi>` and `<bdo>`</span>
-----------------------------------------------------------------------------------------------

The `<bdi>` element is new in HTML5, but it is very similar to the older `<bdo>` element. The difference is that `<bdi>` *isolates* the included text from the text around it, while `<bdo>` simply reverses the direction. The `<bdo>` element’s approach to in-context bidirectionality can cause unexpected rendering problems. For this reason, the newer `<bdi>` element is usually recommended. For a more in-depth look at `<bdi>`, and the related [`<bdo>`](../bdo/index.html) element, see [this blog post on the subject](http://rishida.net/blog/?p=564) written by a member of W3C’s [Internationalization Working Group](https://www.w3.org/International/).

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](../../author/html/index.html)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](../../index.html).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`New Audio HTML Element: Master It Out Now With Our Code Example`](../audio/index.html)

[`<bdo> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](../bdo/index.html)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="../../attributes/a-target/index.html" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/a-target/index.html#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../comment-tag/index.html" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="../comment-tag/index.html#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../../attributes/input-pattern/index.html" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/input-pattern/index.html#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../iframe/index.html" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../iframe/index.html#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../button/index.html" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../button/index.html#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](../../index.html) © 2015-2020 [Sitemap](../../sitemap/index.html) | [Privacy](../../privacy/index.html) | [Contact](../../contact/index.html)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
