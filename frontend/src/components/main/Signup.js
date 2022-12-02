import React from 'react'
import { Formik } from 'formik';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBRadio,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer
} from 'mdb-react-ui-kit';
import app_config from '../../config';

const Signup = () => {

  const url = app_config.api_url;

  const signUpSubmit = async (signUpData) => {
    console.log(signUpData);
    const response = await fetch(url + 'trainer/addcourse', {
      method: 'post',
      body: JSON.stringify(signUpData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response.status);

  }


  return (
    <>
      <div className="container">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className='text-center p-4' >Trainer Registration</MDBCardTitle>
            <MDBCardText>
              <Formik initialValues={{ fullname: '', username: '', email: '', password: '', experience: '', isAdmin: '' }} onSubmit={signUpSubmit}>

                {({ values, handleSubmit, handleChange }) => {
                  return <form onSubmit={handleSubmit}>
                    <MDBInput type='text' id='fullname' required value={values.fullname} onChange={handleChange} wrapperClass='mb-4' label='Full Name' />
                    <MDBInput type='text' id='username' required value={values.username} onChange={handleChange} wrapperClass='mb-4' label='Username' />
                    <MDBInput type='email' id='email' required value={values.email} onChange={handleChange} wrapperClass='mb-4' label='Email address' />
                    <MDBInput type='password' id='password' required value={values.password} onChange={handleChange} wrapperClass='mb-4' label='Password' />
                    {/* <MDBInput type='password' id='passwordCopy' wrapperClass='mb-4' label='Repeat Password' /> */}
                    <MDBInput type='number' id='experience' value={values.experience} onChange={handleChange} wrapperClass='mb-4' label='Experience' />

                    <MDBContainer breakpoint="sm" className='d-inline-flex align-items-center justify-content-center p-4'>
                      <MDBCardText className="text-start px-3 fs-3 m-0 fw-bold">is Admin ?</MDBCardText>
                      <MDBCard className='d-flex align-items-center fw-bolder  px-4'>
                        <MDBRadio name='isAdmin' value={values.isAdmin = 'true'} onChange={handleChange} aria-label='YES' inline label='YES' />
                        <MDBRadio name='isAdmin' value={values.isAdmin = 'false'} onChange={handleChange} aria-label='NO' inline label='NO' />
                      </MDBCard>
                    </MDBContainer>

                    <MDBCheckbox
                      wrapperClass='d-flex justify-content-center mb-4'
                      id='form4Example4'
                      label='Send me a copy of this message'
                      defaultChecked
                    />

                    {/* <MDBBtn type='submit' className='mb-4' block>
                      Sign Up
                    </MDBBtn> */}

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Sign Up
                      </button>
                    </div>
                  </form>
                }}
              </Formik>

            </MDBCardText>

          </MDBCardBody>
        </MDBCard>

      </div>
    </>
  )
}

export default Signup