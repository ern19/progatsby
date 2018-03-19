module.exports = {
  siteMetadata: {
    title: 'Bangin Gatsby Site',
    desc: "A new blog"
  },
  plugins: [
            {
              resolve: "gatsby-source-contentful",
              options: {
                spaceId: "wxkqp1pcqh4d",
                accessToken: "0c0762f3ca15230c3e7a0af50efd8bc5390881cc56482cb6c902fa143c54ac7e"
              }
            },
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-styled-components',
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: "src",
                path: `${__dirname}/src/`
              }
            },
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: "img",
                path: `${__dirname}/src/images`
              }
            },
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: "img",
                path: `${__dirname}/static/assets`
              }
            },

            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',],
};
