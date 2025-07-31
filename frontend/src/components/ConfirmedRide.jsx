import React from "react";

function ConfirmedRide(props) {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="absolute top-2 left-1/2 -translate-x-1/2 text-center w-[90%]"
      >
        <i className="text-gray-500 ri-arrow-down-wide-line text-2xl"></i>
      </h5>
      <h2 className="text-2xl font-bold mb-3 mt-2">Confirm Your Ride</h2>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-gray-600 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.pickup}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2 border-gray-600 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.destination}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{props.fare[props.vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment Only</p>
            </div>
          </div>
        </div>
        <button onClick={() => {
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false);
            // props.vehiclePanel(false);
            props.setPanelOpen(false);
            props.createRide()
        }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmedRide;
