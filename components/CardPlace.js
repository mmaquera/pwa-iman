import React from "react";

const CardPlace = () => {
  return (
    <div className="w-208px bg-app-100 rounded-8px shadow-place m-16px inline-block">
      <div
        className="w-full h-80px relative rounded-t-8px"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(" + `${require("../img/food_background.png?url")}` + ")",
        }}
      >
        <img
          className="h-64px w-64px absolute mb-8px ml-8px bottom-0"
          src={require("../public/food_image.png?url")}
        />
      </div>
      <div className="p-8px">
        <div className="text-12px text-app-500">
          <label className="font-bold">Píkalo </label>
          <label>
            · S/37.90 · Mega Fiesta S/79.90 · Para Compartir S/41.90
          </label>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-12px font-bold flex">Surco + 6</label>
          <div className="flex">
            <div className=" inline-block border border-app-500 rounded-full p-6px">
              <img
                className="h-12px w-12px"
                src={require("../img/icon-phone-call.svg?url")}
              />
            </div>
            <div className=" inline-block border border-app-500 rounded-full p-6px">
              <img
                className="h-12px w-12px"
                src={require("../img/icon_facebook-messenger.svg?url")}
              />
            </div>
            <div className=" inline-block border border-app-500 rounded-full p-6px">
              <img
                className="h-12px w-12px"
                src={require("../img/icon_whatsapp.svg?url")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlace;
