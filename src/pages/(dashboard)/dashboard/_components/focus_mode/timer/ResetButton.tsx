export default function ResetButton({onClick}){
    return(
        <div onClick={onClick}>
            <button className="bg-slate-400 text-white font-semibold rounded-md outline-none p-2 w-36">Reset</button>
        </div>
    )
}