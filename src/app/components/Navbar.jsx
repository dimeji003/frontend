"use client"
import Link from 'next/link'
import { GiBookshelf } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { MdCancel } from "react-icons/md";


export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function mobileNav(){
    setShowNav(!showNav)

  }
  return (
    <nav className='flex flex-row bg-[gold] items-center justify-between h-16 md:fixed'>
        <ul className={`flex md:gap-[500px] md:justify-center md:flex-row jmd:ustify-between md:text-slate-800 md:h-[100px] items-center `}>
          <div className='flex flex-row gap-2 items-center md:text-2xl text-lg pl-7 md:w-[550px]'><span><GiBookshelf /></span><p className='w-[100%]'>Wakil Library</p></div>

          <div className={`md:flex md:flex-row flex-col bg-[gold] md:gap-12 gap-8 absolute top-0 md:relative w-[100%] md:text-sm md:pr-9 items-center pt-6 ${showNav ? "flex" : "hidden"}`}>
          <MdCancel className='md:hidden cursor-pointer' onClick={mobileNav}/>

            <Link href='/'>
            <li>Home</li>
            </Link>

            <Link href='/about'>
            <li>About</li>
             </Link>

            <Link href='/course'>
            <li>Books</li>
            </Link>
            
            <Link href='contact'>
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
