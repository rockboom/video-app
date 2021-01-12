const webpack = require('webpack');
const HtmlWebapckPlugin  = require('html-webpack-plugin');
const path = require('path');
// process.env.NODE_ENV == 'production' ? 'production':'development';
module.exports = {
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development', // 默认是开发模块
    entry:'./src/index.tsx',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    devtool:'source-map',
    devServer:{
        // 配合webpack.HotModuleReplacementPlugin 插件使用
        hot: true,
        // 起服务时已dist文件夹为地址
        contentBase:path.join(__dirname,'dist'),
        historyApiFallback:{ // browserHistory，刷新会报 404 因为找不到后台路径，会自动重定向到根目录下 index.html
            index: 'index.html'
        }
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src'),
            '~':path.resolve(__dirname,'node_modules')
        },
        // 没有指定扩展名时 当加载文件的时候 会自动寻找哪些扩展名
        extensions:['.ts','.tsx','.js','.json']
    },
    module:{
        rules:[
            {
                test:/(j|t)sx?$/,
                loader:'ts-loader',
                exclude:/node_modules/
            },
            {
                enforce:'pre',
                test: /(j|t)sx?$/,
                loader: 'source-map-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebapckPlugin({
            template:'./src/index.html'
        }),
        // 热更新插件 和 devServer.hot = true 配合使用
        new webpack.HotModuleReplacementPlugin()
    ]
}