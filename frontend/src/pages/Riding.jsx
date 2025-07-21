import React from "react";
import { Link } from "react-router-dom";

function Riding() {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-15"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Yash</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">DL 9S BA 2472</h4>
            <p className="text-xl text-gray-600">Maruti Swift</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-between items-center">
          {/* <img
            className="h-20"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          /> */}
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

            <div className="flex items-center gap-5 p-2">
              <i className="text-lg ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹ 193.00</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Payment Only</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
}

export default Riding;