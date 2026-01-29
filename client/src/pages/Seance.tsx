import { motion } from "framer-motion";
import { CheckCircle, Clock, Stethoscope, Activity, Phone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import treatmentImage1 from "@assets/image_1768479341847.png";
import treatmentImage2 from "@assets/image_1768479349112.png";

export default function Seance() {
  const steps = [
    {
      number: "1",
      title: "Anamnèse et diagnostic",
      description: "Après vous avoir questionné sur votre historique et vos douleurs, votre chiropracteur analysera votre posture et réalisera une série de tests spécifiques afin de poser un diagnostic pour vous soigner efficacement."
    },
    {
      number: "2", 
      title: "Traitement",
      description: "Pour le traitement nous utilisons des ajustements articulaires, des techniques de détente musculaire, tendineuse, des fascias et des nerfs. Toujours en fonction de vos besoins."
    },
    {
      number: "3",
      title: "Réévaluation",
      description: "Pour finir nous réévaluerons ensemble les tests réalisés et votre posture afin d'objectiver les améliorations."
    },
    {
      number: "4",
      title: "Suivi",
      description: "Une séance de suivi vous sera proposée pour continuer votre traitement si cela est nécessaire. Il en existe 2 types : la séance curative et la séance de stabilisation qui vient finir le traitement et qui n'intervient que lorsque vous vous sentez bien, pour faire perdurer cet état."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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

      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Notre méthode</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
              Déroulement d'une séance de chiropraxie
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Découvrez comment se déroule une séance avec nos chiropracteurs à Toulouse. Prenez rendez-vous dès aujourd'hui.
            </p>
            <Button 
              size="lg" 
              className="rounded-full"
              asChild
            >
              <a href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats" target="_blank" rel="noopener noreferrer">
                Prendre Rendez-vous
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              La chiropraxie est une forme de thérapie physique qui vise à soulager les douleurs du corps en réajustant les articulations et en corrigeant les dysfonctionnements de la colonne vertébrale et des articulations. Voici comment se déroule généralement une séance de chiropraxie dans notre cabinet à Toulouse :
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 bg-white p-8 rounded-2xl shadow-sm border border-border"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Warning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
            <Activity className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground">
              Il est très fortement déconseillé de pratiquer une activité sportive dans les 48h après votre séance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à prendre soin de vous ?</h2>
          <Button 
            size="lg" 
            variant="secondary"
            className="rounded-full"
            asChild
          >
            <a href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats" target="_blank" rel="noopener noreferrer">
              Prendre Rendez-vous
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
