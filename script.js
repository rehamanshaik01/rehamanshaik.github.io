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
