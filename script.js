document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAV SMOOTH SCROLL
    ========================= */
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    /* =========================
       FADE UP ANIMATION
    ========================= */
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    /* =========================
       HEADER TOGGLE
    ========================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    function toggleMenu() {
        // Küçük ekranda menüyü aç/kapa
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
        }
    }

    function checkScreen() {
        if (window.innerWidth <= 768) {
            // Küçük ekran: hamburger aktif, menü kapalı
            navMenu.style.display = 'none';
            menuToggle.addEventListener('click', toggleMenu);
        } else {
            // Büyük ekran: menü açık, hamburger devre dışı
            navMenu.style.display = 'flex';
            menuToggle.removeEventListener('click', toggleMenu);
        }
    }

    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde kontrol et
    window.addEventListener('load', checkScreen);
    window.addEventListener('resize', checkScreen);



     /* =========================
       HOME TYPING ANIMATION
    ========================= */

    const texts = [
    "Designing meaningful digital experiences.",
    "Focused on usability and clarity.",
    "From concept to final interface."
    ];

    let index = 0;
    let charIndex = 0;
    const speed = 60;
    const eraseSpeed = 40;
    const delay = 1500;

    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        function type() {
            if (charIndex < texts[index].length) {
                typingElement.textContent += texts[index].charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            } else {
                setTimeout(erase, delay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingElement.textContent =
                    texts[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, eraseSpeed);
            } else {
                index = (index + 1) % texts.length;
                setTimeout(type, 400);
            }
        }

        type();
    }


    /* =========================
       SKILLS ACCORDION
    ========================= */
    const skillGroups = document.querySelectorAll(".skill-group");

    skillGroups.forEach(group => {
        const header = group.querySelector(".skill-header");
        header.addEventListener("click", () => {

            skillGroups.forEach(item => {
                if (item !== group) {
                    item.classList.remove("active");
                }
            });

            group.classList.toggle("active");
        });
    });

    /* =========================
       PROJECT MODALS
    ========================= */
    const projectBtns = document.querySelectorAll(".project-more-btn");
    const projectModals = document.querySelectorAll(".project-modal");
    const projectCloses = document.querySelectorAll(".close-btn");

    projectBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.project;
            const modal = document.getElementById(id);
            if (modal) modal.classList.add("active");
        });
    });

    projectCloses.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".project-modal").classList.remove("active");
        });
    });

    /* =========================
       AWARDS MODALS
    ========================= */
    const awardBtns = document.querySelectorAll(".award-more-btn");
    const awardModals = document.querySelectorAll(".modal");
    const awardCloses = document.querySelectorAll(".close");

    awardBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = document.getElementById(btn.dataset.modal);
            if (modal) modal.style.display = "flex";
        });
    });

    awardCloses.forEach(close => {
        close.addEventListener("click", () => {
            close.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", e => {
        awardModals.forEach(modal => {
            if (e.target === modal) modal.style.display = "none";
        });
    });

/* =========================
   AWARDS SLIDER ARROWS (LOOP)
========================= */
const slider = document.getElementById("awardsSlider");
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");

if (slider && nextBtn && prevBtn) {
    const scrollAmount = 460;

    nextBtn.addEventListener("click", () => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScrollLeft - 5) {
            // sona geldiyse → başa dön
            slider.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        } else {
            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });

    prevBtn.addEventListener("click", () => {
        if (slider.scrollLeft <= 5) {
            // baştaysa → sona git
            slider.scrollTo({
                left: slider.scrollWidth,
                behavior: "smooth"
            });
        } else {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        }
    });
}
});


const openGallery = document.getElementById("openGallery");
const modal = document.getElementById("galleryModal");
const closeBtn = document.querySelector(".gallery-close");

openGallery.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



