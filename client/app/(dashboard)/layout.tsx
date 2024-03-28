'use client'
import { Poppins } from 'next/font/google'
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { RxDashboard } from "react-icons/rx";

const poppins = Poppins({
    subsets:['latin'],
    weight:'600'


})
type MyState = boolean

import Navbar from './_components/navbar'
function DashboardPageLayout({children}:{children: React.ReactNode}) {
  const [showNav,setShowNavigation] = useState<MyState>(false)

  const Navigation = ()=>{
    showNav === false ? setShowNavigation(true):setShowNavigation(false)
  }
  const toggleBack = ()=>{
    setShowNavigation(false)
  }


  console.log(showNav)
  return (
    <div className=''>

        <div className="ml-2 mr-2 mt-2 ">
          <Button variant="dashboard" onClick={Navigation} className='md:hidden shadow-md'><RxDashboard className='w-9 h-9 mr-4'/>Dashboard Menu</Button>
        </div>
        <div className="flex">

            <div className="">
            <Navbar NavbarState={showNav}></Navbar>
            </div>
            <div className="w-full p-2" onClick={toggleBack}>
              {children}
            </div>
        </div>


        
        
    </div>
  )
}

export default DashboardPageLayout