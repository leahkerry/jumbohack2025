import { useState, useEffect } from "react";
import TopicsCheckboxes from "./TopicsCheckboxes";
import Title from "./Title";
import "../App.css";

export default function SettingsBox({onClose}) {
    // Close when clicking outside the settings box
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }, [onClose]);
    
      // Close when clicking outside the settings box
      const handleOverlayClick = (event) => {
        if (event.target.id === "settings-overlay") {
          onClose();
        }
      };

    return (
        <div id="settings-overlay" onClick={handleOverlayClick} className="settingsbox">
            <Title title="Byte Sized Settings" size='35px'/>
            <TopicsCheckboxes />
            <button onClick={onClose}>Close</button>
        </div>
    )
}