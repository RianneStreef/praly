module.exports = {
  siteMetadata: {
    title: `praly`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "H_Xe6wltX5f_mNiE5tU-1V9c6awRV9Mc_Vo4ark7rEE",
      "spaceId": "1h5s0daovjfb"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};