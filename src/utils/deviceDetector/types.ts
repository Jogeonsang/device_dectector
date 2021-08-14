export interface UADataValues {
    platform: string;
    platformVersion: string;
    architecture: string;
    model: string;
    uaFullVersion: string;
}
export interface AgentVersionInfo {
    name: string;
    version: string;
    majorVersion: number;
}


export interface AgentOSInfo extends AgentVersionInfo {}

export interface AgentBrowserInfo extends AgentVersionInfo {
    webkit: boolean;
    webkitVersion: string;
    chromium: boolean;
    chromiumVersion: string;
    webview: boolean;
}

export interface AgentInfo {
    isMobile: boolean;
    isHints: boolean;
}

export interface NavigatorUABrandVersion {
    brand: string;
    version: string;
}

export interface NavigatorUAData {
    brands?: NavigatorUABrandVersion[];
    uaList?: NavigatorUABrandVersion[];
    mobile: boolean;
    getHighEntropyValues<T extends keyof UADataValues>(hints: T[]): Promise<{ [key in T]: UADataValues[T] }>;
}