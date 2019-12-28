import request from 'superagent';
import client from '../index';

jest.mock('superagent');

describe('client', () => {
  it('Should throw an error if config is missing', () => {
    const e = () => {
      client();
    };

    expect(e).toThrow('Missing KintoHub Client Config');
  });

  it('Should throw an error if config.environmentId is missing or is falsy', () => {
    expect(() => {
      client({ environmentId: null, clientId: 'abc', clientSecret: '123' });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({ environmentId: '', clientId: 'abc', clientSecret: '123' });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({ clientId: 'abc', clientSecret: '123' });
    }).toThrow('Missing KintoHub Client Config');
  });

  it('Should throw an error if config.clientId is missing or is falsy', () => {
    expect(() => {
      client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientId: null,
        clientSecret: '123',
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientId: '',
        clientSecret: '123',
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientSecret: '123',
      });
    }).toThrow('Missing KintoHub Client Config');
  });

  it('Should throw an error if config.clientSecret is missing or is falsy', () => {
    expect(() => {
      client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientId: 'abc',
        clientSecret: null,
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientId: 'abc',
        clientSecret: '',
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientId: 'abc',
      });
    }).toThrow('Missing KintoHub Client Config');
  });

  describe('refreshAPIToken', () => {
    const send = jest.fn().mockResolvedValue({
      status: 200,
      text: JSON.stringify({ data: { token: 'token123' } }),
    });
    request.post.mockImplementationOnce(() => ({ send }));

    beforeEach(() => {
      request.post.mockClear();
      send.mockClear();
    });

    it('Should be exposed as a method', () => {
      const c = client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientId: 'abc',
        clientSecret: 'secret',
      });

      expect(c.refreshAPIToken).toBeDefined();
      expect(typeof c.refreshAPIToken).toEqual('function');
      expect(request.post).not.toHaveBeenCalled();
      expect(send).not.toHaveBeenCalled();
      expect(c.APIToken).toEqual(null);
    });

    it('Should set APIToken property on success', async () => {
      const c = client({
        environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
        clientId: 'abc',
        clientSecret: 'secret',
      });

      expect(request.post).not.toHaveBeenCalled();
      expect(send).not.toHaveBeenCalled();
      expect(c.APIToken).toEqual(null);

      await c.refreshAPIToken();

      expect(request.post).toHaveBeenCalledTimes(1);
      expect(request.post).toHaveBeenCalledWith(
        'https://9bdad372-op3t-9432-8x93-0eda3fb2m850.api.beta.kintohub.com/authorize'
      );
      expect(send).toHaveBeenCalledTimes(1);
      expect(send).toHaveBeenCalledWith({
        clientId: 'abc',
        clientSecret: 'secret',
      });
      expect(c.APIToken).toEqual('token123');
    });
  });
});
