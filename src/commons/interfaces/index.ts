export interface IUser {
	id: string;
	name: string;
	email: string;
	photo?: string | null;
	timezone?: string;
	active_session?: ISession | null;
}

export interface ISession {
	id: string;
	device_id: string;
	user_id: string;
	start_time: string;
	end_time: string | null;
	block_list: IBlockList;
}

export interface IBlockList {
	id?: string;
	name: string;
	type: "whitelist" | "blacklist"
	entries: string[];
}
