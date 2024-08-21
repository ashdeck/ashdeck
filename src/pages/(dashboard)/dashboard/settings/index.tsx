import CustomButton from "@/src/commons/components/CustomButton"
import DashboardSideBar from "../_components/Sidebar"
export default function Settings(){
    return (
        <div className="bg-gray-300 min-h-screen w-full">
            <div className="flex gap-8 text-black px-24 py-16 w-full">
                <DashboardSideBar />
                <div className="flex flex-col gap-24 rounded-lg w-full">


                    <div className="">
                        <h3 className="text-2xl bg-[#071a37] px-4 text-white block py-4 rounded-sm text-center">User Profile</h3>
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
                                <CustomButton className="sm:w-48 py-4 rounded-sm">Change Password</CustomButton>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <h3 className="text-2xl bg-[#071a37] px-4 text-white block py-4 rounded-sm text-center">Clock Settings</h3>
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
                    </div>


                    <div className="">
                        <h3 className="text-2xl bg-[#071a37] px-4 text-white block py-4 rounded-sm text-center">Account Information</h3>
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
                    </div>


                    <div className="">
                        <h3 className="text-2xl bg-[#071a37] px-4 text-white block py-4 rounded-sm text-center">Focus Session</h3>
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
                    </div>


                </div>
            </div>
        </div>
    )
}