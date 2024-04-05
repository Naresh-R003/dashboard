import React from 'react'
import { NavLink } from 'react-router-dom'
import { FluentPersonSearch32Regular } from '../Icons'
import { MaterialSymbolsPersonOutline,IconParkOutlineHandbag,MdiPapersOutline,CarbonReport,BiBagCheck,UilSignout } from '../Icons'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='logo'>
                <img src={require("../assets/logo.png")} alt="logo" className='logo'/>
            </div>
            <div className='links'>
                <NavLink className='link' to='/'><FluentPersonSearch32Regular className="navIcon"/>I want to hire</NavLink>
                <NavLink className='link' to='/Enginners'><MaterialSymbolsPersonOutline className="navIcon"/> Enginners</NavLink>
                <NavLink className='link' to='/Jobs'><IconParkOutlineHandbag className="navIcon"/> Jobs</NavLink>
                <NavLink className='link' to='/Projects'><MdiPapersOutline className="navIcon"/> Projects</NavLink>
                <NavLink className='link' to='/Reports'><CarbonReport className="navIcon"/> Reports</NavLink>
                <NavLink className='link' to='/Funds'><BiBagCheck className="navIcon"/> Funds</NavLink>
            </div>
            <div className='logout'><UilSignout className="navIcon"/>Sign out</div>
        </div>
    )
}

export default NavBar
