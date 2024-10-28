import { useEffect, useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import ResetButton from "./ResetButton";
import PauseButton from "./PauseButton";
import { useRouter } from "@/src/commons/router";

export default function Timer({ duration, breakTime, cycles, paused }) {
    const [timeRemaining, setTimeRemaining] = useState(duration * 60);
    const [isPaused, setIsPaused] = useState(paused);
    const [isBreak, setIsBreak] = useState(false);
    const [cycleCount, setCycleCount] = useState(cycles);
    const timerRef = useRef(null);

    const startTimer = () => {
        paused && pause_in_localStorage(false);
        setIsPaused(false)
        timerRef.current = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev > 0) return prev - 1;
                clearInterval(timerRef.current);
                handleIntervalEnd();
                return 0;
            });
        }, 1000);
    };

    const pause_in_localStorage = (pause_value) => {
        let old_session = JSON.parse(localStorage.getItem("focus_session"))
        old_session.paused = pause_value
        old_session.duration = timeRemaining/60
        old_session.cycles = cycleCount
        localStorage.setItem("focus_session", JSON.stringify(old_session))
    }

    const handleIntervalEnd = () => {
        if (cycleCount > 1 || (!isBreak && cycleCount === 1)) {
            // Toggle between focus and break
            setIsBreak(!isBreak);
            setTimeRemaining((isBreak ? duration : breakTime) * 60);
            if (isBreak) setCycleCount(prev => prev - 1); // Reduce cycle count after each break
            console.log(cycleCount);
            startTimer(); // Automatically start the next interval
        } else {
            // End the session when cycles are complete
            // resetTimer()
            blockSites();
        }
    };

    const router = useRouter();

    const pauseTimer = () => {
        clearInterval(timerRef.current);
        pause_in_localStorage(true)
        setIsPaused(true);
    };

    const resetTimer = () => {
        localStorage.removeItem("focus_session")
        window.location.reload();
    };

    const blockSites = () => {
        // Implement blocking logic here based on whitelist, e.g., using chrome.declarativeNetRequest
    };

    useEffect(() => {
        if (paused == false) startTimer()
        return () => clearInterval(timerRef.current); // Clean up on unmount
    }, []);

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="flex flex-col gap-8 items-center mt-8">
            <div className="bg-white bg-opacity-40 w-60 h-60 rounded-full p-2 flex items-center justify-center">
                <div className="w-52 h-52">
                    <CircularProgressbar 
                        value={(timeRemaining / (isBreak ? breakTime : duration) / 60) * 100} 
                        text={`${minutes}:${seconds.toString().padStart(2, '0')}`} 
                        strokeWidth={4}
                        styles={buildStyles({
                            rotation: 1, strokeLinecap: "round",
                            textColor: "#071a37",
                            pathColor: isBreak ? "#ff6347" : "#29a259", // Different color for break
                            trailColor: "rgba(255, 255, 255, .8)",
                            textSize: "12px"
                        })}
                    />
                </div>
            </div>
            <div className="flex gap-6 mt-4">
                <ResetButton onClick={resetTimer} />
                <PauseButton paused={isPaused} onClick={() => isPaused ? startTimer() : pauseTimer()} />
            </div>
            <p>{isBreak ? "Break Time" : "Focus Time"} - {cycleCount} cycles left</p>
        </div>
    );
}
