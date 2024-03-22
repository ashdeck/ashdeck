import { create } from "zustand"

export const useGlobalStore = create<any>((set) => ({
	searchType: "users",
	setSearchType: (searchType: any) => set((state) => ({ searchType: searchType })),
}))
