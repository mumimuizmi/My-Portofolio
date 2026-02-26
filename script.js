(function() {
            // typewriter effect
            const words = ['Junior Front-End Developer', 'UI lover', 'Dark Mode Enthusiast', 'Soft Spoken', 'Info Balap Enthusiast'];
            let i = 0;
            let j = 0;
            let currentWord = '';
            let isDeleting = false;
            const el = document.getElementById('typewriter-text');

            function type() {
                if (!el) return;
                if (i >= words.length) i = 0;
                currentWord = words[i];

                if (isDeleting) {
                    el.textContent = currentWord.substring(0, j - 1);
                    j--;
                } else {
                    el.textContent = currentWord.substring(0, j + 1);
                    j++;
                }

                if (!isDeleting && j === currentWord.length + 1) {
                    isDeleting = true;
                    setTimeout(type, 1500);
                } else if (isDeleting && j === 0) {
                    isDeleting = false;
                    i++;
                    setTimeout(type, 300);
                } else {
                    setTimeout(type, isDeleting ? 60 : 100);
                }
            }
            setTimeout(type, 500);

            // Intersection Observer for fade-in (and active nav highlight)
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        // active link
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    } else {
                        // optional: keep show class, but we don't remove
                    }
                });
            }, { threshold: 0.25, rootMargin: '-70px 0px -100px 0px' });

            sections.forEach(section => observer.observe(section));

            // ensure home visible at start (already has .show)
            // progress bars can be static already set. fine.

            // fake form alert
            document.getElementById('demoForm')?.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('✨ message sent (demo). Thanks for contacting!');
            });

            // smooth scroll for nav links + active update on click
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    // manually active
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // small fix: recalc active on scroll after manual click (observer will also correct)
        })();