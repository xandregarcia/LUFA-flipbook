gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let tl = gsap.timeline({
	defaults: {
		duration: 2.5,
		ease: "circ.out",
		// stagger: 0.2,
	},
});
tl.to("#flower1", {
	scale: 4,
	x: -70,
	y: 120,
	//   y: Math.random() * 400,
	rotation: 360,
	opacity: 1,
	duration: 2.5,
})
	.to(
		"#flower2",
		{
			scale: 3,
			x: 350,
			y: 80,
			//   y: Math.random() * 300,
			rotate: 360,
			opacity: 1,
		},
		"-=2.5",
	)
	.to(
		"#flower3",
		{
			scale: 3,
			//   x: Math.random() * 200,
			y: -60,
			x: -40,
			rotate: 360,
			opacity: 1,
			// duration: 2,
		},
		"=-2.5",
	)
	.to(
		"#flower4",
		{
			scale: 5,
			x: 200,
			y: -50,
			rotate: 360,
			opacity: 1,
			// duration: 2,
		},
		"=-2.5",
	)
	.to(
		"h1",
		{
			"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%,0% 0%)",
			opacity: 1,
			y: 0,
			ease: Linear.easeNone,
		},
		"-=2.5",
	);

gsap.to(".flipbook-wrap", {
	ease: "back",
	// y: -100,
	duration: 3,
	// ScrollTrigger: {
	// 	trigger: ".flipbook-wrap",
	// 	start: "top center",
	// 	markers: true,
	// },
});

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
					.querySelector('header nav a[href*="' + id + '"]')
					.classList.add("active");
			});
		}
	});
};
{
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
}
