type Props = {
	metric_name: string,
    description: string,
    initial_value: number
}

export default function TimerSetup({ metric_name, description, initial_value }: Props){
    return (
        <div className="flex bg-gray-300 justify-between items-center border-b first:pt-0 pt-4 pb-4 last:border-b-0 last:pb-0">
            <div className="">
                <h4 className="font-medium text-md">{metric_name}</h4>
                <p className="text-[#525353]">{description}</p>
            </div>
            <div className="">
                <input className="max-w-24 bg-[#071a37] text-white text-center py-2 px-4 rounded-md" min={1} type="number" name="focus_mode" id="" defaultValue={initial_value} />
            </div>
        </div>
    )
}
