import { db } from "./db";
import { 
  inquiries, testimonials, 
  type InsertInquiry, type InsertTestimonial, type Testimonial 
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<void>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    await db.insert(inquiries).values(inquiry);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [newItem] = await db.insert(testimonials).values(testimonial).returning();
    return newItem;
  }
}

export const storage = new DatabaseStorage();
