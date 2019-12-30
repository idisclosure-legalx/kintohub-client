# KintoHub Node.js Client

[![npm (tag)](https://img.shields.io/npm/v/kintohub-client/latest)](https://www.npmjs.com/package/kintohub-client)

## Intro

A simple KintoHub client to generate API Tokens for accessing KintoBlocks.

## Installation

npm

```
npm install kintohub-client
```

yarn

```
yarn add kintohub-client
```

## Usage

```
import kintohub from 'kintohub-client';

const client = kintohub({
  environmentId: '9bdad372-op3t-9432-8x93-0eda3fb2m850',
  clientId: 'abc',
  clientSecret: 'secret',
});

// Refresh API Token
await client.refreshAPIToken();

console.log(client.APIToken);
```
