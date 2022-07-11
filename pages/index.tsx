import { gsap, TweenMax, Power3 } from 'gsap'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import { isServer } from '../libs/isServer'
import { TimelineLite, Power2 } from "gsap";

const Home: NextPage = () => {
  let router = useRouter()
  let name = useRef<HTMLDivElement | null>(null)
  let TitleOne = useRef<HTMLDivElement | null>(null)
  let TitleTwo = useRef<HTMLDivElement | null>(null)

  let image = useRef<HTMLDivElement | null>(null);
  let container = useRef<HTMLDivElement | null>(null);
  let imageReveal = useRef<HTMLDivElement | null>(null);
  let tl = new TimelineLite();

  useEffect(() => {
    if (isServer) return
    gsap.from([name, TitleOne, TitleTwo], .8, {
      y: 350,
      opacity: 0,
      ease: Power3.easeOut,
      delay: .2,
      stagger: {
        amount: .2,
      }
    })
  }, [name, TitleOne, TitleTwo])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="wrapper">
        <main className="main">
          <div className="container" ref={el => (container = el)}>
            <div className="profile" ref={el => (image = el)} >
              <Image
                className='hoverableArea'
                src="/image/angkor.jpg"
                alt="logo"
                width={900}
                height={500}
                layout="responsive" 
                objectFit="cover"
                /> 
            </div>
          </div>
          <div className="main__txt-wrap">
            <h4 className="name">
              <span ref={el => name = el} className="wrap-hidden">Vichea Nath</span>
            </h4>
            <h1>
              <span ref={el => TitleOne = el} className="wrap-hidden">
                Software Engineer
              </span>
            </h1>
            <h1 className="ux-ui">
              <span ref={el => TitleTwo = el} className="wrap-hidden">
                UX/UI Developer
              </span>
            </h1>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
