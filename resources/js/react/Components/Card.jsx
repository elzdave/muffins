import React from "react";

export default function Card({ children }) {
  return (
    <div className="p-6 bg-white border-gray-200 rounded-lg">{children}</div>
  );
}
