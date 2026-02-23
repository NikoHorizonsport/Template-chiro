import { motion } from "framer-motion";
import { 
  Baby, 
  Brain, 
  ChevronRight, 
  Dumbbell, 
  HeartPulse, 
  Move, 
  Phone,
  Smile, 
  Stethoscope, 
  UserPlus,
  Activity 
} from "lucide-react";
import { SciatiquIcon } from "@/components/icons/SciatiquIcon";
import { CervicalesIcon } from "@/components/icons/CervicalesIcon";
import { HernieDiscaleIcon } from "@/components/icons/HernieDiscaleIcon";
import { ArthroseIcon } from "@/components/icons/ArthroseIcon";
import { ScolioseIcon } from "@/components/icons/ScolioseIcon";
import { MalDeDosIcon } from "@/components/icons/MalDeDosIcon";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import heroImage from "@assets/image_1768478782712.png";
import profileImage from "@assets/image_1768478802896.png";
import treatmentImage1 from "@assets/image_1768479341847.png";
import treatmentImage2 from "@assets/image_1768479349112.png";

export default function Home() {
  const { data: testimonials } = useTestimonials();

  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : [
    { name: "Alienor W.", content: "Professionnelle et a l'ecoute, beaucoup de douceur et m'a plus aide en 2 seances que les divers professionnels de sante que j'ai vu ces dernieres annees.", rating: 5 },
    { name: "Simon L.", content: "Excellente chiropractrice, attentionnee, a l'ecoute et tres douee. Apres en avoir consulte plusieurs, c'est la premiere avec laquelle j'obtiens un reel resultat concret.", rating: 5 },
    { name: "Salome T.", content: "Louisa est tres douce et a l'ecoute. Je vous recommande fortement cette praticienne pour vos douleurs et inconforts en tous genres.", rating: 5 },
  ];

  const services = [
    { title: "Sciatique", icon: SciatiquIcon, slug: "sciatique" },
    { title: "Femmes Enceintes", icon: Baby, slug: "femmes-enceintes" },
    { title: "Cervicales", icon: CervicalesIcon, slug: "cervicales" },
    { title: "Sportifs", icon: Dumbbell, slug: "sportifs" },
    { title: "Hernie Discale", icon: HernieDiscaleIcon, slug: "hernie-discale" },
    { title: "Scoliose", icon: ScolioseIcon, slug: "scoliose" },
    { title: "Machoire", icon: Smile, slug: "machoire" },
    { title: "Pediatrie", icon: Baby, slug: "pediatrie" },
    { title: "Mal de Dos", icon: MalDeDosIcon, slug: "mal-de-dos" },
    { title: "Lombalgie", icon: Activity, slug: "lombalgie" },
    { title: "Arthrose", icon: ArthroseIcon, slug: "arthrose" },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Phone Banner - positioned below fixed navigation */}
      <div className="bg-primary text-white py-3 text-center mt-20">
        <a 
          href="tel:+33641405602" 
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 hover:opacity-90 transition-opacity"
          data-testid="link-phone-banner"
        >
          <span className="flex items-center gap-2 font-medium">
            <Phone className="w-4 h-4" />
            <span>Prenez rendez-vous par téléphone :</span>
          </span>
          <span className="font-bold">+33 6 41 40 56 02</span>
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
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
                Cabinet ouvert a Toulouse
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight">
                Votre sante, notre <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  priorite absolue
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Prenez rendez-vous des aujourd'hui avec Louisa Peslier-Dauzats dans notre cabinet de chiropraxie. Une approche holistique pour une vie sans douleur.
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
                <img 
                  src={heroImage} 
                  alt="Louisa Peslier-Dauzats Chiropracteur Toulouse" 
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Louisa Peslier-Dauzats</p>
                  <p className="text-sm opacity-90">Chiropracteur D.C.</p>
                </div>
              </div>
              
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
                    <p className="font-bold text-primary">Kinesiologie</p>
                    <p className="text-xs text-muted-foreground">Appliquee Certifiee</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={profileImage} 
                alt="Louisa Peslier-Dauzats" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Une approche globale et humaine</h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diplomee de l'Institut Franco Europeen de Chiropraxie et certifiee en kinesiologie appliquee professionnelle, 
                Louisa Peslier-Dauzats recherche et traite la cause de vos douleurs efficacement grace a une comprehension 
                globale et holistique du corps. En se basant sur la fonction du systeme nerveux et du cerveau, 
                nous soignons l'ensemble du corps.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Chiropraxie", desc: "Ajustements precis pour restaurer la mobilite articulaire.", icon: Stethoscope },
              { title: "Kinesiologie", desc: "Diagnostic precis pour identifier les causes profondes.", icon: Brain },
              { title: "Prevention", desc: "Conseils et exercices pour une sante durable.", icon: Activity },
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

      {/* TREATMENT IMAGES SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={treatmentImage1} 
                alt="Consultation chiropracteur" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={treatmentImage2} 
                alt="Manipulation chiropracteur" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4 text-center md:text-left">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Nos Expertises</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Pathologies Traitees</h2>
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
                slug={service.slug}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-display">Vos Temoignages</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              La satisfaction de nos patients est notre plus belle reussite.
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
                    <span key={j} className="text-accent text-xl">&#9733;</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Questions Frequentes</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-xl px-6 bg-secondary/10">
              <AccordionTrigger className="hover:no-underline py-6 text-lg font-medium text-foreground">
                Comment travaillent nos chiropracteurs ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Les chiropracteurs utilisent des ajustements : une technique de manipulation tres precise qui permet de redonner la mobilite a une articulation specifique. 
                Nous ne nous arretons jamais a vos symptomes et recherchons toujours l'origine de vos douleurs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-xl px-6 bg-secondary/10">
              <AccordionTrigger className="hover:no-underline py-6 text-lg font-medium text-foreground">
                Pourquoi consulter un chiropracteur ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                La chiropraxie traite une variete de problemes (maux de tete, dos, cou, articulations) et ameliore la performance sportive. 
                Elle a aussi une grande valeur preventive en decelant les troubles avant qu'ils ne deviennent douloureux.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-xl px-6 bg-secondary/10">
              <AccordionTrigger className="hover:no-underline py-6 text-lg font-medium text-foreground">
                Quel est l'interet de la kinesiologie appliquee ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                C'est une methode diagnostique qui permet de determiner plus efficacement et rapidement les origines des symptomes. 
                Elle aide a identifier les priorites de traitement tout en respectant les limites du corps.
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
                  Une question ? Besoin d'un renseignement ? N'hesitez pas a nous ecrire ou a prendre rendez-vous directement en ligne.
                </p>
              </div>

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

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-primary">Consultations sur RDV</p>
                  <p className="text-sm text-muted-foreground">Via Doctolib ou par telephone</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Button asChild variant="outline">
                    <a href="tel:+33641405602">
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats" target="_blank">
                      Doctolib
                    </a>
                  </Button>
                </div>
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
