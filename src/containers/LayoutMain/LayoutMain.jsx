import React, { useEffect, useState } from 'react'
import './layout-main.css'
import Navigator from '../Navigator/Navigator'
import LayoutNavigator from '../LayoutNavigator/LayoutNavigator'
import LayoutHeader from '../LayoutHeader/LayoutHeader'


export default function LayoutMain({children, setCurrMenuIndex}) {


    return (

        <div>
            <div className='backpage'></div>
            <div style={{ display: 'flex', height: '100%' }}>
                
                <LayoutNavigator>
                    <Navigator setCurrMenuIndex={setCurrMenuIndex}/>
                </LayoutNavigator>

                <div className='layout-main'>
                    <LayoutHeader />
                    <div>
                        <div className='layout-content'>
                           {children}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}