import client from '../index';

describe('client', () => {
  it('Should throw an error if config is missing', () => {
    const e = () => {
      client();
    };

    expect(e).toThrow('Missing KintoHub Client Config');
  });

  it('Should throw an error if config.endpoint is missing or is falsy', () => {
    expect(() => {
      client({ endpoint: null, clientId: 'abc', clientSecret: '123' });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({ endpoint: '', clientId: 'abc', clientSecret: '123' });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({ clientId: 'abc', clientSecret: '123' });
    }).toThrow('Missing KintoHub Client Config');
  });

  it('Should throw an error if config.clientId is missing or is falsy', () => {
    expect(() => {
      client({
        endpoint: 'http://api.kintohub.com/something/authorize',
        clientId: null,
        clientSecret: '123',
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        endpoint: 'http://api.kintohub.com/something/authorize',
        clientId: '',
        clientSecret: '123',
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        endpoint: 'http://api.kintohub.com/something/authorize',
        clientSecret: '123',
      });
    }).toThrow('Missing KintoHub Client Config');
  });

  it('Should throw an error if config.clientSecret is missing or is falsy', () => {
    expect(() => {
      client({
        endpoint: 'http://api.kintohub.com/something/authorize',
        clientId: 'abc',
        clientSecret: null,
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        endpoint: 'http://api.kintohub.com/something/authorize',
        clientId: 'abc',
        clientSecret: '',
      });
    }).toThrow('Missing KintoHub Client Config');

    expect(() => {
      client({
        endpoint: 'http://api.kintohub.com/something/authorize',
        clientId: 'abc'
      });
    }).toThrow('Missing KintoHub Client Config');
  });
});
