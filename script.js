document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

fadeElements.forEach(el => observer.observe(el));


const buttons = document.querySelectorAll('.more-btn');
const modals = document.querySelectorAll('.project-modal');
const closeBtns = document.querySelectorAll('.close-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.project;
        document.getElementById(id).classList.add('active');
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.project-modal').classList.remove('active');
    });
});

const skillGroups = document.querySelectorAll('.skill-group');

skillGroups.forEach(group => {
    group.querySelector('.skill-header').addEventListener('click', () => {

        skillGroups.forEach(item => {
            if (item !== group) {
                item.classList.remove('active');
            }
        });

        group.classList.toggle('active');
    });
});

