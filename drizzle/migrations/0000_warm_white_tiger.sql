CREATE TABLE `bookings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`parent_name` text NOT NULL,
	`phone` text NOT NULL,
	`child_age_or_grade` text NOT NULL,
	`stage` text NOT NULL,
	`note` text,
	`created_at` integer DEFAULT (strftime('%s','now')*1000) NOT NULL
);
