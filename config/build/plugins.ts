import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {IBuildOptions} from "./types/config";


export function plugins({paths}: IBuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}