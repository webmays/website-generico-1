// [AI-FILE-PURPOSE]: Módulo de re-exportação para retrocompatibilidade de imports de conteúdo textual da Landing Page.
// [AI-DO-NOT-BREAK]: Redireciona para src/data/siteContent.js (Single Source of Truth).

import {
  COURSE_CONTENT,
  AUTHORITY_CONTENT,
  CASES_CONTENT,
  CROSS_SELL_CONTENT,
  FAQ_CONTENT
} from "./siteContent";

export const COURSE_STEPS = COURSE_CONTENT.steps;
export const AUTHORITY_POINTS = AUTHORITY_CONTENT.points;
export const CASE_PHOTOS = CASES_CONTENT.photos;
export const CROSS_SELL = CROSS_SELL_CONTENT.cards;
export const FAQ = FAQ_CONTENT.items;
