import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Inserisci il tuo nome").max(100),
  email: z.string().trim().email("Inserisci un'email valida").max(255),
});

const LeadMagnetSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse({ name, email });
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Save locally for now
    const leads = JSON.parse(localStorage.getItem("leads") || "[]");
    leads.push({ name: result.data.name, email: result.data.email, date: new Date().toISOString() });
    localStorage.setItem("leads", JSON.stringify(leads));

    setSubmitted(true);
    toast({
      title: "🎉 Sei dentro!",
      description: "Controlla la tua email per accedere alla lezione gratuita.",
    });
  };

  if (submitted) {
    return (
      <section id="lead-magnet" className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6 glow-yellow">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perfetto, <span className="text-primary">{name}</span>! 🎉
          </h2>
          <p className="text-lg text-muted-foreground">
            La sfida è stata accettata. Controlla la tua email per accedere alla lezione gratuita
            e preparati a creare la tua prima web app in meno di 10 minuti!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="lead-magnet" className="py-24 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pronto ad <span className="text-primary text-glow">Accettare la Sfida?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Inserisci i tuoi dati e ricevi subito accesso alla lezione gratuita.
            <br />
            Vedrai con i tuoi occhi come si crea una web app completa in 10 minuti.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-card border border-primary/20 p-8 md:p-10 glow-yellow"
        >
          <div className="space-y-5">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Il tuo nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-11 h-14 text-base bg-secondary border-border/50 focus:border-primary/50"
                />
              </div>
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="La tua email migliore"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-14 text-base bg-secondary border-border/50 focus:border-primary/50"
                />
              </div>
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-bold rounded-xl glow-yellow hover:glow-yellow-strong transition-all duration-300 group"
            >
              Voglio Vedere la Lezione Gratuita!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 I tuoi dati sono al sicuro. Niente spam, lo prometto.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
