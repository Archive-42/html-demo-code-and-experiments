<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / &lt;ins&gt; HTML Tag

`<ins> HTML Tag`
================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `<ins> HTML Tag` do?  
The &lt;ins&gt; element is used to identify text that has been inserted into a document. It is often paired with a &lt;del&gt; element which identifies deleted text replaced by the text contained in the &lt;ins&gt; element.

Display  
inline

Usage  
semantic | textual

Code Example
------------

    <p>Tickets for the event are <del>$5</del> <ins>$10</ins>.</p>

Tickets for the event are <s>$5</s> <span class="underline">$10</span>.

<span class="underline"></span>

Transparent updates of text
---------------------------

Ideally, [a page at a particular URL will last forever](https://www.w3.org/Provider/Style/URI.html). But, naturally information changes. In response to changing information, you have three options as a web publisher:

-   Change the content without acknowledgement
-   Don’t change the content
-   Change the content transparently

The `<ins>` element, along with the [`<del>`](https://html.com/tags/del/) is for this last case — it signals that a piece of content is new, not original to the page when it was first published. This can be used for short, inline corrections…

    The dinner will take place at <del>7:30</del> <ins>8:00</ins>. 

The dinner will take place at <s>7:30</s> <span class="underline">8:00</span>.

Or for a larger update or correction.

    <ins><p><strong>Correction:</strong> This story originally reported that Abraham Lincoln was killed in a dinosaur battle while time travelling. This is not accurate. In fact it was the dinosaurs, and not Lincoln, who were time traveling.</p></ins> 

**Correction:** This story originally reported that Abraham Lincoln was killed in a dinosaur battle while time travelling. This is not accurate. In fact it was the dinosaurs, and not Lincoln, who were time traveling.

In theory, there is also no reason why a pair of `<del>` and `<ins>` elements couldn’t be nested inside another `<ins>` element. (Though you may not want to push this too far.)

    <ins>  <p><del><strong>Correction:</strong> This story originally reported that Abraham Lincoln was killed in a dinosaur battle while time travelling. This is not accurate. In fact it was the dinosaurs, and not Lincoln, who were time traveling.</del></p>  <p><ins><strong>Correction:</strong> A recent update to this story implied that Abraham Lincoln was killed by time travelling dinosaurs. Neither the story nor the update made it clear that this is only one of several theories currently being considered. The exact circumstances remain a mystery.</ins></p>  </ins> 

<span class="underline"><s>**Correction:** This story originally reported that Abraham Lincoln was killed in a dinosaur battle while time travelling. This is not accurate. In fact it was the dinosaurs, and not Lincoln, who were time traveling.</s> <span class="underline">**Correction:** A recent update to this story implied that Abraham Lincoln was killed by time travelling dinosaurs. Neither the story nor the update made it clear that this is only one of several theories currently being considered. The exact circumstances remain a mystery.</span></span>

**Protip:** WordPress (which powers this site, along with 25% of sites on the web) has some trouble with insertion and deletion elements that contain multiple paragraphs. This is related to their automatic insertion of paragraph elements. If you need to show multiple paragraphs of deleted or inserted text in WordPress, your best bet is to place a separate insertion or deletion element *inside* of each paragraph element, not surrounding it.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Browser Support for ins
-----------------------

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
