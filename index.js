const path = require('path');
const Liftoff = require('liftoff');
const argv = require('minimist')(process.argv.slice(2));
const webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');

webpack.HtmlWebpackPlugin = require('./plugins/html-webpack-plugin');

webpack.preset = {
  cssRule: require('./config/css'),
  babelRule: require('./config/babel')
}

Object.defineProperty(global, 'webpack', {
  enumerable: true,
  writable: false,
  value: webpack
});

const cli = new Liftoff({
  name: 'wp', // 命令名字
  processTitle: 'wp',
  moduleName: 'wp',
  configName: 'wp-conf',
  // only js supported!
  extensions: {
    '.js': null
  }
});

const needServer = argv.s || argv.server;

cli.launch({
  cwd: argv.r || argv.root,
  configPath: argv.f || argv.file
}, (env)=>{

  let config = require('./config/dev');

  if(env.configPath){
    const userOpts = require(env.configPath);
    // for (let k in userOpts){
    //   if(k === 'module'){
    //     config.module.rules.concat(userOpts[k].rules);
    //   }else{
    //     config[k] = userOpts[k];
    //   }
    // }
    config = Object.assign({}, config, userOpts);
  }

  if(needServer){
    const options = {
      contentBase: config.output.path || __dirname,
      inline: true,
      hot: true,
      compress: true,
      host: '0.0.0.0',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    };

    let devplus = false;
    config.plugins = config.plugins || [];
    config.plugins.every((plugin)=>{
      if(plugin instanceof webpack.HotModuleReplacementPlugin){
        devplus = true;
        return false;
      }
      return true;
    });
    if(!devplus){
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    WebpackDevServer.addDevServerEntrypoints(config, options);
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, options);
    server.listen(9000, "0.0.0.0", function() {
    	console.log("Starting server on http://0.0.0.0:9000");
    });
  }else{
    const compiler = webpack(config);
    compiler.run((err, stats) => {
      // ...
    });
  }
})
