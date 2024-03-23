import ResetForm from "@/components/auth/reset-form"
import FormImageSection from "@/components/auth/form-image-resetpage"

export default function ResetPage() {
  return (
    <div className="flex flex-col-reverse max-w-screen-xl p-5 md:flex-row items-center justify-center">
      <div className="md:w-full ">
      <FormImageSection></FormImageSection>
      </div>
      <div className="md:w-4/6">
        <ResetForm/>
      </div>
    </div>
  )
}
