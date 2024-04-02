'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import parse from 'html-react-parser';

import { Swiper, SwiperSlide } from 'swiper/react';


import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/components/home/styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel({posts}:any) {
 
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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper sample-slider bg-creamywhite h-[500px] m-3 rounded-md shadow-md"
      >
        {posts.map((post:any)=>{
          return (<SwiperSlide key={post._id}>
                    <div className=" h-full w-full relative ">
                        <div className="bg-secondarycolor text-white absolute top-[390px] opacity-85 w-full p-4 hover:bg-accentcolor">
                            <h1 className='text-white font-bold text-2xl'>{post.title}</h1>
                            <p className="text-ellipsis line-clamp-3  text-white text-sm">{removeTags(parse(post.content))}</p>
                           
                        </div>
                    <Image src={post.image} alt="image" width="0" height="0" sizes="100vw" className='w-full h-full md:object-cover'></Image>

                    </div>
                    <div className="">
                        </div>
            </SwiperSlide>)
        })}
      
        
        
        
      </Swiper>
    </>
  );
}
