# frontity-in-theme

This project was bootstrapped with [Frontity](https://frontity.org/).

#### Table of Contents

- [Theme instalation](#theme-installation)
  - [Notes](#notes-)

- [Frontity Documentation](#frontity)
  - [Launch a development server](#launch-a-development-server)
  - [Create your custom theme](#create-your-custom-theme)
  - [Create a production-ready build](#create-a-production-ready-build)
  - [Deploy](#deploy)
  - [Martha's notes](#notes-)

## Theme instalation

This project already has configured the api link, you just have to install it and work with it. These are the instructions to install it in your local machine:

1. Clone this project
2. Inside of the directory's folder, run the next line:
```
npm install
```
3. To run the project, execute the next line:
```
npx frontity dev
```

After that, you can create your ow branch and start working with project.

### Notes 💃

Frontity works with *themes* it has some default theme, this project is *in-theme* 

I used these plugins to personalize pages an components on WordPress:
- [Custom Post Type UI plugin](https://es.wordpress.org/plugins/custom-post-type-ui/). It lets you to create cutom post element for wordpress, so you can create and manage content like, videos, films, etc.
- [ACF plugin](https://es-mx.wordpress.org/plugins/advanced-custom-fields/). It helps to create custom fields for wordpress posts (or cutom post types), so you can add a ink field for example and the get it from react with frontity.

I think these are the most iportant files for now:
- *frontity.setting.js:* It has the main settings here, you can edit the wordpress api link, add more PostTypes, and choose the theme
- *packages/in-theme/:* This is the folder fo the theme i created
- *packages/in-theme/src/Root.js:* Here we can redirect the users depending on the route
- *packages/in-theme/src/pages and packages/in-theme/src/components:* These two have the same function we already know 

I used these videos, they are in spanish but I hope they can help you ❤️
- [Basic cours of Frontity](https://www.youtube.com/playlist?list=PLj8OTTEJGbdbremvIIKhy5N6FX1W8EPmN)
- [More advanced course of Frontity](https://www.youtube.com/playlist?list=PLj8OTTEJGbda-7GOemB-h39Nkikpsn4NB)

***Enjoy coding!*** 💻

## Frontity

### Launch a development server

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The site will automatically reload if you make changes inside the `packages` folder. You will see the build errors in the console.

> Have a look at our [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

### Create your custom theme

```
npx frontity create-package your-custom-theme
```

Use the command `npx frontity create-package` to create a new package that can be set in your `frontity.settings.js` as your theme

> Have a look at our blog post [How to Create a React WordPress Theme in 30 Minutes](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/)

### Create a production-ready build

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

> Get more info about [Frontity's architecture](https://docs.frontity.org/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Now or Netlify.

> Get more info about [how to deploy](https://docs.frontity.org/deployment) a Frontity project

---

### » Frontity Channels 🌎

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

- 📖 **[Docs](https://docs.frontity.org)**: this is the place to learn how to build amazing sites with Frontity.
- 👨‍👩‍👧‍👦 **[Community](https://community.frontity.org/)**: use our forum to [ask any questions](https://community.frontity.org/c/dev-talk-questions), feedback and meet great people. This is your place too to share [what are you building with Frontity](https://community.frontity.org/c/showcases)!
- 🐞 **[GitHub](https://github.com/frontity/frontity)**: we use GitHub for bugs and pull requests. Questions are answered in the [community forum](https://community.frontity.org/)!
- 🗣 **Social media**: a more informal place to interact with Frontity users, reach out to us on [Twitter](https://twitter.com/frontity).
- 💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://frontity.org/)

### » Get involved 🤗

Got questions or feedback about Frontity? We'd love to hear from you. Use our [community forum](https://community.frontity.org) yo ! ❤️

Frontity also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help → [How to contribute?](https://docs.frontity.org/contributing/how-to-contribute)

