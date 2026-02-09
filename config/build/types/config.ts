
export interface IBuildPaths {
    entry: string
    build: string
    html: string
}

export interface IBuildOptions {
    mode: 'development' | 'production'
    paths: IBuildPaths
    isDev: boolean
}