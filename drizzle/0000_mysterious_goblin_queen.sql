CREATE TYPE "public"."imageTypes" AS ENUM('pfp', 'venue', 'artist');--> statement-breakpoint
CREATE TYPE "public"."ticketStatus" AS ENUM('engaged', 'sold', 'free');--> statement-breakpoint
CREATE TABLE "artists" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"user_id" text NOT NULL,
	"details" text,
	"claimed" boolean DEFAULT false,
	"deleted_at" timestamp,
	CONSTRAINT "artists_name_unique" UNIQUE("name"),
	CONSTRAINT "artists_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "event_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" integer,
	"url" text,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "event_to_artists" (
	"artist_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	CONSTRAINT "event_to_artists_artist_id_event_id_pk" PRIMARY KEY("artist_id","event_id")
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"venue_id" integer NOT NULL,
	"details" text,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL,
	"total_tickets" integer NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text,
	"venue_id" integer,
	"artist_id" integer,
	"image_type" "imageTypes",
	"url" text NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "social_media_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"artist_id" integer,
	"url" text NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "tickets" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" integer NOT NULL,
	"user_id" text,
	"bar_code" text NOT NULL,
	"ticket_status" "ticketStatus" DEFAULT 'free',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "tickets_bar_code_unique" UNIQUE("bar_code")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text,
	"email" text NOT NULL,
	"phone" text,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	CONSTRAINT "users_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
CREATE TABLE "venues" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"admin" text NOT NULL,
	"claimed" boolean DEFAULT false,
	"location" text NOT NULL,
	"details" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "artists" ADD CONSTRAINT "artists_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_to_artists" ADD CONSTRAINT "event_to_artists_artist_id_artists_id_fk" FOREIGN KEY ("artist_id") REFERENCES "public"."artists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_to_artists" ADD CONSTRAINT "event_to_artists_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_venue_id_venues_id_fk" FOREIGN KEY ("venue_id") REFERENCES "public"."venues"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "social_media_links" ADD CONSTRAINT "social_media_links_artist_id_artists_id_fk" FOREIGN KEY ("artist_id") REFERENCES "public"."artists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "venues" ADD CONSTRAINT "venues_admin_users_id_fk" FOREIGN KEY ("admin") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;