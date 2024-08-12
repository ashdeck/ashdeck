import CustomButton from "@/src/commons/components/CustomButton";
import DialogLayout from "@/src/commons/components/layouts/Dialog.layout";
import { XMarkIcon } from "@heroicons/react/24/outline";


interface Props {
	options: { type?: "edit" | "create", show: boolean, url?: string};
	setOptions: any;
	// refetch: () => void;
}

export default function RedirectURL({ options = { type: "create", show: false }, setOptions }: Props){
    const closeModal = () => {
		setOptions({
			type: "create",
			show: false,
		})

	}
    return(
    <DialogLayout className={"w-[95%] sm:w-[80%] md:w-[60%] xl:w-[45%] items-start"} show={options.show}>
        <div className="flex w-full justify-between items-center">
				<div className="flex max-w-[70%] flex-col gap-0.5">
					<p className="text-primary-dark dark:text-gray font-semibold text-xl">
						Add Redirect URL
					</p>
				</div>
				<div className="max-w-[30%]">
					<XMarkIcon onClick={closeModal} className="w-6 h-6 text-primary-dark cursor-pointer" />
				</div>
		</div>
        <p className="mt-2 text-sm w-[70%] xl:w-[80%] text-gray-600 hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero facilis quia illo repellat, amet alias.</p>
        <div className="mt-4 flex w-full gap-4 items-center">
            <input type="text" defaultValue={"https://google.com"} className="border-2 lg:w-[80%] px-4 py-3 rounded-lg"  />
            <CustomButton onClick={closeModal} className="py-3">Add URL</CustomButton>
        </div>
    </DialogLayout>
    )
}