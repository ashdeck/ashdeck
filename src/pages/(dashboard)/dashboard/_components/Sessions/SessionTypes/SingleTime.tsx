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

    // const [defaultHours, setDefaultHours] = useState(0)
    // const [defaultMinutes, setDefaultMinutes] = useState(0)

    const getHrsAndMinutes = () => {
        const saved_data = options.data
        var end_time = new Date(saved_data.end_time)
        var now = new Date(new Date().toISOString().slice(0, -1))
        console.log(now, "\n", end_time)
        var date_diff = Math.abs(end_time - now)


        var hours = date_diff/(1000*60*60)
        var absoluteHrs = Math.floor(hours)
        var h = absoluteHrs > 9 ? absoluteHrs : '0' + absoluteHrs 

        var minutes = (hours - absoluteHrs) * 60;
        var absoluteMinutes = Math.floor(minutes);
        var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;


        // console.log(h, m, "Hours and minutes")

        var seconds = (minutes - absoluteMinutes) * 60;
        var absoluteSeconds = Math.floor(seconds);
        var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

        const time_diff = {h: h, m:m, s:s}
        return time_diff
    }


    const onSubmit = (data) => {
        const date = new Date(); // Current date and time

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`; // Create the date string

        // console.log(date, "First before", date.getHours(), date.getMinutes())
        // Add hours and minutes
        date.setHours(date.getHours() + parseInt(data.hours));
        date.setMinutes(date.getMinutes() + parseInt(data.minutes));
        // console.log(date, "Last after")

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
        options.type === "create" ?
        api.post("/sessions", compile, {"Authorization": `Bearer ${tokens.access_token}`}).then((res) => {
				toast.success("Session Started")
				localStorage.setItem("newSession", JSON.stringify(res.data))
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
        :
        api.patch(`/sessions/${options.data.id}`, compile, {"Authorization": `Bearer ${tokens.access_token}`}).then((res) => {
				toast.success("Session Updated")
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
    }

    return (
        <form className="flex bg-gray-300 w-full items-center justify-center py-2 rounded-lg px-4 gap-4">
            <div className="flex gap-2 items-center">
                <input className="w-12 h-8 text-center rounded-md text-black" type="number" name="hours" id="hours" defaultValue={options.data ? getHrsAndMinutes().h :0} min={0} {...register("hours")} />
                <p>Hrs</p>
            </div>
            <div className="flex gap-2 items-center">
                <input  className="w-12 h-8 rounded-md text-black text-center" max={59} type="number" name="minutes" id="minutes" defaultValue={options.data ? getHrsAndMinutes().m :0} min={0} {...register("minutes")} />
                <p>Mins</p>
            </div>
            <CustomButton onClick={handleSubmit(onSubmit)}>{options.type === "edit" && options.data.type == "start_now" ? "Restart": "Start Now"}</CustomButton>
    </form>
)
}
