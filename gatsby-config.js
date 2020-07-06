module.exports = {
  siteMetadata: {
    description: "Personal page of Matt Coker",
    locale: "en",
    showThemeLogo: false,
    title: "Matt Coker",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro", 
      options: {
        theme: 'dark-pink'
      },
    },
  ],
}
