import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";
function DriverRiding() {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
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
          to="/driver-home"
          className="fixed right-5 top-5 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div
        className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          className="p-1 text-center w-[93%] absolute top-0 "
          onClick={() => {}}
        >
          <i className="text-3xl text-black font-semibold ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >
        <FinishRide  setFinishRidePanel ={setFinishRidePanel} />
      </div>
    </div>
  );
}

export default DriverRiding;
