import React, { useState } from "react";
import { Link } from "react-router-dom";
//icons
import { RiMailFill, RiLockFill, RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-3xl uppercase font-bold text-center text-white mb-8 tracking-[5px] ">Iniciar<span className="text-primary "> sesión</span></h1>

      <form className="mb-4" >
        <button className="flex items-center gap-4 bg-secondary-900 w-full text-center justify-center rounded-xl px-4 py-3  mb-8"> <img src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png.png" className="h-4 w-4" alt="Icon google" /> Ingresar con google</button>
        <div className="relative mb-4">

          <RiMailFill className="text-gray-200 absolute top-1/2 -translate-y-1/2 left-2" />
          <input type="email" className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Correo Electrónico" />
        </div>

        <div className="relative mb-4">
          <RiLockFill className="text-gray-200 absolute top-1/2 -translate-y-1/2 left-2" />
          <input type={showPassword ? "text" : "password"} className="py-3  px-8  bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Contraseña" />

          {showPassword ? (

            <RiEyeFill onClick={() => setShowPassword(!showPassword)} className="text-gray-200 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          ) : (
            <RiEyeCloseFill onClick={() => setShowPassword(!showPassword)} className="text-gray-200 absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer" />
          )}
        </div>

        <div>
          <button type="submit" className="bg-secondary-900 text-gray-200 hover:bg-primary w-full rounded-lg py-3 font-bold text-sm uppercase  px-4  mb-4"> Ingresar</button>
        </div>
      </form>

      <div className="flex flex-col gap-4 items-center text-gray-100">
        <Link to="/auth/registro" className=" hover:text-emerald-500 transition-colors  text-xs text-gray-200 ">¿Olvidastes tu contraseña? </Link>
        <span className=" flex items-center gap-2 text-xs">
          ¿No tienes cuenta? <Link to="/auth/registro" className="text-emerald-500 hover:text-gray-100 transition-colors text-xs"> Registrate </Link>
        </span>

      </div>
    </div>
  )
}

export default Login