import { useState, useEffect } from "react";
import CustomButton from "@/src/commons/components/CustomButton";
import RecurringDay from "./RecurringDay";
import { ISession } from "@/src/commons/interfaces";
import { api } from "@/src/commons/utils/axiosProvider";
import { tokens } from "@/src/commons/tokens";

interface Props {
    block_lists: string[];
    options: { type?: "edit" | "create", show: boolean, data?: ISession, id?: number };
    setOptions: any;
    refetch: () => void;
}

const recurring_days = [
    { day_key: "Mon", label: "monday" },
    { day_key: "Tue", label: "tuesday" },
    { day_key: "Wed", label: "wednesday" },
    { day_key: "Thu", label: "thursday" },
    { day_key: "Fri", label: "friday" },
    { day_key: "Sat", label: "saturday" },
    { day_key: "Sun", label: "sunday" }
];

export default function RecurringSession({ block_lists, options, setOptions, refetch }: Props) {

    const [fromHour, setFromHour] = useState(12); // Default to 12 AM
    const [fromMinute, setFromMinute] = useState(0);
    const [fromPeriod, setFromPeriod] = useState("AM");
    const [toHour, setToHour] = useState(12); // Default to 12 AM
    const [toMinute, setToMinute] = useState(0);
    const [toPeriod, setToPeriod] = useState("AM");

    const [errorMessage, setErrorMessage] = useState(""); // State to track error message

    // Ensure "To" time is always greater than "From" time
    useEffect(() => {
        const fromTimeInMinutes = (fromHour % 12) * 60 + fromMinute + (fromPeriod === "PM" ? 720 : 0);
        const toTimeInMinutes = (toHour % 12) * 60 + toMinute + (toPeriod === "PM" ? 720 : 0);

        if (toTimeInMinutes < fromTimeInMinutes) {
            // If "To" time is less than or equal to "From" time, show an error
            setErrorMessage("End time must be later than start time.");
        } else {
            setErrorMessage(""); // Clear error if valid
        }
    }, [fromHour, fromMinute, fromPeriod, toHour, toMinute, toPeriod]);


    return (
        <div className="w-full">
            <div className="flex gap-4 mr-4 w-full">
                <div className="bg-slate-300 rounded-md py-2 px-4">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">From</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={1}
                            max={12}
                            value={fromHour}
                            onChange={(e) => setFromHour(Math.max(1, Math.min(12, parseInt(e.target.value) || 12)))}
                        />
                        <p>:</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={0}
                            max={59}
                            value={fromMinute}
                            onChange={(e) => setFromMinute(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                        />
                        <select
                            className="border rounded-md p-2 ml-4 outline-none"
                            value={fromPeriod}
                            onChange={(e) => setFromPeriod(e.target.value)}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>

                <div className="bg-slate-300 rounded-md">
                    <div className="flex items-center gap-2 py-2 px-4">
                        <p className="font-semibold">To</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={1}
                            max={12}
                            value={toHour}
                            onChange={(e) => setToHour(Math.max(1, Math.min(12, parseInt(e.target.value) || 12)))}
                        />
                        <p>:</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={0}
                            max={59}
                            value={toMinute}
                            onChange={(e) => setToMinute(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                        />
                        <select
                            className="border rounded-md p-2 ml-4 outline-none"
                            value={toPeriod}
                            onChange={(e) => setToPeriod(e.target.value)}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Error message display */}
            {errorMessage && (
                <div className="text-red-600 font-semibold pt-4">
                    {errorMessage}
                </div>
            )}

        </div>
    );
}
