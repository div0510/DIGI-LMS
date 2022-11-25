import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Signup from './Signup';

const Main = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Signup/>
    </div>
  )
}

export default Main;