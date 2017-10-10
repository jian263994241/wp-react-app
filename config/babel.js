const env = require('babel-preset-env');
const react = require('babel-preset-react');
const stage0 = require('babel-preset-stage-0');

module.exports = function(){

  return {
    test: /\.(js|jsx|es6)$/,
    exclude: /(node_modules|bower_components)/,
    enforce: 'pre',
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              env, {
                targets: {
                  browsers: ["last 2 versions", "safari >= 7",]
                }
              },
            ],
            react,
            stage0,
          ],
          plugins: [
            require.resolve('babel-plugin-transform-decorators-legacy'),
            require.resolve('babel-plugin-transform-runtime'),
            require.resolve('babel-plugin-transform-object-assign'),
            [ require.resolve('babel-plugin-styled-components'), { displayName: false } ],
          ],
        }
      }
    ],
  }
}
