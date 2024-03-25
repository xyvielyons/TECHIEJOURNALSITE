'use client'

import {Avatar} from "@nextui-org/react";
import { useCurrentUser } from '@/hooks/use-current-user';
import Profileform from './profileform';
function Profile() {
  const user = useCurrentUser()


  return (
    
      
      <div className="flex flex-col items-center  space-y-4  md:max-w-[600px] md:mx-auto w-full">
      
          <div className="w-full flex justify-center">
          <Avatar isBordered color="secondary" src={user?.image || ""} className='w-32 h-32'/>

          </div>

          <div className="w-full">
            <Profileform></Profileform>

          </div>
    
 
  </div>
   
   
  )
}

export default Profile