import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'

const TrainerDashboard = () => {
    return (
        <>
        <Header/>
            <h1>TrainerDashboard</h1>
            <NavLink to='../addcourse'>
                <button type='button'> Add Courses</button>
            </NavLink>
        </>


    )
}

export default TrainerDashboard