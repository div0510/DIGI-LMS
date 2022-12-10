import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {
    

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    if(currentUser)
    {
        return children;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'You are not Authorize',
            text: 'Login to Continue',
            timer: 2000
        })
        return <Navigate  to="/main/userlogin" />
    }
    
}

export default UserAuth

