import React from 'react'
import './info-card.css'
import { FaDollyFlatbed } from 'react-icons/fa'
import Icon from '../Icon/Icon'

export default function InfoCard() {
  return (
    <div className='card'>
      <div className='info-card'>
        <div>
          <div>Compras feitas hoje</div> 
          <div>249 items</div>
          <div>346 kg totais</div>
        </div>
        <div>
          <Icon img={<FaDollyFlatbed fontSize='1.2em'/>} extendedClass='icon-color-purple icon-circle icon-huge'></Icon>
        </div>
      </div>
    </div>

  )
}
