import type { Project } from "~/features/projects/schemas/project";

/** Rótulos em português para o contexto de cada projeto. */
export const PROJECT_CONTEXT_LABELS: Record<Project["context"], string> = {
  personal: "Projeto pessoal",
  corporate: "Projeto corporativo",
};

/** Rótulos em português para o status de ciclo de vida do projeto. */
export const PROJECT_STATUS_LABELS: Record<Project["status"], string> = {
  in_progress: "Em andamento",
  completed: "Concluído",
  maintenance: "Em manutenção",
};
