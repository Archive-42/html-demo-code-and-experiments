<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Anchors: Here’s How To Create Links For Fast Navigation](https://html.com/anchors-links/)  /  [How To Use a (For Creating Hyperlinks) In HTML](https://html.com/tags/a/) / How To Use The &lt;a&gt; To Make Links & Open Them Where You Want!

`How To Use The <a> To Make Links & Open Them Where You Want!`
==============================================================

In <span class="post-meta-category">[HTML Attributes](https://html.com/attributes/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Attribute of  
[How To Use a (For Creating Hyperlinks) In HTML](https://html.com/tags/a/)

What does `How To Use The <a> To Make Links & Open Them Where You Want!` do?  
Specifies the context in which the linked resource will open.

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Frames deprecated; only use \_blank](#Frames_deprecated_only_use__blank)
-   [<span class="toc_number toc_depth_1">3</span> Default target](#Default_target)
-   [<span class="toc_number toc_depth_1">4</span> a target=”\_blank” Open in New Browser Tab (or Window)](#a_target8221_blank8221_Open_in_New_Browser_Tab_or_Window)
    -   [<span class="toc_number toc_depth_2">4.1</span> Why Open in a New Browser?](#Why_Open_in_a_New_Browser)
    -   [<span class="toc_number toc_depth_2">4.2</span> Open All External Links in a New Tab with JavaScript](#Open_All_External_Links_in_a_New_Tab_with_JavaScript)
    -   [<span class="toc_number toc_depth_2">4.3</span> Reasons not to use \`target=”\_blank”](#Reasons_not_to_use_target8221_blank8221)
-   [<span class="toc_number toc_depth_1">5</span> Values of the target Attribute](#Values_of_the_target_Attribute)
-   [<span class="toc_number toc_depth_1">6</span> All Attributes of the anchor Element](#All_Attributes_of_the_anchor_Element)
-   [<span class="toc_number toc_depth_1">7</span> Browser Support for target](#Browser_Support_for_target)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <a href="/" target="_blank">The home page will open in another tab.</a>

[The home page will open in another tab.](https://html.com/)

<span class="underline"></span>

<span id="Frames_deprecated_only_use__blank">Frames deprecated; only use `_blank`</span>
----------------------------------------------------------------------------------------

The only currently relevant value of `target` is `_blank`. The other values of `target` were used to specify specific frames. However, frames have been [deprecated in HTML5](https://html.com/html5/).

<span id="Default_target">Default `target`</span>
-------------------------------------------------

If no `target` is specified, the link will open in the current context, unless the user or browser specifies otherwise.

<span id="a_target8221_blank8221_Open_in_New_Browser_Tab_or_Window">a target=”\_blank” Open in New Browser Tab (or Window)</span>
---------------------------------------------------------------------------------------------------------------------------------

The `target` attribute specifies where the linked document will open when the link is clicked. The default is the current window. If `target="_blank"`, the linked document will open in a new tab or (on older browsers) a new window.

### <span id="Why_Open_in_a_New_Browser">Why Open in a New Browser?</span>

The most common reason to use \`target=”\_blank” is so that offsite links open in a separate tab. This allows a user to click on a reference and come back to it later without leaving the current page. It keeps visitors on your site longer and improves most of your metrics: bounce rate, conversion, pages visited.

### <span id="Open_All_External_Links_in_a_New_Tab_with_JavaScript">Open All External Links in a New Tab with JavaScript</span>

You don’t need to manually add `target="_blank"` to every link on your site. If you link out a lot (which you should do), it is easy to add some [JavaScript](https://html.com/javascript/) code to your site and turn all external links into `_blank` links automatically.

    jQuery(document.links)   .filter(function() {     return this.hostname != window.location.hostname;   })     .attr('target', '_blank');  

(You can see a slightly modified form of this code in action on every page of this website.) This trick requires [jQuery](https://jquery.com/), but there is a good chance you are using it already. It is used in the most popular frameworks and content management systems, including [WordPress](https://wordpress.org/), [Drupal](https://drupal.org/), and [Twitter Bootstrap](https://getbootstrap.com/). If you need to do it without jQuery, that can be done as well. Here is a “plain JavaScript” version:

    function externalLinks() {   for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {     var b = c[a];     b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")   } } ; externalLinks(); 

Besides making it easier, this cleans up your markup considerably.

### <span id="Reasons_not_to_use_target8221_blank8221">Reasons not to use \`target=”\_blank”</span>

Some people argue that users do not prefer to open links in a new browsing context. They think that doing so is similar to popup ads and other annoying behavior. With the rise of [tabbed browsing](#), this argument has largely gone away. Most users prefer to open links in a new tab, because it allows them to come queue referenced links for later reading without losing their current browsing context.

<span id="Values_of_the_target_Attribute">Values of the `target` Attribute</span>
---------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Value Name</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td>_blank</td><td>Opens the linked document in a new tab or window.</td></tr><tr class="even"><td>_parent</td><td>Opens the link in the parent frame. Frames are deprecated in HTML5.</td></tr><tr class="odd"><td>_self</td><td>Open the link in the current frame.</td></tr><tr class="even"><td>_top</td><td>Opens the link in the top-most frame. Frames are deprecated in HTML5.</td></tr><tr class="odd"><td>frame name</td><td>Opens the link in the named frame. Frames are deprecated in HTML5.</td></tr></tbody></table>

<span id="All_Attributes_of_the_anchor_Element">All Attributes of the [`anchor`](https://html.com/tags/a/) Element</span>
-------------------------------------------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/a-hreflang/">hreflang</a></td><td></td><td>Specifies the language of the linked resource.</td></tr><tr class="even"><td><a href="https://html.com/attributes/a-download/">download</a></td><td></td><td>Directs the browser to download the linked resource rather than opening it.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/a-target/">target</a></td><td>_blank<br />
_parent<br />
_self<br />
_top<br />
frame name</td><td>Specifies the context in which the linked resource will open.</td></tr><tr class="even"><td><a href="https://html.com/attributes/a-title/">title</a></td><td>text</td><td>Defines the title of a link, which appears to the user as a tooltip.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/a-href/">href</a></td><td>url</td><td>Specifies the linked document, resource, or location.</td></tr><tr class="even"><td><a href="https://html.com/attributes/a-name/">name</a></td><td></td><td></td></tr></tbody></table>

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_target">Browser Support for target</span>
-----------------------------------------------------------------------

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
