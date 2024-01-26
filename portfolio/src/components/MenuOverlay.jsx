import React from 'react'

function MenuOverlay({menuList}) {
  return (
    <div>
        {menuList.map((item, index)=> (
            <h1 key={index}>{item.title}</h1>
        ))}
    </div>
  )
}

export default MenuOverlay