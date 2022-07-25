//FUNCION QUE SE EJECUTA CUANDO SE CARGA EL DOM
$(document).ready(function () {
    if("CARRITO" in localStorage){
        const arrayLiterales = JSON.parse(localStorage.getItem("CARRITO"));
        for (const literal of arrayLiterales) {
            carrito.push(new Producto(literal.id, literal.nombre, literal.precio, literal.categoria, literal.cantidad));
        }
        //console.log(carrito);
        carritoUI(carrito);
    }
    $(".dropdown-menu").click(function (e) { 
        e.stopPropagation();
    });
});
//FUNCION QUE SE EJECUTA CUANDO SE CARGA TODA LAS IMAGENES DE LA APLICACION
window.addEventListener('load',()=>{
    //ELIMINAR ELEMENTO DEL DOM
    $('#indicadorCarga').remove();
    //MOSTRAR ELEMENTO CON UN FADE
    $('#productosContenedor').fadeIn("slow");
});


//INSTANCIAR OBJETOS Y ASOCIAR A ARRAY GLOBAL


const producto1 = new Producto (1,"top", 800, "rojo", "data:image/jpeg;base64,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", categorias[1],1 );
const producto2 = new Producto (2,"conjunto", 1200, "negro", "https://m.media-amazon.com/images/I/41uWXKuojyL.jpg", categorias[1],1);
const producto3 = new Producto (3,"conjunto", 1200, "blanco", "https://image.freepik.com/foto-gratis/impresionante-joven-delgada-ropa-blanca-realiza-pole-dance_8353-7722.jpg", categorias[1],1);
const producto4 = new Producto (4,"conjunto", 1200, "rojo", "https://m.media-amazon.com/images/I/319fye6ZTzL.jpg", categorias[1],categorias[2], 1);
const producto5 = new Producto (5,"arnes", 1000, "negro", "https://ae01.alicdn.com/kf/HTB1cTHISFXXXXa3XVXXq6xXFXXXe/Arn-s-de-liguero-de-Bondage-medias-de-cintur-n-traje-de-cuerpo-arn-s-negro.jpg_640x640.jpg",categorias[2],1);
const producto6 = new Producto (6,"addherence", 700, "  ", "https://http2.mlstatic.com/D_NQ_NP_956281-MLA32587665804_102019-O.jpg",1);

//implementacion de json
const enJSON1 = JSON.stringify (producto1);
const enJSON2 = JSON.stringify (producto2);
const enJSON3 = JSON.stringify (producto3);
const enJSON4 = JSON.stringify (producto4);
const enJSON5 = JSON.stringify (producto5);
const enJSON6 = JSON.stringify (producto6);

//alaceno datos en el storage
localStorage.setItem ("producto1", enJSON1);
localStorage.setItem ("producto2", enJSON2);
localStorage.setItem ("producto3", enJSON3);
localStorage.setItem ("producto4", enJSON4);
localStorage.setItem ("producto5", enJSON5);
localStorage.setItem ("producto6", enJSON6);

//recupero datos del storage
let producto01 = localStorage.getItem ('producto1');
let producto02 = localStorage.getItem ('producto2');
let producto03 = localStorage.getItem ('producto3');
let producto04 = localStorage.getItem ('producto4');
let producto05 = localStorage.getItem ('producto5');
let producto06 = localStorage.getItem ('producto6');

console.log (typeof producto1);
console.log (typeof producto2);
console.log (typeof producto3);
console.log (typeof producto4);
console.log (typeof producto5);
console.log (typeof producto6);

productos.push (producto1);
productos.push (producto2);
productos.push (producto3);
productos.push (producto4);
productos.push (producto5);
productos.push (producto6);



//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
productosUI(productos, '#productosContenedor');
//DEFINIR EVENTOS SOBRE LA INTEFAZ GENERADA (LLEVAR A FUNCION productosUI SI QUEREMOS QUE FUNCIONE CON EL FILTRO)
//$('.btn-compra').on("click", comprarProducto);
//GENERAR OPCIONES PARA FILTRAR POR CATEGORIA
selectUI(categorias,"#filtroCategorias");
//DEFINIR EVENTOS SOBRE EL SELECT GENERADO
$('#filtroCategorias').change(function (e) { 
    //OBTENEMOS EL NUEVO VALOR DEL SELECT
    const value = this.value;
    //SOLUCION CON ANIMACIONES
    $('#productosContenedor').fadeOut(600,function(){
        //EL FILTRO SE REALIZA UNA VEZ OCULTO EL CONTENEDOR
        if(value == 'TODOS'){
            productosUI(productos, '#productosContenedor');
        }else{
            const filtrados = productos.filter(producto => producto.categoria == value);
            productosUI(filtrados, '#productosContenedor');
        }
        //MOSTRAR UNA VEZ GENERADOS LOS PRODUCTOS
        $('#productosContenedor').fadeIn();
    });
});
//DEFINIR EVENTOS SOBRE EL INPUT DE BUSCADA -> USA keyup cuando la tecla se suelta
$("#busquedaProducto").keyup(function (e) { 
    const criterio = this.value.toUpperCase();
    console.log(criterio);
    if(criterio != ""){
                                                        //el resulado de esto es verdadero
        const encontrados = productos.filter(p =>       p.nombre.includes(criterio.toUpperCase()) 
                                                    || p.categoria.includes(criterio.toUpperCase()));
        productosUI(encontrados, '#productosContenedor');
    }
});
//DEFINIR EVENTOS SOMBRE EL INPUT DE FILTRO DE PRECIO
$(".inputPrecio").change(function (e) { 
    const min = $("#minProducto").val();
    const max = $("#maxProducto").val();
    if((min > 0) && (max > 0)){
                                                 //el resulado de esto es verdadero
        const encontrados = productos.filter(p => p.precio >= min && p.precio <= max);
        productosUI(encontrados, '#productosContenedor');
    }
});
