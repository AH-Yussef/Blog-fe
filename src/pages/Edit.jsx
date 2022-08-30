import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

import { PostForm } from '../components';

const Edit = () => {
  const navigate = useNavigate(); 
  const {post_id} = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    if(!post_id) return;

    axios.get(`/posts/${post_id}`)
    .then(res => setPost(res.data))
    .catch(error => console.log(error));
  }, [post_id]);

  const savePost = async (payload) => {
    try {
      await axios.put(`/posts/${post_id}`, payload);
      navigate('/my-posts');
    }
    catch(error) {
      console.log(error)
    }
  };

  const setInitPost = (post) => {
    const initPost = {
      initTitle: post.title,
      initSummary: post.summary,
      initBody: post.body,
      initCoverUrl: post.cover_url,
    }
    return initPost;
  };

  return (
    <div className='px-12 pt-4 bg-white h-full'>
      <PostForm 
        initPost={setInitPost(post)}
        onSubmit={savePost}
      />
    </div>
  )
}

export default Edit