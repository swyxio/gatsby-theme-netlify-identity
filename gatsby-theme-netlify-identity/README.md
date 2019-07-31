# Gatsby Theme Netlify Identity

This is a Gatsby Theme to add Netlify Identity and Authentication UI to any Gatsby App.

- **Live Demo**: https://gatsby-theme-netlify-identity.netlify.com/
- 2hr Livestream: https://www.youtube.com/watch?v=1zuLpkV0jK0 (creating this theme)

Features:

- ✅Add Netlify Identity Authentication to any Gatsby app
- 🕵🏼‍Shadow only the components you need to add authentication to
- ♿ Accessible modal component that doesn't affect UI
- 💁🏼‍♂️Drop down to use the headless [react-netlify-identity](https://github.com/sw-yx/react-netlify-identity) API if you want to write your own auth UI

<img src="https://user-images.githubusercontent.com/6764957/62212389-9d661c00-b36e-11e9-9afd-ca51e611a05d.gif" width=400 />

See the [live demo](https://gatsby-theme-netlify-identity.netlify.com/)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save gatsby-plugin-netlity-identity
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ["gatsby-plugin-netlity-identity"],
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Gatsby Theme Jam Submission Checklist

To ensure your Theme Jam submission [follows the rules](https://themejam.gatsbyjs.org/rules), use this checklist:

- [x] Use our [accessibility guide][a11y] to ensure your site meets our accessibility standards
- [x] Run a performance audit using [Lighthouse][] and/or [WebPageTest][]
- [x] Set up a live demo using [Netlify][] or [GitHub Pages][]
- [x] Add installation documentation to the README
- [x] Update the `name` field in `package.json`
- [x] Update the `author` field in `package.json`
- [x] Update the `repository` field in `package.json`
- [x] Make sure the theme’s `keywords` in `package.json` include `gatsby`, `gatsby-theme`, and `gatsby-plugin`
- [x] Publish your theme to npm ([docs][npmpublish])
- [x] Submit your theme at https://themejam.gatsbyjs.org

[a11y]: https://gatsbyjs.org/docs/making-your-site-accessible#how-to-improve-accessibility
[lighthouse]: https://developers.google.com/web/tools/lighthouse/
[axe]: https://www.deque.com/axe/
[webpagetest]: http://webpagetest.org/
[netlify]: https://netlify.com
[github pages]: https://pages.github.com/
[npmpublish]: https://docs.npmjs.com/cli/publish
