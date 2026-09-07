import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-20 bg-[#111f6e98] px-8 py-5 text-white shadow-md'>

      <NavLink
        className={({ isActive }) =>
          `relative py-2 text-xl font-medium transition duration-200 ${
            isActive
              ? 'text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-400'
              : 'text-gray-300 hover:text-blue-400'
          }`
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `relative py-2 text-xl font-medium transition duration-200 ${
            isActive
              ? 'text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-blue-400'
              : 'text-gray-300 hover:text-blue-400'
          }`
        }
        to="/pastes"
      >
        Pastes
      </NavLink>

    </div>
  )
}

export default Navbar