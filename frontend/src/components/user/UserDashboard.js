import React from "react";
import {
  MDBCard,
  MDBCardLink,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBFooter,
  MDBBtn,
  MDBListGroupItem,
  MDBListGroup,
  MDBCardHeader
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCard>
      <MDBRow className="g-0">
        <MDBCol md="3" style={{ height: "98vh", backgroundColor: "#d1d1d1" }}>
          <img
            style={{ width: "85px", height: "85px", marginLeft: "38%" }}
            src="https://mdbootstrap.com/img/new/standard/city/047.webp"
            className="img-fluid rounded-circle mt-5"
            alt=""
          />
          <h3 className="text-black " style={{ marginLeft: "30%" }}>
            Nidhi Verma
          </h3>
          <h4
            className="text-black "
            style={{ marginLeft: "38%", marginTop: "-8px" }}
          >
            Student
          </h4>
          <div
            className="d-grid gap-3 bg-grey p-5 "
            style={{ marginLeft: "50px" }}
          >
            <div className="p-3">
              <h5>
                <MDBIcon fas icon="home me-2" />
                Home
              </h5>
            </div>
            <div className="p-3">
              <h5>
                <MDBIcon fas icon="notes-medical me-2" />
                Notes
              </h5>
            </div>
            <div className="p-3">
              <h5>
                <MDBIcon far icon="calendar-alt me-2" />
                Schedule
              </h5>
            </div>
            <div className="p-3">
              <h5>
                <MDBIcon fas icon="comment-alt me-2" />
                Chat
              </h5>
            </div>
            <div className="p-3">
              <h5>
                <MDBIcon fas icon="cog me-2" />
                Settings
              </h5>
            </div>
          </div>
          <MDBFooter
            bgColor="light"
            className="text-center text-lg-left"
            style={{ marginBottom: "-90vh" }}
          >
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <MDBBtn className="mx-2" color="white">
                <MDBIcon fas icon="sign-out-alt me-2" />
                Logout
              </MDBBtn>
            </div>
          </MDBFooter>
        </MDBCol>
        <MDBCol md="5" style={{ height: "100vh", backgroundColor: "white" }}>
          <MDBCardBody>
            <MDBCardTitle><h1>Dashboard</h1></MDBCardTitle>
            <MDBCardText>
             <h5>Exams</h5>
            </MDBCardText>

            <MDBCard>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBListGroup flush>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
           </MDBCard>
      
           <h5>Projects</h5>
            <MDBCard>
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBListGroup flush>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
           </MDBCard>
           



          </MDBCardBody>
        </MDBCol>
        <MDBCol md="4" style={{ height: "100vh", backgroundColor: "white" }}>
          
        <MDBCard>
            
      <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink href='#'>Card link</MDBCardLink>
        <MDBCardLink href='#'>Card link</MDBCardLink>
      </MDBCardBody>
    </MDBCard>




        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
