// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Conjunto de ícones vetoriais SVG inline semânticos e leves para a interface da Steffani.
// [AI-DO-NOT-BREAK]: Todos os SVGs possuem aria-hidden="true" e viewBox preciso para evitar reflow ou dependências externas pesadas de ícones.

/**
 * [AI-COMPONENT]: WhatsAppIcon
 * @description Ícone oficial do WhatsApp em vetor inline otimizado para botões e links.
 * @param {Object} props - Propriedades HTML do elemento SVG
 * @param {string} [props.className] - Classes utilitárias do Tailwind (ex: "w-5 h-5")
 * @example <WhatsAppIcon className="w-5 h-5 text-white" />
 */
export function WhatsAppIcon({ className = "w-[18px] h-[18px]", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: ArrowDownLine
 * @description Seta sutil direcional para baixo para pílula de horários da seção de procedimentos.
 */
export function ArrowDownLine({ className = "w-[16px] h-[16px]", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: BigPlayIcon
 * @description Ícone grande de play para o bloco de demonstração clínica em vídeo.
 */
export function BigPlayIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: ArrowUpIcon
 * @description Seta para cima vetorial para o botão de Voltar ao Topo.
 */
export function ArrowUpIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: CloseIcon
 * @description Ícone de fechar "X" vetorial para modal e drawer mobile.
 */
export function CloseIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Retrocompatibilidade limpa de import
export const CloseLine = CloseIcon;

/**
 * [AI-COMPONENT]: CheckIcon
 * @description Ícone vetorial de confirmação (check) sem emojis.
 */
export function CheckIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: ChevronRight
 * @description Chevron sutil direcional para a direita em botões de ação e CTAs.
 */
export function ChevronRight({ className = "w-4 h-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: ChevronDown
 * @description Chevron direcional para baixo para accordions e botões expansíveis.
 */
export function ChevronDown({ className = "w-4 h-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: ArrowRightShort
 * @description Ícone vetorial nítido de seta para a direita para botões editoriais.
 */
export function ArrowRightShort({ className = "w-4 h-4", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: InvestmentCoinIcon
 * @description Ícone de investimento / moeda para os fatos do procedimento.
 */
export function InvestmentCoinIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <ellipse cx="12" cy="7" rx="8" ry="3.5" />
      <path d="M4 7v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V7" />
      <path d="M4 12v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: DurationClockIcon
 * @description Ícone de relógio para duração do procedimento.
 */
export function DurationClockIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: TechniqueScissorsIcon
 * @description Ícone de tesoura / pinça de alta precisão para a técnica do procedimento.
 */
export function TechniqueScissorsIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: IncludedCoffeeIcon
 * @description Ícone de xícara de café / cappuccino especial do ateliê.
 */
/**
 * [AI-COMPONENT]: IncludedCoffeeIcon
 * @description Ícone de xícara de café / cappuccino especial do ateliê.
 */
export function IncludedCoffeeIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: SparklesIcon
 * @description Ícone vetorial de brilho/estrelas de luxo para destaques de protocolos.
 */
export function SparklesIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: ShieldCheckIcon
 * @description Ícone de escudo com check de biossegurança hospitalar e esterilização.
 */
export function ShieldCheckIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/**
 * [AI-COMPONENT]: DiamondStarIcon
 * @description Ícone de diamante lapidado para procedimentos premium e kits exclusivos.
 */
export function DiamondStarIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
      <path d="M10 3l-2 6 4 12" />
      <path d="M14 3l2 6-4 12" />
      <path d="M2 9h20" />
    </svg>
  );
}

