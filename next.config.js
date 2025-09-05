/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 本番環境でのみoutput: "export"を有効にする
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });
    return config;
  },
  transpilePackages: ["three"],
};

module.exports = nextConfig;
