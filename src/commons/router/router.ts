// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client"

export type Path =
	| `/`
	| `/dashboard`
	| `/dashboard/focus_mode`
	| `/dashboard/settings`
	| `/extension/popup/:id`
	| `/home`
	| `/login`

export type Params = {
	"/extension/popup/:id": { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
