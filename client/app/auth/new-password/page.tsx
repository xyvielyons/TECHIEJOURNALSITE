import NewPasswordForm from '@/components/auth/new-password-form'
import React from 'react'
import FormImageSection from '@/components/auth/form-image-resetpassword'
export default function NewPassword() {
  return (
    <div className="flex gap-4 items-center justify-center flex-col-reverse p-2 md:p-5 xl:p-8 md:flex-row">
      <div className="md:w-full gap-4">
        <FormImageSection/>
      </div>
      <div className="md:w-4/6">
        <NewPasswordForm></NewPasswordForm>

      </div>
    </div>
  )
}
