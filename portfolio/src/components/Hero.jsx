import React, { useState, useEffect } from 'react';
import profilePic from '../assets/meInDen.jpg';
import AboutMe from './AboutMe';
import Contact from './Contact';

function Hero({ currentView, navigateTo }) {
  // Use the useEffect hook to update the component when currentView changes
  useEffect(() => {
    // Handle any necessary actions when currentView changes
  }, [currentView]);

  let ComponentToRender;
  switch (currentView) {
    case 'AboutMe':
      ComponentToRender = <AboutMe />;
      break;
    case 'Contact':
      ComponentToRender = <Contact />;
      break;
    default:
      ComponentToRender = (
        <div>
          <p className='text-white text-[16px]'>Hello! Welcome to my site!</p>
          <p className='text-white text-[35px] font-bold'>My name is Landon Peterson</p>
          <p className='text-purple-500 text-[35px] font-bold'>I am a Student</p>
          <p className='text-white text-[35px] font-bold'>excited to become a Full-Stack Developer</p>
          <div className='mt-4 flex gap-4'>
            <button
              onClick={() => navigateTo('Portfolio')}
              className='text-white text-[12px] px-3 pb-2 py-2 bg-purple-500 rounded-full hover:border-[2px] hover:border-white'
            >
              SEE MY PORTFOLIO!
            </button>
            <button
              onClick={() => navigateTo('Contact')}
              className='text-white text-[12px] px-3 pb-2 py-2 bg-purple-500 rounded-full hover:border-[2px] hover:border-white'
            >
              CONTACT ME!
            </button>
          </div>
        </div>
      );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='mb-10'>{ComponentToRender}</div>
      <div className='flex justify-center '>
        <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-purple-500 to-black'>
          <img src={profilePic} className='h-full w-[250px] obj-cover rounded-[20px]' alt='Profile' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
