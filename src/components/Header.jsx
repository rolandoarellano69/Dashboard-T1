import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDownSLine, RiNotification3Line, RiSettings3Line, RiLogoutBoxRLine, RiThumbUpLine, RiChat1Line } from 'react-icons/ri'

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

const Header = () => {
  return (
    <header className=' h-[7vh] md:h[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-2'>

        <Menu menuButton={<MenuButton className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
          <RiNotification3Line />
          <span className='absolute -top-0.5 -right-0.1 bg-primary py-0.5 px-[5px] content-box text-white rounded-full text-[8px] font-bold'>
            2
          </span>
        </MenuButton>} arrow arrowClassName="bg-secondary-100" transition menuClassName="bg-secondary-100 text-white p-4">
          <h1 className='text-gray-300 text-center font-medium'>Notificaciones (2)</h1>

          <hr className='my-4 border-gray-500' />

          <MenuItem className="p-0 hover:bg-transparent">

            <Link to="/not" className='flex  text-gray-300  items-center py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg gap-4'>


              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className='w-8 h-8 object-cover rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4 '>
                  <span>Rolando Arellano</span><span className='text-[8px]'> 10/10/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet...</p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/not" className='flex  text-gray-300  items-center py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg gap-4'>
              <RiThumbUpLine className='bg-blue-100 p-2 text-blue-700 box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4 '>
                  <span>Nuevo Like</span><span className='text-[8px]'> 10/10/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">

            <Link to="/not" className='flex  text-gray-300  items-center py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg gap-4'>


              <RiChat1Line className='bg-green-200 p-2 text-primary box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4 '>
                  <span>Nuevo comentario</span><span className='text-[8px]'> 10/10/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>Lorem ipsum dolor sit amet...

                </p>
              </div>
            </Link>
          </MenuItem>

          <hr className='my-2 border-gray-500' />
          <MenuItem className="p-0   hover:bg-transparent justify-center cursor-default">
            <Link to="/" className='text-gray-500 hover:text-white  transition-colors text-sm  p-1 rounded-lg' >
              Todas las Notificaciones

            </Link>

          </MenuItem>

        </Menu>

        <Menu menuButton={<MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
          <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className='w-6 h-6 object-cover rounded-full' />
          <span>
            Jennifer Valdez
          </span>
          <RiArrowDownSLine />
        </MenuButton>} arrow arrowClassName="bg-secondary-100" transition menuClassName="bg-secondary-100 text-white p-4">

          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/profile" className=' rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" className='w-8 h-8 object-cover rounded-full' />
              <div className='flex flex-col gap-1 text-sm'>
                <span>Jennifer Valdez</span>
                <span className='text-[10px] text-gray-500'>Jenny@gmail.com</span>
              </div>
            </Link>
          </MenuItem>

          <hr className='my-6 border-gray-500' />

          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/configuracion" className=' text-sm rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiSettings3Line className='text-primary' />Ajustes
            </Link>
          </MenuItem>
          <MenuItem className="hover:bg-secondary-900 rounded-lg text-sm text-gray-300"><Link to="/cerrar-sesion" className='flex items-center gap-x-4'><RiLogoutBoxRLine className='text-primary' />Salir</Link></MenuItem>

        </Menu>

      </nav>
    </header>
  )
}

export default Header