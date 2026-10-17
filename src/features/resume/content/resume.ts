import {
  resumeSchema,
  type Resume,
} from "~/features/resume/schemas/resume";
import { parseContent } from "~/lib/content";

const rawResume: Resume = {
  summaryParagraphs: [
    "Atuo no desenvolvimento de sistemas corporativos, arquitetura de software, integrações e automação de processos, participando de todo o ciclo de vida das aplicações, desde o entendimento do negócio e levantamento de requisitos até o desenvolvimento, implantação e sustentação em produção.",
    "Minha trajetória profissional começou na área de suporte e infraestrutura de TI, experiência que ampliou minha visão sobre ambientes corporativos e me permitiu evoluir para o desenvolvimento de software, unindo infraestrutura, engenharia de software e processos de negócio para construir soluções escaláveis e alinhadas aos objetivos da empresa.",
    "Desenvolvo aplicações web, mobile e APIs REST utilizando Python, Django, Angular, React, Flutter, PostgreSQL e SQL Server. Tenho experiência em integrações com ERPs como Sankhya, Senior e Fox, autenticação corporativa com OAuth2, LDAP e Active Directory, gestão de identidade (IAM), processamento assíncrono com Celery e Redis, além de projetos de ETL/ELT e integração de dados entre sistemas corporativos.",
    "Minha principal área de atuação é Engenharia de Software, com foco em arquitetura de software, modelagem de domínio, Business Process Management (BPM) e boas práticas de desenvolvimento. Antes de desenvolver uma solução, procuro compreender o processo de negócio, identificar oportunidades de melhoria e definir uma arquitetura que atenda aos requisitos técnicos e operacionais.",
    "Também atuo na implantação e sustentação de aplicações utilizando Docker, GitLab CI/CD, Kubernetes (K3s), Rancher, GitOps e Nginx. Conduzi a primeira iniciativa de testes de performance com k6 em um projeto da equipe, estruturando cenários de carga para apoiar estudos de capacity planning e o dimensionamento da infraestrutura antes da entrada da aplicação em produção.",
    "Atualmente curso Engenharia de Software e sou técnico em Desenvolvimento de Software pela FPFtech. Busco desafios em Engenharia de Software, arquitetura de sistemas, integrações corporativas e plataformas, contribuindo com soluções que gerem valor para o negócio, promovam eficiência operacional e evoluam de forma sustentável.",
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
