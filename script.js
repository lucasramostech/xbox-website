
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
window.scrollTo(0, 0);

//GSAP para animação do scroll computadores e mobile 
ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.two',
                start: '0% 95%',
                end: '40% 50%',
                scrub: true,
            },
        });

        timeline.to('#xbox360', {
            top: '150%',
            left: '15%',
            rotation: 360,
            ease: 'none',
        });

        timeline.to('#controle', {
            top: '150%',
            left: '36%',
            rotation: 410,
            ease: 'none',
        }, "<");

        timeline.to('#rewards', {
            top: '150%',
            left: '1%',
            rotation: 310,
            ease: 'none',
        }, "<");
    },

    //Responsivo para celulares
    "(max-width: 768px)": function () {
        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.two',
                start: '0% 95%',
                end: '20% 50%',
                scrub: true,
            },
        });

        timeline.to('#xbox360', {
            top: '130%',
            left: '40%',
            rotation: 360,
            ease: 'none',
            scale: 1.5,
        });

        timeline.to('#controle', {
            top: '125%',
            left: '75%',
            rotation: 410,
            ease: 'none',
            scale: 2,
        }, "<");

        timeline.to('#rewards', {
            top: '125%',
            left: '10%',
            rotation: 310,
            ease: 'none',
            scale: 2,
        }, "<");
    },
});


// mini-animação do nav
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

const hamburger = document.getElementById("logotipo");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});



// Animação do scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hero, .card').forEach(el => {
    revealObserver.observe(el);
});



// Carrosel

const hero = document.querySelector(".high")
const txt = document.querySelector(".txt")
let vav = ["Assets/doom_background.jpeg", "Assets/halo_background.jpeg", "Assets/rdr_background.jpg", "Assets/forza_background.jpg",]
let names = ["Doom Eternal", "Halo Infinite", "Red Dead Redemption 2", "Forza Horizon"]; let cont = 0


setInterval(() => {

    if (cont == 4){cont = 0}

    const idx = cont
    hero.style.opacity = 0

    setTimeout(() => {
        hero.style.backgroundImage = `linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #111111 100%), url('${vav[idx]}')`
        hero.style.backgroundSize = "cover"
        txt.innerText = names[idx]
        hero.style.opacity = 1
    }, 600)

    cont++
}, 10000)