document.addEventListener('DOMContentLoaded', function() {
    // --- Animación de Carga de Página (Fade In) ---
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease-in-out';
        document.body.style.opacity = 1;
    }, 100);

    // --- Intersection Observer para Fading In y Sliding Up ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.department-card, .department-details > .container > *');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- Animación Pro para Mostrar/Ocultar la sección de detalles ---
    const discoverButton = document.querySelector('.hero-content .button.primary');
    const departmentDetailsSection = document.getElementById('info-ahuachapan');

    if (discoverButton && departmentDetailsSection) {
        departmentDetailsSection.style.overflow = 'hidden';
        departmentDetailsSection.style.transition = 'height 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.4s ease-in-out';
        const initialHeight = departmentDetailsSection.scrollHeight;
        departmentDetailsSection.style.height = '0';
        departmentDetailsSection.style.opacity = '0';

        discoverButton.addEventListener('click', function(event) {
            event.preventDefault();
            const isCollapsed = departmentDetailsSection.style.height === '0px';

            if (isCollapsed) {
                departmentDetailsSection.style.height = initialHeight + 'px';
                departmentDetailsSection.style.opacity = '1';
                discoverButton.textContent = 'Ocultar Información';
                discoverButton.classList.add('active');
                departmentDetailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                departmentDetailsSection.style.height = '0';
                departmentDetailsSection.style.opacity = '0';
                discoverButton.textContent = 'Ver Información';
                discoverButton.classList.remove('active');
            }
        });

        // Asegurar que la altura inicial se recalcule en caso de cambios de contenido
        window.addEventListener('resize', () => {
            if (departmentDetailsSection.style.height !== '0px') {
                const newHeight = departmentDetailsSection.scrollHeight;
                departmentDetailsSection.style.height = newHeight + 'px';
            }
        });
    } else {
        console.error('No se encontró el botón "Ver Información" o la sección de detalles.');
    }
});