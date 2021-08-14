import { NavigatorUABrandVersion } from "./types";
export function getUserAgent(): string {
    let userAgent = navigator.userAgent;
    if (typeof userAgent === "undefined") {
        if (typeof navigator === "undefined" || !navigator) {
            return "";
        }

        userAgent = navigator.userAgent || "";
    }
    return userAgent!.toLowerCase();
}

export function some<T>(arr: T[], callback: (value: T, index: number) => any): boolean {
    const length = arr.length;

    for (let i = 0; i < length; ++i) {
        if (callback(arr[i], i)) {
            return true;
        }
    }

    return false;
}

export function getBrowserVender(brand?: NavigatorUABrandVersion) {
    let broswerEnv = { vender: 'unknown', version: 0};
    if (brand) {
        if (brand.brand === 'Chromium') { 
            broswerEnv.vender = 'chrom';
            broswerEnv.version = parseInt(brand.version)
            return broswerEnv
        }
    } else {
        
    }
}