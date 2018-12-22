import axios, { AxiosInstance } from 'axios'
import { ILoginResponse } from '../interfaces/ApiResponses'
import { IGettShare } from '../interfaces/Share'
import { GettApiEndpoints } from '../enums/ApiEndpoints'

export class GettClient {

  public email: string = '';

  private accessToken: string = '';
  private refreshToken: string = '';
  private axios: AxiosInstance;

  constructor(){
    this.axios = axios.create({
      baseURL: 'http://api.ge.tt',
    });
  }

  public async login(email: string, password: string): Promise<ILoginResponse> {
    this.email = email

    const loginResponse = await this.axios.post<ILoginResponse>(GettApiEndpoints.LOGIN, {
      email,
      password
    })
    this.accessToken = loginResponse.data.accesstoken
    this.refreshToken = loginResponse.data.refreshtoken
    return loginResponse.data
  }

  public async getShares(): Promise<IGettShare[]> {
    if (!this.accessToken) {
      throw new Error('No access token');
    }

    const shares = await this.axios
      .get<any>(`${GettApiEndpoints.GET_SHARES}?${this.accessTokenQueryString}`);
    return shares.data;
  }

  private get accessTokenQueryString(){
    return `accesstoken=${this.accessToken}`;
  }
}
