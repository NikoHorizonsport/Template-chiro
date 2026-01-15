import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedTestimonials() {
  const existing = await storage.getTestimonials();
  if (existing.length > 0) return;

  const seeds = [
    {
      name: "Aliénor W.",
      content: "Professionnelle et à l’écoute, beaucoup de douceur et m’a plus aidé en 2 séances que les divers professionnels de santé que j’ai vu ces dernières années. Je recommande les yeux fermés!",
      rating: 5,
      isApproved: true
    },
    {
      name: "Simon L.",
      content: "Excellente chiropractrice, attentionnée, à l’écoute et très douée. Après en avoir consulté plusieurs, c’est la première avec laquelle j’obtiens un réel résultat concret.",
      rating: 5,
      isApproved: true
    },
    {
      name: "Salomé T.",
      content: "Louisa est très douce et à l’écoute. Je vous recommande fortement cette praticienne pour vos douleurs et inconforts en tous genres, la prise en charge est globale et personnalisée, avec beaucoup d’empathie.",
      rating: 5,
      isApproved: true
    },
    {
      name: "Yacoub S.",
      content: "Madame Peslier-Dauzats est une praticienne extraordinaire. Elle est douce dans ses manipulations, elle les explique de manière très claire et compréhensible. Depuis que je suis passé chez elle, tout a changé pour moi. J’arrive à faire du sport sans me faire mal.",
      rating: 5,
      isApproved: true
    },
    {
      name: "Jean-François L.",
      content: "Madame Louisa Peslier-Dauzats, est une chiropracteur très agréable a chacune de nos séances j’ai senti une amélioration significative. Sa technique est douce et sans douleur, c’est aussi une praticienne qui prend le temps de vous écouter et de trouver des solutions efficaces.",
      rating: 5,
      isApproved: true
    }
  ];

  for (const seed of seeds) {
    await storage.createTestimonial(seed);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedTestimonials().catch(console.error);

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);
      res.json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const items = await storage.getTestimonials();
    res.json(items);
  });

  return httpServer;
}
