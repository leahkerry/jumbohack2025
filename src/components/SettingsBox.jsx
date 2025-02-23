import { useState } from "react";
import TopicsCheckboxes from "./TopicsCheckboxes";
import Title from "./Title";
import "../App.css";

export default function SettingsBox() {
    return (
        <div className="settingsbox">
            <Title title="Byte Sized Settings"/>
            <TopicsCheckboxes />
        </div>
    )
}