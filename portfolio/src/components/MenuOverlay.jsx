import React from 'react'

function MenuOverlay({menuList}) {
  return (
    <div>
        {menuList.map((item)=> (
            <h1>{item.title}</h1>
        ))}
    </div>
  )
}

export default MenuOverlay