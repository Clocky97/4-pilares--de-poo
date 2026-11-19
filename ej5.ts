class Persona {
  nombre: string;
  private readonly dni: string;
  private _edad: number;
  private _email: string;

  constructor(
    nombre: string,
    dni: string,
    edad: number,
    email: string,
  ) {
    this.nombre = nombre;
    this.dni = dni;
    this._edad = 0;
    this._email = "";
    this.edad = edad;
    this.email = email;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (!Number.isFinite(valor) || valor < 0 || valor > 120) {
      throw new Error("La edad debe estar entre 0 y 120.");
    }

    this._edad = valor;
  }

  get email(): string {
    return this._email;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email debe contener @.");
    }

    this._email = valor;
  }

  get esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  get datosPublicos(): string {
    return `${this.nombre} — mayor de edad: ${this.esMayorDeEdad}`;
  }
}

const persona = new Persona("Sofía Pérez", "30123456", 20, "sofia@example.com");
console.log(persona.datosPublicos);
persona.edad = 17;
console.log(`¿Es mayor de edad? ${persona.esMayorDeEdad}`);
console.log(`Email: ${persona.email}`);