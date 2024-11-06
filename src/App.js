import React from "react";
import Home from "./Component/Home";
import Post from "./Component/Post";
import User from "./Component/Users";
import ProtectedRoutes from './utils/protectedRoutes'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes/>}>
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default App;
