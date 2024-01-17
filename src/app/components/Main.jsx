import Image from 'next/image'
import React from 'react'
import pic from '../images/book2.jpg'
import styles from './main.module.css'
import Link from 'next/link'
import { Oswald } from 'next/font/google'





export default function Main() {
  return (
    <div className={styles.main}>
      <div className='md:w-[40%] w-[80%] m-auto'>
        <h1 className={`text-white md:text-6xl text-5xl text-center pt-40 md:pt-32 ${styles.header}`}>WELCOME <br />TO <br /> WAKIL LIBRARY</h1>
        <p className='text-white text-xl text-center pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <Link href='/course'>
        <div className='text-center md:pt-10 pt-24'>
        <button className='bg-[gold] h-14 w-48 rounded-xl text-xl '>GET STARTED</button>
        </div>
        </Link>
      </div>
        
    </div>
  )
}
