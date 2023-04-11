gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let tl = gsap.timeline({
	defaults: {
		ease: "power4.inOut",
		duration: 2,
	},
});
tl.to("#flower1", { scale: 5, x: 500, opacity: 1, duration: 2 })
	.to(
		"#flower2",
		{
			scale: 3,
			x: 200,
			// rotate: 360,
			opacity: 1,
			// duration: 1,
		},
		"-=2",
	)
	.to(
		"#flower3",
		{
			scale: 2,
			x: 400,
			// rotate: 360,
			opacity: 1,
			// duration: 2,
		},
		"=-2",
	)
	.to(
		"#flower4",
		{
			scale: 3,
			x: 600,
			rotate: 360,
			opacity: 1,
			// duration: 2,
		},
		"=-2",
	)
	.from(
		"#flower5",
		{
			scale: 2,
			x: 100,
			rotate: 360,
			opacity: 0,
			// duration: 2,
			repeat: 1,
		},
		"=-2",
	)
	.to(
		"h1",
		{
			"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%,0% 0%)",
			opacity: 1,
			y: 0,
		},
		"-=2",
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
mb;
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
