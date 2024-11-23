// Detectar dispositivo
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const androidContent = document.getElementById('androidContent');
    const iosContent = document.getElementById('iosContent');
    const webContent = document.getElementById('webContent');

    // Mostrar el contenido según el dispositivo
    if (userAgent.indexOf('android') > -1) {
        androidContent.style.display = 'block';  // Mostrar contenido para Android
    } else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) {
        iosContent.style.display = 'block';  // Mostrar contenido para iOS
    } else {
        webContent.style.display = 'block';  // Mostrar contenido para la web
    }
}

// Llamar a la función para detectar el dispositivo cuando la página cargue
window.onload = detectDevice;
