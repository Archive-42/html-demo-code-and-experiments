<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="
                    https://html.com/wp-content/uploads/html-com-logo.png
                  " width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  &lt;meter&gt; HTML Tag

New in HTML5.

&lt;meter&gt; HTML Tag
======================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

<span class="underline"></span>

Contents

-   [<span class="toc_number toc_depth_1">1</span> Correct Usage](#Correct_Usage)
    -   [<span class="toc_number toc_depth_2">1.1</span> Displaying a Percentage](#Displaying_a_Percentage)
    -   [<span class="toc_number toc_depth_2">1.2</span> Displaying a Number Range](#Displaying_a_Number_Range)
    -   [<span class="toc_number toc_depth_2">1.3</span> Prohibited Usage](#Prohibited_Usage)

<span id="Correct_Usage">Correct Usage</span>
---------------------------------------------

The `<meter>` element is new in HTML 5. It aids rapid data visualization by displaying a percentage on a gauge. The element can be linked to a form using the `form` attribute, and is most helpful when displaying statistics or test scores.

### <span id="Displaying_a_Percentage">Displaying a Percentage</span>

    <meter value="0.9">90%</meter> 

The output looks like this: 90%

### <span id="Displaying_a_Number_Range">Displaying a Number Range</span>

Use `<meter>` with the `min` and `max` attributes to display a score within a defined range. The `optimum` attribute can be used to specify an ideal or desired number, such as a pass mark in a test, although this is not supported in all browsers. (The opposite of `optimum` in this scenario is `low`).

    <meter value="11" min="0" max="45" optimum="40">25 out of 45</meter> 

The output looks like this: 25 out of 45

### <span id="Prohibited_Usage">Prohibited Usage</span>

`<meter>` is not designed to be used as a progress bar. There is a [`<progress>`](https://html.com/tags/progress/) element for that purpose. Additionally, you should only use `<meter>` if you are able to define a value for the `max` and `min` attribute. This prohibits its use for any measurement that could theoretically exceed the range you define in your code.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                                https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=200&amp;d=mm&amp;r=g 2x
                              " width="100" height="100" />

[Claire Broadley](https://html.com/author/claire/)

<span class="fn">Claire is seasoned technical writer, editor, and HTML enthusiast. She writes for HTML.com and runs a content agency, Red Robot Media.</span>

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>&lt;menuitem&gt; HTML Tag](https://html.com/tags/menuitem/)

[&lt;nav&gt; HTML Tag<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/nav/)

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
