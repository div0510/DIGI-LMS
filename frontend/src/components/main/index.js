import React from 'react'
import { Outlet } from 'react-router-dom';
import AddCourse from './AddCourse';

const Main = () => {
  return (
    <div>
        {/* <Header /> */}
        <Outlet />
        {/* <Signup/> */}
    </div>
  )
}

export default Main;