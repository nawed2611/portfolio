import React, { Suspense } from "react";
import Spline from '@splinetool/react-spline';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";

export default function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Footer />
    </Suspense>
  );
}
