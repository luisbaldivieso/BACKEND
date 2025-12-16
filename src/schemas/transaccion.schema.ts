import { Schema } from 'mongoose';

export const TransaccionSchema = new Schema({
  cuentaOrigen: { type: Schema.Types.ObjectId, ref: 'Cuenta', required: true },
  cuentaDestino: { type: Schema.Types.ObjectId, ref: 'Cuenta', required: true },
  monto: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
}, { timestamps: true });
