import { useState, useEffect } from "react";

import "../App.css";

export default function SettingsButton({onClick}) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    return (
        <div className="settingsbutton">
            <button
                onClick={onClick}
            >Settings</button>
        </div>
    )
}