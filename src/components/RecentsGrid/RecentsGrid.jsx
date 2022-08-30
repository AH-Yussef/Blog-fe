import React from 'react'
import { Link } from 'react-router-dom'
import { PostCard, PostCardMini} from '../../components'

const RecentsGrid = ({ posts }) => {
  return (
    <div className='grid grid-cols-2 gap-x-12'>
      <Link to={`post/${posts[0] ? posts[0].id: ''}`}>
        <PostCard {...posts[0]}/>
      </Link>
      <div className='grid grid-rows-3 gap-y-12'>
        {posts.slice(1).map(post => 
          <Link to={`post/${post.id}`} key={post.id}>
            <PostCardMini {...post}/>
          </Link>
        )}
      </div>
    </div>
  )
}

export default RecentsGrid