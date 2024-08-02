export type BlockList = {
    id?: string; 
    name: string;
    list: Array<string>;
    type: "whitelist" | "blacklist"
};

export type SessionItem = {
    id: string;
    name: string;
    paused: boolean;
    start: Date;
    end: Date;
    blockDate: Date;
    recurring: boolean;
    blockList: Array<BlockList>;
    notes: string;
};
