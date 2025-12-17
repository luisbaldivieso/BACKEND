import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cuenta {
  @Prop({ required: true })
  usuarioId: string;

  @Prop({ required: true, unique: true })
  numeroCuenta: string;

  @Prop({ default: 0 })
  saldo: number;
}

export type CuentaDocument = Cuenta & Document;
export const CuentaSchema = SchemaFactory.createForClass(Cuenta);
