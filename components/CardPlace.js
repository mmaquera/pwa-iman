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
  function getContentDesciption({ name, description }) {
    const text = description || "";
    const contentDescription = `${name} ${text}`;
    let newDesciption = "";
    if (contentDescription.length >= 76) {
      newDesciption =
        text.substring(0, text.length - contentDescription.length) + "...";
    } else {
      newDesciption = description;
    }
    return <label>{newDesciption}</label>;
  }

  return (
    <div className="w-208px h-160px bg-app-100 rounded-8px shadow-place m-16px inline-block align-top">
      <div
        className="w-full h-80px relative rounded-t-8px"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backgroundImage || ""})`,
          backgroundSize: "cover",
        }}
      >
        <img
          className="object-cover rounded-full h-64px w-64px absolute m-8px"
          src={logo}
        />
      </div>
      <div className="p-6px">
        <div className="h-40px text-12px text-app-500 leading-14px">
          <label className="font-bold">{name} </label>
          {getContentDesciption({ name, description })}
        </div>
        <div className="flex justify-between items-center">
          <label className="text-12px font-bold flex">{district}</label>
          <div className="flex">
            {phone != "" ? (
              <div className=" inline-block border border-app-500 rounded-full p-6px ml-8px">
                <img
                  className="h-12px w-12px"
                  src={require("../img/icon-phone-call.svg?url")}
                />
              </div>
            ) : null}
            {facebook != "" ? (
              <div className=" inline-block border border-app-500 rounded-full p-6px ml-8px">
                <img
                  className="h-12px w-12px"
                  src={require("../img/icon_facebook-messenger.svg?url")}
                />
              </div>
            ) : null}
            {whatsapp != "" ? (
              <div className=" inline-block border border-app-500 rounded-full p-6px ml-8px">
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
