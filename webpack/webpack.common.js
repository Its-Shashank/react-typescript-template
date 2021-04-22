// babel-loader allows to transpile js files using babel and webpack
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // this allows us to leave the extension while importing a file
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // including css files in react
      },
      {
        test: /\.(?:ico|gif|png|jpeg|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, // for fonts and svgs
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"), // injects the bundle.js file inside index.html file and place that HTML file inside the build folder
    }),
  ],
};
