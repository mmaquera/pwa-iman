import React from "react";

const CardPlace = ({
  name,
  logo,
  backgroundImage,
  description,
  district,
  phone,
  facebook,
  whatsapp,
}) => {
  return (
    <div className="w-208px bg-app-100 rounded-8px shadow-place m-16px inline-block">
      <div
        className="w-full h-80px relative rounded-t-8px"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backgroundImage || ""})`,
          backgroundSize: "cover",
        }}
      >
        <img
          className="h-64px w-64px absolute mb-8px ml-8px bottom-0"
          src={logo}
        />
      </div>
      <div className="p-8px">
        <div className="text-12px text-app-500">
          <label className="font-bold">{name} </label>
          <label>{description}</label>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-12px font-bold flex">{district}</label>
          <div className="flex">
            {phone != "" ? (
              <div className=" inline-block border border-app-500 rounded-full p-6px">
                <img
                  className="h-12px w-12px"
                  src={require("../img/icon-phone-call.svg?url")}
                />
              </div>
            ) : null}
            {facebook != "" ? (
              <div className=" inline-block border border-app-500 rounded-full p-6px">
                <img
                  className="h-12px w-12px"
                  src={require("../img/icon_facebook-messenger.svg?url")}
                />
              </div>
            ) : null}
            {whatsapp != "" ? (
              <div className=" inline-block border border-app-500 rounded-full p-6px">
                <img
                  className="h-12px w-12px"
                  src={require("../img/icon_whatsapp.svg?url")}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlace;
