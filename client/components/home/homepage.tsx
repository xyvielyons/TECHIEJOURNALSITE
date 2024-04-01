import { getallPosts } from '@/data/get-posts-from-server'
import CardComponent from './cardcomponent'
async function Homepage() {
  const postsData:Promise<Posts> = getallPosts()
  const posts = await postsData
  const getPostsFromArray = posts.message
  console.log(getPostsFromArray)
  return (
    <div className='p-2'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {getPostsFromArray.map((post)=>{
          return (
            <CardComponent
            key={post._id}
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