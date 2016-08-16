var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    // 自动刷新页面
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        perLoaders: [
            {
                test: /\.jsx?$/,
                include: APP_PATH,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            /*{
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: APP_PATH
            }*/
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less'],
                //loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                  presets: ['es2015']
                }
            }
        ]
    },
    // 显示你出错代码的位置。
    devtool: 'eval-source-map',
    // 配置webpack-dev-server代理
    devServer: {
        hot: true,
        inline: true,
        //其实很简单的，只要配置这个参数就可以了
        proxy: {
          '/api/*': {
              target: 'http://localhost:5000',
              secure: false
          }
        }
    },
    //配置jshint的选项，支持es6的校验
    jshint: {
        "esnext": true
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: '测试title'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};