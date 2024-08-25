import Timer from "./timer/Timer";
interface Props {
    duration: number;  // Use lowercase 'number' for the type
    cycles: number;
    break_time: number;
}

export default function FocusSession({ duration, cycles, break_time }: Props) {
    return (
        <div className="border border-gray-400 rounded-xl mt-2 pb-16">
            <div className="flex justify-center gap-[4px] my-8">
                {Array.from({ length: cycles }).map((_, index) => (
                    <div key={index} className="cycle-div">
                        <div className="h-[4px] w-12 sm:w-24 md:w-32 bg-primary"></div>
                    </div>
                ))}
            </div>
            <div className="mb-6 flex justify-center items-center mt-8">
                <p>{`2 of ${cycles} remaining | Break fo ${break_time} minutes`}</p>
            </div>
            <Timer />
        </div>
    );
}