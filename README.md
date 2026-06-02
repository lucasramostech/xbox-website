# Site Xbox — Simples

Site simples da Xbox feito para estudo de front-end. Landing page responsiva com animações de scroll.

## Tecnologias

- HTML
- CSS
- JavaScript
- [GSAP](https://gsap.com/) + ScrollTrigger (animações)

## Funcionalidades

- Hero animado com console e controles que se movem ao rolar a página
- Animação de fade-in (reveal) no hero e nos cards ao entrar na tela
- Navbar fixa com efeito ao scrollar
- Menu responsivo no mobile
- Cards de jogos com hover
- Grid completo com 9 jogos
- Footer com faixa em destaque
- Navegação por âncoras com scroll suave
- Layout responsivo (desktop, tablet e mobile)

## Versões

- **v1** — Landing page base com hero, seção sobre e cards de jogos.
- **v2** — Grid expandido para 9 jogos, footer, ajustes de responsividade e refinamento das animações de scroll.
- **v3** (atual) — Animação de reveal (fade-in) no hero e cards via IntersectionObserver; animações de scroll separadas para desktop e mobile com `ScrollTrigger.matchMedia` (escala extra no mobile); scroll suave por âncoras.

## Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/lucasramostech/xbox-website.git
```

2. Abra `index.html` no navegador (ou use Live Server).

## Estrutura

```
├── index.html
├── style.css
├── script.js
├── Assets/
└── Fonts/
```

## Observação

Projeto de estudo, sem fins comerciais. Xbox é marca registrada da Microsoft.