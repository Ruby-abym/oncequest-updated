
const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi" ,"kn","ta","bn"],
    fallback: false,
  },
  trailingSlash: true,
  experimental: {
    largePageDataBytes: 128 * 100000,
  }
};



