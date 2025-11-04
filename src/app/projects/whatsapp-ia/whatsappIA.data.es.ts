export const whatsappIADataEs = {
  title: "Plataforma SaaS de Bot AI para WhatsApp",
  description:
    "Plataforma SaaS empresarial que permite a las empresas crear y gestionar múltiples agentes de IA conversacionales a través de WhatsApp, con transcripción de audio, análisis en tiempo real y un sistema de colas optimizado para alta concurrencia.",
  github: "https://github.com/tu-usuario/whatsapp-ai-saas",
  vercel: "https://tu-proyecto.vercel.app",
  features: [
    "Arquitectura Multi-Tenant y Multi-Agente con aislamiento completo de datos",
    "Integración completa con WhatsApp Business API con transcripción automática de audio usando Whisper",
    "Sistema de IA Conversacional con RAG (Retrieval-Augmented Generation) usando Qdrant",
    "Sistema Robusto de Colas con BullMQ y tres niveles de prioridad",
    "Dashboard Interactivo en Tiempo Real con WebSockets (Socket.io)",
    "Sistema Inteligente de Detección y Alertas para solicitudes de atención humana",
    "Arquitectura de Alta Disponibilidad con manejo robusto de errores",
  ],
  technologies: [
    "Frontend: Next.js 14 (App Router) + TypeScript + Tailwind CSS",
    "Backend: NestJS + TypeScript + Prisma ORM",
    "Bases de Datos: PostgreSQL + Redis + Qdrant (Vector DB)",
    "Sistema de Colas: BullMQ para procesamiento asíncrono",
    "IA & ML: OpenAI API (GPT-4, Whisper) + Embeddings para RAG",
    "Mensajería: WhatsApp Business API (Meta Cloud API) + Webhooks",
    "Tiempo Real: Socket.io Server & Client + WebSockets",
    "Componentes UI: shadcn/ui (Radix UI) + Zustand + TanStack Query",
    "Autenticación: JWT personalizado con refresh tokens",
    "Deployment: Vercel (Frontend) + Railway/Render (Backend)",
  ],
};

