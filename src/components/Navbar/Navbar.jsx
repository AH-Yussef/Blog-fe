import React from 'react'
import { Link } from "react-router-dom";

export const Nabbar = () => {
  return (
    <div className="navbar bg-slate-100 px-12 h-20 fixed top-0 border-slate-800 z-30">
      <div className='flex-1' >
      <Link to='/'>
        <div className="font-extrabold text-4xl text-slate-800">
          THE BLOG
        </div>
      </Link>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full bg-gray-300"></div>
        </label>
        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-md w-52">
          <li>
            <span className="text-slate-800 justify-between">
              Profile
              <span className="bg-slate-800 outline-none badge">soon!</span>
            </span>
          </li>
          <Link to="/my-posts">
            <li><span className='text-slate-800'>My posts</span></li>
          </Link>
          <li>
            <span className="text-slate-800 justify-between">
              Logout
              <span className="bg-slate-800 outline-none badge">soon!</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nabbar