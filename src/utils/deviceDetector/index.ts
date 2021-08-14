import { AgentInfo } from './types'
import { userAgent } from './userAgent'
import { userAgentData } from './userAgentData'


function agent() {
    console.log(navigator.userAgentData)
    if (navigator.userAgentData === undefined) {
        return userAgent()
    }
    return userAgentData()
}

export const isMobile = agent().isMobile