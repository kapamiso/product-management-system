import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

export default function item(props) {
  return (
      <Link className='item' to={props.to}>
        <div>{props.icon}</div>
        <div> {props.label}</div>
      </Link >
  )
}
