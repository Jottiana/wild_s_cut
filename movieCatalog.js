const listeFilms = [
  {
    name: "Le Voyage de Chihiro",
    date: "2001",
    type: "Animation",
    duration: "2h05",
    desc: "Le film raconte l'histoire de Chihiro, une fillette de dix ans qui, alors qu'elle se rend en famille vers sa nouvelle maison, entre dans le monde des esprits."
    img: "https://media.senscritique.com/media/000012539796/300/le_voyage_de_chihiro.jpg",
    watchlist: false,
  },
  {
    name: "Terminator 2",
    date: "1991",
    type: "Action",
    duration: "2h17",
    desc: "Au lendemain de l'holocauste nucléaire du 29 août 1997, les survivants humains entrent en résistance contre la dictature des « machines »"
    img: "https://media.senscritique.com/media/000009494983/0/terminator_2_le_jugement_dernier.png",
    watchlist: false,
  },
  {
    name: "La Liste de Schindler",
    date: "1993",
    type: "Drame",
    duration: "3h15",
    desc: "Le film décrit comment Oskar Schindler réussit pendant la Seconde Guerre mondiale à sauver environ 1 200 Juifs promis à la mort dans le camp de concentration de Płaszów"
    img: "https://media.senscritique.com/media/000012321891/0/la_liste_de_schindler.jpg",
    watchlist: false,
  },
  {
    name: "Le Roi lion",
    date: "1994",
    type: "Animation",
    duration: "1h29",
    desc: "En Afrique, dans une contrée nommée la Terre des Lions,le roi Mufasa et la reine Sarabi, présentent leur nouveau-né Simba aux animaux du royaume."
    img: "https://media.senscritique.com/media/000013958878/300/le_roi_lion.jpg",
    watchlist: false,
  },
  {
    name: "Hot Fuzz",
    date: "2007",
    type: "Action", "Comédie",
    duration: "2h01",
    desc: "Nicholas est un policier exceptionnel à Londres mais il est muté dans une petite ville anglaise. Il suspecte alors qu'une conspiration y prend place."
    img: "https://media.senscritique.com/media/000005821342/300/hot_fuzz.jpg",
    watchlist: false,
  },
  {
    name: "Django Unchained",
    date: "2012",
    type: "Drame",
    duration: "2h45",
    desc: "Un esclave noir est affranchi par un chasseur de primes. Le moment est venu de sauver son épouse d'un riche propriétaire de plantation du Mississipi."
    img: "https://media.senscritique.com/media/000013924487/300/django_unchained.jpg",
    watchlist: false,
  },
  {
    name: "Inglourious Basterds",
    date: "2009",
    type: "Drame",
    duration: "2h33",
    desc: "Dans la France occupée de 1940, Shosanna Dreyfus assiste à l'exécution de sa famille tombée entre les mains du colonel nazi Hans Landa. Shosanna s'échappe de justesse et s'enfuit à Paris où elle se construit une nouvelle identité en devenant exploitante d'une salle de cinéma. Quelque part ailleurs en Europe, le lieutenant Aldo Raine forme un groupe de soldats juifs américains pour mener des actions punitives particulièrement sanglantes contre les nazis. \"Les bâtards\", nom sous lequel leurs ennemis vont apprendre à les connaître, se joignent à l'actrice allemande et agent secret Bridget von Hammersmark pour tenter d'éliminer les hauts dignitaires du Troisième Reich. Leurs destins vont se jouer à l'entrée du cinéma où Shosanna est décidée à mettre à exécution une vengeance très personnelle..."
    img: "https://media.senscritique.com/media/000019716225/300/inglourious_basterds.jpg",
    watchlist: false,
  },
  {
    name: "Virgin Suicides",
    date: "1999",
    type: "Drame",
    duration: "1h37",
    desc: "Au cours des années 70 dans un quartier bourgeois, Cecilia Lisbon, benjamine de 5 jeunes filles belles et blondes, se suicide soudainement."
    img: "https://media.senscritique.com/media/000004951096/300/virgin_suicides.jpg",
    watchlist: false,
  },
  {
    name: "Titane",
    date: "2021",
    type: "Drame", "Horreur",
    duration: "1h48",
    desc: "Après une série de crimes inexpliqués, un père retrouve son fils disparu depuis 10 ans. Titane : Métal hautement résistant à la chaleur et à la corrosion, donnant des alliages très durs."
    img: "https://media.senscritique.com/media/000022120837/300/titane.png",
    watchlist: false,
  },
  {
    name: "Barbie",
    date: "2023",
    type: "Comédie",
    duration: "1h54",
    desc: "À Barbie Land, vous êtes un être parfait dans un monde parfait. Sauf si vous êtes en crise existentielle, ou si vous êtes Ken..."
    img: "https://media.senscritique.com/media/000021469258/300/barbie.png",
    watchlist: false,
  },
  {
    name: "Matrix",
    date: "1999",
    type: "Action", "Science_fiction",
    duration: "2h06",
    desc: "Neo, un des pirates les plus recherchés du cyber-espace, reçoit de mystérieux messages cryptés d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ?"
    img: "https://media.senscritique.com/media/000021915685/300/matrix.png",
    watchlist: false,
  },
 {
    name: "In the Mood for Love",
    date: "2000",
    type: "Drame",
    duration: "1h38",
    desc: "À Hong-Kong, en 1962, deux couples emménagent le même jour dans une petite pension. Monsieur Chow et sa voisine de palier Madame Chan découvrent bientôt que leurs conjoints respectifs entretiennent une liaison. Choqués par cette découverte, les époux trompés se rapprochent l'un de l'autre et essayent de comprendre..."
    img: "https://media.senscritique.com/media/000020197781/300/in_the_mood_for_love.jpg",
    watchlist: false,
  },
  {
    name: "Avengers",
    date: "2012",
    type: "Action", "Science-fiction",
    duration: "2h23",
    desc: "Lorsque la sécurité de la planète est menacée par un ennemi nouveau, Nick Fury réunit une équipe pour empêcher le monde de basculer dans le chaos."
    img: "https://media.senscritique.com/media/000005676799/300/avengers.jpg",
    watchlist: false,
  },
 {
    name: "La Môme",
    date: "2007",
    type: "Drame",
    duration: "2h20",
    desc: "De son enfance à la gloire, de ses victoires à ses blessures, de Belleville à New York, découvrez l'âme d'une artiste et le coeur d'une femme."
    img: "https://media.senscritique.com/media/000004922650/300/la_mome.jpg",
    watchlist: false,
  },
  {
    name: "Hitch",
    date: "2005",
    type: "Comédie", "Romance",
    duration: "1h58",
    desc: "Alors qu'il aide un client, un \"expert en séduction\" découvre que ses propres astuces ne fonctionnent pas sur la belle journaliste qu'il rencontre."
    img: "https://media.senscritique.com/media/000000035836/300/hitch_expert_en_seduction.jpg",
    watchlist: false,
  },
 {
    name: "Le Prestige",
    date: "2006",
    type: "Drame", "Fantastique",
    duration: "2h10",
    desc: "Londres, au tournant du XXe siècle. Robert Angier et Alfred Borden sont deux prestidigitateurs surdoués travaillant pour Milton, un des grands maîtres de la magie. Entre eux, la compétition est vive tout en restant amicale. Mais lorsque au cours d'un numéro l'épouse d'Angier meurt accidentellement, ce dernier accuse Borden d'être responsable du drame. Dès lors, leurs chemins se séparent, chacun aspirant plus que jamais être le meilleur."
    img: "https://media.senscritique.com/media/000004699879/300/le_prestige.jpg",
    watchlist: false,
  },
  {
    name: "Interstellar",
    date: "2014",
    type: "Science-fiction",
    duration: "2h49",
    desc: "Alors que la vie sur Terre touche à sa fin, un groupe d'explorateurs s'attelle à la mission la plus importante de l'histoire de l'humanité : franchir les limites de notre galaxie pour savoir si l'homme peut vivre sur une autre planète…"
    img: "https://media.senscritique.com/media/000018762465/300/interstellar.jpg",
    watchlist: false,
  },
 {
    name: "2001, l'Odyssée de l'espace",
    date: "1968",
    type: "Science-fiction",
    duration: "2h40",
    desc: "A l'aube de l'Humanité, dans le désert africain, une tribu de primates subit les assauts répétés d'une bande rivale, qui lui dispute un point d'eau. La découverte d'un monolithe noir inspire au chef des singes assiégés un geste inédit et décisif. En 2001, quatre millions d'années plus tard, un vaisseau spatial évolue en orbite lunaire au rythme langoureux du \"Beau Danube Bleu\". A son bord, le Dr. Heywood Floyd enquête secrètement sur la découverte d\'un monolithe noir qui émet d\'étranges signaux vers Jupiter."
    img: "https://media.senscritique.com/media/000019230851/300/2001_l_odyssee_de_l_espace.jpg",
    watchlist: false,
  },
  {
    name: "Big Fish",
    date: "2003",
    type: "Fantastique",
    duration: "2h05",
    desc: "Will Bloom a toujours aimé les histoires loufoques de son père. Plusieurs années après leur dernière dispute, Will va voir son père en fin de vie."
    img: "https://media.senscritique.com/media/000000151421/300/big_fish.jpg",
    watchlist: false,
  },
 {
    name: "Le Seigneur des Anneaux: La Communauté de l'anneau",
    date: "2001",
    type: "Fantasy",
    duration: "2h58",
    desc: "Le jeune hobbit Frodon Sacquet hérite d'un anneau. Il s'agit de l'Anneau Unique, instrument de pouvoir absolu qui permettrait à Sauron, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples... A moins que Frodon et ses fidèles compagnons ne parviennent à emporter l'Anneau jusqu'en Mordor, lieu où il a été forgé, et à le détruire pour toujours."
    img: "https://media.senscritique.com/media/000004017708/300/le_seigneur_des_anneaux_la_communaute_de_l_anneau.jpg",
    watchlist: false,
  },
  {
    name: "Moulin Rouge",
    date: "2001",
    type: "Drame", "Romance",
    duration: "2h07",
    desc: "À l'aube du XX° siècle à Paris, l'amour d'un jeune poète anglais sans fortune et d'un belle danseuse du célèbre Moulin Rouge est contrecarré par le riche duc qui la convoite et par la maladie qui la ronge."
    img: "https://media.senscritique.com/media/000016450709/300/moulin_rouge.jpg",
    watchlist: false,
  },
 {
    name: "Blade Runner",
    date: "1982",
    type: "Action", "Science-fiction",
    duration: "1h57",
    desc: "2019, Los Angeles. La Terre est surpeuplée et l'humanité est partie coloniser l'espace. Les nouveaux colons sont assistés de Replicants, androïdes que rien ne peut distinguer de l'être humain. Conçus comme de nouveaux esclaves, certains parmi les plus évolués s'affranchissent de leurs chaînes et s'enfuient. Rick Deckard, un ancien Blade Runner, catégorie spéciale de policiers chargés de \"retirer\" ces replicants, accepte une nouvelle mission consistant à retrouver quatre de ces individus qui viennent de regagner la Terre après avoir volé une navette spatiale. Ces replicants sont des Nexus 6, derniers nés de la technologie développée par la Tyrell Corporation."
    img: "https://media.senscritique.com/media/000019855182/300/blade_runner.jpg",
    watchlist: false,
  },
  {
    name: "Man on Fire",
    date: "2004",
    type: "Action", "Drame",
    duration: "2h26",
    desc: "John Creasy, ancien agent spécial de la CIA, alcoolique, se fait engager par une riche famille de Mexico pour servir de garde du corps à leur petite fille, Pita. Alors qu'un lien fort naît entre eux, l'enfant se fait enlever sous les yeux de son gardien. Un à un, Creasy décide de liquider ses ravisseurs..."
    img: "https://media.senscritique.com/media/000000135892/300/man_on_fire.jpg",
    watchlist: false,
  },
 {
    name: "Fight Club",
    date: "1999",
    type: "Drame",
    duration: "2h19",
    desc: "Insomniaque, désillusionné par sa vie personnelle et professionnelle, un jeune cadre expert en assurances, mène une vie monotone et sans saveur. Face à la vacuité de son existence, son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être. Lors d'un voyage d'affaires, il fait la connaissance de Tyler Durden, une sorte de gourou anarchiste et philosophe. Ensemble, ils fondent le Fight Club. Cercle très fermé, où ils organisent des combats clandestins et violents, destinés à évacuer l'ordre établi."
    img: "https://media.senscritique.com/media/000012359351/300/fight_club.jpg",
    watchlist: false,
  },
  {
    name: "Premier Contact",
    date: "2016",
    type: "Drame", "Science-fiction",
    duration: "1h56",
    desc: "Lorsque de mystérieux vaisseaux venus du fond de l'espace surgissent un peu partout sur Terre, une équipe d'experts est rassemblée sous la direction de la linguiste Louise Banks afin de tenter de comprendre leurs intentions. Face à l'énigme que constituent leur présence et leurs messages mystérieux, les réactions dans le monde sont extrêmes et l'humanité se retrouve bientôt au bord d'une guerre absolue. Louise Banks et son équipe n'ont que très peu de temps pour trouver des réponses. Pour les obtenir, la jeune femme va prendre un risque qui pourrait non seulement lui coûter la vie, mais détruire le genre humain… "
    img: "https://media.senscritique.com/media/000016785399/300/premier_contact.jpg",
    watchlist: false,
  },
 {
    name: "Il faut sauver le soldat Ryan",
    date: "1998",
    type: "Drame",
    duration: "2h49",
    desc: "Le 6 juin 1944, le capitaine Miller et ses hommes débarquent sur la plage d'Omaha Beach en Normandie. A peine sorti de l'enfer du débarquement, Miller se voit confier une mission très périlleuse : conduire son escouade derrière les lignes ennemies pour trouver et ramener sain et sauf un soldat du nom de Ryan, dont les trois frères ont tous été tués au combat."
    img: "https://media.senscritique.com/media/000008269224/300/il_faut_sauver_le_soldat_ryan.jpg",
    watchlist: false,
  },
  {
    name: "Titanic",
    date: "1997",
    type: "Drame", "Romance",
    duration: "3h14",
    desc: "Le 10 avril 1912, au port de Southampton en Angleterre, le Titanic, le plus grand paquebot du monde, réputé pour son insubmersibilité, appareille pour son premier voyage. Une traversée inaugurale de l'Atlantique Nord avec pour destination New York. À son bord, Jack Dawson, un artiste sans le sous, fait la rencontre de Rose, passagère de première classe issue d'une famille aristocrate de Philadelphie. Bien que venant d'univers radicalement différents, ils finissent pas tomber amoureux. Quatre jours plus tard, le navire heurte un iceberg."
    img: "https://media.senscritique.com/media/000021973040/300/titanic.png",
    watchlist: false,
  },
 {
    name: "Ali G",
    date: "2002",
    type: "Comédie",
    duration: "1h25",
    desc: "Ali G pourrait se contenter de sa paisible vie à Staines, une petite ville située au sud de l'Angleterre. Auprès de lui, il a sa grand-mère, sa copine Julie, son chien 2Pac et son herbe. Avec ses amis, il parvient même à supporter les provocations du gang rival au cours d'interminables courses de R5. Cependant, Ali G voit ses habitudes bousculées le jour où il apprend que le centre de loisirs de Staines, où il enseigne aux enfants \"l'attitude Ali G\", est en passe de fermer. Celui-ci proteste et accepte finalement de représenter les jeunes de Staines dans l'arène politique. En mettant à jour un scandale qui décrédibilise son adversaire, Ali G est bientôt élu député..."
    img: "https://media.senscritique.com/media/000006831550/300/ali_g.jpg",
    watchlist: false,
  },
  {
    name: "Full Metal Jacket",
    date: "1987",
    type: "Drame",
    duration: "1h56",
    desc: "La guerre du Vietnam vu à travers les yeux du Marine américain J.T. Davis, de son entraînement jusqu'aux affrontements contre le Vietcong."
    img: "https://media.senscritique.com/media/000010112905/300/full_metal_jacket.jpg",
    watchlist: false,
  },
 {
    name: "Colombiana",
    date: "2011",
    type: "Action", "Drame",
    duration: "1h48",
    desc: "1992. Colombie. Cataleya, 9 ans, assiste au meurtre de ses parents. Échappant de justesse au massacre, elle se réfugie aux États-Unis, chez son oncle Emilio, un gangster. 15 ans plus tard, elle travaille pour lui comme tueuse à gages. Elle signe ses meurtres d'une orchidée dessinée sur le torse de ses victimes : un message à l'intention des assassins de ses parents. Car Cataleya est bien décidée à aller jusqu'au bout de sa vengeance... quitte à perdre tous ceux qu'elle aime."
    img: "https://media.senscritique.com/media/000020135970/300/colombiana.jpg",
    watchlist: false,
  },
  {
    name: "Top Gun",
    date: "1986",
    type: "Action", "Drame", "Romance",
    duration: "1h50",
    desc: "Hanté par la disparition de son père, tombé au Vietnam, Pete Mitchell, surnommé Maverick, s'est forgé au fil des années une solide réputation de pilote hors pair. Ses qualités lui permettent de décrocher, avec son ami et copilote Nick Bradshaw, un stage à la Fighter Weapon School en Californie, aussi connu sous le nom de \"Top Gun\"."
    img: "https://media.senscritique.com/media/000011284667/300/top_gun.jpg",
    watchlist: false,
  },
 {
    name: "Rocky",
    date: "1977",
    type: "Drame",
    duration: "1h59",
    desc: "Dans les quartiers populaires de Philadelphie, Rocky Balboa, marginal au grand cœur, vit de petits boulots. Quand il ne travaille pas, il dispute, pour quelques dizaines de dollars, des combats de boxe sous l'appellation de \"l\'étalon italien\" dans les salles du quartier. Un jour, Apollo Creed, champion du monde de boxe catégorie poids lourd, recherche un nouvel adversaire pour remettre son titre en jeu. Son choix se porte sur Rocky. Par amour pour la belle Adrian, la sœur de son ami Paulie, et pour gagner le respect de son entraîneur Mickey, vétéran des rings, Rocky décide de relever le défi."
    img: "https://media.senscritique.com/media/000012395998/300/rocky.jpg",
    watchlist: false,
  },
  {
    name: "Promising Young Woman",
    date: "2021",
    type: "Drame",
    duration: "1h53",
    desc: "Tout le monde s'entendait pour dire que Cassie était une jeune femme pleine d'avenir…jusqu'à ce qu'un évènement inattendu ne vienne tout bouleverser. Mais rien dans la vie de Cassie n'est en fait conforme aux apparences : elle est aussi intelligente que rusée, séduisante que calculatrice et mène une double vie dès la nuit tombée. Au cours de cette aventure passionnante, une rencontre inattendue va donner l’opportunité à Cassie de racheter les erreurs de son passé."
    img: "https://media.senscritique.com/media/000020041116/300/promising_young_woman.jpg",
    watchlist: false,
  },
 {
    name: "Portrait de la jeune fille en feu",
    date: "2019",
    type: "Drame" "Romance",
    duration: "1h59",
    desc: "1770. Marianne est peintre et doit réaliser le portrait de mariage d'Héloïse, une jeune femme qui vient de quitter le couvent. Héloïse résiste à son destin d'épouse en refusant de poser. Marianne va devoir la peindre en secret. Introduite auprès d’elle en tant que dame de compagnie, elle la regarde."
    img: "https://media.senscritique.com/media/000020103185/300/portrait_de_la_jeune_fille_en_feu.jpg",
    watchlist: false,
  },
  {
    name: "Mustang",
    date: "2015",
    type: "Drame",
    duration: "1h34",
    desc: "En Turquie, dans une famille conservatrice, cinq sœurs contournent les limites qui leur sont imposées, animées par une envie commune de liberté."
    img: "https://media.senscritique.com/media/000009711167/300/mustang.jpg",
    watchlist: false,
  },
 {
    name: "Toy Story",
    date: "1995",
    type: "Animation" "Comédie",
    duration: "1h21",
    desc: "Quand Andy quitte sa chambre, tous ses jouets s'animent et mènent leur propre vie. Woody, un cow-boy en plastique, est le jouet préféré du garçonnet. Ce privilège lui vaut d'être reconnu comme le chef. L'annonce de l'anniversaire du jeune garçon, provoque la panique de tous les jouets, qui s'inquiètent à l'idée d'être supplantés par un nouveau venu. Mais cette crainte devient réalité lorsque Andy, reçoit en cadeau Buzz l'Eclair, un cosmonaute disposant de multiples gadgets."
    img: "https://media.senscritique.com/media/000016890492/300/toy_story.jpg",
    watchlist: false,
  },
  {
    name: "Fish Tank",
    date: "2009",
    type: "Drame",
    duration: "2h03",
    desc: "A 15 ans, Mia est une adolescente rebelle avec une unique passion : la danse hip hop. Un jour d'été, sa mère rentre à la maison avec un nouvel amant, Connor, qui s'installe chez elles. Est-ce enfin une promesse de bonheur ou bien un leurre ?"
    img: "https://media.senscritique.com/media/000000118360/300/fish_tank.png",
    watchlist: false,
  },
 {
    name: "American Honey",
    date: "2016",
    type: "Drame",
    duration: "2h43",
    desc: "Star, 17 ans, croise le chemin de Jake et sa bande. Sillonnant le Midwest à bord d'un van, ils vivent de vente en porte à porte. En rupture totale avec sa famille, elle s'embarque dans l'aventure. Ce road trip, ponctué de rencontres, fêtes et arnaques lui apporte ce qu'elle cherche depuis toujours: la liberté ! Jusqu'à ce qu'elle tombe amoureuse de Jake, aussi charismatique que dangereux…"
    img: "https://media.senscritique.com/media/000021571235/300/american_honey.jpg",
    watchlist: false,
  },
  {
    name: "Little Women",
    date: "2020",
    type: "Drame" "Romance",
    duration: "2h15",
    desc: "Une nouvelle adaptation du classique de Louisa May Alcott, narrant l'histoire de quatre filles de la classe moyenne durant la Guerre de Sécession."
    img: "https://media.senscritique.com/media/000019017144/300/les_filles_du_docteur_march.jpg",
    watchlist: false,
  },
 {
    name: "Grave",
    date: "2017",
    type: "Drame" "Horreur",
    duration: "1h39",
    desc: "Dans la famille de Justine tout le monde est vétérinaire et végétarien. À 16 ans, elle est une adolescente surdouée sur le point d'intégrer l'école véto où sa sœur ainée est également élève. Mais, à peine installés, le bizutage commence pour les premières années. On force Justine à manger de la viande crue. C'est la première fois de sa vie. Les conséquences ne se font pas attendre. Justine découvre sa vraie nature."
    img: "https://media.senscritique.com/media/000016709751/300/grave.jpg",
    watchlist: false,
  },
  {
    name: "Persepolis",
    date: "2007",
    type: "Animation", "Drame",
    duration: "1h36",
    desc: "Téhéran 1978 : Marjane, huit ans, songe à l'avenir. Choyée par des parents modernes et cultivés, liée à sa grand-mère, elle suit avec exaltation les évènements qui provoquent la chute du régime du Chah. Avec l'instauration de la République islamique débute le temps des commissaires de la révolution qui contrôlent tenues et comportements. Marjane qui doit porter le voile, se rêve désormais en révolutionnaire..."
    img: "https://media.senscritique.com/media/000005450861/300/persepolis.jpg",
    watchlist: false,
  },
 {
    name: "Nomadland",
    date: "2021",
    type: "Drame",
    duration: "1h47",
    desc: "Après l'effondrement économique de la cité ouvrière du Nevada où elle vivait, Fern décide de prendre la route à bord de son van aménagé et d'adopter une vie de nomade des temps modernes, en rupture avec les standards de la société actuelle. De vrais nomades incarnent les camarades et mentors de Fern et l'accompagnent dans sa découverte des vastes étendues de l'Ouest américain."
    img: "https://media.senscritique.com/media/000020036419/300/nomadland.jpg",
    watchlist: false,
  },
  {
    name: "Ne coupez pas !",
    date: "2019",
    type: "Comédie", "Horreur",
    duration: "1h36",
    desc: "Les choses vont mal pour le réalisateur et l'équipe de tournage d'un film de zombies à petit budget dans une installation japonaise abandonnée de la Seconde Guerre mondiale car ils sont attaqués par de vrais zombies."
    img: "https://media.senscritique.com/media/000018390289/300/ne_coupez_pas.jpg",
    watchlist: false,
  },
 {
    name: "Before Sunrise",
    date: "1995",
    type: "Romance",
    duration: "1h41",
    desc: "Jeune américain de passage en Europe, Jesse aborde Céline, étudiante française, dans un train entre Budapest et Vienne. A Vienne, il lui demande de descendre pour l'accompagner dans une visite de la ville pendant les 14 heures qui le séparent du décollage de son avion pour les Etats-Unis. Amusée, peut-être séduite, Céline accepte."
    img: "liehttps://media.senscritique.com/media/000006202644/300/before_sunrise.jpgndelimg",
    watchlist: false,
  },
  {
    name: "Kirikou et la Sorcière",
    date: "1998",
    type: "Animation",
    duration: "1h14",
    desc: "Le minuscule Kirikou naît dans un village d'Afrique sur lequel la sorcière Karaba, entourée de ses redoutables fétiches, a jeté un terrible sort : la source est asséchée et les hommes disparaissent mystérieusement. Kirikou, sitôt sorti du ventre de sa mère, veut délivrer le village de l’emprise maléfique de Karaba et découvrir le secret de sa méchanceté."
    img: "https://media.senscritique.com/media/000020741062/300/kirikou_et_la_sorciere.png",
    watchlist: false,
  },
 {
    name: "Parasite",
    date: "2019",
    type: "Comédie", "Drame",
    duration: "2h12",
    desc: "Toute la famille de Ki-taek est au chômage, et s'intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d'anglais chez les Park. C'est le début d'un engrenage incontrôlable, dont personne ne sortira véritablement indemne…"
    img: "https://media.senscritique.com/media/000021900167/300/parasite.png",
    watchlist: false,
  },
  {
    name: "Julie (en 12 chapitres)",
    date: "2021",
    type: "Romance",
    duration: "2h08",
    desc: "Oslo, de nos jours. Julie est une jeune femme pleine de ressource, mais à 30 ans, elle cherche encore sa voie. Bien qu'heureuse avec Aksel, un dessinateur à succès, aimant et protecteur, elle refuse l'enfant qu'il désire. Quand Julie le quitte pour Eivind, elle espère, une fois de plus, commencer une nouvelle vie."
    img: "https://media.senscritique.com/media/000021587316/300/julie_en_12_chapitres.png",
    watchlist: false,
  },
 {
    name: "Contes du hasard et autres fantaisies",
    date: "2021",
    type: "Drame", "Romance",
    duration: "2h01",
    desc: "Un triangle amoureux inattendu, une tentative de séduction qui tourne mal et une rencontre née d'un malentendu. La trajectoire de trois femmes qui vont devoir faire un choix…"
    img: "https://media.senscritique.com/media/000021116808/300/contes_du_hasard_et_autres_fantaisies.png",
    watchlist: false,
  },
  {
    name: "La Nuit du 12",
    date: "2022",
    type: "Drame",
    duration: "1h54",
    desc: "À la PJ chaque enquêteur tombe un jour ou l'autre sur un crime qu'il n'arrive pas à résoudre et qui le hante. Pour Yohan c'est le meurtre de Clara. Les interrogatoires se succèdent, les suspects ne manquent pas, et les doutes de Yohan ne cessent de grandir. Une seule chose est certaine, le crime a eu lieu la nuit du 12."
    img: "https://media.senscritique.com/media/000020803683/300/la_nuit_du_12.png",
    watchlist: false,
  },
 {
    name: "Asako I&II",
    date: "2018",
    type: "Drame", "Romance",
    duration: "1h55",
    desc: "Lorsque son premier grand amour disparaît du jour au lendemain, Asako est abasourdie et quitte Osaka pour changer de vie. Deux ans plus tard à Tokyo, elle tombe de nouveau amoureuse et s'apprête à se marier... à un homme qui ressemble trait pour trait à son premier amant évanoui."
    img: "https://media.senscritique.com/media/000018227230/300/asako_i_ii.jpg",
    watchlist: false,
  },
  {
    name: "El reino",
    date: "2019",
    type: "Thriller",
    duration: "2h11",
    desc: "Manuel López-Vidal est un homme politique influent dans sa région. Alors qu'il doit entrer à la direction nationale de son parti, il se retrouve impliqué dans une affaire de corruption qui menace un de ses amis les plus proches. Pris au piège, il plonge dans un engrenage infernal…"
    img: "https://media.senscritique.com/media/000018476739/300/el_reino.jpg",
    watchlist: false,
  },
 {
    name: "Kajillionaire",
    date: "2020",
    type: "Comédie", "Drame",
    duration: "1h44",
    desc: "Theresa et Robert ont passé 26 ans à former leur fille unique, Old Dolio, à escroquer, arnaquer et voler à chaque occasion. Au cours d'un cambriolage conçu à la hâte, ils proposent à une jolie inconnue ingénue, Mélanie, de les rejoindre, bouleversant complètement la routine d'Old Dolio."
    img: "https://media.senscritique.com/media/000019528718/300/kajillionaire.jpg",
    watchlist: false,
  },
  {
    name: "Aftersun",
    date: "2022",
    type: "Drame",
    duration: "1h42",
    desc: "Avec mélancolie, Sophie se remémore les vacances d'été passées avec son père vingt ans auparavant : les moments de joie partagée, leur complicité, parfois leurs désaccords. Elle repense aussi à ce qui planait au-dessus de ces instants si précieux : la sourde et invisible menace d'un bonheur finissant. Elle tente alors de chercher parmi ces souvenirs des réponses à la question qui l'obsède depuis tant d'années : qui était réellement cet homme qu'elle a le sentiment de ne pas connaître ?"
    img: "https://media.senscritique.com/media/000021132162/300/aftersun.png",
    watchlist: false,
  },
 {
    name: "Everything Everywhere All at Once",
    date: "2022",
    type: "Action", "Comédie", "Science-fiction",
    duration: "2h19",
    desc: "Evelyn Wang est à bout : elle ne comprend plus sa famille, son travail et croule sous les impôts… Soudain, elle se retrouve plongée dans le multivers, des mondes parallèles où elle explore toutes les vies qu'elle aurait pu mener. Face à des forces obscures, elle seule peut sauver le monde mais aussi préserver la chose la plus précieuse : sa famille."
    img: "https://media.senscritique.com/media/000021157918/300/everything_everywhere_all_at_once.png",
    watchlist: false,
  },
  {
    name: "Memories of Murder",
    date: "2003",
    type: "Drame", "Thriller",
    duration: "2h10",
    desc: "En 1986, dans la province de Gyunggi, le corps d'une jeune femme violée puis assassinée est retrouvé dans la campagne. Deux mois plus tard, d'autres crimes similaires ont lieu. Dans un pays qui n'a jamais connu de telles atrocités, la rumeur d'actes commis par un serial killer grandit de jour en jour. Une unité spéciale de la police est ainsi créée dans la région afin de trouver rapidement le coupable. Elle est placée sous les ordres d'un policier local et d'un détective spécialement envoyé de Séoul à sa demande. Devant l'absence de preuves concrètes, les deux hommes sombrent peu à peu dans le doute..."
    img: "https://media.senscritique.com/media/000014820526/300/memories_of_murder.jpg",
    watchlist: false,
  },
 {
    name: "Sans jamais nous connaître",
    date: "2023",
    type: "Drame", "Fantastique", "Romance",
    duration: "1h45",
    desc: "A Londres, Adam vit dans une tour où la plupart des appartements sont inoccupés. Une nuit, la monotonie de son quotidien est interrompue par sa rencontre avec un mystérieux voisin, Harry. Alors que les deux hommes se rapprochent, Adam est assailli par des souvenirs de son passé et retourne dans la ville de banlieue où il a grandi..."
    img: "https://media.senscritique.com/media/000021877012/300/sans_jamais_nous_connaitre.png",
    watchlist: false,
  },
  {
    name: "Suspiria",
    date: "1977",
    type: "Horreur", "Fantastique", "Thriller",
    duration: "1h38",
    desc: "Suzy débarque à Fribourg pour suivre des cours dans une académie de danse. L'atmosphère du lieu, étrange et inquiétante, surprend la jeune fille."
    img: "https://media.senscritique.com/media/000016132004/300/suspiria.jpg",
    watchlist: false,
  },
 {
    name: "American Psycho",
    date: "2000",
    type: "Drame", "Horreur",
    duration: "1h42",
    desc: "Patrick Bateman est un riche golden boy de Wall Street qui accumule les succès. Mais ceci n'est qu'un masque porté par un homme meurtrier sans conscience."
    img: "https://media.senscritique.com/media/000014111304/300/american_psycho.jpg",
    watchlist: false,
  },
];
   