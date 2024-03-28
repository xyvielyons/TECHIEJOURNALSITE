import React,{useEffect, useState} from 'react'
import CardComponent from '../card'
import { Input } from '@/components/ui/input'
export default function TitleCard({titleCardData}:any) {
  const [title,setTitle] = useState<string>("")
  const onBlur = (e:any)=>{
     setTitle(e.target.value)
  }
  useEffect(()=>{
    titleCardData(title)

  },[title])
  return (
    <div className="">
        <CardComponent
        title='Title '
        description='Input title........'
        >
         <div className="">
            <Input type='text' placeholder='title......' onBlur={onBlur}></Input>
         </div>
        </CardComponent>
    </div>
  )
}
