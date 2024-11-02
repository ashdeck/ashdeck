import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ISession } from "@/src/commons/interfaces";
import { convertTo24Hour, convertTo12Hour, add_to_time, getTimeDiff } from "@/src/commons/utils/timeConverter";


interface Props {
    block_lists: string[];
    options: { type?: "edit" | "create", show: boolean, data?: ISession, id?: string };
    setOptions: any;
    refetch: () => void;
    passOnData: (any) => void;  // pass up values to the parent
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

export default function RecurringSession({ block_lists, options, setOptions, refetch, passOnData }: Props) {
    const [toggleSelectedDay, setToggleSelectedDay] = useState({
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
    });

    const {
		register,
		setValue,
		getValues,
		reset,
		formState: { errors },
		handleSubmit, formState, watch,
	} = useForm()

    const [selectedDays, setSelectedDays] = useState<string[]>([]); // Track selected days
    const [fromHour, setFromHour] = useState(12); // Default to 12 AM
    const [fromMinute, setFromMinute] = useState(0);
    const [fromPeriod, setFromPeriod] = useState("AM");
    const [toHour, setToHour] = useState(12); // Default to 12 AM
    const [toMinute, setToMinute] = useState(0);
    const [toPeriod, setToPeriod] = useState("AM");
    const [rendered, setRendered] = useState(false)

    const [errorMessage, setErrorMessage] = useState(""); // State to track error message

    if (!rendered){
        let start_date, end_date
        if (options.type === "edit"){
            console.log(options.data, "This is the data we use")

            // we add minutes to the current date for the last date value if the date being edited is in hours and minutes
            if (options.data.type === "start_now"){
                // const time_diff = getTimeDiff(options.data.end_time)
                // const end_time = add_to_time(time_diff)
                // start_date = convertTo12Hour(new Date().toLocaleString())
                // end_date = convertTo12Hour(end_time.toString())
                start_date = convertTo12Hour(new Date().toLocaleString())
                end_date = convertTo12Hour(new Date().toLocaleString())
            } else {
                start_date = convertTo12Hour(new Date(new Date(options.data.start_time+"Z").toLocaleString()))
                end_date = convertTo12Hour(new Date(new Date(options.data.end_time+"Z").toLocaleString()))
            }
        } else {
            start_date = convertTo12Hour(new Date().toLocaleString())
            end_date = convertTo12Hour(new Date().toLocaleString())
        }
        setFromHour(start_date.hr)
        setToHour(end_date.hr)
        setFromMinute(start_date.minutes)
        setToMinute(end_date.minutes)
        setFromPeriod(start_date.period)
        setToPeriod(end_date.period)
        setRendered(true)
    }

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
        passOnData({
            fromHour, fromMinute, fromPeriod, toHour, toMinute, toPeriod, selectedDays
        })
    }, [fromHour, fromMinute, fromPeriod, toHour, toMinute, toPeriod, selectedDays]);



    // Handle the toggle for selected days
    const toggleDaySelection = (day: { day_key: string; label: string }, day_key: string) => {
        setToggleSelectedDay((prevToggleSelectedDay) => ({
            ...prevToggleSelectedDay,
            [day_key]: !prevToggleSelectedDay[day_key], // Toggle the day value
        }));

        if (!toggleSelectedDay[day_key]) {
            // Add day to selectedDays
            setSelectedDays((prevSelectedDays) => [...prevSelectedDays, day.label]);
        } else {
            // Remove day from selectedDays
            setSelectedDays((prevSelectedDays) => prevSelectedDays.filter((d) => d !== day.label));
        }
    };

    return (
        <div className="w-full">
            <div className="flex gap-4 mr-4 w-full justify-between">
                <div className="bg-slate-300 rounded-md py-2 px-4 w-1/2">
                    <div className="flex items-center gap-2 justify-center">
                        <p className="font-semibold mr-4">From</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={1}
                            max={12}
                            value={fromHour}
                            {...register("from_hour")}
                            onChange={(e) => setFromHour(Math.max(1, Math.min(12, parseInt(e.target.value) || 12)))}
                        />
                        <p>:</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={0}
                            max={59}
                            value={fromMinute}
                            {...register("from_minutes")}
                            onChange={(e) => setFromMinute(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                        />
                        <select
                            className="border rounded-md p-2 ml-4 outline-none"
                            value={fromPeriod}
                            {...register("from_period")}
                            onChange={(e) => setFromPeriod(e.target.value)}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>

                <div className="bg-slate-300 rounded-md w-1/2">
                    <div className="flex items-center gap-2 py-2 px-4 justify-center">
                        <p className="font-semibold mr-4">To</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={1}
                            max={12}
                            value={toHour}
                            {...register("to_hours")}
                            onChange={(e) => setToHour(Math.max(1, Math.min(12, parseInt(e.target.value) || 12)))}
                        />
                        <p>:</p>
                        <input
                            className="w-12 h-10 text-center rounded-md outline-none"
                            type="number"
                            min={0}
                            max={59}
                            value={toMinute}
                            {...register("to_minutes")}
                            onChange={(e) => setToMinute(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
                        />
                        <select
                            className="border rounded-md p-2 ml-4 outline-none"
                            value={toPeriod}
                            {...register("to_period")}
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

            <div className="flex gap-6 items-center pt-8 mx-auto w-full justify-center">
                {recurring_days.map((day) => {
                    const day_value = day.day_key;
                    return (
                        <div
                            key={day_value}
                            onClick={() => toggleDaySelection(day, day_value)}
                            className={`cursor-pointer`}
                        >
                            <div
                                className={`border ${
                                    toggleSelectedDay[day_value] ? "bg-primary text-white" : ""
                                } rounded-full p-3 w-14 h-14 flex justify-center items-center`}
                            >
                                {toggleSelectedDay[day_value] ? "✓" : day.day_key} {/* Add checkmark if selected */}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Display selected days */}
            <div className="pt-8 flex flex-wrap gap-2">
                {selectedDays.length > 0 ? (
                    selectedDays.map((day, index) => (
                        <span key={index} className="bg-primary-dark-alt text-white py-1 px-3 rounded-full capitalize">
                            {day}
                        </span>
                    ))
                ) : (
                    <p className="hidden"></p>
                )}
            </div>
        </div>
    );
}
