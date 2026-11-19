class Empleado {
  protected nombre: string;
  protected antiguedad: number;

  constructor(
    nombre: string,
    antiguedad: number,
  ) {
    if (antiguedad < 0) {
      throw new Error("La antigüedad no puede ser negativa.");
    }

    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }

  calcularSueldo(): number {
    return 0;
  }

  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo()}`;
  }
}

class EmpleadoFijo extends Empleado {
  sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    if (sueldoBase < 0) {
      throw new Error("El sueldo base no puede ser negativo.");
    }

    this.sueldoBase = sueldoBase;
  }

  override calcularSueldo(): number {
    return this.sueldoBase + this.sueldoBase * 0.02 * this.antiguedad;
  }
}

const empleado = new EmpleadoFijo("Juan", 3, 100000);
console.log(empleado.describir());