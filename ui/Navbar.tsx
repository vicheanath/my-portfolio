import React, { Fragment } from 'react'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { gsap, TweenMax } from 'gsap'
import { useMousePosition } from '../libs/useMousePosition'
const Navbar = () => {
    const router = useRouter()
    const [loading, setLoading] = React.useState<boolean>(false)
    let loadingRef = useRef<HTMLElement | null>(null)


    let bigCircle = useRef<HTMLDivElement | null>(null)
    let smallCircle = useRef<HTMLDivElement | null>(null)
    let smallPlus = useRef<HTMLDivElement | null>(null)

    const { x, y } = useMousePosition()

    useEffect(() => {
        TweenMax.to(bigCircle, .4, {
            x: x,
            y: y
        })
        TweenMax.to(smallCircle, .1, {
            x: x,
            y: y
        })
        TweenMax.to(smallPlus, .1, {
            x: x,
            y: y
        })


    }, [x, y])
    return (
        <Fragment>
            <div className="header">
                This is header
            </div>
            <div className="cursor" >
                <div className="cursor__circle cursor__circle--big " ref={el => bigCircle = el}>
                    <svg height="60" width="60">
                        <circle id="bigCircle" cx="30" cy="30" r="18" strokeWidth="0.8"></circle>
                    </svg>
                </div>

                <div className="cursor_circle cursor__circle--small" ref={el => smallCircle = el}>
                    <svg height="10" width="10">
                        <circle cx="4" cy="4" r="3" strokeWidth="0"></circle>
                    </svg>
                </div>

                <div className="cursor__plus" ref={el => smallPlus = el}>
                    <svg
                        className="cursor__plus--area"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g strokeWidth="1">
                            <path
                                d="M12.5,1.87037037 L12.5,11.4993704 L22.5,11.5 L22.5,12.5 L12.5,12.4993704 L12.5,22.1296296 L11.5,22.1296296 L11.5,12.4993704 L1.5,12.5 L1.5,11.5 L11.5,11.4993704 L11.5,1.87037037 L12.5,1.87037037 Z"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
            {/* <div ref={el => loadingRef = el} className="loading"></div> */}
        </Fragment>

    )
}
export default Navbar