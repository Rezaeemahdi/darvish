/* ============================================================
   RISTORANTE PERSIANO DARVISH — script.js  v2
   ============================================================ */
   'use strict';

   /* ============================================================
      TRANSLATIONS (IT / EN)
      ============================================================ */
   const translations = {
     it: {
       /* NAV */
       nav_home: 'Home', nav_menu: 'Menu', nav_about: 'Chi Siamo',
       nav_gallery: 'Galleria', nav_contact: 'Contatti', nav_reserve: 'Prenota',
   
       /* HERO */
       hero_sup: 'Ristorante Persiano · Padova',
       hero_h1a: 'Darvish',
       hero_tagline: 'Un viaggio nell\'anima della Persia',
       hero_btn1: 'Scopri il Menu',
       hero_btn2: 'Prenota un Tavolo',
       hero_rumi: '"Wherever you are, whatever you do, be in love." — Rumi',
   
       /* INTRO */
       intro_label: 'La Nostra Essenza',
       intro_h2: 'Dove la Persia incontra l\'Italia',
       intro_p1: 'Lungo la Riviera Albertino Mussato, dove l\'acqua del canale riflette le luci della notte, si apre questo piccolo gioiello persiano. In un ambiente discreto, elegante, profumato di spezie antiche, si può gustare una cucina leggera di alta qualità, elaborata e ricca di sapori d\'Oriente.',
       intro_p2: 'La parola دَرویش — Darvish — evoca il cercatore mistico, il viandante che percorre il mondo con il cuore aperto, senza attaccarsi a nulla di materiale. Come lui, la nostra cucina è un cammino: dalle spezie del bazar di Teheran alle rive del Brenta.',
       intro_p3: 'Ogni piatto che esce dalla nostra cucina è un atto d\'amore, un verso di poesia, una lettera inviata da una civiltà millenaria al cuore di chi siede a tavola.',
       intro_quote: '"Vieni, chiunque tu sia — viaggiatore, pellegrino, ospite dell\'amore. La nostra tavola non chiede chi sei, ma solo che tu sia presente."',
       intro_quote_src: '— Rumi, Masnavi',
       intro_badge1: 'Dal', intro_badge2: '2010', intro_badge3: 'Padova',
       intro_cta: 'Scopri la Nostra Storia',
   
       /* FEATURES */
       f1_t: 'Autenticità', f1_d: 'Ingredienti importati dall\'Iran: zafferano, barberry, acqua di rose',
       f2_t: 'Tradizione', f2_d: 'Ricette custodite da generazioni, cotte con tempo e pazienza',
       f3_t: 'Atmosfera', f3_d: 'Un angolo pittoresco di Padova, sul canale, con luci soffuse',
       f4_t: 'Ta\'arof', f4_d: 'La cultura persiana dell\'ospitalità: ogni cliente è un ospite sacro',
   
       /* DISHES */
       dishes_label: 'Dall\'antica Persia',
       dishes_h2: 'I Nostri Piatti Iconici',
       dishes_sub: 'Un assaggio dell\'anima persiana — profumato di zafferano, melograno e spezie millenarie',
       d1_name: 'Zereshk Polo\'', d1_cat: 'Carne Bianca',
       d1_desc: 'Riso basmati con barberry acidule, zafferano, pistacchi, mandorle e scorza d\'arancia. Pollo allo spiedo con salsa di pomodoro.',
       d2_name: 'Tacine Morgh', d2_cat: 'Su Prenotazione',
       d2_desc: 'Torta di riso con pollo, zafferano e yogurt — un capolavoro di architettura culinaria che richiede ore di preparazione.',
       d3_name: 'Fesenjun', d3_cat: 'Stagionale',
       d3_desc: 'Pollo in salsa profonda di noci tostate e succo di melograno: dolce, aspro, malinconico come una poesia persiana d\'autunno.',
       viewmenu: 'Sfoglia il Menu Completo',
   
       /* CULTURE */
       cul_label: 'Più che un Ristorante',
       cul_h2: 'Un\'immersione nella civiltà persiana',
       cul_p1: 'La Persia non è solo un luogo geografico — è uno stato dell\'anima. Una delle civiltà più antiche del mondo, dove arte, poesia, architettura e gastronomia si intrecciano in una danza millenaria.',
       cul_p2: 'Da Darvish troverete i colori dei mosaici di Isfahan, il profumo dello zafferano di Mashhad, l\'eco dei versi di Hafez. Ogni sera, tra luci soffuse e stoviglie d\'argento, Padova diventa un po\' Teheran.',
       cp1_t: 'Arte & Decorazione', cp1_d: 'Interni curati con arazzi, legno e lampadari in stile orientale',
       cp2_t: 'Cucina Leggera', cp2_d: 'Nessun fritto pesante: carne e pesce leggeri, spezie non invasive',
       cp3_t: 'Posizione Romantica', cp3_d: 'Sul canale, con tavoli all\'aperto d\'estate e vista sull\'acqua',
   
       /* REVIEWS */
       rev_label: 'Voci dei Nostri Ospiti',
       rev_h2: 'Quello che dicono di noi',
       rev_sub: 'Recensioni reali dai nostri ospiti su Google e TripAdvisor',
       rev1_text: 'Appena varcato la soglia la magia si manifesta! Ti senti subito trasportato in un altro mondo, un\'altra epoca. Ti senti un ospite sacro piuttosto che un cliente. Il cibo è un\'esperienza indimenticabile.',
       rev1_name: 'Giulia M.', rev1_src: 'Google',
       rev2_text: 'Un autentico piccolo angolo di Persia nel cuore di Padova. Personale super cordiale e cibo straordinario. Fariborz ci ha accolti in maniera fantastica, come a casa.',
       rev2_name: 'Lorenzo B.', rev2_src: 'Google',
       rev3_text: 'I piatti sono spettacolari, porzioni abbondanti e prezzi onesti. Personale di una cordialità unica. Ci torneremo ogni volta che potremo. Grazie!',
       rev3_name: 'Chiara F.', rev3_src: 'Google',
       rev4_text: 'L\'ambientazione è davvero magica. La cortesia del personale è la ciliegina sulla torta. Il cibo è particolare e molto gradevole. Consigliato!',
       rev4_name: 'Marco V.', rev4_src: 'TripAdvisor',
       rev5_text: 'Atmosfera suggestiva, luci soffuse, stoviglie d\'argento. Cucina iraniana autentica con uso di melograno, spezie non invasive. Il posto giusto per una serata speciale.',
       rev5_name: 'Anna R.', rev5_src: 'Google',
       rev6_text: 'Prima volta che provavo la cucina persiana e mi ha stupito in positivo. Staff attentissimo, ambiente tipico. I piatti unici sono perfetti da dividere in due.',
       rev6_name: 'Paolo G.', rev6_src: 'Google',
       rev_score_label: 'Valutazione Media · Google Maps',
   
       /* CTA */
       cta_h2: 'Pronti a varcare la soglia?',
       cta_p: 'Un tavolo sul canale vi aspetta. Prenotate e lasciatevi trasportare tra spezie, storie e silenzi profondi.',
       cta_btn1: 'Prenota Ora', cta_btn2: 'Vedi il Menu',
   
       /* MENU PAGE */
       menu_h1: 'Il Menu', menu_sub: 'Cucina persiana autentica — preparata con amore e rispetto per la tradizione',
       tab_ant: 'Antipasti', tab_bianc: 'Carne Bianca', tab_rossa: 'Carne Rossa',
       tab_bev: 'Bevande', tab_dol: 'Dolci & Tè', tab_pranzo: 'Pranzo',
       cat_ant_h: 'Antipasti', cat_ant_s: 'Piccole delizie per iniziare il viaggio alla maniera persiana',
       cat_bianc_h: 'Carne Bianca', cat_bianc_s: 'Kebab e piatti di pollo con riso basmati e zafferano',
       cat_rossa_h: 'Carne Rossa', cat_rossa_s: 'Agnello e vitello grigliati alla perfezione — il cuore della tradizione persiana',
       cat_bev_h: 'Bevande', cat_bev_s: 'Dal doogh tradizionale ai vini della casa Veneta',
       cat_dol_h: 'Dolci & Bevande Calde', cat_dol_s: 'Dolci profumati di acqua di rose, cardamomo e cannella',
       cat_pranzo_h: 'Pranzo Speciale', cat_pranzo_s: 'Una portata a scelta con riso allo zafferano',
       pranzo_price_badge: '€ 15',
       pranzo_lead: 'Una portata a scelta, accompagnata da un piatto di riso con zafferano. (Lunch: one dish of your choice served with saffron rice)',
       pranzo_avail: 'Disponibile Venerdì, Sabato e Domenica · 11:30 – 14:30',
   
       /* ABOUT PAGE */
       about_h1: 'Chi Siamo', about_sub: 'La storia di un nome, di un posto, di una passione',
       about_label: 'Il Nostro Nome',
       about_h2: 'Darvish: il cercatore del vento',
       ab_p1: 'In persiano, دَرویش — Darvish — indica il viandante mistico, il derviscio che gira su se stesso fino a toccare l\'infinito, colui che ha rinunciato ai beni materiali per cercare la verità dello spirito. I Dervishi percorrevano le carovane dell\'Asia Centrale portando con sé storie, musica, poesia e i profumi di terre lontane.',
       ab_p2: 'Questo ristorante porta quel nome come promessa: come il Darvish apre il cuore al mondo, noi apriamo le porte della Persia a Padova. La cornice del centro storico di Padova rende ancora più suggestivo e raffinato questo piccolo gioiello persiano, dove in un ambiente discreto ed elegante si può gustare una cucina leggera di alta qualità, elaborata e ricca di sapori orientali.',
       ab_p3: 'Ogni dettaglio è studiato: le luci soffuse, le stoviglie d\'argento, gli arazzi alle pareti, la musica che arriva da lontano. Tutto concorre a creare quell\'atmosfera unica che i nostri ospiti descrivono come "magica" — un portale verso un\'altra civiltà, un\'altra idea del tempo.',
       ab_quote: '"Non cercate fuori di voi quello che è sempre stato dentro."',
       ab_quote_attr: '— Rumi',
       val_label: 'La Nostra Filosofia',
       val_h2: 'Tre parole che ci guidano',
       val_sub: 'Dalla scelta degli ingredienti all\'accoglienza di ogni ospite',
       v1_h: 'Autenticità', v1_p: 'Importiamo direttamente dall\'Iran: zafferano di Mashhad, barberry del Khorasan, acqua di rose di Kashan. La cucina iraniana merita rispetto e ingredienti veri.',
       v2_h: 'Lentezza', v2_p: 'Il tahdig richiede pazienza. Il ghormeh sabzi vuole ore di cottura. Il fesenjan deve sobbollire finché le noci non si sciolgono nel melograno. La qualità non si può affrettare.',
       v3_h: 'Ospitalità', v3_p: 'Il ta\'arof persiano — la cultura dell\'accoglienza — è il filo che guida ogni nostro gesto. Da Darvish ogni ospite è sacro, ogni serata è una cerimonia.',
   
       /* GALLERY */
       gal_h1: 'Galleria', gal_sub: 'Immagini di un viaggio tra sapori, luci e cultura persiana',
       filt_all: 'Tutto', filt_food: 'Cucina', filt_int: 'Interni', filt_cult: 'Cultura',
   
       /* CONTACT */
       cont_h1: 'Contatti & Prenotazioni',
       cont_sub: 'Venite a trovarci sul canale — vi accoglieremo come ospiti di famiglia',
       cont_find: 'Come Trovarci',
       lbl_addr: 'Indirizzo', lbl_phone: 'Telefono', lbl_hours: 'Orari', lbl_social: 'Seguici',
       addr_val: 'Riviera Albertino Mussato 85\n35139, Padova (PD) — Italia',
       hours_lt: 'Lun – Gio', hours_lv: '18:30 – 23:30',
       hours_ft: 'Ven – Dom', hours_fv: '11:30–14:30 · 18:30–23:30',
       form_h: 'Inviaci un Messaggio',
       f_name: 'Nome e Cognome', f_email: 'Email', f_phone: 'Telefono (opzionale)',
       f_subj: 'Oggetto', f_opt0: 'Seleziona', f_opt1: 'Prenotazione Tavolo',
       f_opt2: 'Informazioni Menu', f_opt3: 'Evento Privato', f_opt4: 'Altro',
       f_msg: 'Il tuo messaggio', f_send: 'Invia Messaggio',
       f_err_name: 'Inserisci il tuo nome', f_err_email: 'Email non valida',
       f_err_msg: 'Scrivi un messaggio',
       f_success: 'Grazie! Abbiamo ricevuto il tuo messaggio. Ti risponderemo presto.',
   
       /* FOOTER */
       foot_tag: 'Un piccolo gioiello persiano nel cuore di Padova, lungo la Riviera Mussato.',
       foot_links: 'Link Utili', foot_hours: 'Orari', foot_cont: 'Contatti',
       foot_h1: 'Lun–Gio: 18:30–23:30', foot_h2: 'Ven: 11:30–14:30 / 18:30–23:30',
       foot_h3: 'Sab: 11:30–14:30 / 18:30–23:30', foot_h4: 'Dom: 11:30–14:30 / 18:30–23:30',
       foot_copy: '© 2025 Ristorante Persiano Darvish · Padova',
       foot_priv: 'Privacy', foot_terms: 'Termini',
     },
   
     en: {
       /* NAV */
       nav_home: 'Home', nav_menu: 'Menu', nav_about: 'About',
       nav_gallery: 'Gallery', nav_contact: 'Contact', nav_reserve: 'Book',
   
       /* HERO */
       hero_sup: 'Persian Restaurant · Padova',
       hero_h1a: 'Darvish',
       hero_tagline: 'A journey into the soul of Persia',
       hero_btn1: 'Explore the Menu',
       hero_btn2: 'Book a Table',
       hero_rumi: '"Wherever you are, whatever you do, be in love." — Rumi',
   
       /* INTRO */
       intro_label: 'Our Essence',
       intro_h2: 'Where Persia meets Italy',
       intro_p1: 'Along the Riviera Albertino Mussato, where the canal reflects the lights of the night, this small Persian gem opens its doors. In a discreet, elegant atmosphere perfumed with ancient spices, you can savour a light, high-quality cuisine rich in oriental flavours.',
       intro_p2: 'The word دَرویش — Darvish — evokes the mystical seeker, the wanderer who travels the world with an open heart, attached to nothing material. Like him, our cuisine is a journey: from the spices of Tehran\'s bazaar to the banks of the Brenta.',
       intro_p3: 'Every dish that leaves our kitchen is an act of love, a verse of poetry, a letter sent from an ancient civilisation to the heart of those seated at the table.',
       intro_quote: '"Come, whoever you are — traveller, pilgrim, guest of love. Our table asks not who you are, but only that you be present."',
       intro_quote_src: '— Rumi, Masnavi',
       intro_badge1: 'Since', intro_badge2: '2010', intro_badge3: 'Padova',
       intro_cta: 'Discover Our Story',
   
       /* FEATURES */
       f1_t: 'Authenticity', f1_d: 'Ingredients imported from Iran: saffron, barberries, rose water',
       f2_t: 'Tradition', f2_d: 'Recipes kept through generations, cooked with time and patience',
       f3_t: 'Atmosphere', f3_d: 'A picturesque corner of Padova, on the canal, with soft lights',
       f4_t: 'Ta\'arof', f4_d: 'The Persian culture of hospitality: every guest is a sacred guest',
   
       /* DISHES */
       dishes_label: 'From ancient Persia',
       dishes_h2: 'Our Iconic Dishes',
       dishes_sub: 'A taste of the Persian soul — scented with saffron, pomegranate and ancient spices',
       d1_name: 'Zereshk Polo\'', d1_cat: 'White Meat',
       d1_desc: 'Basmati rice with tart barberries, saffron, pistachios, almonds and orange zest. Grilled chicken with tomato sauce.',
       d2_name: 'Tacine Morgh', d2_cat: 'Book in Advance',
       d2_desc: 'Rice cake with chicken, saffron and yogurt — a masterpiece of culinary architecture requiring hours of preparation.',
       d3_name: 'Fesenjun', d3_cat: 'Seasonal',
       d3_desc: 'Chicken in a deep sauce of toasted walnuts and pomegranate juice: sweet, tart, melancholy as an autumnal Persian poem.',
       viewmenu: 'Browse the Full Menu',
   
       /* CULTURE */
       cul_label: 'More Than a Restaurant',
       cul_h2: 'An immersion in Persian civilisation',
       cul_p1: 'Persia is not just a geographical place — it is a state of the soul. One of the oldest civilisations in the world, where art, poetry, architecture and gastronomy intertwine in a millennia-old dance.',
       cul_p2: 'At Darvish you will find the colours of Isfahan\'s mosaics, the scent of Mashhad\'s saffron, the echo of the verses of Hafez. Every evening, between soft lights and silver cutlery, Padova becomes a little Tehran.',
       cp1_t: 'Art & Décor', cp1_d: 'Carefully curated interiors with tapestries, wood and oriental chandeliers',
       cp2_t: 'Light Cuisine', cp2_d: 'No heavy frying: light meats, non-invasive spices, fresh ingredients',
       cp3_t: 'Romantic Setting', cp3_d: 'On the canal, with outdoor tables in summer and views over the water',
   
       /* REVIEWS */
       rev_label: 'Voices of Our Guests',
       rev_h2: 'What they say about us',
       rev_sub: 'Real reviews from our guests on Google and TripAdvisor',
       rev1_text: 'As soon as you cross the threshold the magic manifests! You immediately feel transported to another world, another era. You feel a sacred guest rather than a customer. The food is an unforgettable experience.',
       rev1_name: 'Giulia M.', rev1_src: 'Google',
       rev2_text: 'An authentic little corner of Persia in the heart of Padova. Super friendly staff and extraordinary food. Fariborz welcomed us fantastically, like being at home.',
       rev2_name: 'Lorenzo B.', rev2_src: 'Google',
       rev3_text: 'The dishes are spectacular, generous portions and honest prices. Staff of unique warmth. We will return every time we can. Thank you!',
       rev3_name: 'Chiara F.', rev3_src: 'Google',
       rev4_text: 'The setting is truly magical. The courtesy of the staff is the icing on the cake. The food is unusual and very pleasant. Highly recommended!',
       rev4_name: 'Marco V.', rev4_src: 'TripAdvisor',
       rev5_text: 'Evocative atmosphere, soft lights, silver cutlery. Authentic Iranian cuisine with pomegranate, non-invasive spices. The right place for a special evening.',
       rev5_name: 'Anna R.', rev5_src: 'Google',
       rev6_text: 'First time trying Persian cuisine and it positively surprised me. Attentive staff, typical setting. The single-course dishes are perfect to share between two.',
       rev6_name: 'Paolo G.', rev6_src: 'Google',
       rev_score_label: 'Average Rating · Google Maps',
   
       /* CTA */
       cta_h2: 'Ready to cross the threshold?',
       cta_p: 'A table on the canal awaits you. Book and let yourself be carried among spices, stories and deep silences.',
       cta_btn1: 'Book Now', cta_btn2: 'See the Menu',
   
       /* MENU PAGE */
       menu_h1: 'The Menu', menu_sub: 'Authentic Persian cuisine — prepared with love and respect for tradition',
       tab_ant: 'Starters', tab_bianc: 'White Meat', tab_rossa: 'Red Meat',
       tab_bev: 'Drinks', tab_dol: 'Desserts & Tea', tab_pranzo: 'Lunch',
       cat_ant_h: 'Starters', cat_ant_s: 'Small delights to begin the journey the Persian way',
       cat_bianc_h: 'White Meat', cat_bianc_s: 'Chicken kebabs and dishes with basmati and saffron',
       cat_rossa_h: 'Red Meat', cat_rossa_s: 'Lamb and veal grilled to perfection — the heart of Persian tradition',
       cat_bev_h: 'Drinks', cat_bev_s: 'From traditional doogh to Veneto house wines',
       cat_dol_h: 'Desserts & Hot Drinks', cat_dol_s: 'Sweets scented with rose water, cardamom and cinnamon',
       cat_pranzo_h: 'Lunch Special', cat_pranzo_s: 'One dish of your choice with saffron rice',
       pranzo_price_badge: '€ 15',
       pranzo_lead: 'One dish of your choice, served with a plate of saffron rice.',
       pranzo_avail: 'Available Friday, Saturday & Sunday · 11:30 – 14:30',
   
       /* ABOUT PAGE */
       about_h1: 'About Us', about_sub: 'The story of a name, a place, and a passion',
       about_label: 'Our Name',
       about_h2: 'Darvish: the seeker of the wind',
       ab_p1: 'In Persian, دَرویش — Darvish — refers to the mystical wanderer, the dervish who spins until touching the infinite, who has renounced material goods to seek the truth of the spirit. The Dervishes roamed the caravans of Central Asia carrying stories, music, poetry and the scents of distant lands.',
       ab_p2: 'This restaurant carries that name as a promise: as the Darvish opens his heart to the world, we open the doors of Persia in Padova. The setting of Padova\'s historic centre makes this small Persian gem even more evocative and refined, where in a discreet, elegant atmosphere one can savour a light, high-quality cuisine.',
       ab_p3: 'Every detail is considered: the soft lights, the silver cutlery, the tapestries on the walls, the music arriving from afar. Everything conspires to create that unique atmosphere our guests describe as "magical" — a portal to another civilisation, another idea of time.',
       ab_quote: '"Do not seek outside yourself what has always been within."',
       ab_quote_attr: '— Rumi',
       val_label: 'Our Philosophy',
       val_h2: 'Three words that guide us',
       val_sub: 'From the choice of ingredients to the welcome of every guest',
       v1_h: 'Authenticity', v1_p: 'We import directly from Iran: Mashhad saffron, Khorasan barberries, Kashan rose water. Iranian cuisine deserves respect and genuine ingredients.',
       v2_h: 'Slowness', v2_p: 'Tahdig requires patience. Ghormeh sabzi needs hours of cooking. Fesenjan must simmer until the walnuts dissolve into the pomegranate. Quality cannot be rushed.',
       v3_h: 'Hospitality', v3_p: 'Persian ta\'arof — the culture of welcome — is the thread guiding our every gesture. At Darvish every guest is sacred, every evening a ceremony.',
   
       /* GALLERY */
       gal_h1: 'Gallery', gal_sub: 'Images of a journey through flavours, lights and Persian culture',
       filt_all: 'All', filt_food: 'Cuisine', filt_int: 'Interiors', filt_cult: 'Culture',
   
       /* CONTACT */
       cont_h1: 'Contact & Reservations',
       cont_sub: 'Come find us on the canal — we will welcome you like family',
       cont_find: 'How to Find Us',
       lbl_addr: 'Address', lbl_phone: 'Phone', lbl_hours: 'Hours', lbl_social: 'Follow Us',
       addr_val: 'Riviera Albertino Mussato 85\n35139, Padova (PD) — Italy',
       hours_lt: 'Mon – Thu', hours_lv: '18:30 – 23:30',
       hours_ft: 'Fri – Sun', hours_fv: '11:30–14:30 · 18:30–23:30',
       form_h: 'Send Us a Message',
       f_name: 'Full Name', f_email: 'Email', f_phone: 'Phone (optional)',
       f_subj: 'Subject', f_opt0: 'Select', f_opt1: 'Table Reservation',
       f_opt2: 'Menu Information', f_opt3: 'Private Event', f_opt4: 'Other',
       f_msg: 'Your message', f_send: 'Send Message',
       f_err_name: 'Please enter your name', f_err_email: 'Please enter a valid email',
       f_err_msg: 'Please write a message',
       f_success: 'Thank you! We received your message. We will reply soon.',
   
       /* FOOTER */
       foot_tag: 'A small Persian gem in the heart of Padova, along the Riviera Mussato.',
       foot_links: 'Quick Links', foot_hours: 'Hours', foot_cont: 'Contact',
       foot_h1: 'Mon–Thu: 18:30–23:30', foot_h2: 'Fri: 11:30–14:30 / 18:30–23:30',
       foot_h3: 'Sat: 11:30–14:30 / 18:30–23:30', foot_h4: 'Sun: 11:30–14:30 / 18:30–23:30',
       foot_copy: '© 2025 Ristorante Persiano Darvish · Padova',
       foot_priv: 'Privacy', foot_terms: 'Terms',
     }
   };
   
   /* ============================================================
      LANGUAGE SYSTEM
      ============================================================ */
   let lang = localStorage.getItem('darvish_lang') || 'it';
   
   const t = k => (translations[lang]?.[k]) ?? (translations.it?.[k]) ?? '';
   
   function applyLang() {
     document.querySelectorAll('[data-i18n]').forEach(el => {
       const v = t(el.dataset.i18n);
       if (!v) return;
       if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = v;
       else if (el.tagName === 'OPTION') el.textContent = v;
       else el.textContent = v;
     });
     document.documentElement.lang = lang;
     document.querySelectorAll('.lang-btn').forEach(b =>
       b.classList.toggle('active', b.dataset.lang === lang));
   }
   
   function setLang(l) {
     lang = l;
     localStorage.setItem('darvish_lang', l);
     applyLang();
   }
   
   /* ============================================================
      NAVBAR
      ============================================================ */
   function initNav() {
     const nb = document.getElementById('navbar');
     if (!nb) return;
     const hasHero = !!document.querySelector('.hero, .page-hero');
   
     const update = () => {
       if (hasHero && window.scrollY < 80) {
         nb.classList.add('transparent');
         nb.classList.remove('scrolled');
       } else {
         nb.classList.remove('transparent');
         nb.classList.add('scrolled');
       }
     };
   
     nb.classList.add('transparent');
     window.addEventListener('scroll', update, { passive: true });
     update();
   
     // Active link
     const page = location.pathname.split('/').pop() || '.html';
     document.querySelectorAll('.nav-links a').forEach(a => {
       a.classList.toggle('active', a.getAttribute('href') === page
         || (page === '' && a.getAttribute('href') === 'Darvish.html'));
     });
   }
   
   /* ============================================================
      MOBILE MENU
      ============================================================ */
   function initMobile() {
     const btn = document.getElementById('nav-toggle');
     const mm  = document.getElementById('mobile-menu');
     if (!btn || !mm) return;
   
     btn.addEventListener('click', () => {
       const open = mm.classList.toggle('open');
       btn.classList.toggle('open', open);
       document.body.style.overflow = open ? 'hidden' : '';
     });
   
     mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
       mm.classList.remove('open');
       btn.classList.remove('open');
       document.body.style.overflow = '';
     }));
   }
   
   /* ============================================================
      SCROLL REVEAL
      ============================================================ */
   function initReveal() {
     const els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
     if (!els.length) return;
     const obs = new IntersectionObserver(entries => {
       entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
     }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
     els.forEach(el => obs.observe(el));
   }
   
   /* ============================================================
      MENU TABS
      ============================================================ */
   function initTabs() {
     const tabs = document.querySelectorAll('.menu-tab');
     if (!tabs.length) return;
     tabs.forEach(tab => {
       tab.addEventListener('click', () => {
         document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
         document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
         tab.classList.add('active');
         const cat = document.getElementById('cat-' + tab.dataset.tab);
         if (cat) cat.classList.add('active');
       });
     });
   }
   
   /* ============================================================
      GALLERY
      ============================================================ */
   function initGallery() {
     const btns  = document.querySelectorAll('.filter-btn');
     const items = document.querySelectorAll('.gallery-item');
   
     btns.forEach(b => b.addEventListener('click', () => {
       btns.forEach(x => x.classList.remove('active'));
       b.classList.add('active');
       const f = b.dataset.filter;
       items.forEach(i => {
         const show = f === 'all' || i.dataset.cat === f;
         i.style.display = show ? '' : 'none';
       });
     }));
   
     // Lightbox
     const lb    = document.getElementById('lightbox');
     const lbImg = document.getElementById('lightbox-img');
     if (!lb) return;
   
     items.forEach(item => item.addEventListener('click', () => {
       const img = item.querySelector('img');
       if (img) { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
     }));
   
     const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
     document.getElementById('lightbox-close')?.addEventListener('click', close);
     lb.addEventListener('click', e => { if (e.target === lb) close(); });
     document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
   }
   
   /* ============================================================
      FORM
      ============================================================ */
   function initForm() {
     const form = document.getElementById('contact-form');
     if (!form) return;
   
     form.addEventListener('submit', e => {
       e.preventDefault();
       let ok = true;
   
       const validate = (id, errKey, test) => {
         const el = document.getElementById(id);
         const g  = el?.closest('.form-group');
         if (!g) return;
         if (!test(el.value.trim())) {
           g.classList.add('error');
           g.querySelector('.form-error').textContent = t(errKey);
           ok = false;
         } else g.classList.remove('error');
       };
   
       validate('f-name',  'f_err_name',  v => v.length > 1);
       validate('f-email', 'f_err_email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
       validate('f-msg',   'f_err_msg',   v => v.length > 5);
   
       if (ok) {
         const box = document.getElementById('form-success');
         box.textContent = t('f_success');
         box.style.display = 'block';
         form.reset();
         setTimeout(() => { box.style.display = 'none'; }, 7000);
       }
     });
   
     form.querySelectorAll('input, textarea').forEach(el =>
       el.addEventListener('input', () => el.closest('.form-group')?.classList.remove('error')));
   }
   
   /* ============================================================
      BOOT
      ============================================================ */
   document.addEventListener('DOMContentLoaded', () => {
     initNav();
     initMobile();
     initReveal();
     initTabs();
     initGallery();
     initForm();
     document.querySelectorAll('.lang-btn').forEach(b =>
       b.addEventListener('click', () => setLang(b.dataset.lang)));
     applyLang();
   });