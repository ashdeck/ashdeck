import { useForm } from "react-hook-form"
import React, { useEffect, useState } from "react"
import DialogLayout from "@commons/components/layouts/Dialog.layout"
import MainSettings from "./main_settings"
import CustomButton from "@commons/components/CustomButton"
import FormInput from "@commons/components/FormInput"
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { IBlockList } from "@interfaces"
import { useGlobalStore } from "@store"
import DropdownSelect from "@commons/components/DropdownSelect"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { api } from "@utils/axiosProvider"
import toast from "react-hot-toast"


interface Props {
	options: { show: boolean, main_settings: boolean };
	setOptions: any;
	// refetch: () => void;
}

const SettingsModal = ({ options = { show: false, main_settings: true }, setOptions }: Props) => {
    // const [closed, setClosed] = useState()
	return (
		<DialogLayout className={"w-[55%] max-h-fit items-start relative"} show={options?.show} setShow={setOptions}>
			<div className="flex justify-between px-4">
                <h3>Settings</h3>
                <div onClick={setOptions({show: false, main_settings: true})} className="">
                    <XMarkIcon />
                </div>
            </div>
            {options.main_settings && <MainSettings />}
		</DialogLayout>
	)
}

export default SettingsModal
