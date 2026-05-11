import type { InsertInquiry, InsertTestimonial, Testimonial } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<void>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

class InMemoryStorage implements IStorage {
  private testimonials: Testimonial[] = [];
  private nextId = 1;

  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    console.log("[inquiry]", inquiry);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const item: Testimonial = { id: this.nextId++, ...testimonial };
    this.testimonials.push(item);
    return item;
  }
}

export const storage = new InMemoryStorage();
