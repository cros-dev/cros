import { parseContent } from "~/lib/content";
import { experiencesSchema } from "~/features/experience/schemas/experience";

/** Lista validada de experiências profissionais em ordem cronológica reversa. */
export const experiences = parseContent(
  experiencesSchema,
  [
    {
      id: "grupo-rede-amazonica-de-televisao-desenvolvedor-de-sistemas",
      company: "Grupo Rede Amazônica de Televisão",
      role: "Desenvolvedor de Sistemas",
      startDate: "2026-01",
      endDate: null,
      summary:
        "Aplicações web, mobile e APIs REST com Django REST Framework, Angular, React e Flutter; integrações com ERPs via OAuth2/LDAP/AD, processamento assíncrono com Celery e Redis, e ETL com n8n entre os ERPs Fox e Senior.",
      technologies: [
        "Angular",
        "Celery",
        "Django",
        "Flutter",
        "PostgreSQL",
        "React",
        "Redis",
        "n8n",
      ],
      highlights: [
        "Desenvolvo aplicações web, mobile e APIs REST utilizando Python, Django REST Framework, Angular, React e Flutter para automatizar processos e apoiar operações corporativas.",
        "Projeto e implemento integrações entre sistemas corporativos e ERPs, incluindo autenticação centralizada com OAuth2, LDAP e Active Directory, além de processamento assíncrono com Celery e Redis.",
        "Desenvolvo processos de ETL/ELT utilizando n8n para migração, transformação, validação e saneamento de dados entre os ERPs Fox e Senior, integrando APIs externas para enriquecimento cadastral.",
        "Contribuo para a evolução da governança de identidades e acessos, apoiando a transição para o ERP Senior, a definição de matrizes de permissão e a centralização dos dados mestres.",
        "Implanto e sustento aplicações utilizando Docker, GitLab CI/CD, Kubernetes (K3s), Rancher, GitOps e MkDocs, apoiando a automação da infraestrutura, a entrega contínua e a documentação técnica.",
        "Conduzi a primeira iniciativa de testes de performance com k6 na equipe, estruturando cenários de carga e estresse para apoiar estudos de capacity planning e o dimensionamento da infraestrutura antes da entrada em produção.",
      ],
    },
    {
      id: "grupo-rede-amazonica-de-televisao-tecnico-de-sistemas",
      company: "Grupo Rede Amazônica de Televisão",
      role: "Técnico de Sistemas",
      startDate: "2025-11",
      endDate: "2026-01",
      summary:
        "Sustentação de sistemas críticos de operação jornalística, disponibilidade de transmissões ao vivo e automações com Python, Django e n8n integradas a Active Directory e Zoho API.",
      technologies: ["Django", "Python", "n8n"],
      highlights: [
        "Atuei na sustentação de sistemas críticos para operações jornalísticas, combinando infraestrutura, automação e desenvolvimento de soluções para aumentar a disponibilidade e a eficiência operacional.",
        "Garanti a disponibilidade de sistemas e equipamentos utilizados em transmissões ao vivo, atuando na resolução de incidentes e na continuidade das operações.",
        "Administrei e prestei suporte ao ecossistema de produção jornalística, incluindo plataformas de ingestão, gerenciamento e distribuição de conteúdo, além da operação de enlaces de transmissão com LiveU.",
        "Estruturei um ambiente de homologação conteinerizado com Docker para atualização e validação da plataforma GLPI antes da implantação em produção.",
        "Contribuí para a reorganização do catálogo de serviços e dos fluxos de atendimento do GLPI, apoiando a adoção de práticas baseadas em ITIL e ITSM.",
        "Desenvolvi automações e integrações utilizando Python, Django, n8n, Active Directory, LDAP, Zoho API e IA Generativa para otimizar processos internos e reduzir atividades manuais.",
      ],
    },
    {
      id: "metal-aluminio-ltda-analista-de-ti-pleno",
      company: "Metal Alumínio LTDA",
      role: "Analista de TI Pleno",
      startDate: "2025-04",
      endDate: "2025-10",
      summary:
        "APIs REST e automações para o ERP Sankhya com Django e Kotlin, governança de identidades e acessos, e monitoramento de infraestrutura com Zabbix e Grafana.",
      technologies: ["Django", "Grafana", "Kotlin", "Zabbix"],
      highlights: [
        "Atuei na evolução da infraestrutura de TI e na digitalização de processos corporativos, integrando desenvolvimento de software, automação e administração de ambientes para aumentar a disponibilidade dos serviços e apoiar a operação do negócio.",
        "Desenvolvi APIs REST, automações e aplicações corporativas utilizando Python, Django, Kotlin e n8n para integração e customização de processos relacionados ao ERP Sankhya.",
        "Participei da governança de identidades e acessos no ERP Sankhya, administrando permissões, apoiando auditorias e contribuindo para a padronização dos processos de segurança.",
        "Implantei a plataforma GLPI para gestão de serviços de TI, estruturando catálogo de serviços, inventário de ativos, fluxos de atendimento e controles de SLA.",
        "Estruturei o monitoramento da infraestrutura utilizando Zabbix e Grafana, acompanhando servidores, redes, serviços e ambientes conteinerizados para aumentar a disponibilidade operacional.",
        "Administrei servidores Linux e Windows, ambientes virtualizados e plataformas conteinerizadas com Docker, Portainer e Docker Compose, apoiando a implantação e sustentação de aplicações corporativas.",
        "Gerenciei a infraestrutura de redes, políticas de backup e padronização de estações de trabalho utilizando Ubiquiti, Veeam, Duplicati, Ansible e PowerShell, aumentando a confiabilidade e a eficiência operacional.",
      ],
    },
    {
      id: "metal-aluminio-ltda-analista-de-ti-junior",
      company: "Metal Alumínio LTDA",
      role: "Analista de TI Júnior",
      startDate: "2024-09",
      endDate: "2025-04",
      summary:
        "Consultas SQL e telas personalizadas no ERP Sankhya, administração de identidades corporativas (Google Workspace, Microsoft 365) e sustentação de infraestrutura.",
      technologies: ["Google Workspace", "Microsoft 365", "SQL"],
      highlights: [
        "Atuei na sustentação do ambiente tecnológico corporativo, consolidando minha base técnica em sistemas integrados de gestão e evoluindo para atividades de integração e desenvolvimento.",
        "Gerenciei permissões de acesso, criei telas personalizadas e desenvolvi consultas SQL (SQL Server e MySQL) no ERP Sankhya para apoiar a operação e a tomada de decisão.",
        "Administrei identidades corporativas nas plataformas Google Workspace e Microsoft 365, além da gestão de portais institucionais em WordPress.",
        "Realizei suporte especializado e manutenção preventiva e corretiva da infraestrutura de hardware, CFTV e sistemas de telefonia, contribuindo para a alta disponibilidade dos recursos.",
      ],
    },
    {
      id: "amazoncopy-analista-de-ti-junior",
      company: "Amazoncopy",
      role: "Analista de TI Júnior",
      startDate: "2024-04",
      endDate: "2024-09",
      summary:
        "Suporte técnico de campo, manutenção de dispositivos de impressão e infraestrutura de rede em ambientes corporativos.",
      technologies: [],
      highlights: [
        "Atuei no suporte técnico de campo e na manutenção da infraestrutura de TI em ambientes corporativos, assegurando a continuidade das operações dos clientes.",
        "Realizei manutenção preventiva e corretiva em dispositivos de impressão, executando ajustes mecânicos, eletrônicos e atualizações de firmware.",
        "Instalei e configurei equipamentos em ambientes corporativos, realizando mapeamento de drivers e solucionando problemas de conectividade de rede.",
        "Conduzi auditorias físicas e implantei ferramentas de inventário para aprimorar o controle do ciclo de vida dos ativos de TI.",
      ],
    },
    {
      id: "exercito-brasileiro-militar",
      company: "Exército Brasileiro",
      role: "Militar",
      startDate: "2021-03",
      endDate: "2024-03",
      summary:
        "Administração de infraestrutura de TI em ambiente de missão crítica, gestão de Active Directory e padronização de estações de trabalho Windows/Linux.",
      technologies: ["Active Directory", "Linux", "Windows"],
      highlights: [
        "Fui responsável pela administração e sustentação da infraestrutura de TI, garantindo a disponibilidade operacional de redes, servidores e estações de trabalho em ambiente de missão crítica.",
        "Administrei contas, grupos e políticas de segurança utilizando Active Directory, assegurando a governança de acessos e o gerenciamento de identidades.",
        "Gerenciei servidores Linux e participei da criação de imagens ISO personalizadas (Windows e Linux), padronizando e automatizando a implantação de estações de trabalho.",
        "Executei atividades de cabeamento estruturado, organização de racks e gerenciamento de endereçamento IP para garantir a estabilidade da infraestrutura de rede.",
        "Elaborei documentação técnica e procedimentos operacionais padronizados, contribuindo para a continuidade do conhecimento e a padronização dos processos do setor.",
      ],
    },
  ],
  "features/experience/content/experiences.ts",
);
