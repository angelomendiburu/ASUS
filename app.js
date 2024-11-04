// Dar la bienvenida al usuario y configurar el fondo de la página
function configurarPagina() {
    let colorPreferido = prompt("Bienvenido! dime un color de fondo de la pagina en ingles");
    if (colorPreferido) {
        document.body.style.backgroundColor = colorPreferido;
    }
}

// Juego de Hermanos
function hermanos() {
    let cantidadHermanos = parseInt(prompt("¿Cuántos hermanos tienes?"));
    if (isNaN(cantidadHermanos) || cantidadHermanos <= 0) {
        alert("Por favor, ingresa un número válido de hermanos.");
        return;
    }

    let nombresHermanos = [];
    let intentos = cantidadHermanos;

    while (intentos > 0) {
        let nombre = prompt("Ingresa el nombre de uno de tus hermanos:");
        if (nombre) {
            nombresHermanos.push(nombre);
            intentos--;
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    }

    console.log("Nombres de tus hermanos:", nombresHermanos);
}

// Función para generar un color hexadecimal al azar
function colorAleatorio() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`;
}

// Juego de Bloques
function bloques() {
    let cantidadBloques = parseInt(prompt("¿Cuántos bloques deseas generar?"));
    if (isNaN(cantidadBloques) || cantidadBloques <= 0) {
        alert("Por favor, ingresa un número válido de bloques.");
        return;
    }

    // Limpiar cualquier bloque anterior
    const contenedor = document.getElementById("contenedorBloques");
    contenedor.innerHTML = "";

    for (let i = 0; i < cantidadBloques; i++) {
        let bloque = document.createElement("div");
        bloque.style.width = "100px";
        bloque.style.height = "100px";
        bloque.style.backgroundColor = colorAleatorio();
        bloque.style.display = "inline-block";
        bloque.style.margin = "5px";
        contenedor.appendChild(bloque);
    }
}

// Función para generar una elección aleatoria de piedra, papel o tijera
function eleccionAleatoria() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

// Juego de Yanquenpo
function yanquenpo() {
    let eleccionUsuario = prompt("Elige una opción: piedra, papel o tijera").toLowerCase();
    if (!["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        alert("Por favor, elige una opción válida: piedra, papel o tijera.");
        return;
    }

    let eleccionComputadora = eleccionAleatoria();
    alert(`La computadora eligió: ${eleccionComputadora}`);

    if (eleccionUsuario === eleccionComputadora) {
        alert("Es un empate!");
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("Perdiste, intenta de nuevo.");
    }
}

// Función para calcular la edad
function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;
    alert(`Tienes ${edad} años`); // Muestra la edad en un alert
}

// Función para convertir Celsius a Fahrenheit
function convertirAFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return `${celsius}°C son ${fahrenheit}°F`;
}

// Función para contar vocales
function contarVocales(palabra) {
    const vocales = "aeiou";
    let contador = 0;
    for (let letra of palabra.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

// Función para generar tabla de multiplicar
function tablaDeMultiplicar(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    console.log(resultado); // Muestra la tabla en la consola
}

// Configurar el botón para cada juego en la página
window.onload = function() {
    configurarPagina();

    document.getElementById("botonHermanos").onclick = hermanos;
    document.getElementById("botonBloques").onclick = bloques;
    document.getElementById("botonYanquenpo").onclick = yanquenpo;

    // Configurar los nuevos botones
    document.getElementById("botonEdad").onclick = function() {
        let anioNacimiento = parseInt(prompt("¿Cuál es tu año de nacimiento?"));
        calcularEdad(anioNacimiento);
    };

    document.getElementById("botonTemperatura").onclick = function() {
        let celsius = parseFloat(prompt("¿Qué temperatura en Celsius deseas convertir a Fahrenheit?"));
        alert(convertirAFahrenheit(celsius)); // Muestra el resultado en un cuadro de alerta
    };

    document.getElementById("botonVocales").onclick = function() {
        let palabra = prompt("Ingresa una palabra:");
        let cantidadVocales = contarVocales(palabra);
        alert(`Número de vocales: ${cantidadVocales}`); // Muestra el resultado en un cuadro de alerta
    };

 // Función para generar tabla de multiplicar
function tablaDeMultiplicar(numero) {
    // Obtener el contenedor donde se mostrará la tabla
    const contenedor = document.getElementById("contenedorTablaMultiplicar");
    // Limpiar el contenedor antes de mostrar nuevos resultados
    contenedor.innerHTML = "";

    // Crear una tabla
    const tabla = document.createElement("table");
    const encabezado = tabla.createTHead();
    const filaEncabezado = encabezado.insertRow();
    const celdaEncabezado = document.createElement("th");
    celdaEncabezado.textContent = `Tabla de Multiplicar de ${numero}`;
    filaEncabezado.appendChild(celdaEncabezado);

    const cuerpoTabla = tabla.createTBody();
    for (let i = 1; i <= 10; i++) {
        const fila = cuerpoTabla.insertRow();
        const celda = fila.insertCell();
        celda.textContent = `${numero} x ${i} = ${numero * i}`;
    }

    // Agregar la tabla al contenedor
    contenedor.appendChild(tabla);
}

// Configurar el botón para la tabla de multiplicar
document.getElementById("botonMultiplicar").onclick = function() {
    let numero = parseInt(prompt("¿Qué número deseas multiplicar?"));
    if (!isNaN(numero)) {
        tablaDeMultiplicar(numero);
    } else {
        alert("Por favor, ingresa un número válido.");
    }
};

    };




