import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";

const Home: NextPage = () => {
  return (
    <>
      <NavbarComp />
      <div className={styles.container}>
        <Head>
          <title>Bulbbot - The Discord Bot</title>
          <meta name="description" content="Bulbbot - The Discord Bot " />
          <meta name="theme-color" content="#ffc300" />
          <link rel="icon" href="/favicon.ico" />

          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <Homepage />
        <Footer />
      </div>
    </>
  );
};

export default Home;
