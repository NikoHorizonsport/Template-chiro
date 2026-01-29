import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

type InquiryWithHoneypot = InsertInquiry & { website?: string };

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryWithHoneypot) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send inquiry");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé",
        description: "Nous avons bien reçu votre demande et vous recontacterons bientôt.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
