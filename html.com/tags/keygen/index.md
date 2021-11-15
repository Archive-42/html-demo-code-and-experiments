<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/) / &lt;keygen&gt; HTML Tag

New in HTML5.

`<keygen> HTML Tag`
===================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/)

What does `<keygen> HTML Tag` do?  
The &lt;keygen&gt; element generates a public-private key pair and sends the public key to the server with form submission. The element is expected to be deprecated and does not have broad browser support.

Display  
none

Null element  
This element must not contain any content, and does not need a closing tag.

<span class="underline"></span>

Contents

-   [<span class="toc_number toc_depth_1">1</span> Public Key Cryptography](#Public_Key_Cryptography)
-   [<span class="toc_number toc_depth_1">2</span> Public Key Crypto for HTML Forms](#Public_Key_Crypto_for_HTML_Forms)
-   [<span class="toc_number toc_depth_1">3</span> Future Deprecation](#Future_Deprecation)
-   [<span class="toc_number toc_depth_1">4</span> Browser Support for keygen](#Browser_Support_for_keygen)

<span id="Public_Key_Cryptography">Public Key Cryptography</span>
-----------------------------------------------------------------

One of the most important areas of innovation in web development and computer science generally is the use of public key cryptography. Public key cryptography (sometimes called *Public-Private Key Cryptography*) is a form of encryption in which a message can be encrypted using a public key that anyone can have access to, but the messages can only be decrypted and read by the person with a matching private key. It works like this: Alice generates a Public-Private key pair, using [one](https://github.com/travist/jsencrypt) or [another](http://travistidwell.com/jsencrypt/demo/) [key generation](https://pypi.python.org/pypi/ecdsa) tools. (There are many besides those). Alice publishes her public key, but keeps her private key a secret. Bob and Carol can boh use the public key to encrypt messages. Only Alice can read them, and neither Bob or Carol can read messages emcrypted by the other one. Additionally, Alice can use her private key to “sign” messages. Alice can encrypt a message using the private key. It can only be decrypted by the public key. Now, since everyone has access to the public key, this does not make the message secret. But it *does* verify that the message originated with Alice. Public key cryptography is one of the more important concepts behind technologies like [Bitcoin](https://bitcoin.org/en/) (and the [blockchain in general](https://en.wikipedia.org/wiki/Block_chain_(database)), [SSL security](https://en.wikipedia.org/wiki/Transport_Layer_Security), and [TOR](https://www.torproject.org/). In our increasing connected and increasing surveilanced world, Public Key Cryptography is the only sure way to both verify identity from a distance and ensure privacy of communication. Public Key Cryptography is vital for privacy and security, and not just for those with “something to hide.” Without Public Key Cryptography, of course there could be no [Wikileaks](https://wikileaks.org/) and no [Eric Snowden](https://en.wikipedia.org/wiki/Edward_Snowden). But also there would be no internet commerce, no online credit card transactions, no mobile banking.

<span id="Public_Key_Crypto_for_HTML_Forms">Public Key Crypto for HTML Forms</span>
-----------------------------------------------------------------------------------

If two parties want to communicate securely, they each need to be able to generate a public-private key pair, and then share the public key with the other party. The `<keygen>` is intended to facilitate this within the context of an HTML form. In browsers that implement it (not all do), if the element is included with a form, the browser generates a key-pair locally and sends the public key to the server when the form is submitted. The private key is then stored locally and (obviously) not shared. This could be used, for example, in a login form. Once logged in, all messages from the server could be encrypted, and all messages from the browser could be signed. This would ensure that every communication after login was being conducted between the server and the actual user who provided login credentials. (Presumably the server has also generated a private-public key pair and has shared the public key with the user. This is part of what [SSL Security Certificates accomplish](http://www.whoishostingthis.com/compare/ssl-certificates/).)

<span id="Future_Deprecation">Future Deprecation</span>
-------------------------------------------------------

[HTML5](https://html.com/html5/) is an evolving standard. It has been announced that the `<keygen>` element will be deprecated and removd from the HTML standard. This means that alternate methods of key generation will be needed. Naturally this simply means using [JavaScript](https://html.com/javascript/). There is now a [JavaScript Web Cryptography API](https://www.w3.org/TR/WebCryptoAPI/), which all web developers should [take the time to learn](http://qnimate.com/post-series/web-cryptography-api-tutorial/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_keygen">Browser Support for keygen</span>
-----------------------------------------------------------------------

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-false.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-false.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-not-supported">Not supported.</span>

<span class="browser-supported">1</span>

<span class="browser-supported">1</span>

<span class="browser-not-supported">Not supported.</span>

<span class="browser-supported">1.2</span>

<span class="browser-supported">3.0</span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`Learn What HTML Header (New Semantic Document Tag) Does`](https://html.com/tags/header/)

[`<main> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/main/)

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
