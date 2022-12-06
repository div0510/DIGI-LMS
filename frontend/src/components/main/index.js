import React from 'react'
import { Outlet } from 'react-router-dom';
import AddCourse from './AddCourse';
import Header from './Header';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Homeimg from './Homeimg';
import Home3rdsection from './Home3rdsection';
import Home4thsection from './Home4thsection';
import Home5thsection from './Home5thsection';
import Homefooter from './Homefooter';

const Main = () => {
  return (
    <div>
        {/* <Header /> */}
        {/* <Outlet /> */}
        {/* <AddCourse/> */}
        <Home/>
        <Homeimg/>
        <Home3rdsection/>
        <Home4thsection/>
        <Home5thsection/>
        <Homefooter/>
        {/* <Login/> */}
        {/* <Signup/> */}
    </div>
  )
}

export default Main;