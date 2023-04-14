gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let tl = gsap.timeline({
  defaults: {
    duration: 2.5,
    ease: "circ.out",
    stagger: {
      each: 1,
    },
  },
});
tl.to("#flower1", {
  scale: 3,
  x: -70,
  y: 120,
  rotation: Math.random() * 360,
  opacity: 1,
  duration: 2.5,
})
  .to(
    "#flower2",
    {
      scale: 2,
      x: 350,
      y: 80,
      rotate: Math.random() * 360,
      opacity: 1,
    },
    "-=2.5"
  )
  .to(
    "#flower3",
    {
      scale: 3,
      x: -40,
      y: -60,
      rotate: Math.random() * 360,
      opacity: 1,
    },
    "-=2.5"
  )
  .to(
    "#flower5",
    {
      scale: 5,
      x: 350,
      y: -115,
      rotate: Math.random() * 360,
      opacity: 1,
    },
    "-=2.5"
  )
  .to(
    "h1",
    {
      "clip-path": "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=2.5"
  );

gsap.to(".flipbook-wrap", { ease: "back.out(1.7)", duration: 3 });

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top <= offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active");
      });
    }
  });
};

const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
});

var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

let scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "top center",
    end: "+=477",
    scrub: true,
    markers: 0,
    // pin: true,
  },
});
scrollTl.from(".flipbook", {
  ease: "back.out(1.7)",
  x: 200,
  // y: 50,
  opacity: 0,
  duration: 1,
});

let mm = gsap.matchMedia(),
  mobile = 300,
  tablet = 768;

mm.add(
  {
    isTablet: `(max-width: ${tablet}px)`,
  },
  () => {
    let smallscreenTL = gsap.timeline({
      defaults: {
        duration: 2.5,
        ease: "none",
        stagger: {
          each: 1,
        },
      },
    });

    smallscreenTL
      .to("#flower1", {
        scale: 3,
        x: -50,
        y: 80,
        rotate: Math.random() * 360,
        opacity: 1,
      })
      .to(
        "#flower2",
        {
          scale: 4,
          x: 260,
          y: 75,
          rotation: Math.random() * 360,
          opacity: 1,
          duration: 2.5,
        },
        "-=2.5"
      )
      .to(
        "#flower3",
        {
          scale: 5,
          x: -20,
          y: -40,
          rotate: Math.random() * 360,
          opacity: 1,
        },
        "-=2.5"
      )
      .to(
        "#flower5",
        {
          scale: 3,
          x: 240,
          y: -120,
          rotate: Math.random() * 360,
          opacity: 1,
        },
        "-=2.5"
      )
      .to(
        "h1",
        {
          "clip-path": "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
          opacity: 1,
          y: 0,
        },
        "-=2.5"
      );
  }
);

// const DURATION = 0.5;

// var pagetl = gsap.timeline({
//   repeatDelay: 0.5,
//   defaults: { ease: "power1.inOut" },
// });

// for (let i = 1; i <= 10; i++) {
//   pagetl.to(".preloader-progress-bar", {
//     duration: DURATION,
//     width: i * 10 + "%",
//   });
// }

// window.addEventListener("load", function () {
//   pagetl.pause();
//   gsap.to(".preloader", {
//     duration: 0.5,
//     opacity: 0,
//     onComplete: function () {
//       pagetl.kill();
//       document.querySelector(".preloader").style.display = "none";
//     },
//   });
// });
const loadtl = gsap.timeline({});

loadtl
  .to(".preloader", {
    duration: 1,
    opacity: 1,
    ease: "back",
    // repeat: -1,
    yoyo: false,
  })
  .to(".dot", {
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    y: "20",
    ease: "back",
    stagger: {
      amount: 1,
      from: "start",
    },
  }),
  "<";
var loader = document.getElementsByClassName("preloader");
window.addEventListener("load", function () {
  document.querySelector(".preloader").style.display = "none";
});

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });
// const loadtl = gsap.timeline({});

// loadtl
//   .to(".preloader", {
//     duration: 1,
//     opacity: 0.8,
//     ease: "back",
//     repeat: -1,
//     yoyo: false,
//   })
//   .to(".dot", {
//     duration: 0.5,
//     yoyo: true,
//     repeat: -1,
//     y: "20",
//     ease: "back",
//     stagger: {
//       amount: 0.25,
//       from: "end",
//     },
//   });
// .from(
//   ".loadingtitle",
//   {
//     duration: 0.68,
//     repeat: -1,
//     yoyo: true,
//     y: 15,
//     ease: "back",
//   },
//   "<"
// );
