import React from "react";
import "./common.css";

export default function ActionButton({ value, className }) {
  return <span className={`action-button view ${className}`}>{value}</span>;
}
