// colocar año automático
const anio = document.getElementById("anio");

anio.textContent = new Date().getFullYear();


// mensaje bienvenida
const mensaje = document.createElement("div");

mensaje.textContent = "Bienvenido a AgroCasanare Digital";

mensaje.style.background = "#639827db";
mensaje.style.color = "white";
mensaje.style.padding = "12px";
mensaje.style.textAlign = "center";

document.body.prepend(mensaje);


// ocultar mensaje
setTimeout(function(){

    mensaje.style.display = "none";

}, 5000);



// menu hamburguesa
const botonMenu = document.getElementById("botonMenu");

const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function(){

    menu.classList.toggle("mostrar");

});



// formulario cotizador
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();


    // capturar datos
    let nombre = document.getElementById("nombre").value;

    let producto = document.getElementById("producto");

    let cantidad = document.getElementById("cantidad").value;


    // mensajes
    let error = document.getElementById("error");

    let resultado = document.getElementById("resultado");


    // limpiar
    error.innerHTML = "";

    resultado.innerHTML = "";


    // validar nombre
    if(nombre.trim() === ""){

        error.innerHTML = "Ingrese el nombre.";

        return;
    }


    // validar cantidad
    if(cantidad <= 0 || cantidad === ""){

        error.innerHTML = "Ingrese una cantidad válida.";

        return;
    }


    // obtener datos producto
    let nombreProducto =
    producto.options[producto.selectedIndex].text;

    let precio =
    parseFloat(producto.value);


    // operaciones
    let subtotal =
    precio * cantidad;

    let iva =
    subtotal * 0.19;

    let total =
    subtotal + iva;


    // formato colombiano
    let totalFinal =
    total.toLocaleString("es-CO",{

        style: "currency",
        currency: "COP"

    });


    // mostrar resultado
    resultado.innerHTML = `

        <h3>Resumen del pedido</h3>

        <p>Cliente: ${nombre}</p>

        <p>Producto: ${nombreProducto}</p>

        <p>Cantidad: ${cantidad}</p>

        <p>Total con IVA: ${totalFinal}</p>

    `;
// MENU RESPONSIVE
const botonMenu = document.getElementById("botonMenu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
});


// AÑO AUTOMÁTICO
document.getElementById("anio").textContent = new Date().getFullYear();


// COTIZADOR
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    // CAPTURAR DATOS
    const nombre = document.getElementById("nombre").value;
    const producto = document.getElementById("producto");
    const cantidad = document.getElementById("cantidad").value;

    // MENSAJES
    const error = document.getElementById("error");
    const resultado = document.getElementById("resultado");

    // LIMPIAR MENSAJES
    error.innerHTML = "";
    resultado.innerHTML = "";

    // VALIDACIÓN
    if (
        nombre.trim() === "" ||
        producto.value === "" ||
        cantidad === ""
    ) {

        error.innerHTML = "Complete todos los campos.";
        return;
    }

    // CALCULAR
    const precio = Number(producto.value);
    const total = precio * Number(cantidad);

    // MOSTRAR RESULTADO
    resultado.innerHTML = `
        <h3>Resumen del pedido</h3>
        <p><strong>Cliente:</strong> ${nombre}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Total:</strong> $${total.toLocaleString()}</p>
    `;
});
});