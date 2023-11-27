import Link from 'next/link'
import React from 'react'


export default function Course() {
  return (
    <nav>
      <ul className='flex justify-around h-11 bg-yellow-500 text-white text-2xl'>
        <Link href='/course/drama'>
        <li>Drama</li>
        </Link>
        <Link href='/course/prose'>
        <li>Prose</li>
        </Link>
        <Link href='/course/novel'>
        <li>Novel</li>
        </Link>
        <Link href='/course'> 
        <li>All</li>
        </Link>
        
      </ul>
    </nav>
  )
}
