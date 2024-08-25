gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  MotionPathHelper,
  ScrollSmoother
);
ScrollSmoother.create({
  smooth: 2,
  effects: true,
});




let bar = gsap.to(".welcomeBar", {
  scrollTrigger: ".welcomeBar",
  width: "102%",
  duration: 2,
  ease: "power4.out",
  onComplete: checkCompletion, // Call checkCompletion when this animation completes
});
bar.play();

// Define the animation for the welcome text
let tween = gsap.from(".welcomeText", {
  scrollTrigger: ".welcomeText",
  y: -200,
  duration: 6,
  ease: "elastic.out(2, 0.5)",
  onComplete: checkCompletion, // Call checkCompletion when this animation completes
});
tween.play();

// Define the animation for the ready text, but don't start it yet
let ready = gsap.to(".readyText", {
  scrollTrigger: {
    trigger: ".readyText",
    toggleActions: "play play reverse none",
    start: "-25% center",
    end: "-200% top",
  },
  color: "#fff",
  duration: 3,
  ease: "power4.out",
  paused: true, // Pause this animation for now
  onComplete: checkCompletion,
});

// Counter to track completed animations

let bar2 = gsap.to(".welcomeBar", {
  height: "102%",
  top: "50%",
  duration: 2,
  ease: "circ.out",
  delay: 3,
  onComplete: checkCompletion, // Call checkCompletion when this animation completes
});
bar2.play();

let letsgo = gsap.to(".letsgoText", {
  scrollTrigger: {
    trigger: ".letsgoText",
    toggleActions: "paused play reverse none",
    start: "-48% center",
    end: "-30% top",
  },
  color: "#fff",
  duration: 3,
  ease: "power4.out",
  onComplete: checkCompletion,
  paused: true,
});
let completedAnimations = 0;
// Function to check if both animations are complete
function checkCompletion() {
  completedAnimations++;
  if (completedAnimations === 2) {
    // Start the ready animation when both animations are complete
    ready.play();
  } else if (completedAnimations === 3) {
    // Start the ready animation when both animations are complete
    bar2.play();
  } else if (completedAnimations === 4) {
    // Start the ready animation when both animations are complete
    letsgo.play();
  }
}

gsap.to("#g1", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  motionPath: {
    path: "#pathh",
    align: "#pathh",
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
});
