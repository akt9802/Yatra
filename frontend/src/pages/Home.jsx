import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-cover bg-[url(https://images.pexels.com/photos/731259/pexels-photo-731259.jpeg)] h-screen flex justify-between flex-col w-full bg-red-300">
        <div
          style={{
            fontFamily: "poppins, sans-serif",
            fontWeight: 700,
            fontSize: 30,
            paddingLeft: 25,
            paddingTop: 25,
            letterSpacing: "1px",
          }}
          className="text-white"
        >
          <h3>Yatra</h3>
        </div>
        <div className="bg-white py-5 px-10 pb-7">
          <h2 className="text-2xl font-semibold mb-4">
            Get Started with Yaatra
          </h2>
          <Link className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-" to='/login'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
