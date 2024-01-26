import React from 'react'

function MenuOverlay({menuList}) {
  return (
    <div style={{background: "", opacity:'1', height: '100vh'}}className='absolute text-center left-0 min-full bg-gradient-to-tr from-[#301934]
    via-[#120B2E] to-[black]  backdrop-blur-lg w-full mt-7'>
        {menuList.map((item, index)=> (
            <h1 key={index} className='text-white text-[24px] mb-6 justify-center mt-10
            hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>{item.title}</h1>
        ))}
    </div>
  )
}

export default MenuOverlay