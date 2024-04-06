import React, { useState } from "react"
import { Avatar, Menu, MenuItem } from "@mui/material"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { twMerge } from "tailwind-merge"
import { textFieldStyle } from "@commons/components/FormInput"

interface DropdownSelectItem {
	value: string;
	label: string;
	icon?: string | React.ReactElement;
	render?: (item: DropdownSelectItem, handleClose: () => void) => React.ReactNode;
}

interface DropdownSelectProps {
	className?: string;
	noItemMessage?: string;
	menuItemWidth?: string;
	prompt?: string;
	selector?: React.ReactNode;
	disabled?: boolean;
	items: (string | DropdownSelectItem)[];
	onSelect?: (value: string) => void;
	labelKey?: string;
	selected: any;
	setSelected: (value: any) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
														   className = "",
														   noItemMessage = "No items",
														   menuItemWidth = "100%",
														   selector = null,
														   disabled = false,
														   prompt,
														   labelKey = "label",
														   selected,
														   setSelected,
														   items = [],
														   onSelect,
													   }: DropdownSelectProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		if (!disabled) {
			setAnchorEl(event.currentTarget)
		}
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleItemClick = (value: any) => {
		setSelected(value)
		onSelect && onSelect(value)
		handleClose()
	}

	const getSelectedItemLabel = (): string => {
		const selectedItem = items.find((item) => typeof item !== "string" && item?.value === selected.value) as DropdownSelectItem | undefined
		return selectedItem ? selectedItem[labelKey] : "-- Choose an item --"
	}

	const renderSelector = () => {
		if (selector) {
			return <div className="w-full cursor-pointer" onClick={handleClick}>{selector}</div>
		}

		return (
			<div
				className={twMerge(`${textFieldStyle} text-gray-700  my-0 flex flex-row items-center justify-between cursor-pointer`, className)}
				onClick={handleClick}
			>
				{getSelectedItemLabel()}
				{anchorEl ? <ChevronUpIcon className="w-4 h-4 inline-block" /> :
					<ChevronDownIcon className="w-4 h-4 inline-block" />}
			</div>
		)
	}

	const renderMenuItem = (item: string | DropdownSelectItem) => {
		if (typeof item === "string") {
			return <MenuItem key={item} onClick={() => handleItemClick(item)}>{item}</MenuItem>
		} else {
			return (
				<MenuItem key={item?.value} onClick={() => handleItemClick(item)}>
					{item?.icon && typeof item?.icon === "string" ? (
						<Avatar src={item?.icon} sx={{ width: 20, height: 20, marginRight: "0.5rem" }} />
					) : item?.icon && React.isValidElement(item?.icon) ? (
						<div className="mr-2">{item?.icon}</div>
					) : null}
					{item?.label}
				</MenuItem>
			)
		}
	}

	return (
		<>

			<div className="flex gap-2 w-full flex-col my-2">
				{prompt &&
					<p className={"font-outfit font-medium text-gray-700 dark:text-gray-500 text-sm"}>{prompt}</p>}
				{renderSelector()}
			</div>


			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{items?.length > 0 ? (
					items.map((item) => renderMenuItem(item))
				) : (
					<MenuItem onClick={handleClose}>{noItemMessage}</MenuItem>
				)}
			</Menu>
		</>
	)
}

export default DropdownSelect
