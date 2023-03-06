import React from 'react';
import Layout from "../components/Layout.js";
// import Loader from "../components/Loader";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* SEO */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="أحجز دروسك" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:locale:alternate" content="ar_AR" />
        <meta property="og:url" content="https://ahgez.vercel.app" />
        <meta property="og:title" content="منصة أحجز دروسك للطلاب و المعلمين" />
        <meta
          property="og:description"
          content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta itemProp="name" content="منصة أحجز دروسك للطلاب و المعلمين" />
        <meta itemProp="url" content="https://ahgez.vercel.app" />
        <meta itemProp="author" content="أحجز" />
        <meta itemProp="image" content="/images/logo.png" />
        <meta
          itemProp="description"
          content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
        />
        <meta name="twitter:image" content="/images/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@alieldeba" />
        <meta name="twitter:creator" content="@alieldeba" />
        <meta
          name="twitter:title"
          content="منصة أحجز دروسك للطلاب و المعلمين"
        />
        <meta name="twitter:image:src" content="/images/logo.png" />
        <meta
          name="twitter:description"
          content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
        />
        <meta
          name="description"
          content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
        />
        <link
          rel="icon"
          href="https://mj-gallery.com/55d364e9-c8aa-4f7a-82f9-27874e33cb31/grid_0.png"
        />
        <title>منصة احجز دروسك للطلاب و المعلمين</title>
      </Head>
      {/* <React.Suspense fallback={<Loader/>}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </React.Suspense> */}
    </>
  );
}

export default MyApp;
