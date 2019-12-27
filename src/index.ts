import request from 'superagent';

function makeEndpoint(environmentId: string): string {
  return `https://${environmentId}.api.beta.kintohub.com/authorize`;
}

interface KintoHubClientConfig {
  environmentId: string;
  clientId: string;
  clientSecret: string;
}

class KintoHubClient {
  private readonly endpoint: string;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private apiToken: string | null;

  constructor(config: KintoHubClientConfig) {
    if (
      !config ||
      !config.environmentId ||
      !config.clientId ||
      !config.clientSecret
    ) {
      throw new Error('Missing KintoHub Client Config');
    }

    this.endpoint = makeEndpoint(config.environmentId);
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.apiToken = null;
  }

  get APIToken(): string | null {
    return this.apiToken;
  }

  async refreshAPIToken(): Promise<void> {
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
