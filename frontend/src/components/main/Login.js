import React from 'react';
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
import { Formik } from 'formik';

const Login = () => {

  const loginSubmit = (loginData) => {
    console.log(loginData);
  }

  return (
    <>
      <MDBContainer>
        <MDBCard className='p-3'>
          <MDBCardTitle className='text-center'>Trainer Login</MDBCardTitle>
          <MDBCardBody>
            <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit}>
              {
                ({ values, handleSubmit, handleChange }) => {
                  return <form onSubmit={handleSubmit}>
                    <MDBInput
                      label='Username or Email'
                      type='text'
                      required
                      id='email'
                      value={values.email}
                      onChange={handleChange}
                      wrapperClass='mb-4' />

                    <MDBInput
                      label='Password'
                      type='password'
                      required
                      id='email'
                      value={values.email}
                      onChange={handleChange}
                      wrapperClass='mb-4' />

                    <MDBBtn type='submit' className='mb-4' block>  Sign In</MDBBtn>

                  </form>
                }
              }
            </Formik>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  )
}

export default Login;