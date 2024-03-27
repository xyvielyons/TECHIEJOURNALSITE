'use client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useMemo, useRef,useState,useEffect } from 'react'
import {Storage} from '@/firebase/firebaseconfig'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import Preview from '../preview';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import TitleCard from './titlecard';
import CoverImage from './coverImage';
function Editor() {
    const [content, setContent] = useState<string>('');
    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")
    const quillRef = useRef<any>(null);
    useEffect(()=>{
setSuccess("")
setError("")
setSuccess
    },[content])
   
    const uploadImages = async(file:any)=>{
        try{

            const editor = quillRef?.current?.getEditor();
     
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
                console.log(progress)
               setSuccess("image uploaded successfully")
              },(error)=>{
                  console.log(error)
            return setError("an error occured when uploading image")
            
           
            
           },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
              const range = editor?.getSelection();             
              editor.editor.insertEmbed(range.index, 'image', downloadURL);
         
            })
           }
      
            )
      
        }catch(err){
         
          return setError("something went wrong")
      
      
        }
          
      }

    const imageHandler = () => {
        
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
    
        input.onchange = async () => {
            if(input?.files){
                const file = input?.files[0];
                console.log("file",file)

                if (/^image\//.test(file.type)) {
                    const formData = new FormData();
                    formData.append("image", file);
                    console.log("formData",formData)
                    await uploadImages(file)

                }
            } 
        };
      }


    const modules = useMemo(() => ({
        toolbar: {
          container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }, { 'indent': '-1' }, { 'indent': '+1' }],
                ["link", "image"],
                [{ "code-block": true }],
                ["clean"],
                [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
              ],
          handlers: {
            image: imageHandler
          }
        },
      }), [])
      
  return (
    <div className="flex w-full gap-2 flex-col md:flex-row">

      <div className="md:w-1/2 w-full">
        <div className="space-y-2">
            <div className=""> 
            <CoverImage></CoverImage>

            </div>
            <div className=""> 
            <TitleCard></TitleCard>

            </div>

            <div className='bg-creamywhite rounded-xl shadow-md flex  p-2 flex-col'>
              <h1 className='text-xl font-bold'>Editor✏️</h1>
              
              <ReactQuill theme="snow" ref={quillRef} value={content} modules={modules} onChange={setContent} />
              <FormError message={error}></FormError>
              <FormSuccess message={success} ></FormSuccess>
                        
            </div>

        </div>
      </div>
       

        
        <div className='md:w-1/2 w-full'>
         <Preview myContent={content}></Preview>
        </div>
    </div>
    
  )
}

export default Editor