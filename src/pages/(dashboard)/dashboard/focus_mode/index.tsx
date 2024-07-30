import QuickActions from "../_components/QuickActions"
import HeroView from "../_components/HeroView"
import CustomButton from "@/src/commons/components/CustomButton"
import TimerSetup from "../_components/focus_mode/TimerSetup"
import { ArrowUpIcon, CheckIcon, PlusIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import { ArrowDown } from "iconsax-react"
import DashboardSideBar from "../_components/Sidebar"


export default function FocusMode(){
    const [whiteList, setWhiteList] = useState(["facebook.com", "twitter.com", "reddit.com", "youtube.com"])
    return (
        <div className={"bg-gray-300 w-full h-full min-h-screen flex flex-col"}>

            <div className="py-16 md:max-w-full flex gap-8 justify-center">
                <DashboardSideBar />
                <div className="max-w-[70%]">
                    <div className="flex flex-col mx-8 max-w-[80%]">
                    <div>
                        <h1 className="font-semibold text-4xl text-[#071a37]">Focus Mode</h1>
                        <p className="text-[#525353] pt-2">Use focus mode with break intervals to avoid distractions. Create a blocklist and add multiple websites to it.
                            Add websites you want to keep using in a white list.
                            We can add more to this copy over time so no problem at all.
                        </p>
                        <div className="py-4">
                            <CustomButton>Start Focus Session</CustomButton>
                        </div>
                    </div>

                    {/* timer */}
                    <h4 className="font-semibold text-lg underline hidden">Timer Setup</h4>
                    <div className="py-8">
                        <TimerSetup metric_name="Focus Time" description="Simple description" initial_value={25}/>
                        <TimerSetup metric_name="Break Time" description="Simple description" initial_value={5}/>
                        <TimerSetup metric_name="Number of Cycles" description="Simple description" initial_value={1}/>
                    </div>

                    <div className="mt-4">
                        <h4 className="font-semibold text-lg mb-4">Whitelist</h4>
                        <div>
                            <div className="flex gap-4 rounded-md">
                                <input type="text" placeholder="ex: facebook.com" name="white-list" id="white-list" className="bg-gray-300 px-4 py-2 w-full rounded-lg border-2 border-[#071a370]" />
                                <CustomButton startIcon={<PlusIcon />} className="w-44 py-3 font-bold outline-none hover:outline-none">Add to List</CustomButton>
                            </div>

                            <div className="my-8 lg:max-w-[50%] grid grid-cols-2 gap-4">
                                {whiteList.map(domain=>(<div className="flex gap-2 items-center">
                                    <CheckIcon className="h-6 w-8 text-primary" /> <p>{domain}</p>
                                </div>))}
                            </div>

                            <div className="flex gap-8">
                                <CustomButton className="" startIcon={<ArrowUpIcon />}>Import</CustomButton>
                                <CustomButton className="bg-[#071a37]" startIcon={<ArrowDown />}>Export</CustomButton>
                            </div>
                        </div>

                        <div></div>
                    </div>
                    </div>
                </div>

            </div>


        </div>
    )
}