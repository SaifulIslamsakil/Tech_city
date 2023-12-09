import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate } from "react-router-dom";

const PrivareRoute = ({children}) => {
    const {carrentUser,loder} = useContext(AuthContext)
    if(loder){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(carrentUser){
        return children
    }
 
        return <Navigate to="/Login"></Navigate>
    
  
};

export default PrivareRoute;