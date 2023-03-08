const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['index'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});


module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: "js/[contenthash].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    minimize:true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line

      new TerserPlugin({
        test: /\.js(\?.*)?$/i, // you should add this property
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info'], // Delete console
          },
        },
      }),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/pages/index.html',
        filename: 'index.html'
    }),
  ]
});
