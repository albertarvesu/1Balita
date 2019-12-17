// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withOffline = require('next-offline')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css')

module.exports = withCSS(
  withOffline({
    workboxOpts: {
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: 'CacheFirst'
        }
      ]
    },
    env: {
      GOOGLE_ANALYTICS_CODE: process.env.GOOGLE_ANALYTICS_CODE
    },
    webpack(config) {
      config.resolve.alias.client = './client'
      config.resolve.alias.server = './server'
      config.resolve.alias.styles = './styles'
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
      return config
    }
  })
)
