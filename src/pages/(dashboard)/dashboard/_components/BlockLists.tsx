import { twMerge } from "tailwind-merge";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { api } from "@utils/axiosProvider";
import { QUERY_KEYS } from "@utils";
import { BlockList } from "../types";
import CustomButton from "@commons/components/CustomButton";
import AddBlockListModal from "@src/pages/(dashboard)/dashboard/_components/AddList.modal";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@store";
import SingleBlockList from "./SingleBlockList";
import { tokens } from "@/src/commons/tokens";

type Props = {
    className?: string;
    blockLists: Array<BlockList>;
};

const BlockLists = ({ className, blockLists }: Props) => {
    const [showEditDialog, setShowEditDialog] = useState<{
        type?: "edit" | "create";
        show: boolean;
        data?: BlockList;
        id?: string;
    }>({
        type: "create",
        show: false,
        data: null,
        id: undefined,
    });

    const { setShowConfirmModal } = useGlobalStore();
    const [blockListsData, setBlockListData] = useState<Array<BlockList>>([]);

    const { data = [], refetch } = useQuery({
        queryKey: [QUERY_KEYS.block_lists],
        queryFn: () => api.get("/blocklists", { "Authorization": `Bearer ${tokens.access_token}` }).then(
            (res) => {
                setBlockListData(res.data);
                localStorage.setItem("block_lists",JSON.stringify(res.data))
                return res.data;
            }
        ),
    });


    // Handle delete action
    const deleteList = async (item: BlockList) => {
        setShowConfirmModal({
            show: true,
            dangerous: true,
            title: `Delete ${item?.name}?`,
            message: "Are you sure you want to delete this blocklist?\n This action cannot be undone.",
            actionBtn: "Yes",
            action: async () => {
                await api.delete(`/blocklists/${item?.id}`, {"Authorization": `Bearer ${tokens.access_token}`});
                const remaining_lists = JSON.parse(localStorage.getItem("block_lists"))
                if (remaining_lists){
                    if (remaining_lists.length === 0){
                        localStorage.removeItem("block_lists")
                    }
                }
                await refetch();
            },
        });

    };

    // Handle edit action
    const handleEdit = (item: BlockList) => {
        setShowEditDialog({
            type: "edit",
            show: true,
            data: item,
            id: item.id,
        });
    };

    useEffect(() => {}, [blockListsData]);

    return (
        <div className={twMerge(`custom-scrollbar bg-gray-300 shadow-2xl pb-6 px-8 rounded-lg min-h-[60vh] max-h-[60vh] relative ${blockListsData.length > 0 ? "overflow-auto" : "overflow-hidden"}`, className)}>
            <AddBlockListModal options={showEditDialog} setOptions={setShowEditDialog} refetch={refetch} />

            <div className="">
                <div className="flex flex-col gap-0.5 pt-6">
                    <div className="flex justify-between items-start">
                        <p className="font-outfit hidden text-primary-dark font-semibold capitalize text-xl mb-2">
                            Block Lists
                        </p>
                        <div id="add-blocklist" onClick={() => {
                            setShowEditDialog({
                                type: "create",
                                show: true,
                            });
                        }} className="">
                            <CustomButton>Add Block List</CustomButton>
                        </div>
                    </div>
                    <p className="hidden text-gray-500 dark:text-gray text-sm max-w-[70%]">
                        Create and manage your list of websites to block during your sessions.
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col mt-4 gap-1">
                {blockListsData?.map((item: BlockList, i: number) => (
                    <SingleBlockList
                        key={item.id} // Ensure a unique key for each item
                        blockList={item}
                        handle_delete={deleteList}
                        handle_edit={handleEdit}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlockLists;
