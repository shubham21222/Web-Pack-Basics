// Web-Pack :- Webpack is a tool that allows you to modularize and bundle your code, solving the problem of managing dependencies and optimizing file loading. 
//It can handle various file types and has plugins and loaders for additional functionality.

// Entry point of project 
// where we thorough all things after cobining them together 
// its is production mode / dev mode 
// loading style or loading SVG  this called loaders or plugines in webpack  

//Loder:- to simply work into the things while are getting loaded  so before final js is created whatever the configuration you need to do before that like loading 
// css or svg that is being donw with loader
// plugins :-  whatever the more configuraton after the final output js is created that is all done in plugin 

// use or loader:-  use beaucuse bring more consistency and most of the updated module are gonna say use [],singal libery 

// babble the thing is really simple you want to write modern javascript with those arrow functions and everything but still you want to make sure that your file actually or your application loads up nicely in the little bit older browser that doesn't support all these modern and advanced features that you're learning in javascript so for that babel

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
