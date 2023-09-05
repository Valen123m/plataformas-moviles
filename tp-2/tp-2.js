var listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];

function invertirLista(listaDeNumeros) {
    return listaDeNumeros.reverse();
}
console.log("invertirLista([2,3,4]): ", invertirLista([2, 3, 4]));

function calcularPromedio(listaDeNumeros) {
    const sum = listaDeNumeros.reduce((acc, num) => acc + num, 0);
    return sum / listaDeNumeros.length;
}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2, 3, 4]));
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo));

function crearListaDeNumeros(inicio, fin) {
    const result = [];
    for (let i = inicio; i <= fin; i++) {
        result.push(i);
    }
    return result;
}
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2, 5));

function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.sort((a, b) => b - a);
}
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2, 3, 4]));
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));

function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2, 3, 4]));
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));

function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.sort((a, b) => a.length - b.length);
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']));

function encontrarPalabraMasCorta(listaDePalabras) {
    return listaDePalabras.reduce((shortest, current) => (current.length < shortest.length ? current : shortest));
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']));

function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(num => num > 0);
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1, -1, 0]));
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo));

function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(nota => nota >= 5).length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]));

function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(value => value);
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]));

function enumerarLista(listaDePalabras) {
    let sentence = "";
    for (let i = 0; i < listaDePalabras.length; i++) {
        sentence += listaDePalabras[i];
        if (i === listaDePalabras.length - 2) {
            sentence += " y ";
        } else if (i < listaDePalabras.length - 1) {
            sentence += ", ";
        }
    }
    sentence += ".";
    return sentence;
}
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]));
