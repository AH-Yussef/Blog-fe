import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MyPost } from '../components';

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('/posts/all/12');
    setAllPosts(res.data);
  };

  useEffect(() => {
    try {
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDeletePost = async (postId) => {
    await axios.delete(`/posts/${postId}`);
    fetchPosts();
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='container pb-12'>
        <div className='py-8 fixed bg-white flex w-full left-0 px-12'>
          <div className='text-3xl font-extrabold text-slate-800'>My Posts</div>
          <Link to='/post/add' className='bg-slate-800 text-slate-100 flex justify-center items-center px-4 py-2 rounded-md ml-auto'>
            <div>create post</div>
          </Link>
        </div>
        <div className='grid grid-flow-row gap-y-6 pt-32'>
          {allPosts.map(post => 
            <MyPost 
              key={post.id} 
              onDelete={handleDeletePost} 
              post={post}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home