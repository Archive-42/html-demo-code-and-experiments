<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / &lt;u&gt; HTML Tag

`<u> HTML Tag`
==============

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `<u> HTML Tag` do?  
The &lt;u&gt; element was originally used to identify text that should be underlined. The element was deprecated in HTML 4.01, but in HTML5 it was redefined to represent text that should be displayed in a way that is an *unarticulated* but stylistically distinct from the surrounding text. For example, one proper use of the &lt;u&gt; element is to identify misspelled terms.

Display  
inline

Usage  
semantic

Code Example
------------

    <p>Here is a word that is <u>underlined</u> by the <code>&lt;u&gt;</code> element.</p>
    <p>Here is a word that is <span class="underline">underlined</span> with CSS.</p>
    <p>Here are words surrounded by  <code>&lt;u&gt;</code> tags with <u class="unarticulated">unarticulated but explicitly rendered</u> styling.</p>
    <style>
      .underline {
        text-decoration: underline;
      }
      u.unarticulated {
        text-decoration: none;
        color: #000080;
        font-style: italic;
      }
    </style>

Here is a word that is <span class="underline">underlined</span> by the `<u>` element.

Here is a word that is <span class="underline">underlined</span> with CSS.

Here are words surrounded by `<u>` tags with <span class="underline">unarticulated but explicitly rendered</span> styling.

<span class="underline"></span>

When to use the `<u>` Element
-----------------------------

When the `<u>` element was initially conceived it was supposed to be used to identify text that should be underlined. However, using HTML to add stylistic effects is no longer considered good practice. Instead, HTML should be used to add structure and [semantic meaning](https://html.com/semantic-markup/) to the content of a webpage, and [CSS](https://html.com/css/) should be used to add styles and control page layout.

What that means is that old tags like `<u>` that were originally conceived with presentation in mind have to be recast with semantic meaning, or deprecated and removed from the HTML specification.

So what semantic meaning does this element convey in modern HTML? According to [the HTML5 specification published by the W3C](https://www.w3.org/TR/html5/single-page.html#the-u-element):

> The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation…

You’re sorry you even asked, aren’t you? Let’s clarify that definition a bit.

First, what is a non-textual annotation? Well, to add an annotation means to add an explanation or note. However, in this case, the annotation is non-textual, meaning that the annotation has nothing to do with the content of the text.

Second, the annotion is *unarticulated* but explicitly rendered. In other words, the browser and web developer can choose to show the annotation any way they like. Be default, browsers will render text surrounded by `u` tags as underlined, but that isn’t necessarily required and isn’t part of the HTML specification. The way the annotation should appear is *unarticulated*, show it any way you like. Just make sure the annotation is easy to spot, in other words: *explicitly rendered*.

Let’s put the pieces together. The `u` element is used to:

-   Add an annotation that tells us something about the selected text itself, not about the content or message of the text.
-   The way the annotation is added is unarticulated. Words between `u` tags don’t have to be underlined, any method of annotation is acceptable as long as…
-   The annotation must be explicitly rendered, that is: easy to spot.

So what sorts of use-cases are there for such a niche tag? The most common use is to identify misspelled words. Let’s say you are presenting text that includes intentionally misspelled words that should jump out to the reader. The `<u>` element would be a great choice for identifying those words.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`What Does Td Colspan Have To Do With Tables In HTML?`](https://html.com/attributes/td-colspan/)

[`Applets`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/applets/)

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
