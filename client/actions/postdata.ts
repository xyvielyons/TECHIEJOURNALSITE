'use server'
import { revalidateTag } from "next/cache"
import { revalidatePath } from "next/cache"
interface PostType {
    userId?:string
    coverImageUrl?:string
    titleData?:string
    content?:string
    slug?:string
    categoryData?:string
}
export const GetPostData=(values:PostType)=>{
      
    const sendPost = async(url:string)=>{
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'Authorization':'Bearer HY$i9@"yp[/ywn(=T:kCbO$r>V]OaP'

            },
            body:JSON.stringify({
                userId:values.userId,
                content:values.content,
                title:values.titleData,
                image:values.coverImageUrl,
                category:values.categoryData,
                slug:values.slug
            })

        })
        if(!response.ok){
            return {error:"Post not submitted try again later"}
        }

        return await response.json()

    }
    sendPost("http://127.0.0.1:4000/api/post/createpost")
    revalidateTag('getallposts')
    revalidatePath('/')
    return{success:"Post successfully submitted",error:""}
    
}
