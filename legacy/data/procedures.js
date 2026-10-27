// [AI-FILE-PURPOSE]: Módulo de re-exportação para retrocompatibilidade de imports de procedimentos.
// [AI-DO-NOT-BREAK]: Redireciona para src/data/proceduresData.js (Single Source of Truth).

export {
  PROCEDURES,
  PROCEDURE_PAGE_LABELS,
  getProcedureBySlug,
  procedurePath
} from "./proceduresData";
