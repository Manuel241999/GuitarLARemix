import Post from '~/components/Blog'


const ListadoPost = ({posts}) => {
  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
            <Post 
            key={post.id}
            post={post.attributes}/>
        ))}
      </div>
    </main>
  )
}

export default ListadoPost