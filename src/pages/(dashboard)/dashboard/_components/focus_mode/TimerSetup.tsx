type Props = {
    metric_name: string;
    description: string;
    initial_value: number;
    onValueChange: (value: number) => void; // New prop to handle input changes
};

export default function TimerSetup({ metric_name, description, initial_value, onValueChange }: Props) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        onValueChange(newValue); // Pass new value back to parent component
    };

    return (
        <div className="flex bg-gray-300 justify-between items-center border-b first:pt-0 py-5 last:border-b-0 last:pb-0">
            <div>
                <h4 className="font-medium text-md">{metric_name}</h4>
                <p className="text-[#525353]">{description}</p>
            </div>
            <div>
                <input
                    className="max-w-24 bg-[#071a37] text-white text-center py-2 px-4 rounded-md"
                    min={1}
                    type="number"
                    defaultValue={initial_value}
                    onChange={handleInputChange} // Handle changes
                />
            </div>
        </div>
    );
}
