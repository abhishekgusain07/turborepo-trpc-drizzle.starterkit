import {
  pgTable,
  text,
  integer,
  timestamp,
  boolean,
  varchar,
  jsonb,
  index,
  unique,
  pgEnum,
} from "drizzle-orm/pg-core";

export const feedback = pgTable("feedback", {
  id: text("id").primaryKey(),
  createdTime: timestamp("created_time").defaultNow(),
  userId: text("user_id"),
  feedbackContent: text("feedback_content"),
  stars: integer().notNull(),
});
