import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {IOptions} from "./types/config";

export function plugins({paths}: IOptions): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}
