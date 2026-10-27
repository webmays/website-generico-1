// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Componente semântico de navegação inteligente para âncoras locais e cross-route.
// [AI-DO-NOT-BREAK]: Se estiver na Home ('/'), previne navegação padrão e rola suavemente via Lenis. Se estiver em página interna (/procedimentos/:slug), navega para /#target.

import { useLocation, useNavigate } from "react-router";
import { useSmoothScroll } from "../../context/SmoothScrollContext";

/**
 * [AI-COMPONENT]: SectionLink
 * @description Link híbrido inteligente: executa rolagem suave (Lenis) se já estiver na Home, ou redireciona via React Router para a Home com o hash desejado.
 * @param {Object} props - Propriedades do componente
 * @param {string} [props.target] - ID da seção de destino sem hash (ex: "procedimentos", "metodo")
 * @param {string} [props.to] - Caminho com hash alternativo (ex: "#procedimentos")
 * @param {React.ReactNode} props.children - Conteúdo visível do link
 * @param {string} [props.className] - Classes CSS ou utilitários Tailwind
 * @param {Function} [props.onClick] - Callback opcional executado ao clicar
 * @param {number} [props.offset=-40] - Deslocamento em pixels no cálculo da rolagem
 * @example <SectionLink target="procedimentos" className="nav-link">Procedimentos</SectionLink>
 */
export function SectionLink({
  to,
  target,
  children,
  className,
  onClick,
  offset = -90,
  ...props
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo } = useSmoothScroll();

  const targetId = target || (to && to.startsWith("#") ? to.slice(1) : "");

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    if (!targetId) return;

    e.preventDefault();

    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        scrollTo(el, offset);
      } else {
        scrollTo(`#${targetId}`, offset);
      }
      try {
        window.history.replaceState(null, "", `#${targetId}`);
      } catch {
        // Ignora silenciosamente em ambientes restritos
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const href = targetId ? `/#${targetId}` : to || "#";

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
