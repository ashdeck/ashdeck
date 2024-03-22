import { create } from "zustand"
import { IUser } from "@interfaces/user"

interface UserState {
	user: IUser
	setUser: (userData: IUser) => void
}

const useUserStore = create<UserState>((set) => ({
	user: null,
	setUser: (userData: IUser) => set((state) => ({ user: userData })),
}))


export default useUserStore
