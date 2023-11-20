import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[gold] flex items-center justify-center h-[20vh]'>
        <p>&copy; univelcity {new Date().getFullYear()}</p>
    </div>
  )
}
