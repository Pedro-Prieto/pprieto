// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Oscuro';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Claro';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Claro';
    }

    // Initialize scroll animations
    initScrollAnimations();
});

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'96b977b7118ca0da',t:'MTc1NDU5Nzk1My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();


// Obtener elementos
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeModal");

    // abrir modal
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // cerrar si se hace clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});

/*Power BI*/
// Obtener elementos
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModalPBI");
    const modal = document.getElementById("modalPBI");
    const closeBtn = document.getElementById("closeModal-PBI");

    // abrir modal
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // cerrar si se hace clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});


/*Py*/
// Obtener elementos
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModalPy");
    const modal = document.getElementById("modalPy");
    const closeBtn = document.getElementById("closeModal-Py");

    // abrir modal
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // cerrar si se hace clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});
