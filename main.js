import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cover = document.querySelector('img');

gsap.to(cover, { 
    rotate: 360, 
    duration: 20,
    repeat: -1,
    ease: 'none',
});

