import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)

  const submitHandler = async (e) => {
    e.preventDefault();
    // two way binding with fonts
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current,{
          opacity: 1
        })
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative">
      <div
        style={{
          fontFamily: "poppins, sans-serif",
          fontWeight: 700,
          fontSize: 30,
          paddingLeft: 30,
          paddingTop: 30,
          letterSpacing: "1px",
        }}
        className="text-black absolute"
      >
        <h3>Yatra</h3>
      </div>
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen top-0 absolute w-full">
        <div className="h-[30%] bg-white p-6 relative">
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false);
          }} className="absolute top-6 right-6 text-2xl font-semibold opacity-0">
            <i className="ri-arrow-down-double-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[44%] left-10 bg-gray-800 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-red-500  h-[0]"></div>
      </div>
    </div>
  );
}

export default Home;
