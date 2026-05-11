// ============================================================
// CONFIGURATION DU SITE — remplir ce fichier pour personnaliser
// ============================================================

export const SITE = {
  practitioner: {
    name: "[Prénom Nom]",
    title: "Chiropracteur D.C.",
    shortTitle: "Chiropracteur",
    credentials:
      "Diplômé(e) de [Institut] et certifié(e) en kinésiologie appliquée professionnelle",
  },
  practice: {
    name: "Cabinet de Chiropraxie [Nom]",
    city: "[Ville]",
    address: "[Votre adresse]",
    postalCode: "[Code postal]",
    district: "[Quartier]",
    phone: "[XX XX XX XX XX]",
    phoneHref: "tel:+33XXXXXXXXXX",
    phoneDisplay: "+33 X XX XX XX XX",
    bookingUrl: "#",
    mapsEmbedUrl: "",
    mapsDirectionsUrl: "#",
  },
  hours: [
    { day: "[Jour]", hours: "XX:XX – XX:XX" },
    { day: "[Jour]", hours: "XX:XX – XX:XX" },
    { day: "[Jour]", hours: "XX:XX – XX:XX" },
    { day: "[Jour]", hours: "XX:XX – XX:XX" },
  ],
  testimonials: [
    {
      name: "Patient A.",
      content:
        "Professionnelle et à l'écoute, beaucoup de douceur et m'a plus aidé en 2 séances que les divers professionnels de santé que j'ai vus ces dernières années.",
      rating: 5,
    },
    {
      name: "Patient B.",
      content:
        "Excellente chiropractrice, attentionnée, à l'écoute et très douée. Après en avoir consulté plusieurs, c'est la première avec laquelle j'obtiens un réel résultat concret.",
      rating: 5,
    },
    {
      name: "Patient C.",
      content:
        "Très douce et à l'écoute. Je vous recommande fortement cette praticienne pour vos douleurs et inconforts en tous genres.",
      rating: 5,
    },
  ],
};
