const CopyPlugin = require('copy-webpack-plugin')

module.exports = {

  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    }
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch-index'),
    config.module
      .rule('vue')
        .use('vue-loader')
          .tap(args => {
            args.compilerOptions.whitespace = 'preserve'
          })
  },
  productionSourceMap: false,
  assetsDir: './assets/',
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'src/assets/img', to: 'assets/img' },
          { from: 'src/assets/logos', to: 'assets/logos' },
          { from: 'src/assets/fonts', to: 'assets/fonts' }
        ],
      }),
    ]
  }
}
