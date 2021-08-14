import {isMobile} from './utils/deviceDetector'

const App = () => {


    return (
        <div>
            <div>Device Detector</div>
            <div>isMobile: {`${isMobile}`}</div>
        </div>
    )
};

export default App