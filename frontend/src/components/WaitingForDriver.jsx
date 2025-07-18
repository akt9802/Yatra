import React from 'react'

function WaitingForDriver(props) {
    return (
      <div>
        <h5
          onClick={() => {
            props.waitingForDriver(false);
          }}
          className="absolute top-2 left-1/2 -translate-x-1/2 text-center w-[90%]"
        >
          <i className="text-gray-500 ri-arrow-down-wide-line text-2xl"></i>
        </h5>

        <div className='flex items-center justify-between'>
          <img
            className="h-15"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Yash</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>DL 9S BA 2472</h4>
            <p className='text-xl text-gray-600'>Maruti Swift</p>
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
      </div>
    );
}

export default WaitingForDriver
