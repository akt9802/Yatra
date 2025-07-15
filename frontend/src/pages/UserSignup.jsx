import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext  } from '../context/UserContext.jsx'
function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const { _user, setUser } = React.useContext(UserDataContext);

  const [_userData, _setUserData] = useState({});
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      password: password,
      email: email,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    ); 

    if (response.status === 201) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div>
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
            <h3 className="text-base mb-2 font-medium">What's your name</h3>
            <div className="flex gap-3 mb-2">
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                required
                placeholder="First Name"
                className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-sm "
              />
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                required
                placeholder="Last Name"
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm "
              />
            </div>
            <h3 className="mb-2 text-base font-medium">What's your email</h3>
            <input
              type="email"
              required
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-sm "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <h3 className="text-base mb-2 font-medium ">Enter Password</h3>
            <input
              type="password"
              required
              placeholder="password"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="bg-[#111] text-white  font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
              Create account
            </button>
            <p className="text-center">
              Allready have Account?{" "}
              <Link to="/login" className="text-blue-600">
                Login Here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[12px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
