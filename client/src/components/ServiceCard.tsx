import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="p-3 bg-secondary rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          Traitement spécialisé et accompagnement personnalisé pour soulager durablement vos douleurs.
        </p>
      </div>
    </motion.div>
  );
}
