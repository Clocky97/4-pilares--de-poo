class CuentaBancaria {
  readonly titular: string;
  private saldo: number;
  private historial: string[] = [];

  constructor(
    titular: string,
    montoInicial: number,
  ) {
    if (!Number.isFinite(montoInicial) || montoInicial < 0) {
      throw new Error("El monto inicial debe ser un número no negativo.");
    }

  this.titular = titular;
    this.saldo = montoInicial;
  }

  depositar(monto: number): void {
    if (!Number.isFinite(monto) || monto <= 0) {
      throw new Error("El depósito debe ser un monto mayor que cero.");
    }

    this.saldo += monto;
    this.historial.push(`depósito: +${monto}`);
  }

  retirar(monto: number): void {
    if (!Number.isFinite(monto) || monto <= 0) {
      throw new Error("El retiro debe ser un monto mayor que cero.");
    }
    if (monto > this.saldo) {
      throw new Error("Saldo insuficiente para realizar el retiro.");
    }

    this.saldo -= monto;
    this.historial.push(`retiro: -${monto}`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  obtenerHistorial(): string[] {
    return [...this.historial];
  }
}

const cuenta = new CuentaBancaria("Lucía Gómez", 5000);
cuenta.depositar(2000);
cuenta.retirar(750);
console.log(`Titular: ${cuenta.titular}`);
console.log(`Saldo: $${cuenta.consultarSaldo()}`);
console.log("Movimientos:", cuenta.obtenerHistorial());