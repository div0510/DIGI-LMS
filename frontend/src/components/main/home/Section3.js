import React from 'react'
import { MDBRipple, MDBListGroupItem, MDBBadge, MDBListGroup } from 'mdb-react-ui-kit';

const Section3 = () => {
    return (
        <MDBRipple style={{ marginTop: "50px", height: "95vh", width: "99vw" }}  >
            <img style={{ width: "100vw" }} src='' className='w-200 h-100' />
            <a href='#!'>
                <div className='mask' style={{ backgroundColor: 'grey' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>


                        <MDBListGroup style={{ minWidth: '22rem', marginBottom: "80px" }} >
                            <h1 className='text-black' style={{ marginLeft: "30px" }}>Why DIGI-LMS?</h1>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center' style={{ backgroundColor: 'grey', marginTop: "30px", borderStyle: "none", marginBottom: '30px' }}>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src='https://nimbus.org.in/images/icons/247_blue.png'
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <h3 style={{ color: 'black' }} className='fw-bold mb-1'>24/7 access to classes</h3>
                                        <h5 style={{ color: 'black' }} className=' mb-0'>Live and Recorded classes available throughout the course validity</h5>
                                    </div>
                                </div>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center' style={{ backgroundColor: 'grey', borderStyle: "none", marginBottom: '30px' }}>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src='https://nimbus.org.in/images/icons/unlimited.png'
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <h3 style={{ color: 'black' }} className='fw-bold mb-1'>Unlimited revision</h3>
                                        <h5 style={{ color: 'black' }} className=' mb-0'>Play, pause, rewind as and when you want</h5>
                                    </div>
                                </div>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center' style={{ backgroundColor: 'grey', borderStyle: "none", marginBottom: '30px' }}>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src='	https://nimbus.org.in/images/icons/uptodate.png'
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <h3 style={{ color: 'black' }} className='fw-bold mb-1'>Up to date content</h3>
                                        <h5 style={{ color: 'black' }} className='mb-0'>Entire study material dispatched within 3 days of enrollment</h5>
                                    </div>
                                </div>
                            </MDBListGroupItem>
                            <MDBListGroupItem className='d-flex justify-content-between align-items-center' style={{ backgroundColor: 'grey', borderStyle: "none" }}>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src='https://nimbus.org.in/images/icons/assign1.png'
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <h3 style={{ color: 'black' }} className='fw-bold mb-1'>Assignments and evaluation</h3>
                                        <h5 style={{ color: 'black' }} className='mb-0'>Timely query resolution and evaluation of assignments</h5>
                                    </div>
                                </div>
                            </MDBListGroupItem>
                        </MDBListGroup>





                        <img style={{ marginLeft: "15vw" }} src="https://avatars.githubusercontent.com/u/26999847?s=280&v=4"></img>
                    </div>
                </div>
                <div className='hover-overlay'>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </div>
            </a>
        </MDBRipple>
    )
}

export default Section3