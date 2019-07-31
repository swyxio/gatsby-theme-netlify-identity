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
  ],
}
