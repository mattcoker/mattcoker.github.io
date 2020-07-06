var Color = require('color');

const backBase = Color("#1c1f25");
const frontBase = Color('#a7aeb8');
const leadBase = Color("#556e94");
const leadTextBase = Color('#f7f7f7');
const lineBase = Color('#23272e');
const skill1Base = Color('#e14594');
const skill2Base = Color('#7045af');
const skill3Base = Color('#2b3595');

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
        theme: {
          'back': backBase.hex(),
          'front': frontBase.hex(),
          'lead': {
            'default': leadBase.hex(),
            'back-25': leadBase.mix(backBase, .25).hex(),
            'back-50': leadBase.mix(backBase, .50).hex(),
            'back-75': leadBase.mix(backBase, .75).hex(),
          },
          'lead-text': leadTextBase.hex(),
          'line': lineBase.hex(),
          'skill-1': skill1Base.hex(),
          'skill-2': skill2Base.hex(),
          'skill-3': skill3Base.hex(),
        }
      },
    },
  ],
}
