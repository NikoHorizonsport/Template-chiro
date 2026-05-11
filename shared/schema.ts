import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional().nullable(),
  message: z.string().min(1, "Le message est requis"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Testimonial = {
  id: number;
  name: string;
  content: string;
  rating: number | null;
  isApproved: boolean | null;
};

export type InsertTestimonial = Omit<Testimonial, "id">;
