import React from 'react'
import './icon.css'

export default function Icon(props) {
  return (
    <div className={'icon ' + props.extendedClass} >
        {props.img}
    </div>
  )
}
