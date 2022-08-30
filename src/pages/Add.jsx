import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { PostForm } from '../components';

const initPost = {
  initTitle: '',
  initSummary: '',
  initBody: '',
  initCoverUrl: null,
};

const Add = () => {
  const navigate = useNavigate(); 

  const addPost = async (payload) => {
    try {
      await axios.post('/posts', payload);
      navigate('/my-posts');
    }
    catch(error) {
      console.log(error)
    }
  };

  return (
    <div className='px-12 pt-4 bg-white h-full'>
      <PostForm 
        initPost = {initPost}
        onSubmit = {addPost}
      />
    </div>
  )
}

export default Add