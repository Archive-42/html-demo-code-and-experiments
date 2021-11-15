<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / Proper Use Of The Strong Element In HTML (Plus Code Example)

# `Proper Use Of The Strong Element In HTML (Plus Code Example)`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `Proper Use Of The Strong Element In HTML (Plus Code Example)` do?  
The &lt;strong&gt; element is used to identify text that is of greater importance than the surrounding text. By default, all browsers render &lt;strong&gt; text in a bold typeface.

Display  
inline

Usage  
semantic

## Code Example

    <p>Chapter 1: <strong>Proper Use of the Strong Element</strong></p>

    <p>This oft-misused element implies added importance, seriousness, or urgency. <strong>Use it carefully</strong>.</p>

Chapter 1: **Proper Use of the Strong Element**

This oft-misused element implies added importance, seriousness, or urgency. **Use it carefully**.

<span class="underline"></span>

## Pay Attention!

That’s what the `<strong>` element is all about. Use it and you are saying, in effect:

> “Look here! These words are more important than the surrounding words. So pay attention!”

By default, browsers will render text between `<strong>` tags in a bold typeface. However, you can always adjust the browser defaults with a little [CSS](https://html.com/css/). It’s important to use the `<strong>` element for it’s semantic meaning–added importance, urgency, or seriousness–and not for it’s stylistic presentation. If your goal is just to make a word appear in bold typeface without added importance, urgency, or seriousness, it’s better to use the [`<b>`](https://html.com/tags/b/) element, or even better, just use [CSS](https://html.com/css/). Here’s what I mean:

    <p><strong>Notice:</strong> Don't use &lt;strong&gt; just to make a word <b>bold</b>. Instead,  use the &lt;b&gt; tag or a &lt;span&gt; element and CSS to <span class="bold">make the font  bold</span>.</p>  <p><strong>Use &lt;strong&gt; to imply importance, urgency, or seriousness.</strong></p>  <style> .bold {   font-weight: bold; } </style>

Let’s see how that looks when rendered in the browser:

**Notice:** Don’t use &lt;strong&gt; just to make a word **bold**. Instead, use the &lt;b&gt; tag or a &lt;span&gt; element and CSS to <span class="bold">make the font bold</span>. **Use &lt;strong&gt; to imply importance, urgency, or seriousness.**

.bold{font-weight: bold;}

## This Word is **So** Serious

One little-known fact is that HTML actually allows you to imply levels of importance by stacking up multiple `<strong>` elements. While browsers won’t generally render these elements any differently, browsers and anyone using assistive technologies will pick up the cue. Here’s how you could use this option if you’re so inclined:

    <p><strong>Danger: Swimming in this area is restricted. <strong>Do not enter the water.</strong></strong></p>

Let’s see what your browser does with the nested `<strong>` tags:

**Danger: Swimming in this area is restricted. **Do not enter the water.\*\*\*\*

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`How To Use In HTML`](https://html.com/attributes/img-src/)

[`<td nowrap>`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/td-nowrap/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/img/" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/img/#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
