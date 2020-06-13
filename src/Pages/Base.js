import React from "react";
import Navbar from "../Components/Navbar";

export default function Base({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
