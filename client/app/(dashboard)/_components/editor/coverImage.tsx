import React, { useEffect, useState } from 'react'
import CardComponent from '../card'
import { Input } from '@/components/ui/input'
import { FormSuccess } from '@/components/form-success'
import { FormError } from '@/components/form-error'
import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import {Storage} from '@/firebase/firebaseconfig'
import Image from 'next/image'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'

function CoverImage({coverImageData}:any) {
  const [imageUrl,setImageUrl]=useState<string>("")
  const [error,setError]=useState("")
  const [success,setSuccess]=useState("")
  const [progress,setProgress] = useState<any>()
useEffect(()=>{
  if(imageUrl){
    coverImageData(imageUrl)
  }

},[imageUrl])
    



 


  const uploadImages = async(file:any)=>{
    try{

 
      if(!file){
          return setError("file not found")
      }



      const fileName = new Date().getTime() + '-' + file.name
      const storageRef = ref(Storage,fileName);
      const uploadTask = uploadBytesResumable(storageRef,file)
      uploadTask.on(
          'state_changed',
          (snapshot)=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            setProgress(progress)
           
          },(error)=>{
              console.log(error)
        return setError("an error occured when uploading image")
        
       
        
       },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          if(downloadURL){
            setSuccess("image uploaded successfully")
           toast("cover image submitted successfully")
           setImageUrl(downloadURL)
          }
          
     
        })
       }
  
        )
  
    }catch(err){
     
      return setError("something went wrong")
  
  
    }
      
  }
  


  function validateImageFormat(file:File) {
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    return validImageTypes.includes(file.type);
  }

  async function fileInput(event:any){
    setSuccess("")
    setError("")
    const file = event.target.files[0]
    if(!file) return setError("something went wrong")
    if (!validateImageFormat(file)) {
     return setError("Invalid image format. Please upload an image file (jpg, jpeg, png, etc.)");
      
    }
     
   await uploadImages(file)

     
     
  }
 

  return (
    <CardComponent
    title="Upload Image 😃"
    description='upload image here....'
    >
        <div className="p-2">
          <div className="flex flex-row gap-1">
          <Input id="picture" type="file" onChange={fileInput} />
          {imageUrl && <Image className="rounded-sm shadow-md" src={imageUrl} alt='uploaded image' width="100" height="100"></Image>}

          </div>
      <FormSuccess message={success}></FormSuccess>
      <FormError message={error}></FormError>
    </div>
    <p className={`${progress == 100 ? 'rounded-full bg-green-500':'bg-destructive'} w-[150px] flex items-center justify-center text-white text-sm rounded-full shadow-md`}>{progress? parseInt(progress): 0}% uploaded</p>

    </CardComponent>
  )
}

export default CoverImage