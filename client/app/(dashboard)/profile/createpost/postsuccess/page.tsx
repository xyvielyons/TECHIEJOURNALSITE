import React from 'react'
import Image from 'next/image'
import { CardWrapper } from '@/components/auth/card-wrapper'
import SignUpBlob from '@/public/signinblob.svg'

function PostSuccess() {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 items-center'>
       <div className="relative flex justify-center items-center">
          <div className="absolute top-16  flex w-full p-20 ">  
            <Image src="/winners.svg" alt="forgot password" width="600" height="600"></Image>   
          </div>

        

            <div className="w-full mt-8 ">
            <Image className='' src={SignUpBlob} alt='signup blob'></Image>
            </div>

    </div>
        <div className="">
            <CardWrapper
            header="Post has been successfully created 😃"
            headerLabel='your post has been submitted....'
            backButtonLabel='Go back to Home'
            backButtonHref='/'

            >
                <div className="">
                    <h1></h1>
                </div>
            </CardWrapper>

        </div>
    
    </div>
  )
}

export default PostSuccess