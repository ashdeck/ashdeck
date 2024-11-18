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
import { api } from "@utils/axiosProvider"
import toast from "react-hot-toast"
import { BlockList } from "../types"
import SiteCategories from "./SiteCategorie"
import { tokens } from "@/src/commons/tokens"

const site_categories = [
	{name: "Adult", sites: ["google.com"]},
	{name: "Sport", sites: ["pinterest.come"]},
	{name: "News", sites: ["cnn.com"]},
	{name: "Social", sites: ["facebook.com"]},
	{name: "Search", sites: ["yahoo.com"]},
	{name: "Gambling", sites: ["betway.com"]},
	{name: "Shopping", sites: ["amazon.com"]},
	{name: "Gaming", sites: ["fifa.com"]},
	{name: "Streaming", sites: ["twitch.com"]}
]


interface IListTypeOptions {
	value: "whitelist" | "blacklist";
	label: string;
}

interface Props {
	options: { type?: "edit" | "create", show: boolean, data?: BlockList, id?: string };
	setOptions: any;
	refetch: () => void;
}

const AddBlockListModal = ({ options = { type: "create", show: false }, setOptions, refetch }: Props) => {

	const listTypeOptions: IListTypeOptions[] = [
		{ value: "whitelist", label: "Whitelist (Only allow sites in list)" },
		{ value: "blacklist", label: "Blacklist (Allow sites except those in list)" },
	]

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

	const add_group_sites = (item) => (setEntries([...entries, item.name+".com"]))

	useEffect(() => {
		if (options?.data && options?.type === "edit") {
			Object.keys(options?.data).forEach((key) => {
				setValue(key, options?.data[key])
			})
			console.log(options.data, "this is the data")
			// setListType(listTypeOptions.find((item) => item.value === options?.data?.type))
			setEntries(options?.data?.entries)
		} else {
			resetModal()
		}

	}, [options?.data])

	function addSite(event) {
		event && event.preventDefault()

		if (!getValues("site")) return
		if (entries.includes(getValues("site"))) return
		getValues("site")
		setEntries([...entries, {"site_url": getValues("site")}])
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
			name: data?.name
		}

		if (options?.type === "create") {
			api.post("/blocklists", compile, {"Authorization": `Bearer ${tokens.access_token}`}).then((res) => {
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
			api.patch(`/blocklists/${options?.data?.id}`, compile, {"Authorization": `Bearer ${tokens.access_token}`}).then((res) => {
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
		<DialogLayout className={"w-[60%] max-h-fit items-start"} show={options?.show} setShow={setOptions}>
			<div className="flex w-full justify-between items-center">
				<div className="flex max-w-[70%] flex-col gap-0.5">
					<p className="font-outfit text-primary-dark font-semibold capitalize text-xl">
						Create Block List
					</p>
					<p className="text-gray-500 dark:text-gray ">
						Fill in the details to create a new block list or select from the existing categories.
					</p>
				</div>
				<div className="max-w-[30%]">
					<XMarkIcon onClick={closeModal} className="w-6 h-6 text-primary-dark cursor-pointer" />
				</div>
			</div>

			<div className="flex flex-col text-black w-full my-4">
				<div className="flex justify-between gap-4 items-start my-4">
					<div className="w-[50%] mr-8">
						<div>
							<FormInput
								label={"Enter List Name"}
								placeholder={"ex: John Doe"}
								register={register("name", { required: true })}
							/>

							{
								errors.name && (
									<p className="text-red-500 text-sm mb-4 font-medium ">
										Error:{" "}
										{errors.name?.type === "required" && "List name is required"}
									</p>
								)
							}
						</div>
						<div>
							<form onSubmit={addSite} className="flex flex-col">
								<FormInput
									label={"Enter site address"}
									placeholder={"ex: google.com, facebook.com"}
									endIcon={<PlusCircleIcon onClick={addSite} className="w-6 h-6 text-primary cursor-pointer" />}
									register={register("site", {
										validate: (value) => {
											if (entries.includes(value)) return "Site already added"
											return true
										},
									})}
								/>

								{
									errors.site && (
										<p className="text-red-500 text-sm ">
											{errors.site?.type === "validate" && "Site already added"}
											{errors.site?.type === "required" && "Site is required"}
										</p>
									)
								}
								{/* {
									!entries?.length && (
										<p className="w-full text-center text-red-500 text-sm my-4 font-medium ">
											Enter at least a site
										</p>
									)
								} */}
							<div className="rounded-lg p-4 hidden">
								<h4 className="text-xl font-semibold mb-4">Categories</h4>
								<div className="grid gap-4 grid-cols-3">
									{site_categories?.map(site => <SiteCategories category={site.name} />)}
								</div>
							</div>
						</form>
						</div>
					</div>
					<div className="rounded-lg border-2">
						<div className="py-4 px-4">
							<h4 className="text-md font-medium mb-4">Create from Categories</h4>
							<p className="text-sm font-light mb-4 hidden">You can also create blocklists from categories we have made for you</p>
							<div className="grid gap-6 grid-cols-3">
								{site_categories?.map(site => <div onClick={()=>add_group_sites(site)}><SiteCategories category={site.name} /></div>)}
							</div>
						</div>
					</div>
				</div>


				{/* <DropdownSelect
					label={"Select List Type"}
					prompt={"List Type (Whitelist/Blacklist)"}
					className="z-50"
					items={listTypeOptions}
					selected={listType}
					setSelected={setListType}
				/> */}

				<div className="flex max-h-[20vh] overflow-y-scroll flex-col gap-2">
					{entries?.map((entry, i) => (
						<div key={i}
							className="flex flex-row items-center justify-between w-full border-b border-gray-200 dark:border-gray-600 p2-4">
							<div className="flex flex-col py-2">
								<p className="cursor-pointer hover:text-primary transition duration-300 font-outfit text-primary-dark">
									{i + 1}. {entry.site_url}
								</p>
							</div>

							<CustomButton
								onClick={() => deleteSite(i)}
								variant="text"
								className="peer hover:border-red-500 text-gray-500 hover:text-red-500 mr-2">
								<TrashIcon className="w-5 h-5" />
							</CustomButton>

						</div>
					))}

				</div>


				<CustomButton
					disabled={Object.keys(errors)?.length > 0 || !entries?.length}
					onClick={handleSubmit(submitAction)}
					className="py-4 mt-8"
					loading={loading}>
					{options?.type === "create" ? "Create List" : "Update List"}
				</CustomButton>

			</div>
		</DialogLayout>
	)
}

export default AddBlockListModal
