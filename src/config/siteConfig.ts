export const siteConfig = {
  global: {
    brandName: "IZABELY AMÉRICO",
    logoImage: "/logo.jpeg",
    professionalName: "Izabely",
    whatsappNumber: "5514981373898",
    instagram: "https://www.instagram.com/izaamerico.nail/",
    contactEmail: "[EMAIL_DE_CONTATO]",
    location: {
      city: "Salto Grande - SP",
      neighborhood: "Coab",
      address: "Rua Gabriel Fogaça, 46",
      mapsLink: "https://maps.app.goo.gl/KtjfSzYedHLVBGeW8",
      hours: "Atendimento Personalizado"
    }
  },
  seo: {
    title: "Izabely Américo | Nail Design Premium",
    description: "Eleve sua autoestima com unhas impecáveis. Especialista em alongamento, fibra de vidro e esmaltação em gel. Agende seu horário.",
    keywords: ["Nail Designer", "Alongamento de Unhas", "Fibra de Vidro", "Manicure", "Salto Grande - SP"]
  },
  hero: {
    badge: "⭐ Avaliação 5.0 / 5 • Clientes Satisfeitas", // Inspirado na referência
    title: "Unhas de Salão Perfeitas e com Naturalidade",
    subtitle: "Realce sua beleza com alongamentos de alto padrão que refletem a sua personalidade.",
    ctaPrimary: "Agendar meu horário",
    ctaSecondary: "Ver portfólio",
    features: [
      "Padrão de naturalidade",
      "Técnicas e tendências atuais",
      "Produtos de alta qualidade",
      "Acabamento impecável e duradouro"
    ]
  },
  benefits: [
    { title: "Biossegurança rigorosa", description: "Materiais 100% esterilizados em autoclave e descartáveis para sua saúde." },
    { title: "Alta durabilidade", description: "Produtos premium que garantem unhas intactas por semanas." },
    { title: "Atendimento exclusivo", description: "Um momento de relaxamento dedicado apenas a você." }
  ],
  services: [
    {
      id: "fibra-de-vidro",
      name: "Fibra de Vidro",
      description: "Alongamento resistente, natural e elegante. Incluso cuticulagem russa e decorações. Duração de até 30 dias com manutenção a cada 25 dias.",
      duration: "3h",
      price: "R$ 120,00",
      maintenancePrice: "R$ 90,00",
      whatsappMessage: "Olá! Gostaria de saber os horários disponíveis para Aplicação de Fibra de Vidro.",
      image: "/fibra-de-vidro.jpeg"
    },
    {
      id: "banho-de-gel",
      name: "Banho de Gel",
      description: "Fortalece as unhas naturais e aumenta a durabilidade. Incluso cuticulagem russa e decorações. Duração de 25 a 30 dias.",
      duration: "2h",
      price: "R$ 65,00",
      maintenancePrice: "R$ 50,00",
      whatsappMessage: "Olá! Gostaria de saber os horários disponíveis para Banho de Gel.",
      image: "/banho-de-gel.jpeg"
    },
    {
      id: "molde-f1",
      name: "Molde F1",
      description: "Alongamento resistente, prático e moderno. Incluso cuticulagem russa e decorações. Duração de até 30 dias com manutenção a cada 25 dias.",
      duration: "2h",
      price: "R$ 110,00",
      maintenancePrice: "R$ 90,00",
      whatsappMessage: "Olá! Gostaria de saber os horários disponíveis para Molde F1.",
      image: "/moldeF1.jpeg"
    },
    {
      id: "Nail-Arte-Personalizada",
      name: "Nail Arte Personalizada",
      description: "Unhas decoradas com pedrarias, adesivos, desenhos feitos à mão e outras técnicas personalizadas. Duração de 25 a 30 dias.",
      duration: "1h",
      price: "R$ 50,00",
      whatsappMessage: "Olá! Gostaria de saber os horários disponíveis para Nail Arte Personalizada.",
      image: "/nail-art-personalizada.jpeg"
    },
    {
      id: "esmaltacao-gel",
      name: "Esmaltação em Gel",
      description: "Acabamento impecável, brilho intenso sem descascar. Incluso cuticulagem russa e decorações. Duração de 15 a 20 dias.",
      duration: "40m",
      price: "R$ 45,00",
      whatsappMessage: "Olá! Gostaria de saber os horários disponíveis para Esmaltação em Gel.",
      image: "/esmaltacao-em-gel.jpeg"
    }
  ],
  portfolio: [
    "/banho-de-gel.jpeg",
    "/fibra-de-vidro.jpeg",
    "/nail-art-personalizada.jpeg",
    "/esmaltacao-em-gel.jpeg",
    "/manicure-tradicional.jpeg",
    "/pedicure.jpeg",
    "/moldeF1.jpeg"
  ],
  additionalServices: [
    { name: "Reposição de unha", price: "R$ 10,00 (un)" },
    { name: "Remoção", price: "R$ 50,00" },
    { name: "Manicure", price: "R$ 35,00" },
    { name: "Pedicure", price: "R$ 40,00" }
  ],
  about: {
    title: "Muito prazer, sou a Izabely",
    bio: "Nail Designer especializada em alongamento de unhas com padrão naturalidade. Trago comigo uma paixão imensa e um olhar jovem e criativo para o mundo das unhas. Para mim, ser Nail Designer é mais do que aplicar esmalte; é sobre realçar sua beleza, cuidar da sua saúde e transformar suas unhas em verdadeiras joias que refletem sua personalidade.\n\n• O que você vai encontrar? As últimas tendências em alongamentos, blindagens, esmaltações e nail art exclusiva, tudo feito com muito carinho, técnica e produtos de alta qualidade.\n\n• Meu compromisso: Garantir que suas unhas não só fiquem lindas, mas também saudáveis e com um acabamento impecável e duradouro.",
    specialties: ["Alongamentos", "Blindagens", "Esmaltação", "Nail Art Exclusiva"]
  },
  faq: [
    { question: "Quanto tempo dura o procedimento?", answer: "O alongamento leva em média de 2h a 2h30. Já a manutenção ou banho de gel levam cerca de 1h30." },
    { question: "Qual é a durabilidade?", answer: "Com os cuidados corretos, a manutenção deve ser feita entre 15 e 20 dias." },
    { question: "O procedimento danifica as unhas naturais?", answer: "Não. A preparação correta e a remoção segura garantem a total saúde das suas unhas naturais." }
  ],
  bookingSteps: [
    { title: "Escolha o Serviço", description: "Navegue pelas opções e encontre a técnica ideal para o resultado que você deseja." },
    { title: "Fale no WhatsApp", description: "Clique no botão de agendamento para abrir uma conversa diretamente no nosso WhatsApp." },
    { title: "Confirme o Horário", description: "Nossa equipe enviará as opções de horários disponíveis. Escolha o melhor para você!" }
  ]
};