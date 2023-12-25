import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home.jsx";
import Developer from "../pages/developer/Developer.jsx";
import Login from "../pages/login/Login.jsx";
import Register from "../pages/register/Register.jsx";


function router() {
  return (
      <>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/developer"} element={<Developer />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
       </Routes>
      </>
  )
}

export default router