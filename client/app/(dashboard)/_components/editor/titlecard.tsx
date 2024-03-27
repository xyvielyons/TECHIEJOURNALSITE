import React from 'react'
import CardComponent from '../card'
import { Input } from '@/components/ui/input'
export default function TitleCard() {
  return (
    <div className="">
        <CardComponent
        title='Title 😁'
        description='Input title........'
        >
         <div className="">
            <Input type='text' placeholder='title......'></Input>
         </div>
        </CardComponent>
    </div>
  )
}
