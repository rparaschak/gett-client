export interface IGettUser {
    userid: string;
    fullname: string;
    email: string;
    files: number;
    downloads: number;
    storage: {
        used: number;
        limit: number;
        extra: number;
    };
}
