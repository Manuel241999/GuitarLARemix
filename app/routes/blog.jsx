import { Outlet } from '@remix-run/react'
import styles from '~/styles/blog.css'

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}


const Blog = () => {
  return (
   <Outlet />
  )
}

export default Blog