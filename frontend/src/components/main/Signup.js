import React from 'react'

import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <form action="">
            <MDBInput type='text' id='fullname' wrapperClass='mb-4' label='Full Name' />
            <MDBInput type='text' id='username' wrapperClass='mb-4' label='Username' />
            <MDBInput type='email' id='email' wrapperClass='mb-4' label='Email address' />
            <MDBInput type='password' id='password' wrapperClass='mb-4' label='Password' />
            {/* <MDBInput type='password' id='passwordCopy' wrapperClass='mb-4' label='Repeat Password' /> */}
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
            <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

            <MDBCheckbox
              wrapperClass='d-flex justify-content-center mb-4'
              id='form4Example4'
              label='Send me a copy of this message'
              defaultChecked
            />

            <MDBBtn type='submit' className='mb-4' block>
              Sign in
            </MDBBtn>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup