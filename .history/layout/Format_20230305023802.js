import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';

export default function Format({ children }) {
  return (
    <>
     {/* <Head>Portfolio</Head> */}
     <Header/>
        <main className="main">
            {children}
        </main>
     <Footer />
    <ScrollUp/> 
    </>
  )
}
