const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", // read about source maps and devtool more
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Hanu"),
    }),
  ],
};
