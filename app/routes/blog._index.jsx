import { useLoaderData } from '@remix-run/react'
import {getPosts} from '~/models/posts.server'
import ListadoPost from '~/components/ListadoPost'

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()
  return (
   <ListadoPost
   posts={posts}
   />
  )
}

export default Blog