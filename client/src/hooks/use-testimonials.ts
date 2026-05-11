import { SITE } from "@/config/site";
import type { Testimonial } from "@shared/schema";

export function useTestimonials() {
  const data: Testimonial[] = SITE.testimonials.map((t, i) => ({
    id: i + 1,
    name: t.name,
    content: t.content,
    rating: t.rating,
    isApproved: true,
  }));

  return { data };
}
