import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Register = () => {
  return (
    <div className="h-screen font-rubik">
      <Head>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      </Head>
      <Nav />
      <iframe
        className="airtable-embed airtable-embed pt-20 px-3"
        src="https://airtable.com/embed/shrYN5ggu1FlDQwGG?backgroundColor=blue"
        width="100%"
        height="1747"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
      <Footer />
    </div>
  );
};

export default Register;
