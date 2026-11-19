class Producto {
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;

  constructor(
    nombre: string,
    precio: number,
    categoria: string,
    stock: number,
  ) {
    if (precio < 0 || stock < 0) {
      throw new Error("El precio y el stock no pueden ser negativos.");
    }

    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  describir(): string {
    return `${this.nombre} (${this.categoria}): $${this.precio} — ${this.stock} unidades`;
  }

  hayStock(cantidad: number): boolean {
    return Number.isInteger(cantidad) && cantidad > 0 && this.stock >= cantidad;
  }

  venderUnidades(cantidad: number): void {
    if (!this.hayStock(cantidad)) {
      throw new Error(`No hay stock suficiente para vender ${cantidad} unidades.`);
    }

    this.stock -= cantidad;
  }

  aplicarDescuento(porcentaje: number): number {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("El descuento debe estar entre 0 y 100.");
    }

    return this.precio * (1 - porcentaje / 100);
  }
}

const teclado = new Producto("Teclado", 10000, "electrónica", 5);
console.log(teclado.describir());
console.log(`¿Hay 3 unidades? ${teclado.hayStock(3)}`);
teclado.venderUnidades(3);
console.log(`Precio con 10% de descuento: $${teclado.aplicarDescuento(10)}`);
console.log(teclado.describir());