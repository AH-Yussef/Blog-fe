import React , { useState }from 'react'
import { AuthorBadge } from '..'
import { Del, Edit } from '../../assets'
import './comment.css'

const Comment = ({ onDelete, onEdit, comment }) => {
  const { id, body, created_at } = comment;

  const [currBody, setCurrBody] = useState();

  const submitEdit = () => {
    onEdit(id, {body: currBody});
    setCurrBody(null);
  };

  return (
    
    <div className='bg-slate-100 rounded-lg p-2'>
      <div className='mb-2 flex'>
        <AuthorBadge created_at={created_at}/>
        <div className='ml-auto flex'>
          <div  className='hover:bg-slate-300 flex items-center h-6 w-6 rounded-md mr-2'
                onClick={() => onDelete(id)}
          >
            <img src={Del} alt="" className='h-6'/>
          </div>
          <div  className='hover:bg-slate-300 flex justify-center items-center h-6 w-6 rounded-md mr-2'
                onClick={() => setCurrBody(body)}
          >
            <img src={Edit} alt=""className='h-5'/>
          </div>
        </div>
      </div>
      {currBody == null || <div>
        <textarea
          type="text"
          value={currBody}
          onChange={(e) => setCurrBody(e.target.value)}
          className="outline-none resize-none text-slate-800 text-sm pl-2 bg-slate-100"
        />
        <div className='flex justify-end'>
          <div  className='save-btn'
                onClick={submitEdit}
          >
            Save
          </div>
        </div>
      </div>}
      {currBody != null || <p className='text-slate-800 text-sm pl-2'>{ body }</p>}
    </div>
  )
}

export default Comment