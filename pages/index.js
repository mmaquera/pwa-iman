import React from "react";
import Base from "../components/Base";
import Content from "../components/Content";

const Home = ({ restaurants }) => {
  return (
    <Base>
      <Content restaurants={restaurants} />
    </Base>
  );
};

export async function getStaticProps() {
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

  const restaurants = await Promise.all(records.map((record) => record.fields));
  return { props: { restaurants } };
}

export default Home;
