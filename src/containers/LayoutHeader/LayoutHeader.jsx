import React from 'react'
import './layout-header.css'
import Icon from '../../components/Icon/Icon'
import { FaUser } from 'react-icons/fa';

export default function LayoutHeader(props){
    return (
        <div className='layout-header'>
            <Icon img={<FaUser/>} extendedClass='icon-circle'/>
            {props.children}
        </div>
    )
}