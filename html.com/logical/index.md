<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS





Logical Tags
============

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

<span class="useWarnHead">Note: this article is presented for historical value only</span>  
Logical tags are now often referred to as [semantic](https://html.com/semantic-markup/) tags, and the number of [html](https://html.com/) tags with semantic meaning has been greatly expanded in HTML5. See [semantic markup](https://html.com/semantic-markup/) and [HTML document structure](https://html.com/document/) to learn more.

What’s so Logical about Logical Tags?
-------------------------------------

The original intent of HTML was to mark up text to indicate the purpose of each part of the document. Text within the `<H1 ...>` is a heading, text within `<CODE>` is code from a program, and so forth.

Although logical tags, (also called Idiomatic Elements), indicate different types of information, most of them are usually rendered in one of just a few ways: italics, bold, or monospace (all characters the same width). For example:

    <em>This is emphasized text</em>
    <cite>This is cited text</cite>
    <strong>This is strong text</strong>
    <samp>This is sample text</samp>
    <code>This is code text</code>
    <kbd>This is keyboard text</kbd>

Here’s how those different types of elements are rendered:

*This is emphasized text*  
This is cited text  
**This is strong text**  
This is sample text  
`This is code text`  
This is keyboard text

So if logical tags just look like bold or italics, why use them at all? Why not just use `<B>` when you want bold? Logical tags have lost favor to “formatting” tags, which indicate the physical appearance of the document (for example `<B>` for **BOLD**). This loss of popularity is unfortunate because logical tags still serve some important purposes:

Logical tags allow the browser to render that information in the manner most appropriate for that browser. Text that should be emphasized (`<EM>`) may be best emphasized in Windows with italics, and bold in Unix.  
Logical tags help you, the author, keep track of what you are saying, without the distraction of presentation. If you need to indicate someone’s address, use `<ADDRESS>`, knowing it will be presented in an appropriate manner.

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
