import { useForm } from "react-hook-form"
import React, { useEffect, useState } from "react"
import DialogLayout from "@commons/components/layouts/Dialog.layout"
import CustomButton from "@commons/components/CustomButton"
import FormInput from "@commons/components/FormInput"
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { IBlockList } from "@interfaces"
import { useGlobalStore } from "@store"
import DropdownSelect from "@commons/components/DropdownSelect"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import SingleTime from "./SessionTypes/SingleTime"
import StartLaterSession from "./SessionTypes/StartLater"
import RecurringSession from "./SessionTypes/Recurring"
import { api } from "@utils/axiosProvider"
import "@assets/css/components.css";
import toast from "react-hot-toast"


interface IListTypeOptions {
	value: "whitelist" | "blacklist";
	label: string;
}

interface Props {
	options: { type?: "edit" | "create", show: boolean, data?: IBlockList, id?: number };
	setOptions: any;
	refetch: () => void;
}

const AddSession = ({ options = { type: "create", show: false }, setOptions, refetch }: Props) => {

	const listTypeOptions: IListTypeOptions[] = [
		{ value: "whitelist", label: "Whitelist (Only allow sites in list)" },
		{ value: "blacklist", label: "Blacklist (Allow sites except those in list)" },
	]


    const [selectedTab, setSelectedTab] = useState("start_now")
	const {
		register,
		setValue,
		getValues,
		reset,
		formState: { errors },
		handleSubmit, formState, watch,
	} = useForm()
	const { loading, setLoading } = useGlobalStore()
	const [listType, setListType] = useState<IListTypeOptions>(listTypeOptions[1])
	const [entries, setEntries] = useState<any[]>([])

	useEffect(() => {
		if (options?.data && options?.type === "edit") {
			Object.keys(options?.data).forEach((key) => {
				setValue(key, options?.data[key])
			})
			setListType(listTypeOptions.find((item) => item.value === options?.data?.type))
			setEntries(options?.data?.entries)
		} else {
			resetModal()
		}

	}, [options?.data, selectedTab])

	function addSite(event) {
		event && event.preventDefault()

		if (!getValues("site")) return
		if (entries.includes(getValues("site"))) return
		getValues("site")
		setEntries([...entries, getValues("site")])
		setValue("site", "")
	}

	let deleteSite = (index) => {
		let temp = entries
		temp.splice(index, 1)
		setEntries([...temp])
	}

	function resetModal() {
		reset()
		setEntries([])
		setListType(listTypeOptions[1])
	}

	const submitAction = async (data: any) => {
		setLoading(true)

		const compile: IBlockList = {
			entries: entries,
			name: data?.name,
			type: listType?.value,
		}

		if (options?.type === "create") {
			api.post("/sessions", compile).then((res) => {
				toast.success("Block list created successfully")
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
				.finally(() => setLoading(false))
		} else {
			api.patch(`/sessions/${options?.data?.id}`, compile).then((res) => {
				toast.success("Block list updated successfully")
				setOptions({
					type: "create",
					show: false,
					id: undefined,
				})
				refetch()
			})
				.catch((err) => {
					toast.error(err.response.data.detail)
				})
				.finally(() => setLoading(false))
		}

	}

	const closeModal = () => {
		setOptions({
			type: "create",
			show: false,
			id: undefined,
		})

	}

	return (
		<DialogLayout className={"w-[40%] max-h-fit items-start"} show={options?.show} setShow={setOptions}>
			<div className="flex w-full justify-between items-center">
				<div className="flex max-w-[70%] flex-col gap-0.5">
					<p className="font-outfit text-primary-dark font-semibold capitalize text-xl">
						Create Session
					</p>
					<p className="text-gray-500 dark:text-gray ">
						Fill in the details to create a new session.
					</p>
				</div>
				<div className="max-w-[30%]">
					<XMarkIcon onClick={closeModal} className="w-6 h-6 text-primary-dark cursor-pointer" />
				</div>
			</div>

            <div className="flex items-center gap-6 mt-4 font-bold text-lg">
                <h3 className={`nav-item ${selectedTab === 'start_now' ? 'nav-item-active' : ''}`}
						onClick={() => setSelectedTab("start_now")}>Start Now</h3>
                <h3 className={`nav-item ${selectedTab === 'start_later' ? 'nav-item-active' : ''}`}
						onClick={() => setSelectedTab("start_later")}>Start Later</h3>
                <h3 className={`nav-item ${selectedTab === 'recurring' ? 'nav-item-active' : ''}`}
						onClick={() => setSelectedTab("recurring")}>Recurring</h3>
            </div>


			<div className="flex flex-col text-black w-full my-8">
				{selectedTab === "start_now" ? <SingleTime />: selectedTab === "recurring"? <RecurringSession />: <StartLaterSession />}
				<div className="flex justify-between gap-4 mt-8">
					<div className="bg-gray-300 rounded-lg w-[50%]">
						<h4 className="p-4 font-semibold text-lg">Block Lists</h4>
						<div className="flex w-full items-center mb-6 rounded-lg px-4 gap-4">
							<div className="grid grid-cols-2 gap-2">
								<div className="flex items-center gap-2">
									<input className="" type="checkbox" name="" id="" />
									<p>All</p>
								</div>

								<div className="flex items-center gap-2">
									<input type="checkbox" name="" id="" />
									<p>Socials</p>
								</div>

								<div className="flex items-center gap-2">
									<input type="checkbox" name="" id="" />
									<p>Custom</p>
								</div>
							</div>
						</div>
					</div>


					<div className="bg-gray-300 rounded-lg w-[50%]">
						<h4 className="p-4 font-semibold text-lg">White Lists</h4>
						<div className="flex w-full items-center mb-6 rounded-lg px-4 gap-4">
							<div className="grid grid-cols-2 gap-2">
								<div className="flex items-center gap-2">
									<input className="" type="checkbox" name="" id="" />
									<p>Work</p>
								</div>

								<div className="flex items-center gap-2">
									<input type="checkbox" name="" id="" />
									<p>Business</p>
								</div>

								<div className="flex items-center gap-2">
									<input type="checkbox" name="" id="" />
									<p>Chills</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{selectedTab !=="start_over" && <CustomButton>Save</CustomButton>}
		</DialogLayout>
	)
}

export default AddSession
