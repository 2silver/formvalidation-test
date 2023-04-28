const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/js/loader.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: ["web", "es6"],
  stats: { children: true },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "./src"),
    compress: true,
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "index",
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      chunks: ["bundle"],
    }),
  ],

  resolve: {
    extensions: [".js", ".css", ".scss"],
    alias: {
      "@form-validation": path.resolve(
        __dirname,
        "src/js/vendors/@form-validation/cjs"
      ),
    },
  },
};
