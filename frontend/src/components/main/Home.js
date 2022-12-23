import React, { useState } from 'react';
import {
  
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import  Homeimg  from './HomeComponent/Homeimg';
import  Home3rdsection  from './HomeComponent/Home3rdsection';
import  Home4thsection  from './HomeComponent/Home4thsection';
import  Home5thsection  from './HomeComponent/Home5thsection';
import  Homefooter  from './HomeComponent/Homefooter';
import Button from './HomeComponent/Button';

export default function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
    
    <MDBNavbar expand='lg' light bgColor='light' >
      <MDBContainer fluid style={{justifyContent:"space-between",display:"flex"}}>
        <MDBNavbarBrand href='#'>DIGI-LMS</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>Course</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>Features</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>Faculity</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBBtn active aria-current='page' href='#'>Login</MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <Homeimg/>
    <Button/>
    <Home3rdsection />
    <Home4thsection/>
    <Home5thsection/>
    <Homefooter/>
    </>

  );
}
