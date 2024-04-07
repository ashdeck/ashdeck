import { create } from "zustand"

interface IConfirmModal {
	show?: boolean
	title?: string
	dangerous?: boolean
	message?: string
	action?: () => void
}

interface IGlobalState {
	loading: boolean,
	setLoading: (value: boolean) => void
	showConfirmModal: IConfirmModal
	setShowConfirmModal: (options: IConfirmModal) => void
}

export const useGlobalStore = create<IGlobalState>((set) => ({
	loading: false,
	showConfirmModal: {
		show: false,
		message: "",
		action: () => {
		},
	},
	setShowConfirmModal: (options) => set((state) => ({ showConfirmModal: { ...state.showConfirmModal, ...options } })),
	setLoading: (value) => set((state) => ({ loading: value })),
}))
