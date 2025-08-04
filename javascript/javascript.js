//Prohibido usar var 
//console.log("Hola mundo");
/* let a = 2;
const b = 3;
a = 78;
console.log(a+b); */
//EcmaScript 6
/* var c = "Hola var";
console.log(c); */
//90% const 10% let


/* Tipo Object
const carro = {
    modelo: 2025,
    "marca": "Rols Royce",
    "color": "Negro"
}; //tipo de dato objeto
console.log(typeof(carro));
console.log(carro);
console.log(carro.color);
carro.color = "Verde";
console.log(carro.color);
carro.ruedas = 4;
console.log(carro); */

/* let b = 'Hola let'; //tipo string
b = "Hola Mundo";
//back ticks
console.log(`El valor de la variable 
    b es ${b} y su tipo 
    es ${typeof(b)} su longitud es ${b.length}
    Separa del 1 al 4 ${b.substring(1, 4)} 
    busca una M ${b.indexOf("M")}`); */

/* const arreglo = ["uno", "dos", 6, {edad: 40}, true];
console.log(arreglo);
arreglo[1] = "tres";
console.log(arreglo);
console.log(`La longitud del arreglo es ${arreglo.length}`);
arreglo[5] = "cinco"
console.log(`La longitud del arreglo 
    ahora es ${arreglo.length}`); */

/*Undefined*/
/* const a = undefined;
console.log(a); */

/*let r = 10;
console.log(r); */

// ------------------------------------------------

//Funciones
/* function suma(a, b){
    const total = a + b;
    return total;
} */
/* let resultado = suma(3, 2);
console.log(`Resultado de suma(3,2), ${resultado}`); */
//ES6
//tipo de dato function

/* resultado = f(5,8);
console.log(`
    Resultado de f(5,8) ${resultado}
    El tipo de dato de f es ${typeof(f)}
    En cambio el tipo de dato de 
    resultado es ${typeof(resultado)}`); */

// = function  =>
/* const suma = ((a, b) => {
    const res = a + b;
    return res;
});
console.log(`El resultado de la suma es: ${suma(3,2)}`); */


/// For funcional
/* const arr = ['uno', 'dos', 'tres'];
arr.forEach((valor, índice) => {
    console.log(`Iterando en el arreglo 
        valor: ${valor} 
        índice: ${índice}`)
}); */

// Map
//const números = [1,2,3,4,5,6,7];
/* const cuadrados = [];
números.forEach((n)=>{
    const c = n * n;
    cuadrados.push(c);
});
console.log(`Después de elevar números: ${números} al 
    cuadrado da ${cuadrados}`)



const c = números.map((j)=>j*j);
console.log(c); */

//Filter
/* const números = [1,2,3,4,5,6,7];

números.filter(v=>v%2==0).map(n=>n*n).forEach(i=>console.log(i)); */

//Deconstruccion de objetos
const frutas = ['piña', 'manzana', 'pera'];
const clon_frutas = [...frutas];
clon_frutas.push("ciruela");
console.log(`arreglo de frutas tiene ${frutas}`);
console.log(`arreglo clon_frutas tiene ${clon_frutas}`); 

//hacer una funcion map que agrege la cadena "llegó primero" a un 
//arreglo de strings que contenga el nombre de personas 
//['juan', 'maría', 'jose', 'guadalupe']
//['juan llegó primero', 'maría llegó primero', 'josé llegó primero]





/* function suma(a, b){
    const c = a + b;
    return c;
} */

/* const suma = (a, b) =>  a + b;
const resultado = suma(3,4);
console.log(`El resultado es ${resultado}`); */

/* Deconstrucción de objetos */
/* const objeto = {
    nombre: "Jose",
    edad: 15,
    otro_objeto:{
        uno: 1
    }
}
objeto.ejemplo = "Otra cosa";

const {uno} = objeto.otro_objeto;
console.log(uno); */

// Create an Array
//const fruits = ["Banana", "Orange", "Apple", "Mango", [1,2,3]];

// Destructuring Assignment
//const frutas = [...fruits];
/* console.log(`Fruits tiene ${fruits} y frutas tiene ${frutas}`); */
//frutas[4][1] = "Modificado";
/* console.log(`Fruits tiene ${fruits} y frutas tiene ${frutas}`); */


/* frutas.forEach((elemento)=>{console.log(elemento)}); */

//frutas.forEach(f);
/* const suma = (a, b) => {a + b};
const primos = ()=> {3}

a = suma(2,3);
console.log(a); */
/* 
const a = [1, 2, 3];
const b = [...a];
b[1] = 100;
console.log(a); */


/* function cuadrado(i){
    return i * i;
}
const a = [1,2,3,4,5,6,7,8,9,10]
console.log(a.filter((i)=>i%2 == 0).map((i)=>i*i).map((i)=>i*2)); */

/* const f = ()=>{console.log("Hola mundo")};
const invoker = (manzana) => {manzana()};
invoker(f); */

//const a = [1,2,3,4,5,6,7,8,9,10];
//const b = a.map((i)=>{return i*i}, a);
//console.log(b);