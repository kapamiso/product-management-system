import { BrowserRouter } from 'react-router-dom'
import { LayoutMain } from './containers';
import AnimatedRoutes from './containers/AnimatedRoutes/AnimatedRoutes';
import { motion } from 'framer-motion'
import {useState} from 'react'

export default function App() {


  //currMenuIndex to animate the menu on AnimatedRoutes
  const [currMenuIndex, setCurrMenuIndex] = useState();

  return (
    <BrowserRouter>
      <LayoutMain setCurrMenuIndex={setCurrMenuIndex}>
          <AnimatedRoutes currMenuIndex={currMenuIndex}/>
      </LayoutMain>
    </BrowserRouter>
  );
}


