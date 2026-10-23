document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const toggleIcon = document.getElementById('dark-mode-icon');

    if (!toggleBtn || !toggleIcon) return;

    // Función para aplicar/quitar estilos
    const applyDarkMode = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            toggleIcon.src = 'images/light_mode.svg';
        } else {
            document.body.classList.remove('dark-mode');
            toggleIcon.src = 'images/dark_mode.svg';
        }

        // Estilos para contenedores generales
        const blocks = document.querySelectorAll('#page-wrapper, .wrapper, #header, #footer, .box, body');
        blocks.forEach(el => {
            el.style.backgroundColor = isDark ? '#181818' : '';
            el.style.color = isDark ? '#f0f0f0' : '';
        });

        // Estilos para textos generales
        const texts = document.querySelectorAll('h1, h2, h3, h4, p, a, span, label');
        texts.forEach(el => {
            el.style.color = isDark ? '#ffffff' : '';
        });

        //Estilos específicos para los cuadros de comentarios
        
        const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea, select');
        formInputs.forEach(el => {
            el.style.backgroundColor = isDark ? '#222222' : ''; 
            el.style.color = isDark ? '#ffffff' : '';           
            el.style.borderColor = isDark ? '#444444' : '';   
        });
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkMode(true);
    }

    // Evento al hacer clic en el botón
    toggleBtn.addEventListener('click', () => {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        const newDarkMode = !isCurrentlyDark;
        
        applyDarkMode(newDarkMode);

        // Guardar la elección en el navegador
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    });
});