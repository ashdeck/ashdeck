import { useState } from "react"

export default function SiteCategories({category}){
    const [selected, setSelected] = useState(false)
    return (
    <div onClick={()=>setSelected(!selected)} className={`flex ${selected && "border-4 border-slate-300"} gap-2 bg-primary justify-center items-center py-2 rounded-lg px-4`}>
        <p className="text-center text-white font-medium cursor-pointer">{category}</p>
    </div>
)
}