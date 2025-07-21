import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import DriverLogin from "./pages/DriverLogin.jsx";
import DriverSignup from "./pages/DriverSignup.jsx";
import Home from "./pages/Home.jsx";
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import DriverHome from "./pages/DriverHome.jsx";
import DriverProtectWrapper from "./pages/DriverProtectWrapper.jsx";
import Riding from "./pages/Riding.jsx";
import DriverRiding from "./pages/DriverRiding.jsx";
import "remixicon/fonts/remixicon.css";

function App() {
  // useContext(UserDataContext)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />

        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/driver-signup" element={<DriverSignup />} />
        <Route path="/driver-riding" element={<DriverRiding />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/users/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/driver-home"
          element={
            <DriverProtectWrapper>
              <DriverHome />
            </DriverProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
