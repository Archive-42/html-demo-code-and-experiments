<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  &lt;details&gt; HTML Tag

New in HTML5.

# `<details> HTML Tag`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

What does `<details> HTML Tag` do?  
The &lt;details&gt; element is used to pair a &lt;summary&gt; statement with additional related details. The &lt;summary&gt; is displayed, and a user can view or hide additional details by clicking on the summary.

Display  
block

Usage  
textual

## Code Example

    <details>
    <summary>Visible Summary of Details</summary>
    This part won't be visible until the user chooses to see it.
    </details>

Visible Summary of Details This part won't be visible until the user chooses to see it.

<span class="underline"></span>

## What Sort of Details?

The `details` element is appropriate for things like copyright notices and other bits of information that you want on your webpage, but don’t need to be immediately displayed for all to see. However, if you get creative with the element, there’s quite a bit more that can be done. For example, you could use `details` as an easy FAQ solution if you don’t want to mess with jQuery accordions. How might that look? Let’s see what we can do with just a few lines of targeted [CSS](https://html.com/css/).

    <style> .faq details {   border: 1px solid #ddd;   border-radius: 2px;   margin: 10px; } .faq summary {   font-weight: bold;   background-color: #ddd;   font-size: 1.2em;   padding-left: 5px; } .faq p {   font-size: .9em;   margin-left: 25px; } </style> <div class="faq">   <details><summary>What is the meaning of life?</summary>     <p>You don't mess around, do you? Wow. Let's see. The meaning of the word "life" is: the state of being alive. See what I did there? <wink>.</p>   </details>   <details><summary>Are you in your pajamas?</summary>     <p>Well, isn't that a bit personal? I work from home! What do <em>you</em> think!</p>   </details>   <details><summary>Is this example over yet?</summary>     <p>Yes. Yes it is. Are you happy?</p>   </details> </div>

How will our browser handle that bit of HTML and CSS?

.faq details{border: 1px solid \#ddd; border-radius: 2px; margin: 10px;}.faq summary{font-weight: bold; background-color: \#ddd; font-size: 1.2em; padding-left: 5px;}.faq p{font-size: .9em; margin-left: 25px;}

What is the meaning of life?

You don’t mess around, do you? Wow. Let’s see. The meaning of the word “life” is: the state of being alive. See what I did there? &lt;wink&gt;.

Are you in your pajamas?

Well, isn’t that a bit personal? I work from home! What do _you_ think!

Is this example over yet?

Yes. Yes it is. Are you happy?

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## Browser Support for details

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-false.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-false.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-false.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-not-supported">Not supported.</span>

<span class="browser-not-supported">Not supported.</span>

<span class="browser-supported">45</span>

<span class="browser-not-supported">Not supported.</span>

<span class="browser-supported">9</span>

<span class="browser-supported">34</span>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`HTML Code: You Can Use It, But Does Your Browser Support It?`](https://html.com/tags/datalist/)

[`<dialog> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/dialog/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/button/" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/button/#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
