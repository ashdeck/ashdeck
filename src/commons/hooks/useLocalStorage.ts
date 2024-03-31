const useLocalStorage = () => {
    const saveToStorage = (key: string, value: any) => {
        try {
            const makeString = JSON.stringify(value)
            localStorage.setItem(key, makeString)
            return value
        } catch (e) {
            // saving error
            return new Error("Error saving to storage")
        }
    }

    const getFromStorage = (key: string) => {
        try {
            const jsonValue = localStorage.getItem(key)
            return jsonValue != null ? typeof JSON.parse(jsonValue) === "string" ? jsonValue : JSON.parse(jsonValue) : null
        } catch (e) {
            // error reading value
        }
    }

    const removeFromStorage = (key: string) => {
        try {
            localStorage.removeItem(key)
            return {response: "removed."}
        } catch (e) {
            // error reading value
        }
    }

    return {
        getFromStorage,
        saveToStorage,
        removeFromStorage,
    }
}

export default useLocalStorage
