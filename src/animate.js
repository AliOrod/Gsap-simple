gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  MotionPathHelper,
  ScrambleTextPlugin,
  ScrollSmoother
);

ScrollTrigger.normalizeScroll(true);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 5,
  effects: true,
  normalizeScroll: true,
});

let tl1 = gsap.timeline();

tl1
  .to(".welcomeBar", {
    scrollTrigger: {
      trigger: ".welcomeBar",
      start: "top center",
    },
    width: "102%",
    duration: 2,
    ease: "power4.out",
  })
  .from(".welcomeText", {
    scrollTrigger: { trigger: ".welcomeText" },
    y: -200,
    duration: 6,
    ease: "elastic.out(2, 0.5)",
  })
  .to(".welcomeBar", {
    height: "102%",
    top: "50%",
    duration: 2,
    ease: "circ.out",
    delay: 3,
  })
  .to("#scramble", {
    duration: 3,
    scrambleText: {
      text: `${"The more I study the universe,"}`,
      revealDelay: 0.5,
      tweenLength: false,
    },
  })

  .to("#charsCustom", {
    duration: 3,
    scrambleText: {
      text: "the more I believe in a higher power.",
      chars: "XO",
      revealDelay: 0.1,
      tweenLength: true,
      speed: 0.3,
    },
  })

  .to("#newClass", {
    scrambleText: {
      text: "-Albert Einstein",
      speed: 0.8,
      newClass: "orange",
      revealDelay: 0.5,
      tweenLength: false,
    },
  });
tl1.play();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    pin: ".pin",
    markers: true,
    fastScrollEnd: false,
  },
});

tl2.to("#moun", {
  duration: 15, // Adjust duration for smoothness
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    autoRotate: false,
  },
  ease: "power1.out",
});
if (ScrollTrigger.isInViewport(".moon")) {
  tl2.play();
}
