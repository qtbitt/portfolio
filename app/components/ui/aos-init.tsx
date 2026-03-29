"use client";

import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true, // animate only the first time
      offset: 60, // px before element enters viewport
    });
  }, []);

  return null;
}
