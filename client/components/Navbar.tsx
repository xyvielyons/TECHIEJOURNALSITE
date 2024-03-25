'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { Button } from "./ui/button";
import { useCurrentUser } from "@/hooks/use-current-user"
import React,{useState,useEffect} from "react";
import { Poppins } from "next/font/google";
const font = Poppins({
  subsets:["latin"],
  weight:["500"]
})
import { UserButton } from "./auth/user-button";
import { CiHome } from "react-icons/ci";
import { GiEgyptianProfile } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { GiPadlockOpen } from "react-icons/gi";
import { usePathname } from "next/navigation";
export default function NavbarUi() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [getPathname,setPathname] = useState("")
  const pathname = usePathname()
  const user = useCurrentUser()


 useEffect(()=>{
   setPathname(pathname)
 },[pathname])
 




  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="max-w-screen-xl mx-auto rounded-xl ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h1 className="font-bold text-inherit text-xl text-accentcolor">Techie.io</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className={`${font.className} ${getPathname == "/"?'text-accentcolor ':''} className="h-7 w-7"`}>
            <span className=""><CiHome className="h-7 w-7"/></span>Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/blog" aria-current="page" className={`${font.className} ${getPathname == "/blog"?'text-accentcolor':''}`}>
          <span className=""><IoMdChatbubbles className="h-7 w-7"/></span>Blog
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/about" className={`${font.className} ${getPathname == "/about"?'text-accentcolor':''}`}>
          <span className=""><GiEgyptianProfile className="h-7 w-7"/></span>About
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/dashboard" className={`${font.className} ${getPathname == "/dashboard"?'text-accentcolor':''}`}>
          <span className=""><MdDashboard className="h-7 w-7"/></span>Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          {user && <UserButton/>}
          {!user && <Link href={getPathname === "/auth/register"?"/auth/login":"/auth/register"}>
          <Button variant="accent">
          {getPathname === "/auth/register"?(<GiPadlockOpen className="mr-2"/>):(<MdLogout className="mr-2"/>)}
            {getPathname === "/auth/register"?"sign in":"register"}
          </Button>
         
          </Link>}
        

          
          
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        
          <NavbarMenuItem className="space-y-2">
            <Link
              className={`w-full p-2 hover:bg-slate-300 rounded-md ${font.className}  ${getPathname == "/"?'bg-accentcolor text-white shadow-md':''}`}
              href="/"
              size="lg"
            >
             <span className=""><CiHome className="h-8 w-8"/></span>Home
            </Link>
            <Link

              className={`w-full p-2 hover:bg-slate-300 rounded-md ${font.className}  ${getPathname == "/blog"?'bg-accentcolor text-white shadow-md':''}`}
              href="/blog"
              size="lg"
            >
            <span className=""><IoMdChatbubbles className="h-8 w-8"/></span>  Blog
            </Link>
            <Link
              className={`w-full p-2 hover:bg-slate-300 rounded-md ${font.className}  ${getPathname == "/about"?'bg-accentcolor text-white shadow-md':''}`}
              href="/about"
              size="lg"
            >
             <span className=""><GiEgyptianProfile className="h-8 w-8"/></span> About
            </Link>
            <Link
              className={`w-full p-2 hover:bg-slate-300 rounded-md ${font.className}  ${getPathname == "/dashboard"?'bg-accentcolor text-white shadow-md':''}`}
              href="/dashboard"
              size="lg"
            >
             <span className=""><MdDashboard className="h-8 w-8"/></span> Dashboard
            </Link>
            
            <Link
              className={`w-full p-2 hover:bg-slate-300 rounded-md ${font.className}  ${getPathname == "/auth/login"?'bg-accentcolor text-white shadow-md':''}`}
              href="/auth/login"
              size="lg"
            >
              <span className=""><GiPadlockOpen className="h-8 w-8"/></span> Sign in
            </Link>
            <Link
              className={`w-full p-2 hover:bg-slate-300 rounded-md ${font.className}  ${getPathname == "/auth/register"?'bg-accentcolor text-white shadow-md':''}`}
              href="/auth/register"
              size="lg"
            >
              <span className=""><MdLogout className="h-8 w-8"/></span> Register
            </Link>
            
            
          </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>
  );
}
