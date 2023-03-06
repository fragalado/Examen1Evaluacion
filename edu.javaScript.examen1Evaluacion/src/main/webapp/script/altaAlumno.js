/**
 * Alta Alumno
 */

 // Solicitaremos el nombre, apellidos y la edad de un alumno
 // El nombre y los apellidos se guardaran como string
 // La edad se guardara como numero
 
 // Solicitamos el nombre y guardamos el valor en una variable
 let nombre = prompt("Introduzca su nombre:");
 
 // Comprobamos que el nombre no sea un numero y si lo es volvemos a pedir
 while(!isNaN(Number(nombre))){
	 nombre = prompt("**Error: El valor no puede ser un numero**\nIntroduzca su nombre:");
 }
 // Solicitamos los apellidos y guardamos el valor en una variable
 let apellidos = prompt("Introduzca sus apellidos:");
 
  // Comprobamos que los apellidos no sean un numero y si lo es volvemos a pedir
 while(!isNaN(Number(apellidos))){
	 apellidos = prompt("**Error: El valor no puede ser un numero**\nIntroduzca sus apellidos:");
 }
 // Solicitamos la edad y guardamos el valor (como number) en una variable
 let edad = Number(prompt("Introduzca su edad:")); 
 
 // Comprobamos que edad sea un numero
 while(isNaN(edad)){
	 edad = Number(prompt("**Error: El valor tiene que ser un numero**\nIntroduzca su edad:")); 
 }
 
 
 // El nombre mostraremos siempre la primera letra en mayuscula
 nombre = nombre.toLowerCase(); // Ponemos el nombre en minuscula para que sea mas facil despues
 nombre = nombre.charAt(0).toUpperCase() + nombre.substring(1).trim();
 // Los apellidos mostraremos la primera letra de cada apellido en mayuscula
 apellidos = apellidos.toLowerCase(); // Ponemos los apellidos en minuscula para que sea mas facil
 apellidos = apellidos.split(" "); // Separamos los apellidos en dos, hacemos un array con dos posiciones
 apellidos = apellidos[0].charAt(0).toUpperCase() + apellidos[0].substring(1).trim() + " " + apellidos[1].charAt(0).toUpperCase() + apellidos[1].substring(1).trim();
 
 // Mostramos los datos
 document.write("Nombre y apellidos: "+ apellidos + ", " + nombre + ".");
 document.write("<br>Edad: " + edad + " anyos." );
 document.write("<br>Edad es un tipo: " + typeof(edad) + ".<br>");