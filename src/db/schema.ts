import {
  timestamp,
  pgTable,
  pgEnum,
  text,
  primaryKey,
  integer,
  real,
  date,
  boolean,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import type { AdapterAccount } from "@auth/core/adapters";

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const usersRelations = relations(users, ({ many }) => ({
  courses: many(courses),
  assignments: many(assignments),
  todos: many(todos),
}));

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const courses = pgTable("course", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  professor: text("professor"),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
});

export const coursesRelations = relations(courses, ({ one, many }) => ({
  user: one(users, {
    fields: [courses.userId],
    references: [users.id],
  }),
  assignments: many(assignments),
}));

export const typeEnum = pgEnum("type", ["task", "exam", "project", "quiz"]);

export const assignments = pgTable("assignment", {
  id: uuid("id").primaryKey().defaultRandom(),
  date: date("date").notNull(),
  title: text("title").notNull(),
  isCompleted: boolean("isCompleted").default(false).notNull(),
  description: text("description").notNull(),
  weighting: real("weighting"),
  type: typeEnum("type").notNull(),
  courseId: uuid("courseId")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
});

export const assignmentsRelations = relations(assignments, ({ one }) => ({
  course: one(courses, {
    fields: [assignments.courseId],
    references: [courses.id],
  }),
  user: one(users, {
    fields: [assignments.userId],
    references: [users.id],
  }),
}));


export const todos = pgTable("todo", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  isCompleted: boolean("isCompleted").default(false).notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id),

});

export const todosRelations = relations(todos, ({ one }) => ({
  user: one(users, {
    fields: [todos.userId],
    references: [users.id],
  }),
}));
