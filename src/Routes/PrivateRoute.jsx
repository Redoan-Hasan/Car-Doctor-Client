/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56 h-[100vh-96px] flex items-center justify-center max-w-screen-xl mx-auto"></progress>;
    }
    if(user?.email){
        return children;
    }
    else{
        return <Navigate to='/login' />
    }
};

export default PrivateRoute;