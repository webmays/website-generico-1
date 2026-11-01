// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Composicao oficial da logo em duas linhas (TORRES / beleza & ensino), usada no Header e no Footer.

import { BRAND } from "../../data/siteContent";

/**
 * [AI-COMPONENT]: BrandLogo
 * @description Conteudo textual da logo; o elemento externo (link ou div) e definido por quem usa.
 * @example <Link to="/" className="brand-logo"><BrandLogo /></Link>
 */
export function BrandLogo() {
  return (
    <>
      <span className="brand-logo__name">{BRAND.name}</span>
      <span className="brand-logo__tagline">{BRAND.subtitle}</span>
    </>
  );
}
