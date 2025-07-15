import React, { useEffect } from "react";
import { UserDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  //   const { user } = useContext(UserDataContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate('/login');
        }
    })

//   if (!token) {
//     navigate("/login");
//   }

  return <>{children}</>;
};

export default UserProtectWrapper;
