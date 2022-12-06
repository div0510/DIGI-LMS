import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      {/* <header>
        <MDBNavbar expand='lg' light bgColor='white'>
          <h1>Some</h1>
          <MDBContainer >
            <MDBNavbarToggler
              onClick={() => setShowBasic(!showBasic)}
              aria-controls='navbarExample01'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <MDBIcon fas icon='bars' />
            </MDBNavbarToggler>
            <MDBCollapse show={showBasic}>
              <MDBNavbarNav right className='mb-2 mb-lg-0'>
                <MDBNavbarItem active>
                  
                  <MDBNavbarLink aria-current='page' href='#'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='#'>About</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/addcourse'>Add Courser</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <div className='p-5 text-center bg-light'>
          <h1 className='mb-3'>Heading</h1>
          <h4 className='mb-3'>Subheading</h4>
          <a className='btn btn-primary' href='' role='button'>
            Call to action
          </a>
        </div>
      </header> */}
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to='../addcourse' className="nav-link" >
                    Add Course
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        {/* Jumbotron */}
        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Heading</h1>
          <h4 className="mb-3">Subheading</h4>
          <a className="btn btn-primary" href="" role="button">
            Call to action
          </a>
        </div>
        {/* Jumbotron */}
      </header>

    </>
  )
}

export default Header;