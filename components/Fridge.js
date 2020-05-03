import React from "react";
import Handle from "../components/Handle";
import CardPlace from "../components/CardPlace";
import CardRegister from "../components/CardRegister";

const Fridge = () => {
  return (
    <div className="relative bg-app-100 h-628px mx-auto mt-10 rounded-t-fridge shadow-fridge max-w-6xl">
      <Handle />
      <div className="absolute bg-gray99 bottom-0 h-4px mb-4px shadow-handle w-full"></div>
      <div className="w-full h-full p-48px">
        <CardPlace />
        <CardPlace />
        <CardPlace />
        <CardRegister />
      </div>
    </div>
  );
};

export default Fridge;
