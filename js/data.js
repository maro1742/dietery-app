// ===== DATA LAYER =====
// Recipe Database with Polish recipes
const RECIPES_DB = [
    {
        id: 1,
        title: "Bowl z pieczoną ciecierzycą",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
        time: 20,
        calories: 520,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["ŁATWE", "BEZ GLUTENU"],
        nutrition: {
            protein: 32,
            carbs: 12,
            fats: 24
        },
        ingredients: [
            { name: "Ciecierzyca", quantity: "200g", category: "produkty-sypkie" },
            { name: "Awokado", quantity: "1 szt.", category: "warzywa" },
            { name: "Pomidorki koktajlowe", quantity: "150g", category: "warzywa" },
            { name: "Rukola", quantity: "50g", category: "warzywa" },
            { name: "Oliwa z oliwek", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Sok z cytryny", quantity: "1 łyżka", category: "warzywa" }
        ],
        instructions: [
            "Rozgrzej piekarnik do 200°C.",
            "Osusz ciecierzycę i wymieszaj z oliwą, solą i przyprawami.",
            "Piecz przez 25 minut do złocistości.",
            "Pokrój awokado i pomidorki.",
            "Ułóż wszystkie składniki w misce i polej sokiem z cytryny."
        ]
    },
    {
        id: 2,
        title: "Omlet z warzywami",
        category: "sniadanie",
        image: "assets/images/omlet_warzywa.png",
        time: 15,
        calories: 320,
        difficulty: "łatwe",
        servings: 1,
        isNew: false,
        tags: ["ŁATWE", "KETO"],
        nutrition: {
            protein: 24,
            carbs: 8,
            fats: 18
        },
        ingredients: [
            { name: "Jajka", quantity: "3 szt.", category: "nabial" },
            { name: "Papryka", quantity: "1/2 szt.", category: "warzywa" },
            { name: "Szpinak", quantity: "50g", category: "warzywa" },
            { name: "Ser feta", quantity: "30g", category: "nabial" },
            { name: "Masło", quantity: "1 łyżka", category: "nabial" }
        ],
        instructions: [
            "Rozbij jajka do miski i ubij widelcem.",
            "Pokrój paprykę w kostkę.",
            "Rozgrzej masło na patelni.",
            "Wlej jajka i dodaj warzywa.",
            "Smaż 3-4 minuty, posyp fetą i złóż na pół."
        ]
    },
    {
        id: 3,
        title: "Sałatka z kurczakiem i quinoa",
        category: "obiad",
        image: "assets/images/salatka_quinoa.png",
        time: 30,
        calories: 450,
        difficulty: "średnie",
        servings: 2,
        isNew: true,
        tags: ["BEZ GLUTENU", "WYSOKOBIAŁKOWE"],
        nutrition: {
            protein: 38,
            carbs: 35,
            fats: 15
        },
        ingredients: [
            { name: "Pierś z kurczaka", quantity: "300g", category: "mieso" },
            { name: "Quinoa", quantity: "100g", category: "produkty-sypkie" },
            { name: "Ogórek", quantity: "1 szt.", category: "warzywa" },
            { name: "Pomidor", quantity: "2 szt.", category: "warzywa" },
            { name: "Sałata", quantity: "100g", category: "warzywa" },
            { name: "Oliwa", quantity: "2 łyżki", category: "produkty-sypkie" }
        ],
        instructions: [
            "Ugotuj quinoa według instrukcji na opakowaniu.",
            "Pokrój kurczaka i usmaż na patelni.",
            "Pokrój warzywa w kostkę.",
            "Wymieszaj wszystkie składniki.",
            "Polej oliwą i dopraw do smaku."
        ]
    },
    {
        id: 4,
        title: "Smoothie bowl z jagodami",
        category: "sniadanie",
        image: "assets/images/smoothie_jagodowe.png",
        time: 10,
        calories: 280,
        difficulty: "łatwe",
        servings: 1,
        isNew: false,
        tags: ["WEGAŃSKIE", "ŁATWE"],
        nutrition: {
            protein: 12,
            carbs: 45,
            fats: 8
        },
        ingredients: [
            { name: "Jagody mrożone", quantity: "150g", category: "owoce" },
            { name: "Banan", quantity: "1 szt.", category: "owoce" },
            { name: "Mleko migdałowe", quantity: "100ml", category: "nabial" },
            { name: "Granola", quantity: "30g", category: "produkty-sypkie" },
            { name: "Nasiona chia", quantity: "1 łyżka", category: "produkty-sypkie" }
        ],
        instructions: [
            "Zmiksuj jagody, banana i mleko na gładką masę.",
            "Przelej do miski.",
            "Posyp granolą i nasionami chia.",
            "Udekoruj świeżymi owocami."
        ]
    },
    {
        id: 5,
        title: "Łosoś z brokułami",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
        time: 25,
        calories: 480,
        difficulty: "średnie",
        servings: 2,
        isNew: false,
        tags: ["KETO", "WYSOKOBIAŁKOWE"],
        nutrition: {
            protein: 42,
            carbs: 10,
            fats: 28
        },
        ingredients: [
            { name: "Filet z łososia", quantity: "300g", category: "ryby" },
            { name: "Brokuły", quantity: "300g", category: "warzywa" },
            { name: "Czosnek", quantity: "2 ząbki", category: "warzywa" },
            { name: "Oliwa", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Cytryna", quantity: "1/2 szt.", category: "owoce" }
        ],
        instructions: [
            "Rozgrzej piekarnik do 180°C.",
            "Posmaruj łososia oliwą i przyprawami.",
            "Piecz 15-18 minut.",
            "Ugotuj brokuły na parze.",
            "Podawaj z plasterkiem cytryny."
        ]
    },
    {
        id: 6,
        title: "Puszysta jajecznica",
        category: "sniadanie",
        image: "assets/images/jajecznica_puszysta.png",
        time: 10,
        calories: 350,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["ŁATWE", "WYSOKOBIAŁKOWE"],
        nutrition: {
            protein: 26,
            carbs: 4,
            fats: 22
        },
        ingredients: [
            { name: "Jajka", quantity: "3 szt.", category: "nabial" },
            { name: "Masło", quantity: "1 łyżka", category: "nabial" },
            { name: "Szczypiorek", quantity: "pęczek", category: "warzywa" },
            { name: "Sól i pieprz", quantity: "do smaku", category: "przyprawy" }
        ],
        instructions: [
            "Rozbij jajka do miseczki i lekką wymieszaj.",
            "Rozgrzej masło na patelni na małym ogniu.",
            "Wlej jajka i smaż powoli, ciągle mieszając.",
            "Zdejmij z ognia, gdy jajka są jeszcze lekko wilgotne.",
            "Posyp posiekanym szczypiorkiem przed podaniem."
        ]
    },
    {
        id: 7,
        title: "Szybkie bułeczki z serka wiejskiego",
        category: "sniadanie",
        image: "assets/images/buleczki_twarogowe.png",
        time: 20,
        calories: 240,
        difficulty: "łatwe",
        servings: 4,
        isNew: true,
        tags: ["WYSOKOBIAŁKOWE", "ŁATWE"],
        nutrition: { protein: 18, carbs: 22, fats: 8 },
        ingredients: [
            { name: "Serek wiejski", quantity: "200g", category: "nabial" },
            { name: "Mąka orkiszowa", quantity: "150g", category: "produkty-sypkie" },
            { name: "Jajko", quantity: "1 szt.", category: "nabial" },
            { name: "Proszek do pieczenia", quantity: "1 łyżeczka", category: "produkty-sypkie" }
        ],
        instructions: [
            "Wymieszaj serek wiejski z jajkiem.",
            "Dodaj mąkę i proszek do pieczenia, zagnieć ciasto.",
            "Uformuj małe bułeczki.",
            "Piecz w 180°C przez 15-20 minut lub w Airfryerze przez 12 minut."
        ]
    },
    {
        id: 8,
        title: "Nocna owsianka z masłem orzechowym",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&h=600&fit=crop",
        time: 5,
        calories: 380,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGETARIAŃSKIE", "SZYBKIE"],
        nutrition: { protein: 15, carbs: 45, fats: 14 },
        ingredients: [
            { name: "Płatki owsiane", quantity: "50g", category: "produkty-sypkie" },
            { name: "Mleko roślinne", quantity: "150ml", category: "nabial" },
            { name: "Masło orzechowe", quantity: "1 łyżka", category: "produkty-sypkie" },
            { name: "Nasiona chia", quantity: "1 łyżeczka", category: "produkty-sypkie" },
            { name: "Banan", quantity: "1/2 szt.", category: "owoce" }
        ],
        instructions: [
            "W słoiku wymieszaj płatki, mleko, chia i masło orzechowe.",
            "Wstaw do lodówki na całą noc.",
            "Rano dodaj pokrojonego banana i wymieszaj."
        ]
    },
    {
        id: 9,
        title: "Shakshuka z hummusem",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&h=600&fit=crop",
        time: 15,
        calories: 420,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGETARIAŃSKIE", "TRENDY"],
        nutrition: { protein: 22, carbs: 30, fats: 25 },
        ingredients: [
            { name: "Jajka", quantity: "2 szt.", category: "nabial" },
            { name: "Pomidory krojone", quantity: "200g", category: "warzywa" },
            { name: "Hummus klasyczny", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Cebula", quantity: "1/4 szt.", category: "warzywa" },
            { name: "Kmin rzymski", quantity: "pół łyżeczki", category: "przyprawy" }
        ],
        instructions: [
            "Podsmaż cebulę na patelni, dodaj pomidory i przyprawy.",
            "Gdy sos zgęstnieje, zrób wgłębienia i wbij jajka.",
            "Smaż pod przykryciem do ścięcia białek.",
            "Podawaj z kleksami hummusu na wierzchu."
        ]
    },
    {
        id: 10,
        title: "Tosty z awokado i jajkiem poche",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop",
        time: 15,
        calories: 350,
        difficulty: "średnie",
        servings: 1,
        isNew: true,
        tags: ["WEGETARIAŃSKIE", "EFEKTOWNE"],
        nutrition: { protein: 14, carbs: 28, fats: 22 },
        ingredients: [
            { name: "Chleb pełnoziarnisty", quantity: "2 kromki", category: "produkty-sypkie" },
            { name: "Awokado", quantity: "1/2 szt.", category: "warzywa" },
            { name: "Jajko", quantity: "1 szt.", category: "nabial" },
            { name: "Sok z cytryny", quantity: "1 łyżeczka", category: "warzywa" },
            { name: "Płatki chili", quantity: "szczypta", category: "przyprawy" }
        ],
        instructions: [
            "Zrób tosty z chleba.",
            "Rozgnieć awokado z sokiem z cytryny i solą, nałóż na tosty.",
            "Ugotuj jajko w koszulce (poche) w lekko wrzącej wodzie z octem.",
            "Połóż jajko na awokado i posyp chili."
        ]
    },
    {
        id: 11,
        title: "Jaglanka z karmelizowaną gruszką",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1476531454650-6ed63b782987?w=800&h=600&fit=crop",
        time: 20,
        calories: 310,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGAŃSKIE", "BEZ GLUTENU"],
        nutrition: { protein: 8, carbs: 60, fats: 5 },
        ingredients: [
            { name: "Kasza jaglana", quantity: "50g", category: "produkty-sypkie" },
            { name: "Gruszka", quantity: "1 szt.", category: "owoce" },
            { name: "Miód lub syrop klonowy", quantity: "1 łyżka", category: "produkty-sypkie" },
            { name: "Cynamon", quantity: "szczypta", category: "przyprawy" },
            { name: "Orzechy włoskie", quantity: "kilka sztuk", category: "produkty-sypkie" }
        ],
        instructions: [
            "Ugotuj kaszę jaglaną na wodzie lub mleku roślinnym.",
            "Pokrój gruszkę w plastry i podsmaż na patelni z miodem i cynamonem.",
            "Wymieszaj kaszę z połową gruszki, resztę ułóż na wierzchu.",
            "Posyp posiekanymi orzechami."
        ]
    },
    {
        id: 12,
        title: "Tofucznica z kurkumą i warzywami",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
        time: 15,
        calories: 280,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGAŃSKIE", "WYSOKOBIAŁKOWE"],
        nutrition: { protein: 20, carbs: 12, fats: 16 },
        ingredients: [
            { name: "Tofu naturalne", quantity: "180g", category: "nabial" },
            { name: "Płatki drożdżowe", quantity: "1 łyżka", category: "produkty-sypkie" },
            { name: "Kurkuma", quantity: "szczypta", category: "przyprawy" },
            { name: "Szczypiorek", quantity: "garść", category: "warzywa" },
            { name: "Pomidorki koktajlowe", quantity: "5 szt.", category: "warzywa" }
        ],
        instructions: [
            "Rozkrusz tofu widelcem na patelni.",
            "Dodaj przyprawy, płatki drożdżowe i odrobinę wody.",
            "Smaż kilka minut, aż nabierze pożądanej konsystencji.",
            "Podawaj ze świeżym szczypiorkiem i pomidorkami."
        ]
    },
    {
        id: 13,
        title: "Placki twarogowe proteinowe",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1554520735-0ad66a951bb8?w=800&h=600&fit=crop",
        time: 20,
        calories: 340,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["WYSOKOBIAŁKOWE", "WEGETARIAŃSKIE"],
        nutrition: { protein: 28, carbs: 25, fats: 12 },
        ingredients: [
            { name: "Twaróg chudy", quantity: "250g", category: "nabial" },
            { name: "Jajka", quantity: "2 szt.", category: "nabial" },
            { name: "Mąka owsiana", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Erytrytol", quantity: "1 łyżka", category: "produkty-sypkie" }
        ],
        instructions: [
            "Wymieszaj twaróg z jajkami i mąką na gładką masę.",
            "Smaż małe placuszki na lekko natłuszczonej patelni.",
            "Podawaj z jogurtem naturalnym i świeżymi owocami."
        ]
    },
    {
        id: 14,
        title: "Funkcjonalne smoothie Matcha & Ananas",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=600&fit=crop",
        time: 5,
        calories: 210,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGAŃSKIE", "DETOKS"],
        nutrition: { protein: 5, carbs: 38, fats: 2 },
        ingredients: [
            { name: "Ananas mrożony", quantity: "150g", category: "owoce" },
            { name: "Szpinak", quantity: "garść", category: "warzywa" },
            { name: "Matcha", quantity: "1 łyżeczka", category: "przyprawy" },
            { name: "Woda kokosowa", quantity: "200ml", category: "nabial" }
        ],
        instructions: [
            "Wrzuć wszystkie składniki do blendera.",
            "Miksuj na najwyższych obrotach do uzyskania gładkiej konsystencji.",
            "Pij od razu po przygotowaniu dla najlepszego efektu."
        ]
    },
    {
        id: 15,
        title: "Zdrowy chleb bananowy",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1541444743828-ff42965c7193?w=800&h=600&fit=crop",
        time: 50,
        calories: 220,
        difficulty: "średnie",
        servings: 10,
        isNew: true,
        tags: ["BEZ CUKRU", "ZDROWA PRZEKĄSKA"],
        nutrition: { protein: 6, carbs: 32, fats: 10 },
        ingredients: [
            { name: "Banany dojrzałe", quantity: "3 szt.", category: "owoce" },
            { name: "Mąka pełnoziarnista", quantity: "200g", category: "produkty-sypkie" },
            { name: "Jajka", quantity: "2 szt.", category: "nabial" },
            { name: "Olej kokosowy", quantity: "50ml", category: "produkty-sypkie" },
            { name: "Orzechy włoskie", quantity: "50g", category: "produkty-sypkie" }
        ],
        instructions: [
            "Rozgnieć banany widelcem.",
            "Dodaj mokre składniki, wymieszaj, a następnie dodaj suche.",
            "Przelej do keksówki i piecz w 180°C przez ok. 45-50 minut.",
            "Krój po ostygnięciu."
        ]
    },
    {
        id: 16,
        title: "Pasta z wędzonego twarogu i rzodkiewki",
        category: "sniadanie",
        image: "https://images.unsplash.com/photo-1505253504418-4f9449511095?w=800&h=600&fit=crop",
        time: 10,
        calories: 180,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["TRADYCYJNE", "ŁATWE"],
        nutrition: { protein: 20, carbs: 6, fats: 8 },
        ingredients: [
            { name: "Twaróg wędzony", quantity: "200g", category: "nabial" },
            { name: "Jogurt grecki", quantity: "2 łyżki", category: "nabial" },
            { name: "Rzodkiewka", quantity: "5 szt.", category: "warzywa" },
            { name: "Szczypiorek", quantity: "pęczek", category: "warzywa" }
        ],
        instructions: [
            "Rozgnieć twaróg widelcem, dodaj jogurt.",
            "Rzodkiewki zetrzyj na tarce, szczypiorek posiekaj.",
            "Wymieszaj wszystkie składniki i dopraw solą oraz dużą ilością pieprzu.",
            "Podawaj z pieczywem żytnim."
        ]
    },
    {
        id: 17,
        title: "Steki z kalafiora z sosem miso",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&h=600&fit=crop",
        time: 30,
        calories: 220,
        difficulty: "średnie",
        servings: 2,
        isNew: true,
        tags: ["WEGAŃSKIE", "EFEKTOWNE"],
        nutrition: { protein: 10, carbs: 18, fats: 12 },
        ingredients: [
            { name: "Kalafior", quantity: "1 duży", category: "warzywa" },
            { name: "Pasta miso", quantity: "1 łyżka", category: "produkty-sypkie" },
            { name: "Oliwa z oliwek", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Syrop klonowy", quantity: "1 łyżeczka", category: "produkty-sypkie" }
        ],
        instructions: [
            "Pokrój kalafiora na grube plastry (steki).",
            "Wymieszaj olej, miso i syrop, wysmaruj steki z obu stron.",
            "Piecz w 200°C przez 20-25 minut do zrumienienia.",
            "Podawaj z kaszą lub hummusem."
        ]
    },
    {
        id: 18,
        title: "Chrupiący kurczak z Airfryera",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&h=600&fit=crop",
        time: 20,
        calories: 320,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["AIRFRYER", "WYSOKOBIAŁKOWE"],
        nutrition: { protein: 45, carbs: 15, fats: 8 },
        ingredients: [
            { name: "Pierś z kurczaka", quantity: "400g", category: "mieso" },
            { name: "Płatki kukurydziane bez cukru", quantity: "50g", category: "produkty-sypkie" },
            { name: "Jajko", quantity: "1 szt.", category: "nabial" },
            { name: "Przyprawa do kurczaka", quantity: "1 łyżka", category: "przyprawy" }
        ],
        instructions: [
            "Pokrój kurczaka w paski, dopraw.",
            "Obtocz w rozbełtanym jajku, a następnie w pokruszonych płatkach.",
            "Piecz w Airfryerze w 180°C przez 12-15 minut.",
            "Podawaj z ulubionym lekkim sosem."
        ]
    },
    {
        id: 19,
        title: "Krem z pieczonych pomidorów i papryki",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
        time: 40,
        calories: 250,
        difficulty: "łatwe",
        servings: 3,
        isNew: true,
        tags: ["WEGAŃSKIE", "ROZGRZEWAJĄCE"],
        nutrition: { protein: 6, carbs: 25, fats: 14 },
        ingredients: [
            { name: "Pomidory", quantity: "1kg", category: "warzywa" },
            { name: "Papryka czerwona", quantity: "2 szt.", category: "warzywa" },
            { name: "Czosnek", quantity: "3 ząbki", category: "warzywa" },
            { name: "Oliwa z oliwek", quantity: "2 łyżki", category: "produkty-sypkie" }
        ],
        instructions: [
            "Piecz warzywa i czosnek w 200°C przez 30 minut.",
            "Zdejmij skórę z papryki.",
            "Zblenduj upieczone warzywa z oliwą i odrobiną bulionu na gładki krem.",
            "Dopraw bazylią i solą."
        ]
    },
    {
        id: 20,
        title: "Makaron z pesto z jarmużu",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop",
        time: 15,
        calories: 440,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["SZYBKIE", "WEGETARIAŃSKIE"],
        nutrition: { protein: 12, carbs: 55, fats: 18 },
        ingredients: [
            { name: "Makaron pełnoziarnisty", quantity: "160g", category: "produkty-sypkie" },
            { name: "Jarmuż", quantity: "2 garści", category: "warzywa" },
            { name: "Pestki dyni", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Ser Grana Padano", quantity: "30g", category: "nabial" },
            { name: "Oliwa", quantity: "3 łyżki", category: "produkty-sypkie" }
        ],
        instructions: [
            "Ugotuj makaron al dente.",
            "Zblenduj liście jarmużu z pestkami, serem i oliwą na pesto.",
            "Wymieszaj makaron z pesto, dodając odrobinę wody z gotowania.",
            "Ozdób dodatkowym serem."
        ]
    },
    {
        id: 21,
        title: "Buddah Bowl z kaszą gryczaną i tofu",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
        time: 25,
        calories: 460,
        difficulty: "średnie",
        servings: 1,
        isNew: true,
        tags: ["WEGAŃSKIE", "LOKALNE"],
        nutrition: { protein: 22, carbs: 48, fats: 18 },
        ingredients: [
            { name: "Kasza gryczana niepalona", quantity: "50g", category: "produkty-sypkie" },
            { name: "Tofu wędzone", quantity: "90g", category: "nabial" },
            { name: "Pęczek rzodkiewek", quantity: "4 szt.", category: "warzywa" },
            { name: "Ogórek kiszony", quantity: "1 szt.", category: "warzywa" },
            { name: "Sos tahini", quantity: "1 łyżka", category: "produkty-sypkie" }
        ],
        instructions: [
            "Ugotuj kaszę na sypko.",
            "Podsmaż tofu na patelni.",
            "Ułóż w misce kaszę, tofu, pokrojone rzodkiewki i ogórka kiszonego.",
            "Polej sosem tahini przygotowanym z cytryną."
        ]
    },
    {
        id: 22,
        title: "Ryba pieczona w pergaminie",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1534948665113-bc7528e20081?w=800&h=600&fit=crop",
        time: 25,
        calories: 310,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["BEZ GLUTENU", "LEKKIE"],
        nutrition: { protein: 32, carbs: 8, fats: 16 },
        ingredients: [
            { name: "Filet z białej ryby", quantity: "150g", category: "ryby" },
            { name: "Cukinia", quantity: "1/4 szt.", category: "warzywa" },
            { name: "Papryka żółta", quantity: "1/4 szt.", category: "warzywa" },
            { name: "Masło", quantity: "1 łyżeczka", category: "nabial" }
        ],
        instructions: [
            "Na papierze do pieczenia ułóż warzywa, a na nich rybę.",
            "Dodaj kawałek masła, sól i zioła prowansalskie.",
            "Zawiń papier tworząc sakiewkę.",
            "Piecz w 200°C przez 15-18 minut."
        ]
    },
    {
        id: 23,
        title: "Gulasz z soczewicy i dyni",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1547592115-f5d63fc42911?w=800&h=600&fit=crop",
        time: 35,
        calories: 380,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["WEGAŃSKIE", "ONE-POT"],
        nutrition: { protein: 18, carbs: 55, fats: 10 },
        ingredients: [
            { name: "Soczewica czerwona", quantity: "100g", category: "produkty-sypkie" },
            { name: "Dynia hokkaido", quantity: "300g", category: "warzywa" },
            { name: "Mleczko kokosowe", quantity: "100ml", category: "nabial" },
            { name: "Imbir", quantity: "kawałek", category: "przyprawy" }
        ],
        instructions: [
            "Podsmaż cebulę i imbir, dodaj pokrojoną dynię.",
            "Wlej wodę/bulion, dodaj soczewicę i gotuj do miękkości (ok. 15-20 min).",
            "Dolej mleczko kokosowe i zagotuj.",
            "Podawaj z ryżem lub samym."
        ]
    },
    {
        id: 24,
        title: "Pieczone kotlety z ciecierzycy",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=800&h=600&fit=crop",
        time: 30,
        calories: 350,
        difficulty: "średnie",
        servings: 3,
        isNew: true,
        tags: ["WEGAŃSKIE", "WYSOKOBIAŁKOWE"],
        nutrition: { protein: 16, carbs: 42, fats: 14 },
        ingredients: [
            { name: "Ciecierzyca z puszki", quantity: "400g", category: "produkty-sypkie" },
            { name: "Cebula", quantity: "1 szt.", category: "warzywa" },
            { name: "Mąka kukurydziana", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Pietruszka", quantity: "pęczek", category: "warzywa" }
        ],
        instructions: [
            "Zblenduj ciecierzycę z cebulą i pietruszką (nie na miazgę).",
            "Dodaj mąkę, dopraw solą, kminem i kolendrą.",
            "Formuj małe kotlety i piecz w 200°C przez 20 minut.",
            "Podawaj w picie z warzywami."
        ]
    },
    {
        id: 25,
        title: "Risotto z borowikami i parmezanem",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop",
        time: 30,
        calories: 410,
        difficulty: "średnie",
        servings: 2,
        isNew: true,
        tags: ["WEGETARIAŃSKIE", "ELEGANCKIE"],
        nutrition: { protein: 14, carbs: 55, fats: 12 },
        ingredients: [
            { name: "Ryż Arborio", quantity: "140g", category: "produkty-sypkie" },
            { name: "Grzyby leśne", quantity: "200g", category: "produkty-sypkie" },
            { name: "Bulion warzywny", quantity: "600ml", category: "produkty-sypkie" },
            { name: "Parmezan", quantity: "30g", category: "nabial" }
        ],
        instructions: [
            "Podsmaż ryż i grzyby na patelni.",
            "Stopniowo dolewaj bulion, mieszając, aż ryż go wchłonie.",
            "Gdy ryż będzie kremowy i miękki, zdejmij z ognia.",
            "Wymieszaj z masłem i parmezanem."
        ]
    },
    {
        id: 26,
        title: "Indyk w sosie jogurtowo-ziołowym",
        category: "obiad",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=600&fit=crop",
        time: 20,
        calories: 300,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["LEKKIE", "WYSOKOBIAŁKOWE"],
        nutrition: { protein: 42, carbs: 5, fats: 12 },
        ingredients: [
            { name: "Polędwiczka z indyka", quantity: "300g", category: "mieso" },
            { name: "Jogurt grecki", quantity: "150g", category: "nabial" },
            { name: "Koper", quantity: "pęczek", category: "warzywa" },
            { name: "Czosnek", quantity: "1 ząbek", category: "warzywa" }
        ],
        instructions: [
            "Pokrój indyka w kostkę i podsmaż na patelni.",
            "Wymieszaj jogurt z posiekanym koperkiem i czosnkiem.",
            "Zmniejsz ogień, dodaj sos do indyka (uważaj, by się nie zważył).",
            "Podawaj z ulubioną kaszą."
        ]
    },
    {
        id: 27,
        title: "Zapiekana feta z pomidorkami",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1598514983318-2914191d31d4?w=800&h=600&fit=crop",
        time: 25,
        calories: 390,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["TRENDY", "WEGETARIAŃSKIE"],
        nutrition: { protein: 18, carbs: 12, fats: 30 },
        ingredients: [
            { name: "Ser feta", quantity: "100g", category: "nabial" },
            { name: "Pomidorki koktajlowe", quantity: "200g", category: "warzywa" },
            { name: "Oliwa z oliwek", quantity: "2 łyżki", category: "produkty-sypkie" },
            { name: "Czosnek", quantity: "1 ząbek", category: "warzywa" }
        ],
        instructions: [
            "W naczyniu żaroodpornym ułóż fetę na środku, a wokół pomidorki.",
            "Polej oliwą, dodaj czosnek i zioła.",
            "Piecz w 200°C przez 20-25 minut.",
            "Wymieszaj wszystko widelcem i podawaj z pieczywem."
        ]
    },
    {
        id: 28,
        title: "Sałatka z halloumi i granatem",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
        time: 15,
        calories: 420,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGETARIAŃSKIE", "EFEKTOWNE"],
        nutrition: { protein: 20, carbs: 15, fats: 28 },
        ingredients: [
            { name: "Ser halloumi", quantity: "100g", category: "nabial" },
            { name: "Mix sałat", quantity: "50g", category: "warzywa" },
            { name: "Granat", quantity: "1/4 owocu", category: "owoce" },
            { name: "Orzechy nerkowca", quantity: "15g", category: "produkty-sypkie" }
        ],
        instructions: [
            "Podsmaż plastry halloumi na suchej patelni do zrumienienia.",
            "Ułóż sałatę w misce, dodaj ser.",
            "Posyp pestkami granatu i orzechami.",
            "Skrop sosem balsamicznym."
        ]
    },
    {
        id: 29,
        title: "Tortilla z hummusem i warzywami",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&h=600&fit=crop",
        time: 10,
        calories: 350,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGAŃSKIE", "SZYBKIE"],
        nutrition: { protein: 12, carbs: 45, fats: 14 },
        ingredients: [
            { name: "Tortilla pełnoziarnista", quantity: "1 szt.", category: "produkty-sypkie" },
            { name: "Hummus", quantity: "3 łyżki", category: "produkty-sypkie" },
            { name: "Papryka", quantity: "1/4 szt.", category: "warzywa" },
            { name: "Szpinak", quantity: "garść", category: "warzywa" }
        ],
        instructions: [
            "Podgrzej tortillę na patelni.",
            "Posmaruj ją hummusem.",
            "Ułóż pokrojone warzywa i szpinak na środku.",
            "Zawiń ciasno i podawaj."
        ]
    },
    {
        id: 30,
        title: "Krem z brokuła z migdałami",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
        time: 20,
        calories: 220,
        difficulty: "łatwe",
        servings: 2,
        isNew: true,
        tags: ["LEKKIE", "BEZ GLUTENU"],
        nutrition: { protein: 12, carbs: 18, fats: 10 },
        ingredients: [
            { name: "Brokuł", quantity: "1 szt. (500g)", category: "warzywa" },
            { name: "Płatki migdałów", quantity: "20g", category: "produkty-sypkie" },
            { name: "Cebula", quantity: "1/2 szt.", category: "warzywa" },
            { name: "Jogurt naturalny", quantity: "2 łyżki", category: "nabial" }
        ],
        instructions: [
            "Ugotuj brokuła z cebulą w osolonej wodzie.",
            "Zblenduj warzywa z niewielką ilością wody z gotowania na krem.",
            "Dodaj jogurt i wymieszaj.",
            "Podawaj posypane uprażonymi na patelni płatkami migdałów."
        ]
    },
    {
        id: 31,
        title: "Carpaccio z buraka z kozim serem",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop",
        time: 10,
        calories: 280,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["EFEKTOWNE", "WEGETARIAŃSKIE"],
        nutrition: { protein: 10, carbs: 15, fats: 18 },
        ingredients: [
            { name: "Burak gotowany", quantity: "2 szt.", category: "warzywa" },
            { name: "Ser kozi miękki", quantity: "50g", category: "nabial" },
            { name: "Rukola", quantity: "garść", category: "warzywa" },
            { name: "Orzechy włoskie", quantity: "10g", category: "produkty-sypkie" }
        ],
        instructions: [
            "Pokrój buraka na bardzo cienkie plastry i ułóż na talerzu.",
            "Na wierzch połóż rukolę i kawałki koziego sera.",
            "Posyp orzechami i skrop oliwą oraz octem balsamicznym.",
            "Dopraw solą i pieprzem."
        ]
    },
    {
        id: 32,
        title: "Pieczone bataty z sosem jogurtowym",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=800&h=600&fit=crop",
        time: 30,
        calories: 310,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGETARIAŃSKIE", "BEZ GLUTENU"],
        nutrition: { protein: 8, carbs: 45, fats: 10 },
        ingredients: [
            { name: "Batat", quantity: "1 średni", category: "warzywa" },
            { name: "Jogurt naturalny", quantity: "100g", category: "nabial" },
            { name: "Czosnek", quantity: "1 ząbek", category: "warzywa" },
            { name: "Szczypiorek", quantity: "posiekany", category: "warzywa" }
        ],
        instructions: [
            "Pokrój batata w słupki, wymieszaj z oliwą i przyprawami.",
            "Piecz w 200°C przez ok. 25 minut.",
            "W międzyczasie przygotuj sos jogurtowy z czosnkiem i szczypiorkiem.",
            "Podawaj bataty maczając w sosie."
        ]
    },
    {
        id: 33,
        title: "Quesadilla z czarną fasolą",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1599307767316-776533da941c?w=800&h=600&fit=crop",
        time: 15,
        calories: 450,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["WEGETARIAŃSKIE", "BIAŁKO ROŚLINNE"],
        nutrition: { protein: 18, carbs: 50, fats: 18 },
        ingredients: [
            { name: "Tortilla", quantity: "2 szt.", category: "produkty-sypkie" },
            { name: "Czarna fasola", quantity: "1/2 puszki", category: "produkty-sypkie" },
            { name: "Ser żółty tarty", quantity: "40g", category: "nabial" },
            { name: "Kukurydza", quantity: "2 łyżki", category: "produkty-sypkie" }
        ],
        instructions: [
            "Połóż tortillę na patelni, posyp połową sera.",
            "Dodaj fasolę, kukurydzę i resztę sera, przykryj drugą tortillą.",
            "Smaż z obu stron, aż ser się rozpuści i tortilla będzie chrupiąca.",
            "Pokrój na trójkąty."
        ]
    },
    {
        id: 34,
        title: "Sałatka z pieczoną dynią i fetą",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1547592115-f5d63fc42911?w=800&h=600&fit=crop",
        time: 25,
        calories: 330,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["SEZONOWE", "WEGETARIAŃSKIE"],
        nutrition: { protein: 12, carbs: 20, fats: 22 },
        ingredients: [
            { name: "Dynia gotowa-pieczona", quantity: "200g", category: "warzywa" },
            { name: "Mix sałat", quantity: "50g", category: "warzywa" },
            { name: "Ser feta", quantity: "40g", category: "nabial" },
            { name: "Pestki dyni", quantity: "1 łyżka", category: "produkty-sypkie" }
        ],
        instructions: [
            "Ułóż sałatę w misce.",
            "Dodaj kawałki pieczonej dyni i pokruszoną fetę.",
            "Posyp uprażonymi pestkami dyni.",
            "Polej dressingiem miodowo-musztardowym."
        ]
    },
    {
        id: 35,
        title: "Tatar z łososia z awokado",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
        time: 15,
        calories: 290,
        difficulty: "średnie",
        servings: 1,
        isNew: true,
        tags: ["PREMIUM", "WYSOKOBIAŁKOWE"],
        nutrition: { protein: 25, carbs: 4, fats: 20 },
        ingredients: [
            { name: "Łosoś świeży", quantity: "120g", category: "ryby" },
            { name: "Awokado", quantity: "1/2 szt.", category: "warzywa" },
            { name: "Cebula czerwona", quantity: "1/4 szt.", category: "warzywa" },
            { name: "Sok z limonki", quantity: "1 łyżka", category: "warzywa" }
        ],
        instructions: [
            "Pokrój łososia i awokado w drobną kostkę.",
            "Drobno posiekaj cebulę.",
            "Wymieszaj wszystko z sokiem z limonki, solą i pieprzem.",
            "Uformuj za pomocą pierścienia na talerzu."
        ]
    },
    {
        id: 36,
        title: "Bruschetta z pomidorami",
        category: "kolacja",
        image: "https://images.unsplash.com/photo-1572695111296-38321db531ca?w=800&h=600&fit=crop",
        time: 10,
        calories: 260,
        difficulty: "łatwe",
        servings: 1,
        isNew: true,
        tags: ["KLASYCZNE", "LOKALNE"],
        nutrition: { protein: 8, carbs: 35, fats: 10 },
        ingredients: [
            { name: "Baguetka pełnoziarnista", quantity: "1/2 szt.", category: "produkty-sypkie" },
            { name: "Pomidory", quantity: "2 szt.", category: "warzywa" },
            { name: "Czosnek", quantity: "1 ząbek", category: "warzywa" },
            { name: "Bazylia świeża", quantity: "kilka liści", category: "warzywa" }
        ],
        instructions: [
            "Pokrój bagietkę na ukośne kromki i opiecz je na chrupiąco.",
            "Pomidory pokrój w kostkę, wymieszaj z posiekaną bazylią i oliwą.",
            "Pocieraj grzanki ząbkiem czosnku, następnie nałóż pomidory.",
            "Podawaj natychmiast."
        ]
    }
];

// User Preferences Model
const DEFAULT_PREFERENCES = {
    goal: "utrata-wagi", // "utrata-wagi" | "budowa-miesni"
    dietType: "keto", // "keto" | "wegetarianska" | "weganska" | "paleo" | "bez-glutenu"
    allergies: {
        orzechy: true,
        laktoza: false,
        gluten: false,
        skorupiaki: true
    }
};

// Shopping List State
let shoppingList = {
    items: [],
    completed: []
};

// Meal Plan State
let mealPlan = {
    // Format: { date: { breakfast: recipeId, lunch: recipeId, dinner: recipeId } }
};

// Favorites
let favorites = [];

// User Preferences State
let userPreferences = DEFAULT_PREFERENCES;

// ===== DATA LAYER WITH FIREBASE SYNC =====

// Helper to get user document reference
function getUserDocRef() {
    if (!AuthService.user) return null;
    return typeof db !== 'undefined' ? db.collection('users').doc(AuthService.user.uid) : null;
}

// ===== LOCAL STORAGE HELPERS (with Firestore sync) =====
async function loadPreferences() {
    let prefs = null;
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().preferences) {
                prefs = doc.data().preferences;
            }
        } catch (e) { console.error('Error loading preferences from Firestore:', e); }
    }

    if (!prefs) {
        const stored = localStorage.getItem('userPreferences');
        prefs = stored ? JSON.parse(stored) : DEFAULT_PREFERENCES;
    }

    userPreferences = prefs;
    return userPreferences;
}

function getPreferences() {
    return userPreferences;
}

async function savePreferences(preferences) {
    userPreferences = preferences;
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ preferences }, { merge: true });
        } catch (e) { console.error('Error saving preferences to Firestore:', e); }
    }
}

async function loadFavorites() {
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().favorites) {
                favorites = doc.data().favorites;
                return favorites;
            }
        } catch (e) { console.error('Error loading favorites from Firestore:', e); }
    }
    const stored = localStorage.getItem('favorites');
    favorites = stored ? JSON.parse(stored) : [];
    return favorites;
}

async function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ favorites }, { merge: true });
        } catch (e) { console.error('Error saving favorites to Firestore:', e); }
    }
}

async function toggleFavorite(recipeId) {
    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }
    await saveFavorites();
}

function isFavorite(recipeId) {
    return favorites.includes(recipeId);
}

async function loadShoppingList() {
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().shoppingList) {
                shoppingList = doc.data().shoppingList;
                return shoppingList;
            }
        } catch (e) { console.error('Error loading shopping list from Firestore:', e); }
    }
    const stored = localStorage.getItem('shoppingList');
    shoppingList = stored ? JSON.parse(stored) : { items: [], completed: [] };
    return shoppingList;
}

async function saveShoppingList() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ shoppingList }, { merge: true });
        } catch (e) { console.error('Error saving shopping list to Firestore:', e); }
    }
}

async function loadMealPlan() {
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            const doc = await userDoc.get();
            if (doc.exists && doc.data().mealPlan) {
                mealPlan = doc.data().mealPlan;
                return mealPlan;
            }
        } catch (e) { console.error('Error loading meal plan from Firestore:', e); }
    }
    const stored = localStorage.getItem('mealPlan');
    mealPlan = stored ? JSON.parse(stored) : {};
    return mealPlan;
}

async function saveMealPlan() {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
    const userDoc = getUserDocRef();
    if (userDoc) {
        try {
            await userDoc.set({ mealPlan }, { merge: true });
        } catch (e) { console.error('Error saving meal plan to Firestore:', e); }
    }
}

// ===== DATA QUERIES =====
function getRecipeById(id) {
    return RECIPES_DB.find(recipe => recipe.id === id);
}

function getRecipesByCategory(category) {
    if (category === 'wszystkie') return RECIPES_DB;
    return RECIPES_DB.filter(recipe => recipe.category === category);
}

function searchRecipes(query) {
    const lowerQuery = query.toLowerCase();
    return RECIPES_DB.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerQuery) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowerQuery))
    );
}

// Data initialization is handled in app.js after auth check
