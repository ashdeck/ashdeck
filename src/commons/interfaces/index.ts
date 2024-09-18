export interface IUser {
	id: string;
	name: string;
	email: string;
	photo?: string | null;
	timezone?: string;
	active_session?: ISession | null;
}


interface RecurringDays {
	day: "monday" | "tuesday" | "wednesday" | "friday" | "saturday" | "sunday"
}

export interface ISession {
	id?: string;
	name?: string;
	device_id?: string;
	type: "start_now" | "start_later" | "recurring"
	start_time?: string | Date;
	end_time?: string | Date;
	block_lists: string[];
	start_date?: string | Date
	recurring_days?: RecurringDays[]
	paused?: boolean
	notes?: string
}


export interface IBlockList {
	id?: string;
	name: string;
	// type: "whitelist" | "blacklist"
	entries: string[];
	notes?: string
}
