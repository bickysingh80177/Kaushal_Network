import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
