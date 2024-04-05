'use client'
import React from 'react'
import parse from 'html-react-parser';
import Image from 'next/image';
function Preview({myContent,image,title}:any) {
  return (
    <div className="w-full">
        <h1 className='font-bold text-xl text-secondarycolor'>Preview</h1>
        <div className="bg-creamywhite w-full  p-4 rounded-md shadow-lg min-h-screen">
          <h1 className='text-xl font-bold p-2'>{title}</h1>
          <Image src={image} alt="image" width="0" height="0" sizes="100vw" className='w-full h-full md:object-cover p-2'></Image>
            {parse(myContent)}
        </div>
    </div>
  )
}

export default Preview