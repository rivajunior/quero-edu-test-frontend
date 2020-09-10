const isProduction = process.env.NODE_ENV === 'production'

const CompressionPlugin = isProduction ? require('compression-webpack-plugin') : null
const StyleLintPlugin = require('stylelint-webpack-plugin')

const plugins = [
  new StyleLintPlugin({
    files: ['**/*.{vue,htm,html,css,scss,sass}'],
  }),
]

if (isProduction) {
  plugins.push(
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 1280,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 1280,
      minRatio: 0.8,
    }),
  )
}

module.exports = {
  lintOnSave: true,
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        localsConvention: 'camelCaseOnly',
      },
      scss: {
        additionalData: `
          @import "@/styles/variables";
          @import "@/styles/functions";
          @import "@/styles/mixins";
        `,
      },
    },
    sourceMap: !isProduction,
  },
  configureWebpack: {
    plugins,
  },
}
