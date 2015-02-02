var webpack = require('webpack');

module.exports = {
    entry: "./todos.js",
    output: {
        path: './build',
        publicPath: 'http://yoururl.com/', // This is used to generate URLs
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        moduleDirectories: ['node_modules']
    }
};

/*

 var _ = require('underscore');
 var webpack = require('webpack');
 var config = require('./gulp/config');
 var routes = require('./gulp/utils/routes');
 var path = require('path');

 var entryKeys = _.pluck(routes, 'name');
 var entryValues = _.map(routes, function(route) {
 return ['./src', route.entries.js].join('/');
 });

 module.exports = {
 entry: _.object(entryKeys, entryValues),
 output: {
 path: config.routes.dest,
 filename: config.prefix + '[name].bundle.js'
 },
 plugins: [
 new webpack.ProvidePlugin({
 jQuery: 'jquery',
 $: 'jquery'
 })
 ],
 module: {
 loaders: [
 {
 test: /\.hbs$/,
 loader: 'handlebars-loader',
 query: {
 helperDirs: path.join(__dirname, 'src/utils/hbs-helpers')
 }
 }
 ]
 },
 resolve: {
 alias: {
 'marionette'        : 'backbone.marionette',
 'urijs'             : 'URIjs',
 'ip-common'         : 'ip-common/src',
 'jquery-validation' : 'jquery-validation/src',
 'datepicker'        : 'bootstrap-datepicker/js/bootstrap-datepicker'
 },
 modulesDirectories: ['node_modules', 'src']
 }
 };
 */