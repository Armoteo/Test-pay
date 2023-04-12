// eslint-disable-next-line import/no-extraneous-dependencies
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'files.stripe.com'],
  },
};

module.exports = nextConfig;
