import { gsap, TweenMax } from 'gsap'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <h1>Hello</h1>
        <Link href={'/about'}>Hover me</Link>
        <Image layout='responsive' width={200} height={110} src="https://res.cloudinary.com/dn32la6ny/image/upload/v1584712777/photo-1520930528075-4ea5ead759f5.jpg" alt="image" className="hoverableArea" />
      </div>
    </>
  )
}

export default Home
