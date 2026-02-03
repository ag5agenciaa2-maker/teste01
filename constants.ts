
export const CONTACT_INFO = {
  name: "Jéssica Moreira Advocacia",
  phone: "(21) 98371-4983",
  phoneRaw: "5521983714983",
  email: "contato@jessicamoreira.adv.br",
  address: "Rua Votorantin, 44 – Campo Grande – RJ",
  instagram: "@jessica.moreira.adv",
  whatsappMessage: "Olá vim pelo site e gostaria de mais informações.",
};

export const ASSETS = {
  logo: "https://storage.googleapis.com/msgsndr/7hzaWcGgawCV1WudlwA7/media/697cf7ef1fd8275915f324a0.jpeg",
  lawyerHero: "https://storage.googleapis.com/msgsndr/7hzaWcGgawCV1WudlwA7/media/697cf7ef5accfa83d52af95b.png",
  authorityInauguration: "https://storage.googleapis.com/msgsndr/7hzaWcGgawCV1WudlwA7/media/697cf7ef66e7ca856b348fcb.png",
  officeBg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920",
  legalSymbol: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800", // Gavel and law books
};

export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

export const NAVIGATION_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];
