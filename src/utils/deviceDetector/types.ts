export interface UADataValues {
    platform: string;
    platformVersion: string;
    architecture: string;
    model: string;
    uaFullVersion: string;
}

export interface AgentBrowserInfo {
    name: string;
    version: string;
}
export interface AgentInfo {
    isMobile: boolean;
    isDesktop: boolean;
    browser: AgentBrowserInfo
}

export interface NavigatorUABrandVersion {
    brand: string;
    version: string;
}

export interface PresetInfo {
    test: string;
    id: string;
}

export interface PresetResult {
    preset: PresetInfo | null;
    version: string;
}