'use client'
import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"],weight: '700', });
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'

export default function Navbar() {
const pathname = usePathname()

const [showSearch,setShowSearch]=useState(false)
const OnClick = ()=>{
    showSearch === false ? setShowSearch(true):setShowSearch(false)

}

  return (
    <div className=''>
        <div className="bg-creamywhite p-2 m-4 rounded-full flex items-center justify-between pl-8 pr-8 drop-shadow-md">
            <div className="">
                <h1 className={`text-[#F7931A] ${poppins.className} text-lg tracking-widest`}><Link href="/">Techie.io</Link></h1>
            </div>

            <div className={`space-x-3 font-medium text-secondarycolor hidden md:block`}>
                <Link href="/" className='hover:text-accentcolor'>Home</Link>
                <Link href="/blog" className='hover:text-accentcolor'>Blog</Link>
                <Link href="/about" className='hover:text-accentcolor'>About</Link>
                <Link href="/dashboard" className='hover:text-accentcolor'>Dashboard</Link>

            </div>

            <div className="hidden md:block">
                <div className="flex items-center justify-center bg-primarycolor rounded-full">
                    <input type="text" className='bg-primarycolor rounded-full p-2 w-44 focus:outline-none 'placeholder='search.......' />
                    <FiSearch className='text-white mr-2 text-xl hover:text-secondarycolor'/>
                </div>
                

            </div>
            

            <div className="hidden md:block">
                <Button className='shadow-md' variant="accent"><Link href={pathname == "/auth/login"?"/auth/register":"/auth/login"}>{pathname == "/auth/login"?"sign up":"sign in"}</Link></Button>

            </div>
            <div className="md:hidden flex items-center justify-center">
               <FiSearch onClick={OnClick} className={`text-secondarycolor mr-2 text-2xl hover:text-accentcolor font-extrabold ${showSearch?'text-accentcolor':''}`}/>
               <GiHamburgerMenu className='text-2xl hover:text-accentcolor'/>
            </div>
            

        </div>

              <div className={cn(
                "ml-4 mr-4 -translate-y-[40rem] ease-in-out md:hidden ",
                `${showSearch == true?'-translate-y-[0rem] ease-in-out':'ease-in-out'}`
              )}>
                <div className="flex items-center justify-center bg-white rounded-full mb-0">
                    <input type="text" className='bg-white rounded-full  p-2 w-full focus:outline-none 'placeholder='search for something.......' />
                    <FiSearch className='text-secondarycolor mr-2 text-2xl hover:text-secondarycolor font-extrabold'/>
                </div>
                
            </div>
    </div>
  )
}
