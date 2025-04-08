let lista=document.getElementsByTagName("ul");
let Nombre=prompt("Ingresa tu nombre:");
let elementos=document.getElementsByClassName("list-group-item");
let otroElemento=document.querySelector("ul>li"); //va a traer el primer elemento que regrese de esos
let btnMostrar=document.getElementById("btnMostrar");

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

    lista.item(0).before(element2);
    lista.item(0).after(element);//Prepend es el lugar donde se va a colocar el nuevo elemento en este caso afuera

    console.log("Boton presionado por puto");
})




