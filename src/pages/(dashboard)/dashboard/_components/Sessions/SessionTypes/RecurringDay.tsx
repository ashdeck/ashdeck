import { useState } from "react"
import { set } from "react-hook-form"

export default function RecurringDay({day}){
    const [selected, setSelected ] = useState(false)

    return (
        <div onClick={()=>setSelected(!selected)} className={`cursor-pointer`}>
            <div className={`border ${selected && "bg-primary text-white"} rounded-full p-3 w-14 h-14 flex justify-center items-center`}>{day}</div>
        </div>
    )
}