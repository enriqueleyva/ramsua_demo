// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero fade in
gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1 });

// Sections fade up on scroll
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
	gsap.from(section.querySelectorAll("h2, .icon-box, .card, form"), {
		scrollTrigger: {
			trigger: section,
			start: "top 80%",
		},
		opacity: 0,
		y: 60,
		stagger: 0.2,
		duration: 0.8,
	});
});
