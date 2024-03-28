'use client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useMemo, useRef,useState,useEffect, useCallback } from 'react'
import {Storage} from '@/firebase/firebaseconfig'
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import Preview from '../preview';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import TitleCard from './titlecard';
import CoverImage from './coverImage';
import { Button } from '@/components/ui/button';
import { LuSend } from "react-icons/lu";
import { useCurrentUser } from '@/hooks/use-current-user';
import CategoryCard from './category';
import { GetPostData } from '@/actions/postdata';
function Editor() {
    const user = useCurrentUser()
    const [content, setContent] = useState<string>('');
    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")
    const quillRef = useRef<any>(null);

    const [coverImageUrl,setCoverImageUrl] = useState<string>('')
    const [titleData,setTitleData] = useState<string>('')
    const [categoryData,setCategoryData] = useState<string>('')
    const [dataToServer,setDataToServer] = useState<object>({})

    
    

   
    const coverImageData = useCallback((props:string)=>{
      setCoverImageUrl(props)
    },[])
    const titleCardData = useCallback((props:string)=>{
      setTitleData(props)
     
    },[])
    const categoryCardData = useCallback((props:string)=>{
      setCategoryData(props)
     
    },[])
   




    useEffect(()=>{
        setSuccess("")
        setError("")
    },[content])

    useEffect(()=>{
      setDataToServer({coverImageUrl,titleData,content})
    },[coverImageUrl,titleData,content])
   
    function getStringWithHyphensAndRandom(originalString:string, randomStringLength = 6) {
      // 1. Generate random string (optional length)
      const randomString = Math.random().toString(36).substring(2, randomStringLength + 2);
    
      // 2. Combine original string, hyphen, and random string
      const modifiedString = `${originalString}-${randomString}`;
      const join = modifiedString.replace(/\s+/g, '');
      return join;
    }

    const sendDataToServer = ()=>{
      
      const userId = user?.id
      const slug = getStringWithHyphensAndRandom(titleData)
      
      if(!coverImageUrl){
        return setError("no cover image uploaded")
      }
      if(!titleData){
        return setError("please input title")
      }
      if(!categoryData){
        return setError("please input category")
      }
      const data:object = {...dataToServer,slug,userId,categoryData}
      GetPostData(data)
      


     
      
    }


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
            <CoverImage coverImageData = {coverImageData}></CoverImage>

            </div>
            <div className=""> 
            <TitleCard titleCardData={titleCardData}></TitleCard>

            </div>
            <div className=""> 
            <CategoryCard categoryCardData={categoryCardData}></CategoryCard>

            </div>

            <div className='bg-creamywhite rounded-xl shadow-md flex  p-2 flex-col'>
              <h1 className='text-xl font-bold'>Editor✏️</h1>
              
              <ReactQuill theme="snow" ref={quillRef} value={content} modules={modules} onChange={setContent} />
              <FormError message={error}></FormError>
              <FormSuccess message={success} ></FormSuccess>
              <div className="flex justify-end mt-2 shadow-sm">
                <Button onClick={sendDataToServer} variant="dashboard">Post <LuSend className='ml-1 h-6 w-6'/></Button>

              </div>
                        
            </div>

        </div>
      </div>
       

        
        <div className='md:w-1/2 w-full border-2 border-accentcolor'>
         <Preview myContent={content}></Preview>
        </div>
    </div>
    
  )
}

export default Editor