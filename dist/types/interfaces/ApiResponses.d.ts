import { IGettUser } from './User';
export interface ILoginResponse {
    accesstoken: string;
    refreshtoken: string;
    expires: string;
    user: IGettUser;
}
