// src/pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { gsap } from "gsap";
import "@/styles/global.css";

// Import GSAP plugins si nécessaire
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Enregistrement des plugins GSAP (si nécessaire)
    // gsap.registerPlugin(ScrollTrigger);

    // Configuration globale de GSAP
    gsap.config({
      nullTargetWarn: false,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
