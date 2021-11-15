<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS





How to Create Image Transformations with JavaScript
===================================================

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

[In another tutorial](https://html.com/images/simple-image-transformations/) we looked at how to use the CSS `background-image` property and `:hover` selector to create an interactive image that changed when a user moved their mouse over the image. In that example, we started with a gray home icon and transformed it into an orange icon. <img src="https://html.com/wp-content/uploads/transition.png" alt="gray icon transforming into orange icon" class="aligncenter sp-no-webp" srcset="
                            ../../wp-content/uploads/transition.png
                          " /> In this [tutorial](https://html.com/), we’ll look at another way to accomplish the same thing using JavaScript.

Contents

-   [<span class="toc_number toc_depth_1">1</span> When Should You Use CSS vs JavaScript](#When_Should_You_Use_CSS_vs_JavaScript)
-   [<span class="toc_number toc_depth_1">2</span> The Code Behind the Transformation](#The_Code_Behind_the_Transformation)
    -   [<span class="toc_number toc_depth_2">2.1</span> The Anchor Element](#The_Anchor_Element)
    -   [<span class="toc_number toc_depth_2">2.2</span> The Image Element](#The_Image_Element)
    -   [<span class="toc_number toc_depth_2">2.3</span> The Script](#The_Script)
-   [<span class="toc_number toc_depth_1">3</span> Putting it All Together](#Putting_it_All_Together)
-   [<span class="toc_number toc_depth_1">4</span> Simplify the Code with jQuery](#Simplify_the_Code_with_jQuery)
-   [<span class="toc_number toc_depth_1">5</span> Adding jQuery to a Website](#Adding_jQuery_to_a_Website)

<span id="When_Should_You_Use_CSS_vs_JavaScript">When Should You Use CSS vs JavaScript</span>
---------------------------------------------------------------------------------------------

CSS is the language used to define website layout and create simple animations. JavaScript is used to add interactivity based on website user feedback and activity. There are places where the capabilities of CSS and JavaScript overlap. This overlap raises the question: which should you use? The answer to that question isn’t a simple one, and many opinions have been expressed on the topic. Some say that you should use CSS in virtually every case and only [use JavaScript when no other tool can do the job](https://css-tricks.com/you-know-you-should-use-javascript-when/). Others offer a completely opposite argument that [JavaScript should replace CSS entirely](https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/). In practice, most developers simply use the language they are most familiar with, even if it isn’t the best choice for the task at hand. We aren’t going to weigh in on the debate. We’re going to let you make up your own mind on the matter and instead focus on showing you how to use both CSS and JavaScript. A previous tutorial already demonstrated how to accomplish this transition using CSS. [You can see it here.](https://html.com/images/simple-image-transformations/) The rest of this tutorial will teach you how to use JavaScript for this common task.

<span id="The_Code_Behind_the_Transformation">The Code Behind the Transformation</span>
---------------------------------------------------------------------------------------

Here is the JavaScript and HTML code used to create the transformation.

    <a href="home_url" onmouseover="rollover('home')" onmouseout="rollout('home')"> <img src="../path/original_image.file" name="home" alt="Home Page"> </a>  <script type="text/javascript"> <!-- setrollover("../path/hover_image.file"); --> </script> 

Let’s take those pieces of code one at a time so we can understand what’s going on.

### <span id="The_Anchor_Element">The Anchor Element</span>

The first line of code we see is an anchor element.

    <a href="home_url" onmouseover="rollover('home')" onmouseout="rollout('home')" > 

Since our example involves linking a home icon to the website homepage, the `href` attribute would point to our website homepage. Next comes the `onmouseover` JavaScript event. This is the event that will occur when the mouse hovers over the anchor element. In this case a function named `rollover` is called, and effects the item with the name *‘home’*. Finally, we have the `onmouseout` event which calls the `rollout` function, which once again affects the item with the name *‘home’*.

### <span id="The_Image_Element">The Image Element</span>

Nested within the anchor element is our image element.

    <img src="../path/original_image.file" name="home" alt="Home Page"> 

We will use the image element to load the image which will appear when the mouse is not hovering over the anchor element. In the case of our example, we’ll be loading the gray house icon. Next comes the `name` attribute. We use this attribute to give the JavaScript away to identify the HTML element that we want to modify with the script. Take a quick look back at the anchor element and notice how both functions use the parameter `('home')`. The attribute `name="home"` is how the JavaScript functions identify the image element as the item to be acted on.

### <span id="The_Script">The Script</span>

Lastly, we have a very short script.

    <script type="text/javascript"> <!-- setrollover("../path/hover_image.file"); --> </script> 

This script sets a value for the `rollover` function which is called by the `onmouseover` triggered when a viewer’s mouse hovers over the image.

<span id="Putting_it_All_Together">Putting it All Together</span>
-----------------------------------------------------------------

If we put the anchor, image, and script all together here’s what we get.

<img src="https://html.com/wp-content/uploads/home168-1.png" alt="Home Page" class="aligncenter sp-no-webp" srcset="
                              ../../wp-content/uploads/home168-1.png
                            " />

<span id="Simplify_the_Code_with_jQuery">Simplify the Code with jQuery</span>
-----------------------------------------------------------------------------

jQuery is a JavaScript library that allows you to create just about any sort of JavaScript animation or transformation with less code. If we wanted to use jQuery to create the same transformation, here’s what the code would look like.

    <a href="home_url"> <img src="../path/original_image.file" id="home" alt="Home Page"> </a>  <script> jQuery.('#home').hover(  function(){ $(this).attr( 'src' , 'hover-image.file' ) },  function(){ $(this).attr( 'src' , 'original-image.file' ) } ); </script> 

The nice thing about using jQuery is that we no longer have to add event handlers to the HTML itself (remember the `onmouseover` and `onmouseout` events from the original code?). One of the best things about jQuery is that it can add the event handlers dynamically. This allows for greater separation between the script and the HTML content and is a better way of coding. As you can see, the HTML is a lot cleaner if we use the jQuery library and the end-result is the same.

<img src="https://html.com/wp-content/uploads/home168-1.png" alt="Home Page" id="home" class="aligncenter sp-no-webp" srcset="
                              ../../wp-content/uploads/home168-1.png
                            " />

jQuery.(‘\#home’).hover( function(){ $(this).attr( ‘src’ , ‘home168-1.png’ ) }, function(){ $(this).attr( ‘src’ , ‘orange\_home.png’ ) } );

<span id="Adding_jQuery_to_a_Website">Adding jQuery to a Website</span>
-----------------------------------------------------------------------

One thing to keep in mind if you do decide to use this code on your own website is that the jQuery library must be loaded by the browser on every page where a jQuery script is used. JavaScript is supported by every modern browser. However, the jQuery library must be added to the browser in order for jQuery scripts to process. There are two ways to add jQuery to a website.

1.  Download jQuery from the [jQuery Foundation](https://jquery.com/) and upload it to your web server.
2.  Link to a publicly hosted jQuery library.

The easiest way to add jQuery to a website is to link to a jQuery library already hosted on the web. You can load the jQuery library hosted by Google by pasting the following line of code into the `head` element of your website.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> 

The icon used in this article was made by [Freepik](http://www.freepik.com/ "Freepik") from [www.flaticon.com](http://www.flaticon.com/ "Flaticon") and is licensed by [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/ "Creative Commons BY 3.0")

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                              https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x
                            " width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

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
