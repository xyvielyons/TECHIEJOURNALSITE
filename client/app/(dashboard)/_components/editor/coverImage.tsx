import React from 'react'
import CardComponent from '../card'
import { Input } from '@/components/ui/input'
function CoverImage() {
  return (
    <CardComponent
    title="Upload Image 😃"
    description='upload image here....'
    >
        <div className="">
      <Input id="picture" type="file" />
    </div>
    </CardComponent>
  )
}

export default CoverImage