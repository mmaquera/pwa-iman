import React, { useState } from "react";
import CardPlace from "../components/CardPlace";
import _ from "underscore";

const Information = ({ restaurants }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [districts, setDistrict] = useState([
    { name: "Ancón", select: false },
    { name: "Ate", select: false },
    { name: "Barranco", select: false },
    { name: "Breña", select: false },
    { name: "Callao", select: false },
    { name: "Carabayllo", select: false },
    { name: "Cercado de Lima", select: false },
    { name: "Chorrillos", select: false },
    { name: "Comas", select: false },
    { name: "El Agustino", select: false },
    { name: "Independencia", select: false },
    { name: "Jesús María", select: false },
    { name: "La Molina", select: false },
    { name: "La Punta", select: false },
    { name: "La Victoria", select: false },
    { name: "Lince", select: false },
    { name: "Los Olivos", select: false },
    { name: "Lurín", select: false },
    { name: "Magdalena", select: false },
    { name: "Miraflores", select: false },
    { name: "Pueblo Libre", select: false },
    { name: "Punta Hermosa", select: false },
    { name: "Rímac", select: false },
    { name: "San Borja", select: false },
    { name: "San Isidro", select: false },
    { name: "San Juan de Lurigancho", select: false },
    { name: "San Juan de Miraflores", select: false },
    { name: "San Luis", select: false },
    { name: "San Martín de Porres", select: false },
    { name: "San Miguel", select: false },
    { name: "Santa Anita", select: false },
    { name: "Santa Rosa", select: false },
    { name: "Surco", select: false },
    { name: "Surquillo", select: false },
    { name: "Villa El Salvador", select: false },
    { name: "Villa María del Triunfo", select: false },
    { name: "Puente Piedra", select: false },
    { name: "Pachacamac", select: false },
    { name: "San Bartolo", select: false },
    { name: "Pucusana", select: false },
    { name: "Punta Negra", select: false },
    { name: "Ventanilla", select: false },
  ]);

  const [categories, setCategories] = useState([
    { name: "Cevichería / Pescados y Mariscos", select: false },
    { name: "Chifa / Comida Oriental", select: false },
    { name: "Menú", select: false },
    { name: "Pollería", select: false },
    { name: "Sanguchería", select: false },
    { name: "Brostería / Pollo frito", select: false },
    { name: "Comida Criolla", select: false },
    { name: "Comida Internacional", select: false },
    { name: "Parrillas", select: false },
    { name: "Makis", select: false },
    { name: "Pizzería", select: false },
    { name: "Juguería", select: false },
    { name: "Postres", select: false },
  ]);

  const [places, setPlaces] = useState(restaurants || []);

  const districtOnClick = (name, select, index) => {
    let newArray = [...districts];
    newArray[index] = {
      name,
      select: select ? false : true,
    };
    setDistrict(newArray);
  };

  const ButtonDistrict = ({ district, index }) => {
    const { name, select } = district;
    return (
      <button
        key={index}
        onClick={() => districtOnClick(name, select, index)}
        className={
          select
            ? "bg-app-300 py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
            : "py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
        }
      >
        {name}
      </button>
    );
  };

  const seeMoreOnClick = () => {
    setSeeMore(true);
  };

  const ButtonSeeMore = () => {
    return (
      <button
        onClick={seeMoreOnClick}
        className="py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
      >
        + Ver más
      </button>
    );
  };

  const categoryOnClick = (name, select, index) => {
    let newArray = [...categories];
    newArray[index] = {
      name,
      select: select ? false : true,
    };
    setCategories(newArray);
  };

  const ButtonCategory = ({ category, index }) => {
    const { name, select } = category;
    return (
      <button
        key={index}
        onClick={() => categoryOnClick(name, select, index)}
        className={
          select
            ? "bg-app-300 py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
            : "py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
        }
      >
        {name}
      </button>
    );
  };

  const searchOnClik = async () => {
    var Airtable = require("airtable");
    Airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: "key5KdM6DWqs7R3ss",
    });
    var base = Airtable.base("appQcYo6fDXG2i4HW");

    const records = await base("Table 1")
      .select({
        maxRecords: 999999,
        view: "Grid view",
      })
      .all();

    let restaurants = await Promise.all(records.map((record) => record.fields));

    const districtSelected = districts
      .filter((district) => district.select)
      .map((district) => district.name);
    const cateriesSelected = categories
      .filter((category) => category.select)
      .map((category) => category.name);

    let newListRestaurant = [];
    let result = [];

    if (districtSelected.length != 0) {
      for (const restaurant in restaurants) {
        const sortDistrictsOfResturant = _.sortBy(
          restaurants[restaurant]["Distritos de cobertura"]
        );
        const sortDistrict = _.sortBy(districtSelected);
        if (_.intersection(sortDistrictsOfResturant, sortDistrict).length > 0) {
          newListRestaurant.push(restaurants[restaurant]);
        }
      }
      restaurants = newListRestaurant;
    }

    if (cateriesSelected.length != 0) {
      for (const index in restaurants) {
        const heading = _.sortBy(
          restaurants[index]["¿A qué rubro pertenece tu restaurante?"]
        );
        const sortCateries = _.sortBy(cateriesSelected);

        if (_.intersection(heading, sortCateries).length > 0) {
          result.push(restaurants[index]);
        }
      }
      restaurants = result;
    }

    setPlaces(restaurants);
  };

  return (
    <div className="max-w-6xl mx-auto pt-48px px-3 pb-95px">
      <section>
        <article>
          <label className="font-bold text-2xl text-app-500">
            Nuevos imanes para tu refri
          </label>
          <div className="pt-24px">
            {places.map((place, index) => {
              const name = place["Nombre del Restaurante"];
              const logo = place["Foto de Perfil"][0].url;
              const backgroundImage = (
                (place["Foto de Portada"] || [])[0] || {}
              ).url;
              const description = place["Descripción"];
              const districts = place["Distritos de cobertura"] || [];
              const district =
                districts.length == 0
                  ? ""
                  : districts[0] + ` + ${districts.length - 1}`;
              const phone = place["Atención por teléfono"] || "";
              const facebook = place["Facebook"] || "";
              const whatsapp = place["Atención por WhatsApp"] || "";

              return (
                <CardPlace
                  key={index}
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
            })}
          </div>
        </article>
        <article className="block mt-103px">
          <label className="font-bold text-2xl text-app-500">
            Busca delivery en lima
          </label>
          <div className="mt-25px">
            <div>
              <div className="inline-block w-24px h-24px rounded-full bg-app-500 text-app-100 text-center font-bold align-middle text-base mr-8px">
                1
              </div>
              <h3 className="inline-block text-app-500 text-base">
                Selecciona un distrito
              </h3>
            </div>
            <div className="mt-16px">
              {seeMore
                ? districts.map((district, index) => (
                    <ButtonDistrict
                      key={index}
                      district={district}
                      index={index}
                    />
                  ))
                : districts
                    .filter((_, index) => index <= 7)
                    .map((district, index) => (
                      <ButtonDistrict
                        key={index}
                        index={index}
                        district={district}
                      />
                    ))}
              {seeMore ? null : <ButtonSeeMore />}
            </div>
            <div className="mt-25px">
              <div className="inline-block w-24px h-24px rounded-full bg-app-500 text-app-100 text-center font-bold align-middle text-base mr-8px">
                2
              </div>
              <h3 className="inline-block text-app-500 text-base">
                Si deseas, selecciona un rubro
              </h3>
            </div>
            <div className="mt-16px">
              {categories.map((category, index) => (
                <ButtonCategory key={index} index={index} category={category} />
              ))}
            </div>
            <div className="mt-32px">
              <button
                onClick={searchOnClik}
                className="bg-app-300 py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
              >
                Buscar delivery
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Information;
