// Cambiar fondo a color fijo
function cambiarFondo() {
    document.body.style.background = "#e74c3c";
}

// Cambiar fondo a color aleatorio
function colorAleatorio() {
    const colores = ["#33fcff", "#33ff55", "#ff3333", "#333cff", "#9b00ff"];
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.background = color;
}

// Aplicar fondo en gradiente
function gradiente() {
    document.body.style.background = "linear-gradient(to left, #9b00ff, #ff3333)";
}

// Cambiar tamaño de fuente
let tamanoFuente = 16;

function aumentarFuente() {
    tamanoFuente += 2;
    document.body.style.fontSize = tamanoFuente + "px";
}

function disminuirFuente() {
    if (tamanoFuente > 10) {
        tamanoFuente -= 2;
        document.body.style.fontSize = tamanoFuente + "px";
    }
}

// Reloj en tiempo real
function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('horas').textContent = horas + ":";
    document.getElementById('minutos').textContent = minutos + ":";
    document.getElementById('segundos').textContent = segundos;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

// Función para aplicar colores seleccionados manualmente
function aplicarColoresManual() {
    const colorFondo = document.getElementById("colorFondo").value;
    const colorTexto = document.getElementById("colorTexto").value;
    document.body.style.backgroundColor = colorFondo;
    document.body.style.color = colorTexto;
}

// Crea el efecto de nieve
function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;

    snowflake.innerText = '❄';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnow, 100);
