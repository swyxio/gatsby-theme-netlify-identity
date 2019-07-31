# Gatsby Theme Netlify Identity

This repo is a yarn workspace.

## How to Use In Your Gatsby App

this theme adds `gatsby-plugin-netlity-identity` for you and ships some nice components!

```bash
yarn add gatsby-theme-netlify-identity
```

And add it to your config:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    // You can should only have one instance of this plugin
    {
      resolve: `gatsby-theme-netlify-identity`,
      options: {
        url: `https://your-netlify-identity-instance-here.netlify.com/`, // required!
      },
    },
  ],
}
```

## Local Development

```sh
yarn workspace demo develop
```

The demo will start at http://localhost:8000

**NOTE:** If you’re new to Yarn workspaces, check out [this post](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/) for details.
