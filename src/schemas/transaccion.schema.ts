import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaccion {
  @Prop({ required: true })
  cuentaOrigen: string;

  @Prop({ required: true })
  cuentaDestino: string;

  @Prop({ required: true })
  monto: number;

  @Prop({ default: Date.now })
  fecha: Date;
}

export type TransaccionDocument = Transaccion & Document;
export const TransaccionSchema = SchemaFactory.createForClass(Transaccion);
