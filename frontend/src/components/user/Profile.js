import React from 'react'
import { MDBCard, MDBCardFooter } from 'mdb-react-ui-kit';
import UserHeader from './UserHeader';

const UserProfile = () => {
  let userData = sessionStorage.getItem('user');
  console.log(userData);

  return (
    <>
      <UserHeader/>
      <h1>User Profile</h1>
    </>
  )
}

export default UserProfile