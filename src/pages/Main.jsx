import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import "./Main.css"

const Main = () => {
    return (
        <div className='all'>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Main
