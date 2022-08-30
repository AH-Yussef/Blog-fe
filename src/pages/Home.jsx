import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { RecentsGrid, PostsGrid } from '../components';

const Home = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get('/posts/all/4');
      setRecentPosts(res.data);
      res = await axios.get('/posts/all/12');
      setAllPosts(res.data);
    }
    try {
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div>
      <div className='flex flex-col items-center bg-gradient-to-b from-slate-100 to-white'>
        <div className='container py-12'>
          <div className='pb-6 text-3xl text-slate-800 font-extrabold'>Most Recent</div>
          <RecentsGrid posts={recentPosts}/>
        </div>
      </div>
      <div className='pb-12 bg-white flex flex-col items-center'>
        <div className='container'>
          <div className='py-6 text-3xl text-slate-800 font-extrabold'>All blog posts</div>
          <PostsGrid posts={allPosts}/>
        </div>
      </div>
    </div>
  )
}

export default Home