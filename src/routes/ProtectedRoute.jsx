import React, { useContext } from "react";
import UserContext from "context/UserContext";
import { Navigate } from "react-router-dom";
const ProtectedRoute = (props) => {
    const [currentUser] = useContext(UserContext);

    return (
        <React.Fragment>
            {
                currentUser ? props.children : <Navigate to="/auth" replace={true} />
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;