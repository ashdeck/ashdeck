import QuickActions from "../_components/QuickActions"
import HeroView from "../_components/HeroView"
import CustomButton from "@/src/commons/components/CustomButton"
import TimerSetup from "../_components/focus_mode/TimerSetup"
import { ArrowUpIcon, CheckIcon, PlayCircleIcon, PlayIcon, PlusIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import { ArrowDown, PlayCircle } from "iconsax-react"
import DashboardSideBar from "../_components/Sidebar"
import FocusSoundSelect from "../_components/focus_mode/FocusSoundSelect"
import RedirectURL from "../_components/focus_mode/RedirectURL"
import FocusSession from "../_components/focus_mode/FocusSession"
import { TrashIcon } from "@heroicons/react/24/outline"


export default function FocusMode(){
    const [whiteList, setWhiteList] = useState(["facebook.com", "twitter.com", "reddit.com", "youtube.com"])
    const [showTimer, setShowTimer] = useState(false)
    const [showEditDialog, setShowEditDialog] = useState<{
		type?: "edit" | "create",
		show: boolean,
		url?: string,
	}>({
		type: "create",
		show: false,
		url: null,
	})
    return (
        <div className={"bg-gray-300 w-full h-full min-h-screen flex flex-col"}>

            <div className="p-16 md:max-w-full flex gap-8 justify-center">
                <DashboardSideBar />
                <RedirectURL options={showEditDialog} setOptions={setShowEditDialog} />
                <div className="max-w-[80%]">
                    <div className="flex flex-col mr-8">
                    <div>
                        <h1 className="font-semibold text-4xl text-[#071a37]">Focus Mode</h1>
                        <p className="text-[#525353] pt-2">Use focus mode with break intervals to avoid distractions. Create a blocklist and add multiple websites to it.
                            Add websites you want to keep using in a white list.
                            We can add more to this copy over time so no problem at all.
                        </p>
                        <div className="py-4 flex items-center gap-3">
                            {!showTimer && <CustomButton onClick={()=>setShowTimer(true)}>Start Focus Session</CustomButton>}
                            <CustomButton onClick={()=>setShowEditDialog({show: true})} className="bg-[#071a37]">Redirect your block site</CustomButton>
                        </div>
                    </div>

                    {/* timer */}
                    {showTimer ? <FocusSession duration={25} cycles={3} break_time={10} /> :
                        <div className="">
                            <h4 className="font-semibold text-lg underline hidden">Timer Setup</h4>
                            <div className="py-8">
                                <TimerSetup metric_name="Focus Time" description="Simple description" initial_value={25}/>
                                <TimerSetup metric_name="Break Time" description="Simple description" initial_value={5}/>
                                <TimerSetup metric_name="Number of Cycles" description="Simple description" initial_value={1}/>
                                <div className="flex bg-gray-300 justify-between items-center border-b first:pt-0 pt-4 pb-4 last:border-b-0 last:pb-0">
                                <div className="">
                                    <h4 className="font-medium text-md">Focus Sound</h4>
                                    <p className="text-[#525353]">Some description about sound</p>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <PlayIcon className="text-[#071a37] h-8 w-8"/>
                                        <FocusSoundSelect />
                                        {/* <input className="max-w-24 bg-[#071a37] text-white text-center py-2 px-4 rounded-md" min={1} type="number" name="focus_mode" id="" defaultValue="" /> */}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4 className="font-semibold text-lg mb-4">Allowed Sites List</h4>
                                <div>
                                    <div className="flex gap-4 rounded-md">
                                        <input type="text" placeholder="ex: facebook.com" name="white-list" id="white-list" className="bg-gray-300 px-4 py-2 w-full rounded-lg border border-gray-200" />
                                        <CustomButton startIcon={<PlusIcon />} className="w-44 py-3 font-bold outline-none hover:outline-none">Add to List</CustomButton>
                                    </div>

                                    <div className="px-2">
                                        <div className="my-6 flex flex-col gap-4">
                                            {whiteList.map((domain, i)=>(<div className="flex gap-2 items-center justify-between">
                                                <div className="flex gap-4">
                                                    <p>{i+1}.</p> <p>{domain}</p>
                                                </div>
                                                <TrashIcon className="w-6 h-6"/>
                                            </div>))}
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
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
