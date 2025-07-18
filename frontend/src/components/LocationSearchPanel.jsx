import React from "react";

const LocationSearchPanel = (props) => {
    // console.log(props);
  // sample array of location
  const locations = [
    "24B Near RP Cafe, Aman's Home, Delhi 110059 !!",
    "22B Near Cold Cafe, Yash's Home, UP 110035 !!",
    "22B Near Clink Cafe, Ayush's Home, Bihar 110035 !!",
  ];
  return (
    <div>
      {/* this is just a sample data */}

      {locations.map(function (el, index) {
        return (
          <div
            key={index}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex border-2 border-gray-50 active:border-black px-2 rounded-xl my-6 active:border-2 gap-4 items-center justify-start bg-gray-100 p-3"
          >
            <h2 className="bg-[#eee] flex items-center justify-center h-10 w-12 rounded-full">
              <i className="ri-map-pin-line text-xl"></i>
            </h2>
            <h4 className="text-sm font-medium">{el}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default LocationSearchPanel;
