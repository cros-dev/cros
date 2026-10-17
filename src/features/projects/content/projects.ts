import { parseContent } from "~/lib/content";
import { projectsSchema } from "~/features/projects/schemas/project";

/** Lista validada de projetos do portfólio. */
export const projects = parseContent(
  projectsSchema,
  [
    {
      slug: "zona-azul",
      title: "Zona Azul",
      context: "personal",
      featured: true,
      summary:
        "Sistema para supervisão de setores de estacionamento rotativo, substituindo o controle manual por planilhas e mensagens.",
      highlights: [
        "Registro de ocorrências em campo com fotos enviadas direto ao armazenamento por URLs pré-assinadas compatíveis com S3.",
        "Esteira de validação com permissões por perfil e histórico de cada ocorrência.",
        "Painel com série diária e indicadores por setor e por motivo.",
      ],
      technologies: [
        "Django REST Framework",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "React Native",
        "MinIO",
      ],
      status: "in_progress",
      startDate: "2026-07",
      endDate: null,
    },
    {
      slug: "inventario-de-infraestrutura",
      title: "Inventário de infraestrutura",
      context: "corporate",
      featured: true,
      summary:
        "Plataforma interna que consolida servidores legados, hosts Docker e clusters Kubernetes em um inventário único.",
      highlights: [
        "Coleta periódica de telemetria e reconciliação de hosts com processamento assíncrono agendado.",
        "API REST e interface web para consulta de servidores, aplicações e infraestrutura.",
        "Deploy em Kubernetes por reconciliação GitOps, com frontend e API em imagens separadas.",
      ],
      technologies: [
        "Django REST Framework",
        "React",
        "Celery",
        "Redis",
        "PostgreSQL",
        "Zabbix",
        "Kubernetes (k3s)",
        "Docker",
      ],
      status: "in_progress",
      startDate: "2026-07",
      endDate: null,
    },
    {
      slug: "plataforma-de-entrega-gitops",
      title: "Plataforma de entrega GitOps",
      context: "corporate",
      featured: true,
      summary:
        "Padronização da entrega de aplicações internas, do template inicial do projeto ao deploy em Kubernetes.",
      highlights: [
        "CLI de scaffolding que compõe camadas de aplicação e infraestrutura conforme o destino de deploy.",
        "Pipeline CI/CD com build de imagens multi-stage, preparação de ambiente e segredos, deploy em desenvolvimento e promoção manual para produção.",
        "Reconciliação contínua dos ambientes a partir de um repositório GitOps.",
      ],
      technologies: [
        "GitLab CI/CD",
        "Docker",
        "Kubernetes (k3s)",
        "Fleet",
        "Helm",
        "Shell",
      ],
      status: "in_progress",
      startDate: null,
      endDate: null,
    },
    {
      slug: "faturamento-e-emissao-fiscal",
      title: "Faturamento e emissão fiscal",
      context: "corporate",
      featured: false,
      summary:
        "Sistema de faturamento recorrente com emissão de notas fiscais de comunicação (NFCom) e integração com ERP, em manutenção evolutiva.",
      highlights: [
        "Faturamento em lote agendado, com controle de concorrência e fila de emissão.",
        "Integração com ERP e com portal de documentos fiscais eletrônicos.",
        "Interface web para acompanhamento da fila de emissão e do faturamento.",
      ],
      technologies: [
        "Django",
        "Flask",
        "React",
        "PostgreSQL",
        "SQL Server",
        "Celery",
      ],
      status: "maintenance",
      startDate: null,
      endDate: null,
    },
  ],
  "features/projects/content/projects.ts",
);
