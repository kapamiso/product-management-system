import React from 'react'
import './responsive-columns.css'

export default function ResponsiveColumns(props){
    return(
        <div className='responsive-column' style={{gap: props.gap}}>
                {props.children}
        </div>
    )
}


