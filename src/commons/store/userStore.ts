import {create} from "zustand"
import {IUser} from "@interfaces"

interface UserState {
    balance: number
    setBalance: (value: number) => void
    user: IUser
    setUser: (userData: IUser) => void
}

const useUserStore = create<UserState>((set) => ({
    balance: null,
    setBalance: (value: number) => set((state) => ({ balance: value })),
    user: null,
    setUser: (userData: IUser) => set((state) => ({user: userData})),
}))


export default useUserStore
