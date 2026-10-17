import {
  resumeSchema,
  type Resume,
} from "~/features/resume/schemas/resume";
import { parseContent } from "~/lib/content";

const rawResume: Resume = {
  summaryParagraphs: [
    "Desenvolvedor de Software com experiência em sistemas corporativos, integração de sistemas, arquitetura de software e automação de processos. Atualmente curso Engenharia de Software e atuo em todo o ciclo de vida das aplicações, desde o entendimento do negócio e levantamento de requisitos até o desenvolvimento, implantação e sustentação em produção.",
    "Minha trajetória profissional começou na área de suporte e infraestrutura de TI, proporcionando uma visão ampla sobre ambientes corporativos, o que me permitiu evoluir naturalmente para o desenvolvimento de software. Essa experiência me permite conectar infraestrutura, arquitetura e processos de negócio na construção de soluções escaláveis e sustentáveis.",
    "Desenvolvo aplicações web, mobile e APIs REST, além de integrações entre sistemas corporativos e ERPs, autenticação corporativa, automação de processos e práticas de DevOps, com foco na geração de valor para o negócio, eficiência operacional e sustentabilidade das aplicações ao longo do tempo.",
  ],
  education: [
    {
      title: "Graduação em Engenharia de Software",
      institution: "Faculdade FPFtech",
      startDate: "2026-03",
      endDate: "2029-12",
    },
    {
      title: "Curso Técnico em Desenvolvimento de Software",
      institution: "FPFtech",
      startDate: "2024-03",
      endDate: "2025-07",
    },
  ],
  languages: [
    { label: "Português", level: "nativo" },
    { label: "Inglês", level: "intermediário" },
    { label: "Espanhol", level: "básico" },
  ],
  skillGroups: [
    {
      category: "Linguagens",
      items: ["Python", "JavaScript", "TypeScript", "SQL", "Kotlin"],
    },
    {
      category: "Frameworks",
      items: ["Django", "Django REST Framework", "Angular", "React", "Flutter"],
    },
    {
      category: "Banco de Dados",
      items: ["PostgreSQL", "SQL Server", "MySQL"],
    },
    {
      category: "Integrações e Identidade",
      items: [
        "REST APIs",
        "OAuth2",
        "LDAP",
        "Active Directory",
        "ETL/ELT",
        "n8n",
      ],
    },
    {
      category: "DevOps",
      items: [
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
        "Rancher",
        "GitOps",
        "Nginx",
      ],
    },
    {
      category: "Infraestrutura e Monitoramento",
      items: [
        "Linux",
        "Windows Server",
        "VMware",
        "Hyper-V",
        "XCP-ng",
        "Zabbix",
        "Grafana",
        "k6",
      ],
    },
  ],
};

/** Conteúdo editorial validado do documento de currículo. */
export const resume: Resume = parseContent(
  resumeSchema,
  rawResume,
  "src/features/resume/content/resume.ts",
);
