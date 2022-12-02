import React from 'react'

import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBRadio,
  MDBBadge
} from 'mdb-react-ui-kit';
const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <form action="">
            <MDBInput type='text' id='fullname' wrapperClass='mb-4' label='Full Name' />
            <MDBInput type='text' id='username' wrapperClass='mb-4' label='User Name' />
            <MDBInput type='email' id='email' wrapperClass='mb-4' label='Email' />
            <MDBInput type='password' id='password' wrapperClass='mb-4' label='Password' />
            {/* <MDBInput type='password' id='passwordCopy' wrapperClass='mb-4' label='Repeat Password' /> */}
            <MDBInput id='form4Example1' wrapperClass='mb-4' label='Area Of Expertise' />
            <h6>
               Are You A
              <MDBBadge className='ms-2'>Admin?</MDBBadge>
           </h6>
            {/* <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Yes' />
            <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='No' defaultChecked /> */}
            <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Yes' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='No' inline />
            

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