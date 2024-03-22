export const dynamic = 'force-static'
import AboutSvg from '@/public/undraw_profile_re_4a55.svg'
import AboutBlob from '@/public/aboutblob.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import type {Metadata} from 'next'
export const metadata: Metadata = {
  title: "About",
  description: "About Techie.io",
};
function Login() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      


           <div className='mt-0 md:mt-5 md:w-7/12'>
              <div className="relative flex justify-center items-center">
                  <div className="absolute top-10 p-10 md:p-28 ml-10">  
                    <Image className='' src={AboutSvg} width='1024' height='768' alt='signup blob'></Image>
                  </div>

                  <div className="p-5">
                    <Image className='' src={AboutBlob} width='600' height='600' alt='signup blob'></Image>
                  </div>

              </div>
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