const { gsap, ScrollTrigger } = window;

gsap.registerPlugin(ScrollTrigger);


// Cover ----------------------------------
const cover = document.querySelector('.cover');

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

// Content ---------------------------------------------
const p = document.querySelectorAll('.track');

p.forEach(element => {
  gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "center +=1000",
      end: "+=600",
      scrub: true,
    }
  })
  .fromTo(element, { opacity: 0 }, { opacity: 1, duration: 5 })
  .to(element, { opacity: 0, duration: 5 });
});
