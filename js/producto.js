//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre,precio,color,_img,categoria, cantidad) {
            this.id = parseInt(id);
            this.nombre = nombre.toUpperCase();
            this.precio = parseFloat(precio);
            this.color = color;
            this._img = _img;
            this.categoria = categoria;
            this.cantidad = parseInt(cantidad);
    }
    agregarCantidad(valor) {
        this.cantidad += valor;
    }

    subtotal() {
        return this.cantidad * this.precio;
    }
}