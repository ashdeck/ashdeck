import { create } from "zustand"

interface State {
	showDialogModal: boolean
	setShowDialogModal: (value: boolean) => void
}

const useLayoutStore = create<State>((set) => ({
	showDialogModal: false,
	setShowDialogModal: (value: boolean) => set((state) => ({ showDialogModal: value })),
}))


export default useLayoutStore
