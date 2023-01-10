import React from 'react'
import './layout-navigator.css'
import Navigator from '../Navigator/Navigator'

export default function LayoutNavigator(props){
    return (
        <div className='layout-navigator phone-hide'>
            {props.children}
        </div>
    )
}