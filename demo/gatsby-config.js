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
  ],
}
