export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "work" | "creative";
  hasDetailPage?: boolean;
  fullDescription?: string;
  role?: string;
  achievements?: string[];
  githubUrl?: string;
  posterUrl?: string;
}

export const workProjects: Project[] = [
  {
    id: "segmenting-behavior",
    title: "Segmenting Behavior: K-Means Clustering",
    description: "Built customer segmentation models using RFM features, PCA, and DBSCAN to derive actionable marketing insights from behavioral data.",
    tags: ["Python", "Machine Learning", "Data Analytics", "Clustering"],
    category: "work",
    hasDetailPage: true,
    fullDescription: "Analyzed 10,000 transaction records from 200 unique customers to uncover patterns in spending behavior across various categories. Applied K-Means clustering with RFM (Recency, Frequency, Monetary) features to identify distinct customer groups. The analysis revealed four key customer segments: high spenders preferring Groceries and Personal Hygiene, moderate spenders focusing on Gifts and Groceries, balanced spenders across categories, and fitness-focused shoppers. These insights enable targeted marketing and personalized recommendations tailored to each customer segment.",
    role: "Data Analyst & Machine Learning Engineer",
    achievements: [
      "Engineered features including Recency, Transaction Frequency, and Average Spending",
      "Implemented K-Means clustering to segment 200 customers into 4 distinct groups",
      "Applied one-hot encoding for categorical variables and temporal analysis",
      "Created visualizations to communicate spending patterns across $25M+ in transactions",
      "Delivered actionable insights for targeted marketing and customer retention strategies",
    ],
    githubUrl: "https://github.com/beanbean9339/consumer-spending-habits",
    posterUrl: "/Lo_Customer_Segmentation_Clustering_Poster.pdf",
  },
  {
    id: "lmcc-alumconnect",
    title: "LMCC AlumConnect",
    description: "Built a web app for a Manhattan art nonprofit to connect alumni with newer members. Developed backend APIs in Java Spring Boot and integrated RESTful services.",
    tags: ["Java Spring Boot", "REST API", "MySQL", "React"],
    category: "work",
    hasDetailPage: true,
    fullDescription: "As part of the JPMorgan Chase Code for Good hackathon, I worked with a team to build AlumConnect, a platform designed to strengthen community bonds at the Lower Manhattan Cultural Council (LMCC). The application enables alumni to mentor and connect with current members, fostering long-term relationships within the arts community.",
    role: "Backend Developer & System Architect",
    achievements: [
      "Designed and implemented RESTful APIs using Java Spring Boot",
      "Built MySQL database schema for user profiles and matching algorithms",
      "Integrated React frontend with Spring Boot backend services",
      "Collaborated with cross-functional teams in a 24-hour hackathon environment",
      "Presented solution to JPMC executives and nonprofit stakeholders",
    ],
  },
  {
    id: "weather-app",
    title: "WeatherApp",
    description: "Developed a dynamic weather application using JavaScript and OpenWeather API with real-time data fetching and responsive UI design.",
    tags: ["JavaScript", "API Integration", "Web Development"],
    category: "work",
    hasDetailPage: true,
    fullDescription: "Created an interactive weather application that provides real-time weather data for any location. Implemented clean API integration with OpenWeather API, featuring dynamic UI updates based on weather conditions and responsive design for seamless cross-device experience.",
    role: "Frontend Developer",
    achievements: [
      "Integrated OpenWeather API for real-time weather data",
      "Built dynamic UI with JavaScript that responds to weather conditions",
      "Implemented responsive design for mobile and desktop devices",
      "Added location search and geolocation features",
    ],
  },
  {
    id: "equipment-rental-db",
    title: "Equipment Rental Database",
    description: "Designed and implemented a normalized database schema with optimized queries for an equipment rental management system.",
    tags: ["Database Design", "SQL", "Query Optimization"],
    category: "work",
    hasDetailPage: true,
    fullDescription: "Architected a comprehensive database solution for equipment rental management. Implemented normalized schema design following best practices, created complex queries for rental tracking and availability, and optimized database performance for efficient data retrieval.",
    role: "Database Designer",
    achievements: [
      "Designed normalized database schema (3NF)",
      "Implemented complex SQL queries for rental operations",
      "Optimized query performance with proper indexing",
      "Created database documentation and ER diagrams",
    ],
  },
  {
    id: "cse-2231-portfolio",
    title: "CSE-2231 Portfolio Project",
    description: "Developed modular Java software components using object-oriented design principles and test-driven development methodologies.",
    tags: ["Java", "OOP", "Test-Driven Development", "Software Engineering"],
    category: "work",
    hasDetailPage: true,
    fullDescription: "Built a comprehensive portfolio of modular Java components demonstrating mastery of object-oriented programming and software engineering principles. Implemented custom data structures, algorithms, and components using test-driven development approach with extensive JUnit testing.",
    role: "Software Engineer",
    achievements: [
      "Developed modular, reusable Java components",
      "Applied object-oriented design patterns and principles",
      "Implemented comprehensive JUnit test suites",
      "Documented code with clear specifications and contracts",
    ],
  },
];

export const creativeProjects: Project[] = [
  {
    id: "bubblefish-branding",
    title: "BubbleFish Branding",
    description: "Complete brand identity system including logo design, color palette, typography guidelines, and brand messaging strategy.",
    tags: ["Branding", "Logo Design", "Visual Identity", "Typography"],
    category: "creative",
    hasDetailPage: true,
    fullDescription: "Developed a comprehensive brand identity for BubbleFish, creating a cohesive visual language that captures the brand's essence. The project included logo design, color palette development, typography selection, and brand messaging guidelines to ensure consistent communication across all touchpoints.",
    role: "Brand Designer",
    achievements: [
      "Designed distinctive logo mark and wordmark variations",
      "Developed complete color palette with accessibility considerations",
      "Created typography hierarchy and usage guidelines",
      "Established brand voice and messaging strategy",
    ],
  },
  {
    id: "merch-design",
    title: "Merch Design",
    description: "Custom merchandise designs for events, organizations, and personal projects featuring creative graphics and thoughtful composition.",
    tags: ["Apparel Design", "Graphics", "Print Design"],
    category: "creative",
    hasDetailPage: true,
  },
  {
    id: "tennis-video",
    title: "WCHS Girls Tennis Video",
    description: "A dynamic video showcasing the WCHS Girls Tennis team, featuring smooth transitions, music integration, and compelling storytelling.",
    tags: ["Video Editing", "Clipchamp", "Storytelling"],
    category: "creative",
    hasDetailPage: true,
    fullDescription: "Created an engaging video for the WCHS Girls Tennis team using Clipchamp. The project focused on capturing the team's energy and spirit through thoughtful editing, smooth transitions, and carefully selected music that enhanced the emotional narrative.",
    role: "Video Editor & Storyteller",
    achievements: [
      "Edited footage using Clipchamp with professional polish",
      "Designed seamless transitions between scenes",
      "Integrated music to enhance emotional storytelling",
      "Delivered final video that captured team spirit and athleticism",
    ],
  },
  {
    id: "chronic-contemplations",
    title: "Chronic Contemplations",
    description: "A podcast exploring Gen Z psychology, imposter syndrome, quiet love, and the productivity paradox through reflective conversations.",
    tags: ["Podcasting", "Audio Production", "Storytelling", "Gen Z"],
    category: "creative",
    hasDetailPage: true,
    fullDescription: "Chronic Contemplations is a podcast that dives deep into the emotional and psychological landscape of Gen Z. Through thoughtful conversations and personal reflections, the show explores themes like living life versus watching life, imposter syndrome, the nature of quiet love, and the modern productivity paradox. Featured episode: 'Living Life vs Watching Life' examines the tension between experiencing moments and observing them from a distance.",
    role: "Host & Producer",
    achievements: [
      "Conceptualized and launched podcast series",
      "Produced and edited audio content with professional quality",
      "Explored complex themes with depth and nuance",
      "Available on Spotify with growing listener base",
    ],
  },
  {
    id: "art-illustration",
    title: "Art & Illustration",
    description: "Traditional media artwork including composition studies, still life practice, and mark-making explorations in graphite, charcoal, and ink.",
    tags: ["Traditional Art", "Drawing", "Illustration"],
    category: "creative",
    hasDetailPage: true,
  },
];
