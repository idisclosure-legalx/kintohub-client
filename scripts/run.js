import client from '../src';

async function main() {
  const c = client({
    environmentId: process.env.ENVIRONMENT_ID,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  await c.refreshAPIToken();

  console.log('c.APITOKEN', c.APIToken);
}

main()
  .then(() => process.exit())
  .then(() => process.exit());
