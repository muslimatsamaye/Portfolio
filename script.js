// GSAP Animation for Introduction Section
gsap.from("#profile-image", { duration: 1, x: -100, opacity: 0 });
gsap.from("#intro h1", { duration: 1, x: 100, opacity: 0, delay: 0.5 });
gsap.from("#intro p", { duration: 1, y: 50, opacity: 0, delay: 1 });
gsap.from(".btn", { duration: 1, scale: 0.8, opacity: 0, delay: 1.5 });

// Animation for Projects Section
gsap.from("#projects h2", { duration: 1, opacity: 0, y: -50, delay: 2 });
gsap.from(".project-card", { duration: 1, opacity: 0, scale: 0.9, delay: 2.5, stagger: 0.2 });

// Animation for Skills Section
gsap.from("#skills h2", { duration: 1, opacity: 0, y: -50, delay: 3 });
gsap.from(".skill-item", { duration: 1, opacity: 0, y: 30, delay: 3.5, stagger: 0.1 });

// Contact Section Animation
gsap.from("#contact h2", { duration: 1, opacity: 0, y: -50, delay: 4 });
gsap.from(".contact-links a", { duration: 1, opacity: 0, y: 20, delay: 4.5, stagger: 0.2 });
gsap.from(".hire-me-btn", { duration: 1, opacity: 0, scale: 0.8, delay: 5 });
