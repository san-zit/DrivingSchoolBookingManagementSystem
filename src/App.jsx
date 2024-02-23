import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <div>
        <Login />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
