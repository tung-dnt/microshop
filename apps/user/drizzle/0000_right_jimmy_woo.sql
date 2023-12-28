CREATE SCHEMA "users";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users"."users" (
	"firstname" varchar(256),
	"lastname" varchar(256),
	"email" varchar(256),
	"password" varchar(256),
	"username" varchar(256)
);
