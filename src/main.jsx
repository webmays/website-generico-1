// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Ateliê Steffani Torres Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Ponto de entrada do React que inicializa o BrowserRouter, o SmoothScrollProvider e renderiza a App na DOM.
// [AI-DO-NOT-BREAK]: A ordem dos Providers (BrowserRouter -> SmoothScrollProvider -> App) é necessária para navegação e rolagem suave funcionarem em harmonia.

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import { App } from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
