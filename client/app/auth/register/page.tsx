import React from 'react'
import FormImageSection from '@/components/auth/form-image-section'
import RegisterForm from '@/components/auth/register-form'
export default function RegisterPage() {
  return (
    <div className="flex gap-4 items-center justify-center flex-col-reverse p-2 md:p-5 xl:p-8 md:flex-row">
          <div className="md:w-full md:p-20">
             <FormImageSection></FormImageSection>
          </div>

            <div className="md:w-4/6">
              <RegisterForm></RegisterForm>
            </div>
    </div>
    
  )
}
