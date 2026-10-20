import crosInicioClaro from "~/assets/projects/cros-dev-br/01-inicio-claro.webp";
import crosInicioEscuro from "~/assets/projects/cros-dev-br/02-inicio-escuro.webp";
import crosProjetos from "~/assets/projects/cros-dev-br/03-projetos.webp";
import crosCurriculo from "~/assets/projects/cros-dev-br/04-curriculo.webp";
import crosInicioCelular from "~/assets/projects/cros-dev-br/05-inicio-celular.webp";
import zonaAzulPainel from "~/assets/projects/zona-azul/01-painel.webp";
import zonaAzulGraficos from "~/assets/projects/zona-azul/02-graficos.webp";
import zonaAzulDetalheOcorrencia from "~/assets/projects/zona-azul/03-detalhe-ocorrencia.webp";
import zonaAzulNovaOcorrencia from "~/assets/projects/zona-azul/04-nova-ocorrencia.webp";
import zonaAzulHomologacao from "~/assets/projects/zona-azul/05-homologacao.webp";
import zonaAzulEscalas from "~/assets/projects/zona-azul/06-escalas.webp";
import zonaAzulAppSetores from "~/assets/projects/zona-azul/07-app-setores.webp";
import zonaAzulAppOcorrencias from "~/assets/projects/zona-azul/08-app-ocorrencias.webp";
import zonaAzulAppDetalhe from "~/assets/projects/zona-azul/09-app-detalhe.webp";
import zonaAzulAppMotivo from "~/assets/projects/zona-azul/10-app-motivo.webp";
import zonaAzulAppCategoriasSinalizacao from "~/assets/projects/zona-azul/11-app-categorias-sinalizacao.webp";
import zonaAzulAppItensSinalizacao from "~/assets/projects/zona-azul/12-app-itens-sinalizacao.webp";
import zonaAzulAppVandalismo from "~/assets/projects/zona-azul/13-app-vandalismo.webp";
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
        "Sistema para operadoras de estacionamento rotativo em vias públicas: líderes de campo registram pelo celular as vagas que ficaram indisponíveis em cada rua, e a supervisão valida, homologa e acompanha a receita perdida, no lugar de planilhas e mensagens.",
      highlights: [
        "App do líder para registrar ocorrências em campo, com fotos enviadas direto ao armazenamento por URLs pré-assinadas compatíveis com S3 e fila para uso sem conexão.",
        "Validação em etapas (líder, assistente e supervisão), com permissões por perfil e histórico de cada ocorrência.",
        "Receita perdida calculada por vaga, hora e tarifa, e prejuízo de vandalismo por item de sinalização danificado, com valores congelados no registro.",
        "Painel com indicadores por rua, área e motivo, cards configuráveis e exportação em Excel no formato exigido pelo órgão gestor.",
        "Escalas semanais da liderança por rua, com titulares e cobertura.",
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
      gallery: [
        {
          src: zonaAzulPainel,
          alt: "Painel com receita perdida, ocorrências e vagas afetadas no período e gráfico de receita perdida por dia",
          width: 1600,
          height: 1075,
        },
        {
          src: zonaAzulGraficos,
          alt: "Gráficos de receita perdida por setor, motivo, área e subárea, com o detalhe de uma barra em cada gráfico",
          width: 1600,
          height: 1075,
        },
        {
          src: zonaAzulDetalheOcorrencia,
          alt: "Detalhe de uma ocorrência com dados, cálculo da receita perdida, fotos de campo e linha do tempo da validação",
          width: 1600,
          height: 1075,
        },
        {
          src: zonaAzulNovaOcorrencia,
          alt: "Formulário de nova ocorrência preenchido, com vagas selecionadas, fotos e total estimado em tempo real",
          width: 1600,
          height: 1075,
        },
        {
          src: zonaAzulHomologacao,
          alt: "Ocorrência validada aguardando a homologação da supervisão, com a linha do tempo da esteira",
          width: 1600,
          height: 1075,
        },
        {
          src: zonaAzulEscalas,
          alt: "Escala semanal de líderes titulares por setor",
          width: 1600,
          height: 1075,
        },
        {
          src: zonaAzulAppSetores,
          alt: "App do líder: setores titulares e de cobertura como backup",
          width: 800,
          height: 1512,
        },
        {
          src: zonaAzulAppOcorrencias,
          alt: "App do líder: lista de ocorrências com busca e filtro por status",
          width: 800,
          height: 1512,
        },
        {
          src: zonaAzulAppDetalhe,
          alt: "App do líder: detalhe da ocorrência com fotos comprobatórias",
          width: 800,
          height: 1512,
        },
        {
          src: zonaAzulAppMotivo,
          alt: "App do líder: escolha do motivo ao registrar uma ocorrência",
          width: 800,
          height: 1512,
        },
        {
          src: zonaAzulAppCategoriasSinalizacao,
          alt: "App do líder: categorias do catálogo de itens de sinalização",
          width: 800,
          height: 1512,
        },
        {
          src: zonaAzulAppItensSinalizacao,
          alt: "App do líder: seleção de placas danificadas com quantidade",
          width: 800,
          height: 1512,
        },
        {
          src: zonaAzulAppVandalismo,
          alt: "App do líder: ocorrência de vandalismo de sinalização com itens e período preenchidos",
          width: 800,
          height: 1512,
        },
      ],
    },
    {
      slug: "cros-dev-br",
      title: "cros.dev.br",
      context: "personal",
      featured: false,
      summary:
        "Portfólio e currículo com conteúdo tipado e validado, design system próprio e todas as páginas pré-renderizadas, publicadas sem servidor de aplicação.",
      highlights: [
        "Conteúdo em arquivos tipados e validados no build; conteúdo inválido interrompe a publicação.",
        "Design system próprio com tema claro e escuro e currículo imprimível em A4.",
        "Galeria com capturas reproduzíveis por ferramenta própria: moldura, assinatura e autoria embutida na imagem.",
        "Cada entrega passa por lint, tipos, testes e build antes de entrar no ar.",
      ],
      technologies: [
        "React Router",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zod",
        "Vite",
        "Vitest",
      ],
      status: "in_progress",
      startDate: "2026-10",
      endDate: null,
      links: { repositoryUrl: "https://github.com/cros-dev/cros" },
      gallery: [
        {
          src: crosInicioClaro,
          alt: "Página inicial no tema claro com nome, título profissional e atalhos para projetos e contato",
          width: 1600,
          height: 1075,
        },
        {
          src: crosInicioEscuro,
          alt: "Página inicial no tema escuro",
          width: 1600,
          height: 1075,
        },
        {
          src: crosProjetos,
          alt: "Linha do tempo dos projetos em destaque na página inicial",
          width: 1600,
          height: 1075,
        },
        {
          src: crosCurriculo,
          alt: "Currículo em formato de documento, pronto para impressão",
          width: 1600,
          height: 1075,
        },
        {
          src: crosInicioCelular,
          alt: "Página inicial no celular, no tema escuro",
          width: 800,
          height: 1512,
        },
      ],
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
