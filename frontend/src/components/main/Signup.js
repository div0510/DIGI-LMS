import React, { useState } from 'react'
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
import Swal from 'sweetalert2';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();



  const url = app_config.api_url;
  const [areaOfExpertise, setAreaOfExpertise] = useState([]);

  const signUpSubmit = async (signUpData) => {
    console.log(areaOfExpertise);
    signUpData.areaOfExpertise = areaOfExpertise;
    console.log(signUpData);
    
    let typeOfRegisteration;
    if (signUpData.isAdmin == 'true') {
      typeOfRegisteration = 'Admin';
    } else {
      typeOfRegisteration = 'Trainer'
    }
    const response = await fetch(url + '/trainer/register', {
      method: 'post',
      body: JSON.stringify(signUpData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response);
    if (response.status === 200) {
      Swal.fire({
        title: `Registered as ${typeOfRegisteration}`,
        icon: "success",
        text: "Register Successful",
        confirmButtonText: 'OK',
        confirmButtonColor: 'green'
      })
        navigate('/main/login');
    }

  }


  return (
    <>
      <div className="container">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className='text-center p-4' >Trainer Registration</MDBCardTitle>
            <MDBCardText>
              <Formik initialValues={{ fullname: '', username: '', email: '', password: '', experience: 0, isAdmin: false, areaOfExpertise: []  }} onSubmit={signUpSubmit}>

                {({ values, handleSubmit, handleChange }) => {
                  return <form onSubmit={handleSubmit}>
                    <MDBInput type='text' id='fullname' required value={values.fullname} onChange={handleChange} wrapperClass='mb-4' label='Full Name' />
                    <MDBInput type='text' id='username' required value={values.username} onChange={handleChange} wrapperClass='mb-4' label='Username' />
                    <MDBInput type='email' id='email' required value={values.email} onChange={handleChange} wrapperClass='mb-4' label='Email address' />
                    <MDBInput type='password' id='password' required value={values.password} onChange={handleChange} wrapperClass='mb-4' label='Password' />
                    {/* <MDBInput type='password' id='passwordCopy' wrapperClass='mb-4' label='Repeat Password' /> */}
                    <MDBInput type='number' id='experience' value={values.experience} onChange={handleChange} wrapperClass='mb-4' label='Experience' />

                    {/* <Stack spacing={3} sx={{ width: 500 }}> */}
                    <Autocomplete
                      multiple
                      id="areaOfExpertise"
                      options={skills.map((option) => option.title)}
                      // defaultValue={[top100Films[13].title]}
                      // value={values.areaOfExpertise}
                      onChange={(e, v) => setAreaOfExpertise([...v])}
                      freeSolo
                      
                      
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                      }
                      renderInput={(params) => (
                        // console.log(params),
                        <TextField
                          {...params}
                          
                          // variant="filled"
                          label="Expertise"
                          placeholder="Expertise"
                        />
                      )}
                    />
                    {/* </Stack> */}




                    <MDBContainer breakpoint="sm" className='d-inline-flex align-items-center justify-content-center p-4'>
                      <MDBCardText className="text-start px-3 fs-3 m-0 fw-bold">is Admin ?</MDBCardText>
                      <MDBCard className='d-flex align-items-center fw-bolder  px-4'>
                        <MDBRadio name='isAdmin' value={true} onChange={handleChange} aria-label='YES' inline label='YES' />
                        <MDBRadio name='isAdmin' value={false} onChange={handleChange} aria-label='NO' inline label='NO' />
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

const skills = [
  { title: 'C++', },
  { title: 'C' },
  { title: 'Python' },
  { title: 'Java' },
  { title: 'React.js' },
  { title: 'JavaScript' },
  { title: 'SEO' },
  { title: 'Digital Marketing'},
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'MongoDB' },
];