import React from 'react'

function Header() {
    const menuList= [
        {
            id:1,
            title:'Home'
        },
        {
            id:1,
            title:'About'
        },
        {
            id:1,
            title:'Service'
        },
        {
            id:1,
            title:'Portfolio'
        },
        {
            id:1,
            title:'Contact'
        }
    ]
  return (
    <div className='flex items- justify-between'>
    <div>
        <h2 className='text-[25px] font-bold text-white'>Landon
            <span className='text-purple-500'> Peterson</span></h2>
    </div>
    <div className='flex gap-4'>
        {menuList.map((item) => (
            <div>
                <h2 className='text-white 
                hover:border-[1px] border-purple-500 rounded-full
                text-[20px] px-3 py-1 cursor-pointer'>{item.title}</h2>
            </div>
        ))}
        <h2 className='text-white 
                hover:border-[1px] border-purple-500 rounded-full
                text-[20px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-purple-500 to-purple-800'>Give me a job!</h2>
    </div>
</div>
);
}

export default Header