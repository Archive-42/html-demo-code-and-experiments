<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Every Way Possible To Embed Modern Media With HTML Code](https://html.com/media/) / &lt;track&gt; HTML Tag

New in HTML5.

# `<track> HTML Tag`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Every Way Possible To Embed Modern Media With HTML Code](https://html.com/media/)

What does `<track> HTML Tag` do?  
The &lt;track&gt; element is used as a child of an &lt;audio&gt; or &lt;video&gt; element and adds a time-based data source to the parent media element. For example, the &lt;track&gt; element can be used to add timed subtitles to a video and closed captions to audio content.

Display  
none

<span class="underline"></span>

## Code Example

    <video width="640" height="480" src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4" controls>
      <track kind="subtitles" src="subtitles_de.vtt" srclang="de">
      <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
      <track kind="subtitles" src="subtitles_ja.vtt" srclang="ja">
      Sorry, your browser doesn't support HTML5 <code>video</code>, but you can
      download this video from the <a href="https://archive.org/details/Popeye_forPresident" target="_blank">Internet Archive</a>.
    </video>

This video includes three text tracks. All four include subtitles in a different language. Available subtitle languages include German, English, and Japanese.

## Why Provide Tracks?

Tracks ensure that all users have access to content presented in audio and video files regardless of their language or any physical limitations. They remove accessibility and languages barriers and ensure that users can fully understand the content presented in video or audio format. As such, tracks represent an important internationalization and accessibility feature.

## Track Attributes

There are several attributes that can be applied to a `track` element to give the browser more information about the linked track.

- The `kind` attribute can be used to identify the _kind_ of data contained in the track: `subtitles`, `captions`, `descriptions`, `chapters`, or `metadata`.
- The `label` attribute is a text label applied to the track and read by the user when the user is selecting between available tracks.
- The `src` attribute specifies a URL where the track file, in _.vtt_ format, is located. This is the only _required_ `track` element attribute.
- The `srclang`attribute identifies the language of the text data. If the `kind` is set to `subtitles` or if `kind` is ommitted (`subtitles` is the default value of `kind`), then the `srclang` is required.
- The `default` attribute is used to identify the `track` that will be played by default unless the user selects and alternate `track`.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<time> HTML Tag`](https://html.com/tags/time/)

[`<video> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/video/)

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
