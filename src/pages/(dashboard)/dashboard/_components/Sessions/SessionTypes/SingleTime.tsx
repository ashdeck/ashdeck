import CustomButton from "@/src/commons/components/CustomButton"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { ISession } from "@/src/commons/interfaces"
import { useGlobalStore } from "@/src/commons/store"
import toast from "react-hot-toast"
import { tokens } from "@/src/commons/tokens"
import { api } from "@/src/commons/utils/axiosProvider"

interface Props {
    block_lists: string[]
    options: { type?: "edit" | "create", show: boolean, data?: ISession, id?: string };
    setOptions: any;
    refetch: () => void;
}


export default function SingleTimeSession({block_lists, options, setOptions, refetch}: Props){
    const {
		register,
		setValue,
		getValues,
		reset,
		formState: { errors },
		handleSubmit, formState, watch,
	} = useForm()

    const getHrsAndMinutes = (saved_data) => {
        var start_time = new Date(saved_data.start_time)
        var end_time = new Date(saved_data.end_time)
        var date_diff = Math.abs(new Date(end_time) - new Date())
        // console.log(new Date(end_time), new Date())


        var hours = date_diff/(1000*60*60)
        var absoluteHrs = Math.floor(hours)
        var h = absoluteHrs > 9 ? absoluteHrs : '0' + absoluteHrs 

        var minutes = (hours - absoluteHrs) * 60;
        var absoluteMinutes = Math.floor(minutes);
        var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

        var seconds = (minutes - absoluteMinutes) * 60;
        var absoluteSeconds = Math.floor(seconds);
        var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

        const time_diff = {h: h, m:m, s:s}
        // console.log(time_diff)
    }

    if (options.data) getHrsAndMinutes(options.data)

    const onSubmit = (data) => {
        const date = new Date(); // Current date and time

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`; // Create the date string

        console.log(date, "First before", date.getHours(), date.getMinutes())
        // Add hours and minutes
        date.setHours(date.getHours() + data.hours);
        date.setMinutes(date.getMinutes() + data.minutes);
        console.log(date, "Last after")

        const compile: ISession = {
            start_time: new Date(),
			end_time: date,
            start_date: formattedDate,
            type: "start_now",
            block_lists: block_lists
		}

        const resetModal = () => {
            reset()
        }

        api.post("/sessions", compile, {"Authorization": `Bearer ${tokens.access_token}`}).then((res) => {
				toast.success("Session Started")
				setOptions({
					type: "create",
					show: false,
					id: undefined,
				})
				refetch()
				resetModal()
			})
            .catch((err) => {
					toast.error(err.response.data.detail)
				})
		    .finally()

        console.log(compile)
    }

    return (
        <form className="flex bg-gray-300 w-full items-center justify-center py-2 rounded-lg px-4 gap-4">
            <div className="flex gap-2 items-center">
                <input className="w-12 h-8 text-center rounded-md text-black" type="number" name="hours" id="hours" defaultValue={0} min={0} {...register("hours")} />
                <p>Hrs</p>
            </div>
            <div className="flex gap-2 items-center">
                <input  className="w-12 h-8 rounded-md text-black text-center" max={60} type="number" name="minutes" id="minutes" defaultValue={0} min={0} {...register("minutes")} />
                <p>Mins</p>
            </div>
            <CustomButton onClick={handleSubmit(onSubmit)}>Start</CustomButton>
    </form>
)
}
