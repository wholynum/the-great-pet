import {IOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function devServer(options: IOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
    }
}

