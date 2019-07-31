module.exports = {
  // // not needed for now
  // siteMetadata: {
  //   title: "Gatsby Theme Jam Example Submission",
  // },
  plugins: [
    // You can should only have one instance of this plugin
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://your-identity-instance-here.netlify.com/`, // required!
      },
    },
  ],
}
