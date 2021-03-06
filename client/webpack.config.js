const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : {
        app : "./src/App.js"
    },
    output :{
        filename : "build/bundle.js",
        sourceMapFileName : "build/bundle.map"
    },
    devtool : '#source-map',
    module : {
        loaders: [
            {
                test : /\.jsx?$/,
                exclude : /(node_modules | bower_components)/,
                loader : 'babel',
                query : {
                    presets : ['react','es2015']
                }
            }
        ]
    }

}