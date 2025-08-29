const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimizer
  },
  basePath: isProd ? "/spoonful-of-chaos" : "",
  assetPrefix: isProd ? "/spoonful-of-chaos/" : "",
};
