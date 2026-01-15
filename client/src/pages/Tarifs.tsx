import { motion } from "framer-motion";
import { Euro, Users, Baby, Info, Phone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Tarifs() {
  const tarifs = [
    {
      title: "Première consultation adulte",
      price: "60",
      icon: Users,
      description: null
    },
    {
      title: "Consultation de suivi adulte",
      price: "55",
      icon: Users,
      description: null
    },
    {
      title: "Première consultation enfant",
      price: "50",
      icon: Baby,
      description: "De la naissance à 14 ans"
    },
    {
      title: "Consultation de suivi enfant",
      price: "45",
      icon: Baby,
      description: "De la naissance à 14 ans"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Phone Banner */}
      <div className="bg-primary text-white py-3 text-center">
        <a 
          href="tel:+33641405602" 
          className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          data-testid="link-phone-banner"
        >
          <Phone className="w-4 h-4" />
          <span className="font-medium">Prenez rendez-vous par téléphone : +33 6 41 40 56 02</span>
        </a>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Nos tarifs</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
              Prix et Tarifs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Prix d'une consultation de chiropraxie dans notre cabinet à Toulouse. Prenez rendez-vous avec notre chiropracteur dès aujourd'hui.
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

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {tarifs.map((tarif, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                      <tarif.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{tarif.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {tarif.price} <span className="text-xl">EUR</span>
                    </div>
                    {tarif.description && (
                      <p className="text-sm text-muted-foreground">{tarif.description}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Remboursement par la sécurité sociale et mutuelle
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    En France, les séances de chiropraxie sont prises en charge par certaines assurances mutuelles, mais ne sont pas remboursées par la sécurité sociale. Cependant, cela peut varier d'une assurance à l'autre et il est recommandé de vérifier auprès de votre assureur pour savoir si les séances de chiropratique sont couvertes dans votre contrat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à prendre rendez-vous ?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-full"
              asChild
            >
              <a href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats" target="_blank" rel="noopener noreferrer">
                Doctolib
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="tel:+33641405602">
                <Phone className="w-4 h-4 mr-2" />
                +33 6 41 40 56 02
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
