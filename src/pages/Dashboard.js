import React from 'react';
import { Purchases, InfoCard } from '../components';
import { ResponsiveColumns } from '../containers';
import './pages.css'

export default function Dashboard() {

  return (

    <div>

      <ResponsiveColumns gap='15px'>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
        <InfoCard></InfoCard>
      </ResponsiveColumns>

      <ResponsiveColumns gap='20px'>
        <div className='card' style={{ height: '900px', 'margin-top': '20px', 'width': '400px', overflow: 'auto' }}>
          <Purchases />
        </div>
        <div className='card' style={{ height: '900px', 'margin-top': '20px', 'width': '400px' }} />
      </ResponsiveColumns>

    </div>
  )

}

