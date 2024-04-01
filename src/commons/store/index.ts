import { create } from "zustand"

interface IGlobalState {
	loading: boolean,
	setLoading: (value: boolean) => void
}

export const useGlobalStore = create<IGlobalState>((set) => ({
	loading: false,
	setLoading: (value) => set((state) => ({ loading: value })),
}))
