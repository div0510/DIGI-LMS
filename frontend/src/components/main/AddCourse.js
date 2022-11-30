import React from 'react';
import { MDBInput, MDBTextArea} from 'mdb-react-ui-kit';
import { Autocomplete } from '@mui/material';

const AddCourse = () => {
    return (
        <>
            <div className="container ">
                <div  className="card w-50 p-3 square border border-dark" >
                    <MDBInput  label='title' />
                    <MDBTextArea label='Description' id='description' rows={4} />
                    <MDBInput/>
                    <MDBInput/>
                    <MDBInput/>
                    <MDBInput/>
                </div>
            </div>
        </>
    )
}

export default AddCourse