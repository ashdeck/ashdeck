import { BlockList } from "../types"
import CustomButton from "@/src/commons/components/CustomButton";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";


type Props = {
    blockList: BlockList;
	handle_edit: void;
};


export default function SingleBlockList({blockList, handle_edit}: Props){
    return (
            <div key={blockList.id}
						className={`flex bg-green-primary ${blockList.type == "blacklist" ? "bg-red-400": "bg-primary"} px-4 rounded-lg flex-row items-center justify-between w-full border-b border-gray-200 dark:border-gray-600 py-4`}>
						<div className="flex flex-col">
							<p className="text-lg text-white cursor-pointer hover:scale-110 transition duration-300 font-outfit font-medium capitalize">
								{blockList.name}
							</p>
							<p className="text-gray-300 dark:text-gray text-sm normal-case">
								{blockList.type === "blacklist" ? <span className={"text-red-100"}>Blocked</span> :
								<span className={"text-white"}>Allowed</span>} • {blockList?.list?.length} websites
							</p>
						</div>
						<div className="flex items-center gap-4">
							<CustomButton className="bg-blue-500 text-white rounded-full p-3 h-8 w-8" onClick={() => handle_edit} variant="text">
								<PencilIcon className="w-5 h-5" />
							</CustomButton>

							<CustomButton
								onClick={() => deleteList(blockList)}
								variant="text"
								className="bg-red-500 rounded-full p-3 h-8 w-8 hover:border-red-500 text-white hover:text-white">
								<TrashIcon className="w-5 h-5 " />
							</CustomButton>
						</div>
                </div>
    )
}
