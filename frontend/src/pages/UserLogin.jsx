import React, { useState } from "react";
import { Link } from "react-router-dom";
function UserLogin() {
  // 2-way binding
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("check")

    setUserData({
      email: email,
      password: password,
    });
    // console.log(userData);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <div
          style={{
            fontFamily: "poppins, sans-serif",
            fontWeight: 700,
            fontSize: 30,
            paddingLeft: 0,
            paddingTop: 8,
            letterSpacing: "1px",
          }}
          className="text-black"
        >
          <h3>Yatra</h3>
        </div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl mb-2 font-semibold">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
          />
          <h3 className="text-xl mb-2 font-semibold ">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
          />
          <button className="bg-[#111] text-white  font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
            Login
          </button>
          <p className="text-center">
            New Here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link  to='/driver-login' className="bg-[#10b461] flex items-center justify-center text-white  font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
          Sign in as Driver
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
