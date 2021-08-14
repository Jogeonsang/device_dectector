import {isMobile, isDesktop, browser} from './utils/deviceDetector'

const App = () => {
    return (
        <div>
          <div>Device Detector</div>
          <div>isMobile: {`${isMobile}`}</div>
          <div>isDesktop: {`${isDesktop}`}</div>
          <div>browser: {`${browser.name + browser.version}`}</div>
        </div>
    )
};

export default App