import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import Home from "./components/home/Home";
import MSME from "./components/msme/MSME";
import AddMSME from "./components/msme/AddMSME";
import EditMSME from "./components/msme/EditMSME";
import ServiceProviders from "./components/service_providers/ServiceProviders";
import AddServiceProviders from "./components/service_providers/AddServiceProviders";
import EditServiceProviders from "./components/service_providers/EditServiceProviders";
import Network from "./components/network/Network";
import AddNetwork from "./components/network/AddNetwork";
import EditNetwork from "./components/network/EditNetwork";
import Corporate from "./components/corporate/Corporate";
import AddCorporate from "./components/corporate/AddCorporate";
import EditCorporate from "./components/corporate/EditCorporate";

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
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/msme" element={<MSME />} />
            <Route path="/msme/add" element={<AddMSME />} />
            <Route path="/msme/edit" element={<EditMSME />} />
            <Route path="/service_provider" element={<ServiceProviders />} />
            <Route
              path="/service_provider/add"
              element={<AddServiceProviders />}
            />
            <Route
              path="/service_provider/edit"
              element={<EditServiceProviders />}
            />
            <Route path="/network" element={<Network />} />
            <Route path="/network/add" element={<AddNetwork />} />
            <Route path="/network/edit" element={<EditNetwork />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/corporate/add" element={<AddCorporate />} />
            <Route path="/corporate/edit" element={<EditCorporate />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
