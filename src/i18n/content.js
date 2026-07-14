/**
 * Contenu éditorial du site, indexé par langue.
 * Source : « SITE INTERNET 2026 » (ORIZONNE SARL).
 */

export const COMPANY = {
  name: "ORIZONNE SARL",
  site: "www.orizonne.com",
  email: "contact@orizonne.com",
  emailRh: "recrutement@orizonne.com",
  phone: "+237 6 XX XX XX XX",
  address: "Yaoundé, Cameroun",
  // Coordonnées Google Maps — Yaoundé (à ajuster sur l'adresse exacte du siège)
  mapsQuery: "Yaound%C3%A9%2C%20Cameroun",
  socials: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const content = {
  /* ====================================================================== */
  /*  FRANÇAIS                                                              */
  /* ====================================================================== */
  fr: {
    nav: {
      home: "Accueil",
      about: "Nous connaître",
      services: "Produits & Services",
      news: "Actualités",
      gallery: "Galerie",
      contact: "Nous contacter",
    },
    common: {
      readMore: "En savoir plus",
      discover: "Découvrir",
      contactUs: "Nous contacter",
      allServices: "Tous nos services",
      download: "Télécharger le catalogue",
      backTop: "Haut de page",
    },

    home: {
      slides: [
        {
          tag: "Intelligence artificielle",
          title: "L'IA au service de la",
          highlight: "sécurité monétaire",
          text: "Première FINTECH de la zone CEMAC spécialisée en intelligence artificielle adossée à la sécurité monétaire, documentaire et identitaire.",
          quote:
            "« Face à des contrefacteurs de plus en plus ingénieux, le billet de banque doit pouvoir se défendre de lui-même. »",
          cta: "Découvrir ORIZONNE TEG",
          to: "/produits-services",
        },
        {
          tag: "Éducation économique & financière",
          title: "Former pour",
          highlight: "décider en citoyens éclairés",
          text: "Nos programmes d'éducation fiduciaire, financière et budgétaire renforcent les compétences des ménages, des entreprises et des forces de sécurité.",
          quote:
            "« L'éducation fiduciaire est le principal canal d'amélioration du niveau de culture monétaire des populations. »",
          cta: "Nos formations",
          to: "/produits-services",
        },
        {
          tag: "Intelligence économique & financière",
          title: "L'expertise qui sécurise",
          highlight: "vos ressources financières",
          text: "Nous accompagnons l'administration publique, les banques, les assurances, les microfinances, les universités et les TPE/PME.",
          quote:
            "« Notre histoire est faite d'expertise et d'innovation. »",
          cta: "Nous connaître",
          to: "/nous-connaitre",
        },
      ],

      pillars: [
        {
          icon: "shield",
          title: "Sécurité monétaire",
          text: "Détection des contrefaçons sur les billets de banque et les pièces métalliques, par l'intelligence artificielle.",
        },
        {
          icon: "cpu",
          title: "Intelligence artificielle",
          text: "ORIZONNE TEG et nos solutions logicielles pour authentifier rapidement les signes monétaires.",
        },
        {
          icon: "graduation",
          title: "Éducation financière",
          text: "Campagnes d'éducation fiduciaire, financière et budgétaire auprès des ménages et des entreprises.",
        },
      ],

      introEyebrow: "Qui sommes-nous",
      introTitle: "La première FINTECH d'ingénierie économique et financière en zone CEMAC",
      introText:
        "ORIZONNE est une startup d'ingénierie économique et financière spécialisée en intelligence artificielle adossée à la sécurité monétaire, documentaire et identitaire. Nous répondons aux difficultés des économies de la sous-région : pénurie de pièces métalliques et recrudescence des contrefaçons sur la gamme BEAC-2020.",
      introBullets: [
        "Solutions d'IA de détection de la fraude fiduciaire",
        "Accompagnement des Banques Centrales et des établissements de crédit",
        "Campagnes d'éducation économique et financière des ménages",
      ],

      statsTitle: "ORIZONNE en quelques chiffres",
      stats: [
        { value: 70, suffix: "%", label: "des entreprises du secteur bancaire et financier collaborent avec nous" },
        { value: 5, suffix: "", label: "directions opérationnelles au service de nos clients" },
        { value: 7, suffix: "", label: "domaines d'expertise, de l'ingénierie fiduciaire à la notation" },
        { value: 3, suffix: "e", label: "édition du Guide Pratique de la Sécurité Monétaire" },
      ],

      servicesEyebrow: "Nos services",
      servicesTitle: "Une expertise complète, de l'ingénierie à la formation",
      servicesText:
        "Nous formons et accompagnons les établissements de crédit, les établissements de microfinance, les services de police et de gendarmerie, ainsi que les entreprises et les particuliers.",

      booksEyebrow: "Nos ouvrages",
      booksTitle: "Guide Pratique de la Sécurité Monétaire",
      booksText:
        "Règles de fonctionnement et techniques de couverture. Préfacé par Son Excellence Édouard AKAME MFOUMOU, Ministre d'État, Ministre de l'Économie et des Finances du Cameroun (1996-2001), élu banquier africain de l'année 1988.",
      booksBullets: [
        "Le parcours historique de la monnaie fiduciaire en Afrique Centrale",
        "Les techniques d'authentification de la monnaie fiduciaire",
        "L'intelligence artificielle en matière de lutte contre la fraude monétaire",
        "Les techniques de lutte contre la fraude à la monnaie scripturale",
        "Les sanctions relatives à la contrefaçon et à la falsification",
      ],

      ctaTitle: "Un projet, une formation, un besoin d'expertise ?",
      ctaText: "Nos équipes vous répondent sous 48 heures.",
    },

    about: {
      hero: {
        eyebrow: "Nous connaître",
        title: "Une histoire faite d'expertise et d'innovation",
        text: "ORIZONNE SARL — Startup d'ingénierie économique et financière.",
      },
      whoTitle: "Qui sommes-nous ?",
      whoParagraphs: [
        "Les défis liés à la modernisation des instruments de paiement restent et demeurent l'une des préoccupations actuelles des Banques Centrales, qui sont les premières garantes de la stabilité monétaire et financière. Par ailleurs, à l'ère des dynamiques d'innovation fiduciaire et de la dématérialisation des instruments et moyens de paiement, la prééminence de la monnaie fiduciaire dans l'économie reste d'actualité, surtout avec les exigences imposées aux imprimeries et ateliers de frappe de pièces de monnaie par les banques centrales, davantage exigeantes en termes de qualité de production des signes monétaires.",
        "Le souci de se mettre au diapason de l'ingénierie fiduciaire, par la mise en circulation de billets de banque et de pièces de monnaie plus attrayants et plus sécurisés — leur donnant la capacité de se défendre d'eux-mêmes face à des contrefacteurs de plus en plus ingénieux — a laissé émerger de nouveaux acteurs spécialisés dans la lutte contre la fausse monnaie, pour accompagner les Banques Centrales dans leur politique d'amélioration du niveau de culture fiduciaire des agents économiques.",
        "C'est dans ce sillage que l'intelligence artificielle se présente aujourd'hui comme une solution complémentaire, pour constituer une barrière face à la recrudescence de la fausse monnaie dans l'économie. Dès lors, ORIZONNE, première FINTECH spécialisée en intelligence artificielle adossée à la sécurité monétaire, documentaire et identitaire en zone CEMAC, a saisi cette opportunité pour apporter son savoir-faire afin de réduire ces phénomènes pervers qui fragilisent le bien-être social et économique des ménages. C'est l'une des raisons pour lesquelles des solutions opérationnelles conçues et développées par ORIZONNE ont vu le jour, à l'instar d'ORIZONNE TEG, une solution d'intelligence artificielle permettant de détecter rapidement les fraudes sur les billets de banque.",
        "ORIZONNE est enfin Expert en intelligence économique et financière. Nous accompagnons tous les métiers exposés aux problèmes de rentabilité et de captation de ressources financières : administration publique, secteurs de la banque et de l'assurance, écoles, universités, services en ligne, industrie, ressources humaines, particuliers. Notre expertise en éducation économique, financière et entrepreneuriale nous permet de collaborer quotidiennement avec les services de l'État, mais aussi avec plus de 70 % des entreprises du secteur bancaire et financier (banques, assurances, établissements de microfinance) et un grand nombre de TPE/PME.",
      ],

      quote:
        "L'intelligence artificielle se présente aujourd'hui comme une solution complémentaire, pour constituer une barrière face à la recrudescence de la fausse monnaie dans l'économie.",
      quoteAuthor: "André Dupont NGOSSI",
      quoteRole: "CEO ORIZONNE — Expert en sécurité fiduciaire et financière",

      directionsEyebrow: "Organisation",
      directionsTitle: "Cinq directions, une même exigence",
      directionsText:
        "Notre entreprise est structurée en 5 grandes directions, ayant chacune à leur tête un responsable ou un directeur.",
      directions: [
        { icon: "building", name: "Direction Générale" },
        { icon: "megaphone", name: "Direction de la Communication, des Partenariats et des Relations publiques" },
        { icon: "cpu", name: "Direction Technique" },
        { icon: "graduation", name: "Direction de l'Ingénierie et de la Formation" },
        { icon: "wallet", name: "Direction des Affaires administratives, financières et de l'Audit" },
      ],

      teamEyebrow: "Notre équipe",
      teamTitle: "Les femmes et les hommes d'ORIZONNE",
      team: [
        {
          id: "ngossi",
          name: "NGOSSI André Dupont",
          role: "CEO — Chief Executive Officer",
          bio: "Diplômé de l'Institut des Relations Internationales du Cameroun (IRIC), filière Banque, Monnaie, Finances Internationales, et de l'Université de Lausanne en Sciences forensiques, option technique de lutte contre la fraude monétaire et documentaire. Il a commencé sa carrière par des séminaires de formation grand public sur les techniques de reconnaissance rapide des billets de banque. Il a ensuite tissé des partenariats stratégiques avec des structures de renommée internationale telles que la CAMPOST ; son expertise d'ingénieur fiduciaire et financier, à la tête de la Direction administrative et financière du cabinet BRAINSYSTEM PROJECT, lui a permis de mettre en place la première plateforme de recyclage digitalisée des signes monétaires défectueux et démonétisés BEAC. Sa passion pour l'intelligence artificielle l'a poussé à fonder ORIZONNE, première FINTECH de la zone CEMAC. Enseignant-chercheur dans plusieurs institutions universitaires professionnelles, il est auteur de nombreux ouvrages.",
        },
        {
          id: "simeu",
          name: "Brice Armel SIMEU",
          role: "Directeur de la Stratégie et des Partenariats",
          bio: "Titulaire d'un master en relations internationales, spécialité Banque, Monnaie, Finances Internationales de l'IRIC, où sa recherche portait sur les politiques monétaires non conventionnelles dans les mécanismes de stabilisation des crises financières. Il s'est spécialisé sur la question du Quantitative Easing et de la maîtrise du risque systémique en temps de crise. Chercheur en économie politique internationale à l'Institut d'Études Internationales de Montréal, il prépare un doctorat en science politique à l'Université du Québec à Montréal. Ses intérêts de recherche portent sur les accords commerciaux, la géopolitique du commerce international, les firmes multinationales du numérique, la gouvernance d'Internet, la globalisation des données et la diplomatie commerciale.",
        },
        {
          id: "nchare",
          name: "NCHARE Nasser Ibrahim",
          role: "CTO — Directeur Technique",
          bio: "Titulaire d'une maîtrise en économie monétaire obtenue à l'Université de Yaoundé II SOA, il est passionné par les questions de sécurité des moyens de paiement. Ayant exercé comme cambiste pendant plusieurs années, il s'est spécialisé dans les opérations de sécurité monétaire. Consultant formateur en sciences forensiques, assermenté à la chambre des experts internationaux, il est co-auteur du « Guide Pratique de la Sécurité Monétaire ».",
        },
        {
          id: "locko",
          name: "Christinne Winnie Vanina LOCKO",
          role: "Directrice Administrative et Financière",
          bio: "Titulaire d'une Licence en Comptabilité et Finance et d'un Brevet de Technicien Supérieur en Banque et Finance, elle cumule une riche carrière dans la comptabilité des entreprises. Passionnée par les chiffres et forte d'une culture très poussée du management des TPE et PME, elle a passé une grande partie de sa carrière au sein de structures privées, comme responsable des opérations financières et auditrice de premier niveau à la microfinance COFIDEM. Sa rigueur et son esprit entreprenant l'ont conduite à rejoindre ORIZONNE, où elle occupe le poste de Responsable des opérations administratives et financières.",
        },
        {
          id: "ngono",
          name: "Christian NGONO",
          role: "Directeur de l'Ingénierie et de la Formation",
          bio: "Il pilote la conception des parcours de formation d'ORIZONNE et l'ingénierie pédagogique des programmes destinés aux établissements de crédit, aux établissements de microfinance et aux forces de sécurité.",
        },
      ],
      readBio: "Lire la biographie",
    },

    services: {
      hero: {
        eyebrow: "Nos produits & services",
        title: "L'ingénierie, l'IA et la formation au service de votre sécurité financière",
        text: "Notre entreprise est spécialisée dans l'ingénierie fiduciaire, l'ingénierie économique, l'intelligence artificielle, les technologies financières, l'intermédiation et la notation financière, ainsi que l'éducation économique et financière.",
      },

      domainsTitle: "Nos domaines d'expertise",
      domains: [
        "Ingénierie fiduciaire",
        "Ingénierie économique",
        "Intelligence artificielle",
        "Technologies financières",
        "Intermédiation financière",
        "Notation financière",
        "Éducation économique et financière",
      ],

      productsEyebrow: "Nos produits",
      productsTitle: "Ouvrages, logiciels et applications",
      productsText:
        "Nous offrons plusieurs produits en rapport avec l'éducation économique et financière, ainsi qu'avec l'intelligence artificielle.",

      bookTitle: "Guide Pratique de la Sécurité Monétaire",
      bookSub: "3ᵉ édition 2026 — également disponible en anglais",
      bookText:
        "Cet ouvrage fournit aux professionnels de la monnaie fiduciaire, aux médecins, aux pharmaciens, aux forces de sécurité, aux étudiants et aux commerçants l'outil indispensable à une solide formation technique et pratique en sécurité monétaire.",
      bookAuthors: "NGOSSI André Dupont · NCHARE Ibrahim Nasser",

      softwareTitle: "Logiciels de gestion",
      software: [
        { icon: "landmark", name: "Logiciels de gestion bancaire", text: "Pilotage des opérations et des risques pour les établissements de crédit et de microfinance." },
        { icon: "calculator", name: "Logiciels de comptabilité", text: "Tenue comptable, états financiers et reporting conformes aux exigences du secteur." },
        { icon: "trending", name: "Logiciels de trading", text: "Outils d'aide à la décision sur les marchés de devises et de commodities." },
      ],

      appsTitle: "Applications mobiles",
      apps: [
        {
          icon: "scan",
          name: "ORIZONNE TEG",
          text: "Solution d'intelligence artificielle qui détecte rapidement les fraudes sur les billets de banque.",
          badge: "IA",
        },
        {
          icon: "code",
          name: "Le Code",
          text: "L'application de référence pour maîtriser les textes et sanctions liés à la contrefaçon monétaire.",
          badge: "Juridique",
        },
        {
          icon: "school",
          name: "Djanguy-School",
          text: "La plateforme d'éducation économique et financière pour les élèves, étudiants et ménages.",
          badge: "Éducation",
        },
      ],
      appsNote:
        "Une solution vous intéresse ? Contactez-nous pour une démonstration ou un devis.",

      servicesEyebrow: "Nos services",
      servicesTitle: "Formations et accompagnement sur mesure",
      servicesText:
        "Nous offrons des formations à nos différents clients : établissements de crédit, établissements de microfinance, services de la police et de la gendarmerie, entreprises et particuliers.",

      offers: [
        {
          icon: "shield",
          name: "Ingénierie fiduciaire",
          text: "La conception des billets de banque et des pièces de monnaie nécessite aujourd'hui le recours à des technologies de pointe, dans l'optique de donner aux billets la possibilité de se défendre eux-mêmes de la contrefaçon monétaire. L'ingénierie fiduciaire propose, analyse et implémente, en collaboration avec les Banques Centrales, les meilleurs substrats de conception de la monnaie fiduciaire.",
        },
        {
          icon: "cog",
          name: "Ingénierie économique",
          text: "Dans un environnement en pleine concurrence, les entreprises doivent miser sur des produits et services innovants, répondant non seulement aux besoins des clients, mais également aux perspectives de l'entreprise.",
        },
        {
          icon: "briefcase",
          name: "Conseils, études et prestations intellectuelles",
          text: "Conseil juridique et fiscal, aide à la rédaction des contrats de travail et de partenariat, conception de business plans et de business models.",
        },
        {
          icon: "star",
          name: "Notation financière",
          text: "La notation financière des TPE et PME dans notre environnement est un réel défi, pour améliorer leur accès au financement bancaire.",
        },
        {
          icon: "lock",
          name: "Sécurité financière",
          text: "Apporter des solutions aux entreprises et aux particuliers utilisateurs des moyens de paiement, et renforcer les compétences des opérationnels en charge de la gestion des transactions financières.",
        },
        {
          icon: "banknote",
          name: "Éducation fiduciaire",
          text: "L'éducation fiduciaire est le principal canal d'amélioration du niveau de culture fiduciaire des populations. La mise en circulation de la nouvelle gamme de billets de banque oblige à éduquer fiduciairement les populations.",
        },
        {
          icon: "piggy",
          name: "Éducation financière et budgétaire",
          text: "Les questions financières et budgétaires sont présentes dans la vie quotidienne des populations, sans qu'elles puissent toujours en comprendre le sens. L'éducation financière et budgétaire vise à leur faire acquérir des connaissances et des compétences afin de mieux appréhender la vie économique et de faire des choix en citoyens éclairés.",
        },
        {
          icon: "book",
          name: "Éducation économique",
          text: "L'éducation économique est différente de la formation économique, qui a pour but de former des spécialistes. Une meilleure compréhension du processus économique et de certaines de ses lois par l'ensemble des citoyens est susceptible de générer d'importantes économies externes pour la société.",
        },
      ],

      catalogTitle: "Catalogue de formation",
      catalogText:
        "Retrouvez l'ensemble de nos parcours de formation, leurs objectifs pédagogiques et leurs modalités.",
    },

    news: {
      hero: {
        eyebrow: "Actualités",
        title: "L'intelligence économique et financière, en continu",
        text: "Marchés financiers, actualité économique internationale et vie des entreprises — décryptés par nos experts.",
      },
      filterAll: "Tout",
      categories: [
        { id: "markets", label: "Marchés financiers" },
        { id: "intl", label: "Économie internationale" },
        { id: "corp", label: "Entreprises" },
      ],
      subtopics: {
        markets: [
          "Afrique Centrale",
          "Afrique de l'Ouest",
          "Afrique du Nord",
          "Afrique Australe",
          "Afrique de l'Est",
          "Europe",
          "Amérique",
          "Asie",
          "Marchés des devises",
          "Marchés des commodities",
        ],
        intl: [
          "IDE — Investissements directs étrangers",
          "Diplomatie économique et géoéconomie",
          "Intégration économique",
        ],
        corp: [
          "Banques",
          "Assurances",
          "Microfinances",
          "Fonds d'investissement",
          "Criminalité économique et financière",
        ],
      },
      emptyTitle: "Nos premiers articles arrivent",
      emptyText:
        "La rédaction d'ORIZONNE prépare ses analyses. Abonnez-vous pour recevoir nos publications dès leur parution.",
      subscribe: "S'abonner à la veille",
      subscribePlaceholder: "Votre adresse e-mail",
      subscribeOk: "Merci ! Votre inscription est enregistrée.",
      readTime: "min de lecture",
    },

    gallery: {
      hero: {
        eyebrow: "Galerie",
        title: "ORIZONNE en images",
        text: "Formations, séminaires, publications et vie de l'entreprise.",
      },
      tabPhotos: "Photos",
      tabVideos: "Vidéos",
      videosEmpty: "Nos vidéos seront publiées prochainement.",
      items: [
        { id: "formation", caption: "Séminaire d'analyse financière — Yaoundé" },
        { id: "etudiants", caption: "Programme d'éducation financière des étudiants" },
        { id: "book3d", caption: "Guide Pratique de la Sécurité Monétaire — 3ᵉ édition" },
        { id: "bookEn", caption: "Practical Guide of Monetary Security — édition anglaise" },
        { id: "bookBack", caption: "Sommaire et auteurs de l'ouvrage" },
        { id: "ngossi", caption: "André Dupont NGOSSI, CEO d'ORIZONNE" },
        { id: "nchare", caption: "NCHARE Nasser Ibrahim, expert en sécurité monétaire" },
        { id: "simeu", caption: "Brice Armel SIMEU, Directeur de la Stratégie" },
      ],
    },

    contact: {
      hero: {
        eyebrow: "Nous contacter",
        title: "Parlons de votre projet",
        text: "Une question, un besoin de formation, une demande de démonstration ? Nos équipes vous répondent sous 48 heures.",
      },
      infoTitle: "Coordonnées",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      addressLabel: "Adresse",
      hoursLabel: "Horaires",
      hours: "Lundi – Vendredi, 8h00 – 17h00",
      followLabel: "Nous suivre",

      formTitle: "Vos questions",
      formText: "Remplissez le formulaire, nous revenons vers vous rapidement.",
      fields: {
        name: "Nom et prénom",
        email: "Adresse e-mail",
        phone: "Téléphone",
        subject: "Objet",
        message: "Votre message",
      },
      subjects: [
        "Demande d'information",
        "Formation",
        "Démonstration ORIZONNE TEG",
        "Partenariat",
        "Candidature / CV",
        "Autre",
      ],
      send: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Merci, votre message a bien été envoyé. Nous vous répondrons sous 48 heures.",
      required: "Ce champ est obligatoire",
      invalidEmail: "Adresse e-mail invalide",

      cvTitle: "Envoyez votre CV",
      cvText:
        "Vous souhaitez rejoindre ORIZONNE ? Adressez votre candidature et votre CV à notre service recrutement.",
      cvCta: "Postuler par e-mail",

      mapTitle: "Nous trouver",
    },

    footer: {
      tagline:
        "Startup d'ingénierie économique et financière. Première FINTECH spécialisée en intelligence artificielle adossée à la sécurité monétaire, documentaire et identitaire en zone CEMAC.",
      navTitle: "Navigation",
      servicesTitle: "Nos expertises",
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      legal: "Mentions légales",
    },
  },

  /* ====================================================================== */
  /*  ENGLISH                                                               */
  /* ====================================================================== */
  en: {
    nav: {
      home: "Home",
      about: "About us",
      services: "Products & Services",
      news: "News",
      gallery: "Gallery",
      contact: "Contact",
    },
    common: {
      readMore: "Learn more",
      discover: "Discover",
      contactUs: "Contact us",
      allServices: "All our services",
      download: "Download the catalogue",
      backTop: "Back to top",
    },

    home: {
      slides: [
        {
          tag: "Artificial intelligence",
          title: "AI serving",
          highlight: "monetary security",
          text: "The first FINTECH in the CEMAC zone specialising in artificial intelligence applied to monetary, document and identity security.",
          quote:
            "“Against ever more ingenious counterfeiters, a banknote must be able to defend itself.”",
          cta: "Discover ORIZONNE TEG",
          to: "/produits-services",
        },
        {
          tag: "Economic & financial education",
          title: "Training people to",
          highlight: "decide as informed citizens",
          text: "Our fiduciary, financial and budgetary education programmes strengthen the skills of households, companies and security forces.",
          quote:
            "“Fiduciary education is the main channel for improving people's monetary literacy.”",
          cta: "Our training courses",
          to: "/produits-services",
        },
        {
          tag: "Economic & financial intelligence",
          title: "The expertise that secures",
          highlight: "your financial resources",
          text: "We support public administrations, banks, insurers, microfinance institutions, universities and SMEs.",
          quote: "“Our story is one of expertise and innovation.”",
          cta: "About us",
          to: "/nous-connaitre",
        },
      ],

      pillars: [
        {
          icon: "shield",
          title: "Monetary security",
          text: "Detecting counterfeits on banknotes and metal coins through artificial intelligence.",
        },
        {
          icon: "cpu",
          title: "Artificial intelligence",
          text: "ORIZONNE TEG and our software solutions to authenticate monetary signs in seconds.",
        },
        {
          icon: "graduation",
          title: "Financial education",
          text: "Fiduciary, financial and budgetary education campaigns for households and companies.",
        },
      ],

      introEyebrow: "Who we are",
      introTitle: "The first economic and financial engineering FINTECH in the CEMAC zone",
      introText:
        "ORIZONNE is an economic and financial engineering startup specialising in artificial intelligence applied to monetary, document and identity security. We address the difficulties facing the sub-region's economies: the shortage of metal coins and the resurgence of counterfeiting on the BEAC-2020 range.",
      introBullets: [
        "AI solutions for fiduciary fraud detection",
        "Support for Central Banks and credit institutions",
        "Economic and financial education campaigns for households",
      ],

      statsTitle: "ORIZONNE in numbers",
      stats: [
        { value: 70, suffix: "%", label: "of banking and financial sector companies work with us" },
        { value: 5, suffix: "", label: "operational divisions serving our clients" },
        { value: 7, suffix: "", label: "areas of expertise, from fiduciary engineering to credit rating" },
        { value: 3, suffix: "rd", label: "edition of the Practical Guide of Monetary Security" },
      ],

      servicesEyebrow: "Our services",
      servicesTitle: "Complete expertise, from engineering to training",
      servicesText:
        "We train and support credit institutions, microfinance institutions, police and gendarmerie services, as well as companies and individuals.",

      booksEyebrow: "Our publications",
      booksTitle: "Practical Guide of Monetary Security",
      booksText:
        "Operating rules and protection techniques. Prefaced by His Excellency Édouard AKAME MFOUMOU, Minister of State, Minister of Economy and Finance of Cameroon (1996-2001), elected African Banker of the Year in 1988.",
      booksBullets: [
        "The history of fiduciary money in Central Africa",
        "Authentication techniques for fiduciary money",
        "Artificial intelligence in the fight against monetary fraud",
        "Techniques for fighting scriptural money fraud",
        "Sanctions for counterfeiting and falsification",
      ],

      ctaTitle: "A project, a training need, an expertise request?",
      ctaText: "Our teams reply within 48 hours.",
    },

    about: {
      hero: {
        eyebrow: "About us",
        title: "A story built on expertise and innovation",
        text: "ORIZONNE SARL — Economic and financial engineering startup.",
      },
      whoTitle: "Who are we?",
      whoParagraphs: [
        "The challenges of modernising payment instruments remain one of the key concerns of Central Banks, the primary guarantors of monetary and financial stability. In an era of fiduciary innovation and the dematerialisation of payment instruments, the pre-eminence of fiduciary money in the economy remains topical — especially given the requirements imposed on printing works and minting workshops by central banks, which are increasingly demanding in terms of production quality of monetary signs.",
        "The drive to keep pace with fiduciary engineering — by circulating more attractive and more secure banknotes and coins, giving them the ability to defend themselves against ever more ingenious counterfeiters — has led to the emergence of new players specialising in the fight against counterfeit money, supporting Central Banks in their policy of improving the fiduciary literacy of economic agents.",
        "It is in this context that artificial intelligence now stands as a complementary solution, forming a barrier against the resurgence of counterfeit money in the economy. ORIZONNE, the first FINTECH specialising in artificial intelligence applied to monetary, document and identity security in the CEMAC zone, seized this opportunity to bring its know-how to bear in reducing these harmful phenomena, which weaken the social and economic well-being of households. This is one of the reasons why operational solutions designed and developed by ORIZONNE have come to life, such as ORIZONNE TEG, an artificial intelligence solution that quickly detects fraud on banknotes.",
        "ORIZONNE is also an expert in economic and financial intelligence. We support every profession exposed to profitability and financial resource capture issues: public administration, banking and insurance, schools, universities, online services, industry, human resources and individuals. Our expertise in economic, financial and entrepreneurial education allows us to work daily with State services, but also with over 70% of companies in the banking and financial sector (banks, insurers, microfinance institutions) and a large number of SMEs.",
      ],

      quote:
        "Artificial intelligence now stands as a complementary solution, forming a barrier against the resurgence of counterfeit money in the economy.",
      quoteAuthor: "André Dupont NGOSSI",
      quoteRole: "CEO ORIZONNE — Expert in fiduciary and financial security",

      directionsEyebrow: "Organisation",
      directionsTitle: "Five divisions, one standard",
      directionsText:
        "Our company is structured into 5 major divisions, each headed by a manager or director.",
      directions: [
        { icon: "building", name: "General Management" },
        { icon: "megaphone", name: "Communication, Partnerships and Public Relations" },
        { icon: "cpu", name: "Technical Division" },
        { icon: "graduation", name: "Engineering and Training Division" },
        { icon: "wallet", name: "Administrative, Financial Affairs and Audit Division" },
      ],

      teamEyebrow: "Our team",
      teamTitle: "The people behind ORIZONNE",
      team: [
        {
          id: "ngossi",
          name: "NGOSSI André Dupont",
          role: "CEO — Chief Executive Officer",
          bio: "A graduate of the Institute of International Relations of Cameroon (IRIC) in Banking, Money and International Finance, and of the University of Lausanne in Forensic Science, specialising in monetary and document fraud prevention. He began his career running public seminars on rapid banknote recognition techniques. He then built strategic partnerships with internationally renowned institutions such as CAMPOST; his expertise as a fiduciary and financial engineer, heading the Administrative and Financial Division of BRAINSYSTEM PROJECT, enabled him to set up the first digitalised recycling platform for defective and demonetised BEAC monetary signs. His passion for artificial intelligence led him to found ORIZONNE, the first FINTECH in the CEMAC zone. A lecturer and researcher in several professional universities, he is the author of numerous books.",
        },
        {
          id: "simeu",
          name: "Brice Armel SIMEU",
          role: "Director of Strategy and Partnerships",
          bio: "He holds a master's degree in international relations, specialising in Banking, Money and International Finance from IRIC, where his research focused on unconventional monetary policies in financial crisis stabilisation mechanisms. He specialised in Quantitative Easing and systemic risk management in times of crisis. A researcher in international political economy at the Montreal Institute of International Studies, he is preparing a doctorate in political science at the University of Quebec in Montreal. His research interests cover trade agreements, the geopolitics of international trade, digital multinationals, internet governance, data globalisation and commercial diplomacy.",
        },
        {
          id: "nchare",
          name: "NCHARE Nasser Ibrahim",
          role: "CTO — Technical Director",
          bio: "Holder of a master's degree in monetary economics from the University of Yaoundé II SOA, he is passionate about payment security. Having worked as a foreign exchange dealer for several years, he specialised in monetary security operations. A forensic science consultant and trainer, sworn in before the chamber of international experts, he is co-author of the “Practical Guide of Monetary Security”.",
        },
        {
          id: "locko",
          name: "Christinne Winnie Vanina LOCKO",
          role: "Administrative and Financial Director",
          bio: "Holder of a Bachelor's degree in Accounting and Finance and a Higher Technician's Certificate in Banking and Finance, she has built a rich career in corporate accounting. Passionate about figures and deeply versed in SME management, she spent much of her career in private organisations as head of financial operations and first-level auditor at the COFIDEM microfinance institution. Her rigour and entrepreneurial spirit led her to join ORIZONNE, where she heads administrative and financial operations.",
        },
        {
          id: "ngono",
          name: "Christian NGONO",
          role: "Director of Engineering and Training",
          bio: "He leads the design of ORIZONNE's training paths and the instructional engineering of programmes for credit institutions, microfinance institutions and security forces.",
        },
      ],
      readBio: "Read the biography",
    },

    services: {
      hero: {
        eyebrow: "Our products & services",
        title: "Engineering, AI and training serving your financial security",
        text: "Our company specialises in fiduciary engineering, economic engineering, artificial intelligence, financial technologies, financial intermediation and credit rating, as well as economic and financial education.",
      },

      domainsTitle: "Our areas of expertise",
      domains: [
        "Fiduciary engineering",
        "Economic engineering",
        "Artificial intelligence",
        "Financial technologies",
        "Financial intermediation",
        "Credit rating",
        "Economic and financial education",
      ],

      productsEyebrow: "Our products",
      productsTitle: "Books, software and applications",
      productsText:
        "We offer several products related to economic and financial education, as well as artificial intelligence.",

      bookTitle: "Practical Guide of Monetary Security",
      bookSub: "3rd edition 2026 — also available in French",
      bookText:
        "This book provides fiduciary money professionals, doctors, pharmacists, security forces, students and traders with the essential tool for solid technical and practical training in monetary security.",
      bookAuthors: "NGOSSI André Dupont · NCHARE Ibrahim Nasser",

      softwareTitle: "Management software",
      software: [
        { icon: "landmark", name: "Banking management software", text: "Operations and risk management for credit and microfinance institutions." },
        { icon: "calculator", name: "Accounting software", text: "Bookkeeping, financial statements and reporting aligned with sector requirements." },
        { icon: "trending", name: "Trading software", text: "Decision-support tools for currency and commodity markets." },
      ],

      appsTitle: "Mobile applications",
      apps: [
        {
          icon: "scan",
          name: "ORIZONNE TEG",
          text: "An artificial intelligence solution that quickly detects fraud on banknotes.",
          badge: "AI",
        },
        {
          icon: "code",
          name: "Le Code",
          text: "The reference app for mastering the laws and sanctions related to monetary counterfeiting.",
          badge: "Legal",
        },
        {
          icon: "school",
          name: "Djanguy-School",
          text: "The economic and financial education platform for pupils, students and households.",
          badge: "Education",
        },
      ],
      appsNote: "Interested in one of our solutions? Contact us for a demo or a quote.",

      servicesEyebrow: "Our services",
      servicesTitle: "Tailored training and support",
      servicesText:
        "We provide training to our clients: credit institutions, microfinance institutions, police and gendarmerie services, companies and individuals.",

      offers: [
        {
          icon: "shield",
          name: "Fiduciary engineering",
          text: "Designing banknotes and coins now requires cutting-edge technology, so that banknotes can defend themselves against counterfeiting. Fiduciary engineering proposes, analyses and implements — in collaboration with Central Banks — the best substrates for designing fiduciary money.",
        },
        {
          icon: "cog",
          name: "Economic engineering",
          text: "In a highly competitive environment, companies must rely on innovative products and services that meet not only customer needs but also the company's own outlook.",
        },
        {
          icon: "briefcase",
          name: "Consulting, studies and intellectual services",
          text: "Legal and tax advice, support in drafting employment and partnership contracts, business plan and business model design.",
        },
        {
          icon: "star",
          name: "Credit rating",
          text: "Rating SMEs in our environment is a real challenge, and a key lever to improve their access to bank financing.",
        },
        {
          icon: "lock",
          name: "Financial security",
          text: "Providing solutions to companies and individuals using payment methods, and strengthening the skills of staff in charge of managing financial transactions.",
        },
        {
          icon: "banknote",
          name: "Fiduciary education",
          text: "Fiduciary education is the main channel for improving people's fiduciary literacy. Putting a new banknote range into circulation makes educating the population essential.",
        },
        {
          icon: "piggy",
          name: "Financial and budgetary education",
          text: "Financial and budgetary matters are present in people's daily lives, without them always understanding their meaning. Financial and budgetary education aims to build the knowledge and skills needed to better grasp economic life and make choices as informed citizens.",
        },
        {
          icon: "book",
          name: "Economic education",
          text: "Economic education differs from economic training, which aims to produce specialists. A better understanding of the economic process, and of some of its laws, by all citizens is likely to generate significant external economies for society.",
        },
      ],

      catalogTitle: "Training catalogue",
      catalogText:
        "Browse all our training paths, their learning objectives and their formats.",
    },

    news: {
      hero: {
        eyebrow: "News",
        title: "Economic and financial intelligence, continuously",
        text: "Financial markets, international economic news and corporate life — decoded by our experts.",
      },
      filterAll: "All",
      categories: [
        { id: "markets", label: "Financial markets" },
        { id: "intl", label: "International economy" },
        { id: "corp", label: "Companies" },
      ],
      subtopics: {
        markets: [
          "Central Africa",
          "West Africa",
          "North Africa",
          "Southern Africa",
          "East Africa",
          "Europe",
          "America",
          "Asia",
          "Currency markets",
          "Commodity markets",
        ],
        intl: [
          "FDI — Foreign direct investment",
          "Economic diplomacy and geoeconomics",
          "Economic integration",
        ],
        corp: [
          "Banks",
          "Insurance",
          "Microfinance",
          "Investment funds",
          "Economic and financial crime",
        ],
      },
      emptyTitle: "Our first articles are coming",
      emptyText:
        "The ORIZONNE editorial team is preparing its analyses. Subscribe to receive our publications as soon as they are released.",
      subscribe: "Subscribe to our watch",
      subscribePlaceholder: "Your email address",
      subscribeOk: "Thank you! Your subscription has been registered.",
      readTime: "min read",
    },

    gallery: {
      hero: {
        eyebrow: "Gallery",
        title: "ORIZONNE in pictures",
        text: "Training, seminars, publications and company life.",
      },
      tabPhotos: "Photos",
      tabVideos: "Videos",
      videosEmpty: "Our videos will be published soon.",
      items: [
        { id: "formation", caption: "Financial analysis seminar — Yaoundé" },
        { id: "etudiants", caption: "Financial education programme for students" },
        { id: "book3d", caption: "Practical Guide of Monetary Security — 3rd edition" },
        { id: "bookEn", caption: "Practical Guide of Monetary Security — English edition" },
        { id: "bookBack", caption: "Contents and authors of the book" },
        { id: "ngossi", caption: "André Dupont NGOSSI, CEO of ORIZONNE" },
        { id: "nchare", caption: "NCHARE Nasser Ibrahim, monetary security expert" },
        { id: "simeu", caption: "Brice Armel SIMEU, Director of Strategy" },
      ],
    },

    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Let's talk about your project",
        text: "A question, a training need, a demo request? Our teams reply within 48 hours.",
      },
      infoTitle: "Contact details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
      hoursLabel: "Opening hours",
      hours: "Monday – Friday, 8:00 am – 5:00 pm",
      followLabel: "Follow us",

      formTitle: "Your questions",
      formText: "Fill in the form and we will get back to you shortly.",
      fields: {
        name: "Full name",
        email: "Email address",
        phone: "Phone",
        subject: "Subject",
        message: "Your message",
      },
      subjects: [
        "Information request",
        "Training",
        "ORIZONNE TEG demo",
        "Partnership",
        "Job application / CV",
        "Other",
      ],
      send: "Send message",
      sending: "Sending…",
      success: "Thank you, your message has been sent. We will reply within 48 hours.",
      required: "This field is required",
      invalidEmail: "Invalid email address",

      cvTitle: "Send us your CV",
      cvText:
        "Would you like to join ORIZONNE? Send your application and CV to our recruitment team.",
      cvCta: "Apply by email",

      mapTitle: "Find us",
    },

    footer: {
      tagline:
        "Economic and financial engineering startup. The first FINTECH specialising in artificial intelligence applied to monetary, document and identity security in the CEMAC zone.",
      navTitle: "Navigation",
      servicesTitle: "Our expertise",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      legal: "Legal notice",
    },
  },
};
