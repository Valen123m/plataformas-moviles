/**
 * 04 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 05 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    let personaMayor = listaDePersonas[0]; // Inicializamos con la primera persona de la lista

    for (let i = 1; i < listaDePersonas.length; i++) {
        if (listaDePersonas[i].edad > personaMayor.edad) {
            personaMayor = listaDePersonas[i];
        }
    }

    return personaMayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));
