import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Authorise = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('trainer')));

    if(currentUser!==null)
        return children;
    else{
        Swal.fire({
            icon : 'error'
        })
        return <Navigate to="/main/trainerlogin" />
    }

}

export default Authorise