let lista=document.getElementsByTagName("ul");
let Nombre=prompt("Ingresa tu nombre:");
let elementos=document.getElementsByClassName("list-group-item");
let otroElemento=document.querySelector("ul>li"); //va a traer el primer elemento que regrese de esos
let btnMostrar=document.getElementById("btnMostrar");
let RFC=document.getElementById("RFC");
let telefono=document.getElementById("telefono");
let CURP=document.getElementById("CURP");

console.log(document.getElementById("encabezado"));
encabezado.innerText="Gregorio Galindo 2025";
document.getElementById("subEncabezado");
subEncabezado.innerText="Miserable Michel";

document.getElementById("nombre");
nombre.innerText=`${Nombre}`;

console.log(lista.length);
console.log(lista.item(1));

console.log(elementos.item(2));

console.log(otroElemento);

btnMostrar.addEventListener("click",function (event) {

    event.preventDefault();//se hace que el evento no hafa para lo que esta hecho se cancelan los atributos.

    let element=document.createElement("li");//se agrega la etiqueta li
    element.innerText="Another item";//es el texto que va a gregar
    element.classList.add("list-group-item");//se agrega una clase al elemento

    let element2=element.cloneNode(true);
    let element3=element.cloneNode(true);
    let element4=element.cloneNode(true);

    lista.item(1).before(element);
    lista.item(1).after(element2);
    lista.item(1).insertAdjacentElement("afterbegin",element3);
    lista.item(1).insertAdjacentElement("afterend",element4);
    lista.item(1).insertAdjacentElement("beforebegin",element4);
    lista.item(1).insertAdjacentElement("beforeend",element4);
    lista.item(0).insertAdjacentHTML("afterend",`${Nombre}`);

    

    //Prepend es el lugar donde se va a colocar el nuevo elemento en este caso afuera

    console.log("Boton presionado");
})

function UpperCase(event) {
    event.preventDefault();//
    event.target.value=event.target.value.trim().toUpperCase();//
    
}

window.addEventListener("load",function (event) {
    console.log("La pagina se ha cargado correctamente");
});

//blur es cuando se pierde el foco de un elemento
RFC.addEventListener("blur",UpperCase);
telefono.addEventListener("blur",function (event) {
    event.preventDefault();//se
    telefono.value=telefono.value.trim().slice(0,10);//
});

CURP.addEventListener("blur",UpperCase);//
    
/*En conclusion este ejercicio es para hacer notar que
los lenguajes de programacion estan basados en el CRUD
Create
Rename
Update
Delete
*/
