export {default as QUERY_KEYS} from "./query-keys"
import {default as COLORS} from "./colors"

export const cleanUrl = (url: string) => {
    const uri = encodeURIComponent(url)
    return uri.replace("/", "%2F")
}

export const HEX2RGBA = (hex, alpha = 1) => {
    if (hex.length < 6 || hex.length > 7) {
        return `rgba(1, 1, 1, ${alpha})`
    } else {
        const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
        return `rgba(${r},${g},${b},${alpha})`
    }
}

export const sortArrayByDate = (array: any[], key, order: "asc" | "desc" = "desc") => {
    if (order === "asc") {
        // @ts-ignore
        return array?.sort((a, b) => new Date(a[key]) - new Date(b[key]))
    } else if (order === "desc") {
        // @ts-ignore
        return array?.sort((a, b) => new Date(b[key]) - new Date(a[key]))
    } else return array
}

export {COLORS}
