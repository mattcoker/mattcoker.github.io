var Color = require('color');

const backBase = Color("#1c1f25");
const frontBase = Color('#a7aeb8');
const leadBase = Color("#556e94");
const leadTextBase = Color('#f7f7f7');
const lineBase = Color('#23272e');
const skill1Base = Color('#e14594');
const skill2Base = Color('#7045af');
const skill3Base = Color('#2b3595');

const mixColors = (color1, color2, percentage) => color1.mix(color2, percentage).hex()

module.exports = {
  'back': backBase.hex(),
  'front': frontBase.hex(),
  'lead': {
    'default': leadBase.hex(),
    'back-25': mixColors(leadBase, backBase, .25),
    'back-50': mixColors(leadBase, backBase, .50),
    'back-75': mixColors(leadBase, backBase, .75)
  },
  'lead-text': leadTextBase.hex(),
  'line': lineBase.hex(),
  'skill-1': skill1Base.hex(),
  'skill-2': skill2Base.hex(),
  'skill-3': skill3Base.hex(),
};