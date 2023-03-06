/**
 * Gestion Fechas
 */

// Solicitaremos una ciudad: Madrid, Paris o Londres, a partir de la cual obtendremos la fecha y hora actual en esa ciudad.
// La hora en Madrid y Paris son la misma
// Nuestra maquina esta en UTC+1

// Pedimos la ciudad
// Comprobamos que no es un numero y que es una de las 3 opciones
let ciudad;
do {
	ciudad = prompt("Introduzca una ciudad:\nOpciones: Madrid, Paris y Londres");

	// Pasamos la ciudad a mayuscula para que sea mas facil la comprobacion
	ciudad = ciudad.toUpperCase();
	// Comprobamos si hay error, y si hay error mostramos una alerta
	if (!isNaN(Number(ciudad)))
		alert("**Error: La ciudad no puede ser un numero**");
	else if (ciudad != "MADRID" && ciudad != "PARIS" && ciudad != "LONDRES")
		alert("**Error: No se ha elegido ninguna de las opciones**");

} while (!isNaN(Number(ciudad)) || ciudad != "MADRID" && ciudad != "PARIS" && ciudad != "LONDRES");

// Si la ciudad es madrid o paris obtendremos la misma fecha
// Si la ciudad es londres (utc+0) obtendremos la fecha.
let fechaActual = new Date(); // Fecha y hora actual en UTC+1

let fechaCiudad, horaCiudad; // Declaramos las variables que vamos a necesitar
if (ciudad == "MADRID" || ciudad == "PARIS" || ciudad == "PARÍS") {
	// Obtenemos la fecha y la hora con formato
	fechaCiudad = conFormato(fechaActual.getDate(), 2) + "-" + conFormato((fechaActual.getMonth() + 1), 2) + "-" + conFormato(fechaActual.getFullYear(), 4);
	horaCiudad = conFormato(fechaActual.getHours(), 2) + ":" + conFormato(fechaActual.getMinutes(), 2) + ":" + conFormato(fechaActual.getSeconds(), 2);
	// Mostramos la ciudad
	if (ciudad == "MADRID")
		document.write("Ciudad: Madrid");
	else
		document.write("Ciudad: Paris");
}
else {
	// Obtenemos la fecha y la hora con formato
	fechaCiudad = conFormato(fechaActual.getUTCDate(), 2) + "-" + conFormato((fechaActual.getUTCMonth() + 1), 2) + "-" + conFormato(fechaActual.getUTCFullYear(), 4);
	horaCiudad = conFormato(fechaActual.getUTCHours(), 2) + ":" + conFormato(fechaActual.getUTCMinutes(), 2) + ":" + conFormato(fechaActual.getUTCSeconds(), 2);
	// Mostramos la ciudad
	document.write("Ciudad: Londres");
}

// Mostramos la fecha y hora fuera para no repetir codigo
document.write("<br>Fecha: " + fechaCiudad);
document.write("<br>Hora: " + horaCiudad + "<br>");




/**
 * Funcion para darle formato a las fechas y horas
 * Pasamos como parametro la fecha u hora y la devolveremos con formato
 */
function conFormato(sinFormato, longitud) {
	// Variable auxiliar
	let aux = "0000";

	aux += sinFormato; // Le añadimos a la variable auxiliar el texto

	// Devolvemos la variable auxiliar
	return aux.substring(aux.length - longitud);
}