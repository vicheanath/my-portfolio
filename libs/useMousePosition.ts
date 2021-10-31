import { isServer } from './isServer';
import { useEffect, useState } from "react";

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!isServer) {
            const setFromEvent = (e: { clientX: number; clientY: number; }) => setPosition({ x: e.clientX, y: e.clientY });
            window.addEventListener("mousemove", setFromEvent);

            return () => {
                window.removeEventListener("mousemove", setFromEvent);
            };
        }
    }, [position]);

    return position;
};