import React from "react";


//=> Dashboard
import DashboardLayout from "@src/(dashboard)/layout.tsx";
import Home from "@src/(dashboard)/home";
import MerchantApprovals from "@src/(dashboard)/merchant-approvals";
import UsersLayout from "@src/(dashboard)/users/layout.tsx";
import Users from "@src/(dashboard)/users";
import UserPage from "@src/(dashboard)/users/[user_id]";
import Transactions from "@src/(dashboard)/transactions"
import Revenue from "@src/(dashboard)/revenue"
import ManageLayout from "@src/(dashboard)/manage/layout.tsx"
import ManagePage from "@src/(dashboard)/manage"

//=> Auth Layout
import Login from "@src/(auth)/login";
import AuthLayout from "@src/(auth)/layout.tsx"
import PushNotifications from "@src/(dashboard)/manage/push-notifications"


const routes = [
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				path: "/",
				element: <Home/>
			},
			{
				path: "/users",
				element: <UsersLayout />,
				children: [
					{
						path: "",
						element: <Users />,
					},
					{
						path: ":id",
						element: <UserPage/>,
					}
				]
			},
			{
				path: "/transactions",
				element: <Transactions />,
			},
			{
				path: "/revenue",
				element: <Revenue />,
			},
			{
				path: "/merchant-approvals",
				element: <MerchantApprovals />,
			},
			{
				path: "/manage",
				element: <ManageLayout />,
				children: [
					{
						path: "",
						element: <ManagePage />,
					},
					{
						path: "push-notifications",
						element: <PushNotifications />,
					},
				]
			}
		],
	},
	{
		path: "/login",
		element: <AuthLayout />,
		children: [
			{
				path: "",
				element: <Login />,
			}
		],
	},
	{
		path: "/*",
		element: <div className="w-full h-[90vh] flex items-center justify-center">Nothing here..</div>,
	},
];

export default routes;
