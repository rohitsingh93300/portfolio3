import React from 'react'
import Navbar from './Navbar'

const Blog = () => {
  return (
    <div className='rounded-xl bg-gray-600 m-7 flex-1 p-7'>
    <Navbar/>
    <div>
      <h1 className='text-white font-bold text-3xl mb-2'>Blog Me</h1>
      <hr className='border-2 text-yellow-500 w-10'/>
    </div>
  </div>
  )
}

export default Blog
