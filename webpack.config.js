const path = require('path')


module.exports = {
  mode: 'development',
  entry: {
    main:'./src/index.js',
    pure:'./src/vanilla.js',
    jquery:'./src/jq.js'
  },
  output:{
    assetModuleFilename: 'img/[hash][ext][query]'
  },
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
};



