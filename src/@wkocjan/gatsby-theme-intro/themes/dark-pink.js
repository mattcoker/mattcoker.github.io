var Color = require('color');

const backBase = Color("#1c1f25");
const frontBase = Color('#a7aeb8');
// const leadBase = Color("#556e94");
const leadBase = Color("#FFF00F");
const leadTextBase = Color('#f7f7f7');
const lineBase = Color('#23272e');
const skill1Base = Color('#e14594');
const skill2Base = Color('#7045af');
const skill3Base = Color('#2b3595');

module.exports = {
  'back': backBase.hex(),
  'front': frontBase.hex(),
  'lead': leadBase.hex(),
  // {
  //   'default': leadBase.hex(),
  //   'back-25': leadBase.mix(backBase, .25).hex(),
  //   'back-50': leadBase.mix(backBase, .50).hex(),
  //   'back-75': leadBase.mix(backBase, .75).hex(),
  // },
  'lead-text': leadTextBase.hex(),
  'line': lineBase.hex(),
  'skill-1': skill1Base.hex(),
  'skill-2': skill2Base.hex(),
  'skill-3': skill3Base.hex(),
  'profile-gradient-1': leadBase.mix(backBase, .25).hex(),
  'profile-gradient-2': leadBase.mix(backBase, .50).hex(),
  'profile-gradient-3': leadBase.mix(backBase, .75).hex(),
};