// eslint-disable-next-line import/no-extraneous-dependencies
const { withSentryConfig } = require('@sentry/nextjs');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;

module.exports = withSentryConfig(
  module.exports,
  { silent: true },
  { hideSourcemaps: true },
);
