import request from 'superagent';

interface KintoHubClientConfig {
  endpoint: string;
  clientId: string;
  clientSecret: string;
}

class KintoHubClient {
  private endpoint: string;
  private clientId: string;
  private clientSecret: string;
  private apiToken: string;

  constructor(config: KintoHubClientConfig) {
    if (
      !config ||
      !config.endpoint ||
      !config.clientId ||
      !config.clientSecret
    ) {
      throw new Error('Missing KintoHub Client Config');
    }

    this.endpoint = config.endpoint;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.apiToken = '';
  }

  get APIToken(): string {
    return this.apiToken;
  }

  async refreshAPIToken() {
    const res = await request.post(this.endpoint).send({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });

    this.apiToken = res.body.data.token;
  }
}

function createKintoHubClient(config: KintoHubClientConfig): KintoHubClient {
  return new KintoHubClient(config);
}

export default createKintoHubClient;
