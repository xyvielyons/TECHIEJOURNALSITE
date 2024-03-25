'use client'
import React from 'react'
import {Avatar} from "@nextui-org/react";
import { useCurrentUser } from '@/hooks/use-current-user';
import Profileform from './profileform';
function Profile() {
  const user = useCurrentUser()
  console.log(user) 

  return (
    <div className="flex flex-col items-center w-full p-10 space-y-4">
      <div className="">
       <Avatar isBordered color="secondary" src={user?.image || ""} className='w-32 h-32'/>

      </div>
      <div className="">
        <Profileform></Profileform>

      </div>
    
 
  </div>
  )
}

export default Profile