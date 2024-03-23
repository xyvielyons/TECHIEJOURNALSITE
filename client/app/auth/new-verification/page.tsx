import React from 'react'
import { NewVerificationForm } from '@/components/auth/new-verification-form'
function NewVerificationPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center p-20">
      
      <div className="">
          <NewVerificationForm></NewVerificationForm>
      </div>
    </div>
  )
}

export default NewVerificationPage