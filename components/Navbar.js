import React from 'react'

const Navbar = () => {
  return (
      <nav className='flex justify-between items-center py-6'>
          <p className="text-2xl font-bold text-gray-800">My Todos</p>
          <div className="flex">
              <a href="/api/logout" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Logout</a>
              <a href="/api/login" className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Login</a>
          </div>
    </nav>
  )
}

export default Navbar