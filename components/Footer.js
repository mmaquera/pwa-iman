import React from 'react'
import IconFacebook from '../img/facebook.svg'
import IconInstagram from '../img/instagram.svg'
import IconGooglePlay from '../img/google_play.svg'
import IconAppleStore from '../img/apple_store.svg'

const Footer = () => {
  return (<footer className="text-app-100 bg-app-500">
      <div className=" px-3 pt-48px mx-auto max-w-6xl">
        <div className="align-top inline-block w-2/4" >
          <label className="text-xl">Sobre la iniciativa</label>
          <p className="sm:pr-40 mt-4">
            LosImanesDeTuRefri agrupa a los restaurantes que cuenten con servicio de delivery para que puedas disfrutar de ellos sin salir de casa.
          </p>
        </div>
        <div className="align-top inline-block w-1/4">
          <label className="text-xl">
            Secciones
          </label>
          <ul className="mt-4">
            <li>
              Delivery en Lima
            </li>
            <li>
              Delivery en Perú
            </li>
            <li>
              Buscar delivery en Lima
            </li>
          </ul>
        </div>
        <div className="align-top inline-block w-1/4">
          <label className="text-xl">Contáctanos</label>
          <div className="mt-2 mb-3">
            <IconFacebook className="inline-block mr-5" />
            <IconInstagram className="inline-block" />
          </div>
          <label className="block">
            losimanesdeturefri@gmail.com
          </label>
          <label className="block">
            + 51 991 665 833
          </label>
        </div>
      </div>
      <hr className="bg-white max-w-6xl mt-63px mx-auto px-3" />
      <div className="max-w-6xl mx-auto pb-48px pt-65px px-3" >
        <label className="block text-center text-xl">
          Muy Pronto
        </label>
        <div className="block py-48px text-center">
          <IconAppleStore className="inline-block mx-4" />
          <IconGooglePlay className="inline-block mx-4"/>
        </div>
        <div className="block text-center">
          Creado por <span>&nbsp;</span>
          <label className="underline">
            Jorge Ramírez
          </label>,<span>&nbsp;</span>
          <label className="underline">
            Douglas Khan
          </label>,<span>&nbsp;</span>
          <label className="underline">
            Marco Maquera
          </label>
        </div>
      </div>
  </footer>)
}

export default Footer