'use strict';

// asignar una variable
/*
var nicknameUsuario = "Stricker"

console.log(typeof nicknameUsuario)
*/
//Uso del Var 

/*
console.log(likesPost);
var likesPost;

if (true) {
    var likesPost = 3;
}
console.log(likesPost);

// asignar una variable
let nicknameUsuario = "Yoshi"
let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
nicknameUsuario = "Toshi"
puntosDeVida = 900

console.log(nicknameUsuario+" "+puntosDeVida);
*/
//Uso del Let
/*
// asignar una variable
let nicknameUsuario = "Yoshi"
let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
nicknameUsuario = "Toshi"
puntosDeVida = 900

console.log(nicknameUsuario+" "+puntosDeVida);
*/
// Uso del Const
/*
// asignar una variable
let nicknameUsuario = "Yoshi"
let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
nicknameUsuario = "Toshi"
puntosDeVida = 900

console.log(nicknameUsuario+" "+puntosDeVida);
'use strict';
*/
// Uso del var
// var estado = true
// if (estado) {
//     var estado = false
// }
// console.log(estado)
// for (var i = 0; i < 10; i++) 
// {
//     console.log(i)
// }
// console.log(i)


// Uso del let
// let estadoUno = true
// if (estadoUno) {
//     let estadoUno = false
//     console.log(estadoUno)
// }
// console.log(estadoUno)

// for (let i = 0; i < 10; i++) 
// {
//     console.log(i)
// }
// console.log(i)



// Uso del const
// const estadoDos = true
// if (estadoDos) {
//     const estadoDos = false
//     console.log(estadoDos)
// }
// console.log(estadoDos)

// const i
// for ( i = 0; i < 10; i++) {
//     console.log(i)
// }

// ---------------------------

/*
let nombreJuego = "Mario Kart"
let tipoJuego = 'Carreras'

console.log(nombreJuego,tipoJuego);
*/
// Crear Strings 
/*
let nombreJuego = " Mario Kart "

console.log("Número de letras:",nombreJuego.length);
console.log("Encontrar alguna palabra:",nombreJuego.includes("Kart"));
console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider'));
console.log("Cortar un texto:",nombreJuego.slice(1,6));
console.log("Cortar un texto:",nombreJuego.substring(1,6));
console.log("Cortar un texto:",nombreJuego.charAt(1));
console.log("Repetir un texto:",nombreJuego.repeat(2));
console.log("Dividir un texto:",nombreJuego.split(" "));
*/
//Métodos de los Strings 
/*
const name = "Byron"
const lastName= "Loarte"
const city ="Quito"
const age = 34
const active = false
console.log(name+"-"+lastName+"-"+city)
console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);
*/

// ----------------------------------------

//Operadores 
/*
// Es importante reconocer el tipo de valor asignado
const numeroVidas = "20"
const numeroPuntos = 20

console.log(numeroPuntos,numeroVidas);
console.log(typeof(numeroPuntos), typeof(numeroVidas));

console.log("suma:",numeroPuntos+20);
console.log("resta:",numeroPuntos-20);
console.log("multiplicación:",numeroPuntos*20);
console.log("división:",numeroPuntos/20);
console.log("módulo:",numeroPuntos%20);


// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20

console.log(++numeroPuntosActual );
console.log(numeroPuntosActual++);

let numeroVidasActual = 20

console.log(--numeroVidasActual);
console.log(numeroVidasActual--);
*/
//Método Math
/*
const numeroPuntos = 20
console.log(Math);
console.log(Math.PI);
console.log(Math.round(2.43));
console.log(Math.sqrt(25));
console.log(Math.abs(-450));
console.log(Math.pow(2,5));
console.log(Math.min(10,4));
console.log(Math.max(58,-4));
console.log(Math.round(Math.random()*20));
*/
// Orden de precedencia de los operadores
/*
'use strict';
console.log(3 + 4 * 5)
console.log(4 * 3 ** 2)
console.log(200 * 0.2)
console.log(200 * 1.12)
*/
//Conversion
/*
let edadJugador = "20"
let precioJuego = "525.63"

console.log(Number.parseInt(edadJugador));
console.log(Number.parseFloat(precioJuego));

console.log(Number.isInteger(edadJugador));

console.log(`${+edadJugador + +precioJuego}`);
*/

// ---------------------

//Operadores relacionales
/*
// operadores de asignación 
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000
let estadoCuenta
let emailConfirmado=null


// operadores de asignación de adición
saldoTarjetaUsuario += 100
console.log(saldoTarjetaUsuario);

// operadores de comparación
saldoTarjetaUsuario="1000"
console.log(saldoTarjeta == saldoTarjetaUsuario)
// evalua tipo de dato y contenido
console.log(saldoTarjeta === saldoTarjetaUsuario)

console.log(estadoCuenta === emailConfirmado);


// operadores aritméticos
console.log(saldoTarjeta + Number.parseInt(saldoTarjetaUsuario));


// operadores lógicos 
console.log(saldoTarjeta != saldoTarjetaUsuario);
// evalua tipo de dato y contenido
console.log(saldoTarjeta !== Number.parseInt(saldoTarjetaUsuario));
*/
//Operador Ternario
/*
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000

const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo"
console.log(respuesta);
*/

///--------------------------

//Condicion Simple
/*
const carritoCompras = []

// utilizando el condicional clásico
if (carritoCompras.length===0)
{
    console.log("Agregar productos")
}

// utilizando operador ternario
carritoCompras.length===0 ? console.log("Agregar productos") :""
*/
//Condicion Doble
/*
const carritoCompras = []

// utilizando el condicional clásico
if (carritoCompras.length===0)
{
    console.log("Agregar productos")
}

// utilizando operador ternario
carritoCompras.length===0 ? console.log("Agregar productos") :""
*/
// Condicion Anidada
/*
const carritoCompras = ['Tv','Pc','Tablet','Laptop']

// utilizando el condicional clásico

if (carritoCompras.length >=4)
{
    console.log("Descuento del 20%");
}
else if (carritoCompras.length >= 5)
{
    console.log("Descuento del 40%");
}
else if (carritoCompras.length >= 8)
{
    console.log("Descuento del 70%");
}
else {
    console.log("No existe descuento");
}

// utilizando operador ternario
carritoCompras.length >=4 ? console.log("Descuento del 20%") : carritoCompras.length >= 5 ? console.log("Descuento del 40%") :carritoCompras.length >= 8 ? console.log("Descuento del 70%") : console.log("No existe descuento")
*/
// Condicion Multiple
/*
const actividadSiri = 2

switch (actividadSiri) {
    case 1:
        console.log("Prender el equipo");
    break;
    case 2:
        console.log("Prender la tv");
    break;
    case 3:
        console.log("Cerrar cortinas");
    break;
    default:
        console.log(`No existe tarea para la actividad ${actividadSiri}`);
    break;
}
*/
// Bucle For
/*
const contador = 10

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("Comida lista"):console.log(i);
}
*/
// Bucle While
/* 
let contador = 10
while (contador >= 0)
{
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
}
*/
//Bucle Do While
/* 
let contador = 10

do {
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
} while (contador >= 0);
*/
//foreach forof forin map
/*
const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
const usuario ={
    nombre:"Byron",
    apellido:"Loarte",
}

// uso del forEach 
tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of tareasPendientes) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}
for (const [clave,valor] of Object.entries(usuario)) {
    console.log(`${clave} - ${valor}`)
}


// uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);
*/







/*



OBJECTS


*/


//Acceder a sus claves.
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}
console.log(user.state);
console.log(user.sendMail());
console.log(user.sendNotification());
*/
//Agregar y eliminar propiedades al objeto.
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}

// Agregar un par de clave y valor al objeto
user.image ="t.ly/Rhgs"

// Eliminar un par de clave y valor del objeto
delete user.state

console.log(user);
*/

//--------------------------------

//Destructuracion de un objeto
/*
'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        streets:
        {
            principal: "Quitumbe Ñan",
            secondary:"Huayanay Ñan"
        }
    }
}

// const {name,lastName,age,address} = user
// console.log(name,lastName,age,address);

// const {name,lastName,age,myAddress=user.address} = user
// console.log(name,lastName,age,myAddress);

// const {name,lastName,age,address:{streets}} = user
// console.log(name,lastName,age,streets);

// const {name,lastName,...res} = user
// console.log(name,lastName,res);
*/

//--------------------------

// Uso de Freeze
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    }
}

Object.freeze(user)
console.log(Object.isFrozen(user));
user.image ="t.ly/Rhgs"
*/
// Uso de Seal
/*
'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    }
}

// con seal no se puede agregar o eliminar propiedades, pero 
// si se puede modificar las propiedades
Object.seal(user)
console.log(Object.isSealed(user))
user.age= 35
console.log(user);
*/

// ----------------------------------

// Spread Operator
/*
'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34
}

const extraInformation = {
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}

const allInformation = {...user,...extraInformation}
console.log(allInformation)
*/

// Uso del This
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}` //This se utiliza cuando tengo una funcion declarada
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log(user.sendMail());
// Va a provocar un error cuando se trabaje con arrow functions
// console.log(user.sendNotification())
*/
//Trabajar con objetos
/* 
'use strict';

const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log("Obtener las claves:",Object.keys(user))
console.log("Obtener los valores:",Object.values(user))
console.log("Obtener las claves y valores en un array:",Object.entries(user))
*/
//----
/*
const name ="laptop"
const price = 3000

const newProduct = {
    name,
    price
}

console.log(newProduct);
*/

//----------------------------

//Funciones
// Uso de funciones y reutilización.
/*
function hello(){
    console.log("Bienvenidos a los fundamentos");
    console.log("Trabjando con JS");
}

hello()
hello()
*/
// Uso de funciones declaradas y expresadas.
/*
function declarada(){
    console.log("Yo soy una función declarada");
}
declarada()

const expresada = function(){
    console.log("Yo soy una función dexpresada");
}
expresada()
*/
// Funciones anónimas y autoejecutadas.
/*
console.log(function(){
    return "esto es una prueba de para validar una cuenta"
})();


(function(){
    console.log("función para validar datos del usuario")
})()

const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hello React"
buscador.appendChild(button);

button.addEventListener('click',function(){
    alert("Usuario registrado")
}) Esto ejecutar en una pagina  web
*/

//-----------------------------
/*
const precioFinalItems = function(a,b,...args){
    let suma = 0;
    var total = suma+a+b
    if(args.length>0) args.forEach(e =>total+=e)
    return total
}

console.log(precioFinalItems(10,20,40,50,10))


// Paso de parámetros una función.

function hello(nameOne,nameTwo){
    
    return "welcome "+ nameOne + " and "+nameTwo
}

console.log(hello('Js','React'))

// Paso de parámetros por defecto para una función.

function hello(nameOne,nameTwo="Node.Js"){
    
    return "welcome "+ nameOne + " and "+nameTwo
}

console.log(hello('Js'))

// Parámetros rest para una función.

const precioFinalItems = function(a,b,...args){
    let suma = 0;
    var total = suma+a+b
    if(args.length>0) args.forEach(e =>total+=e)
    return total
}

console.log(precioFinalItems(10,20,40,50,10))

// Retorno de una funcion

const precioFinalItems = function(a,b,...args){
    let suma = 0;
    var total = suma+a+b
    if(args.length>0) args.forEach(e =>total+=e)
    return total
}

console.log(precioFinalItems(10,20,40,50,10))


//--------------------

// Funciones Flecha

function login(user,password){
    console.log("Usuario y password válidos");
}


const validarMail = (user,email)=>{
    console.log("El emial ha sido verificado")
}


const registrarAvatar = (photo)=>console.log("El avatar ha sido registrado");

login()

validarMail()

registrarAvatar()


const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hello React"
buscador.appendChild(button);

button.addEventListener('click',()=>{
    alert("Usuario registrado")
})


// Importancia del return en funciones.

const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Carrito de compras"
buscador.appendChild(button);

estado= false

button.addEventListener('click',()=>{
    if (estado) return alert("El carrito se encuentra lleno")
    return alert("El carrito se encuentra sin productos")
})
// Uso del this

const persona = {
    nombre: "Rotsen",
    saludar: function () {
    setTimeout(() => {
        console.log("Hola, mi nombre es " + this.nombre)
        }, 1000);
    },
}
persona.saludar()
*/

/*

ARREGLOS

 

// Formas de declarar un arreglo.

const friendsUser = ["Daniel", "Danny", "José", "Joel", "Jonathan"]

const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]

const products = ["Play","Tv","Laptop","Celular"]

const followerSocialMedia = [23,56,37,12]

// Spread operator

const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
const namePets = ["Puka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']

// spread operator
const newNames = [...nameFriends,...namePets]
console.log(newNames);


const friendsUser = ["Peter","Juan","Luisa","Anahi","Mateus"]
const products = ["Play","Tv","Laptop","Celular"]
const followerSocialMedia = [23,56,37,12]

console.log("Número de elementos:", friendsUser.length);
console.log("Número de elementos:", products.length);
console.log("Número de elementos:", followerSocialMedia.length);

// Formas de iterar un arreglo

const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// primera forma de iterar sobre los elementos de un arreglo 
for (let i=0 ; i<friends.length ; i++){
    console.log(friends[i]);
}

// segunda forma de iterar sobre los elementos de un arreglo 
friends.forEach((e,i)=>console.log(`${i} - ${e}`))


// tercera forma de iterar sobre los elementos de un arreglo 
const newFriends= friends.map((e)=> `Hola ${e}`)
console.log(friends);
console.log(newFriends);
// En conclusión (map) no altera el arreglo original


const user =[
    {
        name:"Byron",
        lastName:"Loarte",
        age:34
    },
    {
        name:"Billy",
        lastName:"Strick",
        age:30
    }
]

user.forEach(u=>console.log(`${u.name} - ${u.age}`))

// Método push y unshift.

const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
const skills = ["frontend","backend"]
const nickname ="Byrontosh"

// Agrega al final del arreglo
profileUser.push(skills)
// Agregar al inicio del arreglo
profileUser.unshift(nickname)
console.log(profileUser);
// Método pop y shift.

const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]

// Elimina el elemento del final del arreglo
profileUser.pop(profileUser)
// Elimina el elemento del inicio del arreglo
profileUser.shift(profileUser)
console.log(profileUser);

// Método find.

const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// método find
const friendOne = friends.find((e)=>e==="Luisa")
console.log(friendOne);

const friendTwo = friends.find((e)=>e==="Luisa123")
console.log(friendTwo);


// Método findIndex.

const friends = ["Peter","Juan","Luisa","Anahi","Mateus"]

// método findIndex
const encontrar = friends.findIndex((f)=>f==="Toshi")
console.log(encontrar)

// Método filter.
const friends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
// método filter
const newfriendsOne = friends.filter((e)=>e.startsWith('P'))
const newfriendTwo = friends.filter((e)=>e!='Pablo')
console.log(newfriendsOne);
console.log(newfriendTwo);

// Método concat.

const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
const namePets = ["Puka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']


// método concat
const newNames = nameFriends.concat(namePets)
console.log(newNames);

// Método includes.

// Funciona únicamente con arreglos de un solo valor
const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]

console.log(profileUser.includes(34))
console.log(profileUser.includes(['frontend']))

// Método some

// Funciona para arreglos de un solo valor y arreglo de objetos

const friends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
const users =[
    {
        name:"Byron",
        lastName:"Loarte",
        age:34
    },
    {
        name:"Billy",
        lastName:"Strick",
        age:30
    }
]
const existe = users.some(u=>u.name==="Byron")
console.log(existe)
const verifica = friends.some(f=>f==="Byron")
console.log(verifica)

// Método every.

const carritoCompras = [
    {   product: "phone",
        qty: 1,
        price: 500
    },
    {   product: "Screen Protector",
        qty: 1,
        price: 10,
    },
    {
        product: "Memory Card",
        qty: 2,
        price: 20,
    }
]
// Todos los elementos deben cumplir la condición
const result = carritoCompras.every(e=>e.price>=500)
console.log(result);
//  Al menos un elemento debe cumplir la condición
const response = carritoCompras.some(e=>e.price>=500)
console.log(response);

// Método reverse.

const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
console.log(profileUser.reverse())

// Método sort

const profileUser= ["Byron","Loarte",34,true,{ciudad:"quito"}]
console.log(profileUser.sort())

//  Método reduce.

const estudiantes = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

const carritoCompras = [
    {   product: "phone",
        qty: 1,
        price: 500
    },
    {   product: "Screen Protector",
        qty: 1,
        price: 10,
    },
    {
        product: "Memory Card",
        qty: 2,
        price: 20,
    }
]


const resultado = estudiantes.reduce((pre, act) => pre + act.age, 0);
console.log("Edad de los estudiantes: ",resultado);

const totalProductos = carritoCompras.reduce((pre,act)=>pre+act.qty,0)
console.log("Total de productos: ",totalProductos);

const totalPagar = carritoCompras.reduce((pre,act)=>pre+act.price,0)
console.log("Total a pagar con IVA: ",totalPagar+(totalPagar*0.12))

// Destructuración de arreglos 

const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]

const [name,lastname,age,active,address,skills] = dataNewUser

console.log(name)
console.log(lastname)
console.log(age)
console.log(active)
console.log(address)
console.log(skills)

// Saltar el valor en un arreglo
const [tomate, , zanahoria] = ['🍅', '🍄', '🥕']
console.log(tomate)
console.log(zanahoria)

// Desestructurando un arreglo anidado
const frutas = ['🍈', '🥕', '🍌', '🍉', ['🍅', '🍄', '🍍']]
const market = frutas[4]
const pineapple = market[2]
console.log(pineapple);
*/

// Sintaxis Rest en arreglos 

const [tomate, hongo, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

console.log(tomate)
console.log(hongo)
console.log(rest)