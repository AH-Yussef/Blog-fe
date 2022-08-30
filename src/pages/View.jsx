import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

import { Post, Comment, CommentInput } from '../components';

const View = () => {
  const {post_id} = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if(!post_id) return;

    axios.get(`/posts/${post_id}`)
    .then(res => setPost(res.data))
    .catch(error => console.log(error));
  }, [post_id]);

  const fetchComments = async () => {
    const res = await axios.get(`/posts/${post_id}/comments`);
    setComments(res.data);
  };

  const toggleComments = () => {
    if(comments.length === 0) fetchComments();
    else setComments([]);
  };

  const handleAddComment = async (body) => {
    await axios.post(`/posts/${post_id}/comments`, body);
    fetchComments();
  };

  const handleDeleteComment = async (commentId) => {
    await axios.delete(`/posts/${post_id}/comments/${commentId}`);
    fetchComments();
  };

  const handleEditComment = async (commentId, updatedBody) => {
    await axios.put(`/posts/${post_id}/comments/${commentId}`, updatedBody);
    fetchComments();
  };

  return (
    <div className='pb-8'>
      <Post {...post}/>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-2/4 mt-8 flex flex-col'>
          <div className='mb-4 text-2xl text-slate-800 font-extrabold'>Write a comment</div>
          <CommentInput onSubmit={handleAddComment}/>
        </div>
        <div 
          className='w-2/4 border border-slate-800 h-12 my-4 rounded flex justify-center items-center text-slate-800 font-medium select-none cursor-pointer hover:bg-slate-800 hover:text-white hover:transition ease delay-50'
          onClick={() => toggleComments()}
        >
          {comments.length === 0 ? 'Show comments': 'Hide comments'}
        </div>
        <div className='w-2/4 grid grid-flow-row gap-y-4'>
          {comments.map(comment => 
            <Comment 
              key={comment.id}
              onDelete={handleDeleteComment} 
              onEdit={handleEditComment}
              comment={comment}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default View