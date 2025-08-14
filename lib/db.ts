import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { bookings } from '@/drizzle/schema';

const sqlite = new Database('./sqlite.db');
sqlite.pragma('journal_mode = WAL');
export const db = drizzle(sqlite);

export { bookings };
