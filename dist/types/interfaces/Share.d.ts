import { IGettFile } from './File';
export interface IGettShare {
    files: IGettFile[];
    fileseed: number;
    getturl: string;
    id: string;
    owner: IGettShareOwner;
    readystate: string;
    sharename: string;
    sizeCache: number;
    userid: string;
    downloads: number;
    created: number;
}
export interface IGettShareOwner {
    fullname: string;
    ownerType: string;
    removeShareButton: boolean;
}
