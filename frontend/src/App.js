import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import Home from "./components/home/Home";
import msmeRoutes from "./routes/msmeRoutes";
import serviceproviderRoute from "./routes/serviceproviderRoute";
import networkRoute from "./routes/networkRoute";
import corporateRoute from "./routes/corporateRoute";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">Loading...</div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {msmeRoutes()}
            {serviceproviderRoute()}
            {networkRoute()}
            {corporateRoute()}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
