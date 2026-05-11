import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display">{SITE.practitioner.name}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {SITE.practitioner.shortTitle} à {SITE.practice.city} — {SITE.practitioner.credentials}.
              Une approche globale pour votre santé.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold font-display text-accent">Contact</h4>
            <div className="space-y-3">
              <a
                href={SITE.practice.mapsDirectionsUrl}
                target="_blank"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span>
                  {SITE.practice.district}<br />
                  {SITE.practice.address}<br />
                  {SITE.practice.postalCode} {SITE.practice.city}
                </span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5" />
                <span>{SITE.practice.phone}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold font-display text-accent">Horaires</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {SITE.hours.map((h, i) => (
                <li key={i} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold font-display text-accent">Liens Rapides</h4>
            <div className="flex flex-col gap-2">
              <a
                href={SITE.practice.bookingUrl}
                target="_blank"
                className="text-primary-foreground/80 hover:text-white transition-colors"
              >
                Prendre Rendez-vous
              </a>
              <a href="/#services" className="text-primary-foreground/80 hover:text-white transition-colors">
                Pathologies traitées
              </a>
              <a href="/#about" className="text-primary-foreground/80 hover:text-white transition-colors">
                À propos
              </a>
              <a href="/#contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                Nous contacter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {SITE.practice.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
