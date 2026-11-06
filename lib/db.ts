import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { bookings } from '@/drizzle/schema';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:sqlite.db',
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client);

export { bookings };
