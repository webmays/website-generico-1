// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Seção de Demonstração em Vídeo na Prática, transmitindo transparência técnica e acolhimento clínico.
// [AI-DO-NOT-BREAK]: O bloco mantém proporção panorâmica com botão central de play circular com borda marrom.

import { VIDEO_CONTENT } from "../../data/siteContent";
import { BigPlayIcon } from "../ui/Icons";

/**
 * [AI-COMPONENT]: VideoSection
 * @description Demonstração audiovisual com botão interativo de play e notas técnicas de biossegurança.
 * @example <VideoSection />
 */
export function VideoSection() {
  return (
    // [AI-STYLE-RULE]: Fundo Branco Aquecido (Warm White #EEE8DF), bloco de vídeo centralizado em 16:9
    <section className="section-spacing-sm bg-warm-white">
      <div className="container">
        <div className="max-w-[680px] mx-auto text-center mb-8">
          <span className="meta-label">{VIDEO_CONTENT.metaLabel}</span>
          <h2>{VIDEO_CONTENT.title}</h2>
          <p className="mt-2 mx-auto">
            {VIDEO_CONTENT.subtitle}
          </p>
        </div>

        {/* [AI-EDIT-ZONE]: Bloco de vídeo ou embed futuro */}
        <div className="video-preview-block" aria-label={VIDEO_CONTENT.ariaLabel}>
          <div className="video-play-btn" aria-hidden="true">
            <BigPlayIcon />
          </div>
          <span className="photo-meta">{VIDEO_CONTENT.placeholder}</span>
          <p className="mt-4 text-[0.85rem] text-[#111111]/60">
            {VIDEO_CONTENT.note}
          </p>
        </div>
      </div>
    </section>
  );
}
