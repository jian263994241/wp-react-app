const CleanWebpackPlugin = require('clean-webpack-plugin');

class CleanPlugin extends CleanWebpackPlugin {
  constructor(pathsToClean, cleanOptions){

    cleanOptions = cleanOptions || {};
    cleanOptions.root = cleanOptions.root || process.cwd();

    super(pathsToClean, cleanOptions);
  }
}


module.exports = CleanPlugin;
