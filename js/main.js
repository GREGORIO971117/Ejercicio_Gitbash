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

    event.preventDefault();
    console.log("Boton presionado por puto");
})




