<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="../../wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](../../index.html)

Learn HTML Code, Tags & CSS

[HTML](../../index.html)  /  New Audio HTML Element: Master It Out Now With Our Code Example

New in HTML5.

# `New Audio HTML Element: Master It Out Now With Our Code Example`

In <span class="post-meta-category">[HTML Tags](../index.html), [New](../../new/index.html)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](../../disclosure/index.html)

What does `New Audio HTML Element: Master It Out Now With Our Code Example` do?  
The &lt;audio&gt; element is used to add audio media resources to an HTML document that will be played by native support for audio playback built into the browser rather than a browser plugin.

Display  
inline

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
  - [<span class="toc_number toc_depth_2">1.1</span> Flamingo Sounds](#Flamingo_Sounds)
- [<span class="toc_number toc_depth_1">2</span> Audio Syntax](#Audio_Syntax)
- [<span class="toc_number toc_depth_1">3</span> Styling the Audio Player](#Styling_the_Audio_Player)
  - [<span class="toc_number toc_depth_2">3.1</span> Block display and sizing](#Block_display_and_sizing)
- [<span class="toc_number toc_depth_1">4</span> Audio File Formats](#Audio_File_Formats)
- [<span class="toc_number toc_depth_1">5</span> Browser Support for audio](#Browser_Support_for_audio)
- [<span class="toc_number toc_depth_1">6</span> Attributes of audio](#Attributes_of_audio)

## <span id="Code_Example">Code Example</span>

    <h3>Flamingo Sounds</h3>

    <audio controls id="audio-example">
      <!-- One or more source files, each referencing the same audio but in a different file format.
        The browser will choose the first file which it is able to play. -->
       <source src="/wp-content/uploads/flamingos.ogg">
       <source src="/wp-content/uploads/flamingos.mp3">

        You will see this text if native audio playback is not supported.
        <!-- You could use this fall-back feature to insert a JavaScript-based audio player. -->
    </audio>

    <small>Audio by  <a href="https://soundcloud.com/beeldengeluid">Beeld en Geluid</a> [<a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo&#039;s_-_SoundCloud_-_Beeld_en_Geluid.ogg">via Wikimedia Commons</a></small>


    <style>
    #audio-example {
    display: block;
    }
    </style>

### <span id="Flamingo_Sounds">Flamingo Sounds</span>

You will see this text if native audio playback is not supported.

<span class="small">Audio by [Beeld en Geluid](https://soundcloud.com/beeldengeluid) \[[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0)\], [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg)</span>

<span class="underline"></span>

## <span id="Audio_Syntax">Audio Syntax</span>

The `<audio>` element defines an in-browser audio player. The audio player can provide a single piece of audio content. To specify the source file of the audio content, use one or more [`<source>`](../source/index.html) elements inside the `<audio>` element. All `<source>` files should contain the same audio content, but in different file formats. The browser will select the first file format that it is able to play. (So order them according to your preference.) If you are _not_ going to provide multiple source file formats, you _may_ indicate the source file in the [`src`](../../attributes/audio-src/index.html) attribute, instead of in a separate [`<source>`](../source/index.html) element.

    <audio src="/wp-content/uploads/flamingos.mp3" controls>

## <span id="Styling_the_Audio_Player">Styling the Audio Player</span>

The design and styling of the audio player is left up to the browser implementation (subject to some amount of CSS styling). For the most part, the best practice is usually to leave the styling of the audio player alone, letting it be controlled by the browser. This ensures a familiar look and feel for the user.

### <span id="Block_display_and_sizing">Block display and sizing</span>

Two CSS styles you may want to consider specifying for the `<audio>` element are `display` and `width`. The default styling for the `<audio>` element is `inline`. This can cause some unfortunate collisions:

    <audio controls>   <!-- One or more source files, each referencing the same audio but in a different file format.     The browser will choose the first file which it is able to play. -->    <source src="/wp-content/uploads/flamingos.ogg">    <source src="/wp-content/uploads/flamingos.mp3">      You will see this text if native audio playback is not supported.     <!-- You could use this fall-back feature to insert a JavaScript-based audio player. --> </audio>  <small>Audio by  <a href="https://soundcloud.com/beeldengeluid">Beeld en Geluid</a> [<a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg">via Wikimedia Commons</a></small>

You will see this text if native audio playback is not supported.

<span class="small">Audio by [Beeld en Geluid](https://soundcloud.com/beeldengeluid) \[[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0)\], [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg)</span>

Typically, what you actually want in a page design is for the `<audio>` element to display as a `block` element.

    #audio-block-example {  display: block; }

    <audio controls id="audio-block-example">   <!-- One or more source files, each referencing the same audio but in a different file format.     The browser will choose the first file which it is able to play. -->    <source src="/wp-content/uploads/flamingos.ogg">    <source src="/wp-content/uploads/flamingos.mp3">      You will see this text if native audio playback is not supported.     <!-- You could use this fall-back feature to insert a JavaScript-based audio player. --> </audio>  <small>Audio by  <a href="https://soundcloud.com/beeldengeluid">Beeld en Geluid</a> [<a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg">via Wikimedia Commons</a></small>

\#audio-block-example { display: block; }

You will see this text if native audio playback is not supported.

<span class="small">Audio by [Beeld en Geluid](https://soundcloud.com/beeldengeluid) \[[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0)\], [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg)</span>

Finally, you may wish to specify the width of the `<audio>` element, so that it fits your overall layout better. For most responsive layouts, `width: 100%` works well, especially if you are using the same width styling on other similar elements.

    .full-width {  display: block;  width: 100%; }

    <img src="/wp-content/uploads/very-large-flamingo.jpg" class="full-width"> <audio controls class="full-width"> <source src="/wp-content/uploads/flamingos.ogg"> <source src="/wp-content/uploads/flamingos.mp3"> Your browser doesn't support audio playback. </audio> <small>Audio by  <a href="https://soundcloud.com/beeldengeluid">Beeld en Geluid</a> [<a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg">via Wikimedia Commons</a></small>

.full-width { display: block; width: 100%; margin-bottom: 5px; }

<img src="../../wp-content/uploads/very-large-flamingo.jpg" class="full-width sp-no-webp" srcset="/wp-content/uploads/very-large-flamingo.jpg" />

Your browser doesn’t support audio playback.

<span class="small">Audio by [Beeld en Geluid](https://soundcloud.com/beeldengeluid) \[[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0)\], [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AArtis%2C_enkele_flamingo's_-_SoundCloud_-_Beeld_en_Geluid.ogg)</span>

**Protip:** Different browsers will display the `<audio>` element differently. While you shouldn’t try to fight this, you definitely want to check how things look on a handful of commonly used browsers (including mobile). Besides display styling, different browsers handle `margin` and `height` a bit differently, and this can lead to ugly results if you don’t check. In particular, setting `height: auto;` on an `<audio>` element will break your spacing on some browsers, but not on others.

## <span id="Audio_File_Formats">Audio File Formats</span>

The most well-supported audio format is `.mp3`, which is recognized by all major browsers which recognize the `<audio>` element. After that, the second-most well-supported format is `.wav`, which is supported by most browsers still in active development (that is, not Internet Explorer). Other formats such as `.ogg` and `.acc` are sporadically supported. If you wish to use one of these formats, you should provide a more well supported alternative. (The examples above use two `<source>` elements for demonstration purposes. In practical use, there is no real reason to provide anything other than an `.mp3` file, which virtually all users will be able to play.)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](../../author/html/index.html)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](../../index.html).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_audio">Browser Support for audio</span>

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-supported">9</span>

<span class="browser-supported">43</span>

<span class="browser-supported">45</span>

<span class="browser-supported">13</span>

<span class="browser-supported">9</span>

<span class="browser-supported">34</span>

## <span id="Attributes_of_audio">Attributes of audio</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="../../attributes/audio-volume/index.html" class="linked-name">volume</a><br />
</td><td></td><td>Specifies the initial volume setting of the audio element, in a range from 0.0 to 1.0.</td></tr><tr class="even"><td><a href="../../attributes/audio-preload/index.html" class="linked-name">preload</a><br />
</td><td></td><td>Requests a particular preload behavior to the browser, which the browser may or may not follow.</td></tr><tr class="odd"><td><a href="../../attributes/audio-muted/index.html" class="linked-name">muted</a><br />
</td><td></td><td>Specifies that the volume on the audio player should initially be muted.</td></tr><tr class="even"><td><a href="../../attributes/audio-loop/index.html" class="linked-name">loop</a><br />
</td><td></td><td>Specifies that the audio content should loop indefinitely once playback has begun.</td></tr><tr class="odd"><td><a href="../../attributes/audio-controls/index.html" class="linked-name">controls</a><br />
</td><td></td><td>Toggles the display of audio playback controls.</td></tr><tr class="even"><td><a href="../../attributes/audio-autoplay/index.html" class="linked-name">autoplay</a><br />
</td><td></td><td>Specifies that the audio playback should begin immediately on page load.</td></tr><tr class="odd"><td><a href="../../attributes/audio-src/index.html" class="linked-name">src</a><br />
</td><td></td><td>Specifies the source file for an audio element.</td></tr></tbody></table>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`HTML5 Aside Element: Here Are The Good (And Not So Good) Uses For It`](../aside/index.html)

[`<bdi> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](../bdi/index.html)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="../../attributes/a-target/index.html" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/a-target/index.html#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../comment-tag/index.html" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="../comment-tag/index.html#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../../attributes/input-pattern/index.html" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/input-pattern/index.html#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../iframe/index.html" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../iframe/index.html#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../img/index.html" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="../img/index.html#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](../../index.html) © 2015-2020 [Sitemap](../../sitemap/index.html) | [Privacy](../../privacy/index.html) | [Contact](../../contact/index.html)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
