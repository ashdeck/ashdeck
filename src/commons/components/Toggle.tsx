type ToggleProps = {
    className?: string;
    checked: boolean;
    disabled?: false;
    onClick: () => void;
};

const Toggle = (props: ToggleProps) => {
    const {
        className = "", checked = false, disabled = false, onClick = () => {
        }
    } = props;

    return (
        <>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={checked}
                    disabled={disabled}
                    onChange={onClick}
                />
                <div
                    className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
        </>
    );
};

export default Toggle;
