'use client'
import React from 'react'
import parse from 'html-react-parser';
function Preview({myContent}:any) {
  return (
    <div className="w-full">
        <h1 className='font-bold text-xl text-secondarycolor'>Preview</h1>
        <div className="bg-creamywhite w-full  p-4 rounded-md shadow-lg min-h-screen">
            {parse(myContent)}
        </div>
    </div>
  )
}

export default Preview