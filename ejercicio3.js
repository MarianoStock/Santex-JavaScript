/* EJERCICIO 3
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
*/

class Producto {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Carrito12 {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }
}




/*3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades)*/

class Carrito {
  constructor(montoTotal,[]) {
    this.montoTotal = montoTotal;
    this.productos = [];
  } 

    agregarProducto(nombre, precio, unidades){
    this.montoTotal= this.montoTotal+(precio*unidades),
    this.productos.push(nombre);
    } 
}

let Carrito2 = new Carrito(0, []);
Carrito2.agregarProducto('Leche', 10, 1)


Carrito2.agregarProducto('Azucar', 2, 5);

Carrito2.agregarProducto('Huevo', 10, 2);

/*3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
*/

class Carrito4 {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(nombre, precio, unidades) {
    const productoExistente = this.productos.find(
      (producto) => producto.nombre === nombre
    );

    if (productoExistente) {
      console.log(
        `Ya existe ${nombre} con ${productoExistente.unidades} unidades.`
      );
    } else {
      const producto = {
        nombre,
        precio,
        unidades,
      };
      this.productos.push(producto);
      this.montoTotal += precio * unidades;
    }
  }
  
};

let carrito5 = new Carrito4 ();
carrito5.agregarProducto('Azucar', 2, 10)
carrito5.agregarProducto('Azucar', 5, 2)
console.log(carrito5);


