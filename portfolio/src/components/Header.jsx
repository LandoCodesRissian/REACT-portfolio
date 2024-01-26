import React from 'react'
import { useState } from 'react';
import MenuOverlay  from './MenuOverlay'
import { HiMenuAlt4 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
function Header() {

    const [toggle,setToggle] =useState(false)
    const menuList= [
        {
            id:1,
            title:'Home'
        },
        {
            id:2,
            title:'About'
        },
        {
            id:3,
            title:'Fun Facts'
        },
        {
            id:4,
            title:'Portfolio'
        },
        {
            id:5,
            title:'Contact'
        }
    ]
  return (
    <div className='flex items-center justify-between'>
    <div>
        <h2 className='text-[25px] font-bold text-white'>Landon
            <span className='text-purple-500'> Peterson</span></h2>
    </div>
    <div className='hidden md:flex gap-4'>
        {menuList.map((item, index) => (
            <div key={index}>
                <h2 className='text-white 
                hover:border-[1px] border-purple-500 rounded-full
                text-[20px] px-3 py-1 cursor-pointer'>{item.title}</h2>
            </div>
        ))}
        <h2 className='text-white 
                hover:border-[1px] border-purple-500 rounded-full
                text-[20px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-purple-500 to-purple-800'>Give me a job!</h2>
    </div>
    <div className='md:hidden'>
        {!toggle? <HiMenuAlt4 onClick={()=>setToggle(!toggle)} className='text-white text-[22px]'/>
        : <HiXMark onClick={()=>setToggle(!toggle)} className='text-white text-[22px]'/>}
        {toggle?<MenuOverlay menuList={menuList} />:null}
    </div>
</div>
);
}

export default Header