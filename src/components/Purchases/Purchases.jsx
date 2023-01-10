import React from 'react'
import './purchases.css';
import Compras from './Compras.json'

const testes = Compras;

export default function Purchases() {
  return (
    <div>
        {testes.map(teste =>{
          return(
            <div style={{display: 'flex', gap: '50px', margin: '17px'}} className='card'>
              <div>
                {teste.id_compra}
              </div>
              <div>
                {teste.cliente_compra}
              </div>
              <div>
                {teste.compra_status}
              </div>
              <div>
                {teste.data_compra}
              </div>
            </div>
          )
        })}
    </div>

    
  )
}
