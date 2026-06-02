
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
