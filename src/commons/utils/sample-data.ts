import { IBlockList, ISession, IUser } from "@interfaces"


export const sample_user_data: IUser = {
	id: "user1",
	name: "jesulonimii",
	email: "jesulonimii.will@gmail.com",
	photo: "https://avatars.githubusercontent.com/u/70331030?v=4",
	active_session: {
		"id": "session1",
		"device_id": "device1",
		"user_id": "user1",
		"start_time": "2024-03-31T12:00:00Z",
		"end_time": null,
	},
}


const sample_saved_sessions: ISession[] = [
	{
		"id": "session1",
		"device_id": "device1",
		"user_id": "user1",
		"start_time": "2024-03-31T12:00:00Z",
		"end_time": null,
	},
]


const sample_block_lists: IBlockList[] = [
	{
		"tag": "Work",
		type: "whitelist",
		"entries": [
			"github.com",
			"google.com",
		],
	},
	{
		"tag": "Reading",
		type: "blacklist",
		"entries": [
			"facebook.com",
			"twitter.com",
			"reddit.com",
		],
	},
]
