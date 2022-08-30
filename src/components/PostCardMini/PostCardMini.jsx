import React from 'react'
import { AuthorBadge } from '..'

const PostCardMini = ({ title, cover_url, created_at }) => {
  return (
    <div className='flex'>
      <div className='w-64 bg-gray-300 rounded-md'>
        <img src={cover_url} alt="" className='h-full w-full object-cover rounded-md'/>
      </div>
      <div className='flex flex-col ml-4'>
        <div className='text-slate-800 text-2xl font-bold mb-2'>{ title }</div>
        <AuthorBadge created_at={created_at}/>
      </div>
    </div>
  )
}

export default PostCardMini