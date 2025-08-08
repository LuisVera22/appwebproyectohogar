
    const header = document.querySelector('.custom-header');
    const navbarToggler = document.getElementById("navbarToggler");
    const closeBtn = document.getElementById("closeBtn");
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.getElementById('login-form');
    const formCloseBtn = document.getElementById('close-btn');
    const registerLink = document.getElementById('register-link');
    const registerModal = document.getElementById('register-modal');

    // Scroll header style toggle
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animación inicial del logo y elementos de la cabecera
    function animateLogo() {
        anime({
            targets: ['.custom-btn-login', '.custom-navbar-toggler', '.search-box', '.button-group'],
            translateY: [-20, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            delay: 1100,
            duration: 1000,
        });

        anime({
            targets: ['.slogan-banner', '.carousel-banner-container', '.logo-navbar'],
            translateY: [20, 0],
            opacity: [0, 1],
            easing: 'easeInExpo',
            delay: 500,
            duration: 1200,
        });

        anime({
            targets: ".custom-navbar-nav .custom-nav-link",
            translateY: [20, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            delay: anime.stagger(150, { start: 900 }),
            duration: 800,
        });
    }

    // Mostrar y ocultar menú de navegación animado
    function toggleNavbar(show) {
        if (show) {
            navbarCollapse.classList.add("show");

            anime({
                targets: ".custom-navbar-collapse",
                translateX: ["-100%", "0%"],
                duration: 500,
                easing: "easeOutExpo",
            });

            anime({
                targets: '.custom-navbar-collapse img',
                translateY: [20, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                delay: 300,
            });

            anime({
                targets: ".custom-navbar-nav .custom-nav-item",
                opacity: [0, 1],
                translateY: [20, 0],
                delay: anime.stagger(100, { start: 300 }),
                duration: 500,
                easing: "easeOutExpo",
            });

            anime({
                targets: ".custom-close-btn",
                scale: [0.5, 1],
                duration: 300,
                easing: "easeOutExpo",
            });

        } else {
            navbarCollapse.classList.remove("show");

            anime({
                targets: ".custom-navbar-collapse",
                translateX: ["0%", "-100%"],
                duration: 500,
                easing: "easeInOutExpo",
            });

            anime({
                targets: ".custom-navbar-nav .custom-nav-item",
                opacity: [1, 0],
                translateY: [0, -20],
                delay: anime.stagger(100),
                duration: 300,
                easing: "easeInExpo",
            });
        }
    }

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener("click", () => {
            toggleNavbar(!navbarCollapse.classList.contains("show"));
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => toggleNavbar(false));
    }

    // Mostrar/ocultar formulario de login
    if (loginBtn && loginForm && formCloseBtn) {
        const formContainer = loginForm.querySelector('.custom-form-container');

        function showLoginForm() {
            loginForm.style.display = 'flex';
            anime({
                targets: formContainer,
                opacity: [0, 1],
                translateY: [-50, 0],
                easing: 'easeOutQuad',
                duration: 500,
            });
        }

        function hideLoginForm() {
            anime({
                targets: formContainer,
                opacity: [1, 0],
                translateY: [0, -50],
                easing: 'easeInQuad',
                duration: 500,
                complete: () => {
                    loginForm.style.display = 'none';
                },
            });
        }

        loginBtn.addEventListener('click', showLoginForm);
        formCloseBtn.addEventListener('click', hideLoginForm);

        loginForm.addEventListener('click', (event) => {
            if (event.target === loginForm) hideLoginForm();
        });
    }

    // Mostrar/ocultar modal de registro
    function showRegisterModal() {
        registerModal.style.display = 'flex';

        anime({
            targets: '.custom-card',
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutBack',
        });
    }

    function hideRegisterModal() {
        anime({
            targets: '.custom-card',
            translateY: [0, -100],
            opacity: [1, 0],
            duration: 600,
            easing: 'easeInBack',
            complete: () => {
                registerModal.style.display = 'none';
            },
        });
    }

    // Evento para mostrar modal
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        showRegisterModal();
    });

    // Cerrar modal si se hace clic fuera de la tarjeta
    registerModal.addEventListener('click', (event) => {
        if (event.target === registerModal) {
            hideRegisterModal();
        }
    });


    // Ejecutar animación de inicio
    animateLogo();
