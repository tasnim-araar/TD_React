import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavBar";

export default function RootLayout() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
