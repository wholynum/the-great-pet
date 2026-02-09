import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {resolvers} from "./resolvers";
import {loaders} from "./loaders";
import {plugins} from "./plugins";


export function webpackConfig(options: IBuildOptions): webpack.Configuration {
    const {paths, mode} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js]',
            path: paths.build,
            clean: true,
        },
        plugins: plugins(options),
        module: {
            rules: loaders()
        },
        resolve: resolvers()
    }
}