<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  Still Using HTML Marquee Tags? Find Out Why They Aren't Recommended

Deprecated in HTML5. Do not use.

`Still Using HTML Marquee Tags? Find Out Why They Aren’t Recommended`
=====================================================================

In <span class="post-meta-category">[Deprecated](https://html.com/deprecated/), [HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

What does `Still Using HTML Marquee Tags? Find Out Why They Aren't Recommended` do?  
The &lt;marquee&gt; element was used to identify text that should move across a defined section of a webpage in a horizontal or vertical direction. The element has been deprecated and should no longer be used. CSS or JavaScript can be used to create similar effects.

Display  
inline

Usage  
textual

<span class="underline"></span>

Contents

-   [<span class="toc_number toc_depth_1">1</span> The Marquee Element](#The_Marquee_Element)
-   [<span class="toc_number toc_depth_1">2</span> Width and Height Attributes](#Width_and_Height_Attributes)
-   [<span class="toc_number toc_depth_1">3</span> The Direction Attribute](#The_Direction_Attribute)
-   [<span class="toc_number toc_depth_1">4</span> The Behavior Attribute](#The_Behavior_Attribute)
-   [<span class="toc_number toc_depth_1">5</span> The Scrolldelay Attribute](#The_Scrolldelay_Attribute)
-   [<span class="toc_number toc_depth_1">6</span> The Scrollamount Attribute](#The_Scrollamount_Attribute)
-   [<span class="toc_number toc_depth_1">7</span> The BGColor Attribute](#The_BGColor_Attribute)
-   [<span class="toc_number toc_depth_1">8</span> HSpace and VSpace Attributes](#HSpace_and_VSpace_Attributes)
-   [<span class="toc_number toc_depth_1">9</span> The Loop Attribute](#The_Loop_Attribute)

<span id="The_Marquee_Element">The Marquee Element</span>
---------------------------------------------------------

<span class="useWarnHead">The Marquee Tag is Obsolete</span>  
This element is obsolete and should not be used. Browser support for this element is limited and using it may produce unexpected results. The following [tutorials](https://html.com/) are for historical value only.

`creates a scrolling display.` is an MSIE extension, but is now supported by NS 7. `is often regarded as one of the "evil" tags, and that perception alone might be enough reason to not use it. However, used lightly and with taste (and understanding that it will never render everywhere),` isn’t such a bad tag. It can work well for announcements.

The basic use of `is simple. Put most any kind of markup between` and “.

Hi There!

`is a text level element. By default` has a WIDTH of 100%, so it might appear as a block level. However, if you set the width to something smaller than 100%, you might notice that the marquee is in line with the surrounding text.

This is stuff before the marquee.Hi there!This is stuff after the marquee

Is it inline?

The content of ``does not start scrolling until the “ element becomes visible.

<span id="Width_and_Height_Attributes">Width and Height Attributes</span>
-------------------------------------------------------------------------

`WIDTH` and `HEIGHT` set the dimensions of the marquee.

    <MARQUEE WIDTH=200 HEIGHT=50>
    Howdy!
    </MARQUEE>

This code creates a marquee that is 200 pixes wide and 50 pixels tall:

Howdy!

Neither attribute is required. The default value for `WIDTH` is 100%. The `HEIGHT` defaults to the natural height of content as it appears in the width.

Happy Halloween!  
  
<img src="https://html.com/wp-content/uploads/pumpkin.gif" alt="picture of a pumpkin" class="sp-no-webp" srcset="/wp-content/uploads/pumpkin.gif" width="100" height="100" />

<span id="The_Direction_Attribute">The Direction Attribute</span>
-----------------------------------------------------------------

`DIRECTION` indicates which direction the marquee scrolls. `DIRECTION=LEFT`, which is the default, indicates that the marquee starts at the right and moves leftwards across the page. `DIRECTION=RIGHT` indicates that the marquee starts at the left and moves rightwards across the page.

This code:

    <MARQUEE DIRECTION=LEFT>Hi There.</MARQUEE>
    <MARQUEE DIRECTION=RIGHT>Hi There.</MARQUEE>

Produces this:

Hi There.  
Hi There.

<span id="The_Behavior_Attribute">The Behavior Attribute</span>
---------------------------------------------------------------

`BEHAVIOR` indicates how the contents scroll.

`BEHAVIOR=SCROLL`, which is the default, indicates that the content should scroll off the edge of the marquee area, then reappear on the other side. This code:

    <MARQUEE BEHAVIOR=SCROLL>Hello</MARQUEE>

Produces this:

Hello

`BEHAVIOR=SLIDE` is almost the same, except that it indicates that when the leading part content reaches the left edge it should stop without scrolling off. Notice in this example that the contents stop scrolling as soon as the “H” reaches the left side:

    <MARQUEE BEHAVIOR=SLIDE>Hello</MARQUEE>

Hello

`BEHAVIOR=ALTERNATE` makes the content bounce back and forth, all of it remaining visible all the time (assuming of course that it all fits).

This code:

    <MARQUEE BEHAVIOR=ALTERNATE>Hello</MARQUEE>

Produces this result:

Hello

<span id="The_Scrolldelay_Attribute">The Scrolldelay Attribute</span>
---------------------------------------------------------------------

`SCROLLDELAY`, together with `SCROLLAMOUNT`, sets the speed of the scrolling. Marquee moves the content by displaying the content, then delaying for some short period of time, then displaying the content again in a new position. `SCROLLDELAY` sets the amount of delay in milliseconds (a millisecond is 1/1000th of a second). The default delay is 85.

The following examples show the default `SCROLLDELAY` (i.e. when it is not set), a value of 500 (half a second) and 1000 (one full second).

    <MARQUEE>Hello</MARQUEE>
    <MARQUEE SCROLLDELAY=500>Hello</MARQUEE>
    <MARQUEE SCROLLDELAY=1000>Hello</MARQUEE>

Hello  
Hello  
Hello

`SCROLLDELAY` is good for making the marquee slower than the default but it’s not much help in speeding it up. Try `SCROLLAMOUNT` to speed up the marquee.

<span id="The_Scrollamount_Attribute">The Scrollamount Attribute</span>
-----------------------------------------------------------------------

`SCROLLAMOUNT`, together with `SCROLLDELAY`, sets the speed of the scrolling. Marquee moves the content by displaying the content, then delaying for some short period of time, then displaying the content again in a new position. `SCROLLAMOUNT` sets the size in pixels of each jump. A higher value for `SCROLLAMOUNT` makes the marquee scroll faster. The default value is 6.

The following examples demonstrate the default value for `SCROLLAMOUNT`, a value of 20 and 50.

    <MARQUEE>Hello</MARQUEE>
    <MARQUEE SCROLLAMOUNT=20>Hello</MARQUEE>
    <MARQUEE SCROLLAMOUNT=50>Hello</MARQUEE>

Hello  
Hello  
Hello

<span id="The_BGColor_Attribute">The BGColor Attribute</span>
-------------------------------------------------------------

`BGCOLOR` sets the background color of the marquee.

    <MARQUEE BGCOLOR=YELLOW>Howdy there!</MARQUEE>

Gives us this marquee:

Howdy there!

<span id="HSpace_and_VSpace_Attributes">HSpace and VSpace Attributes</span>
---------------------------------------------------------------------------

`HSPACE` sets the horizontal space to the left and right of the marquee. `VSPACE` sets the vertical space at the top and bottom of the marquee.

`HSPACE` has no effect unless you also use the `HSPACE` attribute. These three code examples show the default value of `HSPACE` (which is 0) and two larger values:

    <MARQUEE WIDTH="25%" BGCOLOR=YELLOW><p>Howdy there!</p><p>Good to see ya!</p></MARQUEE>Hi There!
    <MARQUEE HSPACE=10 WIDTH="25%" BGCOLOR=YELLOW><p>Howdy there!</p><p>Good to see ya!</p></MARQUEE>Hi There!
    <MARQUEE HSPACE=50 WIDTH="25%" BGCOLOR=YELLOW><p>Howdy there!</p><p>Good to see ya!</p></MARQUEE>Hi There!

Which give us these marquees:

Howdy there!

Good to see ya!

Hi There!

Howdy there!

Good to see ya!

Hi There!

Howdy there!

Good to see ya!

Hi There!

`VSPACE` sets the space between the marquee and text before and after. These code examples show the default value of `VSPACE` (also 0) and two larger values:

    Hello.<MARQUEE BGCOLOR=YELLOW>Howdy there!</MARQUEE>Hi There!
    Hello.<MARQUEE VSPACE=10 BGCOLOR=YELLOW>Howdy there!</MARQUEE>Hi There!
    Hello.<MARQUEE VSPACE=50 BGCOLOR=YELLOW>Howdy there!</MARQUEE>Hi There!

Hello.Howdy there!Hi There!

Hello.Howdy there!Hi There!

Hello.Howdy there!Hi There!

<span id="The_Loop_Attribute">The Loop Attribute</span>
-------------------------------------------------------

`LOOP` sets how many times the marquee should loop. The default value (i.e. if you don’t put a LOOP attribute at all) is `INFINITE`, which means that the marquee loops endlessly.

This code creates a marquee that loops twice:

    <MARQUEE LOOP=2>Hello</MARQUEE>

Here it is:

Hello

One of the problems with `LOOP` is that the content disappears after the last loop. To set the marquee so that the content is visible when the looping is done set `BEHAVIOR=SLIDE`:

    <MARQUEE LOOP=2 BEHAVIOR=SLIDE>Hello</MARQUEE>

Hello

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Claire Broadley](https://html.com/author/claire/)

<span class="fn">Claire is seasoned technical writer, editor, and HTML enthusiast. She writes for HTML.com and runs a content agency, Red Robot Media.</span>

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`How To Use  In HTML`](https://html.com/attributes/img-src/)

[`<td nowrap>`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/td-nowrap/)

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
