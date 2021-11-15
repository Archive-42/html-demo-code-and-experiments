[<img src="https://i.imgur.com/FxL5qM0.jpg" alt="Bot logo" width="200" height="200" />]()

### Bot Name

[![Status](https://img.shields.io/badge/status-active-success.svg)]() [![Platform](https://img.shields.io/badge/platform-reddit-orange.svg)](https://www.reddit.com/user/Wordbook_Bot) [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

------------------------------------------------------------------------

🤖 Few lines describing what your bot does.  

📝 Table of Contents
-------------------

-   [About](#about)
-   [Demo / Working](#demo)
-   [How it works](#working)
-   [Usage](#usage)
-   [Getting Started](#getting_started)
-   [Deploying your own bot](#deployment)
-   [Built Using](#built_using)
-   [TODO](../TODO.md)
-   [Contributing](../CONTRIBUTING.md)
-   [Authors](#authors)
-   [Acknowledgments](#acknowledgement)

🧐 About <span id="about"></span>
--------------------------------

Write about 1-2 paragraphs describing the purpose of your bot.

🎥 Demo / Working <span id="demo"></span>
----------------------------------------

![Working](https://media.giphy.com/media/20NLMBm0BkUOwNljwv/giphy.gif)

💭 How it works <span id="working"></span>
-----------------------------------------

The bot first extracts the word from the comment and then fetches word definitions, part of speech, example and source from the Oxford Dictionary API.

If the word does not exist in the Oxford Dictionary, the Oxford API then returns a 404 response upon which the bot then tries to fetch results form the Urban Dictionary API.

The bot uses the Pushshift API to fetch comments, PRAW module to reply to comments and Heroku as a server.

The entire bot is written in Python 3.6

🎈 Usage <span id="usage"></span>
--------------------------------

To use the bot, type:

    !dict word

The first part, i.e. “!dict” **is not** case sensitive.

The bot will then give you the Oxford Dictionary (or Urban Dictionary; if the word does not exist in the Oxford Dictionary) definition of the word as a comment reply.

### Example:

> !dict what is love

**Definition:**

Baby, dont hurt me~ Dont hurt me~ no more.

**Example:**

Dude1: Bruh, what is love? Dude2: Baby, dont hurt me, dont hurt me- no more! Dude1: dafuq?

**Source:** https://www.urbandictionary.com/define.php?term=what%20is%20love

------------------------------------------------------------------------

<sup>Beep\ boop.\ I\ am\ a\ bot.\ If\ there\ are\ any\ issues,\ contact\ my\ [Master](https://www.reddit.com/message/compose/?to=PositivePlayer1&subject=/u/Wordbook_Bot)</sup>

<sup>Want\ to\ make\ a\ similar\ reddit\ bot?\ Check\ out:\ [GitHub](https://github.com/kylelobo/Reddit-Bot)</sup>

🏁 Getting Started <span id="getting_started"></span>
----------------------------------------------------

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

    Give examples

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

    Give the example

And repeat

    until finished

End with an example of getting some data out of the system or using it for a little demo.

🚀 Deploying your own bot <span id="deployment"></span>
------------------------------------------------------

To see an example project on how to deploy your bot, please see my own configuration:

-   **Heroku**: https://github.com/kylelobo/Reddit-Bot\#deploying\_the\_bot

⛏️ Built Using <span id="built_using"></span>
---------------------------------------------

-   [PRAW](https://praw.readthedocs.io/en/latest/) - Python Reddit API Wrapper
-   [Heroku](https://www.heroku.com/) - SaaS hosting platform

✍️ Authors <span id="authors"></span>
-------------------------------------

-   <span class="citation" data-cites="kylelobo">\[@kylelobo\]</span>(https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

🎉 Acknowledgements <span id="acknowledgement"></span>
-----------------------------------------------------

-   Hat tip to anyone whose code was used
-   Inspiration
-   References
