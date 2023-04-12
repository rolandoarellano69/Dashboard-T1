import React from "react";
import { Link } from "react-router-dom";
//icons
import { RiMailLine } from "react-icons/ri";

const ForgetPassword = () => {

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-3xl uppercase font-bold text-center text-white mb-8 tracking-[5px] ">Recuperar<span className="text-primary "> Contraseña </span></h1>

      <form className="mb-4" >

        <div className="relative mb-8">

          <RiMailLine className="text-primary absolute top-1/2 -translate-y-1/2 left-2" />
          <input type="email" className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary " placeholder="Correo Electrónico" />
        </div>


        <div>
          <button type="submit" className="bg-secondary-900 text-gray-200 hover:bg-primary w-full rounded-lg py-3 font-bold text-sm uppercase  px-4  mb-4"> Enviar</button>
        </div>
      </form>

      <div className="flex flex-col gap-4 items-center text-gray-100">
        <span className=" flex items-center gap-2 text-xs">
          ¿Ya tienes cuenta? <Link to="/auth/" className="text-emerald-500 hover:text-gray-100 transition-colors text-xs"> Ingresa </Link>
        </span>
        <span className=" flex items-center gap-2 text-xs">
          ¿No tienes cuenta? <Link to="/auth/registro" className="text-emerald-500 hover:text-gray-100 transition-colors text-xs"> Registrate </Link>
        </span>

      </div>
    </div>
  )
}

export default ForgetPassword