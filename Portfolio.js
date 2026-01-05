// 1. Scroll-to-Reveal Animation
        const sections = document.querySelectorAll('section');
        const options = { threshold: 0.2 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        // 2. Back to Top Button Logic
        const topBtn = document.getElementById("backToTop");

        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topBtn.style.display = "flex";
            } else {
                topBtn.style.display = "none";
            }
        };

        topBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };