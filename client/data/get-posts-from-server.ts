export const getallPosts = async ()=>{
    const res = await fetch('http://127.0.0.1:4000/api/post/getposts',{ next: { revalidate: 60,tags:['getallposts'] } })
    if(!res.ok){
        return {error:"failed to fetch posts"}
    }
    return res.json()
}
export const getCarouselPosts = async ()=>{
    const res = await fetch('http://127.0.0.1:4000/api/post/getposts?order=dec&limit=5',{next:{revalidate:60,tags:['getallposts']}})
    if(!res.ok){
        return {error:"failed to fetch posts"}
    }
    return res.json()
}