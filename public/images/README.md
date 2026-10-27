# Catálogo de Imagens e Diretórios — Ateliê Steffani Torres

Diretório raiz: `public/images/`

Todas as imagens do projeto estão organizadas de forma modular e categorizada por área do site:

---

## 📁 Estrutura de Pastas

```text
public/images/
├── 📁 hero/
│   └── assets01-hero.png               # Imagem principal recortada da Steffani na Hero Section
├── 📁 sobre/
│   ├── assets-sobre01.jpg              # Retrato editorial oficial da Steffani na seção "Sobre"
│   ├── assets-sobre01-original.jpg     # Backup original de alta resolução não processado
│   ├── assets-sobre02.png              # Asset gráfico editorial complementar
│   └── assets-sobre03.png              # Asset gráfico editorial complementar
├── 📁 espaco/
│   ├── README.md                       # Guia de inserção das fotos do salão
│   ├── assets-salao01.JPEG             # Lounge de Acolhimento (cantinho de café e espelho)
│   ├── assets-salao02.JPEG             # Conforto & Sofisticação (área climatizada de circulação)
│   ├── assets-salao03.JPEG             # Consultoria & Visagismo (mesa de avaliação e atendimento)
│   └── assets-equipe.JPEG              # Equipe Especializada do ateliê
├── 📁 cursos/
│   ├── assets-consultoria.JPEG         # Mentoria VIP / Consultoria de Micropigmentação
│   ├── curso-browboost.jpg             # Método Brow Boost (versão verticalizada e com zoom)
│   ├── curso-browboost-rotated.jpg     # Arquivo fonte rotacionado
│   ├── assets-browboost.JPEG           # Arquivo original de alta resolução Brow Boost
│   ├── curso-lashlifting.jpg           # Curso de Lash Lifting (versão tratada)
│   ├── assets-lashlifting.JPEG         # Arquivo original de alta resolução Lash Lifting
│   ├── Curso-Embreve.png               # Banner oficial da formação "Destrava Brow (Fadas In Action)"
│   ├── Curso-Desktop.png               # Mockup / Referência visual desktop
│   ├── Curso-Desktop01.png             # Mockup alternativo desktop
│   ├── Curso-Mobile.png                # Mockup / Referência visual mobile
│   ├── curso-brow-lamination.jpg       # Asset de apoio / miniatura
│   ├── curso-consultoria.jpg           # Asset de apoio / miniatura
│   ├── curso-lash-lifting.jpg          # Asset de apoio / miniatura
│   └── curso-sobrancelhas.jpg          # Asset de apoio / miniatura
├── 📁 procedimentos/
│   ├── assets-padraoprocedimentos.JPEG # Arte/cartaz padrão de referência dos procedimentos
│   ├── categoria-sobrancelhas.jpg      # Card 01 • Sobrancelhas (olho e sobrancelha delineada)
│   ├── categoria-labios.jpg            # Card 02 • Tratamentos Labiais (lábios invertidos e alinhados)
│   ├── categoria-micropigmentacao.jpg  # Card 03 • Micropigmentação (foto superior de micropigmentação)
│   ├── categoria-experiencias.jpg      # Card 04 • Pacotes Exclusivos (retrato editorial Steffani)
│   ├── procedimento-sobrancelhas.jpg   # Cópia compatibilidade
│   ├── procedimento-labios.jpg         # Cópia compatibilidade
│   ├── procedimento-micropigmentacao.jpg # Cópia compatibilidade
│   └── procedimento-experiencias.jpg   # Cópia compatibilidade
└── 📁 resultados/
    ├── README.md                       # Guia para fotos de clientes e antes/depois
    ├── AntesDepois.jpg                 # Comparativo fotográfico de procedimentos
    ├── video01.mp4 ... video05.mp4     # Vídeos H.264 ultra-leves otimizados para web
    ├── imagem08-vid.mp4                # Vídeo H.264 do procedimento shadow
    ├── assets-procedimentoexclusivo.JPEG
    ├── assets-procedimentolabio.JPEG
    ├── assets-procedimentomicropigmentacao.JPEG
    └── assets-procedimentosombrancelha.JPEG
```

---

## 📌 Boas Práticas ao Adicionar Novas Imagens

1. **Destino Correto**: Nunca salve arquivos soltos na raiz de `public/images/`. Coloque-os na subpasta correspondente à seção.
2. **Nomenclatura**: Utilize kebab-case em letras minúsculas (ex: `hero-novo.png`, `espaco-recepcao.jpg`).
3. **Formatos**:
   - Fotos: `.jpg` ou `.webp` otimizados para web.
   - Elementos transparentes/recortes: `.png` ou `.webp`.
4. **Referência no Código**: Sempre use caminhos absolutos a partir de `/images/<pasta>/<nome-do-arquivo>`.
