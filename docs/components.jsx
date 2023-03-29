import React from "react";

export const PrimaryNote = ({ children }) => (
  <div
    style={{
      color: "black",
      backgroundColor: "#FFF3E0",
      padding: "16px",
      marginBottom: "20px",
      border: "1px solid #FF9F00",
      borderRadius: "4px",
    }}
  >
    <strong>&#9432;</strong> {children}
  </div>
);
