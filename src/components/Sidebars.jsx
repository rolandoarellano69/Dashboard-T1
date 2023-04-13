import React from 'react'
import { Link } from 'react-router-dom'
//icons
import { RiBarChartFill, RiEarthFill, RiMessage2Fill, RiCalendarTodoFill, RiLogoutCircleRLine } from 'react-icons/ri'

const Sidebars = () => {
  return (
    <div className='xl:h-[100vh] bg-secondary-100 xl:static  overflow-y-scroll fixed w-full -left-full top-0 h-full p-8 flex flex-col justify-between'>
      <div>
        <h1 className='text-center text-2xl font-bold mb-10 text-gray-300'>Admin<span className='text-primary text-4xl'>.</span>
        </h1>

        <ul>
          <li>
            <Link to="/admin/users " className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'><RiBarChartFill className='text-primary' />Analíticas</Link>
          </li>
          <li>
            <Link to="/admin/users " className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'><RiEarthFill className='text-primary' />Red sociales</Link>

            {/* submenu           */}
            <ul className='mt-4 text-xs'>
              <li>
                <Link to="/" className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2 before:border-2 before:border-secondary-100'>Post Red Social</Link>
              </li>
              <li>
                <Link to="/" className='py-2 px-4 border-l border-gray-500 ml-6 block  '>Estadisticas</Link>
              </li>
              <li>
                <Link to="/" className='py-2 px-4 border-l border-gray-500 ml-6 block'>Perfiles</Link>
              </li>
            </ul>

          </li>

      
          {/* submenu */}
          <li>
            <Link to="/admin/users " className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'><RiMessage2Fill className='text-primary' />Mensajes</Link>
          </li>
          <li>
            <Link to="/admin/users " className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'><RiCalendarTodoFill className='text-primary' />Calendario</Link>
          </li>


        </ul>
      </div>
      <nav className=' text-mb '>
        <Link to="/admin/users " className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'><RiLogoutCircleRLine className='text-primary' />Cerrar sesión</Link>
      </nav>
    </div >
  )
}

export default Sidebars