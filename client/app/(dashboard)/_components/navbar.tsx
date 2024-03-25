'use client'
import React,{useState,useEffect} from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import Link from 'next/link';
import { LuLayoutDashboard } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import { RiUserSearchFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';

export default function Navbar({NavbarState}:any) {
  const pathname = usePathname();
  const [getPathname,setPathname] = useState("")
  useEffect(()=>{
    setPathname(pathname)
  },[pathname])

  
  return (
    <div className={`transition ease-linear ${NavbarState ? `translate-x-0`:`-translate-x-full`} absolute md:static z-20 md:translate-x-0 mt-5`}>
        <div className="bg-creamywhite w-[200px] h-screen rounded-md pt-10 pr-10">
          <nav className='space-y-4'>
            <div className="">
              <Link href="/profile" >
              <Button size="lg" className={`${pathname === "/profile"?'bg-accentcolor':''}`} variant='dashboard'><FaRegUser className='mr-4 w-6 h-6'/>Profile</Button>

              </Link>
              
            </div>
            <div className="">
              <Link href="/posts">
              <Button size="lg" className={`${pathname === "/posts"?'bg-accentcolor':''}`} variant='dashboard'><FaPenNib className='mr-4 w-6 h-6'/>Posts</Button>

              </Link>
              
            </div>
            <div className="">
              <Link href="/dashboard">
              <Button size="lg" className={`${pathname === "/dashboard"?'bg-accentcolor':''}`} variant='dashboard'><LuLayoutDashboard className='w-5 h-5'/>Dashboard</Button>

              </Link>
              
            </div>
            <div className="">
              <Link href="/users">
              <Button size="lg" className={`${pathname === "/users"?'bg-accentcolor':''}`} variant='dashboard'><RiUserSearchFill className='mr-4 w-6 h-6'/>Users</Button>

              </Link>
              
            </div>
            <div className="">
              <Link href="/dashboardsettings">
              <Button size="lg" className={`${pathname === "/dashboardsettings"?'bg-accentcolor':''}`} variant='dashboard'><IoSettingsOutline className='mr-4 w-6 h-6'/>Settings</Button>

              </Link>
              
            </div>

          </nav>
        

        </div>
    </div>
  )
}
