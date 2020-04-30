import React from "react";
import Head from "next/head";

export default ({ children }) => {
  return (
    <Head>
      <title>Los Imanes De Tu Refri</title>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik"
        rel="stylesheet"
      />
      {children}
    </Head>
  );
};
