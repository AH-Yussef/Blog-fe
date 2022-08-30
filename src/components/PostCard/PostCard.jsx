import React from 'react'
import { AuthorBadge } from '..'

const PostCard = ({ title, summary, cover_url, created_at }) => {
  return (
    <div className='flex flex-col h-full'>
      <div className='rounded-md shadow max-h-72'>
        <img src={cover_url} alt="" className='h-full w-full object-cover rounded-md'/>
      </div>
      <div className='pr-4 mb-4'>
        <div className='text-slate-800 text-3xl font-bold mt-4 mb-2'>{ title }</div>
        <p className='text-slate-600'>{ summary }</p>
      </div>
      <div className='mt-auto'>
        <AuthorBadge created_at={created_at}/>
      </div>
    </div>
  )
}

export default PostCard