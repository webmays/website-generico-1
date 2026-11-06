// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Secao "Resultados": carrossel de videos verticais (9:16) com lightbox, grade de fotos de antes e depois e CTA para o WhatsApp.
// [AI-DO-NOT-BREAK]: O ID "resultados" e alvo da navegacao. Videos e fotos vem de CASES_CONTENT (siteContent.js).
// Videos nunca carregam antes da interacao: o card mostra so o poster (lazy) e o <video> recebe src no 1o hover (desktop)
// ou abre direto no modal (toque). O modal usa <dialog> nativo: foco preso, ESC fecha, e o Lenis para enquanto ele esta aberto.

import { useCallback, useEffect, useRef, useState } from "react";
import { CASES_CONTENT, CONTACT_INFO } from "../../data/siteContent";
import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { EditorialTitle } from "../ui/EditorialTitle";
import { BigPlayIcon, ChevronRight, CloseIcon, WhatsAppIcon } from "../ui/Icons";

const CAN_HOVER_QUERY = "(hover: hover) and (pointer: fine)";

/**
 * [AI-COMPONENT]: ReelCard
 * @description Card 9:16 com poster e icone de play, sem legenda. No desktop toca mudo no hover; o clique abre o modal.
 */
function ReelCard({ item, label, onOpen }) {
  const videoRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [isPreviewing, setIsPreviewing] = useState(false);

  // Toca assim que o src entra (1o hover) e a cada novo hover
  useEffect(() => {
    if (isPreviewing) videoRef.current?.play().catch(() => {});
  }, [isPreviewing, previewSrc]);

  if (!item.src) {
    return (
      <div className="results-reel is-placeholder" role="listitem" aria-label={CASES_CONTENT.placeholderLabel}>
        <div className="results-reel-media">
          <span className="results-reel-placeholder-mark" aria-hidden="true">TORRES</span>
          <span className="results-reel-placeholder-text">{CASES_CONTENT.placeholderLabel}</span>
        </div>
      </div>
    );
  }

  const startPreview = () => {
    if (!window.matchMedia(CAN_HOVER_QUERY).matches) return;
    if (!previewSrc) setPreviewSrc(item.src);
    setIsPreviewing(true);
  };

  const stopPreview = () => {
    setIsPreviewing(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="results-reel" role="listitem" style={{ "--ratio": item.width / item.height }}>
      <button
        type="button"
        className="results-reel-media"
        onMouseEnter={startPreview}
        onMouseLeave={stopPreview}
        onClick={() => {
          stopPreview();
          onOpen({ ...item, label });
        }}
        aria-label={`${CASES_CONTENT.playLabel} ${label}`}
      >
        <img src={item.poster} alt="" loading="lazy" decoding="async" width={item.width} height={item.height} />
        {previewSrc && (
          <video
            ref={videoRef}
            src={previewSrc}
            className={isPreviewing ? "is-playing" : ""}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
        <span className="results-reel-play" aria-hidden="true">
          <BigPlayIcon />
        </span>
      </button>
    </div>
  );
}

/**
 * [AI-COMPONENT]: ReelLightbox
 * @description Player vertical em tela cheia. Fecha com ESC, botao ou clique fora do video; o video desmonta ao fechar.
 */
function ReelLightbox({ item, onClose }) {
  const dialogRef = useRef(null);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!item || !dialog) return undefined;
    const trigger = document.activeElement;
    if (!dialog.open) dialog.showModal();
    lenis?.stop();
    document.documentElement.classList.add("has-modal-open");
    return () => {
      lenis?.start();
      document.documentElement.classList.remove("has-modal-open");
      // Devolve o foco ao card que abriu o video
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    };
  }, [item, lenis]);

  if (!item) return null;

  const videoLabel = `${CASES_CONTENT.videoAlt} ${item.label}`;

  return (
    <dialog
      ref={dialogRef}
      className="results-lightbox"
      aria-label={videoLabel}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        // Clique no fundo (fora do player) fecha
        if (e.target === e.currentTarget || e.target.classList.contains("results-lightbox-stage")) onClose();
      }}
    >
      <div className="results-lightbox-stage">
        <video
          key={item.id}
          className="results-lightbox-video"
          src={item.src}
          poster={item.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={videoLabel}
        />
        <button type="button" className="results-lightbox-close" onClick={onClose} aria-label={CASES_CONTENT.closeLabel} autoFocus>
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </dialog>
  );
}

/**
 * [AI-COMPONENT]: CasesSection
 * @example <CasesSection />
 */
export function CasesSection() {
  const reelsRef = useRef(null);
  const reelAnimationRef = useRef(null);
  const galleryRef = useRef(null);
  const [openItem, setOpenItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const [reelEdges, setReelEdges] = useState({ start: true, end: false });
  const total = CASES_CONTENT.cards.length;
  const ctaUrl = `${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CASES_CONTENT.cta.prefilledMessage)}`;

  const closeLightbox = useCallback(() => setOpenItem(null), []);

  // Setas do carrossel: desabilita nas pontas
  const updateReelEdges = () => {
    const track = reelsRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setReelEdges({ start: track.scrollLeft <= 4, end: track.scrollLeft >= maxScroll - 4 });
  };

  useEffect(() => {
    updateReelEdges();
    window.addEventListener("resize", updateReelEdges);
    return () => window.removeEventListener("resize", updateReelEdges);
  }, []);

  // Animacao suave das setas: nao usa o "smooth" nativo, que briga com o scroll-snap e da "tranco".
  // Anima scrollLeft com easing ate a posicao de snap de um card (o snap e desligado so durante a animacao).
  const cancelReelAnimation = useCallback(() => {
    if (reelAnimationRef.current) {
      cancelAnimationFrame(reelAnimationRef.current);
      reelAnimationRef.current = null;
      if (reelsRef.current) reelsRef.current.style.scrollSnapType = "";
    }
  }, []);

  useEffect(() => cancelReelAnimation, [cancelReelAnimation]);

  const scrollReels = (direction) => {
    const track = reelsRef.current;
    if (!track) return;
    cancelReelAnimation();

    // Posicao de scrollLeft em que cada card fica alinhado onde o scroll-snap o alinharia
    const styles = getComputedStyle(track);
    const snapOffset = parseFloat(styles.scrollPaddingLeft) || 0;
    const trackLeft = track.getBoundingClientRect().left;
    const positions = Array.from(track.children).map(
      (card) => card.getBoundingClientRect().left - trackLeft + track.scrollLeft - snapOffset
    );

    const start = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const desired = start + direction * track.clientWidth * 0.8;
    // Cards na direcao do clique; escolhe o que fica mais perto de ~80% da largura visivel
    const candidates = positions.filter((pos) => (direction > 0 ? pos > start + 8 : pos < start - 8));
    const best = candidates.length
      ? candidates.reduce((a, b) => (Math.abs(b - desired) < Math.abs(a - desired) ? b : a))
      : direction > 0 ? maxScroll : 0;
    const target = Math.min(Math.max(best, 0), maxScroll);
    const distance = target - start;
    if (Math.abs(distance) < 1) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.scrollLeft = target;
      return;
    }

    const duration = Math.min(1000, 550 + Math.abs(distance) * 0.3);
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const startTime = performance.now();
    track.style.scrollSnapType = "none";

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      track.scrollLeft = start + distance * easeInOutCubic(progress);
      if (progress < 1) {
        reelAnimationRef.current = requestAnimationFrame(step);
      } else {
        reelAnimationRef.current = null;
        track.style.scrollSnapType = "";
      }
    };
    reelAnimationRef.current = requestAnimationFrame(step);
  };

  // No celular a grade de fotos vira trilho: acompanha o item visivel para os indicadores.
  // Os itens tem larguras diferentes (seguem a proporcao de cada foto), entao busca o mais proximo da borda esquerda.
  const handleScroll = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const galleryRect = gallery.getBoundingClientRect();
    const edge = galleryRect.left + parseFloat(getComputedStyle(gallery).paddingLeft || 0);
    let index = 0;
    let best = Infinity;
    Array.from(gallery.children).forEach((child, i) => {
      const distance = Math.abs(child.getBoundingClientRect().left - edge);
      if (distance < best) {
        best = distance;
        index = i;
      }
    });
    // No fim do trilho o ultimo item nunca chega a borda esquerda: marca-o como ativo
    if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 4) index = total - 1;
    setActiveIndex(index);
    if (gallery.scrollLeft > 8) setHasSwiped(true);
  };

  const scrollToIndex = (index) => {
    const target = galleryRef.current?.children[index];
    target?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section id={CASES_CONTENT.id} className="results-section">
      <div className="container">
        <div className="results-head">
          <span className="meta-label">{CASES_CONTENT.metaLabel}</span>
          <EditorialTitle text={CASES_CONTENT.title} className="results-title" />
          <p className="results-subtitle">{CASES_CONTENT.subtitle}</p>
        </div>
      </div>

      {/* Carrossel de videos verticais */}
      <div className="results-reels-wrap reveal">
        <div
          ref={reelsRef}
          className="results-reels"
          role="list"
          aria-label={CASES_CONTENT.reelsLabel}
          onScroll={updateReelEdges}
          onWheel={cancelReelAnimation}
          onTouchStart={cancelReelAnimation}
          onPointerDown={cancelReelAnimation}
        >
          {CASES_CONTENT.videos.map((item, idx) => (
            <ReelCard key={item.id} item={item} label={idx + 1} onOpen={setOpenItem} />
          ))}
        </div>

        <div className="container results-reels-controls">
          <button
            type="button"
            className="results-reels-arrow is-prev"
            onClick={() => scrollReels(-1)}
            disabled={reelEdges.start}
            aria-label={CASES_CONTENT.reelsPrev}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="results-reels-arrow"
            onClick={() => scrollReels(1)}
            disabled={reelEdges.end}
            aria-label={CASES_CONTENT.reelsNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Fotos de antes e depois: grade no desktop, trilho no celular */}
      <div
        ref={galleryRef}
        className={`results-gallery ${hasSwiped ? "has-swiped" : ""}`}
        role="group"
        aria-label={CASES_CONTENT.galleryLabel}
        onScroll={handleScroll}
      >
        {CASES_CONTENT.cards.map((item, idx) => (
          <figure
            key={item.id}
            className={`results-item ${item.image ? "" : "is-placeholder"}`}
            style={{ "--ratio": item.width / item.height }}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={`${CASES_CONTENT.photoAlt} ${idx + 1}`}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
              />
            ) : (
              /* Espaco reservado para a foto: mesmo formato do card final */
              <div className="results-item-placeholder" role="img" aria-label={CASES_CONTENT.placeholderLabel}>
                <span className="results-reel-placeholder-mark" aria-hidden="true">TORRES</span>
                <span className="results-reel-placeholder-text">{CASES_CONTENT.placeholderLabel}</span>
              </div>
            )}
          </figure>
        ))}
      </div>

      {/* Navegacao do trilho: so aparece no celular (ver results.css) */}
      <div className="container results-nav reveal">
        <span className={`results-swipe-hint ${hasSwiped ? "is-hidden" : ""}`} aria-hidden="true">
          {CASES_CONTENT.swipeHint}
          <span className="results-swipe-arrow">→</span>
        </span>
        <div className="results-dots">
          {CASES_CONTENT.cards.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`results-dot ${idx === activeIndex ? "is-active" : ""}`}
              aria-label={`Ver resultado ${idx + 1} de ${total}`}
              aria-current={idx === activeIndex ? "true" : undefined}
              onClick={() => scrollToIndex(idx)}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="results-cta reveal">
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span>{CASES_CONTENT.cta.label}</span>
            <WhatsAppIcon />
          </a>
        </div>
        <p className="results-disclaimer reveal">{CASES_CONTENT.disclaimer}</p>
      </div>

      <ReelLightbox item={openItem} onClose={closeLightbox} />
    </section>
  );
}
