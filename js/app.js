gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
//hide scroll when loading
$(window).on("load", function () {
  $(".preloader")
    .delay(500)
    .fadeOut("slow", function () {
      $(this).attr("style", "display: none !important");
      $("body").css("overflow", "auto");
    });
});

//animation begins here
let tl = gsap.timeline({
  defaults: {
    duration: 3,
    ease: "power4.inOut",
  },
});
tl.to(".preloader", {
  // duration: 3,
})
  // .to(
  // 	"#flower1",
  // 	{
  // 		scale: 3,
  // 		x: -70,
  // 		y: 120,
  // 		rotation: Math.random() * 360,
  // 		opacity: 1,
  // 		// duration: 2.5,
  // 	},
  // 	"-=2.5",
  // )
  // .to(
  // 	"#flower2",
  // 	{
  // 		scale: 2,
  // 		x: 350,
  // 		y: 80,
  // 		rotate: Math.random() * 360,
  // 		opacity: 1,
  // 	},
  // 	"-=2.5",
  // )
  // .to(
  // 	"#flower3",
  // 	{
  // 		scale: 3,
  // 		x: -40,
  // 		y: -60,
  // 		rotate: Math.random() * 360,
  // 		opacity: 1,
  // 	},
  // 	"-=2.5",
  // )
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
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      // duration: 2.2,
      opacity: 1,
      y: -1,
    },
    "-=2.5"
  );
// navigation JS
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
//hides navbar when scrolled downward
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

//Scrolling Sections begins here!
let scrollTl = gsap.timeline({
  scrollTrigger: {
    ease: "none",
    trigger: ".section",
    start: "top",
    end: "+=477",
    scrub: true,
    markers: 0,
    // pin: true,
  },
});
scrollTl.from(".flipbook", {
  x: 100,
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
