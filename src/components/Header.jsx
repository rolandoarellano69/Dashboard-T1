import React from 'react'
import {RiArrowDownSLine, RiNotification3Line} from 'react-icons/ri'
const Header = () => {
  return (
    <header className=' h-[7vh] md:h[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-2'>
        <button className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
        <RiNotification3Line />
        <span className='absolute -top-0.5 -right-0 bg-primary py-0.5 px-[5px] content-box text-white rounded-full text-[8px] font-bold'>
          2
        </span>
        </button>

        <button className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
          <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className='w-6 h-6 object-cover rounded-full' />
          <span>
            Jennifer Valdez 
          </span>
          <RiArrowDownSLine/>
        </button>

      </nav>
    </header>
  )
}

export default Header