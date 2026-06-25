
Readme · MD
# Site Xbox — Simples
 
Site simples da Xbox feito para estudo de front-end. Landing page responsiva com animações de scroll.
 
## Demo
 
🔗 [Ver projeto online](https://lucasramostech.github.io/xbox-website/)
 
## Tecnologias
 
* HTML
* CSS
* JavaScript
* [GSAP](https://gsap.com/) + ScrollTrigger (animações)
## Funcionalidades
 
* Hero animado com console e controles que se movem ao rolar a página
* Animação de fade-in (reveal) no hero e nos cards ao entrar na tela
* Navbar fixa com efeito ao scrollar
* Menu responsivo no mobile
* Cards de jogos com hover
* Grid completo com 9 jogos
* Seção de destaques (highlights) com carrossel automático que troca imagem e título a cada 10s, com efeito de fade
* Footer com faixa em destaque
* Navegação por âncoras com scroll suave
* Layout responsivo (desktop, tablet e mobile)
## Versões
 
* v1 — Landing page base com hero, seção sobre e cards de jogos.
* v2 — Grid expandido para 9 jogos, footer, ajustes de responsividade e refinamento das animações de scroll.
* v3 — Animação de reveal (fade-in) no hero e cards via IntersectionObserver; animações de scroll separadas para desktop e mobile com `ScrollTrigger.matchMedia` (escala extra no mobile); scroll suave por âncoras.
* v4 (atual) — Seção de destaques com carrossel automático (Doom Eternal, Halo Infinite, Red Dead Redemption 2, Forza Horizon), transição com fade e layout dividido (texto + imagem) responsivo.
## Como rodar localmente
 
1. Clone o repositório:
```
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