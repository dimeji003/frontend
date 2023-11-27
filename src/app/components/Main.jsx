import Image from 'next/image'
import React from 'react'
import pic from '../images/book2.jpg'


export default function Main() {
  return (
    <div>
        <h1 className='text-5xl text-center py-[50px]'>wakil library</h1>
        <section className='grid grid-cols-2'>

        <Image src='/media/photo-1497633762265-9d179a990aa6.webp' alt='books' width={600} height={500}/>
        <Image src={pic} alt= 'books' width={600} height={500}/>
        <Image src='https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={600} height={500}/> 
        </section>
    </div>
  )
}
