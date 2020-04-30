import React from "react";
import CardPlace from "../components/CardPlace";

const Information = () => {
  const districts = [
    { name: "Ancón", select: true },
    { name: "Ate", select: false },
    { name: "Breña", select: false },
    { name: "Barranco", select: false },
    { name: "Callao", select: false },
    { name: "Carabayllo", select: false },
    { name: "Cercado de Lima", select: false },
    { name: "Chorrillos", select: false },
    { name: "Ancón", select: false },
    { name: "Ate", select: false },
    { name: "Breña", select: false },
    { name: "Barranco", select: false },
    { name: "Callao", select: false },
    { name: "Carabayllo", select: false },
    { name: "Cercado de Lima", select: false },
    { name: "Chorrillos", select: false },
    { name: "+ Ver más", select: false },
  ];

  const categories = [
    { name: "Cevichería", select: false },
    { name: "Chifa", select: false },
    { name: "Menú", select: true },
    { name: "Pollería", select: false },
    { name: "Pollería", select: false },
    { name: "Sanguchería", select: false },
    { name: "Pollo Broaster", select: false },
    { name: "Comida Criolla", select: false },
    { name: "Comida Internacional", select: false },
    { name: "Postres", select: false },
    { name: "Jugos", select: false },
    { name: "Makis", select: false },
    { name: "Pizza", select: false },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-48px px-3 pb-95px">
      <section>
        <article>
          <label className="font-bold text-2xl text-app-500">
            Nuevos imanes para tu refri
          </label>
          <div className="pt-24px">
            <CardPlace />
            <CardPlace />
            <CardPlace />
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
              {districts.map((district, index) => (
                <button
                  key={index}
                  className={
                    district.select
                      ? "bg-app-300 py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
                      : "py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
                  }
                >
                  {district.name}
                </button>
              ))}
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
                <button
                  key={index}
                  className={
                    category.select
                      ? "bg-app-300 py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
                      : "py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px"
                  }
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="mt-32px">
              <button className="bg-app-300 py-10px px-16px rounded-20px text-app-500 border border-app-300 inline-block mx-4px my-4px">
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
