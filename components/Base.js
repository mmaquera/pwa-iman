
import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'

const Base = ({children}) => {
  return (
      <div className="h-screen font-rubik">
        <Head>
          <title>Los Imanes De Tu Refri</title>
          <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
        </Head>
        <Nav />
        {children}
      </div>
    )
}

export default Base