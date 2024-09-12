import { twMerge } from "tailwind-merge"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useQuery } from "@tanstack/react-query"
import { api } from "@utils/axiosProvider"
import { QUERY_KEYS } from "@utils"
import { BlockList } from "../types"
import CustomButton from "@commons/components/CustomButton"
import AddBlockListModal from "@src/pages/(dashboard)/dashboard/_components/AddList.modal"
import { useEffect, useState } from "react"
import { useGlobalStore } from "@store"
import SingleBlockList from "./SingleBlockList"
import { tokens } from "@/src/commons/tokens"


type Props = {
	className?: string,
	blockLists: Array<BlockList>
}


const BlockLists = ({ className, blockLists }: Props) => {

	const [showEditDialog, setShowEditDialog] = useState<{
		type?: "edit" | "create",
		show: boolean,
		data?: BlockList,
		id?: number,
	}>({
		type: "create",
		show: false,
		data: null,
		id: undefined,
	})

	const { setShowConfirmModal } = useGlobalStore()

	const { data = [], refetch } = useQuery({
		queryKey: [QUERY_KEYS.block_lists],
		queryFn: () => api.get("/blocklists", {"Authorization": `Bearer ${tokens.access_token}`}).then(
			(res) => {
				setBlockListData(res.data)
				return res.data
			}
		),
	})

	const [blockListsData, setBlockListData] = useState([])

	// Ensure data is an array
	// const blockListsData = Array.isArray(data) ? data : [
	// 	{
	// 		id: "1",
	// 		name: "Jackson",
	// 		type: "blacklist",
	// 		list: ["facebook.com", "twitter.com"]
	// 	},
	// 	{
	// 		id: "2",
	// 		name: "Jackson",
	// 		type: "blacklist",
	// 		list: ["facebook.com", "twitter.com"]
	// 	},
	// 	{
	// 		id: "3",
	// 		name: "Jackson",
	// 		type: "whitelist",
	// 		list: ["facebook.com", "twitter.com"]
	// 	},
	// 	{
	// 		id: "4",
	// 		name: "Jackson",
	// 		type: "blacklist",
	// 		list: ["facebook.com", "twitter.com"]
	// 	}
	// ];

	const deleteList = async (item: BlockList) => {

		setShowConfirmModal(
			{
				show: true,
				dangerous: true,
				title: `Delete ${item?.name}?`,
				message: "Are you sure you want to delete this blocklist?\n This action cannot be undone.",
				action: async () => {
					await api.delete(`/blocklists/${item?.id}`, {"Authorization": `Bearer ${tokens.access_token}`})
					await refetch()
				},
			},
		)

	useEffect(()=>{}, [blockListsData])

	}

	return (
		<div className={twMerge(`custom-scrollbar bg-gray-300 shadow-2xl pb-6 px-8 rounded-lg min-h-[60vh] max-h-[60vh] relative ${blockListsData.length > 0 ? "overflow-auto" : "overflow-hidden"}`, className)}>
			<AddBlockListModal options={showEditDialog} setOptions={setShowEditDialog} refetch={refetch} />

			<div className="">
				<div className="flex flex-col gap-0.5 pt-6">
					<div className="flex justify-between items-start">
						<p className="font-outfit hidden text-primary-dark font-semibold capitalize text-xl mb-2">
							Block Lists
						</p>
						<div onClick={() => {
								setShowEditDialog({
									type: "create",
									show: true,
								})
							}} className="">
							{/* <PlusCircleIcon className="w-9 h-9 text-white" />
							<h6 className="font-semibold text-sm">Add Block List</h6> */}
							<CustomButton>Add Block List</CustomButton>
						</div>
					</div>
					<p className="hidden text-gray-500 dark:text-gray text-sm max-w-[70%]">
						Create and manage your list of websites to block during your sessions.
					</p>
				</div>
			</div>

			<div className="w-full flex flex-col mt-4 gap-1">
				{blockListsData.map((item: BlockList, i: number) => (
					<SingleBlockList blockList={item} handle_edit={setShowEditDialog({
								type: "edit",
								show: true,
								data: blockListsData,
						})} />
				))}
			</div>
		</div>
	)
}

export default BlockLists
