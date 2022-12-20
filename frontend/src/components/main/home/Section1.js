import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const Section1 = () => {
    return (
        <>
            <h1 className='mt-5 text-center mb-5'>Explore Online Courses</h1>
            <MDBRow sm="6" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '70px' }}>
                <MDBCol sm='3'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "30vh" }} src='https://www.devopsschool.com/blog/wp-content/uploads/2022/03/Python-01-2.png' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "30vh" }} src='https://markovate.b-cdn.net/wp-content/uploads/2022/08/Top-10-Reasons-To-Choose-MERN-Stack-Development-For-Your-Next-Project_-1280x720px@2x.png' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "30vh" }} src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/266987048/original/44519e74d1cea325532821fb4607a7f6a725c1f5/develop-android-application-with-mern-stack.png' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow sm="6" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '80px' }}>
                <MDBCol sm='3'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "30vh" }} src='https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?w=2000' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "30vh" }} src='https://techlife.news/wp-content/uploads/2020/05/Adobe-Photoshop-Express-on-Android-and-iOS-1280x720.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard>
                        <MDBCardImage style={{ height: "30vh" }} src='https://www.reliablesoft.net/wp-content/uploads/2013/02/seo.jpg' position='top' alt='...' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

        </>
    )
}

export default Section1