import { twMerge } from "tailwind-merge"
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useQuery } from "@tanstack/react-query"
import { api } from "@utils/axiosProvider"
import { QUERY_KEYS } from "@utils"
import { IBlockList } from "@interfaces"
import CustomButton from "@commons/components/CustomButton"
import AddBlockListModal from "@src/pages/(dashboard)/dashboard/_components/AddList.modal"
import { useState } from "react"
import { useGlobalStore } from "@store"

type Props = {
	className?: string
}

const BlockLists = ({ className }: Props) => {

	const [showEditDialog, setShowEditDialog] = useState<{
		type?: "edit" | "create",
		show: boolean,
		data?: IBlockList,
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
		queryFn: () => api.get("/blocklists").then((res) => res.data),
	})

	const deleteList = async (item: IBlockList) => {

		setShowConfirmModal(
			{
				show: true,
				dangerous: true,
				title: `Delete ${item?.name}?`,
				message: "Are you sure you want to delete this blocklist?\n This action cannot be undone.",
				action: async () => {
					await api.delete(`/blocklists/${item?.id}`)
					await refetch()
				},
			},
		)

	}

	return (
		<div className={twMerge("bg-white p-6 rounded-lg min-h-[60vh]", className)}>
			<AddBlockListModal options={showEditDialog} setOptions={setShowEditDialog} refetch={refetch} />


			<div className="flex w-full justify-between items-center">
				<div className="flex max-w-[70%] flex-col gap-0.5">
					<p className="font-outfit text-primary-dark font-semibold capitalize text-xl">
						Block Lists
					</p>
					<p className="text-gray-500 dark:text-gray text-sm">
						Create and manage your list of websites to block during your sessions.
					</p>
				</div>
				<div className="max-w-[30%]">
					<PlusCircleIcon onClick={() => {
						setShowEditDialog({
							type: "create",
							show: true,
						})
					}} className="w-8 h-8 text-primary cursor-pointer" />
				</div>
			</div>


			<div className="w-full flex flex-col mt-8">

				{data?.map((item: IBlockList, i: number) => (
					<div key={i}
						 className="flex flex-row items-center justify-between w-full border-b border-gray-200 dark:border-gray-600 py-4">
						<div className="flex flex-col">
							<p className="text-lg cursor-pointer hover:text-primary transition duration-300 font-outfit text-primary-dark font-medium capitalize">
								{item.name}
							</p>
							<p className="text-gray-500 dark:text-gray text-sm normal-case">
								{item.type === "blacklist" ? <span className={"text-status-error"}>Blocked</span> :
									<span
										className={"text-status-success"}>Allowed</span>} • {item?.entries?.length} websites
							</p>
						</div>
						<div className="flex items-center">
							<CustomButton onClick={() => setShowEditDialog({
								type: "edit",
								show: true,
								data: item,
							})} variant="text">
								<PencilIcon className="w-5 h-5 text-gray-500" />
							</CustomButton>

							<CustomButton
								onClick={() => deleteList(item)}
								variant="text"
								className="hover:bg-red-500 hover:border-red-500 text-gray-500 hover:text-white">
								<TrashIcon className="w-5 h-5 " />
							</CustomButton>
						</div>
					</div>
				))}

			</div>


		</div>
	)
}


export default BlockLists
