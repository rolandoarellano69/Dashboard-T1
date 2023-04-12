import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebars from '../components/Sidebars'
import Header from '../components/Header'

export const LayoutAdmin = () => {
  return (
    <div className='min-h-screen grid grid-cols-1 xl:grid-cols-6 '>
      <Sidebars />
      <div className='xl:col-span-5 '>
        <Header />
        <div className='h-[90vh] overflow-y-scroll p-8'>
      
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default LayoutAdmin;
