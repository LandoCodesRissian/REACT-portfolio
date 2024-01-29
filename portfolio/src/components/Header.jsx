import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Header({ navigateTo }) {
    const [toggle, setToggle] = useState(false);
    const menuList = [
        { id: 1, title: 'Home', view: 'Hero' }, // hero is the default/homescreen
        { id: 2, title: 'About Me', view: 'AboutMe' },
        { id: 3, title: 'Portfolio', view: 'Portfolio' },
        { id: 4, title: 'Contact', view: 'Contact' },
    ];

    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='text-[25px] font-bold text-white'>Landon
                    <span className='text-purple-500'> Peterson</span>
                </h2>
            </div>
            <div className='hidden md:flex gap-4'>
                {menuList.map((item, index) => (
                    <div key={index} onClick={() => navigateTo(item.view)} className='text-white hover:border-[1px] border-purple-500 rounded-full text-[20px] px-3 py-1 cursor-pointer'>
                        {item.title}
                    </div>
                ))}
            </div>
            <div className='md:hidden'>
                {!toggle ? 
                    <HiMenuAlt4 onClick={() => setToggle(true)} className='text-white text-[22px]' />
                    : <HiX onClick={() => setToggle(false)} className='text-white text-[22px]' />}
                {toggle && <MenuOverlay navigateTo={navigateTo} menuList={menuList} setToggle={setToggle} />}
            </div>
        </div>
    );
}

export default Header;
