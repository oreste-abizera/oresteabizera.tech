/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteUrl = "https://oresteabizera.tech"

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Oreste Abizera",
    description:
      "I am a Software Engineer based in Rwanda. I focus on writing some codes everyday to solve many problems. I use React js, Next js and Gatsby for frontend on the web. Node js helps me on backend and React Native for mobile development.",
    author: "@AbizeraOreste",
    keywords: ["Gatsby"],
    twitterUsername: "@AbizeraOreste",
    image: "/defaultBcg.png",
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
