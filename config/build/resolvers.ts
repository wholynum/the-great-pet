import {ResolveOptions} from "webpack";

export function resolvers(): ResolveOptions {
    return {
        extensions: ['.ts', '.tsx', '.js'],
    }
}