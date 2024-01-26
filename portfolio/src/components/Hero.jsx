import React from 'react'
import profilePic from '../assets/meInDen.jpg'
function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='mb-10'>
        <p className='text-white text-[13px]'>Hello! Welcome to my portfolio!</p>
        <p className='text-white text-[35px] font-bold'>My name is Landon Peterson</p>
        <p className='text-purple-500 text-[35px] font-bold'>I am a Full-Stack Developer</p>
        <p className='text-white text-[35px] font-bold'>and Student</p>
        <div className='mt-4 flex gap-4'>
          <button className='text-white text- [12px] px-3 pb-2 py-2 bg-purple-500 rounded-full hover:border-[2px] hover:border-white'>SEE MY PORTFOLIO!</button>
          <button className='text-white text- [12px] px-3 pb-2 py-2 bg-purple-500 rounded-full hover:border-[2px] hover:border-white'>CONTACT ME!</button>
        </div>
      </div>
      <div className='flex justify-center '>
      <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-purple-500 to-black'>
        <img src={profilePic}
        className='h-full w-[250px] obj-cover rounded-[20px]'></img>
      </div>
      </div>
    </div>
  )
}

export default Hero