import React from 'react'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <div className='bg-[gold] flex items-center justify-center h-[20vh]'>
        <p>&copy; univelcity {new Date().getFullYear()}</p>
        <SocialIcons />
    </div>
  )
}
