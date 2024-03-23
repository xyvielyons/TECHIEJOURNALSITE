import React from 'react'
import LoginForm from '@/components/auth/login-form'
import FormImageSection from '@/components/auth/form-image-login'
export default function LoginPage() {
  return (
    <div className="flex gap-4 items-center justify-center flex-col-reverse p-2 md:p-5 xl:p-8 md:flex-row">
      <div className="md:w-full md:p-10">
        <FormImageSection/>
      </div>
      <div className="md:w-4/6">
        <LoginForm></LoginForm>
        </div>
    </div>
    
  )
}
