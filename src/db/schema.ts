import { pgTable as table, integer, text, serial, pgEnum, timestamp, primaryKey, boolean } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm"

//----------Users Schema-----------------
export const users = table("users", {
    id: text("id").primaryKey(),
    username: text("username").unique(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name"),
    email: text("email").notNull().unique(),
    phone: text("phone"),
    createdAt: timestamp("created_at").defaultNow(),
    deletedAt: timestamp("deleted_at")
})

export const usersRelations = relations(users, ({one, many}) => ({
    tickets: many(tickets),
    venues: many(venues),
    artists: one(artists),
    images: many(images)
}))


//----------Tickets Schema-----------------
export const ticketStatus = pgEnum('ticketStatus', ['engaged', 'sold', 'free']);

export const tickets = table("tickets", {
    id: serial("id").primaryKey(),
    eventId: integer("event_id").references(() => events.id).notNull(),
    userId: text("user_id").references(() => users.id),
    barCode: text("bar_code").notNull().unique().notNull(),
    ticketStatus: ticketStatus("ticket_status").default("free"),
    createdAt: timestamp("created_at").defaultNow()
})

export const ticketsRelations = relations(tickets, ({one}) => ({
    user: one(users, {
        fields: [tickets.userId],
        references: [users.id],
    }),
    event: one(events,{
        fields: [tickets.eventId],
        references: [events.id]
    })
}))


//----------Artists Schema-----------------
export const artists = table("artists", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
    userId: text("user_id").references(() => users.id),
    details: text("details"),
    claimed: boolean("claimed").default(false),
    deletedAt: timestamp("deleted_at")
})

export const artistsRelations = relations(artists, ({one, many}) => ({
    user: one(users,{
        fields: [artists.userId],
        references: [users.id],
    }), 
    eventToArtists: many(eventToArtists),
    socialMediaLinks: many(socialMediaLinks)
}))


//----------Venues Schema-----------------
export const venues = table("venues", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    adminId: text("admin").notNull().references(() => users.id),
    claimed: boolean("claimed").default(false),
    location: text("location").notNull(),
    details: text("details").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    deletedAt: timestamp("deleted_at")
})

export const venuesRelations = relations(venues, ({one, many}) => ({
    admin: one(users,{
        fields: [venues.adminId],
        references: [users.id]
    }),
    events: many(events)
}))


//----------Events Schema-----------------
export const events = table("events", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    venueId: integer("venue_id").references(() => venues.id).notNull(),
    details: text("details"),
    startTime: timestamp("start_time").notNull(),
    endTime: timestamp("end_time").notNull(),
    totalTickets: integer("total_tickets").notNull(),
    deletedAt: timestamp("deleted_at")
})

export const eventsRelations = relations(events, ({one, many}) => ({
    venue: one(venues, {
        fields: [events.venueId],
        references: [venues.id]
    }),
    images: many(eventImages),
    tickets: many(tickets),
    eventToArtists: many(eventToArtists),
}))


//----------Images Schema-----------------
export const imageTypeEnum = pgEnum("imageTypes", ['pfp', 'venue', 'artist'])

export const images = table("images", {
    id: serial().primaryKey(),
    userId: text("user_id"),
    venueId: integer("venue_id"),
    artistId: integer("artist_id"),
    imageType: imageTypeEnum("image_type"),
    url: text("url").notNull(),
    deletedAt: timestamp("deleted_at")
})

export const imagesRelations = relations(images, ({one}) => ({
    user: one(users, {
        fields: [images.userId],
        references: [users.id]
    })
}))


//----------EventImages Schema-----------------
export const eventImages = table("event_images", {
    id: serial("id").primaryKey(),
    eventId: integer("event_id"),
    url: text("url"),
    deletedAt: timestamp("deleted_at")
})

export const eventImagesRelations = relations(eventImages, ({one}) => ({
    event: one(events, {
        fields: [eventImages.eventId],
        references: [events.id]
    }),
}))


//----------socialMediLinks Schema-----------------
export const socialMediaLinks = table("social_media_links", {
    id: serial("id").primaryKey(),
    artistId: integer("artist_id").references(() => artists.id),
    url: text("url").notNull(),
    deletedAt: timestamp("deleted_at")
})

export const socialMediaLinksRelations = relations(socialMediaLinks, ({one}) => ({
    artist: one(artists, {
        fields: [socialMediaLinks.artistId],
        references: [artists.id]
    })
}))


//----------EventToArtists Schema-----------------
export const eventToArtists = table("event_to_artists", {
    artistId: integer("artist_id")
    .notNull()
    .references(()=>artists.id),

    eventId: integer("event_id")
    .notNull()
    .references(() => events.id)
},
    (t) => ({
        pk: primaryKey({columns: [t.artistId, t.eventId]})
    })
)

export const eventToArtistsRelations = relations(eventToArtists, ({one}) => ({
    event: one(events, {
        fields: [eventToArtists.eventId],
        references: [events.id]
    }),
    artist: one(artists, {
        fields: [eventToArtists.artistId],
        references: [artists.id]
    })
}))