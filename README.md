# wp-react-app

dev tool



Example


```js
const path = require('path');

module.exports = {
  entry: {
    'vendor': ['react', 'react-dom', 'prop-types', 'rc-mounter', 'classnames', 'dom7/dist/dom7'],
    'f7-modal': './src/index.js',
    'example': './example/index.js'
  },

  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      webpack.preset.cssRule({modules: true, sourceMap: true}),
      webpack.preset.babelRule()
    ]
  },
  // externals: ['react', 'react-dom', 'prop-types', 'rc-mounter', 'classnames', 'dom7'],
  plugins:[
    new webpack.HtmlWebpackPlugin({
      title: 'Example',
      chunks: [ 'vendor', 'f7-modal', 'example']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['f7-modal', 'vendor'],
      // (给 chunk 一个不同的名字)
      minChunks: Infinity,
      // (随着 entry chunk 越来越多，
      // 这个配置保证没其它的模块会打包进 vendor chunk)
    }),
    new webpack.CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
}

```
