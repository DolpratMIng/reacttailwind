import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between bg-indigo-900 bg-black text-slate-50 h-16'>
        <div className='flex items-center ml-4 text-[20px]'>Company Name</div>

        <div>
          <ul className='flex pr-[1.2rem] items-center h-full space-x-6'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
