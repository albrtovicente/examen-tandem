// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// module.exports = {
//   siteMetadata: {
//     siteUrl: `https://www.yourdomain.tld`,
//   },
//   plugins: [
    
//     `gatsby-plugin-image`,
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`, // Needed for dynamic images
//   ],
// }

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data`,
        
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `./src/data/`,
    //   },
    // },

    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //    icon: `src/images/gatsby-icon.png`
    //   },
    // },
  ],
}