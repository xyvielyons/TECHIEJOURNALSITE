'use client'
import React from 'react'
import { getallPosts } from '@/data/get-posts-from-server'
import Image from 'next/image'
import parse from 'html-react-parser';
async function page({params}:{params:{postslug:string}}) {
    const posts:Promise<Posts> = getallPosts()
    const getPosts = await posts
    const getCurrentPosts = getPosts.message
    const post = await getCurrentPosts.find(post=>post.slug===params.postslug)
    const content:any = parse(post?.content || '')
    function removeTags(str:any) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
     
        // Regular expression to identify HTML tags in
        // the input string. Replacing the identified
        // HTML tag with a null string.
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    
  return (
    <div className='p-4 bg-creamywhite'>
        <h1 className="text-3xl font-bold p-2">{post?.title}</h1>
        <div className=" mx-auto w-full md:max-w-xl md:h-96" >
            <Image src={post?.image || ''} alt="image" width="1200" height="0" className='h-full'></Image>
        </div>
        <div className="p-2 imageinpost">
            {parse(content)}
        </div>
    </div>
  )
}

export default page