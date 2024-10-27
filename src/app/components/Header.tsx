
import React from 'react'

const Header = () => {
  return (
      <header className="bg-blue-600 text-white py-4" >
         <nav className="container mx-auto flex justify-between items-center" >
            <h1 className="text-2xl font-bold">My Landing Page</h1>
            <ul className='flex space-x-4'>
                <li className='hover: underline'><a href='/about'>About us</a></li>
                <li className='hover: underline'><a href="/portfolio">Portfolio</a></li>
            </ul>
         </nav>

      </header>
    
  )
}

export default Header
