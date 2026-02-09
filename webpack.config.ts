import webpack from 'webpack';
import {webpackConfig} from "./config/build/webpackConfig";
import {IEnv, IPaths} from "./config/build/types/config";
import path from "path";


export default (env: IEnv) => {


    const paths: IPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = webpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config;
};
