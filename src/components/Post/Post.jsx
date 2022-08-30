import React from 'react'
import { AuthorBadge } from '..';
import MDEditor from '@uiw/react-md-editor';

const Post = ({ title, body, cover_url, created_at }) => {
  return (
    <div className=''>
      <div className='bg-slate-100 w-full h-72 flex flex-col justify-center items-center'>
        <div className='w-3/4 flex flex-col justify-center items-center'>
          <div className='text-slate-800 text-center text-5xl font-semibold'>{ title } </div>
          <div className='mt-10'>
            <AuthorBadge created_at={created_at}/>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center bg-gradient-to-b from-slate-100 to-white'>
        <div className='rounded-md shadow-md w-3/6'>
          <img src={cover_url} alt="" className='w-full rounded-md'/>
        </div>
      </div>

      <div className='flex flex-col items-center bg-white'>
        <div className='w-2/4 mt-12'>
          <div data-color-mode="light">
            <MDEditor.Markdown 
              source={body} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post