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
import app_config from '../../config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const url = app_config.api_url;
  const navigate = useNavigate();

  const loginSubmit = async (loginData, { resetForm }) => {
    console.log(loginData);
    const response = await fetch(url + '/trainer/login', {
      method: 'post',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.status === 200) {
      resetForm();
      const trainerData = await response.json();
      sessionStorage.setItem('trainer', JSON.stringify(trainerData));

      Swal.fire(
        {
          title: "Success",
          icon: "success",
          text: "Log In Successful",
          confirmButtonText: 'OK',
          confirmButtonColor: 'green'
        }
      )
      navigate('/main/trainerdashboard')
    } else if(response.status === 401){
        
    }
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
                      id='password'
                      value={values.password}
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