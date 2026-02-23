import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Calendar, ChevronRight, type LucideIcon } from "lucide-react";
import { Activity, Baby, Brain, Dumbbell, HeartPulse, Move, Smile, UserPlus } from "lucide-react";
import { SciatiquIcon } from "@/components/icons/SciatiquIcon";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";

import imgSciatique from "@assets/Sciatique_1771861119224.png";
import imgArthrose from "@assets/stock_images/pathologie_arthrose.jpg";
import imgCervicales from "@assets/image_1768479341847.png";
import imgFemmesEnceintes from "@assets/stock_images/pathologie_femmes_enceintes.jpg";
import imgHernieDiscale from "@assets/stock_images/pathologie_hernie_discale.jpg";
import imgScoliose from "@assets/stock_images/pathologie_scoliose.jpg";
import imgMachoire from "@assets/Machoire_1771861119206.png";
import imgPediatrie from "@assets/Pédiatrie_1771861119223.png";
import imgMalDeDos from "@assets/image_1768479349112.png";
import imgLombalgie from "@assets/image_1768479349112.png";
import imgSportifs from "@assets/stock_images/pathologie_sportifs.png";

type IconComponent = React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { className?: string }>;

interface PathologieData {
  title: string;
  icon: IconComponent;
  question: string;
  content: string[];
  relatedSlugs: string[];
  image: string;
  imageAlt: string;
}

const pathologiesData: Record<string, PathologieData> = {
  sciatique: {
    title: "Sciatique",
    icon: SciatiquIcon,
    question: "Qu'est-ce que la sciatique ?",
    content: [
      "Une sciatique est une inflammation du nerf sciatique, qui est le plus long nerf du corps humain. Il peut être pincé, irrité ou adhérer à des structures adjacentes. Les symptômes se caractérisent par des douleurs qui irradient le long de la jambe dans des territoires précis.",
      "Nos chiropracteurs à Toulouse sont des professionnels de la santé qui s'intéressent au diagnostic, au traitement et à la prévention des troubles du système nerveux et de la colonne vertébrale, comme la sciatique.",
    ],
    relatedSlugs: ["hernie-discale", "lombalgie", "mal-de-dos"],
    image: imgSciatique,
    imageAlt: "Traitement chiropratique de la sciatique - manipulation du bas du dos",
  },
  arthrose: {
    title: "Arthrose",
    icon: HeartPulse,
    question: "Qu'est-ce que l'arthrose ?",
    content: [
      "L'arthrose est une dégénérescence articulaire qui touche de plus en plus de personnes à mesure que l'on prend de l'âge. Cependant elle évolue par phase : les phases mécaniques qui vont causer beaucoup d'inconfort et d'enraidissement et les phases inflammatoires qui causent des gonflements, de la chaleur et de la douleur.",
      "L'arthrose est une usure naturelle qui affecte les articulations, causant de la douleur et de la raideur. Nos chiropracteurs à Toulouse aident les patients souffrant d'arthrose à retrouver mobilité et confort grâce à des techniques adaptées.",
    ],
    relatedSlugs: ["mal-de-dos", "cervicales", "lombalgie"],
    image: imgArthrose,
    imageAlt: "Douleur articulaire liée à l'arthrose - prise en charge chiropratique",
  },
  cervicales: {
    title: "Cervicales",
    icon: Brain,
    question: "Qu'est-ce que la cervicalgie ?",
    content: [
      "La cervicalgie est une douleur de la région du cou qui peut être causée par de nombreux facteurs, tels que des mouvements brusques, de mauvaises postures, des tensions musculaires, des blessures, des accidents, des traumatismes, des entorses cervicales, ou encore un coup du lapin.",
      "Nos chiropracteurs à Toulouse aident les patients atteints de cervicalgie de plusieurs manières, en utilisant des techniques d'ajustement précises pour restaurer la mobilité cervicale et soulager les douleurs.",
    ],
    relatedSlugs: ["mal-de-dos", "hernie-discale", "machoire"],
    image: imgCervicales,
    imageAlt: "Consultation chiropratique pour les douleurs cervicales",
  },
  "femmes-enceintes": {
    title: "Femmes Enceintes",
    icon: Baby,
    question: "Pourquoi consulter un chiropracteur pendant la grossesse ?",
    content: [
      "Le chiropracteur est un professionnel de la santé qui s'intéresse aux causes des douleurs en prenant en compte l'ensemble du corps. Il s'efforce de maintenir une bonne santé en réajustant la colonne vertébrale afin de permettre au système nerveux de fonctionner de manière optimale.",
      "Pendant la grossesse le corps s'adapte de différentes manières, nos chiropracteurs à Toulouse vous aideront à vous adapter pour passer au mieux toutes les étapes afin de pouvoir profiter au mieux de ce moment de votre vie.",
    ],
    relatedSlugs: ["lombalgie", "sciatique", "mal-de-dos"],
    image: imgFemmesEnceintes,
    imageAlt: "Accompagnement chiropratique pendant la grossesse",
  },
  "hernie-discale": {
    title: "Hernie Discale",
    icon: Activity,
    question: "Qu'est-ce qu'une hernie discale ?",
    content: [
      "Une hernie discale est une pathologie du disque intervertébral. Certaines fibres périphériques sont lésées et la partie la plus molle contenue à l'intérieur peut trouver un passage vers la périphérie. Cela s'observe sur les imageries médicales sous forme d'une boursoufflure.",
      "Celle-ci peut venir appuyer sur toutes les structures adjacentes et créer des douleurs ou des inconforts en fonction de sa localisation et de sa taille. Une pression sur un nerf causera une sciatique, une cruralgie ou une névralgie cervico-brachiale. Une pression sur un ligament créera une douleur locale avec des limitations d'amplitude.",
    ],
    relatedSlugs: ["sciatique", "lombalgie", "cervicales"],
    image: imgHernieDiscale,
    imageAlt: "Douleurs de dos liées à une hernie discale",
  },
  scoliose: {
    title: "Scoliose",
    icon: Move,
    question: "Qu'est-ce que la scoliose ?",
    content: [
      "La scoliose est une déformation de la colonne vertébrale qui peut causer de la douleur, de la fatigue et des problèmes de posture.",
      "La scoliose est une condition qui se caractérise par une courbure anormale de la colonne vertébrale. La courbure peut être en forme de « S » ou de « C », et peut affecter différentes parties de la colonne vertébrale.",
      "Les symptômes de la scoliose peuvent inclure une asymétrie de la poitrine ou des épaules, une inclinaison de la hanche ou une déviation de la colonne vertébrale visible.",
    ],
    relatedSlugs: ["mal-de-dos", "lombalgie", "cervicales"],
    image: imgScoliose,
    imageAlt: "Examen de la colonne vertébrale pour la scoliose",
  },
  machoire: {
    title: "Mâchoire",
    icon: Smile,
    question: "Quels sont les troubles de la mâchoire ?",
    content: [
      "Les troubles de la mâchoire, également appelés troubles temporo-mandibulaires, peuvent causer de la douleur, de la raideur et des difficultés à ouvrir ou à fermer la bouche. Ils peuvent également entraîner des bruits ou des craquements lors de la mastication ou de la déglutition.",
      "Le chiropraticien est un professionnel de la santé qui s'intéresse au diagnostic, au traitement et à la prévention des troubles du système neuro-musculosquelettique, y compris pour les patients qui souffrent de la mâchoire.",
    ],
    relatedSlugs: ["cervicales", "mal-de-dos", "sportifs"],
    image: imgMachoire,
    imageAlt: "Traitement des troubles de la mâchoire et des cervicales",
  },
  pediatrie: {
    title: "Pédiatrie",
    icon: Baby,
    question: "Qu'est-ce que la chiropratique pédiatrique ?",
    content: [
      "La chiropraxie pédiatrique vise à diagnostiquer, prévenir et traiter les troubles musculo-squelettiques et nerveux chez les enfants.",
      "Nos chiropracteurs pédiatriques à Toulouse sont particulièrement utiles pour aider les enfants en cas de maux de tête, douleurs de croissance, troubles du sommeil, troubles de l'apprentissage, freins restrictifs buccaux, etc.",
    ],
    relatedSlugs: ["scoliose", "cervicales", "sportifs"],
    image: imgPediatrie,
    imageAlt: "Chiropratique pédiatrique - traitement doux pour les enfants",
  },
  "mal-de-dos": {
    title: "Mal de Dos",
    icon: UserPlus,
    question: "Qu'est-ce que le mal de dos ?",
    content: [
      "Le mal de dos décrit une douleur ou une gêne dans la région lombaire ou thoracique de la colonne vertébrale. Il peut être causé par une variété de facteurs tels que des mouvements répétitifs, des blessures, des maladies, des troubles musculo-squelettiques, des troubles de la colonne vertébrale tels que la scoliose, hernie discale, la lombalgie, ou même des facteurs psychologiques.",
      "Il peut être accompagné de symptômes tels que des raideurs, des spasmes musculaires, des engourdissements et des fourmillements. Les chiropracteurs à Toulouse vous aident à identifier la cause et à traiter efficacement vos douleurs de dos.",
    ],
    relatedSlugs: ["lombalgie", "hernie-discale", "sciatique"],
    image: imgMalDeDos,
    imageAlt: "Manipulation chiropratique pour le mal de dos",
  },
  lombalgie: {
    title: "Lombalgie",
    icon: Activity,
    question: "Qu'est-ce que la lombalgie ?",
    content: [
      "La lombalgie est une douleur qui survient dans la région lombaire et qui peut affecter le bas du dos. Elle peut être causée par une mauvaise posture, des mouvements répétitifs, des blessures ou des problèmes médicaux chroniques. Les symptômes incluent une douleur sourde et aiguë, des raideurs et des spasmes musculaires, des engourdissements et des fourmillements.",
      "Les chiropracteurs sont des professionnels de la santé qui traitent les maux de dos et d'autres troubles neuro-musculosquelettiques par l'ajustement manuel de la colonne vertébrale. Ils sont une alternative aux traitements médicamenteux pour la lombalgie.",
    ],
    relatedSlugs: ["mal-de-dos", "sciatique", "hernie-discale"],
    image: imgLombalgie,
    imageAlt: "Traitement chiropratique de la lombalgie - manipulation du bas du dos",
  },
  sportifs: {
    title: "Sportifs",
    icon: Dumbbell,
    question: "Qu'est-ce que la chiropratique sportive ?",
    content: [
      "La chiropratique sportive est une spécialisation de la chiropratique qui se concentre sur les blessures et les douleurs liées à l'activité physique et au sport.",
      "Les chiropracteurs du sport utilisent des techniques manuelles pour traiter les entorses, tendinites, maux de dos, et les douleurs articulaires, ainsi que pour prévenir les blessures et améliorer les performances sportives.",
    ],
    relatedSlugs: ["sciatique", "mal-de-dos", "arthrose"],
    image: imgSportifs,
    imageAlt: "Chiropratique sportive - traitement des blessures liées au sport",
  },
};

export default function PathologieDetail() {
  const [, params] = useRoute("/pathologie/:slug");
  const slug = params?.slug || "";
  const data = pathologiesData[slug];

  if (!data) {
    return <NotFound />;
  }

  const Icon = data.icon;
  const relatedPathologies = data.relatedSlugs
    .filter((s) => pathologiesData[s])
    .map((s) => ({ slug: s, ...pathologiesData[s] }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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

      <section className="pt-12 pb-16 bg-secondary/30 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              data-testid="link-back-pathologies"
            >
              <ArrowLeft className="w-4 h-4" />
              Toutes les pathologies
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="p-4 bg-primary/10 rounded-2xl"
            >
              <Icon className="w-12 h-12 text-primary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary font-display" data-testid="text-pathologie-title">
                {data.title}
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Chiropracteur à Toulouse — Louisa Peslier-Dauzats
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={data.image}
              alt={data.imageAlt}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              data-testid="img-pathologie"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-8"
            >
              {data.question}
            </motion.h2>

            <div className="space-y-6">
              {data.content.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 font-display">
              Vous souffrez de {data.title.toLowerCase()} ?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Prenez rendez-vous avec Louisa Peslier-Dauzats pour un diagnostic personnalisé et un traitement adapté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://www.doctolib.fr/chiropracteur/toulouse/louisa-peslier-dauzats"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-doctolib-pathologie"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre Rendez-vous
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 text-white"
                asChild
              >
                <a href="tel:+33641405602" data-testid="button-phone-pathologie">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler le cabinet
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {relatedPathologies.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Pathologies associées
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPathologies.map((related, idx) => {
                const RelIcon = related.icon;
                return (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/pathologie/${related.slug}`}
                      className="group block bg-white p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                      data-testid={`link-related-${related.slug}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                          <RelIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">En savoir plus</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
