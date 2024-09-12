import CustomButton from "@/src/commons/components/CustomButton"
import DashboardSideBar from "../_components/Sidebar"
export default function Settings(){
    return (
        <div className="bg-gray-300 min-h-screen w-full">
            <div className="flex gap-8 text-black px-24 py-16 w-full">
                <DashboardSideBar />
                <div className="flex flex-col gap-24 rounded-lg w-full">


                    <div className="">
                        <h3 className="text-xl bg-[#071a37] px-4 text-white block py-4 rounded-lg text-center uppercase">User Profile</h3>
                        <div className="">
                            <div className="w-full flex gap-8 mt-8">
                                <div className="w-full">
                                    <h5 className="text-primary font-semibold">First Name</h5>
                                    <input className="bg-transparent border-b-2 border-gray-500 outline-none w-full" type="text" />
                                </div>
                                <div className="w-full">
                                    <h5 className="font-semibold text-primary">Last Name</h5>
                                    <input className="bg-transparent border-b-2 border-gray-500 outline-none w-full" type="text" />
                                </div>
                            </div>
                            <div className="w-full mt-8">
                                <h5 className="font-semibold text-primary">Email Address</h5>
                                <input className="bg-transparent border-b-2 border-gray-500 outline-none w-full" type="text" />
                            </div>

                            <div className="flex items-end gap-4 flex-col sm:flex-row">
                                <div className="mt-8 w-full">
                                    <h5 className="font-semibold text-primary">Password</h5>
                                    <input className="bg-transparent border-b-2 border-gray-500 outline-none w-full" type="password" />
                                </div>
                                <CustomButton className="sm:w-48 py-2">Change Password</CustomButton>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <h3 className="text-xl bg-[#071a37] px-4 text-white block py-4 rounded-lg text-center uppercase">Clock Settings</h3>
                        <div className="w-full flex gap-8 mt-8">
                            <div className="w-full">
                                <h5 className="font-semibold text-primary">Timezone</h5>
                                <select defaultValue={"Kampala (U) EAT"} className="w-full py-2 px-2 rounded-lg outline-none">
                                    <option value="12">Kampala (U) EAT</option>
                                    <option value="24">Nairobi (K) EAT</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <h5 className="font-semibold text-primary">Clock</h5>
                                <select defaultValue={"12"} className="w-full py-2 px-2 rounded-lg outline-none">
                                    <option value="12">12 Hour</option>
                                    <option value="24">24 Hour</option>
                                </select>
                            </div>
                        </div>

                        {/* <div className="flex gap-2 flex-col mt-4">
                            <h5 className="font-semibold text-primary">Theme</h5>
                            <select defaultValue={"Automatic"} className="w-full py-2 px-2 rounded-lg outline-none">
                                <option value="automatic">Automatic</option>
                                <option value="24">Dark</option>
                                <option value="24">Light</option>
                            </select>
                        </div> */}
                        <CustomButton className="mt-4">Change</CustomButton>
                    </div>

                    <div className="">
                        <h3 className="text-xl bg-[#071a37] px-4 text-white block py-4 rounded-lg text-center uppercase">Account Information</h3>
                        <div className="w-full sm:w-[50%] flex flex-col gap-4 mt-8">
                            <div className="w-full flex">
                                <h5 className="text-primary font-semibold w-44">Account type</h5>
                                <p className="ml-4 md:ml-[50%] font-semibold">Basic</p>
                            </div>
                            <div className="w-full flex">
                                <h5 className="text-primary font-semibold w-44">Subscription Period</h5>
                                <p className="ml-4 md:ml-[50%] font-semibold">Monthly</p>
                            </div>
                            <div className="w-full flex">
                                <h5 className="text-primary font-semibold w-44">Subscription Expiry</h5>
                                <p className="ml-4 md:ml-[50%] font-semibold">24/05/2024</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}