import { motion } from "framer-motion";
import { 
  Activity, 
  Baby, 
  Brain, 
  ChevronRight, 
  Dumbbell, 
  HeartPulse, 
  Move, 
  Smile, 
  Stethoscope, 
  UserPlus 
} from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const { data: testimonials } = useTestimonials();

  // Fallback testimonials if API returns empty or loading
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : [
    { name: "Aliénor W.", content: "Professionnelle et à l’écoute, beaucoup de douceur et m’a plus aidé en 2 séances que les divers professionnels de santé que j’ai vu ces dernières années.", rating: 5 },
    { name: "Simon L.", content: "Excellente chiropractrice, attentionnée, à l’écoute et très douée. Après en avoir consulté plusieurs, c’est la première avec laquelle j’obtiens un réel résultat concret.", rating: 5 },
    { name: "Salomé T.", content: "Louisa est très douce et à l’écoute. Je vous recommande fortement cette praticienne pour vos douleurs et inconforts en tous genres.", rating: 5 },
  ];

  const services = [
    { title: "Sciatique", icon: Activity },
    { title: "Femmes Enceintes", icon: Baby },
    { title: "Cervicales", icon: Brain },
    { title: "Sportifs", icon: Dumbbell },
    { title: "Hernie Discale", icon: Activity },
    { title: "Scoliose", icon: Move },
    { title: "Mâchoire", icon: Smile },
    { title: "Pédiatrie", icon: Baby },
    { title: "Mal de Dos", icon: UserPlus },
    { title: "Arthrose", icon: HeartPulse },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 rounded-l-[100px] -z-10 hidden lg:block" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent-foreground mr-2 animate-pulse" />
                Cabinet ouvert à Toulouse
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight">
                Votre santé, notre <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  priorité absolue
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Prenez rendez-vous dès aujourd’hui avec Louisa Peslier-Dauzats dans notre cabinet de chiropraxie. Une approche holistique pour une vie sans douleur.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all"
                  asChild
                >
                  <a href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats" target="_blank" rel="noopener noreferrer">
                    Prendre Rendez-vous
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full text-lg h-14 px-8 border-primary/20 text-primary hover:bg-secondary hover:text-primary"
                  asChild
                >
                  <a href="#about">
                    En savoir plus
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                {/* Modern clean medical office stock photo */}
                {/* <img src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop&q=80" alt="Cabinet de chiropraxie Toulouse" /> */}
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?w=800&auto=format&fit=crop&q=80" 
                  alt="Cabinet de chiropraxie Toulouse" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Louisa Peslier-Dauzats</p>
                  <p className="text-sm opacity-90">Chiropracteur D.C.</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border/50 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-secondary p-2 rounded-full">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Kinésiologie</p>
                    <p className="text-xs text-muted-foreground">Appliquée Certifiée</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Une approche globale et humaine</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diplômée de l’Institut Franco Européen de Chiropraxie et certifiée en kinésiologie appliquée professionnelle, 
              Louisa Peslier-Dauzats recherche et traite la cause de vos douleurs efficacement grâce à une compréhension 
              globale et holistique du corps. En se basant sur la fonction du système nerveux et du cerveau, 
              nous soignons l’ensemble du corps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Chiropraxie", desc: "Ajustements précis pour restaurer la mobilité articulaire.", icon: Stethoscope },
              { title: "Kinésiologie", desc: "Diagnostic précis pour identifier les causes profondes.", icon: Brain },
              { title: "Prévention", desc: "Conseils et exercices pour une santé durable.", icon: Activity },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Nos Expertises</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Pathologies Traitées</h2>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80 group" asChild>
              <a href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats" target="_blank">
                Prendre rendez-vous <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                title={service.title} 
                icon={service.icon} 
                delay={idx * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-display">Vos Témoignages</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              La satisfaction de nos patients est notre plus belle réussite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-white/90 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-white/20">
                    <AvatarFallback className="bg-accent text-accent-foreground font-bold">
                      {t.name.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-bold font-display">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Questions Fréquentes</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-xl px-6 bg-secondary/10">
              <AccordionTrigger className="hover:no-underline py-6 text-lg font-medium text-foreground">
                Comment travaillent nos chiropracteurs ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Les chiropracteurs utilisent des ajustements : une technique de manipulation très précise qui permet de redonner la mobilité à une articulation spécifique. 
                Nous ne nous arrêtons jamais à vos symptômes et recherchons toujours l’origine de vos douleurs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-xl px-6 bg-secondary/10">
              <AccordionTrigger className="hover:no-underline py-6 text-lg font-medium text-foreground">
                Pourquoi consulter un chiropracteur ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                La chiropraxie traite une variété de problèmes (maux de tête, dos, cou, articulations) et améliore la performance sportive. 
                Elle a aussi une grande valeur préventive en décelant les troubles avant qu'ils ne deviennent douloureux.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-xl px-6 bg-secondary/10">
              <AccordionTrigger className="hover:no-underline py-6 text-lg font-medium text-foreground">
                Quel est l'intérêt de la kinésiologie appliquée ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                C'est une méthode diagnostique qui permet de déterminer plus efficacement et rapidement les origines des symptômes. 
                Elle aide à identifier les priorités de traitement tout en respectant les limites du corps.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contactez-nous</h2>
                <p className="text-muted-foreground text-lg">
                  Une question ? Besoin d'un renseignement ? N'hésitez pas à nous écrire ou à prendre rendez-vous directement en ligne.
                </p>
              </div>

              {/* Map Placeholder - Replace with actual iframe if desired */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.366717838573!2d1.4116!3d43.5971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb7d41031359%3A0x6854580234479904!2s2%20Rue%20Jules%20Tellier%2C%2031100%20Toulouse!5e0!3m2!1sen!2sfr!4v1647852345678!5m2!1sen!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary">Consultations sur RDV</p>
                  <p className="text-sm text-muted-foreground">Via Doctolib ou par téléphone</p>
                </div>
                <Button asChild>
                  <a href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats" target="_blank">
                    Doctolib
                  </a>
                </Button>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
