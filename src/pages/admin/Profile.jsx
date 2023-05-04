import React from 'react'

const Profile = () => {
  return (
    <div className='bg-secondary-100 rounded-xl p-8'>
      <h1 className='text-xl text-gray-100'>Perfil</h1>
      <hr className='my-8 border-gray-500' />

      <form>
        <div className='flex items-center '>
          <div className='w-1/4'>
            <p>Avatar</p>
          </div>
          <div className='flex-1'>
            <div className='relative'>
              <img src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg" alt="" className='h-28 w-28 object-cover rounded-lg ' />
              <label htmlFor=""></label>
            </div>
          </div>
        </div>
      </form>



    </div >
  )
}

export default Profile