import { Schema } from 'mongoose';

export const CuentaSchema = new Schema({
  numero: { type: String, required: true, unique: true },
  saldo: { type: Number, required: true, default: 0 },
  propietario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
}, { timestamps: true });
