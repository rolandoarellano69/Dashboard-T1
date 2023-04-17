import React, {useState} from 'react'
import { Link } from 'react-router-dom'
//icons
import { RiBarChartFill, RiEarthFill, RiMenu3Line, RiMessage2Fill, RiCalendarTodoFill, RiLogoutCircleRLine, RiCloseLine, RiArrowRightSLine } from 'react-icons/ri'


const Sidebars = () => {
  const [showMenu, setShowMenu]= useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  return (
  <>
    <div className={`xl:h-[100vh] bg-secondary-100 xl:static overflow-y-scroll fixed w-[80%] lg:w-auto md:w-[40%] top-0 h-full p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" :"-left-full" } transition-all duration-500`}>
      <div>
        <h1 className='text-center text-2xl font-bold mb-10 text-gray-300'>Admin<span className='text-primary text-4xl'>.</span>
        </h1>

        <ul>
          <li>
            <Link to="/admin/users " className=' flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>


              <RiBarChartFill className='text-primary' />Analíticas</Link>
          </li>
          <li>
            <button onClick={() => setShowSubMenu(!showSubMenu) } to="/admin/users " className=' w-full flex items-center justify-between gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
              <span className='flex items-center gap-4'>
                <RiEarthFill className="text-primary"  />Red sociales
              </span>
              <RiArrowRightSLine className={`${showSubMenu &&"rotate-90"} transition-all duration-200 ease-in-out`}/>
            </button>

            {/* submenu           */}
            <ul className={` text-xs ${!showSubMenu ? "h-[110px]"  :"h-0"} overflow-y-hidden transition-all`}>
              <li>
                <Link to="/" className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.4px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>Post Red Social</Link>
              </li>

              <li>
                <Link to="/" className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.4px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>Estadisticas</Link>
              </li>
              <li>
                <Link to="/" className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.4px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>Perfiles</Link>
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

    <button onClick={() => setShowMenu (!showMenu)} className='xl:hidden fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full z-50'>
      {showMenu ? <RiCloseLine /> : <RiMenu3Line className='text-white '/>}
     
    </button>
  </>
  )
}

export default Sidebars