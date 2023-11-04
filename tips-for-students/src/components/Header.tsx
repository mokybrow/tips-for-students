import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-logo">
                    <Link to='/'>la pizza</Link>
                </div>
                <div className="header-menu menu">
                    <nav className="menu-body">
                        <ul className="menu-list">
                            <Link to='/pizzas' className="menu-link" reloadDocument><li className="menu-item" >Пиццы</li></Link>
                            <Link to='/desserts' className="menu-link" reloadDocument><li className="menu-item" >Десерты</li></Link>
                            <Link to='/drinks' className="menu-link" reloadDocument><li className="menu-item" >Напитки</li></Link>
                        </ul>
                    </nav>
                </div>
                <div >
                    <Link to='/backet'>Корзина</Link>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header