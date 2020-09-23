const path = require('path')
module.exports = {
    entry: './src/assets/icons/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
                loader: 'babel-loader',
                //排除node_modules 目录下的文件
                exclude: /node_modules/,
            },
            // 处理vue
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [path.resolve('src/assets/icons')],
                options: {
                    symbolId: 'icon-[name]',
                },
            },
            // 处理字体
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
        ],
    },
    plugins: [],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../icon'),
    },
    mode: 'production',
}
