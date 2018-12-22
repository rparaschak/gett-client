import { GettClient } from '../src/classes/GettClient'

describe("GettClient", () => {

  const gettClient = new GettClient();

  it('should login', async (done) => {
    const loginResponse = await gettClient.login('rp_api_test@ge.tt', '12345');
    expect(loginResponse.accesstoken).toBeDefined();
    done();
  });

  it('should fetch shares', async (done) => {
    const shares = await gettClient.getShares();
    expect(shares.length).toEqual(1);
    done();
  });

})
