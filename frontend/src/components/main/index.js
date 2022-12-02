import React from 'react'
import { Outlet } from 'react-router-dom';
import AddCourse from './AddCourse';
import Header from './Header';
import Signup from './Signup';
import Login from './Login';

const Main = () => {
  return (
    <div>
        {/* <Header /> */}
        <Outlet />
        {/* <AddCourse/> */}
        {/* <Login/> */}
        {/* <Signup/> */}
    </div>
  )
}

export default Main;