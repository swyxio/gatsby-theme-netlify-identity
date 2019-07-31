module.exports = ({ url }) => ({
  // // not needed for now
  // siteMetadata: {
  //   title: "Gatsby Theme Jam Example Submission",
  // },
  plugins: [
    // You can should only have one instance of this plugin
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url,
      },
    },
  ],
})
