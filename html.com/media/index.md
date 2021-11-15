<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  Every Way Possible To Embed Modern Media With HTML Code

New in HTML5.

# Every Way Possible To Embed Modern Media With HTML Code

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

When the web was born, it was a plain text environment consisting primarily of paragraphs, lists, and hyperlinks. Around 1993, the first graphical web browsers came on the market and visual elements such as pictures and graphics took center stage. The addition of audio and video content followed quickly on the heels of images. However, because support for these types of media was not built into to the HTML specification, browser plugins were used to power media playback.

Contents

- [<span class="toc_number toc_depth_1">1</span> Modern Media on the Web: HTML5 &lt;audio&gt; & &lt;video&gt;](#Modern_Media_on_the_Web_HTML5_ltaudiogt_ltvideogt)
  - [<span class="toc_number toc_depth_2">1.1</span> HTML5 &lt;audio&gt;](#HTML5_ltaudiogt)
  - [<span class="toc_number toc_depth_2">1.2</span> HTML5 &lt;video&gt;](#HTML5_ltvideogt)
  - [<span class="toc_number toc_depth_2">1.3</span> Using &lt;source&gt; to Provide Multiple File Formats](#Using_ltsourcegt_to_Provide_Multiple_File_Formats)
  - [<span class="toc_number toc_depth_2">1.4</span> Supported File Formats](#Supported_File_Formats)
    - [<span class="toc_number toc_depth_3">1.4.1</span> Selecting File Formats for Audio Files](#Selecting_File_Formats_for_Audio_Files)
    - [<span class="toc_number toc_depth_3">1.4.2</span> Selecting File Formats for Video Files](#Selecting_File_Formats_for_Video_Files)
  - [<span class="toc_number toc_depth_2">1.5</span> Using &lt;track&gt; to Add Subtitles](#Using_lttrackgt_to_Add_Subtitles)
- [<span class="toc_number toc_depth_1">2</span> Embedding Externally Hosted Media](#Embedding_Externally_Hosted_Media)
  - [<span class="toc_number toc_depth_2">2.1</span> Using &lt;iframe&gt; to Embed Media](#Using_ltiframegt_to_Embed_Media)
  - [<span class="toc_number toc_depth_2">2.2</span> When to Use &lt;iframe&gt; vs. HTML5 &lt;video&gt; or &lt;audio&gt;](#When_to_Use_ltiframegt_vs_HTML5_ltvideogt_or_ltaudiogt)
- [<span class="toc_number toc_depth_1">3</span> The Past: Plug-In Powered Media Playback](#The_Past_Plug-In_Powered_Media_Playback)
  - [<span class="toc_number toc_depth_2">3.1</span> &lt;object&gt; vs &lt;embed&gt;](#ltobjectgt_vs_ltembedgt)
  - [<span class="toc_number toc_depth_2">3.2</span> Adding a Flash File with object](#Adding_a_Flash_File_with_object)
- [<span class="toc_number toc_depth_1">4</span> Closing Thoughts](#Closing_Thoughts)
- [<span class="toc_number toc_depth_1">5</span> Related Elements](#Related_Elements)
- [<span class="toc_number toc_depth_1">6</span> Tutorials and Resources](#Tutorials_and_Resources)

## <span id="Modern_Media_on_the_Web_HTML5_ltaudiogt_ltvideogt">Modern Media on the Web: HTML5 `<audio>` & `<video>`</span>

With the release of HTML5, the need for browser plugins for audio and video content began to go away. HTML5 introduced two new elements that include playback functionality for supported media formats. These two new elements are [`audio`](https://html.com/tags/audio/) and [`video`](https://html.com/tags/video/). In this [tutorial](https://html.com/) we’ll cover how to use the new tags, the media formats supported by these tags, and how to use the [`iframe`](https://html.com/tags/iframe/) element to embed media files hosted on an external website.

### <span id="HTML5_ltaudiogt">HTML5 `<audio>`</span>

The [`audio`](https://html.com/tags/audio/) element can be used to add audio content to a web page. Files embedded in this way are played by the audio playback engine built into all HTML5 compliant browsers. The syntax can be very simple, or it can be made more complex by adding in multiple file formats as well as fallback options for unsupported browsers.

At a minimum, to use the `audio` element the following attributes must be used:

- [`src`](https://html.com/attributes/audio-src/) defines the URL where the audio content is hosted.
- `type` defines the file format.
- [`controls`](https://html.com/attributes/audio-controls/) must be specified or no visual element will appear to control playback of the content.

A closing `audio` tag must be used, and additional content may optionally be nested between the opening and closing tags. In the code below, the text between the tags would appear in the event that the browser viewing the web page did not support the `audio` element.

Note that we’ve also provided attribution to satisfy the requirements stipulated by the publisher of this audio clip.

    <!--Simplest syntax-->
    <audio src="https://archive.org/download/ReclaimHtml5/ReclaimHtml5.mp3"
      type="audio/mpeg"
      controls>
      I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
    </audio>
    <p>This is a recording of a talk called <cite>Reclaim HTML5</cite> which was
      orinally delivered in Vancouver at a
      <a href="http://www.meetup.com/vancouver-javascript-developers/" taget="_blank">
      Super VanJS Meetup</a>. It is hosted by <a href="https://archive.org/details/ReclaimHtml5"
      target="_blank">The Internet Archive</a> and licensed under
      <a href="http://creativecommons.org/licenses/by/3.0/legalcode" target="_blank">
      CC 3.0</a>.
    </p>

Now let’s see how this element renders in the browser. Keep in mind, that you’ll need to be using a modern browser to see the element controls and to hear the clip. If you are using an unsupported browser, you will see a message letting you know that your browser does not support the `audio` element.

I’m sorry. You’re browser doesn’t support HTML5 `audio`.

This is a recording of a talk called Reclaim HTML5 which was orinally delivered in Vancouver at a [Super VanJS Meetup](https://www.meetup.com/vancouver-javascript-developers/). It is hosted by [The Internet Archive](https://archive.org/details/ReclaimHtml5) and licensed under [CC 3.0](https://creativecommons.org/licenses/by/3.0/legalcode).

There are several other attributes that may be optionally added to the `audio` element including:

- [`autoplay`](https://html.com/attributes/audio-autoplay/): If this attribute is used, the audio will begin to play as soon as enough has been downloaded to begin playback.
- [`loop`](https://html.com/attributes/audio-loop/): When this attribute is present the audio file will automatically start over once it has played through.
- [`muted`](https://html.com/attributes/audio-muted/): If you want audio content to be muted when initially loaded, use this attribute.
- [`preload`](https://html.com/attributes/audio-preload/): This element can be used with the value `none`, `metadata`, or `auto` to tell the browser how much of the audio file to preload. Note that if `autoplay` is applied to an `audio` element it will override the `preload` attribute.

### <span id="HTML5_ltvideogt">HTML5 `<video>`</span>

The [`video`](https://html.com/tags/video/) element follows the same basic syntax as the `audio` element. In it’s most basic form, all we need to do is use the `src` element to identify the video URL and add the `controls` attribute so that our website visitors can control video playback. We’re also going to use the `width` and `height` attributes to set the size of the video player, but this is optional.

    <!--Basic syntax-->
    <video width="640" height="480" src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4" controls>
      Sorry, your browser doesn't support HTML5 <code>video</code>, but you can
      download this video from the <a href="https://archive.org/details/Popeye_forPresident" target="_blank">Internet Archive</a>.
    </video>

As long as a website visitor’s browser supports the `video` element and is capable of playing an _.mp4_ file they will be able to play the video in their browser. If their browser doesn’t support the `video` element or the file format provided they will see a message providing a link where they can download the video.

Here’s a look at how this code renders.

Sorry, your browser doesn’t support HTML5 `video`, but you can  
download this video from the [Internet Archive](https://archive.org/details/Popeye_forPresident).

You may have noticed that we did not include any attribution with this video. That is because this video [hosted by the Internet Archive](https://archive.org/details/Popeye_forPresident) was published in 1956 and has passed into the public domain. Therefore, no attribution is required.

There are several additional attributes which can be used to influence how video content is loaded and appears in the browser. These attributes include:

- `autoplay` : If this attribute is used, the video will begin to play as soon as enough of the video has been downloaded to begin playback.
- `loop` : When this attribute is present the video will automatically start over once it has finished playing.
- `muted` : If you want the audio content of the video to be muted use this attribute.
- `preload` : This element can be used with the value `none`, `metadata`, or `auto` to tell the browser how much of the video file to preload. Note that if `autoplay` is applied to a `video` element it will override the `preload` attribute.
- `poster` : Use this attribute to select an image to display as the poster for the video until playback begins.

### <span id="Using_ltsourcegt_to_Provide_Multiple_File_Formats">Using `<source>` to Provide Multiple File Formats</span>

The [`source`](https://html.com/tags/source/) element can be used along with the `audio` or `video` element to specify more than one file format. When more than one format is provided, the browser selects the format best suited to the visitor’s device. When the `source` element is used, it replaces the `src` attribute.

Providing multiple formats is a good idea because not all browsers can play back all file formats. By providing multiple formats, you increase the chances that every visitor to your site will be able to view or listen to the media content on your site.

Here’s an example of how we could use the `source` attribute to provide two different formats of the same audio file.

    <!--Adding more than one version of the file-->
    <audio controls>
      I'm sorry. You're browser doesn't support HTML5 <code>audio</code>.
      <source src="https://archive.org/download/ReclaimHtml5/ReclaimHtml5.ogg" type="audio/ogg">
      <source src="https://archive.org/download/ReclaimHtml5/ReclaimHtml5.mp3" type="audio/mpeg">
    </audio>
    <p>This is a recording of a talk called <cite>Reclaim HTML5</cite> which was orinally delieved in Vancouver at a <a href="http://www.meetup.com/vancouver-javascript-developers/" taget="_blank">Super VanJS Meetup</a>. It is hosted by <a href="https://archive.org/details/ReclaimHtml5" target="_blank">The Internet Archive</a> and licensed under <a href="http://creativecommons.org/licenses/by/3.0/legalcode" target="_blank">CC 3.0</a>.</p>

Note that we’re still using the `controls` attribute, but that all other information has been removed from the `audio` tag. Instead, we now have two `source` elements, each with an `src` attribute pointing to a file URL, and a `type` attribute telling the browser the type of file that is being served up.

Here’s how the code renders:

I’m sorry. You’re browser doesn’t support HTML5 `audio`.

This is a recording of a talk called Reclaim HTML5 which was orinally delieved in Vancouver at a [Super VanJS Meetup](https://www.meetup.com/vancouver-javascript-developers/). It is hosted by [The Internet Archive](https://archive.org/details/ReclaimHtml5) and licensed under [CC 3.0](https://creativecommons.org/licenses/by/3.0/legalcode).

The `source` attribute can also be used for `video` elements. If the video file is available in multiple formats, all of the available formats can be added by removing the `src` attribute from the `video` element and using the `source` element multiple times between the opening and closing `video` tags.

    <video width="640" height="480" controls>
      Sorry, your browser doesn't support HTML5 <code>video</code>, but you can
      view this video by visiting the <a href="https://archive.org/details/Popeye_forPresident" target="_blank">Internet Archive</a>.
      <source src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4" type="video/mp4">
      <source src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident.ogv" type="video/ogv">
      <source src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident.mpeg" type="video/mpeg">
    </video>

Here’s how the `video` code with multiple `source` elements renders:

Sorry, your browser doesn’t support HTML5 `video`, but you can view this video by visiting the [Internet Archive](https://archive.org/details/Popeye_forPresident).

When the `source` element is used to provide multiple file formats, the visitor viewing the website is not provided the opportunity to pick between the different file formats. Instead, the browser does the work of determining which format is best suited to the viewers browser and device, and serves up that version automatically.

### <span id="Supported_File_Formats">Supported File Formats</span>

A variety of different video and audio file formats can be used along with these HTML5 elements. However, support for different formats varies from one browser to the next.

#### <span id="Selecting_File_Formats_for_Audio_Files">Selecting File Formats for Audio Files</span>

There are four audio formats with broad browser support. While support for other formats is available on a more limited basis, these four formats are the ones commonly used for delivering audio content to the web browser.

- **Wav** files are very high quality but also very large.
- The **MP3** format is much smaller than Wav, but it is a proprietary format and quality issues become apparent at low bitrates.
- **AAC** format is similar to the MP3 in that it is a proprietary format. It performs better at bitrates above 100kbps.
- **Ogg** is an open-source standard, making it popular with developers, and sound quality is [much better at low bitrates](https://en.wikipedia.org/wiki/File:Test_ogg_mp3_48kbps.wav) than MP3.

The MP3 and AAC file formats are [supported by nearly all browsers](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility). However, given the proprietary nature of both MP3 and AAC formats, and the fact that Ogg files sound better at low bitrates, developers and content curators tend to prefer the Ogg format.

Most browsers already support Ogg, and those that don’t can be expected to add support in the future. As a result, when dealing with audio content, it makes the most sense to provide an Ogg format file as the first option, with an MP3 or ACC fallback option. Wav is only recommended for instances where the quality of the recording is critical.

#### <span id="Selecting_File_Formats_for_Video_Files">Selecting File Formats for Video Files</span>

There are [two leading video file formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility) which can be used with the `video` element and are supported by most web browsers:

- **WebM** is a newer open-source format developed by Google.
- **MP4** higher quality and broader browser support than WebM.

If you’re only going to offer one type of video, go with the MP4 format since it has near universal compatibility with both desktop and mobile browsers. However, since WebM is built on open-source technologies, over time it should catch up to MP4 in terms of browser support, and may one day be the dominant format for delivering video over the web.

### <span id="Using_lttrackgt_to_Add_Subtitles">Using `<track>` to Add Subtitles</span>

The [`track`](https://html.com/tags/track/) element can be added as a child to any `audio` or `video` element to link a timed text file to the media content. The file linked with the `track` element must be formatted in [WebVTT format](https://developer.mozilla.org/en-US/docs/Web/API/Web_Video_Text_Tracks_Format). Quite often more than one `track` file is added to a `video` or `audio` element to provide captions or subtitles in multiple languages.

The `kind` attribute is used to specify what type of data is contained in the attached file. Values that can be applied to the `kind` attribute include `subtitles`, `captions`, `descriptions`, `chapters`, and `metadata`.

Other attributes that may be used with the `track` element include:

- `label`: Used to add a label to help users identify the track best suited to meet their needs.
- `src`: Identifies the URL of the track file.
- `srclang`: This attribute is required if the `kind` attribute is set to `subtitles` and identifies the language of the subtitles contained in the associated track file.

Here is an example of how the `track` element is added as a child of a `video` element:

    <video width="640" height="480" controls>
      Sorry, your browser doesn't support HTML5 <code>video</code>.
      <source src="video_url.mp4" type="video/mp4">
      <source src="video_url.ogv" type="video/ogv">
      <track kind="subtitles" src="english_captions.vtt" srclang="en" label="English">
      <track kind="subtitles" src="spanish_captions.vtt" srclang="es" label="Spanish">
    </video>

## <span id="Embedding_Externally_Hosted_Media">Embedding Externally Hosted Media</span>

The `audio` and `video` HTML5 elements are a great help to webmasters and content creators who want to host media files on their own server or [hosting](https://html.com/web-hosting/) account. However, content added to a webpage with the ‘audio’ or ‘video’ elements relies entirely on the browser’s native playback capabilities.

There are many providers of audio and video hosting who do an excellent job of optimizing media playback in a way that provides better performance than the native HTML5 elements. Take a website like YouTube for example. YouTube has created a video player that employs HTML5 by default, includes a flash-based fallback for unsupported browsers, adjusts the video quality based on the viewers connection speed, and provides for buffering and smooth streaming.

The same is true of audio content distributors such as Soundcloud and Spotify.

Native playback of audio and video content is not yet as good as playback services provided by companies that specialize in streaming media.

As a result, if you want to add media content from a website like YouTube, SoundCloud, Spotify, The Internet Archive, Vimeo, or any other leading provider of streaming media, you should first determine if the provider offers an easy way to embed their native media player. The reason for this is that when you embed the content provider’s media player, your visitors receive the optimization benefits the content provider has built into their media player.

### <span id="Using_ltiframegt_to_Embed_Media">Using `<iframe>` to Embed Media</span>

The video embedded above is hosted by The Internet Archive who also provides a media player which can be embedded with an [`iframe`](https://html.com/tags/iframe/) element. Here’s the code to embed the same video making use of The Internet Archive’s video player:

    <iframe src="https://archive.org/embed/Popeye_forPresident"
      width="640" height="480" frameborder="0" allowfullscreen>
    </iframe>

As you can see below, if we render the video using this code the media player looks a little different and playback performance is improved.

Spotify is another service that uses `iframes` to embed media content. Here’s what the code for embedding a Spotify audio file looks like:

    <iframe src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4Jzhluc2ZWHgA8ijEMP1HJ" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>

If we render that code, we don’t just get a set of simple `audio` element controls. Instead, we get a Spotify audio player embedded in our website.

YouTube has fully embraced the use of `iframes` to embed content, to the point that in January of 2015 they announced that they were deprecating support for other methods of embedding YouTube hosted content. To get an embed code for a YouTube video, simply navigate to the video you want to embed, open the contextual menu (right-click on a PC, or Ctrl and click on a Mac), and select “Copy embed code”. When you do this, code that looks like what you see below will be copied to your clipboard.

    <iframe width="854" height="480"
      src="https://www.youtube.com/embed/M7lc1UVf-VE"
      frameborder="0" allowfullscreen>
    </iframe>

That’s pretty straightforward code that loads a YouTube video player embedded in a webpage like this:

It’s important to understand that when you load a media player such as YouTube’s video player you are ultimately using the same browser resources as when you embed a video using the native HTML5 `video` element. The difference is that YouTube engineers have created a video player that takes into account things like the speed of your Internet connection to automatically adjust video quality on-the-fly. The result is that unless you are an exceptional Internet-video engineer you won’t be able to duplicate YouTube’s results.

### <span id="When_to_Use_ltiframegt_vs_HTML5_ltvideogt_or_ltaudiogt">When to Use `<iframe>` vs. HTML5 `<video>` or `<audio>`</span>

If you want to offer short video or audio clips that you own on your site, the `audio` and `video` elements provide an easy way to host these files on your own server and serve them up to your website visitors. However, if the files you want to add to your site are hosted by a website like YouTube that offers an embed script, you should use it and let that site handle playback.

In addition, if the clips you plan to add are very long, or if you expect heavy traffic, your website visitors will probably have a better experience if you upload your media file to a service like YouTube of Vimeo and embed the videos using `iframes`.

There are a few different reasons why this is true:

- The media player embedded through the use of an `iframe` generally includes fallback formats for visitors using older browsers. You can certainly add fallback options yourself, but letting someone else do it for you is easier and faster.
- Content hosting providers have designed their content to be shared in this way. Using another method may not work at all, may break as configuration settings change, or may violate the content provider’s terms of service.
- The media player provided by content hosting providers usually includes buffering and streaming optimization techniques that take into account the viewer’s internet connection speed and produce a better viewing or listening experience.

Keep in mind that the `iframe` element can be used for a lot more than embedding a media hosted at another site. To learn more about this flexible and useful element, visit [the `iframe` documentation page](https://html.com/tags/iframe/).

## <span id="The_Past_Plug-In_Powered_Media_Playback">The Past: Plug-In Powered Media Playback</span>

Adobe Flash and Quicktime are two browser plugin technologies that were popular in the past and are still used to power media content on the web, including playback of audio and video. Prior to the HTML5 `audio` and `video` elements, if you wanted to add media content to your site, you had no option other than to use a plugin.

While support for Flash and Quicktime is broad on desktop computers and laptops, the same cannot be said for mobile devices. In addition, there is a push in the development community to get away from using browser plugins entirely. Using plugins to deliver media content is no longer necessary for visitors using a modern browser, but many websites still offer a flash-based fallback for visitors using very old browsers.

### <span id="ltobjectgt_vs_ltembedgt">`<object>` vs `<embed>`</span>

Plugin content can be added to a webpage using either the [`object`](https://html.com/tags/object/) or [`embed`](https://html.com/tags/embed-tag/) element. Both elements are supported by modern browsers, and perform similar functions. This can lead one to question [whether both are even needed](http://bencreasy.com/object-versus-embed/).

In most cases, the choice of using one or the other is trivial, and since there is [at least once instance](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed#Browser_compatibility) of limited browser suppport for `embed`, our recommendation is to learn how to use `object` and to stick with it until such time when the HTML specification evolves and these two elements are (hopefully) consolidated.

### <span id="Adding_a_Flash_File_with_object">Adding a Flash File with `object`</span>

Basic syntax of the [`object`](https://html.com/tags/object/) element is straightforward. An opening tag is used, and three values are usually specified:

- \[Width\] and \[height\]: To define how large the embedded content should be.
- \[Data\]: To identify the URL where the content is located.
- \[Parameter\]: Used by Internet Explorer and Safari to identify the file location in place of the `data` attribute.

<!-- -->

    <object width="" height="" type="application/x-shockwave-flash" data="flash_file.swf">
      <param value="flash_file.swf">
    </object>

You can use this exact syntax to add a flash fallback to a `video` element for users of unsupported browsers. Here’s how a `video` element would look with a flash fallback file added.

    <video width="640" height="480" controls>
      <source src="video_url.mp4" type="video/mp4">
      <source src="video_url.ogv" type="video/ogv">
      <object width="" height="" type="application/x-shockwave-flash" data="flash_file.swf">
        <param value="flash_file.swf">
      </object>
      <track kind="subtitles" src="english_captions.vtt" srclang="en" label="English">
      <track kind="subtitles" src="spanish_captions.vtt" srclang="es" label="Spanish">
    </video>

In addition to offering a flash fallback, to provide complete accessibility it is a good idea to provide a link to one or more downloadable copies of the video or audio file. A full explanation of this technique is available from [Camen Design](http://camendesign.com/code/video_for_everybody).

## <span id="Closing_Thoughts">Closing Thoughts</span>

Web browsers started as simple plain-text processing machines and over time they have grown into extremely flexible programs which can handle everything from text and hyperlinks, to images, audio files, and videos. The addition of the `video` and `audio` elements to the HTML5 specification is evidence of the fact that the humble web browser isn’t done evolving yet, and that creating a rich media experience is actually getting easier as dependence on browser plugins is reduced.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Related_Elements">Related Elements</span>

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/video/" class="linked-name">&lt;video&gt; HTML Tag</a></td><td></td><td>The &lt;video&gt; element, which adds native video playback support to the HTML specification in HTML5, can be used to embed a video in an HTML document. Add the video URL to the element by using either the src attribute of the &lt;video&gt; element or by nesting one or more &lt;source&gt; elements between the opening and closing &lt;video&gt; tags.</td></tr><tr class="even"><td><a href="https://html.com/tags/track/" class="linked-name">&lt;track&gt; HTML Tag</a></td><td></td><td>The &lt;track&gt; element is used as a child of an &lt;audio&gt; or &lt;video&gt; element and adds a time-based data source to the parent media element. For example, the &lt;track&gt; element can be used to add timed subtitles to a video and closed captions to audio content.</td></tr><tr class="odd"><td><a href="https://html.com/tags/source/" class="linked-name">source</a></td><td></td><td>The &lt;source&gt; element is used as a child of a &lt;picture&gt;, &lt;audio&gt;, or &lt;video&gt; element, and identifies the URL of one or more media resources. The &lt;source&gt; element is commonly used to add media resources in multiple formats for the best possible cross-browser compatibility.</td></tr><tr class="even"><td><a href="https://html.com/tags/canvas/" class="linked-name">canvas</a></td><td></td><td>The &lt;canvas&gt; element creates a rectangular pane of arbitrary size which can be used for drawing graphics, manipulating photos, and creating animations with JavaScript.</td></tr><tr class="odd"><td><a href="https://html.com/tags/bgsound/" class="linked-name deprecated">bgsound</a></td><td><a href="https://html.com/attributes/bgsound-src/" class="linked-name deprecated">src</a><br />
<a href="https://html.com/attributes/bgsound-loop/" class="linked-name deprecated">loop</a><br />
</td><td>The &lt;bgsound&gt; element was used to embed a background audio track in an HTML document. It was only ever properly implemented in Internet Explorer and is no longer supported. The &lt;audio&gt; element can now be used to add background sounds, but audio tracks that autoplay and cannot be disabled by the user are strongly discouraged in modern web design.</td></tr></tbody></table>

## <span id="Tutorials_and_Resources">Tutorials and Resources</span>

[MIDI](https://html.com/media/midi/)

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
