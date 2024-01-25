import { useState } from 'react'
import './App.css'
import Header  from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-tr from-[#301934]
    via-[#120B2E] to-[black] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
