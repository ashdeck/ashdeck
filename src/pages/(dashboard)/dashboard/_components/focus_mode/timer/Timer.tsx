"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import ResetButton from "./ResetButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import { useState } from "react";

export default function Timer(){
    const [pause, setPause] = useState(false)
    return (
        <div className="flex flex-col gap-8 items-center mt-8">
            <div className="bg-white bg-opacity-35 w-56 h-56 rounded-full p-2 flex items-center justify-center">
                <div className="w-48 h-48">
                    <CircularProgressbar value={50} text="50%" strokeWidth={6}
                        styles={buildStyles({
                            rotation: 1, strokeLinecap: "round",
                            textColor: "#fff",
                            pathColor: "#29a259",
                            trailColor: "rgba(255, 255, 255, .8)"
                        })}
                    />
                </div>
            </div>
            <div className="flex gap-6 mt-4">
                <ResetButton />
                <PauseButton paused={pause} onClick={()=>setPause(!pause)} />
            </div>
            {/* <div className="">
                <SettingsButton />
            </div> */}
        </div>
    )
}
