export const portfolioData = {
    es: {
        nav: {
            about: 'Sobre mí',
            experience: 'Experiencia',
            skills: 'Habilidades',
            education: 'Educación',
            resume: 'Currículum'
        },
        hero: {
            availability: 'Abierto a nuevas oportunidades',
            greeting: 'Hola, soy',
            rolesTitle: 'Roles Destacados',
            btnExperience: 'Ver Experiencia',
            btnContact: 'Contactar'
        },
        sections: {
            experience: 'Experiencia Profesional',
            skills: 'Habilidades Técnicas',
            skillsDesc: 'Un conjunto de tecnologías dominadas a lo largo de mi carrera para construir aplicaciones robustas, escalables y modernas.',
            education: 'Formación Académica',
            courses: 'Cursos y Certificaciones',
            resume: 'Descargar Mi CV'
        },
        footer: {
            rights: 'Todos los derechos reservados.'
        },
        personalInfo: {
            name: "Camilo Giraldo",
            title: "Senior Software Developer",
            email: "cagiraldo88@gmail.com",
            phone: "+57 312 3865 021",
            location: "Cali - Colombia",
            summary: "Ingeniero Full Stack con más de 10 años de trayectoria diseñando soluciones tecnológicas escalables y de alto impacto. Experto en el ecosistema Java, .NET, Node.js y frameworks modernos como React y Angular. Mi base sólida en ingeniería de software tradicional me permite garantizar la calidad, el rigor técnico y la mantenibilidad en cada desarrollo.\n\nAdemás, he potenciado mi flujo de trabajo integrando herramientas de Inteligencia Artificial de forma consciente, utilizándolas para optimizar tiempos de entrega y mejorar la precisión sin comprometer los fundamentos técnicos. Especialista en arquitecturas cloud (AWS/Azure) y liderazgo técnico, transformo problemas complejos en sistemas robustos y eficientes.",
            cvFile: "HV - Camilo Giraldo Ramirez.pdf"
        },
        roles: [
            "FullStack Developer Java/Angular",
            "FullStack Developer Java/ReactJS",
            "FullStack Developer .Net/Angular",
            "Senior Java Developer",
            "Intermediate Angular Developer",
        ],
        skills: [
            { category: "Liderazgo & Soft Skills", items: ["Mentoría de Juniors", "Charlas Técnicas", "Valoración Técnica", "Liderazgo Técnico", "Comunicación Asertiva"] },
            { category: "Backend & Core", items: ["Java/JEE (Expert)", "Spring Boot / Spring Cloud", "Spring Batch", "Node.js", "Go", ".NET / EntityFramework"] },
            { category: "Frontend", items: ["React.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Redux"] },
            { category: "Databases", items: ["PostgreSQL", "Oracle DB", "MySQL", "SQL Server", "Azure DB2"] },
            { category: "Cloud & DevOps", items: ["AWS (RDS, IAM, S3, EC2)", "Azure", "CI/CD", "Jenkins", "Anthos", "Kubernetes", "Docker"] },
            { category: "Tools & Testing", items: ["JUnit 5", "Mockito", "Maven", "Gradle", "Git", "Jest", "Kafka", "NewRelic", "Scrum"] },
        ],
        experience: [
            {
                id: "perficient",
                company: "Perficient, Inc.",
                role: "Senior Software Developer",
                period: "Sept 2019 – Actual",
                projects: [
                    {
                        client: "Scotiabank Uruguay",
                        description: "Senior Software Developer enfocado en liderazgo técnico, arquitecturas básicas, y migración de microservicios.",
                        responsibilities: [
                            "Lideré la migración y resolución de vulnerabilidades críticas en múltiples microservicios actualizando versiones de Java.",
                            "Ejercí rol de liderazgo: resolviendo bloqueos técnicos, realizando code reviews y velando por el ciclo DevOps.",
                            "Consolidé Scrum, ayudando en la creación/estimación de backlog y orientando el onboarding de nuevos colaboradores.",
                            "Diseñé arquitecturas básicas y lideré la presentación técnica para arquitectos con documentación como TDD y eARB."
                        ]
                    },
                    {
                        client: "Novaventa Colombia",
                        description: "Software Developer Java responsable de optimizaciones críticas, nuevas funcionalidades y modernización de componentes.",
                        responsibilities: [
                            "Mejoré significativamente el caché en procesos clave y escalé versiones de Java junto con librerías internas.",
                            "Solucioné cuellos de botella en altos flujos de peticiones, entregando un valor crítico y mejorando la estabilidad del sistema.",
                            "Propuse e implementé nuevas herramientas de monitoreo, asegurando alta disponibilidad de la plataforma.",
                            "Entregué exitosamente nuevas características funcionales reforzadas con sólidas pruebas de integración."
                        ]
                    },
                    {
                        client: "Donnelley Financial Solutions (USA)",
                        description: "Desarrollo de nuevas características bajo estándares regulatorios para reportes financieros ante la SEC y ESEF.",
                        responsibilities: [
                            "Desarrollé nuevas características utilizando tecnologías Full Stack Java y React.",
                            "Colaboré en diseñar e implementar mejoras para cumplir con los requisitos regulatorios (SEC, ESEF).",
                            "Implementé APIs REST para mejorar las capacidades de la aplicación.",
                        ]
                    },
                    {
                        client: "DHL (USA)",
                        description: "Modernización de infraestructura tecnológica y gestión de cadena de suministro.",
                        responsibilities: [
                            "Actualización tecnológica de Java 8 a Java 16.",
                            "Migración de módulos monolíticos a microservicios.",
                            "Implementación de soluciones Cloud para mejorar el rendimiento y escalabilidad.",
                        ]
                    },
                    {
                        client: "Constructora Bolívar (COL)",
                        description: "Gestión del proceso de compra y seguimiento de construcción.",
                        responsibilities: [
                            "Migración a arquitectura de microservicios usando Full Stack Java y Angular.",
                            "Optimización de tiempos de respuesta e interfaces de usuario.",
                            "Integración con sistema nacional de facturación electrónica.",
                        ]
                    },
                    {
                        client: "Mutual Ser EPS",
                        description: "Sistema de gestión de inscripción en el sector salud.",
                        responsibilities: [
                            "Desarrollo de características para inscripción y acceso a salud.",
                            "Integración con el sistema nacional de salud de Colombia.",
                            "Implementación de Spring Batch para optimizar procesos de integración de datos.",
                        ]
                    },
                    {
                        client: "Localiza Colombia",
                        description: "Sistema de gestión de facturación electrónica de arrendamiento.",
                        responsibilities: [
                            "Desarrollo de interfaces en Angular para gestión de facturas.",
                            "Creación de APIs en .NET para el backend y cálculo de facturas.",
                            "Integración WSDL con sistema de facturación electrónica DIAN.",
                        ]
                    }
                ]
            },
            {
                id: "stefanini",
                company: "Stefanini Latam",
                role: "Software Developer",
                period: "Oct 2018 – Sept 2019",
                projects: [
                    {
                        client: "Carvajal Tecnologías y Servicios",
                        description: "Desarrollo de aplicaciones internas y plataforma de facturación electrónica para Latinoamérica.",
                        responsibilities: [
                            "Desarrollo en Java Spring Boot, MyBatis, Spring Data, REST y WSDL.",
                            "Implementación de técnicas de programación multihilo para optimizar rendimiento.",
                            "Conexiones a servicios de facturación para más de 500 clientes en la región.",
                        ]
                    }
                ]
            },
            {
                id: "iptotal",
                company: "IP Total Software",
                role: "Junior Software Developer",
                period: "Jul 2013 – Sept 2017",
                projects: [
                    {
                        client: "CNT Ecuador",
                        description: "Desarrollo de aplicación desde cero para gestionar tráfico de llamadas a nivel nacional.",
                        responsibilities: [
                            "Participé como desarrollador full stack utilizando Java, HTML, JavaScript, jQuery y GWT.",
                            "Diseñé y desarrollé desde cero una aplicación implementada en CNT Ecuador para gestionar el tráfico de llamadas.",
                            "Participé en todas las fases del ciclo de vida del software: análisis, diseño, desarrollo, pruebas y despliegue.",
                            "Aseguré la escalabilidad y confiabilidad de la solución en un entorno de alta demanda."
                        ]
                    }
                ]
            }
        ],
        education: [
            {
                degree: "Ingeniero de Sistemas",
                institution: "Universidad Antonio Jose Camacho, Col.",
                year: "2019"
            },
            {
                degree: "Tecnología en Análisis y desarrollo de Software",
                institution: "SENA, Col.",
                year: "2016"
            }
        ],
        courses: [
            "AWS Certified AI Practitioner (Cursando)",
            "AWS Certified Cloud Practitioner (2025)",
            "Product Prioritization Micro-Certification (PPC)",
            "Product Discovery Micro-Certification (PDC)",
            "Java Functional Programming with Lambdas & Streams, Udemy (2022)",
            "Go Fundamentos, Udemy",
            "Scrum Developer (2017)",
            "Full Stack Developer (2019)",
            "Oracle 11g Fundamentals (2014)"
        ]
    },
    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            education: 'Education',
            resume: 'Resume'
        },
        hero: {
            availability: 'Open to new opportunities',
            greeting: 'Hi, I am',
            rolesTitle: 'Featured Roles',
            btnExperience: 'View Experience',
            btnContact: 'Contact Me'
        },
        sections: {
            experience: 'Professional Experience',
            skills: 'Technical Skills',
            skillsDesc: 'A set of mastered technologies throughout my career to build robust, scalable, and modern applications.',
            education: 'Education',
            courses: 'Courses and Certifications',
            resume: 'Download My Resume'
        },
        footer: {
            rights: 'All rights reserved.'
        },
        personalInfo: {
            name: "Camilo Giraldo",
            title: "Senior Software Developer",
            email: "cagiraldo88@gmail.com",
            phone: "+57 312 3865 021",
            location: "Cali - Colombia",
            summary: "Full Stack Engineer with 10+ years of experience building scalable, high-impact technological solutions. Expert in Java, .NET, Node.js, and modern frameworks like React and Angular. My solid foundation in traditional software engineering allows me to ensure quality, technical rigor, and maintainability in every development.\n\nAdditionally, I have enhanced my workflow by consciously integrating Artificial Intelligence tools, using them to optimize delivery times and improve precision without compromising technical fundamentals. Specialist in cloud architectures (AWS/Azure) and technical leadership, I transform complex challenges into robust and efficient systems.",
            cvFile: "CV - Camilo Giraldo Ramirez.pdf"
        },
        roles: [
            "FullStack Developer Java/Angular",
            "FullStack Developer Java/ReactJS",
            "FullStack Developer .Net/Angular",
            "Senior Java Developer",
            "Intermediate Angular Developer",
        ],
        skills: [
            { category: "Leadership & Soft Skills", items: ["Junior Mentorship", "Technical Talks", "Technical Assessment", "Technical Leadership", "Assertive Communication"] },
            { category: "Backend & Core", items: ["Java/JEE (Expert)", "Spring Boot / Spring Cloud", "Spring Batch", "Node.js", "Go", ".NET / EntityFramework"] },
            { category: "Frontend", items: ["React.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "Redux"] },
            { category: "Databases", items: ["PostgreSQL", "Oracle DB", "MySQL", "SQL Server", "Azure DB2"] },
            { category: "Cloud & DevOps", items: ["AWS (RDS, IAM, S3, EC2)", "Azure", "CI/CD", "Jenkins", "Anthos", "Kubernetes", "Docker"] },
            { category: "Tools & Testing", items: ["JUnit 5", "Mockito", "Maven", "Gradle", "Git", "Jest", "Kafka", "NewRelic", "Scrum"] },
        ],
        experience: [
            {
                id: "perficient",
                company: "Perficient, Inc.",
                role: "Senior Software Developer",
                period: "Sept 2019 – Present",
                projects: [
                    {
                        client: "Scotiabank Uruguay",
                        description: "Senior Software Developer focused on technical leadership, core architectures, and microservices migration.",
                        responsibilities: [
                            "Led the migration and resolution of critical vulnerabilities across multiple microservices by upgrading Java versions.",
                            "Executed leadership role: unblocking technical obstacles, performing code reviews, and ensuring the DevOps cycle.",
                            "Consolidated Scrum methodologies, assisting in backlog creation/estimation, and onboarding new collaborators.",
                            "Designed core architectures and led technical presentations for architects with documentation like TDD and eARB."
                        ]
                    },
                    {
                        client: "Novaventa Colombia",
                        description: "Software Developer Java responsible for critical optimizations, new features, and component modernization.",
                        responsibilities: [
                            "Significantly improved caching in key processes and upgraded Java versions along with core internal libraries.",
                            "Resolved performance bottlenecks in high-traffic request flows, delivering critical value and system stability.",
                            "Proposed and implemented new monitoring tools, ensuring high availability of the software platform.",
                            "Successfully delivered new functional features reinforced by solid integration testing routines."
                        ]
                    },
                    {
                        client: "Donnelley Financial Solutions (USA)",
                        description: "Development of new features following regulatory accounting standards for SEC and ESEF financial reporting.",
                        responsibilities: [
                            "Developed new features using Full Stack Java and React technologies.",
                            "Collaborated in designing and implementing improvements to meet regulatory requirements (SEC, ESEF).",
                            "Implemented REST API interfaces to enhance application capabilities.",
                        ]
                    },
                    {
                        client: "DHL (USA)",
                        description: "Modernization of technological architecture and supply chain management logistics.",
                        responsibilities: [
                            "Technology architecture migration from Java 8 to Java 16.",
                            "Migration of monolithic modules into microservices architectures.",
                            "Implementation of Cloud computing solutions to improve performance and horizontal scalability.",
                        ]
                    },
                    {
                        client: "Constructora Bolívar (COL)",
                        description: "Purchase order and construction progress management architecture.",
                        responsibilities: [
                            "Migrated monolithic logic to microservices using Full Stack Java and Angular.",
                            "Optimized user interfaces and backend API response times.",
                            "System integration with the national electronic billing system APIs.",
                        ]
                    },
                    {
                        client: "Mutual Ser EPS",
                        description: "Healthcare enrollment and affiliation management software.",
                        responsibilities: [
                            "Developed enrollment components and access portals to healthcare services.",
                            "Data integration architectures with Colombia's national health system data.",
                            "Spring Batch jobs optimization for robust data integration pipelines.",
                        ]
                    },
                    {
                        client: "Localiza Colombia",
                        description: "Leasing and electronic billing management software dashboard.",
                        responsibilities: [
                            "Angular interfaces development for the billing administration workflows.",
                            "Created RESTful .NET APIs for backend calculation logic.",
                            "WSDL protocol integration directly to the DIAN taxation platform.",
                        ]
                    }
                ]
            },
            {
                id: "stefanini",
                company: "Stefanini Latam",
                role: "Software Developer",
                period: "Oct 2018 – Sept 2019",
                projects: [
                    {
                        client: "Carvajal Tecnologías y Servicios",
                        description: "Development of internal software routing and e-billing systems across Latin America.",
                        responsibilities: [
                            "Backend development on Java Spring Boot, MyBatis, Spring Data, REST, and WSDL ecosystems.",
                            "Multithreading implementation and async queues to optimize data throughput.",
                            "Managed connections with e-billing architectures for 500+ clients across LatAm.",
                        ]
                    }
                ]
            },
            {
                id: "iptotal",
                company: "IP Total Software",
                role: "Junior Software Developer",
                period: "Jul 2013 – Sept 2017",
                projects: [
                    {
                        client: "CNT Ecuador",
                        description: "Full stack developer designing an application from scratch to manage nationwide call traffic.",
                        responsibilities: [
                            "Contributed as a full stack developer using Java, HTML, JavaScript, jQuery, and GWT.",
                            "Designed and developed an application from scratch to manage call traffic nationwide.",
                            "Participated in all software lifecycle phases: analysis, design, development, testing, and deployment.",
                            "Ensured scalability and reliability of the solution in a high-demand environment."
                        ]
                    }
                ]
            }
        ],
        education: [
            {
                degree: "Systems Engineering",
                institution: "Universidad Antonio Jose Camacho, Col.",
                year: "2019"
            },
            {
                degree: "Software Analysis and Development Technology",
                institution: "SENA, Col.",
                year: "2016"
            }
        ],
        courses: [
            "AWS Certified AI Practitioner (In Progress)",
            "AWS Certified Cloud Practitioner (2025)",
            "Product Prioritization Micro-Certification (PPC)",
            "Product Discovery Micro-Certification (PDC)",
            "Java Functional Programming with Lambdas & Streams, Udemy (2022)",
            "Go Fundamentals, Udemy",
            "Scrum Developer (2017)",
            "Full Stack Developer (2019)",
            "Oracle 11g Fundamentals (2014)"
        ]
    }
};
