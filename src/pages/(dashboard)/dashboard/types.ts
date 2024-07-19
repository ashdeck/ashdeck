export type BlockList = {
    name: string;
    list: Array<string>;
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
