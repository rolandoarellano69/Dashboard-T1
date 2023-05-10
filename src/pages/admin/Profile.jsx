import React from 'react'
import { RiEdit2Line } from "react-icons/ri";

const Profile = () => {
  return (
    <div className='bg-secondary-100 rounded-xl p-8'>
      <h1 className='text-xl text-gray-100'>Perfil</h1>
      <hr className='my-8 border-gray-500' />

      <form>
        <div className='flex items-center mb-8 '>
          <div className='w-1/4'>
            <p>Avatar</p>
          </div>
          <div className='flex-1'>
            <div className='relative mb-2'>
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" alt="" className='h-28 w-28 object-cover rounded-lg' />
              <label htmlFor="avatar" className='absolute bg-primary p-2 rounded-full hover:cursor-pointer -top-4 left-24'> <RiEdit2Line className='text-gray-300' /> </label>
              <input type="file" id='avatar' className='hidden' />

            </div>
            <p className='text-gray-500 text-sm '> Tipo de archivos permitidos: png, jpg, jpeg.</p>
          </div>
        </div>

        <div className='flex items-center mb-8'>
          <div className='w-1/4'>
            <p className='text-sm'>Nombre completo: <span className='text-red-500'>*</span></p>
          </div>
          <div className='flex-1 flex items-center gap-4'>
            <div className='w-full'>
            <input type="text" className='w-full py-2 px-4 rounded-xl bg-secondary-900 outline-none focus:border focus:border-primary' placeholder='Nombre(s)' />
            </div>
            <div className='w-full'>
            <input type="text" className='w-full py-2 px-4 rounded-xl bg-secondary-900 outline-none focus:border focus:border-primary' placeholder='Apellido(s)' />
            </div>
          </div>
          <div className='flex-1'>
          </div>
        </div>
        
        <div className='flex items-center'>
          <div className='w-1/4'>
            <p className='text-sm'>Empresa: <span className='text-red-500'>*</span></p>
          </div>
          <div className='flex-1 flex items-center gap-4'>
            <div className='w-full'>
            <input type="text" className='w-full py-2 px-4 rounded-xl bg-secondary-900 outline-none focus:border focus:border-primary' placeholder='Nombre(s)' />
            </div>
            <div className='w-full'>
            <input type="text" className='w-full py-2 px-4 rounded-xl bg-secondary-900 outline-none focus:border focus:border-primary' placeholder='Apellido(s)' />
            </div>
          </div>
          <div className='flex-1'>
          </div>
        </div>
      </form>
    </div >
  )
}

export default Profile