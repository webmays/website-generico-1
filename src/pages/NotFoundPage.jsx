// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Página de Erro 404 para rotas inexistentes com layout editorial e botão de retorno à Home.
// [AI-DO-NOT-BREAK]: Rota curinga `path="*"` no React Router.

import { Link } from "react-router";
import { NOT_FOUND_CONTENT } from "../data/siteContent";

/**
 * [AI-COMPONENT]: NotFoundPage
 * @description Exibe mensagem amigável e botão acessível de volta para o início quando uma URL não existe.
 * @example <NotFoundPage />
 */
export function NotFoundPage() {
  return (
    // [AI-STYLE-RULE]: Fundo Off-white #F6F3EE, texto preto e botão preto #111111 com área de toque acessível
    <main className="pt-36 pb-24 min-h-screen bg-off-white flex items-center justify-center text-center">
      <div className="container max-w-lg">
        <span className="meta-label">{NOT_FOUND_CONTENT.badge}</span>
        <h1 className="text-4xl sm:text-5xl font-serif text-black mb-4">
          {NOT_FOUND_CONTENT.title}
        </h1>
        <p className="text-black/70 mb-8">
          {NOT_FOUND_CONTENT.description}
        </p>
        <Link to="/" className="btn btn-primary inline-flex">
          {NOT_FOUND_CONTENT.buttonLabel}
        </Link>
      </div>
    </main>
  );
}
