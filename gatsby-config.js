/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Blog://👨‍💻.Placeholder',
    shortTitle: 'A blog by Jiarong',
    menus: [
      { url: '', icon: 'list', title: 'Archive' },
      { url: '/tags/', icon: 'tag', title: 'Tags' },
      { url: '/about/', icon: 'person', title: 'About' },
      { url: '/gallery/', icon: 'photo_library', title: 'Gallery' },
    ],
    extraLinks: {
      github: 'https://github.com/Alienover',
    },
  },
  plugins: [
    'gatsby-plugin-flow',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['material icons', 'roboto:300,400,500,700'],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            inlineCodeMarker: '>',
          },
        },
      ],
    },
  ],
}
