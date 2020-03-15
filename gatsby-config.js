/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Hello World',
    menus: [
      { url: '', icon: 'list', title: 'Archive' },
      { url: '/tags/', icon: 'tag', title: 'Tags' },
      { url: '/about/', icon: 'person', title: 'About' },
      { url: '/gallery/', icon: 'photo_library', title: 'Gallery' },
    ],
    extraLinks: {
      github: 'https://github.com/Alienover',
      gatsby: 'https://www.gatsbyjs.org/',
    },
  },
  plugins: [
    'gatsby-plugin-flow',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
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
  ],
}
