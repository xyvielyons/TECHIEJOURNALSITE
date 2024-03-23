export const dynamic = 'force-static'
import AboutSvg from '@/public/undraw_profile_re_4a55.svg'
import AboutBlob from '@/public/aboutblob.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import type {Metadata} from 'next'
import FormImage from '@/components/about/about-image'
export const metadata: Metadata = {
  title: "About",
  description: "About Techie.io",
};
function Login() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center">
      


           <div className=''>
              
             <FormImage></FormImage>
         
           </div>


          <div className="w-full md:w-5/12 md:mt-10 p-10">
            <div className="space-y-2">
              <h1 className='font-bold text-3xl text-secondarycolor'>About</h1>
              <p className='text-lg font-medium'>Welcome to the blog! Here, you will find whats happening around you and around the world . We aim to inspire ,educate and inform you . Stay tuned for new posts everyday.</p>
            </div>
          </div>

    </div>
  )
}

export default Login