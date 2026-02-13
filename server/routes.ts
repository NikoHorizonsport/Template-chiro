import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendNotificationEmail(inquiry: { name: string; email: string; phone?: string | null; message: string }) {
  const mailOptions = {
    from: `"Site Chiropraxie" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `Nouveau message de ${inquiry.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0d9488;">Nouveau message depuis ton site</h2>
        <p>Salut Louisa, tu as recu un nouveau message depuis le formulaire de contact de ton site :</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Nom</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${inquiry.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${inquiry.email}">${inquiry.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Telephone</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${inquiry.phone ? `<a href="tel:${inquiry.phone}">${inquiry.phone}</a>` : "Non renseigne"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Message</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${inquiry.message}</td>
          </tr>
        </table>
        <p style="color: #6b7280; font-size: 12px;">Ce message a ete envoye automatiquement depuis le site chiropraxie-louisadauzats.fr</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Notification email sent successfully");
  } catch (error) {
    console.error("Failed to send notification email:", error);
  }
}

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
      // Honeypot spam protection: if 'website' field is filled, it's a bot
      if (req.body.website && req.body.website.length > 0) {
        // Silently reject but return success to not alert the bot
        console.log("Spam submission blocked via honeypot");
        return res.json({ success: true });
      }
      
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);
      sendNotificationEmail(input).catch(console.error);
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
