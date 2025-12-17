import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuarios') // 👈 esto define el prefijo /usuarios
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('login') // 👈 esto define /usuarios/login
  async login(@Body() body: any) {
    const { correo, password } = body;
    const usuario = await this.usuarioService.login(correo, password);
    return usuario;
  }
}
