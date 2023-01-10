import { BrowserRouter } from "react-router-dom";
import { LayoutMain } from "./containers";
import AnimatedRoutes from "./containers/AnimatedRoutes/AnimatedRoutes";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {

  return (
    <BrowserRouter>
      <AnimatedRoutes/>
    </BrowserRouter>
  );
}
