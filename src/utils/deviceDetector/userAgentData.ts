import { AgentInfo } from "./types";
import { getBrowserVender } from "./utils";

export function userAgentData() {
    /**
     *  상수로 제공될 data
     *  isServer isClient isMobile isDesktop
     * 
     *  BroswerVender
     * getBroswerVender를 이용해 호출
     */
    const userAgentData = navigator.userAgentData;
    const brands = [...(userAgentData.uaList || userAgentData.brands)!];
    const isMobile = userAgentData.mobile || false;
    const isDesktop = userAgentData.mobile || true;
    const browserEnv = getBrowserVender(brands[0])
    
    
    return {
        isMobile,
        isDesktop,
        browserEnv,
    }
}

