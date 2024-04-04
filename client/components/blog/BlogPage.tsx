'use client'
import { useEffect,useState,useCallback } from "react"
import { getallPosts } from "@/data/get-posts-from-server"
import CardComponent from "../home/cardcomponent"
import NavigationBlog from "./navigationblog"
export default function BlogsPage() {
  const [posts,setPosts] = useState<any>([])
  const [error,setError] = useState<string | null>(null)
  const [nav,setNav] = useState<string>('All')
useEffect(()=>{
  const postsFromServer:Promise<Posts>=getallPosts()
  const fetchPosts = async()=>{
    try{
      const response = await postsFromServer
      const extractedPosts = response.message
      if(extractedPosts){
        setPosts(extractedPosts)

      }else{
        setError('No Posts Found')

      }

    }catch(err){
      setError('Error while fetching Posts')

    }
  }
  fetchPosts()
},[])

const getNavigationState = useCallback((props:string)=>{
setNav(props)
},[])

  return (
    <div className="p-2 ">
      <div className="p-2">
        <NavigationBlog navigation={getNavigationState}></NavigationBlog>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {nav==='All' && posts.map((post:any)=>{
          return <CardComponent
          key={post._id}
          title={post.title}
          description={post.content}
          image={post.image}
          ></CardComponent>

        })}
        {nav==='Other' && posts.filter((post:any)=>post.category === "Other").map((post:any)=>(
          <CardComponent
          key={post._id}
          title={post.title}
          description={post.content}
          image={post.image}
          ></CardComponent>
        ))}
        {nav==='Ai' && posts.filter((post:any)=>post.category === "Ai").map((post:any)=>(
          <CardComponent
          key={post._id}
          title={post.title}
          description={post.content}
          image={post.image}
          ></CardComponent>
        ))}
        {nav==='Programming' && posts.filter((post:any)=>post.category === "Programming").map((post:any)=>(
          <CardComponent
          key={post._id}
          title={post.title}
          description={post.content}
          image={post.image}
          ></CardComponent>
        ))}

        {nav==='Engineering' && posts.filter((post:any)=>post.category === "Engineering").map((post:any)=>(
          <CardComponent
          key={post._id}
          title={post.title}
          description={post.content}
          image={post.image}
          ></CardComponent>
        ))}
        {nav==='Cloud' && posts.filter((post:any)=>post.category === "Cloud").map((post:any)=>(
          <CardComponent
          key={post._id}
          title={post.title}
          description={post.content}
          image={post.image}
          ></CardComponent>
        ))}
        
         
      </div>
    </div>
  )
}
