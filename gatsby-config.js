require("dotenv").config({ path: "C:\\Users\\kunal\\OneDrive\\Documents\\testdfs\\contentful.env" });
module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // This is the path where the CMS will be available
        manualInit: true, 
        modulePath: `${__dirname}/src/cms.js`, 
      },
    },
  ],
};
console.log('Contentful Space ID:', process.env.CONTENTFUL_SPACE_ID);
console.log('Contentful Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN);