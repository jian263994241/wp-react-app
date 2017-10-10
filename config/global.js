const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'babel-runtime': path.dirname(require.resolve('babel-runtime/core-js')),
      'webpack-dev-server/client': require.resolve('webpack-dev-server/client'),
      'webpack/hot/dev-server': require.resolve('webpack/hot/dev-server'),
      'webpack/hot/only-dev-server': require.resolve('webpack/hot/only-dev-server'),
    },
    extensions: [ '.js', '.json', '.jsx', '.css', '.less', ],
    modules: ["node_modules"]
  },
  resolveLoader: {
      moduleExtensions: ['-loader'],
      modules: [ path.resolve(require.resolve('webpack'), '../../../'), 'node_modules']
  },
  devtool: 'source-map'
}
