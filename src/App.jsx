import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
