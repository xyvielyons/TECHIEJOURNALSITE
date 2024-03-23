'use client'
import React from 'react'
import Image from 'next/image'
import SignUpSvg from '@/public/undraw_sign_up_n6im.svg'
import SignUpBlob from '@/public/signinblob.svg'
import Lottie from 'react-lottie'
import animationData from '@/LottieFiles/register.json'
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
        <div className="absolute top-15  flex w-full border-black b-2 ">  
        <Lottie options={defaultOptions}/>      
          </div>

        <div className="w-full mt-8 ">
          <Image className='' src={SignUpBlob} alt='signup blob'></Image>
        </div>

    </div>
 
  )
}

export default FormImageSection