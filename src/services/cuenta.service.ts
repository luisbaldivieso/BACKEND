import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cuenta } from '../schemas/cuenta.schema';

@Injectable()
export class CuentaService {
  constructor(
    @InjectModel('Cuenta') private cuentaModel: Model<Cuenta>,
  ) {}

  async crearCuenta(usuarioId: string, numeroCuenta: string) {
    if (!usuarioId || !numeroCuenta) {
      throw new BadRequestException('Datos incompletos');
    }

    const existe = await this.cuentaModel.findOne({ numeroCuenta });
    if (existe) {
      throw new BadRequestException('Cuenta ya existe');
    }

    const cuenta = new this.cuentaModel({
      usuarioId,
      numeroCuenta,
      saldo: 0,
    });

    return cuenta.save();
  }

  async obtenerCuentasPorUsuario(usuarioId: string) {
    return this.cuentaModel.find({ usuarioId });
  }
}
