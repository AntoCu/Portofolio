const portfolioData = {
    fr: {
        // Nav
        nav: { p1: "Home", p2: "Compétences", p3: "Projets", p4: "Contact", p5: "Mobilité" },

        // P1 : MOI
        moi: {
            titre: "Ingénieur informatique",
            accent: "Etudiant",
            role: "ING3 Cytech PAU",
            description: "Bonjour, bienvenue sur mon portfolio spatial. Cliquez sur les planètes pour retrouver sur chacune des planetes mon univers.",
            photo: "img/moi.jpg"
        },

        // P2 : SOMBRONCE (Compétences)
        tech: {
            titre: " Mes compétences",
            categories: [
                {
                    nom: "Front-end",
                    icon: "💻",
                    skills: "React, Angular, TypeScript, Tailwind CSS, CSS"
                },
                {
                    nom: "Back-end",
                    icon: "⚙️",
                    skills: "Node.js, Python, PHP, API REST, PostgreSQL, MongoDB, Nitro"
                },
                {
                    nom: "Outils",
                    icon: "🛠️",
                    skills: "Git, GitHub / GitLab, Figma, Canva, Pixel Art"
                },
                {
                    nom: "DevOps",
                    icon: "🚀",
                    skills: "Docker, Kubernetes, AWS, Google Cloud, CI/CD (GitHub Actions), Vercel"
                },
                {
                    nom: "Savoir-être",
                    icon: "🤝",
                    skills: "Autonomie, Esprit d'équipe, Curiosité, Communication"
                }

            ]
        },

        // P3 : SABLIÈRES 
        projets: {
            titre: "Projets",
            principaux: [
                {
                    nom: "Jeu Geo ",
                    desc: "Jeu Geo est un jeu web ou l'utilisateur doit associer des plats aux pays.",
                    github: "https://github.com/AntoCu/JeuGeo"
                },
                {
                    nom: "Morphing",
                    desc: "Projet de Morphing d'image réalisé en ING1 en Java et JavaFX",
                    github: "https://github.com/AntoCu/Morphing"
                }
            ],
            secondaires: [
                { nom: "Historydle", desc: "Jeu de culture histoire codé en Java Spring boot", github: "https://github.com/pierre200326/Historydle" },
                { nom: "CyMeteo", desc: "Application réalisé en C en première année, gestion et analyse d'une banque de donnée météo", github: "https://gitlab.etude.cy-tech.fr/cuyalaanto/rip-n-1" },
                { nom: "Site Justice Restaurative", desc: "L'incontournable application pour s'organiser.", github: "https://gitlab.etude.cy-tech.fr/projetinfos2/projet-justice-restaurative" },
                { nom: "Instagram Replica", desc: "Réplica d'Instagram réalisé en Irlande en python et avec google Firestore et Firebase", github: "https://github.com/AntoCu/InstagramReplicas" }
            ]
        },

        // P4 : ÂTREBOIS (Contact)
        contact: {
            titre: "Contact",
            sous_titre: "Si vous souhaitez me contacter, vous pouvez me retrouver sur :",
            liens: [
                { nom: "Email", url: "mailto:cuyalaanto.cy-tech@.fr", texte: "M'envoyer un mail" },
                { nom: "GitHub", url: "https://github.com/AntoCu", texte: "Voir l'ensemble de mes projets" },
                { nom: "LinkedIn", url: "https://linkedin.com/in/antonin-cuyala-b0b7b1291", texte: "Linkedin" }
            ]
        },

        // P5 : LÉVIATHE (Mobilité)
        mobilite: {
            titre: "Mobilité",
            sous_titre: "Mes études m'ont donnés la chance de réaliser un semestre à l'étranger à Dublin. Ce fut une expèrience riche en apprentissage et en découverte d'une culture incroyable.",
            photos: [
                { src: "img/i1.jpg", legende: "Rencontre dans un bar fan de Liverpool" },
                { src: "img/i2.jpg", legende: "Jardin Botanique" },
                { src: "img/i3.jpg", legende: "Je sais plus mais c'est jolie" },
                { src: "img/i4.jpg", legende: "Prison" },
                { src: "img/i5.jpg", legende: "Temple Bar Saint Patrick" },
                { src: "img/i6.jpg", legende: "Aviva Stadium" },
                { src: "img/i7.jpg", legende: "Aviva Stadium 2" },
                { src: "img/i8.jpg", legende: "Jardins je sais plus ou " },
            ]
        }
    },
    // --- VERSION ANGLAISE TRADUITE ---
    en: {
        nav: { p1: "Home", p2: "Competences", p3: "Works", p4: "Contact", p5: "Mobility" },
        moi: {
            titre: "Computer Engineer", accent: "Student.", role: "ING3 Cytech PAU",
            description: "Welcome to my space porfolio. Click on the planets to discover my universe on each",
            photo: "img/moi.jpg"
        },
        tech: {
            titre: "Competences",
            categories: [
                {
                    nom: "Front-end",
                    icon: "💻",
                    skills: "React, Angular, TypeScript, Tailwind CSS, CSS"
                },
                {
                    nom: "Back-end",
                    icon: "⚙️",
                    skills: "Node.js, Python, PHP, API REST, PostgreSQL, MongoDB, Nitro"
                },
                {
                    nom: "Outils",
                    icon: "🛠️",
                    skills: "Git, GitHub / GitLab, Figma, Canva, Pixel Art"
                },
                {
                    nom: "DevOps",
                    icon: "🚀",
                    skills: "Docker, Kubernetes, AWS, Google Cloud, CI/CD (GitHub Actions), Vercel"
                },
                {
                    nom: "Soft-Skills",
                    icon: "🤝",
                    skills: "Autonomy, Teamwork, Curiosity, Communication"
                }

            ]
        },
        projets: {
            titre: "Works",
            principaux: [
                { nom: "Jeu Geo", desc: "Jeu Geo is a web game where the user has to associates plates to countries", github: "#" },
                { nom: "Morphing", desc: "Project of image morphing realized during ING1 in Java and JavaFX", github: "#" }
            ],
            secondaires: [
                { nom: "Historidle", desc: "Culture game based on history made in Java Spring Boot", github: "#" },
                { nom: "CyMeteo", desc: "Application réalisé en C en première année, gestion et analyse d'une banque de donnée météo", github: "https://gitlab.etude.cy-tech.fr/cuyalaanto/rip-n-1" },
                { nom: "Website Justice Restaurative", desc: "Website for a charity", github: "https://gitlab.etude.cy-tech.fr/projetinfos2/projet-justice-restaurative" },
                { nom: "Instagram Replica", desc: "Replica of Instagram made in Ireland, in python with Firestore and Firebase", github: "https://github.com/AntoCu/InstagramReplicas" }
            ]
        },
        contact: {
            titre: "Contact", sous_titre: "If you want to reach me, find me on :",
            liens: [
                { nom: "Email", url: "mailto:cuyalaanto.cy-tech@.fr", texte: "Send a mail" },
                { nom: "GitHub", url: "https://github.com/AntoCu", texte: "See my projects" },
                { nom: "LinkedIn", url: "https://linkedin.com/in/antonin-cuyala-b0b7b1291", texte: "Linkedin" }
            ]
        },
        mobilite: {
            titre: "Expeditions", sous_titre: "Always ready to explore new horizons.",
            photos: [
                { src: "img/i1.jpg", legende: "Liverpool Fan Pub" },
                { src: "img/i2.jpg", legende: "Garden" },
                { src: "img/i3.jpg", legende: "idk where but pretty" },
                { src: "img/i4.jpg", legende: "Jail" },
                { src: "img/i5.jpg", legende: "Temple Bar Saint Patrick" },
                { src: "img/i6.jpg", legende: "Aviva Stadium" },
                { src: "img/i7.jpg", legende: "Aviva Stadium 2" },
                { src: "img/i8.jpg", legende: "Garden" },
            ]
        }
    }
};