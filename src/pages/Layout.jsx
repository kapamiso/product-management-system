import React, {useState} from 'react'
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion'

export default function Layout(props) {

    return (
        <div>
            <motion.div
                variants={props.currMenuIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: '0.3' }}
            >
                <Outlet />

            </motion.div>
        </div >
    )
}
