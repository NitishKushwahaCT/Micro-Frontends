const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.jsx",
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
          TaskContext: path.resolve(__dirname, "../shell-app/src/TaskContext.jsx"),
        },
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFedrationPlugin({
      name: "shell-app",
      filename: "remoteEntry.js",
      remotes: {
        mf1: "mf1@http://localhost:3001/remoteEntry.js",
        mf2: "mf2@http://localhost:3002/remoteEntry.js",
      },

      shared: {
        "react":{
          singleton: true,
        }
      }
    })
  ],
};
