import { twMerge } from "tailwind-merge";
import { useState, useEffect, useRef, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import "@assets/css/components.css";
import SessionHistory from "./SessionHistory";
import BlockLists from "../BlockLists";
import { SessionItem } from "../../types";
import CurrentSessions from "./CurrnetSessions";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AddSession from "./AddSession";
import { QUERY_KEYS } from "@/src/commons/utils";
import { api } from "@/src/commons/utils/axiosProvider";
import { IBlockList, ISession } from "@/src/commons/interfaces";
import CustomButton from "@/src/commons/components/CustomButton";
import { tokens } from "@/src/commons/tokens";
import { useGlobalStore } from "@/src/commons/store";
import { ModalContext, SessionsModalProvider } from "../../Context/PopupContext";


type Props = {
    className?: string;
};


const Sessions = ({ className }: Props) => {
	// const blockLists = JSON.parse(localStorage.getItem("block_lists"))

	const [selectedTab, setSelectedTab] = useState('sessions');
	const [sessions, setSessions] = useState<Array<ISession>>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isScrollable, setIsScrollable] = useState(false);
	const { setShowConfirmModal } = useGlobalStore();

	 // Get context values

	// const {showEditDialog, setEditDialog } = useContext(ModalContext)
	// setEditDialog({type: "edit", show: true})
	// console.log(showEditDialog, "editDialogue")
    const [showEditDialog, setShowEditDialog] = useState<{
    type?: 'edit' | 'create';
    show: boolean;
    data?: ISession | null;
    id?: string;
		}>({
			type: 'create',
			show: false,
			data: null,
			id: undefined,
		});


	const { data = [], refetch } = useQuery({
		queryKey: [QUERY_KEYS.sessions],
		queryFn: () => api.get("/sessions", {"Authorization": `Bearer ${tokens.access_token}`}).then((res) =>{
			res.data
			setSessions(res.data)
			// console.log(sessions)
			return res.data
		}
		),
	})


	useEffect(() => {
		const container = containerRef.current;
		if (container) {
		setIsScrollable(container.scrollHeight > container.clientHeight);
		}
	}, [sessions]);

	const handleScroll = () => {
		const container = containerRef.current;
		if (container) {
		container.scrollBy({ top: container.scrollHeight, behavior: 'smooth' });
		}
	};

	const handleEdit = (item: ISession) => {
		setShowEditDialog({
            type: "edit",
            show: true,
            data: item,
            id: item.id,
        })
	}

	const handleDelete = (id: string) => {
		setShowConfirmModal({
            show: true,
            dangerous: true,
            title: `Delete session`,
            message: "Are you sure you want to delete this session?\n This action cannot be undone.",
			actionBtn: "Yes",
			refuseBtn: "No",
            action: async () => {
                await api.delete(`/sessions/${id}`, {"Authorization": `Bearer ${tokens.access_token}`});
				window.dispatchEvent(new CustomEvent("sessionDeleted", { detail: id }));
                await refetch();
            },
        });
	}


	const handleAddBlockListsFirst = () => {
		setShowConfirmModal({
			show: true,
			dangerous: false,
			title: "Add Block List",
			message: "You don't have any block lists to create a session. Create at least on block list to continue!",
			actionBtn: "Add Blocklist",
			refuseBtn: "Cancel",
			action: () => {
				const blockListBtn = document.getElementById("add-blocklist")
				if (blockListBtn){
					blockListBtn.click()
				}
			}
		})
	}

	// date from server is ISO string so we have to convert our current date to the same
	const running_sessions = sessions.filter(
		session => new Date(session.end_time) > new Date(new Date().toISOString().slice(0, -1))
	)

	// sessions.map(session => {
	// 	console.log(new Date(new Date().toISOString().slice(0, -1)), "Current date")
	// 	console.log(new Date(session.end_time).toString(), "End time")
	// })


	return (
		<SessionsModalProvider>
		<div className={twMerge(`custom-scrollbar bg-gray-300 shadow-2xl pb-6 px-8 rounded-lg min-h-[60vh] max-h-[60vh] relative ${sessions.length > 0 ? "overflow-auto" : "overflow-hidden"}`, className)}>
		<AddSession options={showEditDialog} setOptions={setShowEditDialog} refetch={refetch} />
		<div className="sticky top-0 z-10 bg-gray-300">
			<div className="flex w-full justify-between items-start pt-8">
				<div className="flex max-w-[70%] flex-col gap-0.5">
				<div className="font-outfit text-primary-dark font-semibold capitalize justify-between">
					<div className="flex gap-6 mb-4">
					<h3
						className={`nav-item ${selectedTab === 'sessions' ? 'nav-item-active' : ''}`}
						onClick={() => setSelectedTab("sessions")}
					>
						My Sessions
					</h3>
					<h3
						className={`nav-item ${selectedTab === 'history' ? 'nav-item-active' : ''}`}
						onClick={() => setSelectedTab("history")}
					>
						Session History
					</h3>
					</div>
				</div>
				<p className="text-gray-500 dark:text-gray text-sm mb-2 hidden">
					{selectedTab === "history" ? "View your past sessions" : "Create and manage your focus sessions here"}
				</p>
				</div>
				{<div className="-mt-2" onClick={(JSON.parse(localStorage.getItem("block_lists")) && JSON.parse(localStorage.getItem("block_lists")).length > 0) ? ()=>setShowEditDialog({type: "create", show: true}): handleAddBlockListsFirst}>
					<CustomButton>Create Session</CustomButton>
				</div>}
				</div>
		</div>

		<div className="w-full flex flex-col h-full items-center mt-4" ref={containerRef}>
			{
				selectedTab === "history" ? <SessionHistory sessions={sessions.length > 0 ? sessions: []} /> :
				<CurrentSessions handleEdit={handleEdit} handleDelete={handleDelete} current_sessions={running_sessions.length > 0 ? running_sessions: []} />
				}
		</div>
		</div>
		</SessionsModalProvider>
	);
};

export default Sessions;
