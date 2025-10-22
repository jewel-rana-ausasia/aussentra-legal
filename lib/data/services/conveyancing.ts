import { ServicePage } from './types';

export const conveyancingData: ServicePage = {
  id: 'criminal-law',
  title: 'Criminal Law Services',
  description: 'Expert criminal defense representation for all types of criminal cases',
  slug: 'criminal-law',
  heroImage: '/images/services/criminal-law-hero.jpg',
  sections: [
    {
      title: "What is criminal issue?",
      paragraphs: [
        "Lawyer alterations drama lorem ipsum amet navida haretra nuam enim mi in the oborifs esetena silver enes accumsan miss the amet auctor orci dones vitae vehicula risus duise nunsapien accumsan in the mauris speain rutrum fermen.",
        "Criminal enim mi oborifs eset uctus enec accumsan usio alisuame amet auctor orci golden vitae ehica risus duise nun sapien accumsan id mauris rutrum nie spaien drana lorem ipsum amet navida haretra nuam enim the miss fermen."
      ],
      listItems: [
        { text: "Criminal enim miss the oborifs" },
        { text: "Vitae ehica drana risus duise" },
        { text: "Navida is the haretra fermen" }
      ]
    },
    {
      title: "Criminal offences",
      paragraphs: [
        "Lawyer alterations drama lorem ipsum amet navida haretra nuam enim mi in the oborifs esetena silver enes accumsan miss the amet auctor orci dones vitae vehicula risus duise nunsapien accumsan in the mauris speain rutrum fermen."
      ]
    },
    {
      title: "How do I find a solicitor to help me with criminal law?",
      paragraphs: [
        "Criminal enim mi oborifs eset uctus enec accumsan usio alisuame amet auctor orci golden vitae ehica risus duise nun sapien accumsan id mauris rutrum nie spaien drana lorem ipsum amet navida haretra nuam enim the miss fermen."
      ],
      listItems: [
        { text: "Vitae ehica drana risus duise" },
        { text: "Navida is the haretra fermen" }
      ]
    }
  ],
  meta: {
    title: "Criminal Law Services | Expert Defense Lawyers",
    description: "Professional criminal defense attorneys providing expert legal representation for all criminal cases.",
    keywords: ["criminal law", "defense attorney", "legal representation", "criminal defense"]
  },
  cta: {
    text: "Need immediate legal assistance? Contact our criminal defense team today.",
    buttonText: "Schedule Consultation",
    link: "/contact"
  }
};