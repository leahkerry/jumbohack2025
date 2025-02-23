import { useState } from "react";

// Title component using a cute Google Font (Pacifico) and custom colors.
export default function Title({ title }) {
    return (
      <h1
        className="text-3xl font-bold mb-4"
        style={{
          fontFamily: "'Pacifico', cursive", // Ensure this font is imported via index.html or @import in App.css.
          color: '#fcacac' // Light, cute text color.
        }}
      >
        {title}
      </h1>
    );
  }
