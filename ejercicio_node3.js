let nombre = `Jordi`
let apellido = `Alsina`
let estudiante = nombre.concat(" ",apellido)

console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus);

let numLetras = estudiante.length
console.log(numLetras);

let primeraLetraNombre = nombre.slice(0, 1)
console.log(primeraLetraNombre);

let primeraLetraApellido = apellido.slice(0, 1)
console.log(primeraLetraApellido);

let estudianteSinEspacios = estudiante.replace(" ", "")
console.log(estudianteSinEspacios);

let bool
if (estudiante === "Jordi Alsina"){
    bool = true;
}else {
    bool = false;
}
console.log(bool);
