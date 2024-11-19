import PauseButton from "./timer/PauseButton";
import ResetButton from "./timer/ResetButton";
import { useState, useEffect } from "react";

export default function FocusSession() {
    const initialSessionData = JSON.parse(localStorage.getItem('focus_session')) || {
        cycles: 2,
        breakTime: 1,
        paused: false,
        duration: 2,
        whiteList: []
    };

    // Recalculate total duration on each render to capture any updates
    const totalDuration = initialSessionData.duration * 60;// Focus duration in seconds
    let reloadedRender = 0;
    const [paused, setPaused] = useState(initialSessionData.paused);
    const [currentCycle, setCurrentCycle] = useState(initialSessionData.currentCycle || 1);
    const [isBreak, setIsBreak] = useState(initialSessionData.isBreak || false);
    const [remainingTime, setRemainingTime] = useState(totalDuration); // Remaining time in seconds
    const [initialRender, setInitialRender] = useState(true)

    useEffect(() => {
        initialRender == true && setInitialRender(!initialRender)
        reloadedRender = initialSessionData.elapsedTime; // this is to save the elapsed time on the first render since we don't update the
    }, []);

    useEffect(() => {
        const sessionData = localStorage.getItem('focus_session');
        if (sessionData) {
            const data = JSON.parse(sessionData);
            const timeAfterReload = totalDuration - data.elapsedTime;
            setRemainingTime(timeAfterReload > 0 ? timeAfterReload : 0);
            setCurrentCycle(data.currentCycle);
            setIsBreak(data.isBreak);
            setPaused(data.paused);
        } else {
            resetSession();
        }
    }, [totalDuration]);

    useEffect(() => {
        let timer;
        if (!paused && remainingTime > 0) {
            timer = setInterval(() => {
                setRemainingTime((prev) => {
                    const newTime = prev - 1;
                    if (newTime <= 0) {
                        handleCycleEnd();
                    }
                    return newTime;
                });
            }, 1000);
        }

        if (!paused) {
            const startTime = Date.now();
            const elapsedTime = totalDuration - remainingTime + reloadedRender;

            localStorage.setItem('focus_session', JSON.stringify({
                ...initialSessionData,
                elapsedTime,
                startTime,
                currentCycle,
                isBreak,
                paused: false
            }));
        }

        return () => clearInterval(timer);
    }, [paused, remainingTime, currentCycle, isBreak, totalDuration]);

    function handleCycleEnd() {
        if (isBreak) {
            setIsBreak(false);
            setRemainingTime(totalDuration); // Reset to focus duration
            setCurrentCycle((prev) => prev + 1);
            localStorage.setItem('focus_session', JSON.stringify({
                ...initialSessionData,
                currentCycle: currentCycle + 1,
                isBreak: false,
                elapsedTime: 0
            }));
        } else {
            if (currentCycle < initialSessionData.cycles) {
                setIsBreak(true);
                setRemainingTime(initialSessionData.breakTime * 60); // Set to break time
                localStorage.setItem('focus_session', JSON.stringify({
                    ...initialSessionData,
                    isBreak: true,
                    elapsedTime: 0
                }));
            } else {
                resetSession();
            }
        }
    }

    function resetSession() {
        setPaused(true);
        setCurrentCycle(1);
        setIsBreak(false);
        setRemainingTime(totalDuration);
        const session = JSON.parse(localStorage.getItem("focus_session"))
        localStorage.removeItem('focus_session'); // Clear local storage on reset
        window.dispatchEvent(new CustomEvent("FocusSessionReset", { detail: session}));
        window.location.reload();
    }

    function togglePause() {
        setPaused((prev) => {
            const newPausedState = !prev;
            let focus_session_to_save;
            if (newPausedState) {
                focus_session_to_save = {
                    ...initialSessionData,
                    paused: true,
                    elapsedTime: totalDuration - remainingTime,
                    startTime: null
                }
                localStorage.setItem('focus_session', JSON.stringify(focus_session_to_save));
                window.dispatchEvent(new CustomEvent("FocusSessionToggle", { detail: focus_session_to_save }));
            } else {
                console.log("Resume here")
                const startTime = Date.now();
                focus_session_to_save = {
                    ...initialSessionData,
                    paused: false,
                    startTime,
                    elapsedTime: totalDuration - remainingTime
                }
                localStorage.setItem('focus_session', JSON.stringify(focus_session_to_save));
                window.dispatchEvent(new CustomEvent("FocusSessionToggle", { detail: focus_session_to_save }));
            }
            return newPausedState;
        });
    }

    function PauseResume(){
        togglePause()
        const saved_session = JSON.parse(localStorage.getItem("focus_session"))
        window.dispatchEvent(new CustomEvent("FocusSessionToggle", { detail: saved_session }));
    }

    function toggleSync(){
        togglePause()
        const saved_session = JSON.parse(localStorage.getItem("focus_session"))
        localStorage.setItem("focus_session", JSON.stringify({...saved_session, paused: !saved_session.paused}))
    }

    let minutes = Math.floor(remainingTime / 60);
    const hours = Math.floor(minutes/60);
    minutes = minutes % 60
    const seconds = remainingTime % 60;

    return (
        <div className="shadow-xl rounded-xl mt-2 pb-16  max-h-[445px]">
            <div className="flex justify-center gap-[4px] my-8">
                {Array.from({ length: initialSessionData.cycles }).map((_, index) => (
                    <div key={index} className="cycle-div">
                        <div
                            className={`h-[4px] w-12 sm:w-24 md:w-32 bg-primary ${index < currentCycle ? "bg-green-500" : "bg-gray-400"}`}
                            style={{
                                backgroundSize: isBreak || index + 1 < currentCycle ? '100%' : `${(totalDuration - remainingTime) / totalDuration * 100}% 100%`
                            }}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="mb-6 flex justify-center items-center mt-8">
                <p>{`Cycle ${currentCycle} of ${initialSessionData.cycles} | ${isBreak ? "Break" : "Focus"} for ${isBreak ? initialSessionData.breakTime : initialSessionData.duration} minutes`}</p>
            </div>
            <div className="p-8">
                <div className="text-center mb-6">
                    <h2 className="font-semibold text-gray-400 text-2xl">{paused ? "Focus Session Paused" : "Focus Session Running"}</h2>
                </div>
                <div className="flex items-center justify-center flex-col gap-8">
                    <div className="flex gap-4 sm:gap-12 text-secondary items-center text-[2rem] sm:text-[3rem] sm:font-normal lg:text-[4rem] font-mono">
                        <span>{String(hours).padStart(2, "0")}</span>:
                        <span>{String(minutes).padStart(2, "0")}</span>:
                        <span>{String(seconds).padStart(2, "0")}</span>
                    </div>
                    <div className="flex gap-8 mt-8">
                        <div id="sync" onClick={toggleSync}></div>
                        <PauseButton paused={paused} onClick={PauseResume} />
                        <ResetButton onClick={resetSession} />
                    </div>
                </div>
            </div>
        </div>
    );
}
