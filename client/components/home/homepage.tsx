import { getallPosts } from '@/data/get-posts-from-server'
import CardComponent from './cardcomponent'
import Carousel from './carousel'
import { Suspense } from 'react'
import Link from 'next/link'
import { getCarouselPosts } from '@/data/get-posts-from-server'
async function Homepage() {
  const postsData:Promise<Posts> = getallPosts()
  const CarouselPosts:Promise<Posts> = getCarouselPosts()

  const posts = await postsData
  const carouselposts = await CarouselPosts

  const getPostsFromArray = posts.message
  const postsForCarousel = carouselposts.message
 
  return (
    <div className='p-2'>
      <div className='w-full p-2'>
      <Suspense fallback={<p>loading....</p>}>
         <Carousel posts={postsForCarousel}></Carousel>
      </Suspense>
      </div>

      <div className="">
         <h1 className='text-secondarycolor text-2xl font-bold p-2'>Featured Posts</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {getPostsFromArray.map((post)=>{
          return (
           <CardComponent
            key={post._id}
            slug={post?.slug}
            title={post.title}
            description={post.content}
            image={post.image}
            ></CardComponent>
            
          )
        })}
        
      </div>
    </div>
  )
}

export default Homepage