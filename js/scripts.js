// Seleccionamos todos los elementos <path> en el mapa
const paths = document.querySelectorAll('path');

// Seleccionamos el info-box donde se mostrará la información
const infoBox = document.querySelector('.info-box');

// Iteramos sobre cada uno de los paths
paths.forEach(path => {
    // Cuando un path se pasa por encima
    path.addEventListener('mouseover', function (e) {
        // Obtener la información del atributo 'data-info' del path
        const info = path.getAttribute('data-info');
        
        // Asignar el contenido del info-box al 'data-info' del path
        infoBox.innerHTML = info;
        
        // Mostrar el info-box
        infoBox.classList.add('visible');
        
        // Obtener las coordenadas del path en el mapa
        const pathRect = path.getBoundingClientRect();
        
        // Posicionar el info-box cerca del path (ajustado)
        const offsetX = 10; // Desplazamiento horizontal (a la derecha)
        const offsetY = -10; // Desplazamiento vertical (arriba)
        
        infoBox.style.left = `${pathRect.left + offsetX}px`;
        infoBox.style.top = `${pathRect.top + offsetY}px`;
        
        // Resaltar el path activo
        path.classList.add('active');
    });

    // Cuando el mouse deja el path
    path.addEventListener('mouseout', function () {
        // Ocultar el info-box
        infoBox.classList.remove('visible');
        
        // Quitar la clase activa del path
        path.classList.remove('active');
    });
});
