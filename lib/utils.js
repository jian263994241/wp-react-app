

function checkPlugins(config, plugin){
  const plugins = config.plugins || [];
  let hasPlus = false;
  plugins.every((p)=>{
    if(p instanceof plugin){
      hasPlus = true;
      return false;
    }
    return true;
  });
  return hasPlus;
}


module.exports = {
  checkPlugins
};
