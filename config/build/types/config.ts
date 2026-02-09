
export type IMode = 'production' | 'development';

export interface IPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IEnv {
    mode: IMode;
    port: number;
}

export interface IOptions {
    mode: IMode;
    paths: IPaths;
    isDev: boolean;
    port: number;
}
