// * See: https://www.gatsbyjs.org/docs/gatsby-config/
module.exports = {
  siteMetadata: {
    title: "Tyra + Netlify Demo",
  },
  plugins: [
    "gatsby-theme-tyra",
    {
      resolve: `gatsby-theme-netlify-identity`,
      options: {
        url: `https://gatsby-theme-netlify-identity.netlify.com/`, // required! make sure to enable Netlify Identity
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby + Tyra + Netlify Identity`,
        short_name: `Gatsby+Netlify`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        // headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "Link: </rss.xml>; rel=preload",
          "Link: </sitemap.xml>; rel=preload",
          "Link: </manifest.webmanifest>; rel=preload",
          "Link: </index.html>; rel=preload",
        ],
        // mergeSecurityHeaders: true, // boolean to turn off the default security headers
        // mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        // mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        // generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
