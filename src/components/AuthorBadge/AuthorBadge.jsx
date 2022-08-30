import React from 'react'
import { formatDateTime } from '../../utilities'

const AuthorBadge = ({ created_at }) => {
  return (
    <div className='flex items-center'>
      <div className='rounded-full h-10 w-10 border-slate-800 border-2 p-0.5'>
        <div className='h-full w-full rounded-full bg-gray-300'></div>
      </div>
      <div className='ml-2'>
        <div className='font-bold text-sm'>Ali Hassan</div>
        <div className='text-slate-500 text-xs'>{ formatDateTime(created_at) }</div>
      </div>
    </div>
  )
}

export default AuthorBadge