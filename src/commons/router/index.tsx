import { useNavigate, useRoutes } from "react-router-dom";
//export { Outlet, useSearchParams, useParams, useNavigate, BrowserRouter } from "react-router-dom";
export * from "react-router-dom";

import { useEffect } from "react";

let navigate = (path: string) => {};



export const usePathname = () => {
	return window.location.pathname;
};

export const router = {
	push: (path: string) => {
		navigate(path);
	},
	replace: (path: string) => {
		navigate(path);
	},
};

export const useRouter = () => {
	return router;
};

export const redirect = (url: string) => {
	return window.location.replace(url);
};

export const setPageTitle = (title: string) => {
	return useEffect(() => {
		document.title = `${title} - AIChatbot`;
	}, []);
};

export default router;
