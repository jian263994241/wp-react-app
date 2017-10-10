
const globalConf = require('./global');
const cssRules = require('./css');

const jsRules = require('./babel');

module.exports = Object.assign(globalConf, {
  module: {
    rules: [
      cssRules({sourceMap: true, modules: true}),
      jsRules()
    ]
  }
})
