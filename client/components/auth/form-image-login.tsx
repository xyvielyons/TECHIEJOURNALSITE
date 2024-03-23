'use client'
import React from 'react'
import Image from 'next/image'
import SignUpBlob from '@/public/signinblob.svg'
import Lottie from 'react-lottie'
import animationData from '@/LottieFiles/login.json'
function FormImageSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    
    <div className="relative flex justify-center items-center">
        <div className="absolute top-16  flex w-full">  
        <Lottie options={defaultOptions}/>      
          </div>

        <div className="w-full mt-8 ">
          <Image className='' src={SignUpBlob} alt='signup blob'></Image>
        </div>

    </div>
 
  )
}

export default FormImageSection