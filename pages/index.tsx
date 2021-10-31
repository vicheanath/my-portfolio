import { gsap, TweenMax, Power3 } from 'gsap'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import { isServer } from '../libs/isServer'

const Home: NextPage = () => {
  let router = useRouter()
  let name = useRef<HTMLHeadingElement>(null)
  let TitleOne = useRef<HTMLHeadingElement>(null)
  let TitleTwo = useRef<HTMLHeadingElement>(null)
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
    <div className="wrapper">
      <main className="main">
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
  )
}

export default Home
