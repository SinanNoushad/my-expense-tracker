import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-tl from-purple-700 to-purple-500">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
