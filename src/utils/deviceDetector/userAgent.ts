import { AgentInfo } from "./types";

export function userAgent(): AgentInfo {
    const nextAgent = navigator.userAgent.toLowerCase();
    const isMobile = !!/mobi/g.exec(nextAgent);

    console.log(
        'agent:', nextAgent,
        'Chrome', nextAgent.indexOf("chrome") > -1,
        'IE',  nextAgent.indexOf("msie") > -1,
        'FireFox', nextAgent.indexOf("firefox") > -1,
        'Safari', nextAgent.indexOf("safari") > -1,
        'Opera', nextAgent.indexOf("opr" || "opera") > -1
        );
    
    
    // const browser = {
    //     name: "unknown",
    //     version: "-1",
    //     majorVersion: -1,
    //     chromium: false,
    //     chromiumVersion: "-1",
    //     webkit: false,
    //     webkitVersion: "-1",
    // };
    // const os = {
    //     name: "unknown",
    //     version: "-1",
    //     majorVersion: -1,
    // };
    // const {
    //     preset: browserPreset,
    //     version: browserVersion,
    // } = findPreset(BROWSER_PRESETS, nextAgent);

    // const {
    //     preset: osPreset,
    //     version: osVersion,
    // } = findPreset(OS_PRESETS, nextAgent);

    // const chromiumPreset = findPreset(CHROMIUM_PRESETS, nextAgent);

    // browser.chromium = !!chromiumPreset.preset;
    // browser.chromiumVersion = chromiumPreset.version;
    // if (!browser.chromium) {
    //     const webkitPreset = findPreset(WEBKIT_PRESETS, nextAgent);

    //     browser.webkit = !!webkitPreset.preset;
    //     browser.webkitVersion = webkitPreset.version;
    // }

    // if (osPreset) {
    //     os.name = osPreset.id;
    //     os.version = osVersion;
    //     os.majorVersion = parseInt(osVersion, 10);
    // }
    // if (browserPreset) {
    //     browser.name = browserPreset.id;
    //     browser.version = browserVersion;

    //     if (browser.webview && os.name === "ios" && browser.name !== "safari") {
    //         browser.webview = false;
    //     }
    // }
    // browser.majorVersion = parseInt(browser.version, 10);

    return {
        isMobile,
        isHints: false,
    };
}