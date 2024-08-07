import CustomButton from "@/src/commons/components/CustomButton"
import RecurringDay from "./RecurringDay"

export default function RecurringSession({}){
    return (
    <div>
        <div className="flex flex-col gap-4">
            <div className="flex bg-gray-300 w-full items-center justify-center py-2 rounded-lg px-4 gap-4">
                <CustomButton>Start</CustomButton>
                <div className="flex gap-2 items-center">
                    <input className="w-12 h-8 text-center rounded-md text-black" type="number" name="minutes" id="minutes" defaultValue={0} min={0} max={60} />
                    <p>Hrs</p>
                </div>
                <div className="flex gap-2 items-center">
                    <input className="w-12 h-8 rounded-md text-black text-center" max={60} type="number" name="hours" id="hours" defaultValue={0} min={0} />
                    <p>Mins</p>
                </div>
            </div>

            <div className="flex bg-gray-300 w-full items-center justify-center py-2 rounded-lg px-4 gap-4">
                <CustomButton>End</CustomButton>
                <div className="flex gap-2 items-center">
                    <input className="w-12 h-8 text-center rounded-md text-black" type="number" name="minutes" id="minutes" defaultValue={0} min={0} max={60} />
                    <p>Hrs</p>
                </div>
                <div className="flex gap-2 items-center">
                    <input className="w-12 h-8 rounded-md text-black text-center" max={60} type="number" name="hours" id="hours" defaultValue={0} min={0} />
                    <p>Mins</p>
                </div>
            </div>
        </div>
        <div className="flex gap-4 items-center pt-8 mx-auto w-full justify-center">
            <RecurringDay day={"S"} />
            <RecurringDay day={"M"} />
            <RecurringDay day={"T"} />
            <RecurringDay day={"W"} />
            <RecurringDay day={"T"} />
            <RecurringDay day={"F"} />
            <RecurringDay day={"S"} />
        </div>
    </div>

)
}