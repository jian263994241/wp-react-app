

module.exports = function({modules=false, sourceMap=false, hmr=true}){

  return {
    test: /\.(css|less)$/,
    use: [
      {
        loader: 'style-loader',
        options: {hmr, sourceMap}
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap,
          minimize: true,
          importLoaders: 1,
          modules,
          localIdentName: '[hash:base64:6]'
        }
      }, {
        loader : 'postcss-loader',
        options: {
          sourceMap,
          ident: 'postcss',
          plugins: (loader) => [
            require('autoprefixer')()
          ]
        }
      },{
        loader: 'less-loader',
        options: {
          sourceMap,
          javascriptEnabled: true
        }
      }
    ]
  }
}
