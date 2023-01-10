import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Dashboard, ManageClients, Products, ManagePurchases, NotFound, Layout } from '../../pages'
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes(props) {

    const location = useLocation();

    return (
        <div>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname} >
                    <Route path='/' element={<Layout currMenuIndex={props.currMenuIndex}/>} >
                        <Route index element={<Dashboard />} />
                        <Route path='/Clients' element={<ManageClients />} />
                        <Route path='/Products' element={<Products />} />
                        <Route path='/Purchases' element={<ManagePurchases />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </div>

    )
}
