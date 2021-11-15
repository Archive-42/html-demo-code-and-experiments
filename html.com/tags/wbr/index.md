<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / &lt;wbr&gt; HTML Tag

# `<wbr> HTML Tag`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `<wbr> HTML Tag` do?  
The &lt;wbr&gt; element is used to define a word break opportunity in a string of text. It is particularly useful when you wish to define word break opportunities in a long unbroken string of text that might otherwise break improperly.

Display  
inline

Usage  
semantic

## Code Example

    <p>Control where a really long string of unbroken text can break with the &lt;wbr&gt; element,
    like this: <wbr>super<wbr>cali<wbr>fragi<wbr>listic<wbr>expi<wbr>ali<wbr>docious.</p>

Control where a really long string of unbroken text can break with the &lt;wbr&gt; element, like this: supercalifragilisticexpialidocious.

<span class="underline"></span>

## Give Me a Break!

Here you go: `<wbr>`. In essence, that is how the `<wbr>` element works. When inserted into a long block of text that really should be rendered as a single unbroken string, the string will break where the `<wbr>` tag is inserted if the browser is looking for a place to break the string.

When is this element useful? You probably won’t have a lot of opportunities to use this element. However, when you do need it, it can come in very handy. Let’s look at an example:

    <p>You will find the file you need by going to directory/subdirectory/deeper/and/deeper/down/the/rabbit/hole/hereitis.</p>

When we render that bit of text, here’s what we get:

You will find the file you need by going to directory/subdirectory/deeper/and/deeper/down/the/rabbit/hole/hereitis.

Since there was no line-break opportunity, the entire file path jumped down to the next line. Not ideal. Instead, what we really want to happen is for the file path to break in between directory names. To make that happen, let’s add some `<wbr>` elements.

    <p>You will find the file you need by going to directory<wbr>/subdirectory<wbr>/deeper<wbr>/and<wbr>/deeper<wbr>/down<wbr>/the<wbr>/rabbit<wbr>/hole<wbr>/hereitis.</p>

Now, when we render that paragraph, the file path will break appropriately.

You will find the file you need by going to directory/subdirectory/deeper/and/deeper/down/the/rabbit/hole/hereitis.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`What Does Td Colspan Have To Do With Tables In HTML?`](https://html.com/attributes/td-colspan/)

[`Applets`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/applets/)

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
