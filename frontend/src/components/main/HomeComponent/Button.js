import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Button = () => {
  return (
    <>
     <MDBRow style={{height:"80vh",alignItems:"center"}}>
      <MDBCol sm='6'>
        <MDBCard className="square border border-success" style={{ marginLeft:"90px", width:"35vw", height:"280px",backgroundColor:"#ededed",borderRadius:"black"}}>
          <MDBCardBody>
            <MDBCardTitle className="text-center" ><h3>Welcome..</h3></MDBCardTitle>
            <br/>
            <MDBCardText className="text-center" >
            <h4>Login to continue as a User</h4>
            </MDBCardText>
            {/* <MDBBtn style={{backgroundColor:"green",marginTop:"3vw",marginLeft:"190px"}} href='#'>Login</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard className="square border border-success" style={{marginLeft:"90px",width:"35vw",height:"280px",backgroundColor:"#ededed"}}>
          <MDBCardBody>
            <MDBCardTitle className="text-center" ><h3>Welcome..</h3></MDBCardTitle>
            <br/>
            <MDBCardText className="text-center" >
            <h4>Login to continue as a Trainer</h4>
            </MDBCardText>
            {/* <MDBBtn  style={{backgroundColor:"green",marginTop:"3vw",marginLeft:"190px"}}  href='#' >Login</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  )
}

export default Button