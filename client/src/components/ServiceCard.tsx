import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

type IconComponent = React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { className?: string }>;

interface ServiceCardProps {
  title: string;
  icon: IconComponent;
  slug: string;
  delay?: number;
}

export function ServiceCard({ title, icon: Icon, slug, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={`/pathologie/${slug}`}
        className="group relative block bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
        data-testid={`link-pathologie-${slug}`}
      >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="w-24 h-24 text-primary" />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-4">
          <div className="p-3 bg-secondary rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Icon className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Traitement spécialisé et accompagnement personnalisé pour soulager durablement vos douleurs.
          </p>

          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
            En savoir plus
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="md:hidden"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.span>
            <ChevronRight className="w-4 h-4 hidden md:inline-block group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
