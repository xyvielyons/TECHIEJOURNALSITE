'use server'
import {Storage} from '@/firebase/firebaseconfig'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'

export const uploadImage = async(file:any)=>{
  try{
    if(!file){
        return {error:"no image selected"}
    }
    console.log("file",file.FormData)
    console.log("starting upload")
    const fileName = new Date().getTime() + '-' + file.name
    const storageRef = ref(Storage,fileName);
    const uploadTask = uploadBytesResumable(storageRef,file)
    uploadTask.on(
        'state_changed',
        (snapshot)=>{
          const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          console.log(progress)
          console.log("success")
        },(error)=>{
            console.log(error)
      return {error:"image upload unsuccessfull"}
      
     
      
     },()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
      
       return downloadURL
      })
     }

      )

  }catch(err){
    console.log(err)
    return {error:"image upload unsuccessfull"}


  }
    
}