import { create } from "zustand"
import { IBlockList, ISession } from "@interfaces"

interface ExtensionState {
	activeScreen: number
	blockLists: IBlockList[]
	selectedBlockList: IBlockList
	inSession: boolean
	activeSession: ISession
	setActiveScreen: (value: number) => void
	setBlockLists: (data: IBlockList[]) => void
	setSelectedBlockList: (data: IBlockList) => void
	setInSession: (value: boolean) => void
	setActiveSession: (session: ISession) => void
}

const useExtensionStore = create<ExtensionState>((set) => ({
	activeScreen: 0,
	blockLists: [],
	selectedBlockList: null,
	inSession: false,
	activeSession: null,
	setActiveScreen: (value) => set((state) => ({ activeScreen: value })),
	setBlockLists: (data) => set((state) => ({ blockLists: data })),
	setSelectedBlockList: (data) => set((state) => ({ selectedBlockList: data })),
	setInSession: (value) => set((state) => ({ inSession: value })),
	setActiveSession: (session) => set((state) => ({ activeSession: session })),

}))


export default useExtensionStore
