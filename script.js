document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2
    };

    const fadeInOnScroll = new IntersectionObserver(function(entries, fadeInOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            fadeInOnScroll.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        fadeInOnScroll.observe(section);
    });
});
section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}
<script src="script.js"></script>
