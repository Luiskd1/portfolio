export const whatsappIAData = {
  title: "AI WhatsApp Bot SaaS Platform",
  description:
    "Enterprise SaaS platform that enables businesses to create and manage multiple conversational AI agents through WhatsApp, featuring audio transcription, real-time analytics, and an optimized queue system for high concurrency.",
  github: "https://github.com/tu-usuario/whatsapp-ai-saas",
  vercel: "https://tu-proyecto.vercel.app",
  features: [
    "Multi-Tenant & Multi-Agent Architecture with complete data isolation",
    "Full WhatsApp Business API integration with automatic audio transcription using Whisper",
    "Conversational AI System with RAG (Retrieval-Augmented Generation) using Qdrant",
    "Robust Queue System with BullMQ and three priority levels",
    "Real-Time Interactive Dashboard with WebSockets (Socket.io)",
    "Intelligent Detection and Alert System for human attention requests",
    "High Availability Architecture with robust error handling",
  ],
  technologies: [
    "Frontend: Next.js 14 (App Router) + TypeScript + Tailwind CSS",
    "Backend: NestJS + TypeScript + Prisma ORM",
    "Databases: PostgreSQL + Redis + Qdrant (Vector DB)",
    "Queue System: BullMQ for asynchronous processing",
    "AI & ML: OpenAI API (GPT-4, Whisper) + Embeddings for RAG",
    "Messaging: WhatsApp Business API (Meta Cloud API) + Webhooks",
    "Real-time: Socket.io Server & Client + WebSockets",
    "UI Components: shadcn/ui (Radix UI) + Zustand + TanStack Query",
    "Authentication: JWT custom with refresh tokens",
    "Deployment: Vercel (Frontend) + Railway/Render (Backend)",
  ],
};

