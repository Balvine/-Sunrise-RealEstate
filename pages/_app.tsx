import * as React from "react";
import Head from "next/head";


import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

//Components

import Header from "../src/components/Header";
import Intro from "../src/components/Intro";
import Projects from "../src/components/Projects";
import Footer from "../src/components/Footer";


//pages


const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component,emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header/>
        <Intro/>
        <Projects/>
        <Footer/>
  
   
  
        <Component {...pageProps} />
           
             </ThemeProvider>
    </CacheProvider>
  );
}

export default (MyApp);




