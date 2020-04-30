import React from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Base = ({ children }) => {
  return (
    <div className="h-screen font-rubik">
      <Head></Head>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
