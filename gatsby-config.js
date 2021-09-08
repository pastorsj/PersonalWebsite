module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.sampastoriza.com'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-109818478-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
        cookieDomain: 'www.sampastoriza.com',
        variationId: '0',
        enableWebVitalsTracking: true
      }
    }
  ],
  siteMetadata: {
    siteUrl: 'https://sampastoriza.com',
    title: 'Sam Pastoriza',
    titleTemplate: '%s · Personal Website',
    description: 'Avid JS developer, relentless self-improver, trying not to make the same mistake thrice',
    image: '/images/icon.png'
  }
};
