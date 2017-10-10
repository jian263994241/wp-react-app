const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

class HtmlPlugin extends HtmlWebpackPlugin {
  constructor(conf){
    conf.template = conf.template || path.join(__dirname, '/my-index.ejs');
    super(conf);
  }
}


module.exports = HtmlPlugin;
