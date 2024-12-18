import QuickActions from "../_components/QuickActions"
import HeroView from "../_components/HeroView"
import CustomButton from "@/src/commons/components/CustomButton"
import TimerSetup from "../_components/focus_mode/TimerSetup"
import { ArrowUpIcon, CheckIcon, PlayCircleIcon, PlayIcon, PlusIcon } from "@heroicons/react/16/solid"
import { useEffect, useState } from "react"
import { ArrowDown, PlayCircle, TrendUp } from "iconsax-react"
import DashboardSideBar from "../_components/Sidebar"
import FocusSoundSelect from "../_components/focus_mode/FocusSoundSelect"
import RedirectURL from "../_components/focus_mode/RedirectURL"
import FocusSession from "../_components/focus_mode/FocusSession"
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline"
import Timer2 from "../_components/focus_mode/timer2/timer2"
import { TiChartLine } from "react-icons/ti"


export default function FocusMode(){
    const saved_Session = JSON.parse(localStorage.getItem("focus_session"))
    const [whiteList, setWhiteList] = useState((saved_Session && saved_Session.whiteList) || [])
    const [duration, setDuration] = useState((saved_Session && saved_Session.duration) || 2);
    const [cycles, setCycles] = useState((saved_Session && saved_Session.cycles) || 3);
    const [breakTime, setBreakTime] = useState((saved_Session && saved_Session.breakTime) || 1);
    const [paused, setPaused] = useState((saved_Session && saved_Session.paused) || false)
    const [showTimer, setShowTimer] = useState((saved_Session && true) || false)
    const [elapsedTime, setElapsedTime] = useState(saved_Session && saved_Session.elapsedTime || 0)
    const [newSite, setNewSite] = useState("")
    const [showEditDialog, setShowEditDialog] = useState<{
		type?: "edit" | "create",
		show: boolean,
		url?: string,
	}>({
		type: "create",
		show: false,
		url: null,
	})

    const addMinutes = (date, minutes) => {
        console.log(minutes)
        const res = new Date(date.getTime() + (minutes*60000))
        console.log(date, minutes, res)
        return res
    }

    const total_break_time = breakTime * cycles > 1 ? (cycles-1): cycles
    const total_duration = duration * cycles
    const end_time = addMinutes(new Date(), total_break_time+total_duration)
    // console.log(total_break_time + total_duration, end_time)

    const focus_session = {
        cycles: cycles,
        end_time,
        breakTime: breakTime,
        original_breakTime: breakTime,
        original_duration: duration,
        paused: paused,
        duration: duration,
        whiteList: whiteList,
        elapsedTime: elapsedTime
    }


    const startSession = () => {
        localStorage.setItem("focus_session", JSON.stringify(focus_session))
        window.dispatchEvent(new CustomEvent("FocusSessionToggle", { detail: focus_session }));
        console.log("Dispatch sent")
        setShowTimer(true)
    }

    const handleRemoveSite = (site) => {
        setWhiteList(whiteList.filter((s) => s !== site));
    };

    const handleAddSite = () => {
    if (newSite.trim()) {
        setWhiteList((prevList) => [...prevList, newSite.trim()]);
        setNewSite("");  // Clear input after adding
    }
};

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewSite(e.target.value);
};

    useEffect(()=>{}, [duration, cycles, breakTime, paused, duration, whiteList])
    return (
        <div className={"bg-gray-300 w-full flex flex-col"}>

            <div className="p-16 pt-24 md:max-w-full flex gap-8 justify-center mb-44">
                <DashboardSideBar />
                <RedirectURL options={showEditDialog} setOptions={setShowEditDialog} />
                <div className="max-w-[80%]">
                    <div className="flex flex-col mr-8">
                    <div>
                        {/* {!showTimer && <h1 className="font-semibold text-4xl text-[#071a37]">Focus Mode</h1>} */}
                        <div className="w-[880px]"></div>
                        <p className="text-[#525353] pt-2 hidden">Use focus mode with break intervals to avoid distractions. Create a blocklist and add multiple websites to it.
                            Add websites you want to keep using in a white list.
                            We can add more to this copy over time so no problem at all.
                        </p>
                    </div>

                    {/* timer */}

                    {showTimer ? <FocusSession /> :
                        <div className="shadow-xl rounded-lg max-h-[600px]">
                            <div className="pt-8 px-8">
                                <TimerSetup
                                    metric_name="Focus Time"
                                    description="Set the focus duration"
                                    initial_value={duration}
                                    onValueChange={setDuration}
                                />
                                <TimerSetup
                                    metric_name="Break Time"
                                    description="Set break time duration"
                                    initial_value={breakTime}
                                    onValueChange={setBreakTime}
                                />
                                <TimerSetup
                                    metric_name="Number of Cycles"
                                    description="Set the number of cycles"
                                    initial_value={cycles}
                                    onValueChange={setCycles}
                                />
                                <div className="flex bg-gray-300 justify-between items-center border-b first:pt-0 pt-4 pb-4 last:border-b-0 last:pb-0">
                                    <div className="">
                                        <h4 className="font-medium text-md">Focus Sound</h4>
                                        <p className="text-[#525353]">Some description about sound</p>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <PlayIcon className="text-[#071a37] h-6 w-6"/>
                                            <FocusSoundSelect />
                                        </div>
                                </div>

                                <div className="flex bg-gray-300 justify-between items-center border-b first:pt-0 pt-4 pb-4 last:border-b-0 last:pb-0">
                                    <div className="">
                                        <h4 className="font-medium text-md">Focus White List</h4>
                                        <p className="text-[#525353]">Add list of sites you don't want to block</p>
                                        </div>
                                        <div className="flex gap-2 items-center cursor-pointer" onClick={()=>alert("Add white list")}>
                                            <p className="text-[#071a37] text-md font-semibold">Add White List</p>
                                            <div className="bg-[#071a37] rounded-full">
                                                <PlusIcon className="text-white h-6 w-6"/>
                                            </div>
                                        </div>
                                </div>

                                <div className="flex bg-gray-300 justify-between items-center border-b first:pt-0 pt-4 pb-4 last:border-b-0 last:pb-0 hidden">
                                    <div className="">
                                        <h4 className="font-medium text-md">Redirect Block Site (Optional)</h4>
                                        <p className="text-[#525353]">Add a site to redirect to when you try to access a blocked site</p>
                                        </div>
                                        <div className="flex gap-2 items-center cursor-pointer" onClick={()=>alert("Add white list")}>
                                            <p className=" text-[#071a37] text-lg">Add Redirect URL</p>
                                            <div className="bg-[#071a37] rounded-full">
                                                <TiChartLine className="text-white h-6 w-6"/>
                                            </div>
                                        </div>
                                </div>
                            </div>


                            <div className="p-8">
                                {/* <h4 className="font-semibold text-lg mb-2">Allowed Sites List</h4> */}
                                <div>
                                    <div onClick={handleAddSite} className="gap-4 rounded-md hidden">
                                        <input onChange={handleInputChange} value={newSite} type="text" placeholder="ex: facebook.com" name="white-list" id="white-list" className="bg-gray-300 px-4 py-2 w-full rounded-lg border border-gray-200" />
                                        <CustomButton startIcon={<PlusIcon />} className="w-44 py-3 font-bold outline-none hover:outline-none">Add allowed List</CustomButton>
                                    </div>

                                    <div className="px-2 hidden">
                                        <div className="mt-4 mb-3 flex flex-col gap-4">
                                            {whiteList.map((domain, i)=>(<div className="flex gap-2 items-center justify-between">
                                                <div className="flex gap-4">
                                                    <p>{i+1}.</p> <p>{domain}</p>
                                                </div>
                                                <div className="cursor-pointer" onClick={()=>handleRemoveSite(domain)}>
                                                    <TrashIcon className="w-6 h-6"/>
                                                </div>
                                            </div>))}
                                        </div>
                                    </div>

                                    {!showTimer && <div className="flex justify-between items-center gap-8">
                                        <CustomButton onClick={()=>setShowEditDialog({show: true})} className="bg-[#071a37]">Redirect your block site</CustomButton>
                                        <CustomButton onClick={startSession} className="px-6">Start Focus Session</CustomButton>
                                        </div>}

                                    <div className="flex gap-8 hidden">
                                        <CustomButton className="" startIcon={<ArrowUpIcon />}>Import</CustomButton>
                                        <CustomButton className="bg-[#071a37]" startIcon={<ArrowDown />}>Export</CustomButton>
                                    </div>
                                </div>

                                <div></div>
                            </div>
                        </div>
                    }
                    </div>
                </div>

            </div>


        </div>
    )
}
