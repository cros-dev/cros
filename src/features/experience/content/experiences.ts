import { parseContent } from "~/lib/content";
import { experiencesSchema } from "~/features/experience/schemas/experience";

/** Lista validada de experiências profissionais em ordem cronológica reversa. */
export const experiences = parseContent(
  experiencesSchema,
  [
    {
      id: "rede-amazonica-desenvolvedor-de-software",
      company: "Rede Amazônica",
      role: "Desenvolvedor de Software",
      startDate: "2026-01",
      endDate: null,
      summary:
        "Atuo no desenvolvimento de aplicações e plataformas corporativas, participando de todo o ciclo de vida das soluções, desde o entendimento dos processos de negócio e definição da arquitetura até o desenvolvimento, implantação e sustentação em produção.",
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
        "Participo da evolução da governança de identidades e acessos da organização, contribuindo para a transição ao ERP Senior, definição de matrizes de permissão e centralização dos dados mestres.",
        "Atuo na implantação e sustentação das aplicações utilizando Docker, GitLab CI/CD, Kubernetes (K3s), Rancher, GitOps e MkDocs, apoiando a automação da infraestrutura, a entrega contínua e a documentação técnica.",
        "Conduzi a primeira iniciativa de testes de performance com k6 em um projeto da equipe, estruturando cenários de carga e estresse para apoiar estudos de capacity planning e o dimensionamento da infraestrutura antes da entrada em produção.",
      ],
    },
    {
      id: "rede-amazonica-tecnico-de-sistemas",
      company: "Rede Amazônica",
      role: "Técnico de Sistemas",
      startDate: "2025-11",
      endDate: "2026-01",
      summary:
        "Atuei na sustentação de sistemas críticos para operações jornalísticas e na evolução de serviços corporativos, combinando infraestrutura, automação e desenvolvimento de soluções para aumentar a disponibilidade e a eficiência operacional.",
      technologies: ["Django", "Python", "n8n"],
      highlights: [
        "Garanti a disponibilidade de sistemas e equipamentos utilizados em transmissões ao vivo, atuando na resolução de incidentes e na continuidade das operações.",
        "Administrei e dei suporte ao ecossistema de produção jornalística, incluindo plataformas de ingestão, gerenciamento e distribuição de conteúdo, além da operação de enlaces de transmissão com LiveU.",
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
        "Atuei na evolução da infraestrutura de TI e na digitalização de processos corporativos, integrando desenvolvimento de software, automação e administração de ambientes para aumentar a disponibilidade dos serviços e apoiar a operação do negócio.",
      technologies: ["Django", "Grafana", "Kotlin", "Zabbix"],
      highlights: [
        "Desenvolvi APIs REST, automações e aplicações corporativas utilizando Python, Django, Kotlin e n8n para integração e customização de processos relacionados ao ERP Sankhya.",
        "Participei da governança de identidades e acessos no ERP Sankhya, administrando permissões, apoiando auditorias e contribuindo para a padronização dos processos de segurança.",
        "Implantei a plataforma GLPI para gestão de serviços de TI, estruturando catálogo de serviços, ativos, inventário, fluxos de atendimento e controles de SLA.",
        "Estruturei o monitoramento da infraestrutura utilizando Zabbix e Grafana, acompanhando servidores, redes, serviços e ambientes conteinerizados para aumentar a disponibilidade operacional.",
        "Administrei servidores Linux e Windows, ambientes virtualizados e plataformas conteinerizadas com Docker, Portainer e Docker Compose, apoiando a implantação e sustentação de aplicações corporativas.",
        "Atuei na administração da infraestrutura de redes, políticas de backup e padronização de estações de trabalho, utilizando soluções como Ubiquiti, Veeam, Duplicati, Ansible e PowerShell para aumentar a confiabilidade e a eficiência operacional.",
      ],
    },
    {
      id: "metal-aluminio-ltda-analista-de-ti-junior",
      company: "Metal Alumínio LTDA",
      role: "Analista de TI Júnior",
      startDate: "2024-09",
      endDate: "2025-04",
      summary:
        "Atuei na sustentação do ambiente tecnológico corporativo, consolidando minha base técnica em sistemas integrados de gestão e estabelecendo o terreno para assumir responsabilidades de integração e desenvolvimento.",
      technologies: ["Google Workspace", "Microsoft 365", "SQL"],
      highlights: [
        "Gerenciei as permissões de acesso, a criação de telas personalizadas e a execução de consultas SQL (SQL Server e MySQL) no ERP Sankhya para apoio à tomada de decisão e suporte à operação.",
        "Administrei identidades corporativas nas plataformas Google Workspace e Microsoft 365, além da gestão de portais institucionais em WordPress.",
        "Garanti o suporte especializado e a manutenção preventiva e corretiva da infraestrutura de hardware, CFTV e sistemas de telefonia, mantendo a alta disponibilidade dos recursos.",
      ],
    },
    {
      id: "amazoncopy-analista-de-ti-junior",
      company: "Amazoncopy",
      role: "Analista de TI Júnior",
      startDate: "2024-04",
      endDate: "2024-09",
      summary:
        "Foquei no suporte técnico de campo e na manutenção de infraestrutura corporativa, assegurando a continuidade das operações nos ambientes dos clientes.",
      technologies: [],
      highlights: [
        "Realizei manutenção preventiva e corretiva em dispositivos de impressão, aplicando ajustes mecânicos, eletrônicos e atualizações de firmware.",
        "Executei a instalação e configuração de equipamentos em ambientes corporativos, mapeando drivers e solucionando gargalos de conectividade de rede.",
        "Conduzi auditorias físicas e implantei ferramentas de inventário para o controle preciso do ciclo de vida do parque tecnológico dos clientes.",
      ],
    },
    {
      id: "exercito-brasileiro-militar",
      company: "Exército Brasileiro",
      role: "Militar",
      startDate: "2021-03",
      endDate: "2024-03",
      summary:
        "Fui responsável pela administração e suporte contínuo da infraestrutura de TI, garantindo a disponibilidade operacional de redes, servidores e estações de trabalho em um ambiente de missão crítica.",
      technologies: ["Active Directory", "Linux", "Windows"],
      highlights: [
        "Administrei contas, grupos e políticas de segurança via Active Directory, assegurando a governança de acessos e o controle de identidades.",
        "Gerenciei servidores Linux e apoiei na criação de imagens ISO personalizadas (Windows/Linux) para automatizar e padronizar a implantação ágil de estações de trabalho.",
        "Executei cabeamento estruturado, organização de racks e gerenciamento de endereçamento IP para garantir a estabilidade da conectividade local.",
        "Elaborei documentações técnicas e procedimentos operacionais padronizados para garantir a continuidade do conhecimento no setor.",
      ],
    },
  ],
  "features/experience/content/experiences.ts",
);
