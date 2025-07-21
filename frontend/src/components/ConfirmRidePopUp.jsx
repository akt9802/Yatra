import React, { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmRidePopUp(props) {
  const [opt,setOtp] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h5
        onClick={() => {
          //   props.setConfirmRidePanel(false);
          props.setConfirmRidePopUpPanel(false);
        }}
        className="absolute top-2 left-1/2 -translate-x-1/2 text-center w-[90%]"
      >
        <i className="text-gray-500 ri-arrow-down-wide-line text-2xl"></i>
      </h5>
      <h2 className="text-2xl font-bold mb-5 mt-2">
        Confirm this ride to Start
      </h2>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            className="h-10 w-10 rounded-full bg-white border-black border-1"
            alt=""
          />
          <h2 className="text-lg font-semibold">Aman Kumar</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-gray-600 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Vikas Nagar, New-Delhi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2 border-gray-600 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Vikas Nagar, New-Delhi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹ 193.00</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment Only</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
            value={opt}
              onChange={(e) => {
                setOtp(e.target.value)
              }}
              className="bg-[#eee] px-6 py-4 font-mono text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter OTP"
            />
            <Link
              to="/driver-riding"
              onClick={() => {}}
              className="w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                //   props.setRidePopupPanel(false);
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-1 bg-red-500 text-white font-semibold p-2 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;
