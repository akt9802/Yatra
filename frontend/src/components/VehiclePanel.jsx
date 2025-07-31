import React from 'react'

function VehiclePanel(props) {
    return (
      <div>
        <h5
          onClick={() => {
            props.setVehiclePanel(false);
          }}
          className="absolute top-2 left-1/2 -translate-x-1/2 text-center w-[90%]"
        >
          <i className="text-gray-500 ri-arrow-down-wide-line text-2xl"></i>
        </h5>
        <h2 className="text-2xl font-bold mb-3 mt-2">Choose a Vehicle</h2>

        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
            props.selectVehicle('car');
          }}
          className="flex w-full active:border-2 mb-2 border-black rounded-xl items-center p-3 justify-between"
        >
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
            className="h-13.5"
          />
          <div className="ml-1 w-1/2">
            <h4 className="font-medium text-base">
              YatriGo
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">{props.fare.car}</h2>
        </div>

        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
            props.selectVehicle("auto");
          }}
          className="flex w-full active:border-2 mb-2 border-black rounded-xl items-center p-3 justify-between"
        >
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
            className="h-16"
          />
          <div className="ml-1 w-1/2">
            <h4 className="font-medium text-base">
              YatriAuto
              <span>
                <i className="ri-user-3-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, auto ride
            </p>
          </div>
          <h2 className="text-xl font-semibold">{props.fare.auto}</h2>
        </div>

        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
            props.selectVehicle("moto");
          }}
          className="flex w-full active:border-2 mb-2 border-black rounded-xl items-center p-3 justify-between"
        >
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
            alt=""
            className="h-16"
          />
          <div className="ml-1 w-1/2">
            <h4 className="font-medium text-base">
              YatriMoto
              <span>
                <i className="ri-user-3-fill">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, motorcycle ride
            </p>
          </div>
          <h2 className="text-xl font-semibold">{props.fare.moto}</h2>
        </div>
      </div>
    );
}

export default VehiclePanel
