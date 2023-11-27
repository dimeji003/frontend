import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import Link from 'next/link';

export default function SocialIcons() {
  return (
    <div className='flex ml-7 gap-2'>
        <Link href='https://www.linkedin.com/in/oladimeji-lawal-33833227a/' target='_blank'>
        <BsLinkedin />
        
        </Link>
        <Link href='https://github.com/dimeji003' target='_blank'>
        <BsGithub />
        </Link>
        <Link href='https://twitter.com/dxmejii' target='_blank'>
        <FaTwitter />
        </Link>
        <Link href='mailto:oladimejilawal14@gmail.com'>
        <BiLogoGmail />
        </Link>
        <Link href='+2348163901595'>
        <MdAddCall />
        </Link>
    </div>
  )
}
