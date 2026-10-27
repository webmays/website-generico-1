// [AI-FILE-PURPOSE]: Módulo de re-exportação para retrocompatibilidade de imports de site/navegação.
// [AI-DO-NOT-BREAK]: Redireciona para src/data/siteContent.js (Single Source of Truth).

import {
  CONTACT_INFO,
  SECTIONS as _SECTIONS,
  DARK_SECTION_IDS as _DARK_SECTION_IDS,
  NAV_LINKS
} from "./siteContent";

export const WHATSAPP_URL = CONTACT_INFO.whatsappRaw;
export const INSTAGRAM_URL = CONTACT_INFO.instagramUrl;
export const CONTACT_EMAIL = CONTACT_INFO.email;
export const PHONE_DISPLAY = CONTACT_INFO.phoneDisplay;
export const OPENING_HOURS = CONTACT_INFO.openingHours;

export const SECTIONS = _SECTIONS;
export const DARK_SECTION_IDS = _DARK_SECTION_IDS;

export const DESKTOP_NAV = NAV_LINKS.desktop;
export const MOBILE_NAV = NAV_LINKS.mobile;
export const FOOTER_NAV = NAV_LINKS.footer;
