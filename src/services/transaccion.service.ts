import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaccion } from '../schemas/transaccion.schema';
import { Cuenta } from '../schemas/cuenta.schema';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectModel('Transaccion') private transaccionModel: Model<Transaccion>,
    @InjectModel('Cuenta') private cuentaModel: Model<Cuenta>,
  ) {}

  async transferir(cuentaOrigen: string, cuentaDestino: string, monto: number) {
    const origen = await this.cuentaModel.findOne({ numeroCuenta: cuentaOrigen });
    const destino = await this.cuentaModel.findOne({ numeroCuenta: cuentaDestino });

    if (!origen || !destino) {
      throw new BadRequestException('Cuenta no encontrada');
    }

    if (origen.saldo < monto) {
      throw new BadRequestException('Saldo insuficiente');
    }

    origen.saldo -= monto;
    destino.saldo += monto;

    await origen.save();
    await destino.save();

    const transaccion = new this.transaccionModel({
      cuentaOrigen,
      cuentaDestino,
      monto,
    });

    return transaccion.save();
  }

  async historial() {
    return this.transaccionModel.find();
  }
}
