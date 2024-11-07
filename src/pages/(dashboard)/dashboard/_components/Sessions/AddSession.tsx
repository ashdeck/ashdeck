import { useForm } from "react-hook-form";
import DialogLayout from "@commons/components/layouts/Dialog.layout";
import CustomButton from "@commons/components/CustomButton";
import { ISession } from "@/src/commons/interfaces";
import { useGlobalStore } from "@store";
import SingleTime from "./SessionTypes/SingleTime";
import StartLaterSession from "./SessionTypes/StartLater";
import RecurringSession from "./SessionTypes/Recurring";
import { api } from "@utils/axiosProvider";
import "@assets/css/components.css";
import { tokens } from "@/src/commons/tokens";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { QUERY_KEYS } from "@/src/commons/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { BlockList } from "../../types";
import { convertTo24Hour } from "@/src/commons/utils/timeConverter";


interface Props {
	options: { type?: "edit" | "create", show: boolean, data?: ISession, id?: string };
	setOptions: any;
	refetch: () => void;
}

const AddSession = ({ options = { type: "create", show: false }, setOptions, refetch }: Props) => {
	// console.log(options.data, "data")

	const [selectedTab, setSelectedTab] = useState(options.data ? options.data.type : "start_now");
	const [selectedBlockList, setSelectedBlockList] = useState<string[]>([]);
	const [req_data, setReqData] = useState({})
	const { loading, setLoading } = useGlobalStore()

	const setRequestDate = (data) => {
		// console.log(data, "Request data")
		const fullDate = convertTo24Hour(data.fromHour, data.fromMinute, data.fromPeriod, data.toHour, data.toMinute, data.toPeriod)
		// console.log(fullDate, "This is the full date")
		const date = new Date()

		const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
        const day = String(date.getDate()).padStart(2, '0');

		const formattedDate = `${year}-${month}-${day}`;

		let request_data: ISession = {
			block_lists: selectedBlockList,
			type: selectedTab,
			start_date: formattedDate,
			start_time: fullDate.from,
			end_time: fullDate.to
		}

		if (selectedTab === "recurring") request_data.recurring_days = data.selectedDays
		setReqData(request_data)
	}

	const handleSubmit = () => {
		if (options.type === "create"){
		api.post("/sessions", req_data, {"Authorization": `Bearer ${tokens.access_token}`}).then((res) => {
				toast.success("Session Created")
				localStorage.setItem("newSession", JSON.stringify(res.data))
				window.dispatchEvent(new CustomEvent("sessionCreated", { detail: res.data }));
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
		    .finally(()=>setLoading(false))
		} else {
			api.patch(`/sessions/${options.data.id}`, req_data, {"Authorization": `Bearer ${tokens.access_token}`}).then((res) => {
				toast.success("Session Updated")
				window.dispatchEvent(new CustomEvent("sessionUpdated", { detail: res.data }));
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
		    .finally(()=>setLoading(false))
		}
    }

	const block_lists = () => JSON.parse(localStorage.getItem("block_lists"));

	// Handle blocklist checkbox change
	const handleBlockListChange = (event: React.ChangeEvent<HTMLInputElement>, item: any) => {
		if (event.target.checked) {
			setSelectedBlockList((prev) => [...prev, item.id]); // Add to selected list
		} else {
			setSelectedBlockList((prev) => prev.filter((block) => block !== item.id)); // Remove from selected list
		}
	};

	const closeModal = () => {
		setOptions({
			type: "create",
			show: false,
			id: undefined,
		});
	};

	return (
		<DialogLayout className={"w-[50%] max-h-fit items-start"} show={options?.show} setShow={setOptions}>
				<div className="flex w-full justify-center items-center relative">
					<div className="flex max-w-[70%] flex-col gap-0.5">
						<p className="font-outfit text-primary-dark font-semibold capitalize text-2xl">{options.type == "create" ? "Create Session": "Update Session"}</p>
					</div>
					<p className="text-gray-500 dark:text-gray hidden">{options.type == "create" ? "Fill in the details to create a new session.": "Fill in the details to update your session."}</p>
					<div className="max-w-[30%] rounded-full absolute right-4">
						<XMarkIcon onClick={closeModal} className="w-6 h-6 cursor-pointer font-bold" />
					</div>
				</div>

			{
				// options.type == "create" &&
				<div className="w-full flex justify-center">
					<div className="flex items-center gap-6 mt-4 font-bold text-lg">
						<h3 className={`nav-item ${selectedTab === 'start_now' ? 'nav-item-active' : ''}`}
							onClick={() => setSelectedTab("start_now")}>Start Now</h3>
						<h3 className={`nav-item ${selectedTab === 'start_later' ? 'nav-item-active' : ''}`}
							onClick={() => setSelectedTab("start_later")}>Start Later</h3>
						<h3 className={`nav-item ${selectedTab === 'recurring' ? 'nav-item-active' : ''}`}
							onClick={() => setSelectedTab("recurring")}>Recurring</h3>
					</div>
				</div>
			}

			<div className="flex flex-col text-black w-full my-8">
				{selectedTab === "start_now" ?
				<SingleTime block_lists={selectedBlockList} options={options} setOptions={setOptions} refetch={refetch} />
				: selectedTab === "recurring" ?
				<RecurringSession block_lists={selectedBlockList} options={options} setOptions={setOptions} refetch={refetch} passOnData={setRequestDate}/> : <StartLaterSession block_lists={selectedBlockList} options={options} setOptions={setOptions} refetch={refetch} passOnData={setRequestDate}/>}
				<div className="flex gap-8 mt-4">
					<div className="rounded-lg flex gap-8 justify-between">
						{block_lists()?.length > 0 ? (
							<div className="flex w-full items-center rounded-lg gap-4">
								<div className="grid grid-cols-4 justify-center gap-8">
									{block_lists().map((item) => (
										<div key={item.id} className="flex items-center gap-2 rounded-lg text-lg">
											<input
												type="checkbox"
												checked={selectedBlockList.includes(item.id)}
												onChange={(e) => handleBlockListChange(e, item)}
											/>
											<p className="font-normal">{item.name}</p>
										</div>
									))}
								</div>
							</div>
						) : (
							<p className="py-2 px-4">You currently don't have any block lists.</p>
						)}
					</div>
				</div>
			</div>
			{selectedTab !== "start_now" && <div onClick={handleSubmit}><CustomButton>{options.type == "create" ? "Set Schedule": "Update Schedule"}</CustomButton></div>}
		</DialogLayout>
	);
};

export default AddSession;
