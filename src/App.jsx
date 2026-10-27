// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Componente raiz da aplicação configurando Header, Drawer, Roteamento, Voltar ao Topo e Footer.
// [AI-DO-NOT-BREAK]: O componente ScrollToTop reseta a posição da tela ao alternar entre rotas sem hash.

import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Header } from "./components/layout/Header";
import { MobileDrawer } from "./components/layout/MobileDrawer";
import { BackToTop } from "./components/layout/BackToTop";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { useSmoothScroll } from "./context/SmoothScrollContext";

// Code-splitting para páginas internas, mantendo o bundle inicial da HomePage enxuto
const ProcedurePage = lazy(() =>
  import("./pages/ProcedurePage").then((m) => ({ default: m.ProcedurePage }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);

/**
 * [AI-COMPONENT]: ScrollToTop
 * @description Helper silencioso que reseta a rolagem da página para o topo (0, 0) ao mudar de rota sem hash.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      scrollTo(0);
    }
  }, [pathname, scrollTo]);

  return null;
}

/**
 * [AI-COMPONENT]: App
 * @description Shell principal da aplicação controlando o estado do drawer mobile e estrutura de rotas.
 * @example <App />
 */
export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <ScrollToTop />

      {/* Navegação Principal */}
      <Header
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={() => setIsDrawerOpen((prev) => !prev)}
      />

      {/* Mobile Drawer & Overlay */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* [AI-DO-NOT-BREAK]: Rotas oficiais da aplicação */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/procedimentos/:slug" element={<ProcedurePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {/* Botão Flutuante Voltar ao Topo */}
      <BackToTop />

      {/* Rodapé Editorial */}
      <Footer />
    </>
  );
}
