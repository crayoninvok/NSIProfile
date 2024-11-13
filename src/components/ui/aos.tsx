"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, ReactNode, useEffect } from "react";
import { useRouter } from "next/router";

const AOSProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animations happen only once
      offset: 120, // Offset (in px) from the original trigger point
    });

    const handleRouteChange = () => {
      Aos.refresh();
    };

    // Refresh AOS on route change
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
