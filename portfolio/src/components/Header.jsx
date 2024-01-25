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
    <div>
    <div>
        <h2 className='text-[25px] font-bold text-white'>Landon
            <span className='text-red-500'> Peterson</span>
        </h2>
    </div>
    <div>
        {menuList.map((item) => (
            <div>
                <h2 className='text-white'>{item.title}</h2>
            </div>
        ))}
    </div>
</div>
);
}

export default Header