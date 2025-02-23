import { useState } from "react";
import "../App.css";

// Title component using a cute Google Font (Pacifico) and custom colors.
export default function Title({ title, size }) {
    return (
      <h1
        className="text-3xl font-bold mb-4"
        style={{
          fontFamily:  "'Pixelify Sans', sans-serif", // Corrected font family
          color: '#fcacac', // Light, cute text color
          fontSize: size
        }}
      >
        {title}
      </h1>
    );
  }
