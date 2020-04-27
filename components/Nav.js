import React from 'react'

import Logo from '../img/cil_fridge.svg'

const Nav = () => {
  return (
      <nav className="bg-app-300 fixed px-56 py-8 w-full z-10">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="flex md:justify-start md:w-1/4 w-full">
            <div className="flex flex-1 justify-center w-full">
              <Logo />
              <div className="font-normal my-auto not-italic text-app-500 text-lg">
                <label>Los</label>
                <label className="font-bold" >Imanes</label>
                <label>DeTu</label>
                <label className="font-bold">Refri</label>
              </div>
            </div>
          </div>
          <div className="content-center flex justify-between md:justify-end md:w-3/4 w-full">
            <ul className="flex flex-1 items-center justify-between">
              <li className="font-normal leading-normal md:w-1/5 not-italic text-app-500 text-center text-sm">
                En Lima
              </li>
              <li className="font-normal leading-normal md:w-1/5 not-italic text-app-500 text-right text-sm">
                Sobre Nosotros
              </li>
              <li className="font-normal leading-normal md:w-3/5 not-italic pl-40 text-app-500 text-center text-sm">
                Para restaurantes
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav