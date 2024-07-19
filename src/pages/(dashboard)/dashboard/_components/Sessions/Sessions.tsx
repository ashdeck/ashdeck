import { twMerge } from "tailwind-merge";
import { useState, useEffect, useRef } from "react";
import "@assets/css/components.css";
import SessionHistory from "./SessionHistory";
import BlockLists from "../BlockLists";
import { SessionItem } from "../../types";
import CurrentSessions from "./CurrnetSessions";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  className?: string;
};

const sessions_res: Array<SessionItem> = [
  {
    id: "someId1",
    name: "First Session",
	paused: false,
    start: new Date(),
    end: new Date(),
    blockDate: new Date(),
    recurring: false,
	notes: "Ok for some reason this works. I really don't get the point of this. If I figure it out, I will stop the session.",
    blockList: [
      { name: "First List", list: ["google.com", "facebook.com"] },
      { name: "First List", list: ["google.com", "facebook.com"] },
    ],
  },
  {
    id: "someId2",
    name: "Second Session",
    start: new Date(),
    end: new Date(),
    blockDate: new Date(),
	paused: false,
	notes: "Ok for some reason this works. I really don't get the point of this. If I figure it out, I will stop the session.",
    recurring: false,
    blockList: [{ name: "First List", list: ["google.com", "facebook.com"] }],
  },
   {
    id: "someId1",
    name: "First Session",
    start: new Date(),
    end: new Date(),
	paused: true,
    blockDate: new Date(),
    recurring: false,
	notes: "Ok for some reason this works. I really don't get the point of this. If I figure it out, I will stop the session.",
    blockList: [
      { name: "First List", list: ["google.com", "facebook.com"] },
      { name: "First List", list: ["google.com", "facebook.com"] },
    ],
  }
  // ... more sessions
];

const Sessions = ({ className }: Props) => {
	const [selectedTab, setSelectedTab] = useState('sessions');
	const [sessions, setSessions] = useState(sessions_res);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isScrollable, setIsScrollable] = useState(false);

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

	return (
		<div className={twMerge(`custom-scrollbar bg-white pb-6 px-6 rounded-lg min-h-[60vh] max-h-[60vh] relative ${sessions.length > 0 ? "overflow-auto" : "overflow-hidden"}`, className)}>
		<div className="sticky top-0 z-10 bg-white">
			<div className="flex w-full justify-between items-start pt-6">
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
				<p className="text-gray-500 dark:text-gray text-sm mb-2">
					{selectedTab === "history" ? "View your past sessions" : "Create and manage your focus sessions here"}
				</p>
				</div>
				{/* <CustomButton>
					<PlusCircleIcon className="cursor-pointer w-8 h-8 text-white" />
					<p className="ml-1">Create Session</p>
				</CustomButton> */}
				<PlusCircleIcon className="cursor-pointer w-9 h-9 text-primary" />
			</div>
		</div>

		{/* {isScrollable && (
			<div className="bg-white">
				<ChevronDownIcon
				className="scroll-arrow rounded-full"
				onClick={handleScroll}
				/>
			</div>
		)} */}

		{/* {isScrollable && (
			<div className="scroll-arrow bg-[#29a259] rounded-full h-10 w-10 flex justify-center items-center overflow-auto">
				<ChevronDownIcon className="h-8 w-6 text-white"/>
			</div>
		)} */}

		<div className="w-full flex flex-col h-full items-center mt-2" ref={containerRef}>
			{selectedTab === "history" ? <SessionHistory sessions={sessions} /> : <CurrentSessions current_sessions={sessions} />}
		</div>
		</div>
	);
};

export default Sessions;
