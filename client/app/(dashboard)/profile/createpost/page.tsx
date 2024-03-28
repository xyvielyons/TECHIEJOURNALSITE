import React from 'react'
import MyEditor from '../../_components/editor/editor'
import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TfiControlBackward } from "react-icons/tfi";import EditorLoading from '../../_components/editor/editorloading'
function CreatePost() {

 

  return (
    <div className='mt-5 w-full p-2 space-y-1'>
      <Link href="/profile"><Button className='shadow-md' variant="socials"><TfiControlBackward className='w-6 h-6 font-bold'/></Button></Link>
      <h1 className='font-bold text-xl text-secondarycolor'>Create a Post</h1>

      <div className="w-full flex">
        <Suspense fallback={<EditorLoading/>}>
          <MyEditor></MyEditor>
        </Suspense>
      </div>
      

    </div>
  )
}

export default CreatePost