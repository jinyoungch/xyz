import React from "react";
import Head from "next/head";
import "./style.css";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <article>
        <h1>Jack Leslie</h1>
        <p>
          Final year Computer Science student at the University of St Andrews,
          Frontend developer and JavaScript enthusiast.
        </p>
        <p>
          I was an intern at{" "}
          <a href="https://transferwise.com" target="_blank">
            TransferWise
          </a>{" "}
          and will be returning as a graduate Fullstack developer.
        </p>
      </article>
    </main>
  </div>
);

export default Home;
