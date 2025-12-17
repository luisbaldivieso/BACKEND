import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Usuario {
  @Prop({ required: true, unique: true })
  correo: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: true })
  activo: boolean;
}

export type UsuarioDocument = Usuario & Document;
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
