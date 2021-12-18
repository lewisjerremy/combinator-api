import { createClient } from 'redis';
import ENV from './environment.config';

export async function redis() {
  const client = createClient({
    url: ENV.REDIS_URL,
  });

  client.on('error', function (err) {
    console.error('Redis Client Error', err);
  });

  await client.connect();

  await client.set('key', 'value');

  const value = await client.get('key');

  console.log(value);
}
