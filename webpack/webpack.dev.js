const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map", // read about source maps and devtool more
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Hanu"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
