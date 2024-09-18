import CustomButton from "@/src/commons/components/CustomButton"
import { useForm } from "react-hook-form"
import { ISession } from "@/src/commons/interfaces"
import { useGlobalStore } from "@/src/commons/store"
import toast from "react-hot-toast"
import { tokens } from "@/src/commons/tokens"
import { api } from "@/src/commons/utils/axiosProvider"

interface Props {
    block_lists: string[]
    options: { type?: "edit" | "create", show: boolean, data?: ISession, id?: number };
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


    const onSubmit = (data) => {
        const date = new Date(); // Current date and time

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`; // Create the date string

        // Add 2 hours and 30 minutes
        date.setHours(date.getHours() + data.hours);
        date.setMinutes(date.getMinutes() + data.minutes);

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
