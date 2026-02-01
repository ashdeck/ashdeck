// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client"

export type Path =
	| `/`
	| `/about`
	| `/aboytghh`
	| `/dashboard`
	| `/dashboard/Context/PopupContext`
	| `/dashboard/focus_mode`
	| `/dashboard/settings`
	| `/extension/popup/:id`
	| `/home`
	| `/join-our-waitlist`
	| `/login`
	| `/player`
	| `/player/test`
	| `/pomodoro-timer`
	| `/pricing`
	| `/privacy-policy`
	| `/signup`
	| `/task-manager`
	| `/terms-of-use`
	| `/website-blocker`
	| `/welcome`

export type Params = {
	"/extension/popup/:id": { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
