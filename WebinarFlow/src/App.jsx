import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import AuthLayout from "./layouts/AuthLayout";
import Otp from "./pages/Otp";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/confirm" element={<Otp />} />
          </Route>
          <Route path="/dash" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
