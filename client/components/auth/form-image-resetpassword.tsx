'use client'
import React from 'react'
import Image from 'next/image'
import forgotPassword from '@/public/undraw_forgot_password_re_hxwm.svg'
import SignUpBlob from '@/public/aboutblob.svg'

function FormImageSection() {
  

  return (
    
    <div className="relative flex justify-center items-center">
        <div className="absolute top-24  flex w-full p-20 ">  
        <Image src={forgotPassword} alt="forgot password"></Image>   
          </div>

        <div className="w-full mt-8 ">
          <Image className='' src={SignUpBlob} alt='signup blob'></Image>
        </div>

    </div>
 
  )
}

export default FormImageSection