import React from 'react'
import './navigator.css'
import Item from './Item'
import { TiShoppingCart } from 'react-icons/ti';
import { BsTable, BsPeopleFill } from 'react-icons/bs';
import { HiDocumentReport } from 'react-icons/hi';
import Icon from '../../components/Icon/Icon';

const menuOptions = [
    { to: '/', label: 'Dashboard', extendedClass: 'icon-color-blue', icon: <Icon img={<HiDocumentReport fontSize="1.4em" />} extendedClass='icon-color-blue' /> },
    { to: '/Purchases', label: 'Compras', extendedClass: 'icon-color-orange', icon: <Icon img={<TiShoppingCart fontSize="1.4em" />} extendedClass='icon-color-orange' /> },
    { to: '/Products', label: 'Produtos', extendedClass: 'icon-color-green', icon: <Icon img={<BsTable />} extendedClass='icon-color-green' /> },
    { to: '/Clients', label: 'Clients', extendedClass: 'icon-color-purple', icon: <Icon img={<BsPeopleFill />} extendedClass='icon-color-purple' /> }]

const screenTransitionDown = {
    initial: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, -60vh)' },
    animate: { opacity: 1, overflow: 'hidden', transform: 'translate(0px, 0px)' },
    exit: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, 60vh)' },
}
const screenTransitionUp = {
    exit: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, -60vh)' },
    animate: { opacity: 1, overflow: 'hidden', transform: 'translate(0px, 0px)' },
    initial: { opacity: 0, overflow: 'hidden', transform: 'translate(0px, 60vh)' },
}



export default function Navigator({ setCurrMenuIndex }) {

    var lastMenuIndex;

    function handleNavigator(MenuIndex) {
        console.log('curr: ' + MenuIndex)
        console.log('last: ' + lastMenuIndex)
        
        if(lastMenuIndex != MenuIndex && MenuIndex != "undefined"){

            if (lastMenuIndex > MenuIndex) {
                setCurrMenuIndex(screenTransitionDown);
            } else {
                setCurrMenuIndex(screenTransitionUp);
            }
            lastMenuIndex = MenuIndex;
        }
    }

    const options = menuOptions.map(

        function option(item, index) {
            return (
                <div onClick={() => handleNavigator(index)}>
                    <Item
                        to={item.to}
                        label={item.label}
                        icon={item.icon}
                    />
                </div>
            )
        }
    )

    return (
        <div className='navigator'>
            <div className='card'>

                <div className='navigator-header'>
                    Meu Sistema
                </div>

                <div className='navigator-separator' />
                <div className='navigator-body'>

                    {options}

                </div>

            </div>
        </div>
    )
}
