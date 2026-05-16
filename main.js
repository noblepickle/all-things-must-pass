const { gsap, ScrollTrigger } = window;

gsap.registerPlugin(ScrollTrigger);


// Cover ----------------------------------
const cover = document.querySelector('img');

const originalDuration = 20;
const maxDuration = 80;

const spin = gsap.to(cover, {
  rotate: 360,
  duration: originalDuration,
  repeat: -1,
  ease: 'none'
});

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {
    const p = self.progress * 7;
    const newDuration = originalDuration + (maxDuration - originalDuration) * p;
    spin.timeScale(originalDuration / newDuration);

    // cover.style.opacity = String(1 - (p * 5));
    gsap.set(cover, { y: p * 1500});
  },
}); 
