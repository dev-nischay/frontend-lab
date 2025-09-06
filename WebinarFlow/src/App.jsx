import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import AuthLayout from "./layouts/AuthLayout";
import Otp from "./pages/Otp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/confirm" element={<Otp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
