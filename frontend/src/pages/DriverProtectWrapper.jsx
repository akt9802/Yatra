import React, { useContext, useEffect, useState } from "react";
import { DriverDataContext } from "../context/DriverContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const DriverProtectWrapper = ({ children }) => {
  //   const { user } = useContext(UserDataContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { _driver, setDriver } = useContext(DriverDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/driver-login");
    }
  }, [token]);

  axios
    .get("${import.meta.env.VITE_BASE_URL}/drivers/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setDriver(response.data.driver);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/driver-login");
    });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //   if (!token) {
  //     navigate("/login");
  //   }

  return <>{children}</>;
};

export default DriverProtectWrapper;
