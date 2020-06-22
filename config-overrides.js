<<<<<<< HEAD
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require('customize-cra')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
=======
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
// 去除debugger和console
const myPlugin = [
  new UglifyJsPlugin({
    uglifyOptions: {
      warnings: false,
      compress: {
        drop_debugger: true,
        drop_console: true,
      },
    },
  }),
<<<<<<< HEAD
]
=======
];

>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
module.exports = function override(config) {
  // do stuff with the webpack config...
  return config
}
module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({ '@': path.resolve(__dirname, 'src') }),
<<<<<<< HEAD
  (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [...config.plugins, ...myPlugin]
    }

    return config
  },
  // 装饰器语法支持
  addDecoratorsLegacy(),
=======
  config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [...config.plugins, ...myPlugin];
    }

    return config;
  }
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
)
