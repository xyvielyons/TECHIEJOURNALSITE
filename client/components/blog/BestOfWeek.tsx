import React from 'react'
import { getCarouselPosts } from '@/data/get-posts-from-server'
import CardComponent from '../home/cardcomponent'
export default async function BestOfWeek() {
    const getPosts:Promise<Posts> = getCarouselPosts()
    const posts = await getPosts
    const getPostsFromArray = posts.message

  return (
    <div className='grid grid-cols-2 grid-rows-3'>
        {getPostsFromArray.map(post=>(
            <CardComponent
            key={post._id}
            title={post.title}
            description={post.content}
            image={post.image}
            >

            </CardComponent>
        ))}
    </div>
  )
}
