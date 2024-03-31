
export interface IUser {
    id: string;
    username: string;
    created_at: string;
    photo: string | null;
    is_admin: boolean;
    wallet_id: string;
    online: boolean;
    token?: string;
    publicKey?: string;
    typing: boolean;
}

