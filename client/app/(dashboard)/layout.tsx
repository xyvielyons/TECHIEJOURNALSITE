import React from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
    subsets:['latin'],
    weight:'600'


})
import Navbar from './_components/navbar'
function DashboardPageLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='flex md:p-4'>
        <div className="">
          <h1 className={`text-xl text-secondarycolor font-bold ${poppins.className} ml-10`}>Dashboard</h1>
         <Navbar></Navbar>
        </div>
        {children}
    </div>
  )
}

export default DashboardPageLayout