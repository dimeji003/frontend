
import Link from 'next/link'
import { GiBookshelf } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav>
        <ul className='flex gap-[500px] md:justify-center md:flex-row flex-col bg-[gold] text-slate-800 md:h-[100px] h-screen items-center'>
          <div className='flex flex-row items-center gap-2 text-3xl pl-9'><GiBookshelf /><p>wakil library</p></div>
          <div className='flex flex-row gap-12 text-lg pr-9 items-center'>
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

            <div><IoSearchSharp /></div>

          </div>
        </ul>
    </nav>
  )
}
