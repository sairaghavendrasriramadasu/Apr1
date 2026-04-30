import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div className="route-page service-page">
      <h2 className="route-title">Services</h2>
      <p className="route-text">Choose a service category to view details about the available offerings.</p>
      <div className="sub-header">
        <Link to={"WebApp"}>Web App</Link>
        <Link to={"AppDev"}>App Dev</Link>
        <Link to={"UIUX"}>UI/UX</Link>
      </div>
      <Outlet />
    </div>
  );
}