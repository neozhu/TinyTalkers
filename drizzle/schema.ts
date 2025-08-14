import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const bookings = sqliteTable('bookings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  parentName: text('parent_name').notNull(),
  phone: text('phone').notNull(),
  childAgeOrGrade: text('child_age_or_grade').notNull(),
  stage: text('stage').notNull(),
  note: text('note'),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .notNull()
    .default(sql`(strftime('%s','now')*1000)`),
});
