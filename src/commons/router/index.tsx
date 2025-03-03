import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import {Routes} from "@generouted/react-router"

export * from "react-router-dom"

export const RouterSetup = () => {
    return <Routes/>
}

export const usePathname = () => {
    return window.location.pathname
}

export const useRouter = () => {
    const navigate = useNavigate()

    const push = (path: string) => {
        return navigate(path)
    }

    const replace = (path: string) => {
        return navigate(path, {replace: true})
    }

    return {
        push,
        replace,
    }
}

/*export const redirect = (url: string) => {
	return window.location.replace(url);
};*/

export const setPageTitle = (title: string) => {
    return useEffect(() => {
        document.title = `${title} - Ashdeck`
    }, [])
}

export default RouterSetup
