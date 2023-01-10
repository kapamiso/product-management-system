import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutMain } from "../containers";

//setup animation where screen components from the main (outlet) elements goes up or down according to menu index

const screenTransitionDown = {
    exit: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, -60vh)' },
    animate: { opacity: 1, overflow: 'hidden', transform: 'translate(0px, 0px)' },
    initial: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, 60vh)' },
}
const screenTransitionUp = {
    initial: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, -60vh)' },
    animate: { opacity: 1, overflow: 'hidden', transform: 'translate(0px, 0px)' },
    exit: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, 60vh)' },
}

var teste = 0;
var animation = screenTransitionDown;

export default function Layout(props) {


var [currMenuIndex, setCurrMenuIndex] = useState('');


if(currMenuIndex !== '' && currMenuIndex !== teste){


  if(currMenuIndex < teste){
    animation = screenTransitionUp;
  } else {
    
    animation = screenTransitionDown;
  }

  teste = currMenuIndex;
}



  return (
    <div>
      <LayoutMain setCurrMenuIndex={setCurrMenuIndex}>
        <motion.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: "0.3" }}
        >
          <Outlet />
        </motion.div>
      </LayoutMain>
    </div>
  );
}
