import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const User = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default User;