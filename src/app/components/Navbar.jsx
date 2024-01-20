"use client"
import Link from 'next/link'
import { GiBookshelf } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { MdCancel } from "react-icons/md";
import styles from './main.module.css'


export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function mobileNav(){
    setShowNav(!showNav)

  }

  

  function handleNav(){
    setShowNav(false)
  }
  return (
    <nav className='flex flex-row bg-transparent items-center justify-between h-16 fixed'>
        <ul className={`flex md:gap-[500px] md:justify-center md:flex-row md:text-slate-800 md:h-[100px] items-center `}>
          <div className='flex flex-row gap-2 items-center md:text-2xl text-lg pl-7 md:w-[550px]'><span><GiBookshelf /></span><p className='w-[100%]'>Wakil Library</p></div>

          <div className={`md:flex md:flex-row flex-col  md:bg-transparents md:gap-12 gap-8 absolute top-0 md:relative w-[100%] md:text-sm md:pr-9 items-center pt-6 ${showNav ? "flex" : "hidden"} ${styles.navbar}`}>
          <MdCancel className='md:hidden cursor-pointer' onClick={mobileNav}/>

            <Link href='/' onClick={handleNav}>
            <li>Home</li>
            </Link>

            <Link href='/about' onClick={handleNav}>
            <li>About</li>
             </Link>

            <Link href='/course' onClick={handleNav}>
            <li>Books</li>
            </Link>
            
            <Link href='contact' onClick={handleNav}>
            <li>Contact</li>
            </Link>

            

          </div>
        </ul>
        <div className='flex flex-row items-center gap-3'>
        <IoSearchSharp className='text-2xl'  />
        <GiHamburgerMenu className='md:hidden cursor-pointer pr-2 text-3xl' onClick={mobileNav}/>

        </div>
        
    </nav>
  )
}
