const path = require(`path`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `public`)
    },
    devServer: {
        contentBase: path.join(__dirname, `public`),
        open: false,
        inline: false,
        port: 1337,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`
                },
            },
            {
                // css
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css",
        })
    ],
    resolve: {
        extensions: [`.js`, `json`]
    },
    devtool: `source-map`,

};