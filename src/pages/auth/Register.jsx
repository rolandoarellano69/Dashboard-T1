import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//iconos
import { RiUserLine, RiMailLine, RiLockFill, RiEyeFill, RiEyeCloseFill, RiLockLine } from "react-icons/ri";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
    <h1 className="text-3xl uppercase font-bold text-center text-white mb-8 tracking-[5px] ">Crear
      <span className="text-primary "> cuenta</span></h1>


    <form className="mb-4" >
      <button className="flex items-center gap-4 bg-secondary-900 w-full text-center justify-center rounded-xl px-4 py-3  mb-8"> <img src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png" className="h-4 w-4" alt="Icon google" /> Registrate con Google</button>
      <div className="relative mb-4">

        <RiUserLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />

        <input type="text" className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Nombre(s)" />
      </div>
      {/* apellidos */}
      <div className="relative mb-4">

        <RiUserLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />

        <input type="text" className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Apellidos" />
      </div>
      <div className="relative mb-4">
        {/* corre */}
        <RiMailLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
        <input type="email" className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Correo Electrónico" />
      </div>
      {/* contraseña */}
      <div className="relative mb-4">
        <RiLockLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
        <input type={showPassword ? "text" : "password"} className="py-3  px-8  bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Contraseña" />

        {showPassword ? (

          <RiEyeFill onClick={() => setShowPassword(!showPassword)} className="text-primary absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
        ) : (
          <RiEyeCloseFill onClick={() => setShowPassword(!showPassword)} className="text-gray-200 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
        )}
      </div>
      {/* confirmacion de contraseña */}
      <div className="relative mb-8">
        <RiLockLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
        <input type={showPassword ? "text" : "password"} className="py-3  px-8  bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Confirmar contraseña" />

        {showPassword ? (

          <RiEyeFill onClick={() => setShowPassword(!showPassword)} className="text-primary absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
        ) : (
          <RiEyeCloseFill onClick={() => setShowPassword(!showPassword)} className="text-gray-200 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
        )}
      </div>

      <div>
        <button type="submit" className="bg-secondary-900 text-gray-200 hover:bg-primary w-full rounded-lg py-3 font-bold text-sm uppercase  px-4  mb-4"> Registrarme</button>
      </div>
    </form>

    <div className="flex flex-col gap-4 items-center text-gray-100">
      <Link to="/auth/registro" className=" hover:text-emerald-500 transition-colors  text-[10px] text-gray-200 ">Al dar registrarte acetaras los <span className='text-primary'> termino y condiciones</span> como asi las <span className='text-primary'>politicas de privacidad </span></Link>
      <span className=" flex items-center gap-2 text-xs">
        ¿Ya tienes cuenta? <Link to="/auth/" className="text-emerald-500 hover:text-gray-100 transition-colors text-xs"> Ingresa </Link>
      </span>
    </div>
  </div>
};

export default Register