import { ILoginResponse } from '../interfaces/ApiResponses';
import { IGettShare } from '../interfaces/Share';
export declare class GettClient {
    email: string;
    private accessToken;
    private refreshToken;
    private axios;
    constructor();
    login(email: string, password: string): Promise<ILoginResponse>;
    getShares(): Promise<IGettShare[]>;
    private readonly accessTokenQueryString;
}
