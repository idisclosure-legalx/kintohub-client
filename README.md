# KintoHub Node.js Client

## Intro

A simple KintoHub client to generate API Tokens for accessing KintoBlocks.

## Usage

```
import kintohub from 'kintohub-client';

const client = kintohub({
  environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
  clientId: 'abc',
  clientSecret: 'secret',
});

await client.refreshAPIToken();

console.log(client.APIToken);
```
