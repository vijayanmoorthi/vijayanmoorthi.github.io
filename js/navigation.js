// Navigation Scroll Behavior
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling behavior to all links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section
            const targetId = this.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId) ||
                document.querySelector(`section[data-section="${targetId}"]`) ||
                document.querySelector(`section.${targetId}`);

            if (targetSection) {
                // Calculate position accounting for fixed header
                const headerOffset = document.querySelector('nav').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Smooth scroll to target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Smooth scrolling for other in-page links (hero CTA, buttons) without changing URL
    document.querySelectorAll('a[href^="#"]:not(nav a)').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId) ||
                document.querySelector(`section[data-section="${targetId}"]`) ||
                document.querySelector(`section.${targetId}`);

            if (targetSection) {
                const headerOffset = document.querySelector('nav').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Smooth scroll, do NOT change URL/hash
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active state on scroll
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        const headerHeight = document.querySelector('nav').offsetHeight;

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id || section.getAttribute('data-section') || section.classList[0];

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    // Add scroll event listener with throttling
    let isScrolling;
    window.addEventListener('scroll', () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(handleScroll, 50);
    });

    // Initial check for active section
    handleScroll();
});