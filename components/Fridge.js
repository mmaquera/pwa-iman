import React from "react";
import Handle from "../components/Handle";
import CardPlace from "../components/CardPlace";
import CardRegister from "../components/CardRegister";

const Fridge = ({ restaurants }) => {
  const one = restaurants[0] || null;
  const two = restaurants[1] || null;
  const three = restaurants[2] || null;
  const four = restaurants[3] || null;
  const five = restaurants[4] || null;

  function parseRestaurant(place) {
    const name = place["Nombre del Restaurante"];
    const logo = place["Foto de Perfil"][0].url;
    const backgroundImage = ((place["Foto de Portada"] || [])[0] || {}).url;
    const description = place["Descripción"];
    const districts = place["Distritos de cobertura"] || [];
    const district =
      districts.length == 0 ? "" : districts[0] + ` + ${districts.length - 1}`;
    const phone = place["Atención por teléfono"] || "";
    const facebook = place["Facebook"] || "";
    const whatsapp = place["Atención por WhatsApp"] || "";
    return {
      name,
      logo,
      backgroundImage,
      description,
      district,
      phone,
      facebook,
      whatsapp,
    };
  }

  const CardPlaceWithInformation = ({ place }) => {
    const {
      name,
      logo,
      backgroundImage,
      description,
      district,
      phone,
      facebook,
      whatsapp,
    } = parseRestaurant(place);

    return (
      <CardPlace
        name={name}
        logo={logo}
        backgroundImage={backgroundImage}
        description={description}
        district={district}
        phone={phone}
        facebook={facebook}
        whatsapp={whatsapp}
      />
    );
  };

  return (
    <div className="relative bg-app-100 h-628px mx-auto mt-10 rounded-t-fridge shadow-fridge max-w-6xl">
      <Handle />
      <div className="absolute bg-gray99 bottom-0 h-4px mb-4px shadow-handle w-full"></div>
      <div className="w-full h-full p-48px relative">
        <div className="absolute left-20% top-5%">
          {one != null ? <CardPlaceWithInformation place={one} /> : null}
        </div>
        <div className="absolute left-45% top-5%">
          {two != null ? <CardPlaceWithInformation place={two} /> : null}
        </div>
        <div className="absolute left-30% top-40% transform rotate-2">
          {three != null ? <CardPlaceWithInformation place={three} /> : null}
        </div>
        <div className="absolute right-10% top-30%">
          <CardRegister />
        </div>
        <div className="absolute left-20% bottom-5% transform rotate-1">
          {four != null ? <CardPlaceWithInformation place={four} /> : null}
        </div>
        <div className="absolute left-55% bottom-5% transform rotate-3">
          {five != null ? <CardPlaceWithInformation place={five} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Fridge;
