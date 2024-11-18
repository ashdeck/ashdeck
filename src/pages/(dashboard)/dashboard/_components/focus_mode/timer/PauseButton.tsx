import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid"
interface Props{
    paused: boolean,
    onClick: () => void
}

export default function PauseButton({paused, onClick}: Props){
    return(
        <div onClick={onClick}>
            <button id="toggle-pause" className={`${paused ? "bg-primary" :"bg-red-500"} rounded-md font-semibold text-white outline-none p-2 w-[2.6rem]`}>{paused ? <PlayCircleIcon />: <PauseCircleIcon />}</button>
        </div>
    )
}