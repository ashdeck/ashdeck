import PauseButton from "../timer/PauseButton";
import ResetButton from "../timer/ResetButton";
import { useState, useEffect } from "react";

export default function Timer2() {
    const timerSettings = JSON.parse(localStorage.getItem('focus_session'))

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(timerSettings.duration);
    const [seconds, setSeconds] = useState(0);
    const [paused, setPaused] = useState(timerSettings.paused);
    const [currentCycle, setCurrentCycle] = useState(1);


    return (
        <div className="p-8">
            <div className="text-center mb-6">
                <h2 className="font-semibold text-gray-400 text-2xl">Block sites temporarily</h2>
            </div>

            <div className="flex items-center justify-center flex-col gap-8">
                <div className="flex gap-6 text-secondary items-center text-6xl font-mono">
                    <span>{String(hours).padStart(2, "0")}</span>:
                    <span>{String(minutes).padStart(2, "0")}</span>:
                    <span>{String(seconds).padStart(2, "0")}</span>
                </div>

                <div className="flex gap-8 mt-10">
                    <PauseButton paused={paused} onClick={()=>{}} />
                    <ResetButton onClick={()=>{}} />
                </div>
            </div>
        </div>
    );
}
