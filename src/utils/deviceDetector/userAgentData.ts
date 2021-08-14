import { AgentInfo } from "./types";

export function parseUserAgentData(): AgentInfo {
    /**
     *  상수로 제공될 data
     *  isServer isClient isMobile isDesktop
     * 
     *  BroswerVender
     */
    const agent = navigator.userAgentData;
    const brands = [...(agent.uaList || agent.brands)!];
    const isMobile = agent.mobile;
    const isDesktop = agent.mobile;
    const browser = {name: brands[0].brand, version: brands[0].version}
    
    
    return {
        isMobile,
        isDesktop,
        browser
    }
}

