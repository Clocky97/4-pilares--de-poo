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

class EmpleadoPorHoras extends Empleado {
  horasTrabajadas: number;
  valorHora: number;

  constructor(
    nombre: string,
    antiguedad: number,
    horasTrabajadas: number,
    valorHora: number,
  ) {
    super(nombre, antiguedad);
    this.horasTrabajadas = horasTrabajadas;
    this.valorHora = valorHora;
  }

  override calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHora;
  }
}

class EmpleadoPorComision extends Empleado {
  ventasDelMes: number;
  porcentajeComision: number;

  constructor(
    nombre: string,
    antiguedad: number,
    ventasDelMes: number,
    porcentajeComision: number,
  ) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelMes;
    this.porcentajeComision = porcentajeComision;
  }

  override calcularSueldo(): number {
    return this.ventasDelMes * this.porcentajeComision;
  }
}

function calcularNomina(empleados: Empleado[]): number {
  return empleados.reduce((total, empleado) => total + empleado.calcularSueldo(), 0);
}

const empleados: Empleado[] = [
  new EmpleadoFijo("Juan", 3, 100000),
  new EmpleadoPorHoras("Ana", 2, 120, 1500),
  new EmpleadoPorComision("Marcos", 5, 800000, 0.08),
];

for (const empleado of empleados) {
  console.log(empleado.describir());
  console.log(`Sueldo calculado: $${empleado.calcularSueldo()}`);
}

console.log(`Total de nómina: $${calcularNomina(empleados)}`);