import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

const Section2 = () => {
    return (
        <>
            <MDBBtn className='  mb-5 me-1' color='warning' style={{ marginTop: "90px", marginLeft: "45%", width: "200px", height: "50px" }}>
                Browse ALL Courses
            </MDBBtn>
            <div style={{ backgroundColor: "#dedede" }}>
                <h1 className=' text-center mb-5' style={{ marginTop: "50px" }}>Feautres</h1>
                <MDBRow sm="6" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '70px' }}>
                    <MDBCol sm="3">
                        <img src='https://nimbus.org.in/images/icons/LiveE-learning.png' width={"100px"} style={{ marginLeft: "35%" }}></img>
                        <MDBCardBody className='text-black'>
                            <MDBCardTitle>Live/E-learning Lessons</MDBCardTitle>
                            <MDBCardText>
                                Freedom of learning according to the convenience within in your own pace, is the attribute offered by the live lessons. By removing the rigidness of the time, every student can actively participate in the online lesson that suits his/her schedule.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol sm="3">
                        <img src='https://nimbus.org.in/images/icons/clear-350x350-99.png' width={"100px"} style={{ marginLeft: "35%" }}></img>
                        <MDBCardBody >
                            <MDBCardTitle>The Most Up-to-Date Content</MDBCardTitle>
                            <MDBCardText>
                                We have designed our curriculum in such a way that our students will get the chance to learn up-to- date content at the lowest possible price over time. Through this way, we are trying to remove insurmountable obstacles of their path.
                            </MDBCardText>
                        </MDBCardBody>

                    </MDBCol>
                    <MDBCol sm="3">

                        <img src='	https://nimbus.org.in/images/icons/grpoffaculty.png' width={"100px"} style={{ marginLeft: "35%" }}></img>
                        <MDBCardBody>
                            <MDBCardTitle>India's Best pool of faculties</MDBCardTitle>
                            <MDBCardText>
                                Having the all-time best faculty for the placement preparation, make us different from the others. Their effortless techniques of delivering sessions inspire students to keep on the path of their goal.
                            </MDBCardText>
                        </MDBCardBody>

                    </MDBCol>
                </MDBRow>
                <MDBRow sm="6" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '70px' }}>
                    <MDBCol sm="3">

                        <img src='	https://nimbus.org.in/images/icons/HighQualityContent.png' width={"100px"} style={{ marginLeft: "35%" }}></img>

                        <MDBCardBody >
                            <MDBCardTitle>High Quality Study material</MDBCardTitle>
                            <MDBCardText>
                                We are pioneer E-learning platform for the placement preparation; therefore, provide well-researched study material to our students. We provide online test series and mock test to our students inspired from the past examination patterns, so grab it and reach on the top of the ladder
                            </MDBCardText>
                        </MDBCardBody>

                    </MDBCol>
                    <MDBCol sm="3">
                        <img src='https://nimbus.org.in/images/icons/doubtclearing.png' width={"100px"} style={{ marginLeft: "35%" }}></img>
                        <MDBCardBody >
                            <MDBCardTitle>Revision and doubt clearing sessions</MDBCardTitle>
                            <MDBCardText>
                                Though we deliver remote classes for the GATE aspirants, this doesn't mean that they have to struggle alone with their difficulties. For this, we arrange revision and doubt clearing session in which they can ask there with concern faculty via text or video chat.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol sm="3">
                        <img src='	https://nimbus.org.in/images/icons/bestresult.png' width={"100px"} style={{ marginLeft: "35%" }}></img>
                        <MDBCardBody >
                            <MDBCardTitle>Consistent Result</MDBCardTitle>
                            <MDBCardText>
                                Efforts never go in Vain; therefore if you are abiding our sessions, then your success is guaranteed. Nimbus is renowned for delivering consistent results, and we leave no stone unturned to keep this feather on our hat. We give this credit to our hardworking teachers and students.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    )
}

export default Section2