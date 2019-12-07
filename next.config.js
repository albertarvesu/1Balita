// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  webpack(config) {
    config.resolve.alias.client = './client';
    config.resolve.alias.server = './server';
    config.resolve.alias.styles = './styles';
    config.plugins.push(new ForkTsCheckerWebpackPlugin());
    return config;
  }
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css');
/* Without CSS Modules, with PostCSS */
module.exports = withCSS();
