const countStatsSchema = {
	users: {
		gross: {
			merchants: 3,
			customers: 4,
			blocked: 0,
			overdraft: 0,
			total: 7,
		},
		today: {
			merchants: 0,
			customers: 0,
			total: 1,
		},
	},
	transactions: {
		gross: {
			collect: 2,
			spend: 0,
			deposit: 0,
			withdraw: 0,
			transfer: 0,
			give: 2,
			total: 4,
		},
		today: {
			collect: 2,
			spend: 0,
			deposit: 0,
			withdraw: 0,
			transfer: 0,
			give: 2,
			total: 4,
		},
	},
}

const userSchema = {
	approval_status: "approved",
	role: "merchant",
	balance: 300,
	is_marketer: true,
	referral_bonus_count: 1,
	referrals: [
		{
			approval_status: "approved",
			role: "merchant",
			_id: "656b55b0dac5b27bfa07213f",
			name: "Jesulonimi William",
			phone: "08104791843",
			business_category: "Printing, Photocopying and paper works",
			picture: "https://lh3.googleusercontent.com/a/ACg8ocKBSFapVWlIrVDhJ21xFFHG_wbZiWjIZdlSkzVZsPutfg=s260-c-no",
			email: "daveytrack@gmail.com",
			createdAt: "2023-12-02T15:51:17.950Z",
		},
	],
	"password_changes": [
		{
			"_id": "6579edb32647e072e4353b71",
			"userId": "65780d7614a8de6adc5880ac",
			"oldPassword": "$2b$09$1zlgsfAF5pZcoQUxS.uo2.SRmEzdqwSfu5KFCj7WwR7lTeGD0pPoC",
			"newPassword": "$2b$09$av8DoAVODh0E38Z5Yvi0weKJiQlEjIYQ7RmqD/8GlXXc7FTJw8rUm",
			"phone": "08120474003",
			"createdAt": "2023-12-13T17:45:23.861Z",
			"updatedAt": "2023-12-13T17:45:23.861Z",
			"__v": 0,
		},
	],
	paid: 0,
	is_blocked: false,
	subUser: [],
	keywords: [
		"william jesulonimi abodunrin",
		"jesulonimii will gmail com",
	],
	_id: "656b5275882de813d4d03ffa",
	name: "WILLIAM JESULONIMI ABODUNRIN",
	password: "$2b$09$qui5cv1lxEega3Vpehl2OueZOp/1ZyCAeUTMH1bmh9uZilIM7svIi",
	phone: "08120474003",
	active_phone_number: "08120474003",
	address: "Obafemi Awolowo University Campus, Ife, Nigeria",
	nin: "",
	date_of_birth: "2003-06-16",
	business_category: "Printing, Photocopying and paper works",
	picture: "https://gravatar.com/avatar/71676a7fcd0bb0169c1759a8d8fcef4c?d=https%3A%2F%2Fui-avatars.com%2Fapi%2F/jesulonimii.will/128",
	email: "jesulonimii.will@gmail.com",
	referrer: "",
	deviceFCMToken: "eFm_ZY_eQj2oTneFY384Cv:APA91bGfh4JGkdM6wENqazm5SvwOfp4HYrahdTUY641-OhiKtSnZRTcl8ItL9_HU3ME9N93CZOG0HSX59wdvmzrR9oEvtB1uFMhR2I_zaBgzhvNZ7DLxRWkqIll7-kFW8zM5cBQgF1_3",
	createdAt: "2023-12-02T15:51:17.950Z",
	updatedAt: "2023-12-03T08:50:55.737Z",
	blocked_date: "2023-12-03T08:50:55.737Z",
	block_reason: "Fraudulent activities",

	__v: 0,
}

const transactionSchema = {
	"transaction_reference": "bGmuzjGxqUpvRjGMO7u2UcJL5eVNhHEo",
	"is_parent": true,
	"child_transaction": {
		"transaction_reference": "bGmuzjGxqUpvRjGMO7u2UcJL5eVNhHEo",
		"is_parent": false,
		"child_transaction": null,
		"transaction_type": "give",
		"customer_name": "WILLIAM JESULONIMI ABODUNRIN",
		"amount": "230",
		"merchant_category": "WILLIAM JESULONIMI ABODUNRIN",
		"merchant_name": "Jesulonimi William",
		"session_owner_id": "08104791843",
		"session_charges": "0",
		"madeBy": "08104791843",
		"createdAt": "2023-12-04T22:06:08.685Z",
		"updatedAt": "2023-12-04T22:06:08.685Z",
		"__v": 0,
		"id": "656e4d50980fa923d0cf6d21",
	},
	"session_charges": "0",
	"transaction_type": "bills",
	"bill_info": {
		"category": "airtime",
		"provider": "airtel",
		"phone": "08120474003"
	},
	"customer_name": "Airtel - 08120474003",
	"merchant_name": "William Ayo",
	"amount": "100",
	"previous_balance": "17950",
	"new_balance": "17950",
	"session_owner_id": "08120474003",
	"createdAt": "2024-03-19T22:29:01.196Z",
	"updatedAt": "2024-03-19T22:29:01.196Z",
	"__v": 0,
	"id": "65fa11adeba356658d49c0d9",
	recipient_id:"",
	account_name: "WILLIAM JESULONIMI ABODUNRIN",
	account_number: "08120474003",
	bank: "Jesulonimi William",
}

const revenueSchema = {
	"_id": "656e71a17a79533c74fb1c54",
	"amount": "2.99",
	"transaction_reference": "AxNvzxlT1wBtPHVAOMvkyiwsB2XkLk5Z",
	"initiator": {
		"_id": "656e2dd8597c13253465f382",
		"name": "WILLIAM JESULONIMI ABODUNRIN",
		"phone": "08120474003",
		"email": "jesulonimii.will@gmail.com",
	},
	"transaction_type": "merchant_withdraw",
	"beneficiary": {
		"_id": "656e2e67aa7e341f09fbb561",
		"name": "Jesulonimi William",
		"phone": "08104791843",
		"email": "",
	},
	"createdAt": "2023-12-05T00:41:05.667Z",
	"updatedAt": "2023-12-05T00:41:05.667Z",
	"__v": 0,
}

export type countStatsType = typeof countStatsSchema
export type userType = typeof userSchema
export type transactionType = typeof transactionSchema
export type revenueType = typeof revenueSchema
