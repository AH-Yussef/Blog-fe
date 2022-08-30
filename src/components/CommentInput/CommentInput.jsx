import React , { useState, useEffect, useRef }from 'react'
import { AuthorBadge } from '..'
import './CommentInput.css';

const CommentInput = ({ onSubmit }) => {
  const [body, setBody] = useState('');
  const commentBody = useRef();

  useEffect(() => {
    if(commentBody.current) commentBody.current.focus(); 
   }, [commentBody]);

  const submitComment = () => {
    onSubmit({body});
    setBody('');
  }; 

  return (
    <div className='bg-slate-100 rounded-lg p-2'>
      <div className='mb-2 flex'>
        <AuthorBadge created_at={new Date()}/>
      </div>
      <div>
        <textarea
          ref={commentBody}
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="h-20 mt-2 resize-none outline-none text-slate-800 text-sm pl-2 bg-slate-100 w-full"
          placeholder='write a comment'
        />
        <div className='flex justify-end'>
          <button   className={`post-btn ${body.length === 0 ? 'cursor-not-allowed': 'cursor-pointer'}`}
                    disabled={body.length === 0}
                    onClick={submitComment}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentInput