import React from "react"
import DialogLayout from "@commons/components/layouts/Dialog.layout"
import CustomButton from "@commons/components/CustomButton"
import { useGlobalStore } from "@store"


function ConfirmModal({}) {

	const { showConfirmModal: { show, message, title, action, dangerous, actionBtn="Yes", refuseBtn="Cancel" }, setShowConfirmModal } = useGlobalStore()

	return (
		<DialogLayout show={show}>
			<div className="flex px-[20%] flex-col items-center justify-center">
				<p className="text-xl font-outfit font-bold text-center">
					{title ?? "Confirm Action"}
				</p>
				<p className="text-md my-4 text-center">
					{message}
				</p>
				<div className="flex w-full gap-2 mt-4">
					<CustomButton
						variant="outlined"
						onClick={() => setShowConfirmModal({ show: false })}
						className={`w-full text-gray-500`}>
						{refuseBtn}
					</CustomButton>
					<CustomButton
						variant="outlined"
						onClick={() => {
							setShowConfirmModal({ show: false })
							action()
						}}
						className={`w-full ${dangerous ? "bg-red-500 border-red-500 text-white" : "text-gray-500 hover:bg-primary hover:border-primary"}  hover:text-white`}>
						{actionBtn}
					</CustomButton>
				</div>
			</div>
		</DialogLayout>
	)
}

export default ConfirmModal
