import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from '../schemas/usuario.schema';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel('Usuario') private usuarioModel: Model<Usuario>,
  ) {}

  async crearUsuario(correo: string, password: string) {
    if (!correo || !password) {
      throw new BadRequestException('Datos incompletos');
    }

    const existe = await this.usuarioModel.findOne({ correo });
    if (existe) {
      throw new BadRequestException('Usuario ya existe');
    }

    // Guardar password en texto plano
    const usuario = new this.usuarioModel({
      correo,
      password,
    });

    return usuario.save();
  }

  async login(correo: string, password: string) {
    const usuario = await this.usuarioModel.findOne({ correo });
    if (!usuario) {
      throw new BadRequestException('Usuario no encontrado');
    }

    // Compara directamente con texto plano
    if (usuario.password !== password) {
      throw new BadRequestException('Password incorrecto');
    }

    const { password: _, ...usuarioSinPass } = usuario.toObject();
    return usuarioSinPass;
  }

  async listarUsuarios() {
    return this.usuarioModel.find().select('-password');
  }
}
