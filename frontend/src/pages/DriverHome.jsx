import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import DriverDetails from "../components/DriverDetails.jsx";
import RidePopUp from "../components/RidePopUp.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp.jsx";

function DriverHome() {

    const [ridePopupPanel,setRidePopupPanel] = useState(true);
    const ridePopupPanelRef = useRef(null);

    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
    const confirmRidePopUpPanelRef = useRef(null)


    
    useGSAP(
      function () {
        if (ridePopupPanel) {
          gsap.to(ridePopupPanelRef.current, {
            transform: "translateY(0)",
          });
        } else {
          gsap.to(ridePopupPanelRef.current, {
            transform: "translateY(100%)",
          });
        }
      },
      [ridePopupPanel]
    );

    useGSAP(
      function () {
        if (confirmRidePopUpPanel) {
          gsap.to(confirmRidePopUpPanelRef.current, {
            transform: "translateY(0)",
          });
        } else {
          gsap.to(confirmRidePopUpPanelRef.current, {
            transform: "translateY(100%)",
          });
        }
      },
      [confirmRidePopUpPanel]
    );

  return (
    <div className="h-screen">
      <div>
        <div
          style={{
            fontFamily: "poppins, sans-serif",
            fontWeight: 700,
            fontSize: 30,
            paddingLeft: 20,
            paddingTop: 20,
            letterSpacing: "1px",
          }}
          className="text-black absolute"
        >
          <h3>Yatra</h3>
        </div>
        <Link
          to="/driver-login"
          className="fixed right-5 top-5 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <DriverDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <RidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>

      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed w-full h-screen z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
}

export default DriverHome;
