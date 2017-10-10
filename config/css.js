

module.exports = function({modules = false, sourceMap = false}){

  return {
    test: /\.(css|less)$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          minimize: true,
          importLoaders: 1,
          modules,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }, {
        loader: 'less-loader',
        options: {
          sourceMap,
          javascriptEnabled: true
        }
      }
    ]
  }
}
