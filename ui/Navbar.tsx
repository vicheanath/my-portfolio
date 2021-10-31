import { useEffect, useRef, useState, Fragment, MutableRefObject } from 'react'
import { useRouter } from 'next/router'
import { gsap, TweenMax } from 'gsap'
import { useMousePosition } from '../libs/useMousePosition'
import { isServer } from '../libs/isServer'
import Link from 'next/link'
const Navbar = () => {
    let router = useRouter()
    let loadingRef: MutableRefObject<HTMLElement | null> = useRef(null)
    let bigCircle = useRef<HTMLDivElement | null>(null)
    let smallCircle = useRef<HTMLDivElement | null>(null)
    let smallPlus = useRef<HTMLDivElement | null>(null)
    let smallPlusArea = useRef<HTMLDivElement | null>(null)
    const { x, y } = useMousePosition()

    // Hover an element
    const onMouseHover = () => {
        gsap.to('#bigCircle', {
            attr: {
                r: 25,
            }
        })
    }
    const onMouseHoverOut = () => {
        gsap.to('#bigCircle', {
            attr: {
                r: 18
            }
        })
    }

    // Hover img an element
    const onMouseHoverArea = () => {
        gsap.to(bigCircle, .3, {
            fill: '#212121',
            mixBlendMode: 'normal'
        })
        gsap.to(smallCircle, .3, {
            fill: 'transparent'
        })
        gsap.to(smallPlusArea, 0.3, {
            stroke: '#DEDEDE'
        })
    }
    const onMouseHoverAreaOut = () => {
        gsap.to(bigCircle, 0.3, {
            fill: 'transparent',
            mixBlendMode: 'difference'
        })
        gsap.to(smallCircle, 0.3, {
            fill: '#DEDEDE'
        })
        gsap.to(smallPlusArea, 0.3, {
            stroke: 'transparent'
        })
    }

    useEffect(() => {
        const hoverable: NodeListOf<Element> = document.querySelectorAll('.hoverable')
        const hoverablesArea: NodeListOf<Element> = document.querySelectorAll('.hoverableArea');
        hoverable.forEach(item => {
            item.addEventListener('mouseenter', onMouseHover);
            item.addEventListener('mouseleave', onMouseHoverOut)
        })
        hoverablesArea.forEach(item => {
            item.addEventListener('mouseenter', onMouseHoverArea);
            item.addEventListener('mouseleave', onMouseHoverAreaOut)
        })

        gsap.to(bigCircle, .4, {
            x: x,
            y: y
        })
        gsap.to(smallCircle, .1, {
            x: x,
            y: y
        })
        gsap.to(smallPlus, .1, {
            x: x,
            y: y
        })
    }, [x, y])
 
    return (
        <Fragment>
            <header className="header wrapper">
                <div className="header__logo">
                    <Link href="/">
                        <a className="link">Home</a>
                    </Link>
                </div>
                <div className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <Link href="/aboutme">
                                <a className="hoverable">About Me</a>
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href="/playground">
                                <a className="hoverable">Playground</a>
                            </Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href="/playground">
                                <a className="hoverable">Connect</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
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
                        ref={el => smallPlusArea = el}
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
        </Fragment>
    )
}
export default Navbar