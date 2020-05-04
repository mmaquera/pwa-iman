import React from "react";
import useBreakpoint from "../hooks/useBreakpoint";

const Footer = () => {
  const breakpoint = useBreakpoint();

  return (
    <footer className="text-app-100 bg-app-500">
      <div className="mx-auto max-w-6xl lg:w-992px">
        <div className="align-top mt-48px inline-block sm:w-2/4">
          <label className="text-xl">Sobre la iniciativa</label>
          <p className="sm:pr-40 mt-4">
            LosImanesDeTuRefri agrupa a los restaurantes que cuenten con
            servicio de delivery para que puedas disfrutar de ellos sin salir de
            casa.
          </p>
        </div>
        <div className="align-top mt-48px inline-block sm:w-1/4">
          <label className="text-xl">Secciones</label>
          <ul className="mt-4">
            <li>Delivery en Lima</li>
            <li>Delivery en Perú</li>
            <li>Buscar delivery en Lima</li>
          </ul>
        </div>
        <div className="align-top mt-48px inline-block sm:w-1/4">
          <label className="text-xl">Contáctanos</label>
          <div className="mt-2 mb-3">
            <div
              className="inline-block mr-5"
              dangerouslySetInnerHTML={{
                __html: require("../img/facebook.svg?include"),
              }}
            />
            <div
              className="inline-block"
              dangerouslySetInnerHTML={{
                __html: require("../img/instagram.svg?include"),
              }}
            />
          </div>
          <label className="block">losimanesdeturefri@gmail.com</label>
          <label className="block">+ 51 991 665 833</label>
        </div>
      </div>
      <hr className="bg-white max-w-6xl mt-63px mx-auto lg:w-992px" />
      <div className="max-w-6xl mx-auto pb-48px pt-65px lg:w-992px">
        <label className="block text-center text-xl">Muy Pronto</label>
        <div className="block py-48px text-center">
          <div
            className="inline-block mx-4"
            dangerouslySetInnerHTML={{
              __html: require("../img/apple_store.svg?include"),
            }}
          />
          <div
            className="inline-block mx-4"
            dangerouslySetInnerHTML={{
              __html: require("../img/google_play.svg?include"),
            }}
          />
        </div>
        <div className="block text-center">
          Creado por <span>&nbsp;</span>
          <label className="underline">Jorge Ramírez</label>,&nbsp;
          <label className="underline">Douglas Khan</label>&nbsp;y&nbsp;
          <label className="underline">Marco Maquera</label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
