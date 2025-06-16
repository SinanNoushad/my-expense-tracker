import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(
        username,
        email,
        password,
        confirmPassword
      );
      const savedUser = JSON.parse(localStorage.getItem(username));
      console.log("savedUser:", savedUser);
      console.log("hello,", savedUser.username);
      console.log("register Successful:", data);
    } catch (err) {
      console.log("register Failed", err.message);
    }
  };

  return (
    <div className="h-[60%] w-[30%] tr flex items-center rounded-3xl flex-col bg-white">
      <label className="mt-[30px] mb-[30px] text-3xl font-bold">REGISTER</label>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center h-[70%] w-[80%]"
      >
        <input
          id="username"
          type="text"
          className="bg-white h-[50px] w-[90%] pl-2 rounded-[1vh]  border-2"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          id="email"
          type="email"
          className="bg-white h-[50px] w-[90%] pl-2 rounded-[1vh] mt-[35px] border-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          type="password"
          className="bg-white h-[50px] w-[90%] pl-2 rounded-[1vh] mt-[35px] border-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          id="confirmPassword"
          type="password"
          className="bg-white h-[50px] w-[90%] pl-2 rounded-[1vh] mt-[35px] border-2"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 cursor-pointer h-[50px] w-[90%] mt-[50px] rounded-[1vh]"
        >
          Register
        </button>
        <div className="flex flex-row justify-center mt-[20px]">
          <p>
            Already Have an Account!{" "}
            <Link to="/login" className="font-bold hover:text-blue-600">
              Login Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default RegisterForm;
