<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  Applets

Deprecated in HTML5. Do not use.

# Applets

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

The `applet` HTML element, which was used in the past to embed Java applications in an HTML document, was [introduced and simultaneously deprecated](https://www.w3.org/TR/html401/struct/objects.html#edef-APPLET) in favor of the [`object`](https://html.com/tags/object/) element when the HTML 4.01 specification was released in December of 1999. However, that didn’t stop developers from using the element which had been made available and functional by the release of the Java browser plugin in 1995.

The trend in recent years has been for web browsers to remove support for plugins. As a result, Java’s days as a web programming language are effectively over. Java-based applications designed to run in the browser must be transitioned to alternate technologies and frameworks or face a complete lack of browser support.

Contents

- [<span class="toc_number toc_depth_1">1</span> Java Applets are Obsolete](#Java_Applets_are_Obsolete)
  - [<span class="toc_number toc_depth_2">1.1</span> The “ Element: Introduced and Simultaneously Deprecated](#The_8220_Element_Introduced_and_Simultaneously_Deprecated)
  - [<span class="toc_number toc_depth_2">1.2</span> Java: Still Popular, Just Not for the Web](#Java_Still_Popular_Just_Not_for_the_Web)
- [<span class="toc_number toc_depth_1">2</span> Potential Replacements for Java Applets](#Potential_Replacements_for_Java_Applets)
  - [<span class="toc_number toc_depth_2">2.1</span> Web-Based Applications: Transition Away from Java](#Web-Based_Applications_Transition_Away_from_Java)
  - [<span class="toc_number toc_depth_2">2.2</span> Web-Launched Desktop Applications: Transition to Java Web Start](#Web-Launched_Desktop_Applications_Transition_to_Java_Web_Start)
- [<span class="toc_number toc_depth_1">3</span> The Future: A Plug-In Free Web](#The_Future_A_Plug-In_Free_Web)
- [<span class="toc_number toc_depth_1">4</span> Related Elements](#Related_Elements)

## <span id="Java_Applets_are_Obsolete">Java Applets are Obsolete</span>

There are two distinct ways in which applets have been deprecated:

1.  The `applet` element was deprecated in HTML 4.01 and rendered entirely obsolete by HTML5.
2.  Support for the Java browser plugin has been dropped by virtually all leading web browsers.

### <span id="The_8220_Element_Introduced_and_Simultaneously_Deprecated">The “ Element: Introduced and Simultaneously Deprecated</span>

The `applet` element was used to embed interactive scripts written in the programming language Java, which is not to be confused with [JavaScript](https://html.com/javascript/), directly into an HTML document. However, the `object` element could also be used to embed Java objects. As a result, the `applet` element was deprecated just as quickly as it was introduced in HTML 4.01 in favor of the more broadly useful `object` element.

While some browsers do still recognize the `applet` element, others do not. Those that do still recognize the `applet` element may discontinue support at any time now that HTML5 has obsoleted the tag. In other words, if you’re still using the `applet` element, switch to an alternate technology immediately.

### <span id="Java_Still_Popular_Just_Not_for_the_Web">Java: Still Popular, Just Not for the Web</span>

No one can deny that Java is still one of the most useful and [popular programming languages](http://www.tiobe.com/tiobe_index). However, it’s grip on the world wide web is [weak and slipping](https://w3techs.com/technologies/overview/programming_language/all). Why is this?

Java is a very popular programming language for custom enterprise applications, operating systems, and system utilities. However, it has suffered from a long history of [security issues](https://heimdalsecurity.com/blog/java-biggest-security-hole-your-computer/) when deployed on the web. In addition, it’s status as a plugin technology has made it a target of web standards advocates and security specialists who are pushing quite successfully for a completely plugin-free web experience.

Support for Java has always required a browser plugin, and recently support for the plugin has been dropped by leading web browsers such as [Google Chrome](https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html), [Mozilla Firefox](https://blog.mozilla.org/futurereleases/2015/10/08/npapi-plugins-in-firefox/), and Microsoft Edge.

Java isn’t going away. It will still be used widely for enterprise applications, operating systems, and much more. According to some surveys, Java may be [the most in-demand programming language](http://www.tiobe.com/tiobe_index) when all programming applications are taken into account. However, Java’s days as a programming language for web-based applications are behind us.

## <span id="Potential_Replacements_for_Java_Applets">Potential Replacements for Java Applets</span>

If you have Java-powered content and resources on your website embedded using the `applet` element, you should [switch to the `object` element](https://docs.oracle.com/cd/E19683-01/816-0378/using_tags/index.html) immediately. You also need to start investigating a complete transition over to supported web technologies.

You have two different options for transitioning away from embedded Java applets:

1.  Replace the Java applet with a web application written in a programming language with broad browser support.
2.  Transition the web-based applet into a full Java Web Start web-launched desktop application.

### <span id="Web-Based_Applications_Transition_Away_from_Java">Web-Based Applications: Transition Away from Java</span>

If your Java-powered application needs to run in the browser as part of a website you will need to transition to a client-side programming language such as JavaScript or Flash.

Our recommendation is to switch to [JavaScript](https://html.com/javascript/). This flexible programming language can be used for both client and server side programming, and is supported by every major browser. JavaScript is also entrenched as one of the fundamental technologies of the web. While no one can predict the future, if you’re going to make a bet on a programming language that is going to be used on the web for a very long time, you will do well to bet on JavaScript.

### <span id="Web-Launched_Desktop_Applications_Transition_to_Java_Web_Start">Web-Launched Desktop Applications: Transition to Java Web Start</span>

If your application is robust enough to run as a full desktop application, it’s possible to transition away from running the Java applet in a web browser to running it as a stand-alone application. The framework Oracle has developed to create Java applications that can be launched from a link embedded in a web page is called [Java Web Start](https://docs.oracle.com/javase/8/docs/technotes/guides/javaws/).

[Migrating a Java Applet](https://docs.oracle.com/javase/7/docs/technotes/guides/jweb/applet_migration.html) to a Web Start environment is usually relatively simple. The thing you’ll have to keep in mind is that the new desktop application will run completely independently of the website that launched it. If you have been using Java to run a web-based application embedded in your website, there simply isn’t a way to continue doing that for the long term, and if you want your application to run as part of a website you must switch to an alternate technology.

## <span id="The_Future_A_Plug-In_Free_Web">The Future: A Plug-In Free Web</span>

The future of the web will include increased functionality built right into the fundamental web technologies of [CSS](https://html.com/css/), HTML, and [JavaScript](https://html.com/javascript/). Already, we can see this progress as [support for media](https://html.com/media/) is built right into HTML5 and CSS is now capable of creating [impressive animations and transitions](https://html.com/css/) previously only possible with plugins or JavaScript.

The days of web applications powered by plugins like Java are behind us. While some plugins will continue to enjoy niche use to meet specific needs, the vast majority of modern web pages and applications will be built using languages that are fully supported by a plugin-less browser.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                              https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x
                            " width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

## <span id="Related_Elements">Related Elements</span>

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/object/" class="linked-name">object</a></td><td></td><td>The &lt;object&gt; element is used to embed an object in an HTML document. It is commonly used to embed webpage elements such as Flash and Java items that are handled by browser plugins.</td></tr><tr class="even"><td><a href="https://html.com/tags/param/" class="linked-name">param</a></td><td><a href="https://html.com/attributes/param-name/" class="linked-name">name</a><br />
<a href="https://html.com/attributes/param-value/" class="linked-name">value</a><br />
</td><td>The &lt;param&gt; element is used to specify the parameters that apply to plugin-powered content embedded with an &lt;object&gt; element.</td></tr><tr class="odd"><td><a href="https://html.com/tags/embed-tag/" class="linked-name">embed</a></td><td><a href="https://html.com/attributes/embed-width/" class="linked-name">width</a><br />
<a href="https://html.com/attributes/embed-volume/" class="linked-name deprecated">volume</a><br />
<a href="https://html.com/attributes/embed-starttime/" class="linked-name deprecated">starttime</a><br />
<a href="https://html.com/attributes/embed-src/" class="linked-name">src</a><br />
<a href="https://html.com/attributes/embed-pluginurl/" class="linked-name deprecated">pluginurl</a><br />
<a href="https://html.com/attributes/embed-align/" class="linked-name deprecated">align</a><br />
<a href="https://html.com/attributes/embed-autostart/" class="linked-name deprecated">autostart</a><br />
<a href="https://html.com/attributes/embed-controller/" class="linked-name deprecated">controller</a><br />
<a href="https://html.com/attributes/embed-controls/" class="linked-name deprecated">controls</a><br />
<a href="https://html.com/attributes/embed-hidden/" class="linked-name">hidden</a><br />
<a href="https://html.com/attributes/embed-href/" class="linked-name deprecated">href</a><br />
<a href="https://html.com/attributes/embed-loop/" class="linked-name deprecated">loop</a><br />
<a href="https://html.com/attributes/embed-mastersound/" class="linked-name deprecated">mastersound</a><br />
<a href="https://html.com/attributes/embed-name/" class="linked-name deprecated">name</a><br />
<a href="https://html.com/attributes/embed-playcount/" class="linked-name deprecated">playcount</a><br />
<a href="https://html.com/attributes/embed-pluginspage/" class="linked-name deprecated">pluginspage</a><br />
</td><td>The &lt;embed&gt; element creates an embedded panel in which a third-party application, such as a Flash-based object, can run.</td></tr><tr class="even"><td><a href="https://html.com/tags/app/" class="linked-name deprecated">app</a></td><td></td><td>The &lt;app&gt; element was a predecessor of the &lt;applet&gt; element which was deprecated in HTML 4.01 and removed from the specification entirely in HTML5. Modern equivalents include &lt;object&gt; and &lt;embed&gt;.</td></tr><tr class="odd"><td><a href="https://html.com/tags/applet/" class="linked-name deprecated">&lt;applet&gt; HTML Tag</a></td><td><a href="https://html.com/attributes/applet-align/" class="linked-name deprecated">align</a><br />
<a href="https://html.com/attributes/applet-archive/" class="linked-name deprecated">archive</a><br />
<a href="https://html.com/attributes/applet-border/" class="linked-name deprecated">border</a><br />
<a href="https://html.com/attributes/applet-code/" class="linked-name deprecated">code</a><br />
<a href="https://html.com/attributes/applet-codebase/" class="linked-name deprecated">codebase</a><br />
<a href="https://html.com/attributes/applet-hspace/" class="linked-name deprecated">hspace</a><br />
<a href="https://html.com/attributes/applet-mayscript/" class="linked-name deprecated">mayscript</a><br />
<a href="https://html.com/attributes/applet-name/" class="linked-name deprecated">name</a><br />
<a href="https://html.com/attributes/applet-width/" class="linked-name deprecated">width</a><br />
<a href="https://html.com/attributes/applet-height/" class="linked-name deprecated">height</a><br />
<a href="https://html.com/attributes/applet-vspace/" class="linked-name deprecated">vspace</a><br />
</td><td>The &lt;applet&gt; element was used to add Java applets to an HTML document. This element was deprecated in HTML 4.01 and removed from the HTML specification entirely with the release of HTML5. Modern equivalents inlcude &lt;object&gt; and &lt;embed&gt;.</td></tr></tbody></table>

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
