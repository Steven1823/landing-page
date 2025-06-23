import { users, leads, properties, type User, type InsertUser, type Lead, type InsertLead, type Property, type InsertProperty } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getFeaturedProperties(): Promise<Property[]>;
  getAllProperties(): Promise<Property[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const leadData = {
      ...insertLead,
      phone: insertLead.phone || null,
      clientType: insertLead.clientType || null,
      loanType: insertLead.loanType || null,
      propertyType: insertLead.propertyType || null,
      loanAmount: insertLead.loanAmount || null,
      monthlyIncome: insertLead.monthlyIncome || null,
      propertyValue: insertLead.propertyValue || null,
      downPayment: insertLead.downPayment || null,
      creditScore: insertLead.creditScore || null,
      timeframe: insertLead.timeframe || null,
      additionalNotes: insertLead.additionalNotes || null,
      dscrScore: insertLead.dscrScore || null,
    };
    
    const [lead] = await db
      .insert(leads)
      .values(leadData)
      .returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads);
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return await db.select().from(properties).where(eq(properties.featured, true));
  }

  async getAllProperties(): Promise<Property[]> {
    return await db.select().from(properties);
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leads: Map<number, Lead>;
  private properties: Map<number, Property>;
  private currentUserId: number;
  private currentLeadId: number;
  private currentPropertyId: number;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.properties = new Map();
    this.currentUserId = 1;
    this.currentLeadId = 1;
    this.currentPropertyId = 1;
    
    // Initialize with sample properties
    this.initializeProperties();
  }

  private initializeProperties() {
    const sampleProperties: Omit<Property, 'id'>[] = [
      {
        title: "Ocean View Villa",
        location: "Malibu, California",
        price: 4200000,
        beds: 5,
        baths: 4,
        sqft: 4500,
        imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        badge: "Featured"
      },
      {
        title: "Downtown Penthouse",
        location: "Manhattan, New York",
        price: 6800000,
        beds: 4,
        baths: 3,
        sqft: 3200,
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        badge: "New"
      },
      {
        title: "Victorian Estate",
        location: "Beverly Hills, California",
        price: 8500000,
        beds: 7,
        baths: 6,
        sqft: 6800,
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: true,
        badge: "Exclusive"
      },
      {
        title: "Modern Waterfront",
        location: "Miami Beach, Florida",
        price: 3500000,
        beds: 4,
        baths: 3,
        sqft: 3800,
        imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: false,
        badge: "New"
      },
      {
        title: "Mountain Retreat",
        location: "Aspen, Colorado",
        price: 5200000,
        beds: 6,
        baths: 5,
        sqft: 5500,
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        featured: false,
        badge: "Luxury"
      }
    ];

    sampleProperties.forEach(property => {
      const id = this.currentPropertyId++;
      this.properties.set(id, { ...property, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.currentLeadId++;
    const lead: Lead = { 
      ...insertLead, 
      id,
      createdAt: new Date()
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(property => property.featured);
  }

  async getAllProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }
}

export const storage = new DatabaseStorage();
