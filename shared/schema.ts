import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  clientType: text("client_type"), // Self-Employed, Flipper, Investor, CPA, Business Owner
  loanType: text("loan_type"), // DSCR, Bank Statement, LLC Mortgage, Fix & Flip
  propertyType: text("property_type"), // Investment, Primary, Second Home, Commercial
  loanAmount: integer("loan_amount"),
  monthlyIncome: integer("monthly_income"),
  propertyValue: integer("property_value"),
  downPayment: integer("down_payment"),
  creditScore: text("credit_score"),
  timeframe: text("timeframe"),
  additionalNotes: text("additional_notes"),
  dscrScore: text("dscr_score"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  price: integer("price").notNull(),
  beds: integer("beds").notNull(),
  baths: integer("baths").notNull(),
  sqft: integer("sqft").notNull(),
  imageUrl: text("image_url").notNull(),
  featured: boolean("featured").default(false),
  badge: text("badge"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export const insertPropertySchema = createInsertSchema(properties).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;
