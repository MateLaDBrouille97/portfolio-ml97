import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function Format({ children }) {
  return (
    <>
     <Head>Portfolio</Head>
     <Header/>
          <main className="main">{children}</main>
    <Footer />
    </>
  )
}
