import Image from 'next/image'
import React from 'react'
import pic from '../images/book2.jpg'
import styles from './main.module.css'
import Link from 'next/link'

export default function Main() {
  return (
    <div className={styles.main}>
      <div className='w-[40%] m-auto'>
        <h1 className={`text-white text-7xl text-center pt-24 ${styles.header}`}>WELCOME <br />TO <br /> WAKIL LIBRARY</h1>
        <p className='text-white text-2xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <Link href='/course'>
        <div className='text-center pt-10'>
        <button className='bg-yellow-300 h-14 w-36 rounded-xl text-xl '>GET STARTED</button>
        </div>
        </Link>
      </div>
        
    </div>
  )
}
