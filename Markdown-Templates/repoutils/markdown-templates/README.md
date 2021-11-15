![logo](https://avatars.githubusercontent.com/u/66654881?s=460&u=fa9d2cc45bc228dd9b7d3dee6d4653f940fab35a&v=4)

# Title

## Subtitle

**TOC**  
[About](#about) ● [Features](#features) ● [How It Works](#how-it-works) ● [Installation](#installation) ● [Development](#development) ● [Contact](#contact)

[![—————————————————–](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

A 1-5 sentence summary of what the app is.  
1-3 sentences ideal.  
Markdown tip: Add two spaces at the end of a line to create a line break.

<img src="docs/images/splash.png" alt="Splashy 100%-width image" style="width:100.0%" />

\#\#Try the Demo! [\[Live Website\]]()

---

[![—————————————————–](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

## About

[● See Website ●]()  
_(Inspired by [app name]())_

<img src="" alt="Animated gif example of app in action, or interesting detail, etc." style="width:50.0%" />

Describe overview of app, themes and philosophy, inspiration, audience, or whatever… 1-2 paragraphs

![]()

![]()

![]()

![]()

![]()

<img src="" alt="Image 1" style="width:48.0%" /> <img src="" alt="Image 2" style="width:48.0%" />

<img src="" alt="Image 1" height="500" /> <img src="" alt="Image 2" height="500" />

[![—————————————————–](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

## Features

- **Key action word** a feature here.
- **Emphasize action** for this feature.
- Feature 3 **highlights this benefit**.

\#\#For the Future

An optional _brief_ note describing scheduling or other planning details.

- **Major** _(high priority)_ A major feature
- **Major** A major feature
- **Minor** _(low priority)_ A minor feature
- **Maybe** Undecided ideas or brainstorming

[![—————————————————–](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

## How It Works

[1. Step One](#1-step-one)  
[How to Use Cool Feature ABC!](#how-to-use-feature-abc)  
[Troubleshooting Z](#troubleshooting-z)

\#\#1. Step One

<img src="" alt="Screenshot, animated gif, diagram, etc illustrating this step" style="width:50.0%" />

- To **do a thing**, follow this step.
- **\*TIP** This is a helpful tip.\*
- **\*NOTE** This is note about something.\*
- **\*WARNING!** This is a warning!\*

> **Optional Special Section!**  
> For any additional asides. Maybe illustrating a specific example, a table of information, a code snippet, or ‘fun facts’ or quotes!
>
> 1.  A list
> 2.  could be
> 3.  nice too
>
> <table><thead><tr class="header"><th>Header A</th><th>Header B</th></tr></thead><tbody><tr class="odd"><td>A</td><td>B</td></tr></tbody></table>
>
> <img src="" alt="Optional extra image(s)" style="width:100.0%" />

\#\#How to Use Feature ABC Repeat the pattern.

\#\#Troubleshooting Z Repeat the pattern.

## Installation

1.  Create a new postgres database and owner.
2.  Create a `.env` file matching the `.env.example` file and your new postgres information.
3.  Migrate the database with `npx sequelize-cli db:migrate`.
4.  Seed the migration with `npx sequelize-cli db:seed:all`.
5.  Run locally with `npm start`.

\#\#Get started on Heroku - Account, Database, Config Vars

1.  Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), if you haven’t done so already.
2.  Create a [free Heroku account](https://signup.heroku.com/dc).
3.  Login and [create a new Heroku app](https://dashboard.heroku.com/new-app).
4.  Navigate to the _Resources_ tab an set up a ‘Heroku Postgres’ database for the app.
5.  Select the ‘Hobby Dev - Free’ plan.
6.  Navigate to the _Settings_ tab. Click ‘Reveal Config Vars’. Set the environment variables needed to run the app.

- **NOTE** NEVER check in `.env` files or any private keys. Environment variables set in an `.env` file won’t work in Heroku anyway.
- **NOTE** See the `DATABASE_URL` is already set. This is done when the Heroku Postgres database was set up. Therefore, `DB_USERNAME`, `DB_PASSWORD`, and `DB_DATABASE` arent’ required.

\#\#Configure the app to use the Heroku Postgres database There are two ways to configure the `production` environment:

1.  With _dotenv_ and a `.sequelizerc` file that points to a `config/database.js` file.
2.  The Sequelize CLI’s auto-generated `config.json` file.

**With .sequelizerc and dotenv** Update the `config/database.js` file with a `production` key like so.

    // config/database.js
    // ...
    module.exports = {
      development: {
        // ...
      },
      production: {
        use_env_variable: "DATABASE_URL",
        dialect: "postgres",
        dialectOptions: { ssl: true },
        seederStorage: "sequelize",
      },
    };

**With Sequelize CLI’s config.json** Change the `production` entry to look like this:

    "production": {
      "dialect": "postgres",
      "seederStorage": "sequelize",
      "use_env_variable": "DATABASE_URL"
    }

## ➤ Push to Heroku

1.  In the root of the app’s repo directory, log into Heroku with `heroku login`.
2.  Add a new remote to GitHub configuration with `heroku git:remote -a <<app-name-here>>`.
3.  Add all changes with `git add .`.
4.  Commit changes with `git commit -m "<<Add message here>>"`. (Optionally, `git commit -am` Adds and commits in one command.)
5.  Push changes to Heroku with `git push Heroku`.
6.  You should see a successful build image.

[![—————————————————–](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

    remote: -----> Launching...
    remote:        Released v5
    remote:        https://«your-app-name».herokuapp.com/ deployed to Heroku
    remote:
    remote: Verifying deploy... done.
    To https://git.heroku.com/«app-name-here».git

## ➤ Run migrations on Heroku

1.  To migrate your Heroku Postgres database, run the migration command prefaced with `heroku run` inside the repo.

    heroku run npx sequelize-cli db:migrate

1.  To seed, preface the seed command with `heroku run` as well.

    heroku run npx sequelize-cli db:seed:all

1.  To roll back, instead of dropping the database, first try to migrate down and up (shown below). If this doesn’t work, reset the entire database by removing and adding the ‘Heroku Postgres’ add-on again, then migrating and seeding as the first time.

    heroku run npx sequelize-cli db:seed:undo:all
    heroku run npx sequelize-cli db:migrate:undo:all
    heroku run npx sequelize-cli db:migrate
    heroku run npx sequelize-cli db:seed:all

[![—————————————————–](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

## ➤ Development

**DEV TOC**  
[Technologies](docs/development.md#technologies) ● [Concept](docs/development.md#concept) ● [Models](docs/development.md#models) ● [Routes](docs/development.md#routes) ● [Wireframes](docs/development.md#wireframes) ● [Code Highlights](#code-highlights) ● [Dev Snapshots](docs/development.md#development-snapshots)

[\[See full dev notes HERE\]](readme/development.md)  
The full notes on this project’s development are kept in a separate document linked above.  
It details the technical aspects of this project’s development.  
A few sample snapshots are below from the development process.

<img src="" alt="Snapshot 1" height="250" /> <img src="" alt="Snapshot 2" height="250" /> <img src="" alt="Snapshot 3" height="250" />

---

[![—————————————————–](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

## ➤Contact

Thank you very much for your interest in this project.  
Feel free to reach out to provide feedback, bug reports, or anything else :) .

<img src="%5Bdocs/images/portrait.png%5D(https://avatars.githubusercontent.com/u/66654881?s=460&amp;u=fa9d2cc45bc228dd9b7d3dee6d4653f940fab35a&amp;v=4)" alt="Bryan Gimer" height="100" />

\#\#Bryan Guner _(Full-stack software developer)_

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://bgoonz.github.io/)](https://bgoonz.github.io) [![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)](https://github.com/bgoonz/resume-cv-portfolio-samples/blob/master/2021-resume/bryan-guner-resume-2021.pdf) [](mailto:bryan.guner@gmail.com) [![Blog](https://img.shields.io/badge/-Blog-21759b?style=flat-square&logo=WordPress&logoColor=white&link=https://web-dev-hub.com/)](https://web-dev-hub.com/) [![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bryan-guner-046199128/)](https://www.linkedin.com/in/bryan-guner-046199128/) [![AngelList](https://img.shields.io/badge/-AngelList-black?style=flat-square&logo=AngelList&logoColor=white&link=https://angel.co/u/bryan-guner)](https://angel.co/u/bryan-guner) [![GitHub bgoonz](https://img.shields.io/github/followers/bgoonz?label=follow&style=social)](https://github.com/bgoonz)

---
