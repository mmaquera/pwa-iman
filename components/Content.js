import React from "react";
import Fridge from "../components/Fridge";
import Information from "../components/Information";

const Content = () => {
  return (
    <div>
      <div className="bg-app-300 pt-32 px-3">
        <div className="flex-row font-bold text-4xl text-app-500">
          <label className="flex justify-center">
            Disfruta de tu restaurante
          </label>
          <label className="flex justify-center">
            favorito, sin salir de casa
          </label>
        </div>
        <Fridge />
      </div>
      <Information />
    </div>
  );
};

export default Content;
