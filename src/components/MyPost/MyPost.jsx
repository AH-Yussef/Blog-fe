import React from 'react'
import { Link } from 'react-router-dom'
import { formatDateTime } from '../../utilities'
import { Del, Edit } from '../../assets'

const MyPost = ({ onDelete, post }) => {
  const { id, title, cover_url, created_at } = post;

  return (
    <div className='flex border-b border-slate-200 pb-6 last:border-b-0'>
      <div className='w-64 bg-gray-300 rounded-md'>
        <img src={cover_url} alt="" className='h-full w-full object-cover rounded-md'/>
      </div>
      <div className='flex flex-col ml-4'>
        <Link to={`/post/${id}`}>
          <div className='text-slate-800 text-2xl font-bold mb-2'>{ title }</div>
        </Link>
        <div className='text-slate-500 text-sm'>{ formatDateTime(created_at) }</div>
      </div>
      <div className='ml-auto flex'>
        <div  className='hover:bg-slate-300 flex items-center h-6 w-6 rounded-md mr-2'
              onClick={() => onDelete(id)}
        >
          <img src={Del} alt="" className='h-6'/>
        </div>
        
        <Link to={`/post/edit/${id}`}>
          <div  className='hover:bg-slate-300 flex justify-center items-center h-6 w-6 rounded-md mr-2'>
            <img src={Edit} alt=""className='h-5'/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MyPost