import {createContext, FC, PropsWithChildren, useContext, useEffect, useState} from "react";

import { debounce } from "../utils";

type BreakPointsType = Record<string, number>;

const defaultComponents: BreakPointsType = {};

const ViewportContext = createContext(defaultComponents);

const ViewportProvider: FC<PropsWithChildren<{breakpoints: BreakPointsType}>> =
    ({ children, breakpoints}) => {

    return <ViewportContext.Provider value={breakpoints}>{children}</ViewportContext.Provider>
}


const useViewport = () => {
    const breakpoints = useContext(ViewportContext);

    const [width, setWidth] = useState(window.innerWidth);

    const lessThan = (query: string) => {
        return breakpoints[query] > width;
    };

    const greaterThan = (query: string) => {
        return breakpoints[query] < width;
    };

    const betweenBreakpoints = (startPoint: string, endPoint: string) => {
        return breakpoints[startPoint] < width && breakpoints[endPoint] > width;
    };

    useEffect(() => {
        const resizeHandler = debounce( () => setWidth(window.innerWidth), 100);


        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return {
        lessThan,

        greaterThan,

        betweenBreakpoints
    }
};

export { useViewport, ViewportProvider }