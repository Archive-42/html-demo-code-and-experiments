<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Every Way Possible To Embed Modern Media With HTML Code](https://html.com/media/) / &lt;bgsound&gt; HTML Tag

Deprecated in HTML5. Do not use.

`<bgsound> HTML Tag`
====================

In <span class="post-meta-category">[Deprecated](https://html.com/deprecated/), [HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Every Way Possible To Embed Modern Media With HTML Code](https://html.com/media/)

What does `<bgsound> HTML Tag` do?  
The &lt;bgsound&gt; element was used to embed a background audio track in an HTML document. It was only ever properly implemented in Internet Explorer and is no longer supported. The &lt;audio&gt; element can now be used to add background sounds, but audio tracks that autoplay and cannot be disabled by the user are strongly discouraged in modern web design.

Display  
none

Null element  
This element must not contain any content, and does not need a closing tag.

<span class="underline"></span>

Contents

-   [<span class="toc_number toc_depth_1">1</span> Proprietary Element](#Proprietary_Element)
-   [<span class="toc_number toc_depth_1">2</span> Embedding audio on a page](#Embedding_audio_on_a_page)
    -   [<span class="toc_number toc_depth_2">2.1</span> The right way to do the wrong thing](#The_right_way_to_do_the_wrong_thing)
-   [<span class="toc_number toc_depth_1">3</span> Attributes of bgsound](#Attributes_of_bgsound)

<span id="Proprietary_Element">Proprietary Element</span>
---------------------------------------------------------

The `<bgsound>` element was *never* a part of the HTML specification. We have it listed as “deprecated,” because that’s where we put features not included in [HTML5](https://html.com/html5/), but actually it wasn’t deprecated because it was never there to begin with. The `<bgsound>` element was introduced by Microsoft into the Internet Explorer browser. It allowed web designers to add a background audio loop to a website. This audio loop would, of course, only be heard when visiting the site with Internet Explorer. (Which is surely a good reason to switch over to Netscape.)

<span id="Embedding_audio_on_a_page">Embedding audio on a page</span>
---------------------------------------------------------------------

The HTML5 way to embed audio on a page is to use the [`<audio>`](https://html.com/tags/audio/) element.

    <audio controls id="audio-example">    <source src="/wp-content/uploads/flamingos.mp3">     You will see this text if native audio playback is not supported. </audio>  <small>Audio by  <a href="https://soundcloud.com/beeldengeluid">Beeld en Geluid</a> [<a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg">via Wikimedia Commons</a></small> 

\#audio-example { display: block; }

You will see this text if native audio playback is not supported.

<span class="small">Audio by [Beeld en Geluid](https://soundcloud.com/beeldengeluid) \[[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0)\], [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg)</span>

### <span id="The_right_way_to_do_the_wrong_thing">The right way to do the wrong thing</span>

Causing a browser to play audio automatically is a terrible idea. It annoys users, leading them to quickly search for the offending browser tab and close it down. The only thing worse than automatically launching an audio playback is doing so while hiding the controls of the player, so that the user cannot shut it off. And the only thing worse than that is setting the audio to loop indefinitely. That is precisely what the `<bgsound>` element accomplished. If you would like to annoy people and drive them off of your website, you create the same effect as `<bgsound>` using the updated HTML5 audio feature. Simply set the `<audio>` element to [`autoplay`](https://html.com/attributes/audio-autoplay/) and [`loop`](https://html.com/attributes/audio-loop/) while excluding the [`controls`](https://html.com/attributes/audio-controls/) attribute.

    <!-- Do not do this. -->  <audio loop autoplay id="audio-example">    <source src="/wp-content/uploads/flamingos.mp3"> </audio> 

No demo provided, because that is a terrible thing to do.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Attributes_of_bgsound">Attributes of bgsound</span>
-------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/bgsound-src/" class="linked-name deprecated">src</a><br />
</td><td></td><td>Specified the URL of the audio source file for the deprecated &lt;bgsound&gt; element.</td></tr><tr class="even"><td><a href="https://html.com/attributes/bgsound-loop/" class="linked-name deprecated">loop</a><br />
</td><td></td><td>Specified whether the audio track defined in the deprecated &lt;bgsound&gt; element should loop.</td></tr></tbody></table>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

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
