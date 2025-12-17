import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from '../schemas/usuario.schema';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>) {}

  async login(correo: string, password: string) {
    const usuario = await this.usuarioModel.findOne({ correo });
    if (!usuario) throw new BadRequestException('Usuario no encontrado');

    // Validación simple sin encriptación
    if (usuario.password !== password) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    return usuario; // Devuelve el usuario tal cual
  }

  async crearUsuario(correo: string, password: string, tipo_usuario: string = 'usuario') {
    const nuevo = new this.usuarioModel({ correo, password, tipo_usuario, activo: true });
    return nuevo.save();
  }
}
