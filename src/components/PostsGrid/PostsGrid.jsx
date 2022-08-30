import React from 'react'
import { Link } from 'react-router-dom'
import { PostCard } from '../../components'

const PostsGrid = ({ posts }) => {
  return (
    <div className='grid grid-cols-3 gap-16'>
      {posts.map((post) =>
        <Link to={`post/${post.id}`} key={post.id}>
          <PostCard {...post}/>
        </Link>
      )}
    </div>
  )
}

export default PostsGrid