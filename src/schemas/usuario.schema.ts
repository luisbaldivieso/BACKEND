import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });
