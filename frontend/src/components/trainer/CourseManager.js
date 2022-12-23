import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBNavbarLink,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCard>
      <MDBRow style={{ width: "100vw", height: "100vh" }}>
        <MDBCol md="3" style={{ height: "99vh", backgroundColor: "#b3b5b5" }}>
          {/* <MDBCardImage  src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid /> */}
          <MDBCardTitle className="mb-5 text-center mt-4 ">
            <h3>Categories</h3>
          </MDBCardTitle>
          <MDBCardText>
            <div class="list-group">
            
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action mb-4"
              >
                Disabled item
              </MDBNavbarLink>
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action mb-4"
              >
                Item
              </MDBNavbarLink>
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action  mb-4"
              >
                Active item
              </MDBNavbarLink>
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action mb-4"
              >
                Item
              </MDBNavbarLink>
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action mb-4"
              >
                Disabled item
              </MDBNavbarLink>
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action  mb-4"
              >
                Active item
              </MDBNavbarLink>
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action mb-4"
              >
                Item
              </MDBNavbarLink>
              <MDBNavbarLink
                to="#"
                class="list-group-item list-group-item-action mb-4"
              >
                Disabled item
              </MDBNavbarLink>
            </div>
          </MDBCardText>
          <MDBBtn>View Price</MDBBtn>
        </MDBCol>

        <MDBCol md="9" style={{backgroundColor: "#ebeff0"}}>
          <MDBCardBody style={{ height: "99vh",overflow:'scroll' }}>
            <MDBCardTitle>
              <h3>Choose your Future</h3>
            </MDBCardTitle>
            <MDBRow sm="6">
              <MDBCol sm="4" className="">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <br/>
            <br/>
            
            <MDBRow sm="6">
              <MDBCol sm="4" className="">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm="4">
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    />
                    <a>
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
