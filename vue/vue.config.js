module.exports = {
    publicPath: './',
    filenameHashing: false,
    productionSourceMap: false,
    outputDir: '../django/public/',
    assetsDir: 'static',
    configureWebpack: {
        devtool: 'source-map'
    },
    // chainWebpack: config => {

    //     config.optimization
    //         .splitChunks({
    //             cacheGroups: {
    //                 vendor: {
    //                     test: /[\\/]node_modules[\\/]/,
    //                     name: "chunk-vendors",
    //                     chunks: "all",
    //                     priority: 1
    //                 },
    //             },
    //         });

    //     config
    //         .plugin('BundleTracker')
    //         .use(BundleTracker, [{ filename: '../webpack-stats.json' }]);

    //     config.resolve.alias
    //         .set('__STATIC__', 'static')
    // }
}