import {ResolveOptions} from "webpack";
import { IOptions } from "./types/config";

export function resolvers(options: IOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {}
    }
}
