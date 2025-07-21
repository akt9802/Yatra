import React from "react";

function RidePopUp(props) {
  return (
    <div>
      <h5
        onClick={() => {
          //   props.setConfirmRidePanel(false);
          props.setRidePopupPanel(false);
        }}
        className="absolute top-2 left-1/2 -translate-x-1/2 text-center w-[90%]"
      >
        <i className="text-gray-500 ri-arrow-down-wide-line text-2xl"></i>
      </h5>
      <h2 className="text-2xl font-bold mb-5 mt-2">New Ride Available!</h2>

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

        <div className="flex w-full items-center justify-between">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className=" mt-5 bg-gray-300 text-gray-800 px-10 font-semibold p-3 rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopUpPanel(true);
            }}
            className=" mt-5 bg-green-600 text-white px-10 font-semibold p-3 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default RidePopUp;
