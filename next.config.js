// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
module.exports = {
//   webpack: (config, { dev }) => {
//     // Perform customizations to config
//     config.plugins.push(
//       new BundleAnalyzerPlugin({
//         analyzerMode: 'disabled',
//         // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
//         generateStatsFile: true,
//         // Will be available at `.next/stats.json`
//         statsFilename: 'stats.json'
//       })
//     )
//     return config
//   }

  privateRuntimeConfig: {
    // Will be available on both server and client
    // staticFolder: '/static',
    baseURL: process.env.BASE_URL
  },

  async redirects() {
    return [
      {
        source: '/categories/:categoryId',
        destination: '/categories/:categoryId'
      },
    ]

  },

}