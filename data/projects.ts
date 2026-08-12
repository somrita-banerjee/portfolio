export interface Project {
    id: string;
    num: string;
    category: string;
    title: string;
    description: string;
    stack: string[];
    live: string;
    github: string;
    image: string;
    contributions: string[];
}

export const projectsData: Project[] = [
    {
        id: "ecommerce-platform",
        num: "01",
        category: "Full Stack",
        title: "Modern E-Commerce Platform",
        description:
            "A high-performance full-stack online shopping platform with real-time inventory and Stripe payments.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe"],
        live: "https://example.com/demo-ecommerce",
        github: "https://github.com/somrita-banerjee/ecommerce-platform",
        image: "/assets/work/thumb1.png",
        contributions: [
            "Architected full-stack architecture with Next.js App Router and server-side rendering for optimal SEO and performance.",
            "Designed and implemented RESTful backend APIs for product catalog management, cart state, and order workflows.",
            "Integrated Stripe webhooks and JWT-based user authentication ensuring secure checkout transactions.",
        ],
    },
    {
        id: "ai-task-manager",
        num: "02",
        category: "Web Application",
        title: "AI-Powered Task & Sprint Manager",
        description:
            "Smart task management dashboard leveraging AI suggestions to optimize developer workflow and sprint velocity.",
        stack: ["React", "TypeScript", "NestJS", "MongoDB", "Tailwind CSS", "OpenAI API"],
        live: "https://example.com/demo-taskmanager",
        github: "https://github.com/somrita-banerjee/ai-task-manager",
        image: "/assets/work/thumb2.png",
        contributions: [
            "Engineered dynamic drag-and-drop Kanban interface with responsive state management using React and Tailwind.",
            "Built NestJS microservices integrated with MongoDB for real-time task sync and automated priority scoring.",
            "Designed contextual AI prompt pipelines to auto-generate sprint subtasks and estimate completion timelines.",
        ],
    },
    {
        id: "collaborative-docs",
        num: "03",
        category: "Distributed Systems",
        title: "Real-time Collaborative Workspace",
        description:
            "Multi-user collaborative document editor with conflict resolution and live presence indicators.",
        stack: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Redis", "Tailwind CSS"],
        live: "https://example.com/demo-collab",
        github: "https://github.com/somrita-banerjee/collaborative-workspace",
        image: "/assets/work/thumb3.png",
        contributions: [
            "Implemented WebSocket server cluster with Redis Pub/Sub for sub-50ms document sync across concurrent sessions.",
            "Developed operational transformation (OT) algorithms to handle conflict-free simultaneous document editing.",
            "Created responsive user interface with live cursor tracking, active collaborator list, and dark mode support.",
        ],
    },
];
