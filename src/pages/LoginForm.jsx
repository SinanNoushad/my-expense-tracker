import React, { useState } from "react";
import { loginUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log("Login Successful:", data);
      navigate("/dashboard");
    } catch (err) {
      console.log("login Failed", err.message);
    }
  };

  return (
    <div className="h-[60%] w-[30%] tr flex items-center rounded-3xl flex-col bg-white">
      <label className="mt-[30px] mb-[30px] text-3xl font-bold">LOGIN</label>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center h-[70%] w-[80%]"
      >
        <input
          id="email"
          type="email"
          className="bg-white h-[50px] w-[90%] pl-2 rounded-[1vh] border-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          type="password"
          className="bg-white h-[50px] w-[90%] pl-2 rounded-[1vh] mt-[50px] border-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex flex-row w-[90%] mt-[20px] justify-between">
          <div>
            <input type="checkbox" name="" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a className="hover:text-blue-600 ">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="bg-purple-600 cursor-pointer h-[50px] w-[90%] mt-[50px] rounded-[1vh]"
        >
          Login
        </button>
        <div className="flex flex-row justify-center mt-[20px]">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="font-bold hover:text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
